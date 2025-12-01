import { Link } from "react-router";
import { headerData } from "../../../../constants/HeaderData";
import { SvgArrowDown } from "../../../../assets/icon/SvgArrowDown";
import { useState } from "react";

export const HeaderBottomMenu = ({ isMobile, setIsOpenMenu }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSubmenu = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const handleLinkClick = () => {
    if (isMobile) setIsOpenMenu(false);
  };

  const handleArrowClick = (item, i) => {
    if (isMobile && item.submenu) toggleSubmenu(i);
  };

  return (
    <ul className={isMobile ? "mobile-top-menu-first" : "header-buttom-menu"}>
      {headerData.map((item, i) => (
        <li key={i}>
          <div className="menu-item-wrapper">
            <Link to={item.link} onClick={handleLinkClick}>
              {item.title}
            </Link>

            {item.submenu && (
              <span
                className="menu-arrow"
                onClick={() => handleArrowClick(item, i)}
              >
                <SvgArrowDown />
              </span>
            )}
          </div>

          {/* DESKTOP mega menu */}
          {!isMobile && item.submenu && <DesktopMenu item={item} />}

          {/* MOBILE submenu */}
          {isMobile && item.submenu && openIndex === i && (
            <MobileMenu item={item} />
          )}
        </li>
      ))}
    </ul>
  );
};

/* ----------------------- DESKTOP SUBMENU ----------------------- */

export const DesktopMenu = ({ item }) => {
  return (
    <div className="mega-menu">
      {item.submenu.map((sub, j) => (
        <div key={j} className="mega-submenu">
          {sub.shopName && <h2>{sub.shopName}</h2>}
          {sub.title && <h4>{sub.title}</h4>}

          {sub.items && (
            <div className="mega-submenu-items">
              {sub.items.map((el, k) => (
                <div key={k} className="mega-item">
                  <a href={`/product/${el.id}`}>{el.name}</a>
                </div>
              ))}
            </div>
          )}

          {sub.img && (
            <div className="mega-submenu-image">
              <img src={sub.img} alt={sub.title || "menu"} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* ----------------------- MOBILE SUBMENU ------------------------ */

export const MobileMenu = ({ item }) => {
  return (
    <ul className="mobile-submenu">
      {item.submenu.map((sub, j) => (
        <li key={j}>
          {sub.shopName && <h2>{sub.shopName}</h2>}
          {sub.title && <h4>{sub.title}</h4>}

          {sub.items &&
            sub.items.map((el, k) => (
              <div key={k} className="mobile-submenu-item">
                <a href={`/product/${el.id}`}>{el.name}</a>
              </div>
            ))}

          {sub.img && (
            <div className="mobile-submenu-image">
              <img src={sub.img} alt={sub.title || "menu"} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
