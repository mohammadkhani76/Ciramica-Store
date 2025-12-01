import { Slider } from "./_components/Slider/Slider";
import { Services } from "./_components/Services/Services";
import { Discount } from "./_components/Discount/Discount";
import { ScrollingTicker } from "./_components/ScrollingTicker/ScrollingTicker";
import { ProductCategory } from "./_components/ProductCategory/ProductCategory";
import { Baner } from "./_components/Baner/Baner";
import { BlogPost } from "./../../components/BlogPost/BlogPost";
import { Newsletter } from "./../../components/Newsletter/Newsletter";
import { ProductStore } from "../../components/ProductStore/ProductStore";

export const Home = () => {
  return (
    <>
      <Slider />
      <Services />
      <Discount />
      <ProductStore />
      <ScrollingTicker />
      <ProductCategory />
      <Baner />
      <BlogPost />
      <Newsletter />
    </>
  );
};
