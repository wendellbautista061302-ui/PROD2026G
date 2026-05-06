<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROD2026 MASTER CLOUD</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
    <!-- Supabase SDK — TRUE LIVE CROSS-DEVICE SYNC -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/dist/umd/supabase.min.js"></script>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/supabase-sync.js"></script>

</head>
<body>

<div id="masterModalOverlay">
    <div id="modalContentContainer">

        <!-- SELECTION SCREEN -->
        <div id="selectionView">
            <h1 style="color:#333; margin-bottom:40px;">PRODUCTION MASTER SYSTEM</h1>
            <div>
                <div class="card-choice" onclick="switchToLabor()">⚙️ Labor System</div>
                <div class="card-choice" onclick="switchToMaterials()">📦 Materials System</div>
            </div>
        </div>

        <!-- LABOR VIEW -->
        <div id="laborView">
            <div class="nav-header no-print">
                <button class="btn-nav" style="background:#64748b" onclick="backToMenu()">⬅ BACK</button>
                <button class="btn-nav" style="background:var(--leather)" onclick="toggleAdmin()">⚙️ SETTINGS</button>
                <button class="btn-nav" style="background:var(--accent)" onclick="openStatsWithLock()">📈 WORKER STATS</button>
                <button class="btn-nav" style="background:#0f766e" onclick="openAttendance()">🗓️ ATTENDANCE</button>
                <button class="btn-nav" style="background:#b45309;font-weight:900;" onclick="openJOCostTracker()">💰 J.O. COST</button>
                <button class="btn-nav" style="background:#6d28d9;position:relative;" onclick="openJOScheduler()">📅 J.O. SCHEDULER <span id="fb-sync-dot" title="Cloud sync status" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-left:4px;vertical-align:middle;flex-shrink:0;"></span></button>
                <button class="btn-nav" style="background:var(--info)" onclick="printScreenReport()">🖨️ DAILY REPORT</button>
                <button class="btn-nav" style="background:#7c3aed" onclick="openPrintSettings()">📄 PRINT SETUP</button>
                <button class="btn-nav" style="background:#15803d;font-weight:900;" onclick="exportToCostlive()" title="Save data file — open in COSTLIVE to sync">📤 SYNC TO COSTLIVE</button>
                <button class="btn-nav" style="background:var(--danger)" onclick="resetDay()">🗑️ RESET LIST</button>
                <button class="btn-nav" id="sb-status-btn" style="background:#0ea5e9;font-weight:900;gap:8px;" onclick="openSbStatusModal()" title="View Supabase database connection status">
                  <span id="sb-status-led" style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#f59e0b;flex-shrink:0;box-shadow:0 0 6px #f59e0b;"></span>
                  ☁️ DB STATUS
                </button>
            </div>

            <!-- ══════════════ SUPABASE STATUS MODAL ══════════════ -->
            <!-- ══════════ LIVE SYNC STATUS MODAL ══════════ -->
            <div id="sb-status-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:99999;justify-content:center;align-items:center;backdrop-filter:blur(8px);">
              <div style="background:#0f172a;width:95%;max-width:520px;border-radius:28px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,0.6);font-family:'Segoe UI',sans-serif;border:1px solid rgba(255,255,255,0.08);">

                <!-- Header -->
                <div style="padding:24px 28px 18px;display:flex;justify-content:space-between;align-items:flex-start;">
                  <div>
                    <div style="font-size:11px;font-weight:800;color:#64748b;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">PROD2026 MASTER CLOUD</div>
                    <div style="font-size:22px;font-weight:900;color:#fff;">☁️ Live Sync Status</div>
                  </div>
                  <button onclick="closeSbStatusModal()" style="background:rgba(255,255,255,0.08);border:none;color:#94a3b8;width:36px;height:36px;border-radius:50%;font-size:18px;cursor:pointer;flex-shrink:0;">✕</button>
                </div>

                <!-- MY PC status bar -->
                <div id="sb-mypc-bar" style="margin:0 20px 16px;border-radius:16px;padding:16px 20px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:14px;">
                  <div id="sb-mypc-dot" style="width:14px;height:14px;border-radius:50%;background:#f59e0b;flex-shrink:0;box-shadow:0 0 10px #f59e0b;animation:sbPulse 1.5s infinite;"></div>
                  <div style="flex:1;">
                    <div style="font-size:13px;font-weight:800;color:#fff;" id="sb-mypc-label">Connecting to Supabase…</div>
                    <div style="font-size:11px;color:#64748b;margin-top:2px;" id="sb-mypc-sub">Checking database…</div>
                  </div>
                  <div style="text-align:right;">
                    <div style="font-size:10px;color:#64748b;font-weight:700;text-transform:uppercase;">Ping</div>
                    <div id="sb-ping-val" style="font-size:18px;font-weight:900;color:#0ea5e9;">—</div>
                  </div>
                </div>

                <!-- CONNECTED PCs section -->
                <div style="padding:0 20px 8px;">
                  <div style="font-size:10px;font-weight:900;color:#475569;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;">
                    🖥️ OTHER PCs ONLINE NOW
                  </div>
                  <div id="sb-peers-list" style="display:flex;flex-direction:column;gap:8px;min-height:64px;">
                    <div style="text-align:center;padding:20px;color:#475569;font-size:13px;" id="sb-peers-empty">
                      ⏳ Detecting other PCs…
                    </div>
                  </div>
                </div>

                <!-- Last sync timestamp -->
                <div style="margin:12px 20px;padding:12px 16px;background:rgba(255,255,255,0.04);border-radius:12px;display:flex;justify-content:space-between;align-items:center;">
                  <div style="font-size:11px;color:#475569;font-weight:700;">LAST SYNC</div>
                  <div id="sb-last-sync" style="font-size:12px;color:#94a3b8;font-weight:600;">Never</div>
                </div>

                <!-- Realtime + DB bar -->
                <div style="margin:0 20px;padding:12px 16px;background:rgba(255,255,255,0.04);border-radius:12px;display:flex;gap:16px;">
                  <div style="flex:1;text-align:center;">
                    <div style="font-size:10px;color:#475569;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Realtime</div>
                    <div id="sb-rt-val" style="font-size:13px;font-weight:900;color:#94a3b8;">—</div>
                  </div>
                  <div style="width:1px;background:rgba(255,255,255,0.06);"></div>
                  <div style="flex:1;text-align:center;">
                    <div style="font-size:10px;color:#475569;font-weight:700;text-transform:uppercase;margin-bottom:4px;">Schedule</div>
                    <div id="sb-sched-val" style="font-size:13px;font-weight:900;color:#94a3b8;">—</div>
                  </div>
                  <div style="width:1px;background:rgba(255,255,255,0.06);"></div>
                  <div style="flex:1;text-align:center;">
                    <div style="font-size:10px;color:#475569;font-weight:700;text-transform:uppercase;margin-bottom:4px;">History</div>
                    <div id="sb-hist-val" style="font-size:13px;font-weight:900;color:#94a3b8;">—</div>
                  </div>
                </div>

                <!-- Buttons -->
                <div style="padding:16px 20px 24px;display:flex;gap:10px;">
                  <button onclick="runSbDiagnostic()" style="flex:1;background:#0ea5e9;color:#fff;border:none;border-radius:14px;padding:14px;font-size:13px;font-weight:900;cursor:pointer;text-transform:uppercase;letter-spacing:1px;">🔄 REFRESH</button>
                  <button onclick="sbSendTestPing()" style="flex:1;background:#7c3aed;color:#fff;border:none;border-radius:14px;padding:14px;font-size:13px;font-weight:900;cursor:pointer;text-transform:uppercase;letter-spacing:1px;">📡 PING ALL PCs</button>
                  <button onclick="closeSbStatusModal()" style="flex:1;background:rgba(255,255,255,0.08);color:#94a3b8;border:none;border-radius:14px;padding:14px;font-size:13px;font-weight:900;cursor:pointer;">CLOSE</button>
                </div>
              </div>
            </div>

            <style>
              @keyframes sbPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.15)} }
              @keyframes sbFadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
              .sb-peer-card { display:flex;align-items:center;gap:12px;padding:12px 16px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:14px;animation:sbFadeIn 0.3s ease; }
            </style>

            <!-- Admin Panel -->
            <div id="adminPanel" class="scanner-card no-print" style="display:none; text-align:left;">
                <label style="font-weight:900">Apps Script Cloud URL</label>
                <div style="display:flex; gap:10px; margin-bottom:15px;">
                    <input type="text" id="scriptUrlField" class="big-input" style="font-size:14px; padding:15px; flex:1;" readonly>
                    <button id="editUrlBtn" class="btn-nav" style="background:var(--accent); padding:10px 20px;" onclick="enableUrlEdit()">EDIT</button>
                    <button id="saveUrlBtn" class="btn-nav" style="background:var(--success); padding:10px 20px; display:none;" onclick="saveUrlEdit()">SAVE</button>
                </div>
                <label style="font-weight:900">Hourly Labor Rate (PHP)</label>
                <input type="number" id="laborRateInp" class="big-input" style="font-size:16px; padding:10px; height:auto; margin-bottom:20px;" onchange="saveLaborRate()">
                <div id="samSettings"></div>
                <button class="btn-nav" style="background:var(--info); width:100%; margin-top:15px;" onclick="addNewRow()">+ ADD NEW PROCESS</button>
                <button class="btn-nav" style="background:var(--success); width:100%; margin-top:10px;" onclick="saveAdminEdits()">SAVE ALL PROCESSES</button>
            </div>

            <!-- Stats Panel -->
            <div id="statsPanel" class="stats-container no-print" style="display:none;">
                <!-- PASSWORD LOCK SCREEN -->
                <div id="statsLockScreen" style="display:flex;">
                    <div class="lock-box">
                        <div style="font-size:48px; margin-bottom:10px;">🔒</div>
                        <div style="font-weight:900; font-size:18px; color:var(--leather); margin-bottom:6px; text-transform:uppercase; letter-spacing:1px;">Worker Stats Locked</div>
                        <div style="font-size:12px; color:#64748b; margin-bottom:20px;">Enter password to access analytics</div>
                        <input type="password" id="statsPasswordInput" placeholder="Enter password"
                            style="width:100%; padding:14px; font-size:16px; border:2px solid #e2e8f0; border-radius:12px; outline:none; text-align:center; box-sizing:border-box; margin-bottom:12px;"
                            onkeydown="if(event.key==='Enter') checkStatsPassword()">
                        <button onclick="checkStatsPassword()"
                            style="width:100%; padding:14px; background:var(--leather); color:white; border:none; border-radius:12px; font-size:15px; font-weight:900; cursor:pointer; text-transform:uppercase; letter-spacing:1px;">
                            UNLOCK
                        </button>
                        <div id="statsLockError" style="color:#dc2626; font-size:12px; font-weight:700; margin-top:10px; display:none;">Incorrect password. Try again.</div>
                        <button onclick="closeStats()" style="margin-top:12px; background:none; border:none; color:#94a3b8; font-size:12px; cursor:pointer; text-decoration:underline;">Cancel</button>
                    </div>
                </div>
                <!-- ANALYTICS CONTENT (hidden until unlocked) -->
                <div id="statsContent" style="display:none;">
                    <div class="stats-header">
                        <h2 style="margin:0; color:var(--leather); letter-spacing:2px;">🏆 WORKER POINTS &amp; ANALYTICS</h2>
                        <p style="margin:5px 0; color:#64748b; font-size:12px;" id="statsFilterLabel">Showing: All-Time · Verified completed jobs only</p>
                        <div style="position:absolute; right:0; top:0; display:flex; gap:8px;">
                            <button class="btn-nav" style="background:var(--danger); font-size:10px; padding:8px 15px;" onclick="clearAllHistory()">WIPE ALL STATS</button>
                            <button class="btn-nav" style="background:#64748b; font-size:10px; padding:8px 15px;" onclick="lockStats()">🔒 LOCK</button>
                        </div>
                    </div>
                    <div class="filter-section">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <label style="white-space:nowrap;">FROM:</label>
                            <input type="date" id="statFilterFrom" style="padding:10px;border-radius:8px;border:2px solid #cbd5e1;outline:none;font-size:14px;font-weight:700;" onchange="autoFillTo()">
                        </div>
                        <div style="display:flex;align-items:center;gap:8px;">
                            <label style="white-space:nowrap;">TO:</label>
                            <input type="date" id="statFilterTo" style="padding:10px;border-radius:8px;border:2px solid #cbd5e1;outline:none;font-size:14px;font-weight:700;">
                        </div>
                        <button class="btn-filter" style="background:var(--info); color:white; padding:10px 20px; border-radius:8px; border:none; cursor:pointer; font-weight:900; font-size:13px;" onclick="applyDateFilter()">🔍 APPLY FILTER</button>
                        <button class="btn-filter" style="background:#64748b; color:white; padding:10px 20px; border-radius:8px; border:none; cursor:pointer; font-weight:900; font-size:13px;" onclick="filterToday()">📅 TODAY</button>
                        <button class="btn-filter" style="background:#cbd5e1; color:var(--primary); padding:10px 20px; border-radius:8px; border:none; cursor:pointer; font-weight:900; font-size:13px;" onclick="clearDateFilter()">↺ ALL-TIME</button>
                    </div>
                    <!-- Team KPI Tiles -->
                    <div id="teamKpiBar" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(145px,1fr)); gap:12px; margin-bottom:26px;"></div>
                    <!-- Podium -->
                    <div id="podiumSection" style="background:#fffbeb; border:2px solid #fde68a; border-radius:20px; padding:24px; margin-bottom:26px; display:none;">
                        <div style="text-align:center; font-weight:900; font-size:13px; color:#92400e; letter-spacing:2px; margin-bottom:16px;">🏆 POINTS LEADERBOARD</div>
                        <div class="podium-bar" id="podiumBar"></div>
                        <div id="podiumList" style="display:flex; flex-direction:column; gap:6px;"></div>
                    </div>
                    <!-- Per-worker cards -->
                    <div id="statsDashboard" class="stats-grid"></div>
                    <button class="btn-nav" style="background:var(--leather); width:100%; margin-top:30px; justify-content:center;" onclick="closeStats()">CLOSE ANALYTICS</button>
                </div>
            </div>

            <!-- Labor Scanner + JO History + Side Leaderboard Row -->
            <div id="scannerLeaderboardRow" class="no-print">
            <!-- JO History Panel -->
            <div id="joHistoryPanel" class="no-print">
                <div class="joh-title">📋 J.O. HISTORY</div>
                <div class="joh-list" id="joHistoryList"><div class="joh-empty">No J.O. recorded yet.</div></div>
            </div>
            <!-- Labor Scanner -->
            <div id="mainCard" class="scanner-card no-print" style="margin:0;">
                <h1 style="font-size:32px; margin-bottom:30px;">PRODUCTION SCANNER</h1>
                <div id="step1">
                    <span class="step-label">Step 1: Scan J.O. Number OR Finish QR</span>
                    <div style="background:#fff700; color:#000; border:4px solid #ff6600; border-radius:16px; padding:18px 24px; margin-bottom:18px; text-align:center; box-shadow:0 0 24px rgba(255,214,0,0.8);">
                        <span style="font-size:28px; font-weight:900; letter-spacing:1px; text-transform:uppercase; display:block; line-height:1.2;">⚠️ PLEASE ENTER THE LAST 4 DIGITS OF THE J.O.</span>
                    </div>
                    <input type="text" id="scanJO" class="big-input" autofocus placeholder="ENTER LAST 4 DIGITS OF J.O. HERE" autocomplete="off">
                </div>
                <div id="step2" style="display:none;">
                    <span class="step-label">Step 2: Enter Worker Name</span>
                    <div style="margin-bottom:15px; background:#f1f5f9; padding:12px 18px; border-radius:10px; text-align:center;">
                        <span style="font-size:22px; font-weight:900; color:var(--info);" id="displayJO2"></span>
                    </div>
                    <input type="text" id="scanName" class="big-input" placeholder="TYPE OR SCAN NAME..." autocomplete="off" oninput="filterWorkerSuggestions(this.value)">
                    <div id="workerSuggestList" style="margin-top:10px; max-height:200px; overflow-y:auto;"></div>
                    <div style="display:flex; gap:10px; margin-top:15px; justify-content:center; flex-wrap:wrap;">
                        <button onclick="resetSteps()" style="cursor:pointer; padding:12px 20px; border-radius:8px; border:2px solid #ccc; font-weight:700;">⬅ BACK</button>
                    </div>
                </div>
                <div id="step3" style="display:none;">
                    <span class="step-label">Step 3: Scan or Select Process</span>
                    <div style="margin-bottom:20px; background:#f1f5f9; padding:16px 20px; border-radius:10px; display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                        <span style="font-size:26px; font-weight:900; color:var(--info); letter-spacing:1px;" id="displayJO"></span>
                        <span style="font-size:22px; color:#94a3b8; font-weight:300;">|</span>
                        <span style="font-size:26px; font-weight:900; color:var(--leather); letter-spacing:1px;" id="displayName"></span>
                    </div>
                    <input type="text" id="scanProcessInp" class="big-input" placeholder="SCAN PROCESS" autocomplete="off" style="margin-bottom:20px;">
                    <div class="process-grid" id="procPickerGrid"></div>
                    <button onclick="resetSteps()" style="margin-top:20px; background:var(--danger); color:white; border:none; padding:10px 20px; border-radius:10px; cursor:pointer;">CANCEL</button>
                </div>
            </div>
            <!-- Side Leaderboard -->
            <div id="sideLeaderboard" class="no-print">
                <div class="slb-title">🏆 POINTS LEADERBOARD</div>
                <div id="sideLeaderboardList"><div class="slb-empty">No data yet.<br>Complete jobs to see rankings.</div></div>
            </div>
            </div><!-- end scannerLeaderboardRow -->

            <!-- Worker Cards -->
            <div id="workerGrid" class="worker-grid no-print"></div>
        </div>

        <!-- MATERIALS VIEW -->
        <div id="materialsView" style="display:none; height:100vh; overflow:hidden; background:#f1f5f9; color:#000; flex-direction:row;">
            <div id="mat-sidebar">
                <div style="padding:20px; border-bottom:2px solid #000; display:flex; align-items:center; gap:10px;">
                    <img src="https://i.ibb.co/pPZ8XDP/Untitled-design-24.png" width="30">
                    <b>PENDING TICKETS</b>
                </div>
                <button class="btn-nav" style="background:#64748b; margin:10px;" onclick="backToMenu()">⬅ MENU</button>
                <button class="btn-nav" style="background:#7c3aed; margin:0 10px 10px;" onclick="openPrintSettings()">📄 PRINT SETUP</button>
                <button class="btn-nav" style="background:var(--info); margin:0 10px 10px;" onclick="printMatDailyReport()">🖨️ DAILY REPORT</button>
                <div id="pending-list" style="padding:10px; overflow-y:auto; flex:1; background:#f8fafc;"></div>
            </div>
            <div class="mat-main-content">
                <div style="width:100%; max-width:650px;">
                    <div style="background:white; padding:40px; border:2px solid #000; border-radius:24px;">
                        <h2 style="margin-top:0; text-transform:uppercase; font-family:'Segoe UI',sans-serif;">MATERIALS COMMAND</h2>
                        <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                            <div id="mstep1" class="step-dot">1. JO</div>
                            <div id="mstep2" class="step-dot">2. NAME</div>
                            <div id="mstep3" class="step-dot">3. ITEM</div>
                            <div id="mstep4" class="step-dot">4. QTY</div>
                            <div id="mstep5" class="step-dot">5. KGS</div>
                        </div>
                        <div id="visual-scanner" class="scanner-box step-jo" onclick="focusMatScanner()">
                            <div id="scan-title" style="font-size:1.4rem; font-weight:900;">SCAN J.O.</div>
                            <div id="scan-subtitle" style="font-size:1rem; color:#fff700; margin-top:5px; font-weight:900; background:rgba(255,102,0,0.7); padding:6px 12px; border-radius:8px; letter-spacing:0.5px;">⚠️ PLEASE ENTER THE LAST 4 DIGITS OF THE J.O.</div>
                            <input type="text" id="mat-scanner-input" style="width:90%; margin-top:20px; padding:15px; background:rgba(255,255,255,0.1); color:white; border:2px solid #fff; font-size:2rem; text-align:center; border-radius:12px; outline:none; font-weight:900;" autocomplete="off" placeholder="••••">
                        </div>
                        <div id="material-grid" style="display:none; grid-template-columns:1fr 1fr; gap:10px; margin-top:20px;"></div>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:20px;">
                            <button class="btn-nav" style="background:#64748b; justify-content:center;" onclick="resetMatScanner()">RESET</button>
                            <button class="btn-nav" style="background:#ff6b00; justify-content:center;" onclick="openMatSettings()">SETTINGS</button>
                        </div>
                        <button class="btn-nav" style="background:#eee; color:#000; width:100%; margin-top:10px; justify-content:center;" onclick="loadMatHistory()">DB LOGS</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<!-- ATTENDANCE MODAL -->
