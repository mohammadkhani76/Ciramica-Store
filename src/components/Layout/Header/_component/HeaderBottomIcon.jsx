import { useBasketStore } from "../../../../Store/CartStore";
import { SvgSearch } from "../../../../assets/icon/SvgSearch";
import { SvgProfile } from "../../../../assets/icon/SvgProfile";
import { SvgFavorite } from "../../../../assets/icon/SvgFavorite";
import { SvgCart } from "../../../../assets/icon/SvgCart";
import { SvgClose } from "../../../../assets/icon/SvgClose";
import { useMemo, useState } from "react";
import { useBasket } from "../../../../customHook/useBasket";
import { SearchModal } from "./_component/search/searchModal";
import { BasketModal } from "./_component/basket/BasketModal";

export const HeaderBottomIcon = ({ isMobile }) => {
  const { basket } = useBasketStore();
  const { deleteProduct } = useBasket();
  const [showBasketModal, setshowBasketModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

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
          <button onClick={() => setShowSearchModal((prev) => !prev)}>
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
          <button onClick={() => setshowBasketModal((prev) => !prev)}>
            <SvgCart />
            <span className="badge">{count}</span>
          </button>
        </li>
      </ul>

      {showBasketModal && (
        <BasketModal
          showBasketModal={showBasketModal}
          setshowBasketModal={setshowBasketModal}
          count={count}
          totalPrice={totalPrice}
          deleteProduct={deleteProduct}
          basket={basket}
        />
      )}

      {showSearchModal && (
        <SearchModal
          showSearchModal={showSearchModal}
          setShowSearchModal={setShowSearchModal}
        />
      )}
    </>
  );
};
