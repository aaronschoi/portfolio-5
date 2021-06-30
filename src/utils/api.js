require('dotenv').config();
const fetch = require('node-fetch');
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL

const fetchJson = async (url, options, onCancel) => {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export const sendThatMessage = async (data, signal) => {
  const url = `${API_BASE_URL}/messages`;
  return await fetchJson(
    url,
    {
      body: JSON.stringify({ data }),
      headers:{"Content-Type": "application/json"},
      method: "POST",
      signal,
    },
    []
  );
}