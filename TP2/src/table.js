/**
 * Render the 5-years rate history as a table.
 * @param {import("./api").RateHistoryResponse} rateHistory - The unserialized rate history fetch from API.
 * @returns {HTMLTableElement}
 */
export function renderRates (rateHistory) {
  const table = document.createElement('table')
  const tbody = document.createElement('tbody')
  table.appendChild(renderTableHeader())
  table.appendChild(tbody)

  for (const { z: { dateTime, open, close, high, low, volume } } of rateHistory.chart) {
    const tr = document.createElement('tr')
    tr.appendChild(createNodeWithText('td', dateTime.toISOString().split('T')[0]))
    for (const price of [open, close, high, low]) tr.appendChild(createNodeWithText('td', formatPriceUSD(price)))
    tr.appendChild(createNodeWithText('td', volume.toString()))
    tbody.appendChild(tr)
  }

  return table
}

/**
 * Returns the table thead element.
 * @returns {HTMLTableSectionElement}
 */
function renderTableHeader () {
  const thead = document.createElement('thead')
  const tr = thead.appendChild(document.createElement('tr'))
  tr.appendChild(createNodeWithText('th', 'Date'))
  tr.appendChild(createNodeWithText('th', 'Open price'))
  tr.appendChild(createNodeWithText('th', 'Close price'))
  tr.appendChild(createNodeWithText('th', 'High price'))
  tr.appendChild(createNodeWithText('th', 'Low price'))
  tr.appendChild(createNodeWithText('th', 'Volume'))
  return thead
}

/**
 * Returns a new element with an inner text, created such way it should not be vulnerable to XSS.
 * @see {@link https://stackoverflow.com/questions/52707031/does-innertext-prevent-xss}
 * @param {"td"|"th"} tagName - The kind of tag you want to create
 * @param {string} innerText - The content of element.innerText
 * @returns {HTMLTableDataCellElement | HTMLTableHeaderCellElement}
 */
function createNodeWithText (tagName, innerText) {
  if (!['td', 'th'].includes(tagName)) {
    throw new Error(`Refuse to create not whitelisted ${tagName} with arbitrary innerText`)
  }

  const element = document.createElement(tagName)
  element.innerText = innerText
  return element
}

/**
 * Format a price with 2 decimals in USD currency.
 * @param {number} price
 * @returns {string}
 */
function formatPriceUSD (price) {
  return '$' + price.toFixed(2)
}
