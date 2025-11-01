import { Slider } from "../../components/Slider/Slider";
import "./Home.css";
import { useCartStore } from "./../../Store/CartStore";
import { useFavoriteStore } from "./../../Store/FavoriteStore";
import { Services } from "../../components/Services/Services";
import { Discount } from "../../components/Discount/Discount";
import { ProductCategory } from "../../components/ProductCategory/ProductCategory";
import { BlogPost } from "../../components/BlogPost/BlogPost";
import { ScrollingTicker } from "../../components/ScrollingTicker/ScrollingTicker";
import { Products } from "../../components/Products/Products";
import { Baner } from "../../components/Baner/Baner";
import { Newsletter } from "../../components/Newsletter/Newsletter";
export const Home = () => {
  const { cartCount, addToCart, removeFromCart } = useCartStore();
  const { favoriteCount, addToFavorite, removeFromFavorite } =
    useFavoriteStore();

  return (
    <>
      <Slider />
      <Services />
      <Discount />
      <Products />
      <ScrollingTicker />

      <ProductCategory />
      <Baner />
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
