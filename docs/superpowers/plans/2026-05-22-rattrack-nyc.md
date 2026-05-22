# RatTrack NYC Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full-viewport interactive heatmap SPA visualizing 387 NYC rodent complaints at `/next-chapter/week-04/day-5/`

**Architecture:** Static SPA -- Leaflet map with leaflet-heat heatmap layer, CartoDB Dark Matter tiles, frosted-glass floating UI panels. Data baked into a JS file. No backend, no build step.

**Tech Stack:** Leaflet 1.9.4, leaflet-heat, vanilla HTML/CSS/JS, Cloudflare Pages

---

## File Structure

```
next-chapter/week-04/day-5/
  index.html    -- SPA shell: meta, CDN links, panel markup
  style.css     -- all styling: glass panels, header, filters, stats, responsive
  data.js       -- const RATTRACK_DATA = [{lat,lng,type,borough,month,hour,zip,date}, ...]
  app.js        -- map init, heatmap, filter logic, stat computation, event wiring
```

Integration point: `next-chapter/index.html` -- add desktop icon at ~line 1242 (after W4D4 icon).

---

### Task 1: Extract rodent data from SQLite to data.js

**Files:**
- Create: `next-chapter/week-04/day-5/data.js`

- [ ] **Step 1: Create the day-5 directory**

```bash
mkdir -p next-chapter/week-04/day-5
```

- [ ] **Step 2: Extract data from SQLite and write data.js**

```bash
echo "const RATTRACK_DATA = [" > next-chapter/week-04/day-5/data.js
sqlite3 -separator '' /home/bazzite/Downloads/nyc_311_2023.db "
SELECT '{lat:' || latitude || ',lng:' || longitude || 
       ',type:\"' || REPLACE(descriptor, '\"', '\\\"') || '\"' ||
       ',borough:\"' || borough || '\"' ||
       ',month:' || created_month ||
       ',hour:' || created_hour ||
       ',zip:\"' || COALESCE(incident_zip,'') || '\"' ||
       ',date:\"' || SUBSTR(created_datetime,1,10) || '\"},'
FROM service_requests
WHERE complaint_type = 'Rodent' AND latitude IS NOT NULL
ORDER BY created_datetime;
" >> next-chapter/week-04/day-5/data.js
echo "];" >> next-chapter/week-04/day-5/data.js
```

- [ ] **Step 3: Verify the data file**

Run: `head -3 next-chapter/week-04/day-5/data.js && echo "---" && wc -l next-chapter/week-04/day-5/data.js`
Expected: First line is `const RATTRACK_DATA = [`, ~389 lines total (header + 387 records + footer).

- [ ] **Step 4: Commit**

```bash
git add next-chapter/week-04/day-5/data.js
git commit -m "feat(rattrack): extract 387 rodent complaints to data.js"
```

---

### Task 2: Build the HTML shell

**Files:**
- Create: `next-chapter/week-04/day-5/index.html`

