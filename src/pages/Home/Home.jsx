import { Slider } from "../../components/Slider/Slider";
import "./Home.css";
import { useCartStore } from "./../../Store/CartStore";
import { useFavoriteStore } from "./../../Store/FavoriteStore";
import { Services } from "../../components/Services/Services";
import { Discount } from "../../components/Discount/Discount";
import { ProductCategory } from "../../components/ProductCategory/ProductCategory";
import { BlogPost } from "../../components/BlogPost/BlogPost";
export const Home = () => {
  const { cartCount, addToCart, removeFromCart } = useCartStore();
  const { favoriteCount, addToFavorite, removeFromFavorite } =
    useFavoriteStore();

  return (
    <>
      <Slider />
      <Services />
      <Discount />
      <ProductCategory />
      <BlogPost />
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
