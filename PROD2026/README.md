# PROD2026 MASTER CLOUD

A production management web app with real-time cross-device sync powered by Supabase.

## 📁 Project Structure

```
PROD2026/
├── index.html           ← Main HTML shell (links CSS + JS)
├── css/
│   └── styles.css       ← All styles (attendance, modals, calendar, print, etc.)
├── js/
│   ├── supabase-sync.js ← Supabase real-time sync engine (runs first)
│   └── main.js          ← All app logic (JO history, labor, scheduler, etc.)
└── README.md
```

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `prod2026`)
2. Upload all files keeping the folder structure above
3. Go to **Settings → Pages**
4. Set Source to `main` branch, root `/`
5. Click **Save** — your app will be live at `https://<your-username>.github.io/prod2026/`

## 🔧 Configuration

Your Supabase credentials are at the top of `js/supabase-sync.js`:

```js
var SUPABASE_URL = "https://neoetgikaeibumdvjpkf.supabase.co";
var SUPABASE_KEY = "eyJ...";  // anon key
```

## 📦 External Dependencies (loaded via CDN)

- [QRCode.js](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js)
- [Chart.js 4.4.1](https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js)
- [Supabase JS 2.39.3](https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/dist/umd/supabase.min.js)

## 🗄️ Supabase Tables

| Table | Purpose |
|-------|---------|
| `jo_history` | Job Order history (bidirectional realtime) |
| `jos_data` | Schedule calendar entries |
| `worker_logs` | Labor / time entries |
| `jo_queue` | Scanner → Master PC queue |
