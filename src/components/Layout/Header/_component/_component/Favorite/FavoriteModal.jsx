import { Link } from "react-router";
import { SvgClose } from "../../../../../../assets/icon/SvgClose";
import { FavoriteItem } from "./_component/FavoriteItem";
import "./FavoriteModal.css";
export const FavoriteModal = ({
  showFavModal,
  setShowFavModal,
  totalCountFav,
  favorite,
  deleteFav,
  addToCart,
}) => {
  return (
    <>
      <div className="fav-modal" onClick={() => setShowFavModal(false)}>
        <div className="fav-modal-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="fav-modal-header">
            <p>Favorite Cart</p>
            <button onClick={() => setShowFavModal(false)}>
              <SvgClose />
            </button>
          </div>
          {totalCountFav === 0 ? (
            <div className="fav-modal-main-empty">
              <div className="fav-modal-main-empty-info">
                <h3>There are no products on the Wishlist!</h3>

                <button onClick={() => setShowFavModal(false)}>
                  <Link to={"/"}>Start Now</Link>
                </button>
              </div>
            </div>
          ) : (
            <div className="fav-modal-main-full">
              <div className="fav-modal-main-full-products">
                {favorite
                  .filter((shop) => shop.favorite.length > 0)
                  .map((shop) => (
                    <div key={shop.shopID} className="shop-group">
                      <h4>Shop: {shop.shopID}</h4>
                      <div className="shop-products">
                        {shop.favorite.map((product) => (
                          <FavoriteItem
                            key={product.id}
                            product={product}
                            shopID={shop.shopID}
                            deleteFav={deleteFav}
                            setShowFavModal={setShowFavModal}
                            addToCart={addToCart}
                          />
                        ))}
                      </div>

                      {/* <div className="fav-modal-shop-actions">
                        <Link
                          to="/cart"
                          className="fav-modal-shop-actions-btn-cart"
                          onClick={() => setShowFavModal(false)}
                        >
                          View Cart
                        </Link>
                      </div> */}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
