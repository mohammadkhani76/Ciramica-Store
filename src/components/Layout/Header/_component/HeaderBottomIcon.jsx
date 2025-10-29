import { Link } from "react-router";
import { headerDataIcon } from "../../../../constants/HeaderData";
import { useCartStore } from "../../../../Store/CartStore";
import { useFavoriteStore } from "../../../../Store/FavoriteStore";

export const HeaderBottomIcon = () => {
  const cartCount = useCartStore((state) => state.cartCount);
  const favoriteCount = useFavoriteStore((state) => state.favoriteCount);

  return (
    <>
      <ul>
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
