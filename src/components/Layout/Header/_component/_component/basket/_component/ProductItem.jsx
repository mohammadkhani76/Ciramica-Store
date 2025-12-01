import { Link } from "react-router";
import { SvgClose } from "../../../../../../../assets/icon/SvgClose";

export const ProductItem = ({
  product,
  shopID,
  deleteProduct,
  setshowBasketModal,
}) => (
  <div className="basket-modal-main-full-products-item">
    <div className="basket-modal-products-item-img">
      <Link
        to={`/product/${product.id}`}
        onClick={() => setshowBasketModal(false)}
      >
        <img src={product.image} alt={product.title} />
      </Link>
    </div>

    <div className="basket-modal-products-item-info">
      <p>
        <Link
          to={`/product/${product.id}`}
          onClick={() => setshowBasketModal(false)}
        >
          {product.title}
        </Link>
      </p>
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
