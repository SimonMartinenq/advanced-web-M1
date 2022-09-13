import { httpGet } from './http.js'

const apiEndpoint = 'https://thomas-veillard.fr/wp-content/uploads/'

/**
 * A stock ticker from GAFAM, which is a kind of ID for the trading market.
 * Amazon (AMZN) has been excluded because of the lack of data in original API response.
 * @typedef {"AAPL" | "FB" | "GOOG" | "MSFT"} Ticker
 */

/**
 * Root response object describing a stock and it's 5-years rate history,
 * as returned by the API.
 * @typedef {Object} RawRateHistoryResponse
 * @property {Object} data
 * @property {Ticker} data.symbol - The stock ticker.
 * @property {string} data.company - The company name.
 * @property {string} data.timeAsOf - Date of the data compilation.
 * @property {Object[]} data.chart - The rate history itself.
 * @property {RawRateRange} data.chart[].z
 */

/**
 * Summarize the rate changes during a day, as returned from the API.
 * @typedef {Object} RawRateRange
 * @property {string} high - Higher price of the day.
 * @property {string} low - Lower price of the day.
 * @property {string} open - Price of the stock at the market's opening hour.
 * @property {string} close - Price of the stock at the market's closing hour.
 * @property {string} volume - Count how many shares have been exchanged during the day.
 * @property {string} dateTime - The date, formatted as a string.
 */

/**
 * Unserialized root response object describing a stock and it's 5-years rate history.
 * Some fields, such dates and numbers, have been parsed from string.
 * @typedef {Object} RateHistoryResponse
 * @property {Ticker} symbol - The stock ticker.
 * @property {string} company - The company name.
 * @property {Date} timeAsOf - Date of the data compilation.
 * @property {Object[]} chart - The rate history itself.
 * @property {RateRange} chart[].z
 */

/**
 * Summarize the rate changes during a day, as returned from the API.
 * @typedef {Object} RateRange
 * @property {number} high - Higher price of the day.
 * @property {number} low - Lower price of the day.
 * @property {number} open - Price of the stock at the market's opening hour.
 * @property {number} close - Price of the stock at the market's closing hour.
 * @property {number} volume - Count how many shares have been exchanged during the day.
 * @property {Date} dateTime - The date, formatted as a string.
 */

/**
 * Returns the rate history of a ticker for last 5 years.
 * @param {Ticker} ticker - Ticker of the stock to fetch.
 * @returns {Promise<RateHistoryResponse>}
 */
export async function apiGetRateHistory (ticker) {
  /** @type {RawRateHistoryResponse['data']} */
  const rawResponse = (await httpGet(`${apiEndpoint}5y-rates/${ticker}-rates-5y.json`)).data

  return {
    company: rawResponse.company,
    symbol: rawResponse.symbol,
    timeAsOf: new Date(rawResponse.timeAsOf),
    chart: rawResponse.chart.map(({ z }) => ({
      z: {
        high: parseFloat(z.high),
        low: parseFloat(z.low),
        open: parseFloat(z.open),
        close: parseFloat(z.close),
        volume: parseInt(z.volume.replace(/,/g, ''), 10),
        dateTime: new Date(z.dateTime)
      }
    }))
  }
}
