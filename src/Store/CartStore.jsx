import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useBasketStore = create(
  persist(
    (set, get) => ({
      basket: [],
      addToCart: (shopID, productData) => {
        const basket = [...get().basket];
        const existingShop = basket.find((shop) => shop.shopID === shopID);

        if (existingShop) {
          const existingProduct = existingShop.basket.find(
            (product) => product.id === productData.id
          );
          if (existingProduct) {
            existingProduct.quantity += productData.quantity;
          } else {
            existingShop.basket.push(productData);
          }
        } else {
          basket.push({
            shopID: shopID,
            basket: [productData],
          });
        }
        set({ basket });
        console.log("Basket updated:", basket);
      },

      removeFromCart: (shopID, productData) => {
        const basket = [...get().basket];
        const existingShop = basket.find((shop) => shop.shopID === shopID);
        if (existingShop) {
          const existingProduct = existingShop.basket.find(
            (product) => product.id === productData.id
          );
          if (existingProduct) {
            existingProduct.quantity -= productData.quantity;
            if (existingProduct.quantity <= 0) {
              existingShop.basket = existingShop.basket.filter(
                (p) => p.id !== productData.id
              );
            }
          }
        }
        set({ basket });
        console.log("Basket updated:", basket);
      },

      deleteProduct: (shopID, productData) => {
        const basket = [...get().basket];
        const existingShop = basket.find((shop) => shop.shopID === shopID);

        if (existingShop) {
          existingShop.basket = existingShop.basket.filter(
            (product) => product.id !== productData.id
          );
        }
        set({ basket });
        console.log("Basket updated:", basket);
      },

      basketCount: () => {
        const basket = get().basket;
        return basket.reduce(
          (acc, shop) =>
            (acc += shop.basket.reduce((sum, p) => sum + p.quantity, 0)),
          0
        );
      },
      basketTotalPrice: () => {
        const basket = get().basket;
        return basket.reduce(
          (acc, shop) =>
            (acc += shop.basket.reduce(
              (sum, p) => sum + p.quantity * p.price,
              0
            )),
          0
        );
      },
    }),
    { name: "_basket" }
  )
);