<div id="attendanceOverlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.88); z-index:10002; justify-content:center; align-items:flex-start; backdrop-filter:blur(8px); overflow-y:auto; padding:20px; box-sizing:border-box;">
    <div style="background:#fff; width:100%; max-width:1100px; border-radius:24px; box-shadow:0 25px 60px rgba(0,0,0,0.5); margin:auto; padding:24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
            <div>
                <h2 style="margin:0; text-decoration:underline; text-transform:uppercase; font-size:20px;">PRODUCTION ATTENDANCE</h2>
                <div style="color:#666; font-size:11px; margin-top:2px;">PROD2026 CLOUD — LIVE SYNC</div>
            </div>
            <div style="display:flex; gap:8px;">
                <button onclick="window.print()" style="background:#222; color:#fff; padding:8px 16px; border:none; cursor:pointer; font-weight:bold; border-radius:6px; font-size:12px;">🖨️ PRINT</button>
                <button onclick="closeAttendance()" style="background:#dc2626; color:white; border:none; padding:8px 16px; border-radius:6px; font-weight:900; font-size:13px; cursor:pointer;">✕ CLOSE</button>
            </div>
        </div>
        <!-- Week nav -->
        <div style="display:flex; justify-content:center; align-items:center; gap:12px; margin-bottom:14px; background:#f1f5f9; padding:12px; border-radius:12px; flex-wrap:wrap;" class="no-print">
            <button onclick="attChangeWeek(-1)" style="background:var(--primary); color:white; border:none; padding:8px 18px; border-radius:8px; font-weight:900; cursor:pointer;">◀ PREV</button>
            <span id="attWeekLabel" style="font-weight:900; font-size:14px; color:var(--primary); min-width:220px; text-align:center;"></span>
            <button onclick="attChangeWeek(1)" style="background:var(--primary); color:white; border:none; padding:8px 18px; border-radius:8px; font-weight:900; cursor:pointer;">NEXT ▶</button>
            <button onclick="attGoToCurrentWeek()" style="background:var(--accent); color:white; border:none; padding:8px 18px; border-radius:8px; font-weight:900; cursor:pointer;">THIS WEEK</button>
        </div>
        <table style="width:100%; border-collapse:collapse; border:1.5px solid #000;">
            <thead>
                <tr>
                    <th style="border:1px solid #000; padding:6px; text-transform:uppercase; font-size:11px; background:#f2f2f2; width:170px; text-align:left; padding-left:8px;">WORKER NAME</th>
                    <th id="attH_mon" style="border:1px solid #000; padding:6px; text-transform:uppercase; font-size:11px; background:#f2f2f2;">MON</th>
                    <th id="attH_tue" style="border:1px solid #000; padding:6px; text-transform:uppercase; font-size:11px; background:#f2f2f2;">TUE</th>
                    <th id="attH_wed" style="border:1px solid #000; padding:6px; text-transform:uppercase; font-size:11px; background:#f2f2f2;">WED</th>
                    <th id="attH_thu" style="border:1px solid #000; padding:6px; text-transform:uppercase; font-size:11px; background:#f2f2f2;">THU</th>
                    <th id="attH_fri" style="border:1px solid #000; padding:6px; text-transform:uppercase; font-size:11px; background:#f2f2f2;">FRI</th>
                    <th id="attH_sat" style="border:1px solid #000; padding:6px; text-transform:uppercase; font-size:11px; background:#f2f2f2;">SAT</th>
                    <th style="border:1px solid #000; padding:6px; font-size:11px; background:#f2f2f2; width:50px;" class="no-print">DEL</th>
                </tr>
            </thead>
            <tbody id="attTableBody"></tbody>
        </table>
        <div style="display:flex; justify-content:space-between; margin-top:12px; padding:8px; border:1px solid #000; background:#fafafa; flex-wrap:wrap; gap:8px; font-size:11px;">
            <div style="display:flex; gap:12px; align-items:center;">
                <span>😊 Present</span>
                <span style="display:flex;align-items:center;gap:4px;"><b style="background:#ff0000;color:white;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;">L</b> Late (7:00AM+)</span>
                <span style="display:flex;align-items:center;gap:4px;"><b style="background:#ff0000;color:white;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;">A</b> Absent</span>
            </div>
            <div style="display:flex; gap:12px; align-items:center;">
                <span>✅ Accurate (≥70%)</span>
                <span>❌ Inaccurate (&lt;70%)</span>
                <span><b style="background:#000;color:#fff;padding:1px 4px;border-radius:2px;font-size:9px;">OT</b> Overtime (&gt;7.5h)</span>
            </div>
        </div>
    </div>
