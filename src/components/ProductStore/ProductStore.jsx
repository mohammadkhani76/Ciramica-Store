import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductStore.css";
import { ProductStoreSwiper } from "./ProductStoreSwiper";
import { useBasket } from "../../customHook/useBasket";
// import { useBasketStore } from "../../Store/CartStore";

export const ProductStore = () => {
  const [shops, setShops] = useState([]);
  // const { addToCart } = useBasketStore();
  const { addToCart } = useBasket();

  async function getProductShop() {
    try {
      const response = await axios.get("/data/shops.json");
      const data = response.data;
      console.log(data);
      setShops(data.shops);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProductShop();
  }, []);

  return (
    <>
      {shops.map((shop) => (
        <div key={shop.shopID} className="store-wrapper container">
          <h2>{shop.shopName}</h2>
          {shop.menu.map((category, catIndex) => (
            <div className="store-items" key={catIndex}>
              <ProductStoreSwiper
                product={category.list}
                addToCart={addToCart}
                shopID={shop.shopID}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
