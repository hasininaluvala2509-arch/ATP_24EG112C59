import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  login: async (userCred) => {
    try {
      //set loading true
      set({ loading: true, currentUser: null, isAuthenticated: false, error: null });
      //make api call
      let res = await axiosInstance.post("/auth/login", userCred);
      //update state
      if (res.status === 200) {
        // Save token to localStorage (cross-domain cookie fallback)
        if (res.data?.token) {
          localStorage.setItem("token", res.data.token);
        }
        set({
          currentUser: res.data?.payload,
          loading: false,
          isAuthenticated: true,
          error: null,
        });
      }
    } catch (err) {
      console.log("err is ", err);
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        //error: err,
        error: err.response?.data?.message || err.response?.data?.error || "Login failed",
      });
    }
  },
  logout: async () => {
    try {
      //set loading state
      //make logout api req
      await axiosInstance.get("/auth/logout");
      // Clear token from localStorage
      localStorage.removeItem("token");
      //update state
      set({
        currentUser: null,
        isAuthenticated: false,
        error: null,
        loading: false,
      });
    } catch (err) {
      // Clear token even if API call fails
      localStorage.removeItem("token");
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.error || "Logout failed",
      });
    }
  },
  // restore login
  checkAuth: async () => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get("/auth/check-auth");

      set({
        currentUser: res.data.payload,
        isAuthenticated: true,
        loading: false,
      });
    } catch (err) {
      // If user is not logged in → do nothing
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        set({
          currentUser: null,
          isAuthenticated: false,
          loading: false,
        });
        return;
      }

      // other errors
      console.error("Auth check failed:", err);
      set({ loading: false });
    }
  },
}));