</div>
            <button onclick="closeWorkerNameModal()" style="width:100%; margin-top:14px; background:#f1f5f9; color:#64748b; border:none; padding:12px; border-radius:10px; font-weight:900; cursor:pointer;">✕ CANCEL</button>
        </div>
    </div>
</div>

<div id="finishOverlay" class="no-print" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:10000; justify-content:center; align-items:center; backdrop-filter:blur(8px);">
    <div class="modal-box">
        <div class="modal-header">
            <h2 style="margin:0;">FINISH JOB</h2>
            <div style="margin-top:5px;">
                <span id="mJo" style="color:var(--info); font-weight:bold;"></span> |
                <span id="mProcess" style="color:var(--leather); font-weight:bold;"></span> |
                <span id="mWorker" style="font-weight:bold;"></span>
            </div>
        </div>
        <div style="padding:25px;">
            <div style="display:flex; gap:10px; margin-bottom:15px;">
                <div style="flex:1"><label style="font-size:12px; font-weight:bold;">TIME IN</label><input type="datetime-local" id="mTimeIn" style="width:100%; padding:8px;" onchange="updateLiveStats()"></div>
                <div style="flex:1"><label style="font-size:12px; font-weight:bold;">TIME OUT</label><input type="datetime-local" id="mTimeOut" style="width:100%; padding:8px;" onchange="updateLiveStats()"></div>
            </div>
            <label style="font-weight:bold; color:var(--info);">QUANTITY FINISHED</label>
            <input type="number" id="mQtyInput" class="big-input" placeholder="0" oninput="updateLiveStats()" style="width:94%; border:3px solid var(--info);">
            <label style="font-weight:bold; color:var(--danger); margin-top:12px; display:block;">DEFECT QTY <span style="font-size:12px; font-weight:normal; color:#94a3b8;">(belt / reject pcs)</span></label>
            <input type="number" id="mDefectInput" class="big-input" placeholder="0" oninput="updateLiveStats()" style="width:94%; border:3px solid var(--danger); font-size:28px; padding:18px;">
            <input type="text" id="mRemarksInput" class="big-input" placeholder="REMARKS (optional)" style="width:94%; margin-top:10px; font-size:18px; padding:15px;">
            <div style="display:flex; justify-content:space-around; margin-top:15px; font-weight:bold; background:#f8fafc; padding:10px; border-radius:10px; flex-wrap:wrap; gap:6px;">
                <div>HRS: <span id="mHrsVal">0.00</span></div>
                <div>EFF: <span id="mEffVal">0%</span></div>
                <div>COST: <span id="mCostVal">₱0</span></div>
                <div style="color:var(--danger);">DEFECT%: <span id="mDefectVal">0%</span></div>
            </div>
        </div>
        <div id="mStatusBox" class="status-strip">PENDING</div>
        <div style="padding:20px; display:flex; gap:10px;">
            <button class="btn-nav" style="background:#64748b; flex:1; justify-content:center;" onclick="closeModal()">CANCEL</button>
            <button class="btn-nav" style="background:var(--success); flex:1; justify-content:center;" onclick="submitFinish()">FINISH & SAVE</button>
        </div>
    </div>
