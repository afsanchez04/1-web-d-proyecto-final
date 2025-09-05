import axios from 'axios';

export const api = axios.create({ 
  baseURL: 'https://1-web-d-proyecto-final.vercel.app/api',
  withCredentials: true 
});
