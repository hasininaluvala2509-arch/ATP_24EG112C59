import { create } from "zustand";
import api from "../api"; // ✅ use centralized axios

export const useAuth = create((set) => ({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,

  // 🔐 LOGIN
  login: async (userCred) => {
    try {
      set({ loading: true, currentUser: null, isAuthenticated: false, error: null });

      const res = await api.post("/auth/login", userCred);

      if (res.status === 200) {
        set({
          currentUser: res.data?.payload,
          loading: false,
          isAuthenticated: true,
          error: null,
        });
      }
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.error || "Login failed",
      });
    }
  },

  // 🚪 LOGOUT
  logout: async () => {
    try {
      const res = await api.get("/auth/logout");

      if (res.status === 200) {
        set({
          currentUser: null,
          isAuthenticated: false,
          error: null,
          loading: false,
        });
      }
    } catch (err) {
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
        error: err.response?.data?.error || "Logout failed",
      });
    }
  },

  // 🔁 CHECK AUTH
  checkAuth: async () => {
    try {
      set({ loading: true });

      const res = await api.get("/auth/check-auth");

      const user = res.data?.payload || null;

      set({
        currentUser: user,
        isAuthenticated: !!user,
        loading: false,
      });
    } catch (err) {
      if (err.response?.status === 401) {
        set({
          currentUser: null,
          isAuthenticated: false,
          loading: false,
        });
        return;
      }

      console.error("Auth check failed:", err);
      set({ loading: false });
    }
  },
}));
