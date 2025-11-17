import { useBasketStore } from "../../../../Store/CartStore";
import { SvgSearch } from "../../../../assets/icon/SvgSearch";
import { SvgProfile } from "../../../../assets/icon/SvgProfile";
import { SvgFavorite } from "../../../../assets/icon/SvgFavorite";
import { SvgCart } from "../../../../assets/icon/SvgCart";
import { useState } from "react";

export const HeaderBottomIcon = ({ isMobile }) => {
  const count = useBasketStore((state) => state.basketCount());
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
            <span className="badge">{count}</span>
          </button>
        </li>
        <li>
          <button onClick={() => setShowModal((prev) => !prev)}>
            <SvgCart />
            <span className="badge">{count}</span>
          </button>
        </li>
      </ul>
      <div
        className={showModal ? "basket_modal" : ""}
        onClick={() => setShowModal(false)}
      >
        {showModal && (
          <div
            className="basket_modal_overlay"
            onClick={(e) => e.stopPropagation()}
          >
            <p>سبد خرید شما</p>
          </div>
        )}
      </div>
    </>
  );
};
