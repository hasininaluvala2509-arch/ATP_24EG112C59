import { useForm } from "react-hook-form";
import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  mutedText,
  linkClass,
  loadingClass,
} from "../styles/common";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../Store/authStore";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { login, currentUser, loading, error, isAuthenticated } = useAuth((state) => state);

  // ✅ GLOBAL AXIOS CONFIG (IMPORTANT)
  axios.defaults.baseURL = "https://atp-24eg112c59.onrender.com";
  axios.defaults.withCredentials = true;

  const onUserLogin = (userCredObj) => {
    login(userCredObj);
  };

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      if (currentUser.role === "USER") {
        toast.success("Login success → User Profile");
        navigate("/user-profile");
      }

      if (currentUser.role === "AUTHOR") {
        toast.success("Login success → Author Profile");
        navigate("/author-profile");
      }

      if (currentUser.role === "ADMIN") {
        toast.success("Login success → Admin Profile");
        navigate("/admin-profile");
      }
    }
  }, [isAuthenticated, currentUser, navigate]);

  if (loading) {
    return <p className={loadingClass}>Loading....</p>;
  }

  return (
    <div className={`${pageBackground} flex items-center justify-center py-16 px-4`}>
      <div className={formCard}>
        <h2 className={formTitle}>Sign In</h2>

        {error && <p className={errorClass}>{error}</p>}

        <form onSubmit={handleSubmit(onUserLogin)}>
          <div className={formGroup}>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              className={inputClass}
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          <div className={formGroup}>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              className={inputClass}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && <p className={errorClass}>{errors.password.message}</p>}
          </div>

          <div className="text-right -mt-2 mb-4">
            <a href="/forgot-password" className={`${linkClass} text-xs`}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={submitBtn}>
            Sign In
          </button>
        </form>

        <p className={`${mutedText} text-center mt-5`}>
          Don't have an account?{" "}
          <NavLink to="/register" className={linkClass}>
            Create one
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
