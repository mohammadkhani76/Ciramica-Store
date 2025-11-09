import "./Home.css";
import { Slider } from "./_components/Slider/Slider";
import { Services } from "./_components/Services/Services";
import { Discount } from "./_components/Discount/Discount";
import { ProductsList } from "./../../components/ProductsList/ProductsList";
import { ScrollingTicker } from "./_components/ScrollingTicker/ScrollingTicker";
import { ProductCategory } from "./_components/ProductCategory/ProductCategory";
import { Baner } from "./_components/Baner/Baner";
import { BlogPost } from "./../../components/BlogPost/BlogPost";
import { Newsletter } from "./../../components/Newsletter/Newsletter";
import { ProductStore } from "../../components/ProductStore/ProductStore";

import { useCartStore } from "./../../Store/CartStore";
import { useFavoriteStore } from "./../../Store/FavoriteStore";
export const Home = () => {
  const { cartCount, addToCart, removeFromCart } = useCartStore();
  const { favoriteCount, addToFavorite, removeFromFavorite } =
    useFavoriteStore();

  return (
    <>
      <Slider />
      <Services />
      <Discount />
      <ProductStore />
      <ScrollingTicker />
      <ProductCategory />
      <Baner />
      <ProductsList />

      <BlogPost />
      <Newsletter />
      {/* <div className="container homeWrapper">
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>-</button>
      </div>

      <div className="container homeWrapper">
        <button onClick={addToFavorite}>+</button>
        <button onClick={removeFromFavorite}>-</button>
      </div> */}
    </>
  );
};
