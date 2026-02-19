"use client";
import { useState } from "react";
import { authAPI, setCookie } from "../lib/api";
import { useAuthStore } from "../store/authStore";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: "login" | "signup" | "forgot";
  onSuccess?: () => void;
}

export default function AuthModal({ isOpen, onClose, defaultView = "login", onSuccess }: AuthModalProps) {
  const [view, setView] = useState<"login" | "signup" | "forgot">(defaultView);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { setAuth } = useAuthStore();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    fname: "",
    sname: "",
    phone: "",
  });
  const [forgotEmail, setForgotEmail] = useState("");

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(forgotEmail)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);
    try {
      await authAPI.resetPassword(forgotEmail);
      setSuccess("Password reset link has been sent to your email!");
      setForgotEmail("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[0-9+\-\s()]+$/.test(phone);
  const validatePassword = (password: string) => password.length >= 6;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(loginData.email)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.login(loginData.email, loginData.password);
      setCookie("auth_token", response.token, 7);
      const user = await authAPI.getUser(response.token);
      setAuth(response.token, user);
      onSuccess?.();
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(signupData.email)) {
      setError("Invalid email format");
      return;
    }
    if (!validatePassword(signupData.password)) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (!validatePhone(signupData.phone)) {
      setError("Invalid phone number");
      return;
    }
    if (!signupData.fname || !signupData.sname) {
      setError("First name and surname are required");
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.register(signupData);
      setCookie("auth_token", response.token, 7);
      const user = await authAPI.getUser(response.token);
      setAuth(response.token, user);
      onSuccess?.();
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 z-50 transition-opacity duration-300"
        onClick={onClose}
        style={{ animation: "fadeIn 0.3s ease-out" }}
      />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ animation: "fadeIn 0.3s ease-out" }}
      >
        <div
          className="bg-black border border-gray-800 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
          style={{ animation: "slideInUp 0.3s ease-out" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              {view === "login" ? "LOGIN" : view === "signup" ? "SIGN UP" : "FORGOT PASSWORD"}
            </h2>
            <button onClick={onClose} className="text-white hover:text-[#bd42f4] transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded text-red-500 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500 rounded text-green-500 text-sm">
                {success}
              </div>
            )}

            {view === "forgot" ? (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <p className="text-gray-400 text-sm mb-4">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                    required
                    maxLength={100}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#bd42f4] text-white py-3 rounded font-bold hover:bg-[#a835d9] transition disabled:opacity-50"
                >
                  {loading ? "SENDING..." : "SEND RESET LINK"}
                </button>
                <p className="text-center text-gray-400 text-sm">
                  Remember your password?{" "}
                  <button
                    type="button"
                    onClick={() => { setView("login"); setError(""); setSuccess(""); }}
                    className="text-[#bd42f4] hover:underline"
                  >
                    Login
                  </button>
                </p>
              </form>
            ) : view === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                    required
                    maxLength={100}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#bd42f4] text-white py-3 rounded font-bold hover:bg-[#a835d9] transition disabled:opacity-50"
                >
                  {loading ? "LOGGING IN..." : "LOGIN"}
                </button>
                <div className="flex justify-between items-center text-sm">
                  <button
                    type="button"
                    onClick={() => { setView("forgot"); setError(""); }}
                    className="text-[#bd42f4] hover:underline"
                  >
                    Forgot password?
                  </button>
                  <button
                    type="button"
                    onClick={() => { setView("signup"); setError(""); }}
                    className="text-gray-400 hover:text-[#bd42f4]"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      value={signupData.fname}
                      onChange={(e) => setSignupData({ ...signupData, fname: e.target.value })}
                      className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                      required
                      maxLength={50}
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Surname</label>
                    <input
                      type="text"
                      value={signupData.sname}
                      onChange={(e) => setSignupData({ ...signupData, sname: e.target.value })}
                      className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                      required
                      maxLength={50}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={signupData.phone}
                    onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                    className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                    required
                    maxLength={20}
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                    required
                    maxLength={100}
                  />
                  <p className="text-gray-500 text-xs mt-1">Minimum 6 characters</p>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#bd42f4] text-white py-3 rounded font-bold hover:bg-[#a835d9] transition disabled:opacity-50"
                >
                  {loading ? "CREATING ACCOUNT..." : "SIGN UP"}
                </button>
                <p className="text-center text-gray-400 text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setView("login")}
                    className="text-[#bd42f4] hover:underline"
                  >
                    Login
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
