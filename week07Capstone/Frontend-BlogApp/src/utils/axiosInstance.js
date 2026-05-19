import axios from "axios";

// Create an axios instance that automatically attaches the JWT token
// from localStorage to every request via the Authorization header.
// This solves the cross-domain cookie blocking issue in modern browsers.
const baseURL = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ? "http://localhost:5000"
  : "https://atp-24eg112c59-3.onrender.com";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

// Request interceptor: attach token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
