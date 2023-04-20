import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1';

const get_request = async (url) =>
  await axios.get(`${baseUrl}/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

const post_request = async (url, payload) =>
  await axios.post(`${baseUrl}/${url}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

export { get_request, post_request };
