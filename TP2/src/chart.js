import Chart from 'chart.js'

/**
 * Render the 5-years rate history as a chart.
 * @param {import("./api").RateHistoryResponse} rateHistory - The unserialized rate history fetched from API.
 */
export function renderRates (rateHistory) {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('width', '400')
  canvas.setAttribute('height', '200')

  const context = canvas.getContext('2d')
  new Chart(context, {
    type: 'line',
    data: {
      labels: rateHistory.chart.map(({ z }) => z.dateTime.toISOString().split('T')[0]),
      datasets: [{
        label: 'Close price',
        data: rateHistory.chart.map(({ z }) => z.close),
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
        borderWidth: 1,
        pointRadius: 0
      }]
    }
  })

  return canvas
}