</div>

<!-- MATERIALS MODALS -->
<div class="modal-overlay" id="modal-issuance">
    <div class="modal-content">
        <h3 style="color:var(--mat-primary); text-transform:uppercase; margin-top:0;">Confirm Issuance</h3>
        <div style="margin-bottom:15px;"><label style="font-size:0.8rem; text-transform:uppercase; display:block; margin-bottom:5px;">Material</label><input type="text" id="mi-item" readonly style="width:100%; padding:12px; border:2px solid #000; border-radius:10px; font-size:1rem;"></div>
        <div style="margin-bottom:15px;"><label style="font-size:0.8rem; text-transform:uppercase; display:block; margin-bottom:5px;">Worker</label><input type="text" id="mi-name" readonly style="width:100%; padding:12px; border:2px solid #000; border-radius:10px; font-size:1rem;"></div>
        <div style="margin-bottom:15px;"><label style="font-size:0.8rem; text-transform:uppercase; display:block; margin-bottom:5px;">J.O. Number</label><input type="text" id="mi-jo" readonly style="width:100%; padding:12px; border:2px solid #000; border-radius:10px; font-size:1rem;"></div>
        <div style="display:flex; gap:15px; margin-bottom:15px;">
            <div style="flex:1;"><label style="font-size:0.8rem; text-transform:uppercase; display:block; margin-bottom:5px;">Qty (PCS)</label><input type="number" id="mi-qty" readonly style="width:100%; padding:12px; border:2px solid #000; border-radius:10px; font-size:1rem;"></div>
            <div style="flex:1;"><label style="font-size:0.8rem; text-transform:uppercase; display:block; margin-bottom:5px;">Issued (KG)</label><input type="number" id="mi-iss" readonly style="width:100%; padding:12px; border:2px solid #000; border-radius:10px; font-size:1rem;"></div>
        </div>
        <button class="btn-nav" style="background:var(--mat-primary); width:100%; justify-content:center;" onclick="saveIssuance()">CONFIRM & PRINT TICKET</button>
        <button class="btn-nav" style="background:#64748b; width:100%; margin-top:10px; justify-content:center;" onclick="closeMatModals()">CANCEL</button>
    </div>
