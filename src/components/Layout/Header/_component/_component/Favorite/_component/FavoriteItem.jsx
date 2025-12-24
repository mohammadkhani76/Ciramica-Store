import { Link } from "react-router";
import { SvgClose } from "../../../../../../../assets/icon/SvgClose";

export const FavoriteItem = ({
  product,
  shopID,
  deleteFav,
  setShowFavModal,
  addToCart,
}) => {
  return (
    <>
      <div className="fav-modal-main-full-products-item">
        <div className="fav-modal-products-item-img">
          <Link
            to={`/product/${product.id}`}
            onClick={() => setShowFavModal(false)}
          >
            <img src={product.image} alt={product.title} />
          </Link>
        </div>
        <div className="fav-modal-products-item-info">
          <p>
            <Link
              to={`/product/${product.id}`}
              onClick={() => setShowFavModal(false)}
            >
              {product.title}
            </Link>
          </p>

          <div className="fav-modal-shop-actions add-cart">
            <Link
              to="/cart"
              className="fav-modal-shop-actions-btn-cart"
              onClick={() => {
                addToCart(shopID, {
                  id: product.id,
                  title: product.title,
                  price: product.discountPrice || product.price,
                  quantity: 1,
                  image: product.image,
                });
                setShowFavModal(false);
              }}
            >
              Add To Cart
            </Link>
          </div>
        </div>
        <div className="fav-modal-products-item-delete">
          <button onClick={() => deleteFav(shopID, product)}>
            <SvgClose />
          </button>
        </div>
      </div>
    </>
  );
};
