import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// Set base URL for API calls
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
axios.defaults.baseURL = API_BASE_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)