- [ ] **Step 1: Write index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RatTrack NYC</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Map fills viewport -->
  <div id="map"></div>

  <!-- Glass header -->
  <header id="header">
    <div class="logo">RATTRACK<span class="logo-slash">///</span><small>NYC</small></div>
    <div class="header-stats">
      <span class="header-stat"><b id="stat-total">387</b> reports</span>
      <span class="header-stat"><b>4</b> types</span>
      <span class="header-stat"><b>2023</b></span>
      <span class="header-stat accent">LIVE HEATMAP</span>
    </div>
  </header>

  <!-- Filter panel -->
  <aside id="filters">
    <div class="filter-section">
      <div class="filter-title">Boroughs</div>
      <button class="filter-item active" data-borough="all">
        <span><span class="filter-dot green"></span>All Boroughs</span>
        <span class="count" id="count-all">387</span>
      </button>
      <button class="filter-item" data-borough="BROOKLYN">
        <span><span class="filter-dot"></span>Brooklyn</span>
        <span class="count">125</span>
      </button>
      <button class="filter-item" data-borough="QUEENS">
        <span><span class="filter-dot"></span>Queens</span>
        <span class="count">95</span>
      </button>
      <button class="filter-item" data-borough="MANHATTAN">
        <span><span class="filter-dot"></span>Manhattan</span>
        <span class="count">79</span>
      </button>
      <button class="filter-item" data-borough="BRONX">
        <span><span class="filter-dot"></span>Bronx</span>
        <span class="count">62</span>
      </button>
      <button class="filter-item" data-borough="STATEN ISLAND">
        <span><span class="filter-dot"></span>Staten Island</span>
        <span class="count">26</span>
      </button>
    </div>
    <div class="filter-section">
      <div class="filter-title">Type</div>
      <button class="filter-item active" data-type="all">
        <span>All Types</span>
        <span class="count">387</span>
      </button>
      <button class="filter-item" data-type="Signs of Rodents">
        <span>Signs of Rodents</span>
        <span class="count">122</span>
      </button>
      <button class="filter-item" data-type="Mouse Sighting">
        <span>Mouse Sighting</span>
        <span class="count">102</span>
      </button>
      <button class="filter-item" data-type="Rat Sighting">
        <span>Rat Sighting</span>
        <span class="count">84</span>
      </button>
      <button class="filter-item" data-type="Condition Attracting Rodents">
        <span>Conditions</span>
        <span class="count">79</span>
      </button>
    </div>
  </aside>

  <!-- Mascot -->
  <div id="mascot">
    <span class="mascot-icon">🐕</span>
    <span>Sniffing out<br>rodent activity...</span>
  </div>

  <!-- Heatmap legend -->
  <div id="legend">
    <div class="legend-title">Density</div>
    <div class="legend-bar"></div>
    <div class="legend-labels"><span>Low</span><span>High</span></div>
  </div>

  <!-- Bottom stat cards -->
  <div id="stats-bar">
    <div class="stat-card">
      <div class="stat-label">Worst Borough</div>
      <div class="stat-value green" id="stat-borough">BK</div>
      <div class="stat-sub" id="stat-borough-sub">Brooklyn -- 125 reports</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Peak Season</div>
      <div class="stat-value orange" id="stat-season">May</div>
      <div class="stat-sub" id="stat-season-sub">41 reports in peak month</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Peak Hour</div>
      <div class="stat-value" id="stat-hour">12<span class="unit">pm</span></div>
      <div class="stat-sub" id="stat-hour-sub">34 reports at noon</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Monthly Trend</div>
      <div class="mini-bars" id="stat-trend"></div>
      <div class="stat-sub">Jan--Dec 2023</div>
    </div>
  </div>

  <!-- Mobile filter toggle -->
  <button id="filter-toggle" aria-label="Toggle filters">&#9776;</button>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="https://unpkg.com/leaflet.heat@0.2.0/dist/leaflet-heat.js"></script>
  <script src="data.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify the file loads without errors**

Run: Open `next-chapter/week-04/day-5/index.html` in browser or run `wrangler pages dev . --port 8788` from the goolz root, navigate to `/next-chapter/week-04/day-5/`. Should see a blank dark page with panel outlines (no CSS yet).

- [ ] **Step 3: Commit**

```bash
git add next-chapter/week-04/day-5/index.html
git commit -m "feat(rattrack): add HTML shell with panel markup"
```

---

### Task 3: Write all CSS

**Files:**
- Create: `next-chapter/week-04/day-5/style.css`

- [ ] **Step 1: Write style.css**

