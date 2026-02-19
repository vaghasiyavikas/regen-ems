import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartStore>()(persist(
  (set, get) => ({
    items: [],
    isOpen: false,
    addItem: (item) => set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
    removeItem: (id) => set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),
    updateQuantity: (id, quantity) => set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
      ),
    })),
    getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
    getTotalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
  }),
  { name: 'cart-storage' }
));
