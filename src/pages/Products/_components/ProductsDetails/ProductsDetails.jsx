import { useParams } from "react-router";
import "./ProductsDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Newsletter } from "../../../../components/Newsletter/Newsletter";
import { ProductsDetailsSwiper } from "./ProductsDetailsSwiper";
import { Loader } from "../../../../components/Loader/Loader";
import { useBasket } from "../../../../customHook/useBasket";
import { Faq } from "../../../../components/Faq/Faq";
import { useBasketStore } from "../../../../Store/CartStore";

export const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [shopID, setShopID] = useState(null);
  const { addToCart, removeFromCart } = useBasket();
  const { basket } = useBasketStore();
  const shopInBasket = basket.find((shop) => shop.shopID === shopID);
  const productInBasket = shopInBasket?.basket.find((p) => p.id === id);
  const quantityInBasket = productInBasket?.quantity || 0;

  // Fetch product
  const getProduct = async () => {
    try {
      const response = await axios.get("/data/shops.json");
      const data = response.data.shops;

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
        <div className="details-product">
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
                <button
                  onClick={() =>
                    removeFromCart(shopID, { id: product.id, quantity: 1 })
                  }
                >
                  -
                </button>
                <span>{quantityInBasket}</span>
                <button
                  onClick={() =>
                    addToCart(shopID, {
                      id: product.id,
                      title: product.title,
                      price: product.discountPrice || product.price,
                      quantity: 1,
                      image: product.imageFront,
                    })
                  }
                >
                  +
                </button>
              </div>
              <button
                className="details-product-add"
                onClick={() =>
                  addToCart(shopID, {
                    id: product.id,
                    title: product.title,
                    price: product.discountPrice || product.price,
                    quantity: 1,
                    image: product.imageFront,
                  })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <Faq />
      </div>

      <Newsletter />
    </div>
  );
};
