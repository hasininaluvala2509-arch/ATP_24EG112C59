// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://atp-24eg112c59.onrender.com",
  withCredentials: true,
});

export default api;
