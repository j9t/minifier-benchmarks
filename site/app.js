// Renders the benchmark results in `data/`, which `src/benchmark.js` writes

const urlRepo = 'https://github.com/j9t/minifier-benchmarks';

const modes = {
  html: {
    label: 'HTML minification',
    context: 'HTML only · Most aggressive settings that keep output conformant',
    anchor: '1-html-minification-compared',
    excludedBadge: 'Maximum only',
    excludedNote: names => `${names}: Not part of HTML minification, as ${names.includes(' and ') ? 'they' : 'it'} can’t limit minification to HTML.`,
    notes: []
  },
  max: {
    label: 'Maximum minification (HTML, CSS, JS)',
    context: 'All conformant features each minifier offers, up to tree-shaking · Not a like-for-like comparison',
    anchor: '2-maximum-minification-compared',
    excludedBadge: 'Not run',
    excludedNote: names => `${names}: Didn’t run in this benchmark.`,
    notes: ['minimize only minifies HTML.']
  }
};

// Minifiers deliberately not benchmarked (see README notes)
const minifiersNotIncluded = [
  {
    name: 'HTML Minifier',
    url: 'https://github.com/kangax/html-minifier',
    badge: 'Deprecated',
    note: 'HTML Minifier isn’t included as it’s deprecated; HTML Minifier Next is its successor.'
  },
  {
    name: 'HTML Minifier Terser',
    url: 'https://github.com/terser/html-minifier-terser',
    badge: 'Known issues',
    note: 'HTML Minifier Terser isn’t included as it breaks markup.'
  }
];

// Default sort direction per summary column
const sortAscending = { kb: true, averageMs: true, medianMs: true, processed: false };

const state = {
  data: null,
  mode: 'html',
  view: 'summary',
  query: '',
  sort: { key: 'kb', isAscending: true }
};

const elements = {
  tabs: document.querySelectorAll('[role="tab"]'),
  results: document.getElementById('results'),
  search: document.getElementById('search'),
  exportButton: document.getElementById('export'),
  viewToggle: document.getElementById('view-toggle'),
  context: document.getElementById('context'),
  footnote: document.getElementById('footnote'),
  fullResults: document.getElementById('full-results'),
  environment: document.getElementById('environment')
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => `&#${character.charCodeAt(0)};`);
}

function formatNumber(value) {
  return value.toLocaleString('en-US');
}

function formatKb(kb) {
  return kb === 0 ? '<1' : formatNumber(kb);
}

function formatDelta(delta) {
  if (delta === null) return '';
  if (delta === 0) return '0%';
  return (delta < 0 ? '−' : '+') + Math.abs(delta) + '%';
}

function formatMs(ms) {
  return ms < 1 ? '<1' : formatNumber(Math.round(ms));
}

// Parses “YYYY-MM-DD” into its parts, avoiding time zone shifts
function parseDate(date) {
  const [year, month, day] = date.split('-').map(Number);
  return { year, month: months[month - 1], day };
}

function formatDate(date) {
  const { year, month, day } = parseDate(date);
  return `${month} ${day}, ${year}`;
}

function icon(name, size) {
  return `<svg class="icon" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true"><use href="#icon-${name}"/></svg>`;
}

function listNames(names) {
  if (names.length < 3) return names.join(' and ');
  return names.slice(0, -1).join(', ') + ', and ' + names.at(-1);
}

function matchesQuery(name) {
  return name.toLowerCase().includes(state.query.trim().toLowerCase());
}

function getModeData() {
  return state.data[state.mode];
}

function getMinifiersIncluded() {
  return getModeData().minifiers.filter(minifier => !minifier.isExcluded);
}

function getMinifiersSorted() {
  const { key, isAscending } = state.sort;
  return getMinifiersIncluded().sort(function (a, b) {
    if (a[key] === null || b[key] === null) return (a[key] === null) - (b[key] === null);
    // Sizes are rounded to kilobytes, so deltas break ties
    const difference = key === 'kb' ? a.kb - b.kb || a.delta - b.delta : a[key] - b[key];
    return isAscending ? difference : -difference;
  });
}

function renderTime(minifier, ms, isFastest) {
  if (minifier.isTimeReliable === false) {
    return '<span class="muted" title="Network noise prevents a reliable estimate">n/a</span>';
  }
  if (ms === null) return '<span class="muted">n/a</span>';
  const unit = `<span class="unit">ms${minifier.isRemote ? '*' : ''}</span>`;
  return `<span${isFastest ? ' class="best-result"' : ''}>${formatMs(ms)}</span> ${unit}`;
}

