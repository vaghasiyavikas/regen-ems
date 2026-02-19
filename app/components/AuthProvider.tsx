"use client";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { getCookie } from "../lib/api";
import { authAPI } from "../lib/api";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setAuth, setLoading, logout } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      const token = getCookie("auth_token");
      
      if (token) {
        try {
          const user = await authAPI.getUser(token);
          setAuth(token, user);
        } catch (error) {
          logout();
        }
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [setAuth, setLoading, logout]);

  return <>{children}</>;
}
