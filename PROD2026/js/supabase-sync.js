/* ═══════════════════════════════════════════════════════════════════════
       PROD2026 — SUPABASE LIVE SYNC ENGINE
       Every save on any PC instantly appears on all other PCs.
       Tables synced live:
         jo_history   ← bidirectional realtime
         jos_data     ← bidirectional realtime (schedule calendar)
         worker_logs  ← bidirectional realtime (labor entries)
         jo_queue     ← scanner → master, consumed on arrival
    ═══════════════════════════════════════════════════════════════════════ */

    var SUPABASE_URL = "https://neoetgikaeibumdvjpkf.supabase.co";
    var SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lb2V0Z2lrYWVpYnVtZHZqcGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5Mzk3NDUsImV4cCI6MjA5MzUxNTc0NX0.WChYBG2SYEK1fnnGeEPvGXotwdFyt-gpfvKilwDxK9g";

    var _sb              = null;   // supabase client singleton
    // Safe LED setter — works even before the full setSbLed function loads
    function setSbLed(color) {
      var colors = { green: '#22c55e', red: '#ef4444', yellow: '#f59e0b' };
      var c2 = colors[color] || colors.yellow;
      var led = document.getElementById('sb-status-led');
      var dot = document.getElementById('fb-sync-dot');
      if (led) { led.style.background = c2; led.style.boxShadow = '0 0 8px ' + c2; }
      if (dot) { dot.style.background = c2; }
    }
    var _sbRealtimeSubs  = [];     // active realtime channel handles
    var _sbPauseHist     = false;  // prevents echo when WE pushed history
    var _sbPauseSched    = false;  // prevents echo when WE pushed schedule
    var _sbPauseLogs     = false;  // prevents echo when WE pushed worker logs
    var _sbQueueSeen     = {};     // dedup jo_queue rows already processed
    var _sbReady         = false;  // true after first fetch completes

    /* ─── Singleton client ─────────────────────────────────────────── */
    function sbClient() {
      if (!_sb) {
        // UMD bundle exposes window.supabase = { createClient }
        var factory = (window.supabase && window.supabase.createClient)
          ? window.supabase.createClient
          : (typeof createClient !== 'undefined' ? createClient : null);
        if (!factory) { console.error('[SB] supabase.createClient not found — CDN may not have loaded'); return null; }
        _sb = factory(SUPABASE_URL, SUPABASE_KEY, {
          auth: { persistSession: false },
          realtime: { params: { eventsPerSecond: 10 } }
        });
      }
      return _sb;
    }

    /* ═══════════════════════════════════════════════════════════════
       PUSH  (local → Supabase)
    ═══════════════════════════════════════════════════════════════ */

    /* Push full JO History array */
    async function fbPushHistory() {
      if (_sbPauseHist) return;
      try {
        var rows = (typeof joHistory !== 'undefined' ? joHistory : []).map(function(h) {
          return { jo: h.jo, date: h.date, ts: h.ts, item: h.item||'',
                   color: h.color||'', pieces: h.pieces||'', total: h.total||'',
                   docdate: h.docdate||'', status: h.status||'pending',
                   updated_at: new Date().toISOString() };
        });
        if (!rows.length) return;
        await sbClient().from('jo_history').upsert(rows, { onConflict: 'jo' });
      } catch(e) { console.warn('[SB] pushHistory:', e); }
    }

    /* Push full schedule (josData) — upsert every date key */
    async function fbPushSchedule() {
      if (_sbPauseSched) return;
      try {
        var data = (typeof josData !== 'undefined') ? josData : {};
        var keys = Object.keys(data);
        if (!keys.length) return;
        var rows = keys.map(function(dk) {
          return { date_key: dk, jos: data[dk], updated_at: new Date().toISOString() };
        });
        await sbClient().from('jos_data').upsert(rows, { onConflict: 'date_key' });
      } catch(e) { console.warn('[SB] pushSchedule:', e); }
    }

    /* Push all worker logs using uid as conflict key */
    async function sbPushLogs() {
      if (_sbPauseLogs) return;
      try {
        var allLogs = (typeof logs !== 'undefined') ? logs : [];
        if (!allLogs.length) return;
        var rows = allLogs.filter(function(l){ return l && l.uid; }).map(function(l) {
          return {
            uid: String(l.uid),
            worker: l.name||'', jo_number: l.jo||'', process: l.process||'',
            stage: l.stage||'', time_in: l.in||null, time_out: l.out||null,
            hrs: parseFloat(l.hrs)||0, pay: parseFloat(l.pay)||0,
            eff: parseFloat(l.eff)||0, status: l.status||'PASS',
            date: l.date||new Date().toLocaleDateString('sv-SE')
          };
        });
        if (!rows.length) return;
        await sbClient().from('worker_logs').upsert(rows, { onConflict: 'uid' });
      } catch(e) { console.warn('[SB] pushLogs:', e); }
    }

    /* saveHistory — called everywhere a history change happens */
    function saveHistory() {
      localStorage.setItem('jo_history_v8', JSON.stringify(joHistory));
      fbPushHistory();
    }

    /* ═══════════════════════════════════════════════════════════════
       FETCH  (Supabase → local)
    ═══════════════════════════════════════════════════════════════ */

    async function sbFetchHistory() {
      try {
        var _sbc = sbClient(); if (!_sbc) return;
        var res = await _sbc.from('jo_history').select('*').order('ts', { ascending: false, nullsFirst: false }).limit(200);
        if (res.error) {
          var msg = res.error.message || res.error.details || JSON.stringify(res.error);
          if (typeof _sbPollErrors !== 'undefined') _sbPollErrors++;
          if (!window._sbLastHistErr || window._sbLastHistErr !== msg) {
            console.warn('[SB] fetchHistory error:', msg, '| code:', res.error.code, '| hint:', res.error.hint);
            window._sbLastHistErr = msg;
          }
          setSbLed('red');
          return;
        }
        _sbPauseHist = true;
        joHistory = res.data || [];
        localStorage.setItem('jo_history_v8', JSON.stringify(joHistory));
        if (typeof renderJOHistory === 'function') renderJOHistory();
        _sbPauseHist = false;
      } catch(e) { console.warn('[SB] fetchHistory exception:', e && e.message ? e.message : e); }
    }

    async function sbFetchSchedule() {
      try {
        var _sbc = sbClient(); if (!_sbc) return;
        var res = await _sbc.from('jos_data').select('*');
        if (res.error) {
          var msg = res.error.message || res.error.details || JSON.stringify(res.error);
          if (typeof _sbPollErrors !== 'undefined') _sbPollErrors++;
          if (!window._sbLastSchedErr || window._sbLastSchedErr !== msg) {
            console.warn('[SB] fetchSchedule error:', msg, '| code:', res.error.code, '| hint:', res.error.hint);
            window._sbLastSchedErr = msg;
          }
          setSbLed('red');
          return;
        }
        if (!res.data) return;
        _sbPauseSched = true;
        if (typeof josData !== 'undefined') {
          res.data.forEach(function(row) { josData[row.date_key] = row.jos; });
          localStorage.setItem('jos_schedule_v1', JSON.stringify(josData));
          var ov = document.getElementById('joSchedulerOverlay');
          if (ov && ov.style.display === 'flex' && typeof josRender === 'function') josRender();
        }
        _sbPauseSched = false;
      } catch(e) { console.warn('[SB] fetchSchedule exception:', e && e.message ? e.message : e); }
    }

    async function sbFetchLogs() {
      try {
        var today = new Date().toLocaleDateString('sv-SE');
        var res = await sbClient().from('worker_logs').select('*')
          .eq('date', today).eq('deleted', false).order('created_at', { ascending: true });
        if (res.error || !res.data || !res.data.length) return;
        _sbPauseLogs = true;
        if (typeof logs !== 'undefined') {
          res.data.forEach(function(r) {
            var uid = r.uid || String(r.id);
            var exists = logs.some(function(l) { return String(l.uid) === uid; });
            if (!exists) {
              logs.push({ uid: uid, name: r.worker, jo: r.jo_number,
                process: r.process, stage: r.stage, in: r.time_in, out: r.time_out,
                hrs: r.hrs, pay: r.pay, eff: r.eff, status: r.status, date: r.date });
            }
          });
          localStorage.setItem('logs_v7', JSON.stringify(logs));
          if (typeof renderLaborTable === 'function') renderLaborTable();
          if (typeof renderSideLeaderboard === 'function') renderSideLeaderboard();
        }
        _sbPauseLogs = false;
      } catch(e) { console.warn('[SB] fetchLogs:', e); }
    }

    /* ── Poll jo_queue for incoming JOs from Scanner PC ── */
    async function sbPollQueue() {
      try {
        var res = await sbClient().from('jo_queue').select('*')
          .eq('consumed', false).order('created_at', { ascending: true });
        if (res.error || !res.data || !res.data.length) return;

        for (var i = 0; i < res.data.length; i++) {
          var row = res.data[i];
          var id  = String(row.id);
          if (_sbQueueSeen[id]) continue;
          _sbQueueSeen[id] = true;

          var joNum      = (row.jo_number || '').trim();
          var today      = new Date().toLocaleDateString('sv-SE');
          var targetDate = row.scheduled_date || today;
          var jo = {
            'JO Number': joNum, 'Item Description': row.item_description||'',
            'Color': row.color||'', 'No of Pieces': row.no_of_pieces||'',
            'Total Qty': row.total_qty||'', 'Doc Date': row.doc_date||''
          };

          /* 1 — Add to JO History */
          if (typeof joHistory !== 'undefined') {
            var exists = joHistory.find(function(h) { return h.jo === joNum; });
            if (!exists) {
              joHistory.unshift({ jo: joNum, date: today, ts: Date.now(),
                item: jo['Item Description'], color: jo['Color'],
                pieces: jo['No of Pieces'], total: jo['Total Qty'],
                docdate: jo['Doc Date'], status: 'pending' });
              if (joHistory.length > 200) joHistory = joHistory.slice(0, 200);
              saveHistory();
              if (typeof renderJOHistory === 'function') renderJOHistory();
            }
          }

          /* 2 — Auto-schedule onto calendar */
          if (typeof josData !== 'undefined') {
            if (!josData[targetDate]) josData[targetDate] = [];
            var onCal = josData[targetDate].some(function(e) { return e.jo === joNum; });
            if (!onCal) {
              josData[targetDate].push({
                id: Date.now().toString(36) + Math.random().toString(36).slice(2,5),
                jo: joNum, item: jo['Item Description'], color: jo['Color'],
                pieces: jo['No of Pieces'], totalqty: jo['Total Qty'],
                docdate: jo['Doc Date'], prepby:'', remarks:'', note:'',
                deadline:'', status:'pending', addedAt: new Date().toISOString()
              });
              localStorage.setItem('jos_schedule_v1', JSON.stringify(josData));
              fbPushSchedule();
            }
          }

          /* 3 — Notification banner */
          if (typeof josIncoming !== 'undefined') {
            josIncoming.push(jo);
            if (typeof josIncomingSave === 'function') josIncomingSave();
            var ov = document.getElementById('joSchedulerOverlay');
            if (ov && ov.style.display === 'flex') {
              josIncomingIndex = josIncoming.length - 1;
              if (typeof showIncomingBanner === 'function') showIncomingBanner();
              if (typeof josRender === 'function') josRender();
              if (typeof josToast === 'function') josToast('📥 New JO: ' + joNum, 'ok');
            } else {
              if (typeof showFbNotificationDot === 'function') showFbNotificationDot(josIncoming.length);
            }
          }

          /* 4 — Mark consumed */
          await sbClient().from('jo_queue').update({ consumed: true }).eq('id', row.id);
        }
      } catch(e) { console.warn('[SB] pollQueue:', e); }
    }

    /* ═══════════════════════════════════════════════════════════════
       REALTIME  subscriptions (changes from OTHER PCs arrive here)
    ═══════════════════════════════════════════════════════════════ */

    function startFbListener() {
      if (_sbRealtimeSubs.length) return; // already running
      var sb = sbClient();

      /* jo_history — any INSERT/UPDATE/DELETE on another PC */
      _sbRealtimeSubs.push(
        sb.channel('rt_jo_history')
          .on('postgres_changes', { event: '*', schema: 'public', table: 'jo_history' }, function() {
            if (!_sbPauseHist) sbFetchHistory();
          }).subscribe()
      );

      /* jos_data — schedule changes from another PC */
      _sbRealtimeSubs.push(
        sb.channel('rt_jos_data')
          .on('postgres_changes', { event: '*', schema: 'public', table: 'jos_data' }, function() {
            if (!_sbPauseSched) sbFetchSchedule();
          }).subscribe()
      );

      /* worker_logs — labor entries from another PC */
      _sbRealtimeSubs.push(
        sb.channel('rt_worker_logs')
          .on('postgres_changes', { event: '*', schema: 'public', table: 'worker_logs' }, function() {
            if (!_sbPauseLogs) sbFetchLogs();
          }).subscribe()
      );

      /* jo_queue — new JOs from Scanner PC */
      _sbRealtimeSubs.push(
        sb.channel('rt_jo_queue')
          .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'jo_queue' }, function() {
            sbPollQueue();
          }).subscribe()
      );

      /* Initial fetch — load all cloud data immediately on open */
      Promise.all([sbFetchHistory(), sbFetchSchedule(), sbFetchLogs(), sbPollQueue()])
        .then(function() {
          _sbReady = true;
          updateFbIndicator(true);
          setSbLed('green');
          console.log('[SB] Live sync active ✅');
        });

      /* Fallback poll every 30s for missed realtime events */
      var _sbPollErrors = 0;
      var _sbPollTimer = setInterval(function() {
        if (_sbPollErrors > 5) {
          console.warn('[SB] Too many errors, slowing poll to 2min');
          clearInterval(_sbPollTimer);
          _sbPollTimer = setInterval(function() { sbFetchHistory(); sbFetchSchedule(); sbPollQueue(); }, 120000);
          return;
        }
        sbFetchHistory();
        sbFetchSchedule();
        sbPollQueue();
      }, 30000);
    }

    function stopFbListener() {
      _sbRealtimeSubs.forEach(function(ch) { try { sbClient().removeChannel(ch); } catch(e){} });
      _sbRealtimeSubs = [];
      updateFbIndicator(false);
    }

    function updateFbIndicator(ok) {
      var dot = document.getElementById('fb-sync-dot');
      if (!dot) return;
      dot.title  = ok ? '☁️ Supabase live — syncing across all PCs' : '⚠️ Cloud sync disconnected';
      dot.style.background = ok ? '#22c55e' : '#f59e0b';
    }

    function showFbNotificationDot(count) {
      var btn = document.querySelector('[onclick="openJOScheduler()"]');
      if (!btn) return;
      var badge = btn.querySelector('.fb-count-badge') || (function(){
        var b = document.createElement('span'); b.className = 'fb-count-badge';
        b.style.cssText = 'background:#ef4444;color:#fff;font-size:9px;font-weight:900;padding:2px 5px;border-radius:10px;margin-left:4px;';
        btn.appendChild(b); return b;
      })();
      badge.textContent = count + ' new';
    }

    /* Start on page load */
    window.addEventListener('load', function() {
      setTimeout(startFbListener, 800);
    });