// import axios from "axios";
// import { useEffect, useState } from "react";
import "./ProductStore.css";
import { ProductStoreSwiper } from "./ProductStoreSwiper";
import { useBasket } from "../../customHook/useBasket";
import { useShops } from "../../customHook/useShops";
import { useFavorite } from "../../customHook/useFavorite";

export const ProductStore = () => {
  const { addToCart } = useBasket();
  const { addToFav } = useFavorite();

  const { shops, loading, error } = useShops();
  // const [shops, setShops] = useState([]);

  // async function getProductShop() {
  //   try {
  //     const response = await axios.get("/data/shops.json");
  //     const data = response.data;
  //     // console.log(data);
  //     setShops(data.shops);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // }

  // useEffect(() => {
  //   getProductShop();
  // }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}
      {!loading && shops.length === 0 && <p>No shops found</p>}
      {!loading &&
        shops.map((shop) => (
          <div key={shop.shopID} className="store-wrapper container">
            <h2>{shop.shopName}</h2>
            {shop.menu.map((category, catIndex) => (
              <div className="store-items" key={catIndex}>
                <ProductStoreSwiper
                  product={category.list}
                  addToCart={addToCart}
                  addToFav={addToFav}
                  shopID={shop.shopID}
                />
              </div>
            ))}
          </div>
        ))}
    </>
  );
};
