import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductStore.css";
import { ProductStoreSwiper } from "./ProductStoreSwiper";
import { useCartStore } from "../../Store/CartStore";
import { useFavoriteStore } from "../../Store/FavoriteStore";

export const ProductStore = () => {
  const { addToCart } = useCartStore();
  const { addToFavorite } = useFavoriteStore();
  const [shops, setShops] = useState([]);

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
              {/* <h3>{category.category}</h3> */}
              <ProductStoreSwiper
                product={category.list}
                addToCart={addToCart}
                addToFavorite={addToFavorite}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
