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
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const handlelInc = () => {
    setCount((prev) => prev + 1);
  };
  const handleDec = () => {
    return count <= 0 ? setCount(0) : setCount((prev) => prev - 1);
    // if (count <= 0) {
    //   setCount(0);
    // } else {
    //   setCount((prev) => prev - 1);
    // }
  };
  const handelCart = () => {
    if (count > 0) {
      addToCart({
        id: product.id, // حتماً id محصول رو بفرست
        title: product.title,
        price: product.discountPrice || product.price,
        image: product.imageFront,
        quantity: count,
      });
      setCount(0);
    } else {
      alert("تعداد محصول باید بیشتر از صفر باشد");
    }
  };

  async function getProduct() {
    try {
      const response = await axios.get(
        `https://68ea40b6f1eeb3f856e6b72b.mockapi.io/product/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="container mainContainer">
      <div className="details-product-wrapper">
        <div className="details-product-img">
          <ProductsDetailsSwiper
            images={[
              product.imageFront,
              product.imageBack,
              product.imageGallery1,
              product.imageGallery2,
            ]}
            alt={product.title}
          />
        </div>

        <div className="details-product-info">
          <h2>{product.title}</h2>
          <p>Code: {id}</p>
          <p className="details-product-discount">
            {product.discountPrice ? (
              <>
                <del>{product.price} $</del>
                <ins>{product.discountPrice} $</ins>
              </>
            ) : (
              <ins>{product.price} $</ins>
            )}
          </p>
          <p>{product.description}</p>
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
