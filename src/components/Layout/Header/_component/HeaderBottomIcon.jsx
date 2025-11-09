import { Link } from "react-router";
import { headerDataIcon } from "../../../../constants/HeaderData";
import { useCartStore } from "../../../../Store/CartStore";
import { useFavoriteStore } from "../../../../Store/FavoriteStore";

export const HeaderBottomIcon = ({ isMobile }) => {
  const cart = useCartStore((state) => state.cart);
  const favoriteCount = useFavoriteStore((state) => state.favoriteCount);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <ul
        className={
          isMobile ? "mobile-bottom-menu-icon" : "header-bottom-menu-icon"
        }
      >
        {headerDataIcon.map((item, i) => (
          <li key={i}>
            <Link to={item.link}>
              {item.icon}
              {item.name === "cart" && cartCount >= 0 && (
                <span className="badge">{cartCount}</span>
              )}
              {item.name === "favorite" && favoriteCount >= 0 && (
                <span className="badge">{favoriteCount}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