```css
/* ── Reset & Base ── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --base: #0D1117;
  --surface: #161B22;
  --border: #30363D;
  --green: #3FB950;
  --orange: #F0883E;
  --text: #C9D1D9;
  --muted: #484F58;
  --dim: #8B949E;
  --glass: rgba(13, 17, 23, 0.85);
  --blur: blur(12px);
}

html, body {
  height: 100%;
  overflow: hidden;
  font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
  background: var(--base);
  color: var(--text);
}

/* ── Map ── */
#map {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* Override Leaflet controls */
.leaflet-control-zoom {
  border: 1px solid var(--border) !important;
}
.leaflet-control-zoom a {
  background: var(--glass) !important;
  color: var(--text) !important;
  border-color: var(--border) !important;
  backdrop-filter: var(--blur);
}
.leaflet-control-zoom a:hover {
  background: var(--surface) !important;
  color: var(--green) !important;
}

/* ── Glass panels (shared) ── */
#header, #filters, #mascot, #legend, #stats-bar, .stat-card {
  position: absolute;
  z-index: 1000;
}

/* ── Header ── */
#header {
  top: 0; left: 0; right: 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: var(--glass);
  backdrop-filter: var(--blur);
  border-bottom: 1px solid var(--border);
}

.logo {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--text);
}
.logo-slash { color: var(--green); }
.logo small { font-size: 10px; color: var(--muted); margin-left: 4px; }

.header-stats { display: flex; gap: 8px; }
.header-stat {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 4px 10px;
  font-size: 10px;
  color: var(--dim);
}
.header-stat b { color: var(--text); }
.header-stat.accent { color: var(--green); border-color: var(--green); }

/* ── Filter panel ── */
#filters {
  top: 64px; left: 16px;
  width: 180px;
  background: var(--glass);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 12px;
  max-height: calc(100vh - 240px);
  overflow-y: auto;
}

.filter-title {
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.filter-section + .filter-section { margin-top: 12px; }

.filter-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 8px;
  margin: 2px 0;
  border-radius: 3px;
  font-size: 11px;
  font-family: inherit;
  color: var(--dim);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}
.filter-item:hover { background: rgba(63, 185, 80, 0.1); }
.filter-item.active { background: rgba(63, 185, 80, 0.15); color: var(--green); }
.filter-item .count { font-size: 10px; color: var(--muted); }
.filter-item.active .count { color: var(--green); opacity: 0.7; }

.filter-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
  background: var(--orange);
}
.filter-dot.green { background: var(--green); }

/* ── Mascot ── */
#mascot {
  top: 64px; right: 16px;
  background: var(--glass);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 11px;
  color: var(--dim);
  display: flex;
  align-items: center;
  gap: 8px;
}
.mascot-icon { font-size: 20px; }

/* ── Legend ── */
#legend {
  bottom: 140px; right: 16px;
  background: var(--glass);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 10px 12px;
}
.legend-title {
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.legend-bar {
  width: 120px; height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(63,185,80,0.2), var(--green), var(--orange), #F05D3E);
}
.legend-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  font-size: 9px;
  color: var(--muted);
}

/* ── Bottom stat cards ── */
#stats-bar {
  bottom: 16px; left: 16px; right: 16px;
  display: flex;
  gap: 12px;
}

.stat-card {
  position: relative;
  flex: 1;
  background: var(--glass);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 14px;
}
.stat-label {
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 2px;
  text-transform: uppercase;
}
.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  margin-top: 4px;
}
.stat-value .unit { font-size: 12px; color: var(--muted); font-weight: 400; }
.stat-value.green { color: var(--green); }
.stat-value.orange { color: var(--orange); }
.stat-sub { font-size: 10px; color: var(--dim); margin-top: 2px; }

/* Mini bar chart */
.mini-bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 32px;
  margin-top: 8px;
}
.mini-bar {
  flex: 1;
  background: var(--green);
  border-radius: 1px 1px 0 0;
  min-width: 4px;
  opacity: 0.7;
  transition: height 0.3s ease;
}

/* ── Mobile filter toggle ── */
#filter-toggle {
  display: none;
  position: absolute;
  top: 56px; left: 16px;
  z-index: 1001;
  background: var(--glass);
  backdrop-filter: var(--blur);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 18px;
  padding: 6px 10px;
  cursor: pointer;
  font-family: inherit;
}
#filter-toggle:hover { color: var(--green); }

/* ── Animations ── */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

#filters, #mascot, #legend, #stats-bar {
  animation: fadeIn 0.4s ease both;
}
#filters   { animation-delay: 0.1s; }
#mascot    { animation-delay: 0.2s; }
#legend    { animation-delay: 0.3s; }
#stats-bar { animation-delay: 0.4s; }

/* ── Responsive ── */
@media (max-width: 768px) {
  #header {
    padding: 0 10px;
  }
  .header-stats { display: none; }

  #filter-toggle { display: block; }
  #filters {
    display: none;
    top: 96px;
    left: 10px;
    right: 10px;
    width: auto;
    max-height: 50vh;
  }
  #filters.open { display: block; }

  #mascot { display: none; }
  #legend { bottom: auto; top: 56px; right: 10px; }

  #stats-bar {
    left: 10px; right: 10px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .stat-card { flex: 1 1 calc(50% - 4px); min-width: 0; }
  .stat-value { font-size: 22px; }
}

@media (max-width: 480px) {
  .stat-card { flex: 1 1 100%; }
}

@media (prefers-reduced-motion: reduce) {
  #filters, #mascot, #legend, #stats-bar {
    animation: none;
  }
  .mini-bar { transition: none; }
}
```

- [ ] **Step 2: Verify panels render correctly**

Run: `wrangler pages dev . --port 8788` from goolz root, navigate to `/next-chapter/week-04/day-5/`. All glass panels should be visible, header at top, filters on left, stats at bottom. Map will be gray (no app.js yet).

- [ ] **Step 3: Commit**

```bash
git add next-chapter/week-04/day-5/style.css
git commit -m "feat(rattrack): add glass-panel CSS with dark ops palette"
```

---

### Task 4: Write app.js -- map, heatmap, filters, stats

**Files:**
- Create: `next-chapter/week-04/day-5/app.js`

