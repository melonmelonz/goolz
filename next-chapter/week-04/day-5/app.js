(function () {
  'use strict';

  // ── Decode maps ──
  var TYPE_NAME = { R: 'Rat Sighting', M: 'Mouse Sighting', S: 'Signs of Rodents', C: 'Conditions' };
  var BORO_NAME = { K: 'Brooklyn', Q: 'Queens', M: 'Manhattan', X: 'Bronx', S: 'Staten Island' };
  var BORO_ABBR = { K: 'BK', Q: 'QN', M: 'MN', X: 'BX', S: 'SI' };
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var ALL_TYPES = ['R', 'S', 'M', 'C'];
  var ALL_BOROS = ['K', 'M', 'X', 'Q', 'S'];
  var ALL_YEARS = [2026, 2025, 2024, 2023, 2022, 2021, 2020];

  // ── State ──
  var activeYear = 'all';
  var activeBorough = 'all';
  var activeType = 'all';
  var heatLayer = null;

  // Data accessors: [lat, lng, type, boro, year, count]
  function dLat(d) { return d[0]; }
  function dLng(d) { return d[1]; }
  function dType(d) { return d[2]; }
  function dBoro(d) { return d[3]; }
  function dYear(d) { return d[4]; }
  function dCount(d) { return d[5]; }

  // ── Init map ──
  var map = L.map('map', {
    center: [40.7128, -73.94],
    zoom: 11,
    zoomControl: true,
    attributionControl: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19, subdomains: 'abcd'
  }).addTo(map);

  L.control.attribution({ position: 'bottomright', prefix: false })
    .addAttribution('<a href="https://carto.com/">CartoDB</a> | <a href="https://opendata.cityofnewyork.us/">NYC Open Data</a>')
    .addTo(map);

  // ── Filter ──
  function getFiltered() {
    var result = [];
    for (var i = 0; i < RT_DATA.length; i++) {
      var d = RT_DATA[i];
      if (activeYear !== 'all' && dYear(d) !== activeYear) continue;
      if (activeBorough !== 'all' && dBoro(d) !== activeBorough) continue;
      if (activeType !== 'all' && dType(d) !== activeType) continue;
      result.push(d);
    }
    return result;
  }

  // ── Render heatmap ──
  function renderHeat() {
    var data = getFiltered();
    var points = [];
    for (var i = 0; i < data.length; i++) {
      points.push([dLat(data[i]), dLng(data[i]), dCount(data[i])]);
    }

    if (heatLayer) map.removeLayer(heatLayer);

    heatLayer = L.heatLayer(points, {
      radius: 18,
      blur: 14,
      maxZoom: 15,
      max: 8.0,
      gradient: {
        0.1: 'rgba(63,185,80,0.2)',
        0.3: '#3FB950',
        0.6: '#6FCF7F',
        0.8: '#F0883E',
        1.0: '#F05D3E'
      }
    }).addTo(map);
  }

  // ── Sum complaint count from filtered grid cells ──
  function sumCount(data) {
    var s = 0;
    for (var i = 0; i < data.length; i++) s += dCount(data[i]);
    return s;
  }

  // ── Get monthly stats for current filters ──
  function getMonthly() {
    var totals = [0,0,0,0,0,0,0,0,0,0,0,0];
    var keys = Object.keys(RT_MONTH);
    for (var i = 0; i < keys.length; i++) {
      var parts = keys[i].split('_'); // boro_type_year
      var b = parts[0], t = parts[1], y = parseInt(parts[2], 10);
      if (activeYear !== 'all' && y !== activeYear) continue;
      if (activeBorough !== 'all' && b !== activeBorough) continue;
      if (activeType !== 'all' && t !== activeType) continue;
      var months = RT_MONTH[keys[i]];
      for (var m = 0; m < 12; m++) totals[m] += months[m];
    }
    return totals;
  }

  // ── Render stats ──
  function renderStats() {
    var data = getFiltered();
    var total = sumCount(data);

    document.getElementById('stat-total').textContent = total.toLocaleString();
    updateFilterCounts();

    if (total === 0) {
      document.getElementById('stat-borough').textContent = '--';
      document.getElementById('stat-borough-sub').textContent = 'No data';
      document.getElementById('stat-season').textContent = '--';
      document.getElementById('stat-season-sub').textContent = 'No data';
      document.getElementById('stat-count').textContent = '0';
      document.getElementById('stat-count-sub').textContent = '';
      document.getElementById('stat-trend').innerHTML = '';
      return;
    }

    // Worst borough
    var boroCounts = {};
    for (var i = 0; i < data.length; i++) {
      var b = dBoro(data[i]);
      boroCounts[b] = (boroCounts[b] || 0) + dCount(data[i]);
    }
    var topBoro = Object.keys(boroCounts).sort(function (a, b) {
      return boroCounts[b] - boroCounts[a];
    })[0];
    document.getElementById('stat-borough').textContent = BORO_ABBR[topBoro] || topBoro;
    document.getElementById('stat-borough-sub').textContent =
      (BORO_NAME[topBoro] || topBoro) + ' -- ' + (boroCounts[topBoro] || 0).toLocaleString();

    // Peak month from monthly stats
    var monthly = getMonthly();
    var topMonth = 0;
    for (var m = 0; m < 12; m++) {
      if (monthly[m] > monthly[topMonth]) topMonth = m;
    }
    document.getElementById('stat-season').textContent = MONTHS[topMonth];
    document.getElementById('stat-season-sub').textContent =
      monthly[topMonth].toLocaleString() + ' in peak month';

    // Total count card
    document.getElementById('stat-count').textContent = total.toLocaleString();
    var label = activeYear !== 'all' ? String(activeYear) : '2020-2026';
    document.getElementById('stat-count-sub').textContent = 'complaints (' + label + ')';

    // Monthly sparkline
    var maxM = 0;
    for (var m = 0; m < 12; m++) { if (monthly[m] > maxM) maxM = monthly[m]; }
    var bars = '';
    for (var m = 0; m < 12; m++) {
      var pct = maxM > 0 ? (monthly[m] / maxM * 100) : 0;
      bars += '<div class="mini-bar" style="height:' + Math.max(pct, 2) + '%" title="' +
        MONTHS[m] + ': ' + monthly[m].toLocaleString() + '"></div>';
    }
    document.getElementById('stat-trend').innerHTML = bars;
    document.getElementById('stat-trend-sub').textContent =
      'Jan - Dec' + (activeYear !== 'all' ? ' ' + activeYear : '');
  }

  // ── Update filter counts ──
  function updateFilterCounts() {
    var i, d, k;

    // Year counts (ignore year filter)
    var yc = {};
    var ytotal = 0;
    for (i = 0; i < RT_DATA.length; i++) {
      d = RT_DATA[i];
      if (activeBorough !== 'all' && dBoro(d) !== activeBorough) continue;
      if (activeType !== 'all' && dType(d) !== activeType) continue;
      var c = dCount(d);
      yc[dYear(d)] = (yc[dYear(d)] || 0) + c;
      ytotal += c;
    }
    setCount('year-all', ytotal);
    for (i = 0; i < ALL_YEARS.length; i++) setCount('year-' + ALL_YEARS[i], yc[ALL_YEARS[i]] || 0);

    // Borough counts (ignore borough filter)
    var bc = {};
    var btotal = 0;
    for (i = 0; i < RT_DATA.length; i++) {
      d = RT_DATA[i];
      if (activeYear !== 'all' && dYear(d) !== activeYear) continue;
      if (activeType !== 'all' && dType(d) !== activeType) continue;
      var c = dCount(d);
      bc[dBoro(d)] = (bc[dBoro(d)] || 0) + c;
      btotal += c;
    }
    setCount('boro-all', btotal);
    for (i = 0; i < ALL_BOROS.length; i++) setCount('boro-' + ALL_BOROS[i], bc[ALL_BOROS[i]] || 0);

    // Type counts (ignore type filter)
    var tc = {};
    var ttotal = 0;
    for (i = 0; i < RT_DATA.length; i++) {
      d = RT_DATA[i];
      if (activeYear !== 'all' && dYear(d) !== activeYear) continue;
      if (activeBorough !== 'all' && dBoro(d) !== activeBorough) continue;
      var c = dCount(d);
      tc[dType(d)] = (tc[dType(d)] || 0) + c;
      ttotal += c;
    }
    setCount('type-all', ttotal);
    for (i = 0; i < ALL_TYPES.length; i++) setCount('type-' + ALL_TYPES[i], tc[ALL_TYPES[i]] || 0);
  }

  function setCount(key, val) {
    var el = document.querySelector('[data-count="' + key + '"]');
    if (el) el.textContent = val.toLocaleString();
  }

  // ── Filter click handlers ──
  document.getElementById('filters').addEventListener('click', function (e) {
    var btn = e.target.closest('.filter-item');
    if (!btn) return;

    var y = btn.dataset.year;
    var b = btn.dataset.borough;
    var t = btn.dataset.type;

    if (y !== undefined) {
      activeYear = (y === 'all') ? 'all' : parseInt(y, 10);
      btn.closest('.filter-group').querySelectorAll('.filter-item').forEach(function (el) {
        var v = el.dataset.year === 'all' ? 'all' : parseInt(el.dataset.year, 10);
        el.classList.toggle('active', v === activeYear);
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

    renderHeat();
    renderStats();
  });

  // Mobile toggle
  document.getElementById('filter-toggle').addEventListener('click', function () {
    document.getElementById('filters').classList.toggle('open');
  });

  // ── Init ──
  renderHeat();
  renderStats();

  // Dismiss loading screen
  requestAnimationFrame(function () {
    document.getElementById('loading').classList.add('done');
    setTimeout(function () { document.getElementById('loading').remove(); }, 600);
  });

})();
