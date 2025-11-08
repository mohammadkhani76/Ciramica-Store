// import { create } from "zustand";
// // const [cartCount, setCartCount] = useState(0);

// export const useCartStore = create((set) => ({
//   cartCount: 0,
//   addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
//   removeFromCart: () =>
//     set((state) => ({
//       cartCount: (state.cartCount = 0 ? state.cartCount - 1 : 0),
//     })),
// }));
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [], // لیست محصولات در سبد خرید
  cartCount: 0, // مجموع تعداد کل محصولات

  addToCart: (product) =>
    set((state) => {
      // بررسی اینکه آیا محصول از قبل در سبد هست یا نه
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      let updatedItems;

      if (existingProduct) {
        // اگر از قبل هست، تعدادش رو زیاد کن
        updatedItems = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // اگر نیست، اضافه‌اش کن
        updatedItems = [...state.cartItems, product];
      }

      // محاسبه‌ی تعداد کل آیتم‌ها
      const totalCount = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return { cartItems: updatedItems, cartCount: totalCount };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedItems = state.cartItems.filter((item) => item.id !== id);
      const totalCount = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      return { cartItems: updatedItems, cartCount: totalCount };
    }),
}));
