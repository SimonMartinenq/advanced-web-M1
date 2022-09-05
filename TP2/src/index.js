import { apiGetRateHistory } from './api.js'
import { renderRates } from './table.js'

const feedbackParagraph = document.getElementById('js-init-feedback')
const tickerSelect = document.getElementById('js-select-ticker')
const domContainer = document.getElementById('js-output-container')

// notify successful load of the index.js file
feedbackParagraph.style.color = 'green'
feedbackParagraph.innerText = 'JS has been loaded succesfully'

// register an event (using callback asynchronous style) called when user changes the selected ticker.
tickerSelect.addEventListener('change', async event => {
  if (!(event.target instanceof window.HTMLSelectElement)) return

  const ticker = /** @type {import("./api").Ticker} */ (event.target.value)
  const rateHistory = await apiGetRateHistory(ticker)

  domContainer.innerHTML = '' // clear content of the div container
  domContainer.appendChild(renderRates(rateHistory))
})