function renderSortHeader(key, label) {
  const isActive = state.sort.key === key;
  const ariaSort = isActive ? ` aria-sort="${state.sort.isAscending ? 'ascending' : 'descending'}"` : '';
  return `<th class="numeric" scope="col"${ariaSort}><button type="button" class="sort-button" data-sort="${key}">${label} ${icon('arrow-down-up', 11)}</button></th>`;
}

function renderMinifierLink(minifier) {
  return `<a href="${escapeHtml(minifier.url)}" target="_blank">${escapeHtml(minifier.name)} ${icon('arrow-up-right', 11)}</a>`;
}

function renderPlaceholderRow(minifier, badge) {
  return `<tr class="considered-row">
    <td class="rank">—</td>
    <th class="tool-cell" scope="row">${renderMinifierLink(minifier)}<span class="badge badge-muted">${badge}</span></th>
    ${'<td class="numeric muted">n/a</td>'.repeat(5)}
  </tr>`;
}

function renderSummary() {
  const modeData = getModeData();
  const minifiers = getMinifiersSorted().filter(minifier => matchesQuery(minifier.name));
  const deltaBest = Math.min(...getMinifiersIncluded().map(minifier => minifier.delta ?? 0));

  const rows = minifiers.map(function (minifier, idx) {
    const share = deltaBest < 0 && minifier.delta < 0 ? Math.min(minifier.delta / deltaBest, 1) * 100 : 0;
    const badges = [
      minifier.isSmallest ? '<span class="badge">Smallest</span>' : '',
      minifier.isFastestAverage ? '<span class="badge">Fastest</span>' : ''
    ].join('');
    return `<tr${minifier.isSmallest ? ' class="leading-row"' : ''}>
      <td class="rank">${String(idx + 1).padStart(2, '0')}</td>
      <th class="tool-cell" scope="row">${renderMinifierLink(minifier)}${badges}</th>
      <td class="numeric"><span${minifier.isSmallest ? ' class="best-result"' : ''}>${formatKb(minifier.kb)}</span> <span class="unit">KB</span></td>
      <td class="numeric saving-cell">
        <div class="saving-content">
          <div class="saving-bar" aria-hidden="true"><span style="width: ${share.toFixed(1)}%"></span></div>
          <span${minifier.isSmallest ? ' class="best-result"' : ''}>${formatDelta(minifier.delta)}</span>
        </div>
      </td>
      <td class="numeric">${renderTime(minifier, minifier.averageMs, minifier.isFastestAverage)}</td>
      <td class="numeric">${renderTime(minifier, minifier.medianMs, minifier.isFastestMedian)}</td>
      <td class="numeric muted">${minifier.processed}/${modeData.siteCount}</td>
    </tr>`;
  });

  const rowsExcluded = modeData.minifiers
    .filter(minifier => minifier.isExcluded && matchesQuery(minifier.name))
    .map(minifier => renderPlaceholderRow(minifier, modes[state.mode].excludedBadge));
  const rowsNotIncluded = minifiersNotIncluded
    .filter(minifier => matchesQuery(minifier.name))
    .map(minifier => renderPlaceholderRow(minifier, minifier.badge));

  if (rows.length + rowsExcluded.length + rowsNotIncluded.length === 0) {
    rows.push(`<tr><td colspan="7" class="table-message">No minifiers match “${escapeHtml(state.query)}.”</td></tr>`);
  }

  elements.results.innerHTML = `<table class="benchmark-table">
    <caption class="visually-hidden">${modes[state.mode].label}: Results per minifier</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Minifier</th>
        ${renderSortHeader('kb', 'Avg. output')}
        <th class="numeric" scope="col">Size reduction</th>
        ${renderSortHeader('averageMs', 'Avg. time')}
        ${renderSortHeader('medianMs', 'Median time')}
        ${renderSortHeader('processed', 'Sites')}
      </tr>
    </thead>
    <tbody>${[...rows, ...rowsExcluded, ...rowsNotIncluded].join('')}</tbody>
  </table>`;
}