- [ ] **Step 1: Write app.js**

```javascript
(function () {
  'use strict';

  // ── State ──
  let activeBorough = 'all';
  let activeType = 'all';
  let heatLayer = null;

  // ── Month names lookup ──
  const MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // ── Borough abbreviations ──
  const BOROUGH_ABBR = {
    'BROOKLYN': 'BK', 'QUEENS': 'QN', 'MANHATTAN': 'MN',
    'BRONX': 'BX', 'STATEN ISLAND': 'SI'
  };

  // ── Init map ──
  const map = L.map('map', {
    center: [40.7128, -73.94],
    zoom: 11,
    zoomControl: true,
    attributionControl: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(map);

  // Small attribution in corner
  L.control.attribution({ position: 'bottomright', prefix: false })
    .addAttribution('CartoDB | NYC 311 Open Data')
    .addTo(map);

  // ── Filter data ──
  function getFiltered() {
    return RATTRACK_DATA.filter(function (d) {
      if (activeBorough !== 'all' && d.borough !== activeBorough) return false;
      if (activeType !== 'all' && d.type !== activeType) return false;
      return true;
    });
  }

  // ── Render heatmap ──
  function renderHeat() {
    var data = getFiltered();
    var points = data.map(function (d) { return [d.lat, d.lng, 1]; });

    if (heatLayer) {
      map.removeLayer(heatLayer);
    }

    heatLayer = L.heatLayer(points, {
      radius: 22,
      blur: 15,
      maxZoom: 15,
      gradient: { 0.2: '#3FB950', 0.5: '#6FCF7F', 0.8: '#F0883E', 1.0: '#F05D3E' }
    }).addTo(map);
  }

  // ── Compute & render stats ──
  function renderStats() {
    var data = getFiltered();
    var total = data.length;

    // Update header total
    document.getElementById('stat-total').textContent = total;

    if (total === 0) {
      document.getElementById('stat-borough').textContent = '--';
      document.getElementById('stat-borough-sub').textContent = 'No data';
      document.getElementById('stat-season').textContent = '--';
      document.getElementById('stat-season-sub').textContent = 'No data';
      document.getElementById('stat-hour').innerHTML = '--';
      document.getElementById('stat-hour-sub').textContent = 'No data';
      document.getElementById('stat-trend').innerHTML = '';
      return;
    }

    // Worst borough
    var boroughCounts = {};
    data.forEach(function (d) {
      boroughCounts[d.borough] = (boroughCounts[d.borough] || 0) + 1;
    });
    var topBorough = Object.keys(boroughCounts).sort(function (a, b) {
      return boroughCounts[b] - boroughCounts[a];
    })[0];
    var topBoroughCount = boroughCounts[topBorough];
    document.getElementById('stat-borough').textContent = BOROUGH_ABBR[topBorough] || topBorough;
    document.getElementById('stat-borough-sub').textContent =
      topBorough.charAt(0) + topBorough.slice(1).toLowerCase() + ' -- ' + topBoroughCount + ' reports';

    // Peak month
    var monthCounts = {};
    data.forEach(function (d) { monthCounts[d.month] = (monthCounts[d.month] || 0) + 1; });
    var topMonth = Object.keys(monthCounts).sort(function (a, b) {
      return monthCounts[b] - monthCounts[a];
    })[0];
    document.getElementById('stat-season').textContent = MONTHS[topMonth];
    document.getElementById('stat-season-sub').textContent =
      monthCounts[topMonth] + ' reports in peak month';

    // Peak hour
    var hourCounts = {};
    data.forEach(function (d) { hourCounts[d.hour] = (hourCounts[d.hour] || 0) + 1; });
    var topHour = Object.keys(hourCounts).sort(function (a, b) {
      return hourCounts[b] - hourCounts[a];
    })[0];
    var h = parseInt(topHour, 10);
    var hourLabel = h === 0 ? '12' : h > 12 ? '' + (h - 12) : '' + h;
    var ampm = h < 12 ? 'am' : 'pm';
    document.getElementById('stat-hour').innerHTML = hourLabel + '<span class="unit">' + ampm + '</span>';
    document.getElementById('stat-hour-sub').textContent =
      hourCounts[topHour] + ' reports at ' + hourLabel + ampm;

    // Monthly trend bars
    var maxMonth = 0;
    for (var m = 1; m <= 12; m++) {
      if ((monthCounts[m] || 0) > maxMonth) maxMonth = monthCounts[m];
    }
    var barsHtml = '';
    for (var m = 1; m <= 12; m++) {
      var pct = maxMonth > 0 ? ((monthCounts[m] || 0) / maxMonth * 100) : 0;
      barsHtml += '<div class="mini-bar" style="height:' + Math.max(pct, 2) + '%"></div>';
    }
    document.getElementById('stat-trend').innerHTML = barsHtml;
  }

  // ── Filter click handlers ──
  function setupFilters() {
    var filterButtons = document.querySelectorAll('.filter-item');
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var borough = btn.dataset.borough;
        var type = btn.dataset.type;

        if (borough !== undefined) {
          // Borough filter
          activeBorough = (activeBorough === borough && borough !== 'all') ? 'all' : borough;
          document.querySelectorAll('[data-borough]').forEach(function (b) {
            b.classList.toggle('active', b.dataset.borough === activeBorough);
          });
        } else if (type !== undefined) {
          // Type filter
          activeType = (activeType === type && type !== 'all') ? 'all' : type;
          document.querySelectorAll('[data-type]').forEach(function (b) {
            b.classList.toggle('active', b.dataset.type === activeType);
          });
        }

        renderHeat();
        renderStats();
      });
    });
  }

  // ── Mobile filter toggle ──
  function setupMobileToggle() {
    var toggle = document.getElementById('filter-toggle');
    var filters = document.getElementById('filters');
    toggle.addEventListener('click', function () {
      filters.classList.toggle('open');
    });
  }

  // ── Init ──
  renderHeat();
  renderStats();
  setupFilters();
  setupMobileToggle();

})();
```

