(function () {
  'use strict';

  var BORO_NAME = { K: 'Brooklyn', Q: 'Queens', M: 'Manhattan', X: 'Bronx', S: 'Staten Island' };
  var BORO_ABBR = { K: 'BK', Q: 'QN', M: 'MN', X: 'BX', S: 'SI' };
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var ALL_TYPES = ['R', 'S', 'M', 'C'];
  var ALL_BOROS = ['K', 'M', 'X', 'Q', 'S'];
  var ALL_YEARS = [2026, 2025, 2024, 2023, 2022, 2021, 2020];

  var S = RT_STATS;
  var activeYear = 'all';
  var activeBorough = 'all';
  var activeType = 'all';

  // ── Map ──
  var map = L.map('map', {
    center: [40.7128, -73.94], zoom: 11,
    zoomControl: true, attributionControl: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19, subdomains: 'abcd'
  }).addTo(map);

  L.control.attribution({ position: 'bottomright', prefix: false })
    .addAttribution('<a href="https://carto.com/">CartoDB</a> | <a href="https://opendata.cityofnewyork.us/">NYC Open Data</a>')
    .addTo(map);

  // ── Heatmap layer ──
  var heatPoints = [];
  for (var i = 0; i < RT_HEAT.length; i += 3) {
    heatPoints.push([RT_HEAT[i], RT_HEAT[i + 1], Math.log(RT_HEAT[i + 2] + 1)]);
  }

  var heatLayer = L.heatLayer(heatPoints, {
    radius: 22, blur: 20, maxZoom: 17, max: 7,
    minOpacity: 0.05,
    gradient: {
      0.0: 'transparent',
      0.15: 'rgba(63,185,80,0.25)',
      0.35: '#3FB950',
      0.55: '#8CD790',
      0.75: '#F0883E',
      1.0: '#F05D3E'
    }
  }).addTo(map);

  // ── Circle markers (appear on zoom >= 13) ──
  var markersLayer = L.layerGroup();
  var markersBuilt = false;

  function buildMarkers() {
    if (markersBuilt) return;
    markersBuilt = true;
    for (var i = 0; i < RT_HEAT.length; i += 3) {
      var lat = RT_HEAT[i], lng = RT_HEAT[i + 1], count = RT_HEAT[i + 2];
      var intensity = Math.min(count / 1000, 1);
      var color = intensity > 0.6 ? '#F05D3E' : intensity > 0.3 ? '#F0883E' : '#3FB950';
      var radius = Math.max(4, Math.min(16, Math.sqrt(count) * 0.8));

      var marker = L.circleMarker([lat, lng], {
        radius: radius,
        fillColor: color,
        fillOpacity: 0.7,
        color: 'rgba(255,255,255,0.3)',
        weight: 1
      });

      marker._rtCount = count;
      marker._rtLat = lat;
      marker._rtLng = lng;

      marker.on('click', function (e) {
        var m = e.target;
        var c = m._rtCount;
        var sev = c > 1000 ? 'Critical hotspot' : c > 500 ? 'High activity' : c > 100 ? 'Moderate activity' : 'Low activity';
        var sevColor = c > 1000 ? '#F05D3E' : c > 500 ? '#F0883E' : c > 100 ? '#3FB950' : '#8B949E';
        var popup = '<div style="font-family:monospace;color:#C9D1D9;min-width:180px;">'
          + '<div style="font-size:13px;font-weight:700;margin-bottom:6px;color:' + sevColor + ';">' + sev + '</div>'
          + '<div style="font-size:22px;font-weight:700;">' + c.toLocaleString() + ' <span style="font-size:11px;color:#8B949E;">reports</span></div>'
          + '<div style="font-size:10px;color:#8B949E;margin-top:6px;">Grid: ' + m._rtLat.toFixed(2) + ', ' + m._rtLng.toFixed(2) + '</div>'
          + '<div style="font-size:10px;color:#8B949E;">~1km area, 2020-2026</div>'
          + '</div>';
        L.popup({ className: 'rt-popup', closeButton: false, offset: [0, -4] })
          .setLatLng(m.getLatLng())
          .setContent(popup)
          .openOn(map);
      });

      markersLayer.addLayer(marker);
    }
  }

  function toggleMarkersByZoom() {
    var z = map.getZoom();
    if (z >= 13) {
      buildMarkers();
      if (!map.hasLayer(markersLayer)) map.addLayer(markersLayer);
    } else {
      if (map.hasLayer(markersLayer)) map.removeLayer(markersLayer);
    }
  }

  map.on('zoomend', toggleMarkersByZoom);
  toggleMarkersByZoom();

  // ── Stats helpers ──
  function getTotal() {
    var y = activeYear, b = activeBorough, t = activeType;
    if (y === 'all' && b === 'all' && t === 'all') return S.total;
    if (y !== 'all' && b === 'all' && t === 'all') return S.byYear[y] || 0;
    if (y === 'all' && b !== 'all' && t === 'all') return S.byBoro[b] || 0;
    if (y === 'all' && b === 'all' && t !== 'all') return S.byType[t] || 0;
    if (y !== 'all' && b !== 'all' && t === 'all') return S.byYB[y + '_' + b] || 0;
    if (y !== 'all' && b === 'all' && t !== 'all') return S.byYT[y + '_' + t] || 0;
    if (y === 'all' && b !== 'all' && t !== 'all') return S.byBT[b + '_' + t] || 0;
    return S.byYBT[y + '_' + b + '_' + t] || 0;
  }

  function getBoroCount(b) {
    var y = activeYear, t = activeType;
    if (y === 'all' && t === 'all') return S.byBoro[b] || 0;
    if (y !== 'all' && t === 'all') return S.byYB[y + '_' + b] || 0;
    if (y === 'all' && t !== 'all') return S.byBT[b + '_' + t] || 0;
    return S.byYBT[y + '_' + b + '_' + t] || 0;
  }

  function getTypeCount(t) {
    var y = activeYear, b = activeBorough;
    if (y === 'all' && b === 'all') return S.byType[t] || 0;
    if (y !== 'all' && b === 'all') return S.byYT[y + '_' + t] || 0;
    if (y === 'all' && b !== 'all') return S.byBT[b + '_' + t] || 0;
    return S.byYBT[y + '_' + b + '_' + t] || 0;
  }

  function getYearCount(yr) {
    var b = activeBorough, t = activeType;
    if (b === 'all' && t === 'all') return S.byYear[yr] || 0;
    if (b !== 'all' && t === 'all') return S.byYB[yr + '_' + b] || 0;
    if (b === 'all' && t !== 'all') return S.byYT[yr + '_' + t] || 0;
    return S.byYBT[yr + '_' + b + '_' + t] || 0;
  }

  function getMonthly() {
    if (activeYear === 'all' && activeBorough === 'all' && activeType === 'all') return S.monthly;
    if (activeYear !== 'all' && activeBorough === 'all' && activeType === 'all') return S.monthByY[activeYear] || new Array(12).fill(0);
    var totals = new Array(12).fill(0);
    ALL_YEARS.forEach(function (y) {
      if (activeYear !== 'all' && y !== activeYear) return;
      var ym = S.monthByY[y];
      if (!ym) return;
      var yrTotal = S.byYear[y] || 1;
      var filteredYr = getYearCount(y);
      var ratio = filteredYr / yrTotal;
      for (var m = 0; m < 12; m++) totals[m] += Math.round(ym[m] * ratio);
    });
    return totals;
  }

  // ── Render stats ──
  function render() {
    var total = getTotal();
    document.getElementById('stat-total').textContent = total.toLocaleString();
    updateFilterCounts();

    if (total === 0) {
      document.getElementById('stat-borough').textContent = '--';
      document.getElementById('stat-borough-sub').textContent = 'No data';
      document.getElementById('stat-season').textContent = '--';
      document.getElementById('stat-season-sub').textContent = '';
      document.getElementById('stat-count').textContent = '0';
      document.getElementById('stat-count-sub').textContent = '';
      document.getElementById('stat-trend').innerHTML = '';
      return;
    }

    // Worst borough
    var topB = '', topBC = 0;
    ALL_BOROS.forEach(function (b) {
      var c = getBoroCount(b);
      if (c > topBC) { topB = b; topBC = c; }
    });
    document.getElementById('stat-borough').textContent = BORO_ABBR[topB];
    document.getElementById('stat-borough-sub').textContent = BORO_NAME[topB] + ' -- ' + topBC.toLocaleString();

    // Peak month
    var monthly = getMonthly();
    var topM = 0;
    for (var m = 0; m < 12; m++) { if (monthly[m] > monthly[topM]) topM = m; }
    document.getElementById('stat-season').textContent = MONTHS[topM];
    document.getElementById('stat-season-sub').textContent = monthly[topM].toLocaleString() + ' in peak month';

    // Total
    document.getElementById('stat-count').textContent = total.toLocaleString();
    document.getElementById('stat-count-sub').textContent = 'complaints (' + (activeYear !== 'all' ? activeYear : '2020-2026') + ')';

    // Sparkline
    var maxM = 0;
    for (var m = 0; m < 12; m++) { if (monthly[m] > maxM) maxM = monthly[m]; }
    var bars = '';
    for (var m = 0; m < 12; m++) {
      var pct = maxM > 0 ? (monthly[m] / maxM * 100) : 0;
      bars += '<div class="mini-bar" style="height:' + Math.max(pct, 2) + '%" title="' + MONTHS[m] + ': ' + monthly[m].toLocaleString() + '"></div>';
    }
    document.getElementById('stat-trend').innerHTML = bars;
    document.getElementById('stat-trend-sub').textContent = 'Jan - Dec' + (activeYear !== 'all' ? ' ' + activeYear : '');
  }

  function updateFilterCounts() {
    var allBoro = 0;
    ALL_BOROS.forEach(function (b) { var c = getBoroCount(b); allBoro += c; setCount('boro-' + b, c); });
    setCount('boro-all', allBoro);
    var allType = 0;
    ALL_TYPES.forEach(function (t) { var c = getTypeCount(t); allType += c; setCount('type-' + t, c); });
    setCount('type-all', allType);
    var allYear = 0;
    ALL_YEARS.forEach(function (y) { var c = getYearCount(y); allYear += c; setCount('year-' + y, c); });
    setCount('year-all', allYear);
  }

  function setCount(key, val) {
    var el = document.querySelector('[data-count="' + key + '"]');
    if (el) el.textContent = val.toLocaleString();
  }

  // ── Filters ──
  document.getElementById('filters').addEventListener('click', function (e) {
    var btn = e.target.closest('.filter-item');
    if (!btn) return;

    var y = btn.dataset.year, b = btn.dataset.borough, t = btn.dataset.type;

    if (y !== undefined) {
      activeYear = y === 'all' ? 'all' : parseInt(y, 10);
      btn.closest('.filter-group').querySelectorAll('.filter-item').forEach(function (el) {
        el.classList.toggle('active', (el.dataset.year === 'all' ? 'all' : parseInt(el.dataset.year, 10)) === activeYear);
      });
    } else if (b !== undefined) {
      activeBorough = b;
      btn.closest('.filter-group').querySelectorAll('.filter-item').forEach(function (el) {
        el.classList.toggle('active', el.dataset.borough === activeBorough);
      });
    } else if (t !== undefined) {
      activeType = t;
      btn.closest('.filter-group').querySelectorAll('.filter-item').forEach(function (el) {
        el.classList.toggle('active', el.dataset.type === activeType);
      });
    }
    render();
  });

  document.getElementById('filter-toggle').addEventListener('click', function () {
    document.getElementById('filters').classList.toggle('open');
  });

  // ── Zoom hint ──
  var hint = document.getElementById('zoom-hint');
  if (hint) {
    map.on('zoomend', function () {
      if (map.getZoom() >= 13) {
        hint.classList.add('hidden');
      } else {
        hint.classList.remove('hidden');
      }
    });
  }

  // ── Init ──
  render();
  setTimeout(function () {
    document.getElementById('loading').classList.add('done');
    setTimeout(function () { document.getElementById('loading').remove(); }, 600);
  }, 300);

})();
