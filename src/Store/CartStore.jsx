import { create } from "zustand";
// const [cartCount, setCartCount] = useState(0);

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    const { cart } = get();
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, product] });
    }
  },

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));

// ============================================================================
// export const useCartStore = create((set) => ({
//   cartCount: 0,
//   addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
//   removeFromCart: () =>
//     set((state) => ({
//       cartCount: (state.cartCount = 0 ? state.cartCount - 1 : 0),
//     })),
// }));
// =======================================================================
// useEffect(() => {
//   const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//   setCart(savedCart);
// }, []);

// useEffect(() => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }, [cart]);

// const [cart, setCart] = useState([]);

// const addToCart = ({ id, title, imageFront, price, quantity = 1 }) => {
//   setCart((prevCart) => {
//     const esxisting = prevCart.find((item) => item.id === id);
//     if (esxisting) {
//       return prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + quantity } : item
//       );
//     } else {
//       return [...prevCart, { id, title, imageFront, price, quantity }];
//     }
//   });
// };
// // تعداد کل محصولات در سبد
// const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

// const removeFromCart = (id) => {
//   setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   updatecart();
// };
