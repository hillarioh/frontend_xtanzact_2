import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1';
const loginUrl = 'http://localhost:3000/login';

export const get_request = async (url, token) =>
  await axios.get(`${baseUrl}/${url}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  });

export const post_request = async (url, token, payload) =>
  await axios.post(`${baseUrl}/${url}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  });

export const signup_request = async (url, payload) =>
  await axios.post(`${baseUrl}/${url}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

export const signin_request = async (payload) =>
  await axios.post(`${loginUrl}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
