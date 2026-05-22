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

  // ── Heatmap ──
  // Log-scale: raw weights 1-5676, log range ~0-8.6
  var heatPoints = [];
  for (var i = 0; i < RT_HEAT.length; i += 3) {
    heatPoints.push([RT_HEAT[i], RT_HEAT[i + 1], Math.log(RT_HEAT[i + 2] + 1)]);
  }

  // maxZoom set very high so leaflet-heat keeps interpolating at street zoom
  // instead of showing individual point blobs
  var heatLayer = L.heatLayer(heatPoints, {
    radius: 30, blur: 25, maxZoom: 22, max: 7,
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

  // ── Click-to-inspect: fetch real reports from NYC Open Data API ──
  var activePopup = null;

  map.on('click', function (e) {
    if (map.getZoom() < 12) return;

    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    var range = 0.005; // ~0.5km box around click

    // Show loading popup immediately
    var loadingPopup = L.popup({ className: 'rt-popup', closeButton: true, maxWidth: 320, offset: [0, -4] })
      .setLatLng(e.latlng)
      .setContent('<div style="font-family:monospace;color:#C9D1D9;padding:4px;"><span style="color:#3FB950;">&#9679;</span> Fetching reports...</div>')
      .openOn(map);

    // Query NYC Open Data Socrata API for actual complaints near this point
    var where = "complaint_type='Rodent' AND latitude IS NOT NULL"
      + " AND latitude>" + (lat - range) + " AND latitude<" + (lat + range)
      + " AND longitude>" + (lng - range) + " AND longitude<" + (lng + range);
    var url = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?"
      + "$where=" + encodeURIComponent(where)
      + "&$order=created_date DESC"
      + "&$limit=8"
      + "&$select=descriptor,borough,created_date,incident_address,status,resolution_description";

    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (reports) {
        if (!reports.length) {
          loadingPopup.setContent('<div style="font-family:monospace;color:#8B949E;padding:4px;">No reports found in this area</div>');
          return;
        }

        var html = '<div class="rt-reports">';
        html += '<div class="rt-reports-header">' + reports.length + ' most recent reports</div>';

        reports.forEach(function (r) {
          var date = (r.created_date || '').substring(0, 10);
          var desc = r.descriptor || 'Unknown';
          var addr = r.incident_address || 'No address';
          var status = r.status || '';
          var statusColor = status === 'Closed' ? '#3FB950' : status === 'Open' ? '#F0883E' : '#8B949E';

          html += '<div class="rt-report">';
          html += '<div class="rt-report-type">' + desc + '</div>';
          html += '<div class="rt-report-meta">';
          html += '<span>' + addr + '</span>';
          html += '<span>' + date + '</span>';
          html += '</div>';
          if (status) {
            html += '<div class="rt-report-status" style="color:' + statusColor + ';">' + status + '</div>';
          }
          html += '</div>';
        });

        html += '</div>';
        loadingPopup.setContent(html);
        loadingPopup.update();
      })
      .catch(function () {
        loadingPopup.setContent('<div style="font-family:monospace;color:#F0883E;padding:4px;">Could not fetch reports</div>');
      });
  });

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
    var total = getTotal();
    ALL_BOROS.forEach(function (b) { setCount('boro-' + b, getBoroCount(b)); });
    setCount('boro-all', total);
    ALL_TYPES.forEach(function (t) { setCount('type-' + t, getTypeCount(t)); });
    setCount('type-all', total);
    ALL_YEARS.forEach(function (y) { setCount('year-' + y, getYearCount(y)); });
    setCount('year-all', total);
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
      hint.classList.toggle('hidden', map.getZoom() >= 12);
    });
  }

  // ── Init ──
  render();
  setTimeout(function () {
    document.getElementById('loading').classList.add('done');
    setTimeout(function () { document.getElementById('loading').remove(); }, 600);
  }, 300);

})();
