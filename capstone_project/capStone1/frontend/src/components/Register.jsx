import {
  divider,
  errorClass,
  formCard,
  formGroup,
  formTitle,
  inputClass,
  labelClass,
  pageBackground,
  submitBtn,
  mutedText,
} from "../styles/common";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  // ✅ GLOBAL CONFIG
  axios.defaults.baseURL = "https://atp-24eg112c59.onrender.com";
  axios.defaults.withCredentials = true;

  const onUserRegister = async (userObj) => {
    const formData = new FormData();

    formData.append("role", userObj.role);
    formData.append("firstName", userObj.firstName);
    formData.append("lastName", userObj.lastName);
    formData.append("email", userObj.email);
    formData.append("password", userObj.password);

    if (userObj.profileImageUrl?.[0]) {
      formData.append("profileImageUrl", userObj.profileImageUrl[0]);
    }

    try {
      setLoading(true);

      // ✅ FIXED (no full URL needed)
      let res = await axios.post("/auth/users", formData);

      if (res.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      console.log("err in registration", err);
      setApiError(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${pageBackground} flex items-center justify-center py-16 px-4`}>
      <div className={formCard}>
        <h2 className={formTitle}>Create an Account</h2>

        {apiError && <p className={errorClass}>{apiError}</p>}

        <form onSubmit={handleSubmit(onUserRegister)}>
          {/* ROLE */}
          <div className="mb-5">
            <p className={labelClass}>Register as</p>

            <div className="flex gap-6 mt-1">
              <label>
                <input type="radio" value="USER" {...register("role", { required: true })} />
                User
              </label>

              <label>
                <input type="radio" value="AUTHOR" {...register("role", { required: true })} />
                Author
              </label>
            </div>

            {errors.role && <p className={errorClass}>Select a role</p>}
          </div>

          <div className={divider} />

          {/* NAME */}
          <div className="sm:flex gap-4 mb-4">
            <input
              className={inputClass}
              placeholder="First name"
              {...register("firstName", { required: true })}
            />

            <input
              className={inputClass}
              placeholder="Last name"
              {...register("lastName")}
            />
          </div>

          {/* EMAIL */}
          <input
            className={inputClass}
            placeholder="Email"
            {...register("email", { required: true })}
          />

          {/* PASSWORD */}
          <input
            type="password"
            className={inputClass}
            placeholder="Password"
            {...register("password", { required: true })}
          />

          {/* IMAGE */}
          <input
            type="file"
            {...register("profileImageUrl")}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) setPreview(URL.createObjectURL(file));
            }}
          />

          {preview && <img src={preview} className="w-20 h-20 rounded-full" />}

          <button type="submit" className={submitBtn}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className={`${mutedText} text-center mt-5`}>
          Already have an account?{" "}
          <NavLink to="/login">Sign in</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register;
