import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearField = (field) => {
    if (field === "password") setPassword("");
    else if (field === "confirmPassword") setConfirmPassword("");
    setError("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError("");
    setMessage("");

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Reset password failed");
      } else {
        setMessage("Password reset successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 5173);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gradient-to-r from-[#0a0a23] via-[#1a0033] to-[#000] rounded-lg shadow-[0_0_30px_rgba(255,0,255,0.3)] p-8 border border-[#ffffff1a]">
        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-[#8e2de2] to-[#f093fb] text-3xl font-extrabold mb-6 tracking-widest animate-textGlow">
          Reset Password
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-400 text-center mb-4">{message}</p>}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className={`w-full px-4 py-2 rounded-md border ${
                error ? "border-red-500" : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-[#00ffd5] placeholder-white`}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
            {password && (
              <button
                type="button"
                onClick={() => handleClearField("password")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700]"
                aria-label="Clear password"
              >
                <FiX size={20} />
              </button>
            )}
          </div>

          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className={`w-full px-4 py-2 rounded-md border ${
                error ? "border-red-500" : "border-transparent"
              } focus:outline-none focus:ring-2 focus:ring-[#8e2de2] placeholder-white`}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              style={{ color: "white" }}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700]"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {showConfirmPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>
            {confirmPassword && (
              <button
                type="button"
                onClick={() => handleClearField("confirmPassword")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700]"
                aria-label="Clear confirm password"
              >
                <FiX size={20} />
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-black font-semibold py-2 rounded-md hover:opacity-90 transition duration-200 ${
              isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-gradient-to-r from-[#ffd700] via-[#ff00ff] to-[#00ffff]"
            }`}
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                <span>Resetting...</span>
              </div>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          className="mt-4 w-full py-2 text-center text-blue-600 hover:underline"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
