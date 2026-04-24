// ─────────────────────────────────────────────────────────────────────────────
// GotPhoto AI Workshop — Topic Vote
// Google Apps Script — paste this entire file into your Apps Script editor
//
// SETUP (one-time, ~10 minutes):
//
//  1. Go to sheets.google.com → create a new blank spreadsheet
//     Name it anything, e.g. "AI Workshop Votes"
//
//  2. In the spreadsheet: Extensions → Apps Script
//     Delete any existing code, paste this entire file, save (Cmd+S)
//
//  3. Run initSheet() once to populate the sheet with all 31 topics:
//     Click the function dropdown (top bar) → select "initSheet" → click Run
//     Grant permissions when prompted
//
//  4. Deploy as a web app:
//     Click "Deploy" → "New deployment"
//     Type: Web app
//     Execute as: Me
//     Who has access: Anyone
//     → Deploy → copy the web app URL
//
//  5. Paste the URL into vote/index.html where it says:
//     const SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
//
//  6. Push to GitHub → GitHub Pages serves the updated vote/index.html
//
//  To see results: just open your Google Sheet — Column C shows live vote counts
//
//  To re-deploy after any code change:
//    Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy
// ─────────────────────────────────────────────────────────────────────────────

function doGet(e) {
  const params = (e && e.parameter) ? e.parameter : {};
  const action = params.action || 'read';
  const id     = params.id    || '';

  if (action === 'vote' && id) {
    return handleVote(id);
  }

  return handleRead();
}

// ── Read all votes ────────────────────────────────────────────────────────────

function handleRead() {
  const sheet = getSheet();
  const rows  = sheet.getDataRange().getValues();
  const votes = {};

  for (let i = 1; i < rows.length; i++) {      // skip header row
    const row = rows[i];
    if (row[0]) votes[row[0]] = parseInt(row[2]) || 0;
  }

  return json({ ok: true, votes });
}

// ── Increment a vote ──────────────────────────────────────────────────────────

function handleVote(topicId) {
  const sheet = getSheet();
  const rows  = sheet.getDataRange().getValues();

  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === topicId) {
      const newCount = (parseInt(rows[i][2]) || 0) + 1;
      sheet.getRange(i + 1, 3).setValue(newCount);
      return json({ ok: true, id: topicId, count: newCount });
    }
  }

  return json({ ok: false, error: 'Topic not found: ' + topicId });
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName('Votes') || ss.getActiveSheet();
}

function json(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─────────────────────────────────────────────────────────────────────────────
// Run once to initialise the sheet with all 31 topics and zero counts
// ─────────────────────────────────────────────────────────────────────────────

function initSheet() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  sheet.setName('Votes');
  sheet.clearContents();

  // Header row
  sheet.getRange(1, 1, 1, 3).setValues([['id', 'name', 'votes']]);
  sheet.getRange(1, 1, 1, 3).setFontWeight('bold');

  const topics = [
    ['llm-think',       'How LLMs "Think"'],
    ['model-tiering',   'Model Tiering'],
    ['context-windows', 'Context Windows'],
    ['agent-stack',     'The AI "Agent" Stack'],
    ['cot',             'Chain of Thought (CoT)'],
    ['context-first',   '"Context First" Prompting'],
    ['temperature',     'Temperature'],
    ['cursor',          'Cursor'],
    ['stitch',          'Google Stitch'],
    ['v0dev',           'v0.dev'],
    ['merge-conflicts', 'Merge Conflicts & PRs'],
    ['env-vars',        'Environment Variables'],
    ['python',          'Python (for Data)'],
    ['webhooks',        'Webhooks'],
    ['data-schema',     'Data Schema & JSON'],
    ['crud',            'CRUD'],
    ['headless-cms',    'Headless CMS'],
    ['supabase',        'Supabase'],
    ['component-think', 'Component Thinking'],
    ['separation',      'Separation of Concerns'],
    ['design-tokens',   'Design Tokens'],
    ['tech-debt',       'Technical Debt'],
    ['sdd',             'Spec-Driven Dev (SDD)'],
    ['ui-libs',         'UI Libraries'],
    ['vercel',          'Vercel / Netlify'],
    ['cicd',            'CI/CD'],
    ['serverless',      'Serverless / Edge'],
    ['docker',          'Docker & Containers'],
    ['boilerplates',    'Boilerplates'],
    ['n8n',             'n8n & LangChain'],
    ['rag',             'Vector DBs & RAG'],
  ];

  const rows = topics.map(([id, name]) => [id, name, 0]);
  sheet.getRange(2, 1, rows.length, 3).setValues(rows);

  // Auto-resize columns
  sheet.autoResizeColumns(1, 3);

  Logger.log('Sheet initialised with ' + rows.length + ' topics.');
}
