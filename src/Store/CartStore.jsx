import { create } from "zustand";
// const [cartCount, setCartCount] = useState(0);

export const useCartStore = create((set) => ({
  cartCount: 0,
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  removeFromCart: () =>
    set((state) => ({
      cartCount: (state.cartCount = 0 ? state.cartCount - 1 : 0),
    })),
}));
