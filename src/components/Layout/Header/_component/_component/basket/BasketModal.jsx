import { BasketModalOverlay } from "./_component/BasketModalOverlay";
import "./BasketModal.css";
export const BasketModal = ({
  setshowBasketModal,
  count,
  totalPrice,
  basket,
  deleteProduct,
}) => {
  return (
    <div className="basket-modal" onClick={() => setshowBasketModal(false)}>
      <BasketModalOverlay
        setshowBasketModal={setshowBasketModal}
        count={count}
        deleteProduct={deleteProduct}
        basket={basket}
        basketTotalPrice={totalPrice}
      />
    </div>
  );
};
