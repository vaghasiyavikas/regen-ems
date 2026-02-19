import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string;
  fname: string;
  sname: string;
  phone: string;
  userType: string;
  verified: boolean;
  address?: string;
  postalcode?: string;
  _id?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(persist(
  (set) => ({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
    setAuth: (token, user) => {
      set({ token, user, isAuthenticated: true, isLoading: false });
    },
    logout: () => {
      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      set({ token: null, user: null, isAuthenticated: false, isLoading: false });
    },
    setLoading: (loading) => set({ isLoading: loading }),
  }),
  { 
    name: 'auth-storage',
    partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated })
  }
));
