import { useBasketStore } from "../../../../Store/CartStore";
import { SvgSearch } from "../../../../assets/icon/SvgSearch";
import { SvgProfile } from "../../../../assets/icon/SvgProfile";
import { SvgFavorite } from "../../../../assets/icon/SvgFavorite";
import { SvgCart } from "../../../../assets/icon/SvgCart";
import { useMemo, useState } from "react";
import { useBasket } from "../../../../customHook/useBasket";
import { BasketModal } from "./_component/basket/BasketModal";
import { SearchModal } from "./_component/search/SearchModal/";
import { useFavoriteStore } from "../../../../Store/FavoriteStore";
import { FavoriteModal } from "./_component/Favorite/FavoriteModal";
import { useFavorite } from "../../../../customHook/useFavorite";

export const HeaderBottomIcon = ({ isMobile }) => {
  const { basket } = useBasketStore();
  const { favorite } = useFavoriteStore();
  const { deleteProduct, addToCart } = useBasket();
  const { deleteFav } = useFavorite();

  const [showBasketModal, setshowBasketModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showFavModal, setShowFavModal] = useState(false);

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

  const totalCountFav = useMemo(() => {
    return favorite.reduce((acc, shop) => acc + shop.favorite.length, 0);
  }, [favorite]);

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
          <button onClick={() => setShowFavModal((prev) => !prev)}>
            <SvgFavorite />
            <span className="badge">{totalCountFav}</span>
          </button>
        </li>
        <li>
          <button onClick={() => setshowBasketModal((prev) => !prev)}>
            <SvgCart />
            <span className="badge">{count}</span>
          </button>
        </li>
      </ul>

      {/* Basket Modal */}
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

      {/* Search Modal */}
      {showSearchModal && (
        <SearchModal
          showSearchModal={showSearchModal}
          setShowSearchModal={setShowSearchModal}
        />
      )}

      {/* fav Modal */}
      {showFavModal && (
        <FavoriteModal
          showFavModal={showFavModal}
          setShowFavModal={setShowFavModal}
          totalCountFav={totalCountFav}
          favorite={favorite}
          deleteFav={deleteFav}
          addToCart={addToCart}
        />
      )}
    </>
  );
};
