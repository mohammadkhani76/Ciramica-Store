import { Link } from "react-router";
import "./Basket.css";
import payment from "./../../assets/media/FooterMedia/payment.png";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { SvgClose } from "../../assets/icon/SvgClose";
import proimg from "./../../assets/media/HomeMedia/ProductCategoryMedia/cat-1-1.jpg";
export const BasketView = () => {
  return (
    <>
      <div className="mainContainer container">
        <div className="cart-wrapper">
          <div className="cart-summery">
            <div className="table-wrapper">
              {" "}
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>ShpoID</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>ShpoID</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                    <td>Actions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <div className="cart-summery-products">
              <div className="cart-summery-products-items">
                <div className="cart-summery-products-items-close">
                  <button>
                    <SvgClose />
                  </button>
                <div className="cart-summery-products-items-picture">
                  <img src={proimg} alt="img" />
                </div>
              </div>
            </div> */}
          </div>
          <div className="cart-total">
            <h3>Cart totals</h3>
            <div className="cart-total-info">
              <p>Shipping</p>
              <form>
                <label>
                  <input type="radio" name="shipping" value="free" />
                  Free shipping
                </label>
                <label>
                  <input type="radio" name="shipping" value="local" />
                  Local pickup
                </label>
                <label>
                  <input type="radio" name="shipping" value="flat" />
                  Flat rate
                </label>
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  name="address"
                  rows={4}
                  style={{ width: "100%" }}
                  placeholder="Enter your address..."
                />
              </form>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>238$</p>
            </div>
            <button>
              <Link>Proceed to checkout</Link>
            </button>
            <div className="cart-total-footer">
              <p>Guaranteed Safe And Secure Checkout</p>
              <div>
                <img src={payment} alt="payment" />
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  );
};
