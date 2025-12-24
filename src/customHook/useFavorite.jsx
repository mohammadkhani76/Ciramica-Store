import { toast } from "react-toastify";
import { useLocalStorage } from "./useLocalStorage";
import { useFavoriteStore } from "../Store/FavoriteStore";

export const useFavorite = () => {
  let favorite = [];
  const { setFavorite } = useFavoriteStore();
  const { saveToLocalStorage, loadFromLocalStorage } = useLocalStorage("_f");

  const addToFav = (shopID, productData) => {
    favorite = loadFromLocalStorage() || [];

    const existingShop = favorite.find((shop) => shop.shopID === shopID);

    if (existingShop) {
      const existingProduct = existingShop.favorite.find(
        (product) => product.id === productData.id
      );

      // delete
      if (existingProduct) {
        existingShop.favorite = existingShop.favorite.filter(
          (p) => p.id !== productData.id
        );

        // اگر لیست اون فروشگاه خالی شد
        if (existingShop.favorite.length === 0) {
          favorite = favorite.filter((shop) => shop.shopID !== shopID);
        }
        toast.error(`${productData.title} removed from favorite!`);
      }
      // add
      else {
        existingShop.favorite.push(productData);

        toast.success(`${productData.title} added to favorite!`);
      }
    }
    //  فروشگاه جدید
    else {
      favorite.push({
        shopID: shopID,
        favorite: [productData],
      });
      toast.success(`${productData.title} added to favorite!`);
    }
    setFavorite(favorite);
    saveToLocalStorage(favorite);
    console.log("fav updated:", favorite);
  };

  const deleteFav = (shopID, productData) => {
    favorite = loadFromLocalStorage() || [];

    const existingShop = favorite.find((shop) => shop.shopID === shopID);

    if (existingShop) {
      const existingProduct = existingShop.favorite.find(
        (product) => product.id === productData.id
      );
      if (existingProduct) {
        existingShop.favorite = existingShop.favorite.filter(
          (p) => p.id !== productData.id
        );

        // اگر لیست اون فروشگاه خالی شد
        if (existingShop.favorite.length === 0) {
          favorite = favorite.filter((shop) => shop.shopID !== shopID);
        }
        toast.error(`${productData.title} removed from favorite!`);
      }
      setFavorite(favorite);
      saveToLocalStorage(favorite);
      console.log("fav updated:", favorite);
    }
  };
  return { addToFav, deleteFav };
};
