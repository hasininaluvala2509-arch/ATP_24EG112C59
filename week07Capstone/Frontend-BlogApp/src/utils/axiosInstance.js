import axios from "axios";

// Create an axios instance that automatically attaches the JWT token
// from localStorage to every request via the Authorization header.
// This solves the cross-domain cookie blocking issue in modern browsers.
const axiosInstance = axios.create({
  baseURL: "https://atp-24eg112c59-3.onrender.com",
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
