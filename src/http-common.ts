import axios from 'axios';
import { BASE_URL, KEY } from './services/varsApi';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
});
