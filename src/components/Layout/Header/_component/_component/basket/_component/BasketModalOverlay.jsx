import { Link } from "react-router";
import { SvgClose } from "../../../../../../../assets/icon/SvgClose";
import { ProductItem } from "./ProductItem";
export const BasketModalOverlay = ({
  setshowBasketModal,
  count,
  deleteProduct,
  basket,
  basketTotalPrice,
}) => {
  return (
    <div className="basket-modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="basket-modal-header">
        <p>Shopping Cart</p>
        <button onClick={() => setshowBasketModal(false)}>
          <SvgClose />
        </button>
      </div>

      {count === 0 ? (
        <div className="basket-modal-main-empty">
          <div className="basket-modal-main-empty-info">
            <h3>Your cart is empty</h3>
            <p>No items in your cart. Go on, fill it up!</p>

            <button onClick={() => setshowBasketModal(false)}>
              <Link to={"/product"}>Start Shopping Now</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="basket-modal-main-full">
          <div className="basket-modal-main-full-products">
            {basket
              .filter((shop) => shop.basket.length > 0)
              .map((shop) => (
                <div key={shop.shopID} className="shop-group">
                  <h4>Shop: {shop.shopID}</h4>
                  <div className="shop-products">
                    {shop.basket.map((product) => (
                      <ProductItem
                        key={product.id}
                        product={product}
                        shopID={shop.shopID}
                        deleteProduct={deleteProduct}
                        setshowBasketModal={setshowBasketModal}
                      />
                    ))}
                  </div>

                  <div className="basket-modal-shop-actions">
                    <Link
                      to="/cart"
                      className="basket-modal-shop-actions-btn-cart"
                      onClick={() => setshowBasketModal(false)}
                    >
                      View Cart
                    </Link>
                    <Link
                      to={`/checkout/${shop.shopID}`}
                      className="basket-modal-shop-actions-btn-Checkout"
                      onClick={() => setshowBasketModal(false)}
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="basket-modal-footer">
        <div className="basket-modal-footer-total">
          <p>Subtotal:</p>
          <p>{basketTotalPrice} $</p>
        </div>
      </div>
    </div>
  );
};
