"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { authAPI, setCookie } from "@/app/lib/api";
import { useAuthStore } from "@/app/store/authStore";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const signature = searchParams.get("signature");

  useEffect(() => {
    if (!signature) {
      setError("Invalid reset link");
    }
  }, [signature]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!signature) {
      setError("Invalid reset link");
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.verifyResetPassword(signature, password);
      setSuccess(response.message || "Password reset successful!");
      setCookie("auth_token", response.token, 7);
      setAuth(response.token, { userType: response.userType } as any);
      
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black border border-gray-800 rounded-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">RESET PASSWORD</h1>

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

        {!success && signature && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                required
                maxLength={100}
              />
              <p className="text-gray-500 text-xs mt-1">Minimum 6 characters</p>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? "RESETTING..." : "RESET PASSWORD"}
            </button>
          </form>
        )}

        {success && (
          <p className="text-center text-gray-400 text-sm mt-4">
            Redirecting to home page...
          </p>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordVerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}