</div>

<div class="modal-overlay" id="modal-return">
    <div class="modal-content">
        <h3 style="color:var(--mat-accent); text-transform:uppercase; margin-top:0;">Material Return</h3>
        <div id="ret-info" style="background:#f1f5f9; padding:20px; border-radius:12px; border:2px solid #000; margin-bottom:20px; line-height:1.8; font-weight:700;"></div>
        <label style="font-size:0.8rem; text-transform:uppercase; display:block; margin-bottom:8px; font-weight:800;">Return Weight (KG)</label>
        <input type="number" id="ret-weight" step="0.001" oninput="calculateMat()" placeholder="0.000" style="width:100%; padding:16px; border:3px solid #000; border-radius:12px; font-size:1.5rem; outline:none; margin-bottom:15px;">
        <div style="background:#f0fdf4; padding:25px; border-radius:16px; border:3px solid var(--mat-accent); margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:700;">USED UNITS:</span><span id="out-used" style="font-family:monospace; font-size:1.5rem; color:var(--mat-accent); font-weight:900;">0.0000</span></div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px; border-top:2px solid #bbf7d0; padding-top:15px;"><span style="font-weight:900;">COST/PC:</span><span id="out-cpp" style="font-family:monospace; font-size:2rem; color:var(--mat-accent); font-weight:900;">₱0.0000</span></div>
        </div>
        <button class="btn-nav" style="background:#166534; width:100%; justify-content:center;" onclick="saveReturn()">COMPLETE & PRINT FINAL</button>
        <button class="btn-nav" style="background:#64748b; width:100%; margin-top:10px; justify-content:center;" onclick="closeMatModals()">CANCEL</button>
    </div>
