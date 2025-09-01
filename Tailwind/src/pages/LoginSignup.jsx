import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";

function LoginSignup() {
  const [mode, setMode] = useState("login"); // 'login', 'signup', or 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Validation across modes
  const validate = () => {
    const newErrors = {};
    if ((mode === "signup") && !formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
  newErrors.email = "Invalid email address.";
}

    if (mode !== "forgot") { // Password required only in login/signup
      if (!formData.password) {
        newErrors.password = "Password is required.";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setMessage("");
  };

  const handleClearField = (field) => {
    setFormData({ ...formData, [field]: "" });
    setErrors({ ...errors, [field]: "" });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setErrors({});
    setMessage("");

    try {
      if (mode === "login" || mode === "signup") {
        const url = mode === "login" ? "/api/auth/login" : "/api/auth/register";
        const headers = { "Content-Type": "application/json" };
        const body = JSON.stringify(
          mode === "login"
            ? { email: formData.email, password: formData.password }
            : formData
        );

        const response = await fetch(url, { method: "POST", headers, body });
        const data = await response.json();

        if (!response.ok) {
          setErrors({ form: data.message || "Something went wrong" });
        } else {
          if (mode === "login") {
            localStorage.setItem("token", data.token);
            window.location.href = "/";
          } else {
            alert("Registration successful! Please login.");
            setMode("login");
            setFormData({ name: "", email: "", password: "" });
          }
        }
      } else if (mode === "forgot") {
        const response = await fetch("/api/auth/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        });
        const data = await response.json();

        if (!response.ok) {
          setErrors({ form: data.message || "Something went wrong" });
        } else {
          setMessage(data.message || "Password reset email sent.");
          setFormData({ ...formData, password: "" });
        }
      }
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gradient-to-r from-[#0a0a23] via-[#1a0033] to-[#000] rounded-lg shadow-[0_0_30px_rgba(255,0,255,0.3)] p-8 border border-[#ffffff1a]">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-[#8e2de2] to-[#f093fb] text-3xl font-extrabold mb-6 tracking-widest animate-textGlow">
          {mode === "login"
            ? "Login"
            : mode === "signup"
            ? "Sign Up"
            : "Forgot Password"}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {errors.form && (
            <p className="text-red-500 text-center mb-4">{errors.form}</p>
          )}
          {message && (
            <p className="text-green-400 text-center mb-4">{message}</p>
          )}

          {mode === "signup" && (
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.name ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-[#00ffd5] placeholder-white`}
                value={formData.name}
                onChange={handleChange}
                required={mode === "signup"}
                style={{ color: "white" }}
              />
              {formData.name && (
                <button
                  type="button"
                  onClick={() => handleClearField("name")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700]"
                  aria-label="Clear name"
                >
                  <FiX size={20} />
                </button>
              )}
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.email ? "border-red-500" : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-[#00c2ff] placeholder-white`}
              value={formData.email}
              onChange={handleChange}
              required
              style={{ color: "white" }}
            />
            {formData.email && (
              <button
                type="button"
                onClick={() => handleClearField("email")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700]"
                aria-label="Clear email"
              >
                <FiX size={20} />
              </button>
            )}
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {mode !== "forgot" && (
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.password ? "border-red-500" : "border-transparent"
                } focus:outline-none focus:ring-2 focus:ring-[#ff1493] pr-10 placeholder-white`}
                value={formData.password}
                onChange={handleChange}
                required={mode !== "forgot"}
                minLength={6}
                style={{ color: "white" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-10 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
              </button>
              {formData.password && (
                <button
                  type="button"
                  onClick={() => handleClearField("password")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700]"
                  aria-label="Clear password"
                >
                  <FiX size={20} />
                </button>
              )}
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          )}

          {mode === "login" && (
            <div className="text-right">
              <button
                type="button"
                onClick={() => {
                  setMode("forgot");
                  setFormData({ name: "", email: "", password: "" });
                  setErrors({});
                  setMessage("");
                }}
                className="text-white font-medium hover:text-[#00ffd5] transition duration-200"
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-black font-semibold py-2 rounded-md hover:opacity-90 transition duration-200 ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-[#ffd700] via-[#ff00ff] to-[#00ffff]"
            }`}
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                  <span>Processing...</span>
                    <span
                          role="button"
                           onClick={() => setIsLoading(false)}
                           className="text-black hover:text-red-600 cursor-pointer transition"
                           aria-label="Cancel operation"
                               >
                           <FiX size={20} />
                   </span>
                </div>
            ) : mode === "login" ? (
              "Login"
            ) : mode === "signup" ? (
              "Sign Up"
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        {mode !== "forgot" && (
          <p className="mt-6 text-center text-white">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setFormData({ name: "", email: "", password: "" });
                setErrors({});
                setMessage("");
              }}
              className="font-medium hover:text-black hover:bg-white rounded-md px-3 py-1 transition duration-200"
            >
              {mode === "login" ? "Sign Up" : "Login"}
            </button>
          </p>
        )}

        {mode === "forgot" && (
          <p className="mt-6 text-center text-white">
            <button
              onClick={() => {
                setMode("login");
                setFormData({ name: "", email: "", password: "" });
                setErrors({});
                setMessage("");
              }}
              className="font-medium hover:text-black hover:bg-white rounded-md px-3 py-1 transition duration-200"
            >
              Back to Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
