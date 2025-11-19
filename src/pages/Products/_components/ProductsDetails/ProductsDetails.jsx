import { useParams } from "react-router";
import "./ProductsDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Newsletter } from "../../../../components/Newsletter/Newsletter";
import { ProductsDetailsSwiper } from "./ProductsDetailsSwiper";
import { Loader } from "../../../../components/Loader/Loader";
import { useBasket } from "../../../../customHook/useBasket";

export const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const [shopID, setShopID] = useState(null);
  const { addToCart } = useBasket();

  const handleInc = () => setCount((prev) => prev + 1);
  const handleDec = () => setCount((prev) => (prev <= 0 ? 0 : prev - 1));

  // Fetch product
  const getProduct = async () => {
    try {
      const response = await axios.get("/data/shops.json");
      const data = response.data.shops;
      // console.log(data);

      let productFound = null;
      let shopIDFound = null;

      for (const shop of data) {
        for (const menu of shop.menu) {
          const found = menu.list.find((p) => p.id === id);
          if (found) {
            productFound = found;
            shopIDFound = shop.shopID;
            break;
          }
        }
        if (productFound) break;
      }

      setProduct(productFound);
      setShopID(shopIDFound);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

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
              <button onClick={handleInc}>+</button>
            </div>
            <button
              className="details-product-add"
              onClick={() =>
                addToCart(shopID, {
                  id: product.id,
                  title: product.title,
                  price: product.discountPrice || product.price,
                  quantity: count || 1,
                  image: product.imageFront,
                })
              }
            >
              Add To Cart
            </button>

            {/* <button
              className="details-product-add"
              onClick={() =>
                removeFromCart(shopID, {
                  id: product.id,
                  quantity: count || 1,
                })
              }
            >
              removed From Cart
            </button>
            <button
              className="details-product-add"
              onClick={() =>
                deleteProduct(shopID, {
                  id: product.id,
                })
              }
            >
              delete item
            </button> */}
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};