</div>

<div class="modal-overlay" id="modal-settings">
    <div class="modal-content">
        <h3 style="text-transform:uppercase; margin-top:0; color:var(--mat-orange);">Materials Settings</h3>
        <label style="font-size:0.8rem; text-transform:uppercase; font-weight:800; display:block; margin-bottom:5px;">Google Script URL</label>
        <input type="text" id="mat-db-url" placeholder="Paste Script URL here..." style="width:100%; padding:12px; border:2px solid #000; border-radius:10px; margin-bottom:10px; font-size:0.9rem;">
        <button class="btn-nav" style="background:var(--mat-primary); width:100%; justify-content:center; margin-bottom:15px;" onclick="saveMatDbUrl()">SAVE DATABASE LINK</button>
        <hr>
        <label style="font-size:0.8rem; text-transform:uppercase; font-weight:800; display:block; margin:10px 0 5px;">Add New Material</label>
        <input type="text" id="nm-name" placeholder="Name" style="width:100%; padding:10px; border:2px solid #000; border-radius:8px; margin-bottom:8px;">
        <div style="display:flex; gap:8px; margin-bottom:10px;">
            <input type="number" id="nm-price" placeholder="Price per unit" style="flex:1; padding:10px; border:2px solid #000; border-radius:8px;">
            <input type="number" id="nm-w" placeholder="Unit KG" style="flex:1; padding:10px; border:2px solid #000; border-radius:8px;">
        </div>
        <button class="btn-nav" style="background:var(--mat-orange); width:100%; justify-content:center;" onclick="addNewMat()">ADD ITEM</button>
        <div id="mat-settings-list" style="max-height:200px; overflow-y:auto; margin-top:15px; border:1px solid #ddd; border-radius:8px;"></div>
        <button class="btn-nav" style="background:#64748b; width:100%; margin-top:10px; justify-content:center;" onclick="closeMatModals()">CLOSE</button>
    </div>
