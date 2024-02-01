async function fetchDataAPI(
  url,
  method = 'GET',
  headers = {},
  body = null,
  queryParams = {}
) {

  // Check if params are not undefined
  method = method || 'GET';
  headers = headers || {};
  body = body || null;
  queryParams = queryParams || {};

  try {
    // Append query parameters to the URL if they exist
    const queryString = Object.keys(queryParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    const fullUrl = queryString ? `${url}?${queryString}` : url;

    const response = await fetch(fullUrl, {
      method: method,
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  }
  catch (error) {
    // Handle other errors
    console.error('Fetch Error:', error.message);
    throw error;
  }
}

export default fetchDataAPI;