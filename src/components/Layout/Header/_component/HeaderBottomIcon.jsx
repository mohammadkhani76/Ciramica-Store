import { useBasketStore } from "../../../../Store/CartStore";
import { SvgSearch } from "../../../../assets/icon/SvgSearch";
import { SvgProfile } from "../../../../assets/icon/SvgProfile";
import { SvgFavorite } from "../../../../assets/icon/SvgFavorite";
import { SvgCart } from "../../../../assets/icon/SvgCart";
import { SvgClose } from "../../../../assets/icon/SvgClose";
import { useState } from "react";
import { Link } from "react-router";

export const HeaderBottomIcon = ({ isMobile }) => {
  // const count = useBasketStore((state) => state.basketCount());
  // const basket = useBasketStore((state) => state.basket);
  // const deleteProduct = useBasketStore((state) => state.deleteProduct);
  // const basketTotalPrice = useBasketStore((state) => state.basketTotalPrice());
  const { basket } = useBasketStore();

  console.log("basket", basket);
  const count = basket.reduce(
    (acc, shop) => (acc += shop.basket.reduce((sum, p) => sum + p.quantity, 0)),
    0
  );

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ul
        className={
          isMobile ? "mobile-bottom-menu-icon" : "header-bottom-menu-icon"
        }
      >
        <li>
          <button>
            <SvgSearch />
          </button>
        </li>
        <li>
          <button>
            <SvgProfile />
          </button>
        </li>
        <li>
          <button>
            <SvgFavorite />
            <span className="badge">0</span>
          </button>
        </li>
        <li>
          <button onClick={() => setShowModal((prev) => !prev)}>
            <SvgCart />
            {/* <span className="badge">{count}</span> */}
            <span className="badge">{count}</span>
          </button>
        </li>
      </ul>
      <div
        className={showModal ? "basket-modal" : ""}
        onClick={() => setShowModal(false)}
      >
        {showModal && (
          <div
            className="basket-modal-overlay"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="basket-modal-header">
              <p>Shopping Cart</p>
              <button onClick={() => setShowModal(false)}>
                <SvgClose />
              </button>
            </div>
            {/*  */}

            {count === 0 ? (
              <div className="basket-modal-main-empty">
                <div className="basket-modal-main-empty-info">
                  <h3>Your cart is empty</h3>
                  <p>
                    No items in your cart. Go on, fill it up with something you
                    love!
                  </p>
                  <button>
                    <Link to={"/product"}>Start Shopping Now</Link>
                  </button>
                </div>
              </div>
            ) : (
              <div className="basket-modal-main-full">
                <div className="basket-modal-main-full-products">
                  {basket.map((shop) =>
                    shop.basket.map((product) => (
                      <div
                        className="basket-modal-main-full-products-item"
                        key={product.id}
                      >
                        <div className="basket-modal-products-item-img">
                          <img src={product.image} alt={product.title} />
                        </div>

                        <div className="basket-modal-products-item-info">
                          <p>shopID:{shop.shopID}</p>
                          <p>{product.title}</p>
                          <p>
                            {product.quantity} *{product.price} $
                          </p>
                        </div>

                        <div className="basket-modal-products-item-delete">
                          <button
                          // onClick={() => deleteProduct(shop.shopID, product)}
                          >
                            <SvgClose />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* {count === 0 ? (
              <div className="basket-modal-main-empty">
                <div className="basket-modal-main-empty-info">
                  <h3>Your cart is empty</h3>
                  <p>
                    No items in your cart. Go on, fill it up with something you
                    love!
                  </p>
                  <button>
                    <Link to={"/product"}>Start Shopping Now</Link>
                  </button>
                </div>
              </div>
            ) : (
              <div className="basket-modal-main-full">
                <div className="basket-modal-main-full-products">
                  {basket.map((shop) =>
                    shop.basket.map((product) => (
                      <div
                        className="basket-modal-main-full-products-item"
                        key={product.id}
                      >
                        <div className="basket-modal-products-item-img">
                          <img src={product.image} alt={product.title} />
                        </div>

                        <div className="basket-modal-products-item-info">
                          <p>shopID:{shop.shopID}</p>
                          <p>{product.title}</p>
                          <p>
                            {product.quantity} *{product.price} $
                          </p>
                        </div>

                        <div className="basket-modal-products-item-delete">
                          <button
                            onClick={() => deleteProduct(shop.shopID, product)}
                          >
                            <SvgClose />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )} */}

            <div className="basket-modal-footer">
              {/* <div className="basket-modal-footer-total">
                <p>Subtotal:</p>
                <p>{basketTotalPrice} $</p>
              </div>
              <div className="basket-modal-footer-btn">
                <button className="basket-modal-footer-btn-cart">
                  <Link to={"/cart"}>View cart</Link>
                </button>
                <button className="basket-modal-footer-btn-Checkout">
                  <Link to={"#"}>Checkout</Link>
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
