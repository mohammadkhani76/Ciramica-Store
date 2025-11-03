import { useParams } from "react-router";
import "./ProductsDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Newsletter } from "../../../../components/Newsletter/Newsletter";
import { ProductNotFound } from "./ProductNotFound/ProductNotFound";

export const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  if (!product) return <ProductNotFound />; // اگر هنوز داده نیامده، متن لودینگ نمایش داده شود

  return (
    <div className="container mainContainer">
      <div className="details-product-wrapper">
        <div className="details-product-img">
          <img src={product.imageFront} alt={product.title} />
        </div>

        <div>
          <h2>{product.title}</h2>
          <p>Product ID: {id}</p>
          <p>
            <del>{product.price} $</del>
            <ins>{product.discountPrice} $</ins>
          </p>
          <p>{product.description || "No description available."}</p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};
