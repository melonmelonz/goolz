(function () {
  'use strict';

  // ── Decode maps ──
  var TYPE_NAME = { R: 'Rat Sighting', M: 'Mouse Sighting', S: 'Signs of Rodents', C: 'Condition Attracting Rodents' };
  var BORO_NAME = { K: 'Brooklyn', Q: 'Queens', M: 'Manhattan', X: 'Bronx', S: 'Staten Island' };
  var BORO_ABBR = { K: 'BK', Q: 'QN', M: 'MN', X: 'BX', S: 'SI' };
  var MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // ── State ──
  var activeYear = 'all';
  var activeBorough = 'all';
  var activeType = 'all';
  var heatLayer = null;

  // ── Init map ──
  var map = L.map('map', {
    center: [40.7128, -73.94],
    zoom: 11,
    zoomControl: true,
    attributionControl: false
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  L.control.attribution({ position: 'bottomright', prefix: false })
    .addAttribution('<a href="https://carto.com/">CartoDB</a> | <a href="https://opendata.cityofnewyork.us/">NYC 311 Open Data</a>')
    .addTo(map);

  // ── Data access helpers ──
  // Format: [lat, lng, type, borough, year, month]
  function lat(d) { return d[0]; }
  function lng(d) { return d[1]; }
  function type(d) { return d[2]; }
  function boro(d) { return d[3]; }
  function year(d) { return d[4]; }
  function month(d) { return d[5]; }

  // ── Filter ──
  function getFiltered() {
    var result = [];
    for (var i = 0; i < RATTRACK_DATA.length; i++) {
      var d = RATTRACK_DATA[i];
      if (activeYear !== 'all' && year(d) !== activeYear) continue;
      if (activeBorough !== 'all' && boro(d) !== activeBorough) continue;
      if (activeType !== 'all' && type(d) !== activeType) continue;
      result.push(d);
    }
    return result;
  }

  // ── Render heatmap ──
  function renderHeat() {
    var data = getFiltered();
    var points = [];
    for (var i = 0; i < data.length; i++) {
      points.push([lat(data[i]), lng(data[i]), 1]);
    }

    if (heatLayer) map.removeLayer(heatLayer);

    heatLayer = L.heatLayer(points, {
      radius: 18,
      blur: 14,
      maxZoom: 15,
      max: 1.0,
      gradient: {
        0.1: 'rgba(63,185,80,0.2)',
        0.3: '#3FB950',
        0.6: '#6FCF7F',
        0.8: '#F0883E',
        1.0: '#F05D3E'
      }
    }).addTo(map);
  }

  // ── Compute & render stats ──
  function renderStats() {
    var data = getFiltered();
    var total = data.length;

    // Header total
    document.getElementById('stat-total').textContent = total.toLocaleString();

    // Populate filter counts
    updateFilterCounts(data);

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
      var b = boro(data[i]);
      boroCounts[b] = (boroCounts[b] || 0) + 1;
    }
    var topBoro = Object.keys(boroCounts).sort(function (a, b) {
      return boroCounts[b] - boroCounts[a];
    })[0];
    document.getElementById('stat-borough').textContent = BORO_ABBR[topBoro] || topBoro;
    document.getElementById('stat-borough-sub').textContent =
      (BORO_NAME[topBoro] || topBoro) + ' -- ' + boroCounts[topBoro].toLocaleString() + ' reports';

    // Peak month
    var monthCounts = {};
    for (var i = 0; i < data.length; i++) {
      var m = month(data[i]);
      monthCounts[m] = (monthCounts[m] || 0) + 1;
    }
    var topMonth = 1;
    for (var m = 1; m <= 12; m++) {
      if ((monthCounts[m] || 0) > (monthCounts[topMonth] || 0)) topMonth = m;
    }
    document.getElementById('stat-season').textContent = MONTHS[topMonth];
    document.getElementById('stat-season-sub').textContent =
      (monthCounts[topMonth] || 0).toLocaleString() + ' reports in peak month';

    // Total count card
    document.getElementById('stat-count').textContent = total.toLocaleString();
    var yearRange = activeYear !== 'all' ? activeYear : '2020-2026';
    document.getElementById('stat-count-sub').textContent = 'rodent complaints (' + yearRange + ')';

    // Monthly trend bars
    var maxMonth = 0;
    for (var m = 1; m <= 12; m++) {
      if ((monthCounts[m] || 0) > maxMonth) maxMonth = monthCounts[m];
    }
    var barsHtml = '';
    for (var m = 1; m <= 12; m++) {
      var pct = maxMonth > 0 ? ((monthCounts[m] || 0) / maxMonth * 100) : 0;
      barsHtml += '<div class="mini-bar" style="height:' + Math.max(pct, 2) + '%" title="' + MONTHS[m] + ': ' + (monthCounts[m] || 0).toLocaleString() + '"></div>';
    }
    document.getElementById('stat-trend').innerHTML = barsHtml;
    document.getElementById('stat-trend-sub').textContent = 'Jan - Dec' + (activeYear !== 'all' ? ' ' + activeYear : '');
  }

  // ── Update filter counts based on current data ──
  function updateFilterCounts(data) {
    // Year counts (unaffected by year filter -- show totals)
    var yearCounts = {};
    var yearFiltered = [];
    for (var i = 0; i < RATTRACK_DATA.length; i++) {
      var d = RATTRACK_DATA[i];
      if (activeBorough !== 'all' && boro(d) !== activeBorough) continue;
      if (activeType !== 'all' && type(d) !== activeType) continue;
      yearFiltered.push(d);
      var y = year(d);
      yearCounts[y] = (yearCounts[y] || 0) + 1;
    }
    setCount('year-all', yearFiltered.length);
    for (var y = 2020; y <= 2026; y++) {
      setCount('year-' + y, yearCounts[y] || 0);
    }

    // Borough counts (from year+type filtered data)
    var boroCounts = {};
    var boroFiltered = [];
    for (var i = 0; i < RATTRACK_DATA.length; i++) {
      var d = RATTRACK_DATA[i];
      if (activeYear !== 'all' && year(d) !== activeYear) continue;
      if (activeType !== 'all' && type(d) !== activeType) continue;
      boroFiltered.push(d);
      var b = boro(d);
      boroCounts[b] = (boroCounts[b] || 0) + 1;
    }
    setCount('boro-all', boroFiltered.length);
    ['K', 'M', 'X', 'Q', 'S'].forEach(function (b) {
      setCount('boro-' + b, boroCounts[b] || 0);
    });

    // Type counts (from year+borough filtered data)
    var typeCounts = {};
    var typeFiltered = [];
    for (var i = 0; i < RATTRACK_DATA.length; i++) {
      var d = RATTRACK_DATA[i];
      if (activeYear !== 'all' && year(d) !== activeYear) continue;
      if (activeBorough !== 'all' && boro(d) !== activeBorough) continue;
      typeFiltered.push(d);
      var t = type(d);
      typeCounts[t] = (typeCounts[t] || 0) + 1;
    }
    setCount('type-all', typeFiltered.length);
    ['R', 'S', 'M', 'C'].forEach(function (t) {
      setCount('type-' + t, typeCounts[t] || 0);
    });
  }

  function setCount(key, value) {
    var el = document.querySelector('[data-count="' + key + '"]');
    if (el) el.textContent = value.toLocaleString();
  }

  // ── Filter handlers ──
  function setupFilters() {
    document.getElementById('filters').addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-item');
      if (!btn) return;

      var y = btn.dataset.year;
      var b = btn.dataset.borough;
      var t = btn.dataset.type;

      if (y !== undefined) {
        activeYear = (y === 'all') ? 'all' : parseInt(y, 10);
        btn.closest('.filter-group').querySelectorAll('.filter-item').forEach(function (el) {
          var val = el.dataset.year === 'all' ? 'all' : parseInt(el.dataset.year, 10);
          el.classList.toggle('active', val === activeYear);
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
  }

  // ── Mobile toggle ──
  function setupMobileToggle() {
    document.getElementById('filter-toggle').addEventListener('click', function () {
      document.getElementById('filters').classList.toggle('open');
    });
  }

  // ── Init ──
  renderHeat();
  renderStats();
  setupFilters();
  setupMobileToggle();

  // Dismiss loading screen
  requestAnimationFrame(function () {
    document.getElementById('loading').classList.add('done');
    setTimeout(function () {
      document.getElementById('loading').remove();
    }, 600);
  });

})();