function renderSites() {
  const modeData = getModeData();
  const minifiers = getMinifiersIncluded();
  const sites = modeData.sites.filter(site => matchesQuery(site.name));

  const rows = sites.map(function (site) {
    const cells = minifiers.map(function (minifier) {
      const result = site.results[minifier.id];
      if (!result) return '<td class="numeric muted">n/a</td>';
      return `<td class="numeric${result.isBest ? ' best-result' : ''}">${formatKb(result.kb)}<span class="delta">${formatDelta(result.delta)}</span></td>`;
    });
    return `<tr>
      <th class="tool-cell" scope="row"><a href="${escapeHtml(site.url)}" target="_blank">${escapeHtml(site.name)} ${icon('arrow-up-right', 11)}</a></th>
      <td class="numeric">${formatKb(site.kb)}</td>
      ${cells.join('')}
    </tr>`;
  });

  if (rows.length === 0) {
    rows.push(`<tr><td colspan="${minifiers.length + 2}" class="table-message">No websites match “${escapeHtml(state.query)}.”</td></tr>`);
  }

  elements.results.innerHTML = `<table class="benchmark-table sites-table">
    <caption class="visually-hidden">${modes[state.mode].label}: Results per website, in KB</caption>
    <thead>
      <tr>
        <th scope="col">Site</th>
        <th class="numeric" scope="col">Original</th>
        ${minifiers.map(minifier => `<th class="numeric" scope="col">${escapeHtml(minifier.name)}</th>`).join('')}
      </tr>
    </thead>
    <tbody>${rows.join('')}</tbody>
  </table>`;
}

function renderFootnote() {
  const modeData = getModeData();
  const notes = [];

  if (state.view === 'sites') {
    notes.push('Output sizes in KB, with the change from the original size. Highlighted: the smallest output per site. “n/a”: no valid output.');
  } else {
    notes.push(`Average original size: ${formatNumber(modeData.averageOriginalKb)} KB. Size reduction compares total output with total original size; failed sites count as unminified. Times of local minifiers are based on the sites all of them processed; times within 5% of the fastest count as fastest, too.`);
    const minifiersRemote = modeData.minifiers.filter(minifier => minifier.isRemote && !minifier.isExcluded);
    const namesEstimated = minifiersRemote.filter(minifier => minifier.isTimeReliable).map(minifier => minifier.name);
    const namesNoisy = minifiersRemote.filter(minifier => minifier.isTimeReliable === false).map(minifier => minifier.name);
    if (namesEstimated.length) {
      notes.push(`* ${listNames(namesEstimated)}: Estimated times (remote service).`);
    }
    if (namesNoisy.length) {
      notes.push(`${listNames(namesNoisy)}: No times, as network noise prevents a reliable estimate.`);
    }
    const namesExcluded = modeData.minifiers.filter(minifier => minifier.isExcluded).map(minifier => minifier.name);
    if (namesExcluded.length) {
      notes.push(modes[state.mode].excludedNote(listNames(namesExcluded)));
    }
    notes.push(...modes[state.mode].notes);
    notes.push(...minifiersNotIncluded.map(minifier => minifier.note));
  }

  elements.footnote.replaceChildren(...notes.map(function (note) {
    const element = document.createElement('span');
    element.textContent = note;
    return element;
  }));
}

