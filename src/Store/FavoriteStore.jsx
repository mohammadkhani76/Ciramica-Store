import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
  favorite: [],
  setFavorite: (newFavorite) => {
    set({ favorite: newFavorite });
  },
}));