</div>

<div class="modal-overlay" id="modal-mat-history">
    <div class="modal-content">
        <h3 style="text-transform:uppercase; margin-top:0;">Database History</h3>
        <div id="mat-history-list" style="max-height:400px; overflow-y:auto;"></div>
        <button class="btn-nav" style="background:#64748b; width:100%; margin-top:15px; justify-content:center;" onclick="closeMatModals()">CLOSE</button>
    </div>
</div>

<!-- PRINT SETTINGS MODAL -->
<div id="modal-print-settings" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.75); z-index:20000; justify-content:center; align-items:center; backdrop-filter:blur(4px);">
    <div style="background:#fff; width:95%; max-width:560px; border-radius:24px; border:3px solid #7c3aed; padding:35px; max-height:90vh; overflow-y:auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px; border-bottom:3px solid #7c3aed; padding-bottom:15px;">
            <h2 style="margin:0; color:#7c3aed; font-size:1.3rem; text-transform:uppercase; letter-spacing:2px;">📄 Print Paper Setup</h2>
            <button onclick="closePrintSettings()" style="background:#e2e8f0; border:none; border-radius:50%; width:36px; height:36px; font-size:1.2rem; cursor:pointer;">✕</button>
        </div>

        <!-- PAPER SIZE PRESETS -->
        <div style="margin-bottom:20px;">
            <label style="font-size:0.75rem; font-weight:900; color:#64748b; text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:10px;">Quick Presets</label>
            <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px;">
                <button class="preset-btn" onclick="applyPreset(58,0)" style="background:#f1f5f9; border:2px solid #cbd5e1; border-radius:10px; padding:10px 5px; cursor:pointer; font-weight:800; font-size:0.8rem;">58mm Roll</button>
                <button class="preset-btn" onclick="applyPreset(80,0)" style="background:#f1f5f9; border:2px solid #cbd5e1; border-radius:10px; padding:10px 5px; cursor:pointer; font-weight:800; font-size:0.8rem;">80mm Roll</button>
                <button class="preset-btn" onclick="applyPreset(76,0)" style="background:#f1f5f9; border:2px solid #cbd5e1; border-radius:10px; padding:10px 5px; cursor:pointer; font-weight:800; font-size:0.8rem;">76mm Roll</button>
                <button class="preset-btn" onclick="applyPreset(100,150)" style="background:#f1f5f9; border:2px solid #cbd5e1; border-radius:10px; padding:10px 5px; cursor:pointer; font-weight:800; font-size:0.8rem;">100×150mm</button>
                <button class="preset-btn" onclick="applyPreset(105,148)" style="background:#f1f5f9; border:2px solid #cbd5e1; border-radius:10px; padding:10px 5px; cursor:pointer; font-weight:800; font-size:0.8rem;">A6 (105×148)</button>
                <button class="preset-btn" onclick="applyPreset(210,297)" style="background:#f1f5f9; border:2px solid #cbd5e1; border-radius:10px; padding:10px 5px; cursor:pointer; font-weight:800; font-size:0.8rem;">A4 (210×297)</button>
            </div>
        </div>

        <!-- CUSTOM SIZE -->
        <div style="background:#f8fafc; border-radius:14px; padding:20px; margin-bottom:20px; border:2px solid #e2e8f0;">
            <label style="font-size:0.75rem; font-weight:900; color:#64748b; text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:12px;">Custom Paper Size</label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                    <label style="font-size:0.7rem; font-weight:800; color:#94a3b8; display:block; margin-bottom:4px;">WIDTH (mm)</label>
                    <input type="number" id="ps-width" min="40" max="300" placeholder="e.g. 80" style="width:100%; padding:12px; border:2px solid #cbd5e1; border-radius:10px; font-size:1.1rem; font-weight:900; outline:none; text-align:center;">
                </div>
                <div>
                    <label style="font-size:0.7rem; font-weight:800; color:#94a3b8; display:block; margin-bottom:4px;">HEIGHT (mm) — 0 = Auto</label>
                    <input type="number" id="ps-height" min="0" max="500" placeholder="0 = auto" style="width:100%; padding:12px; border:2px solid #cbd5e1; border-radius:10px; font-size:1.1rem; font-weight:900; outline:none; text-align:center;">
                </div>
            </div>
        </div>

        <!-- MARGINS -->
        <div style="background:#f8fafc; border-radius:14px; padding:20px; margin-bottom:20px; border:2px solid #e2e8f0;">
            <label style="font-size:0.75rem; font-weight:900; color:#64748b; text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:12px;">Margins (mm)</label>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:10px;">
                <div><label style="font-size:0.7rem; font-weight:800; color:#94a3b8; display:block; margin-bottom:4px;">TOP</label><input type="number" id="ps-mt" min="0" max="30" value="0" style="width:100%; padding:10px; border:2px solid #cbd5e1; border-radius:8px; font-size:1rem; font-weight:900; text-align:center; outline:none;"></div>
                <div><label style="font-size:0.7rem; font-weight:800; color:#94a3b8; display:block; margin-bottom:4px;">BOTTOM</label><input type="number" id="ps-mb" min="0" max="30" value="0" style="width:100%; padding:10px; border:2px solid #cbd5e1; border-radius:8px; font-size:1rem; font-weight:900; text-align:center; outline:none;"></div>
                <div><label style="font-size:0.7rem; font-weight:800; color:#94a3b8; display:block; margin-bottom:4px;">LEFT</label><input type="number" id="ps-ml" min="0" max="30" value="0" style="width:100%; padding:10px; border:2px solid #cbd5e1; border-radius:8px; font-size:1rem; font-weight:900; text-align:center; outline:none;"></div>
                <div><label style="font-size:0.7rem; font-weight:800; color:#94a3b8; display:block; margin-bottom:4px;">RIGHT</label><input type="number" id="ps-mr" min="0" max="30" value="0" style="width:100%; padding:10px; border:2px solid #cbd5e1; border-radius:8px; font-size:1rem; font-weight:900; text-align:center; outline:none;"></div>
            </div>
        </div>

        <!-- FONT & QR SIZE -->
        <div style="background:#f8fafc; border-radius:14px; padding:20px; margin-bottom:25px; border:2px solid #e2e8f0;">
            <label style="font-size:0.75rem; font-weight:900; color:#64748b; text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:12px;">Slip Content</label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div>
                    <label style="font-size:0.7rem; font-weight:800; color:#94a3b8; display:block; margin-bottom:4px;">FONT SIZE (px)</label>
                    <input type="number" id="ps-fontsize" min="8" max="24" value="13" style="width:100%; padding:12px; border:2px solid #cbd5e1; border-radius:10px; font-size:1.1rem; font-weight:900; outline:none; text-align:center;">
                </div>
                <div>
                    <label style="font-size:0.7rem; font-weight:800; color:#94a3b8; display:block; margin-bottom:4px;">QR CODE SIZE (px)</label>
                    <input type="number" id="ps-qrsize" min="60" max="300" value="140" style="width:100%; padding:12px; border:2px solid #cbd5e1; border-radius:10px; font-size:1.1rem; font-weight:900; outline:none; text-align:center;">
                </div>
            </div>
        </div>

        <!-- CURRENT SETTINGS PREVIEW -->
        <div id="ps-preview" style="background:#ede9fe; border-radius:12px; padding:15px; margin-bottom:20px; font-size:0.85rem; font-weight:700; color:#4c1d95; border:2px solid #7c3aed;"></div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <button onclick="savePrintSettings()" style="background:#7c3aed; color:white; border:none; border-radius:12px; padding:15px; font-size:1rem; font-weight:900; cursor:pointer; text-transform:uppercase; letter-spacing:1px;">💾 SAVE SETTINGS</button>
            <button onclick="resetPrintSettings()" style="background:#e2e8f0; color:#64748b; border:none; border-radius:12px; padding:15px; font-size:1rem; font-weight:900; cursor:pointer; text-transform:uppercase; letter-spacing:1px;">↺ RESET DEFAULT</button>
        </div>
    </div>
