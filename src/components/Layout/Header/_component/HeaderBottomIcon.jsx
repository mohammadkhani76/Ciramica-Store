import { useBasketStore } from "../../../../Store/CartStore";
import { SvgSearch } from "../../../../assets/icon/SvgSearch";
import { SvgProfile } from "../../../../assets/icon/SvgProfile";
import { SvgFavorite } from "../../../../assets/icon/SvgFavorite";
import { SvgCart } from "../../../../assets/icon/SvgCart";
import { SvgClose } from "../../../../assets/icon/SvgClose";
import { useMemo, useState } from "react";
import { Link } from "react-router";
import { useBasket } from "../../../../customHook/useBasket";

export const HeaderBottomIcon = ({ isMobile }) => {
  const { basket } = useBasketStore();
  const { deleteProduct } = useBasket();
  const [showModal, setShowModal] = useState(false);

  const { count, totalPrice } = useMemo(() => {
    return basket.reduce(
      (acc, shop) => {
        shop.basket.forEach((p) => {
          acc.count += p.quantity;
          acc.totalPrice += p.quantity * p.price;
        });
        return acc;
      },
      { count: 0, totalPrice: 0 }
    );
  }, [basket]);

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
          <button onClick={() => setShowModal((p) => !p)}>
            <SvgCart />
            <span className="badge">{count}</span>
          </button>
        </li>
      </ul>

      {showModal && (
        <div className="basket-modal" onClick={() => setShowModal(false)}>
          <ModalOverlay
            setShowModal={setShowModal}
            count={count}
            deleteProduct={deleteProduct}
            basket={basket}
            basketTotalPrice={totalPrice}
          />
        </div>
      )}
    </>
  );
};

export const ModalOverlay = ({
  setShowModal,
  count,
  deleteProduct,
  basket,
  basketTotalPrice,
}) => {
  return (
    <div className="basket-modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="basket-modal-header">
        <p>Shopping Cart</p>
        <button onClick={() => setShowModal(false)}>
          <SvgClose />
        </button>
      </div>

      {count === 0 ? (
        <div className="basket-modal-main-empty">
          <div className="basket-modal-main-empty-info">
            <h3>Your cart is empty</h3>
            <p>No items in your cart. Go on, fill it up!</p>

            <button onClick={() => setShowModal(false)}>
              <Link to={"/product"}>Start Shopping Now</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="basket-modal-main-full">
          <div className="basket-modal-main-full-products">
            {basket.map((shop) =>
              shop.basket.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  shopID={shop.shopID}
                  deleteProduct={deleteProduct}
                />
              ))
            )}
          </div>
        </div>
      )}

      <div className="basket-modal-footer">
        <div className="basket-modal-footer-total">
          <p>Subtotal:</p>
          <p>{basketTotalPrice} $</p>
        </div>

        <div className="basket-modal-footer-btn">
          <Link
            to="/cart"
            className="basket-modal-footer-btn-cart"
            onClick={() => setShowModal(false)}
          >
            View cart
          </Link>
          <Link to="#" className="basket-modal-footer-btn-Checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductItem = ({ product, shopID, deleteProduct }) => (
  <div className="basket-modal-main-full-products-item">
    <div className="basket-modal-products-item-img">
      <img src={product.image} alt={product.title} />
    </div>

    <div className="basket-modal-products-item-info">
      <p>shopID: {shopID}</p>
      <p>{product.title}</p>
      <p>
        {product.quantity} × {product.price} $
      </p>
    </div>

    <div className="basket-modal-products-item-delete">
      <button onClick={() => deleteProduct(shopID, product)}>
        <SvgClose />
      </button>
    </div>
  </div>
);
