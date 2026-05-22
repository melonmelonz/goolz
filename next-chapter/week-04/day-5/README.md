# RatTrack NYC

Interactive heatmap of 227,319 rodent complaints filed through NYC 311 (2020-2026).

Live: [goolz.org/next-chapter/week-04/day-5/](https://goolz.org/next-chapter/week-04/day-5/)

## Stack

- **Leaflet 1.9.4** + **leaflet-heat** -- map rendering and heatmap layer, vendored locally
- **CartoDB Dark Matter** tiles -- dark basemap, free, no API key
- **Vanilla HTML/CSS/JS** -- no framework, no build step, no bundler
- **Cloudflare Pages** -- static hosting via `wrangler pages deploy`

## Data layer

There is no database. The data pipeline is:

1. **Source:** [NYC 311 Service Requests](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9) on NYC Open Data (Socrata API)
2. **Pre-aggregation:** A Python script fetches all `complaint_type='Rodent'` records (~227K), rounds coordinates to 3 decimal places (~111m grid), and outputs two structures:
   - `RT_HEAT` -- flat array of `[lat, lng, weight, ...]` for the 30,725 heatmap cells
   - `RT_STATS` -- pre-computed cross-tabulations (by year, borough, type, and all combinations) for instant filter stats
3. **Static file:** Everything ships as `data.js` (514KB, ~150KB gzipped). No runtime DB queries for the heatmap or stat cards.
4. **Live API:** Clicking the map (zoom 12+) fetches the 8 most recent individual complaints near that point directly from the NYC Open Data Socrata API in real time. This is the only network request after page load.

## Features

- Full-viewport heatmap with green-to-red gradient (sqrt-scaled, maxZoom 14)
- Filter by year (2020-2026), borough (5), and complaint type (4) -- updates stat cards
- Double-click a borough to fly there
- Click anywhere on map (zoom 12+) to fetch real individual complaints with address, date, type, and status
- Glass-panel dark ops UI with frosted backdrop-filter
- Bottom stat cards: worst borough, peak month, total count, monthly sparkline
- Mobile responsive with hamburger filter drawer
- Loading screen with Rat Terrier mascot

## Files

```
day-5/
  index.html       6KB   SPA shell
  style.css       10KB   glass panels, layout, responsive, popup styles
  app.js          12KB   map, heatmap, filters, stats, click-to-inspect, borough zoom
  data.js        514KB   30K heatmap cells + pre-computed stats
  leaflet.js     144KB   vendored (avoids CSP issues with CDN)
  leaflet.css     14KB   vendored
  leaflet-heat.js  5KB   vendored
  README.md              this file
```

Total: ~705KB (~200KB gzipped over the wire).

## Regenerating data

To pull fresh data from the NYC Open Data API and rebuild `data.js`:

```bash
python3 scripts/fetch-rattrack.py  # not yet extracted, see git history for inline script
```

The aggregation script lives in the git history (commit `8dabf86`). It fetches all rodent complaints in 50K batches, aggregates to a 3-decimal grid, pre-computes all filter cross-tabs, and writes `data.js`.

## Data source

NYC 311 Service Requests, filtered to `complaint_type = 'Rodent'`. The dataset is public domain via [NYC Open Data](https://opendata.cityofnewyork.us/).