- [ ] **Step 2: Test the full app locally**

Run: `wrangler pages dev . --port 8788` from goolz root, navigate to `/next-chapter/week-04/day-5/`.

Verify:
1. Dark map tiles load with green/orange heatmap visible over NYC
2. Glass header shows RATTRACK///NYC with stat badges
3. Filter panel on left shows boroughs and types with counts
4. Bottom stat cards show Worst Borough, Peak Season, Peak Hour, Monthly Trend
5. Clicking "Brooklyn" in filter panel re-renders heatmap to Brooklyn only, stats update
6. Clicking "Brooklyn" again returns to All Boroughs
7. Type filters work the same way
8. Mobile: resize to <768px, header stats hide, hamburger appears, filters toggle on click

- [ ] **Step 3: Commit**

```bash
git add next-chapter/week-04/day-5/app.js
git commit -m "feat(rattrack): add map, heatmap, filters, and live stats"
```

---

### Task 5: Add desktop icon to next-chapter

**Files:**
- Modify: `next-chapter/index.html` (~line 1242, after last W4D icon)

- [ ] **Step 1: Find the last W4D icon**

Run: `grep -n 'W4D' next-chapter/index.html`

This will show the line numbers. The new icon goes right after the last W4D icon's closing `</div>`.

- [ ] **Step 2: Add the RatTrack icon**

Insert after the last W4D icon div:

```html
<div class="icon" tabindex="0" title="Week 4 Day 5 -- RatTrack NYC: 311 rodent complaint heatmap (opens in a new tab)"
     ondblclick="window.open('/next-chapter/week-04/day-5/','_blank','noopener')"
     onkeydown="if(event.key==='Enter')window.open('/next-chapter/week-04/day-5/','_blank','noopener')">
  <div class="icon-img shortcut">🐀</div>
  <div class="icon-label">W4D5.rat</div>
</div>
```

- [ ] **Step 3: Verify the icon appears**

Run: `wrangler pages dev . --port 8788`, navigate to `/next-chapter/`. The rat emoji icon should appear on the desktop. Double-click should open the RatTrack page in a new tab.

- [ ] **Step 4: Commit**

```bash
git add next-chapter/index.html
git commit -m "feat(rattrack): add W4D5 desktop icon to next-chapter"
```

---

### Task 6: Deploy

- [ ] **Step 1: Verify everything works locally one more time**

Run: `wrangler pages dev . --port 8788`

Checklist:
- `/next-chapter/` desktop shows W4D5.rat icon
- Double-click icon opens `/next-chapter/week-04/day-5/`
- Heatmap renders over dark tiles
- Filters work (borough + type)
- Stats recompute on filter
- Mobile responsive (panels rearrange)
- No console errors

- [ ] **Step 2: Deploy to Cloudflare Pages**

```bash
wrangler pages deploy .
```

- [ ] **Step 3: Verify production**

Navigate to `https://goolz.org/next-chapter/week-04/day-5/` and confirm the heatmap loads correctly.

- [ ] **Step 4: Final commit (if any last-minute fixes)**

```bash
git add -A
git commit -m "chore(rattrack): final deploy adjustments"
git push
```
