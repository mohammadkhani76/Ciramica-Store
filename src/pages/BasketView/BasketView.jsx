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

  // بررسی اینکه آیا تمام فروشگاه‌ها خالی هستند
  const isCartEmpty = basket.every((shop) => shop.basket.length === 0);

  const { totalPrice } = useMemo(() => {
    return basket.reduce(
      (acc, shop) => {
        shop.basket.forEach((p) => {
          acc.totalPrice += p.quantity * p.price;
        });
        return acc;
      },
      { totalPrice: 0 }
    );
  }, [basket]);

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
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>ShpoID</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basket.map((shop) =>
                      shop.basket.map((product) => (
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
                                <img src={product.image} alt={product.title} />
                              </div>
                              <p>{product.title}</p>
                            </div>
                          </td>
                          <td>{shop.shopID}</td>
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
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cart-summery-total">
                <p>Subtotal:</p>
                <p>{totalPrice} $</p>
              </div>
              <div className="cart-summery-checkout">
                <Link to="/checkout" className="cart-checkout">
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
        <Newsletter />
      </div>
    </>
  );
};
