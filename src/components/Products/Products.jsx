import "./Products.css";
import front from "./../../assets/pic/cat-2-1.jpg";
import back from "./../../assets/pic/cat-3-1.jpg";
import { SvgFavorite } from "../../assets/icon/SvgFavorite";
import { SvgCart } from "../../assets/icon/SvgCart";
import { SvgStar } from "../../assets/icon/SvgStar";
import { useEffect, useState } from "react";
import axios from "axios";

export const Products = () => {
  const [products, setProducts] = useState([]);
  async function getProduct() {
    try {
      const response = await axios.get(
        "https://68ea40b6f1eeb3f856e6b72b.mockapi.io/product"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="product-wrapper container">
        <h2>Popular Products</h2>
        <div className="product-items">
          {/* product */}
          {products.map((item, id) => (
            <div className="product-item" key={id}>
              <div className="product-discount">{item.discount}%</div>
              {/* product-picture */}
              <div className="product-item-img-box">
                <a href="#">
                  <img
                    src={item.imageFront}
                    alt={item.title}
                    className="img-box-front"
                  />
                  <img
                    src={item.imageBack}
                    alt={item.title}
                    className="img-box-back"
                  />
                  <div className="product-icons">
                    <button className="icon-btn">
                      <SvgFavorite />
                    </button>
                    <button className="icon-btn">
                      <SvgCart />
                    </button>
                  </div>
                </a>
              </div>
              {/* product-info */}
              <div className="product-item-info">
                <h4>
                  <a href="#">{item.title}</a>
                </h4>
                <span>
                  <SvgStar />
                  {item.rate}
                </span>
                <p>
                  <del>{item.price} $</del>
                  <ins>{item.discountPrice} $</ins>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
