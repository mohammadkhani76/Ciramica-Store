import { create } from "zustand";

export const useBasketStore = create((set) => ({
  basket: [],

  setBasket: (newBasket) => {
    set({ basket: newBasket });
  },
}));