</div>

<!-- PRINT AREAS -->
<div id="reportPrintView"><h1>Daily Production Report</h1><div id="reportContent"></div></div>

<div id="matReportPrintView"><h2 style="text-align:center;">DAILY MATERIALS REPORT</h2><div id="matReportContent"></div></div>

<div id="startSlip" class="slip-box">
    <h2>JOB START</h2>
    <div id="qrS" style="display:flex; justify-content:center; margin:10px;"></div>
    <div class="slip-line"><span>JO:</span> <b id="sJo"></b></div>
    <div class="slip-line"><span>PROC:</span> <b id="sProc"></b></div>
    <div class="slip-line"><span>WORKER:</span> <b id="sWorker"></b></div>
    <div class="slip-line"><span>ID:</span> <b id="sUid"></b></div>
</div>

<div id="finishSlip" class="slip-box">
    <h2>COMPLETED</h2>
    <div id="qrF" style="display:flex; justify-content:center; margin:10px;"></div>
    <div class="slip-line"><span>DATE:</span> <b id="fDate"></b></div>
    <div class="slip-line"><span>JO:</span> <b id="fJo"></b></div>
    <div class="slip-line"><span>WORKER:</span> <b id="fWorker"></b></div>
    <div class="slip-line"><span>PROC:</span> <b id="fProc"></b></div>
    <div class="slip-line"><span>QTY:</span> <b id="fQty"></b></div>
    <div class="slip-line"><span>HRS:</span> <b id="fHrs"></b></div>
    <div class="slip-line"><span>EFF:</span> <b id="fEff"></b></div>
    <div class="slip-line"><span>COST:</span> <b id="fCost"></b></div>
    <div id="fStatus" class="big-status"></div>
</div>

<div id="print-area"></div>

<script>

    <script src="js/main.js"></script>
</body>
</html>