function render() {
  if (!state.data) return;
  const isSites = state.view === 'sites';

  elements.tabs.forEach(function (tab) {
    const isSelected = tab.dataset.mode === state.mode;
    tab.setAttribute('aria-selected', String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });
  elements.results.setAttribute('aria-labelledby', 'tab-' + state.mode);
  elements.context.textContent = `${modes[state.mode].context} · ${getModeData().siteCount} websites`;
  elements.viewToggle.querySelector('span').textContent = isSites ? 'View minifier summary' : 'View all website results';
  elements.search.placeholder = isSites ? 'Search websites…' : 'Search minifiers…';
  elements.search.setAttribute('aria-label', isSites ? 'Search websites' : 'Search minifiers');
  elements.fullResults.href = `${urlRepo}#${modes[state.mode].anchor}`;

  if (isSites) {
    renderSites();
  } else {
    renderSummary();
  }
  renderFootnote();
}

function renderOverview() {
  const { html, max } = state.data;
  const minifierIds = new Set([html, max].flatMap(modeData => getIncludedIds(modeData)));
  const dateLatest = [html.date, max.date].sort().at(-1);
  const { year, month, day } = parseDate(dateLatest);
  const siteCount = Math.max(html.siteCount, max.siteCount);

  document.querySelector('[data-stat="minifiers"]').textContent = minifierIds.size;
  document.querySelectorAll('[data-stat="sites"]').forEach(element => {
    element.textContent = siteCount;
  });
  document.querySelector('[data-stat="date"]').innerHTML = `${month} ${day} <small>${year}</small>`;
  document.querySelectorAll('[data-count]').forEach(element => {
    element.textContent = getIncludedIds(state.data[element.dataset.count]).length;
  });

  // Both modes usually run together, in the same environment
  const environments = [html, max].map(modeData => `${modeData.environment} · ${formatDate(modeData.date)}`);
  elements.environment.innerHTML = environments[0] === environments[1]
    ? `Environment · ${escapeHtml(environments[0])}`
    : Object.keys(modes).map((mode, idx) => `${modes[mode].label} · ${escapeHtml(environments[idx])}`).join('<br>');
}

function getIncludedIds(modeData) {
  return modeData.minifiers.filter(minifier => !minifier.isExcluded).map(minifier => minifier.id);
}

function toCsv(rows) {
  return rows.map(row => row.map(cell => '"' + String(cell ?? 'n/a').replaceAll('"', '""') + '"').join(',')).join('\r\n');
}

function exportCsv() {
  if (!state.data) return;
  const modeData = getModeData();
  const minifiers = getMinifiersIncluded();
  let rows;

  if (state.view === 'sites') {
    rows = [
      ['Site', 'URL', 'Original size (KB)', ...minifiers.flatMap(minifier => [`${minifier.name} (KB)`, `${minifier.name} (change in %)`])],
      ...modeData.sites.map(site => [
        site.name,
        site.url,
        site.kb,
        ...minifiers.flatMap(minifier => [site.results[minifier.id]?.kb, site.results[minifier.id]?.delta])
      ])
    ];
  } else {
    rows = [
      ['Minifier', 'URL', 'Average output (KB)', 'Change (%)', 'Average time (ms)', 'Median time (ms)', 'Times estimated', 'Sites processed', 'Sites overall'],
      ...getMinifiersSorted().map(minifier => [
        minifier.name,
        minifier.url,
        minifier.kb,
        minifier.delta,
        minifier.averageMs,
        minifier.medianMs,
        minifier.isRemote ? 'yes' : 'no',
        minifier.processed,
        modeData.siteCount
      ])
    ];
  }

  const url = URL.createObjectURL(new Blob([toCsv(rows)], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `minifier-benchmarks-${state.mode}-${state.view}-${modeData.date}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

// Hashes for bookmarkable views, like “#max-minification-results” (the default view has none)
const hashDefault = 'html-minification';

function getHash() {
  return `${state.mode}-minification${state.view === 'sites' ? '-results' : ''}`;
}

// Applies a view hash to the state; returns whether the hash was one
function readHash() {
  const match = location.hash.slice(1).match(/^(html|max)-minification(-results)?$/);
  if (!match) return false;
  state.mode = match[1];
  state.view = match[2] ? 'sites' : 'summary';
  return true;
}

// Replaces the URL (without adding history entries); other hashes, like “#methodology,” stay for the default view
function writeHash() {
  const hash = getHash();
  if (hash !== hashDefault) {
    history.replaceState(null, '', '#' + hash);
  } else if (location.hash.slice(1).match(/^(html|max)-minification/)) {
    history.replaceState(null, '', location.pathname + location.search);
  }
}

// Selecting a tab shows its summary, so that the HTML tab returns to the default view
function selectMode(mode) {
  state.mode = mode;
  state.view = 'summary';
  state.query = '';
  elements.search.value = '';
  writeHash();
  render();
}

elements.tabs.forEach(function (tab, idx) {
  tab.addEventListener('click', () => selectMode(tab.dataset.mode));
  tab.addEventListener('keydown', function (event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    const tabNext = elements.tabs[(idx + (event.key === 'ArrowRight' ? 1 : -1) + elements.tabs.length) % elements.tabs.length];
    tabNext.focus();
    selectMode(tabNext.dataset.mode);
  });
});

elements.search.addEventListener('input', function (event) {
  state.query = event.target.value;
  render();
});

elements.viewToggle.addEventListener('click', function () {
  state.view = state.view === 'sites' ? 'summary' : 'sites';
  state.query = '';
  elements.search.value = '';
  writeHash();
  render();
});

elements.results.addEventListener('click', function (event) {
  const button = event.target.closest('[data-sort]');
  if (!button) return;
  const key = button.dataset.sort;
  state.sort = {
    key,
    isAscending: state.sort.key === key ? !state.sort.isAscending : sortAscending[key]
  };
  render();
  elements.results.querySelector(`[data-sort="${key}"]`).focus();
});

elements.exportButton.addEventListener('click', exportCsv);

window.addEventListener('hashchange', function () {
  if (readHash()) render();
});

const isViewLinked = readHash();

try {
  const [html, max] = await Promise.all(['html', 'max'].map(async function (mode) {
    const response = await fetch(`data/${mode}.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${mode} results`);
    return response.json();
  }));
  state.data = { html, max };
  renderOverview();
  render();
  // View hashes don’t match an ID, so the browser doesn’t scroll to the results itself
  if (isViewLinked) document.getElementById('benchmarks').scrollIntoView({ behavior: 'instant' });
} catch (err) {
  console.error(err);
  elements.results.innerHTML = `<p class="table-message">The results couldn’t be loaded. Please see the <a href="${urlRepo}#${modes[state.mode].anchor}">results on GitHub</a>.</p>`;
}