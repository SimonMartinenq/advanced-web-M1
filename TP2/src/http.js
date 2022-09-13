/**
 * Fetch asynchronously a JSON payload using GET HTTP verb.
 * @param {string} url - The URL to the fetched resource.
 * @returns Promise<any>
 */
export function httpGet (url) {
  return window.fetch(url, { method: 'GET' }).then(httpCheckCodeAndParseJson)
}

/**
 * Check if the fetch's response http code is between 200 and 300, meaning this successed.
 * In case of success, parse the json payload.
 * In case of failure due to HTTP code, try to parse the JSON response that may contain the reason and reject it.
 * In case of network failure, the fetch rejected before this function is called.
 * In case of failure due to no-JSON payload, an exception is rejected.
 * @param {Response} response
 * @returns Promise<any>
 */
function httpCheckCodeAndParseJson (response) {
  return response.ok ? response.json() : Promise.reject(response.json())
}
