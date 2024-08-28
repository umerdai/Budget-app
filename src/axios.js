// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Base URL of your backend
});

export default instance;
