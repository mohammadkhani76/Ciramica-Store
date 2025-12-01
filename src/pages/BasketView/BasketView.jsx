import "./BasketView.css";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { SvgClose } from "../../assets/icon/SvgClose";
import { useBasketStore } from "../../Store/CartStore";
import { useBasket } from "../../customHook/useBasket";
import { useMemo } from "react";
import { Link } from "react-router";

export const BasketView = () => {
  const { basket } = useBasketStore();
  const { deleteProduct, addToCart, removeFromCart } = useBasket();

  // shops are empty
  const isCartEmpty = basket.every((shop) => shop.basket.length === 0);

  return (
    <>
      <div className="mainContainer container">
        <div className="cart-wrapper">
          {isCartEmpty ? (
            <p className="cart-wrapper-message">
              Your cart is currently empty.
            </p>
          ) : (
            <div className="cart-summery">
              {basket
                .filter((shop) => shop.basket.length > 0)
                .map((shop) => (
                  <div key={shop.shopID} className="shop-Wrapper">
                    <h2>shop:{shop.shopID}</h2>
                    <div className="table-wrapper">
                      <table>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {shop.basket.map((product) => (
                            <tr key={product.id}>
                              <td>
                                <div className="table-product-wrapper">
                                  <button
                                    onClick={() =>
                                      deleteProduct(shop.shopID, product)
                                    }
                                  >
                                    <SvgClose />
                                  </button>
                                  <div className="table-product-wrapper-media">
                                    <Link to={`/product/${product.id}`}>
                                      <img
                                        src={product.image}
                                        alt={product.title}
                                      />
                                    </Link>
                                  </div>

                                  <p>
                                    <Link to={`/product/${product.id}`}>
                                      {product.title}
                                    </Link>
                                  </p>
                                </div>
                              </td>
                              <td>{product.price} $</td>
                              <td>
                                <div className="table-product-cart">
                                  <button
                                    onClick={() =>
                                      removeFromCart(shop.shopID, {
                                        ...product,
                                        quantity: 1,
                                      })
                                    }
                                  >
                                    -
                                  </button>
                                  <span>{product.quantity}</span>
                                  <button
                                    onClick={() =>
                                      addToCart(shop.shopID, {
                                        ...product,
                                        quantity: 1,
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>{product.quantity * product.price} $</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="cart-summery-total">
                        <p>Shop Total:</p>
                        <p>
                          {shop.basket.reduce(
                            (sum, p) => sum + p.price * p.quantity,
                            0
                          )}
                          $
                        </p>
                      </div>
                      <div className="cart-summery-checkout">
                        <Link
                          to={`/checkout/${shop.shopID}`}
                          className="cart-checkout"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <Newsletter />
      </div>
    </>
  );
};
