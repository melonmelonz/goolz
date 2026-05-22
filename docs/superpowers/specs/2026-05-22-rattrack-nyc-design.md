# RatTrack NYC -- Design Spec

**Date:** 2026-05-22
**Location:** `/next-chapter/week-04/day-5/`
**Status:** Approved

## Overview

RatTrack NYC is a full-viewport interactive heatmap SPA that visualizes 387 rodent complaints filed through NYC 311 in 2023. The map is the entire page -- a CartoDB Dark Matter dark-tiled map with a Leaflet heatmap layer glowing green-to-orange, overlaid with frosted-glass floating panels for filtering, stats, and branding.

The mascot is a Rat Terrier -- the dog breed literally built for this job.

## Tech Stack

- **Leaflet** (v1.9.x) + **leaflet-heat** plugin -- map rendering + heatmap layer, loaded from CDN
- **CartoDB Dark Matter** tiles -- free, no API key, dark aesthetic
- **Vanilla HTML/CSS/JS** -- no framework, no build step
- **Cloudflare Pages** -- static hosting, zero backend
- All 387 data points baked into a static `data.js` file as a JSON array

## Color Palette

| Role    | Hex       | Name         |
|---------|-----------|--------------|
| Base    | `#0D1117` | dark bg      |
| Surface | `#161B22` | panel bg     |
| Border  | `#30363D` | subtle edge  |
| Primary | `#3FB950` | green        |
| Hot     | `#F0883E` | orange       |
| Text    | `#C9D1D9` | light gray   |
| Muted   | `#484F58` | dim labels   |
| Dim     | `#8B949E` | secondary    |

All floating panels use `background: rgba(13,17,23,0.85)` with `backdrop-filter: blur(12px)` for the frosted glass effect.

## Layout

The entire page is the map. All UI is floating panels overlaid on top.

### Glass Header Bar (top, full-width)
- **Left:** `RATTRACK///NYC` logo in monospace, Rat Terrier mascot icon
- **Right:** Summary stat badges -- `387 reports`, `4 types`, `2023`, `LIVE HEATMAP` indicator
- Height: 48px, frosted glass background

### Filter Panel (top-left, below header)
- **Borough toggles:** All Boroughs (387), Brooklyn (125), Queens (95), Manhattan (79), Bronx (62), Staten Island (26)
- **Type toggles:** All Types, Signs of Rodents (122), Mouse Sighting (102), Rat Sighting (84), Condition Attracting Rodents (79)
- Clicking a filter re-renders the heatmap and updates all stat cards
- Active filter highlighted with green text + green dot
- Width: ~180px, frosted glass

### Bottom Stat Cards (bottom, full-width row)
Four equal-width cards in a flex row:

1. **Worst Borough** -- shows borough abbreviation (BK), full name + count below
2. **Peak Season** -- shows peak month name, count below
3. **Peak Hour** -- shows hour with am/pm suffix, count below
4. **Monthly Trend** -- 12-bar sparkline chart (Jan-Dec), mini bars in green

All stats recompute dynamically when filters change.

### Heatmap Legend (bottom-right, above stat cards)
- Gradient bar from low (transparent green) to high (solid orange)
- Labels: "Low" / "High"

### Mascot (top-right, below header)
- Rat Terrier emoji + short flavor text ("Sniffing out rodent activity...")
- Small frosted glass tooltip

## Heatmap Configuration

- **Gradient:** green (`#3FB950`) at low density through orange (`#F0883E`) at high density
- **Radius:** tuned for NYC scale (~20-25px at default zoom)
- **Blur:** ~15px for smooth blending
- **Max zoom:** leaflet-heat maxZoom set to allow detail at street level
- Default view centered on NYC (~40.7128, -73.9060), zoom level ~11

## Interactivity

### Filtering
- Borough filter: click to isolate one borough, click again to deselect (back to all)
- Type filter: same toggle behavior
- Filters are combinable -- e.g. Brooklyn + Rat Sighting only
- On filter change: heatmap re-renders with filtered data, all stat cards recompute
- Header stat badges update counts

### Map Controls
- Standard Leaflet pan/zoom (scroll, pinch, drag)
- Zoom controls positioned default (top-right) or hidden if cluttered

## Data

### Source
SQLite database: `nyc_311_2023.db`, table `service_requests`, filtered to `complaint_type = 'Rodent'`

### Extraction
One-time extraction to static JS file. Each record contains:

```javascript
{
  lat: 40.759356,
  lng: -73.818475,
  type: "Condition Attracting Rodents",  // descriptor field
  borough: "QUEENS",
  month: 12,
  hour: 17,
  zip: "11367",
  date: "2023-12-14"
}
```

### File: `data.js`
Exports a single array: `const RATTRACK_DATA = [ ... ];`

387 records, all have valid lat/lng coordinates.

## File Structure

```
next-chapter/week-04/day-5/
  index.html    -- SPA shell: Leaflet CDN includes, panel markup, viewport setup
  style.css     -- glass panels, header, filters, stat cards, responsive, animations
  data.js       -- 387 rodent complaints as JSON array
  app.js        -- map initialization, heatmap layer, filter logic, stat computation
```

## Responsive Behavior

- **Desktop (>768px):** Full layout as described -- side panel + bottom cards + header
- **Mobile (<768px):** Filter panel collapses to a hamburger/drawer, stat cards stack vertically or collapse to a swipeable row, header condenses to logo + hamburger
- `prefers-reduced-motion`: disable any transitions/animations

## Desktop Icon Integration

Add an icon to the `/next-chapter/index.html` Win95 desktop:
- Icon label: `W4D5.rat` or `RATTRACK.exe`
- Emoji: rat or dog emoji
- Double-click opens `/next-chapter/week-04/day-5/` in a new tab
- Tooltip describing the project

## Dependencies (all CDN, no npm)

- `leaflet@1.9.4` -- CSS + JS
- `leaflet-heat` -- heatmap plugin JS
- No other external dependencies

## Out of Scope

- No backend or API
- No real-time data updates
- No user-submitted reports
- No address geocoding
- No persistence or saved filters
