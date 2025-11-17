import { useLocalStorage } from "./useLocalStorage";

export const useBasket = () => {
  let basket = [];
  const { saveToLocalStorage, loadFromLocalStorage } = useLocalStorage("_b");

  // Add to cart
  const addToCart = (shopID, productData) => {
    basket = loadFromLocalStorage();
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

    saveToLocalStorage(basket);
    console.log("Basket updated:", basket);
  };

  // remove from cart
  const removeFromCart = (shopID, productData) => {
    basket = loadFromLocalStorage();
    const existingShop = basket.find((shop) => shop.shopID === shopID);

    if (existingShop) {
      const existingProduct = existingShop.basket.find(
        (product) => product.id === productData.id
      );
      if (existingProduct) {
        existingProduct.quantity -= productData.quantity;
        if (existingProduct.quantity <= 0) {
          deleteProduct(shopID, productData);
          return;
        }
      }
    }

    saveToLocalStorage(basket);
    console.log("Basket updated:", basket);
  };

  const deleteProduct = (shopID, productData) => {
    basket = loadFromLocalStorage();
    const existingShop = basket.find((shop) => shop.shopID === shopID);

    if (existingShop) {
      existingShop.basket = existingShop.basket.filter(
        (product) => product.id !== productData.id
      );
    }

    saveToLocalStorage(basket);
    console.log("Basket updated:", basket);
  };
  return {
    addToCart,
    removeFromCart,
    deleteProduct,
    saveToLocalStorage,
    loadFromLocalStorage,
  };
};
