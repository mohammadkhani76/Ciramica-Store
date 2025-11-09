import { useParams } from "react-router";
import "./ProductsDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Newsletter } from "../../../../components/Newsletter/Newsletter";
import { ProductsDetailsSwiper } from "./ProductsDetailsSwiper";
import { Loader } from "../../../../components/Loader/Loader";
import { useCartStore } from "../../../../Store/CartStore";

export const ProductsDetails = () => {
  const { addToCart } = useCartStore();
  const { id } = useParams();
  const [shops, setShops] = useState(null);
  const [count, setCount] = useState(0);

  const handlelInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    return count <= 0 ? setCount(0) : setCount((prev) => prev - 1);
  };

  const handelCart = () => {
    if (count > 0) {
      addToCart({
        id: shops.id,
        title: shops.title,
        price: shops.discountPrice || shops.price,
        image: shops.imageFront,
        quantity: count,
      });
      setCount(0);
    } else {
      alert("The product quantity must be greater than 0");
    }
  };

  async function getProduct() {
    try {
      const response = await axios.get("/data/shops.json");
      const data = response.data.shops; // اینجا shops رو می‌گیری
      console.log(data);
      // پیدا کردن محصول با id
      let productFound = null;
      for (const shop of data) {
        for (const menu of shop.menu) {
          const found = menu.list.find((p) => p.id === id);
          if (found) {
            productFound = found;
            break;
          }
        }
        if (productFound) break;
      }
      setShops(productFound);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!shops) return <Loader />;

  return (
    <div className="container mainContainer">
      <div className="details-product-wrapper">
        <div className="details-product-img">
          <ProductsDetailsSwiper
            images={[
              shops.imageFront,
              shops.imageBack,
              shops.imageGallery1,
              shops.imageGallery2,
            ]}
            alt={shops.title}
          />
        </div>

        <div className="details-product-info">
          <h2>{shops.title}</h2>
          <p>Code: {id}</p>
          <p className="details-product-discount">
            {shops.discountPrice ? (
              <>
                <del>{shops.price} $</del>
                <ins>{shops.discountPrice} $</ins>
              </>
            ) : (
              <ins>{shops.price} $</ins>
            )}
          </p>
          <p>{shops.description}</p>
          <div className="details-product-cart-wrapper">
            <div className="details-product-cart">
              <button onClick={handleDec}>-</button>
              <span>{count}</span>
              <button onClick={handlelInc}>+</button>
            </div>
            <button className="details-product-add" onClick={handelCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};
