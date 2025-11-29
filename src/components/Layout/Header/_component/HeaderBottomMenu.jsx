import { Link } from "react-router";
import { headerData } from "../../../../constants/HeaderData";
import { useState } from "react";
import { SvgArrowDown } from "../../../../assets/icon/SvgArrowDown";

export const HeaderBottomMenu = ({ isMobile, setIsOpenMenu }) => {
  return (
    <>
      <ul className={isMobile ? "mobile-top-menu-first" : "header-buttom-menu"}>
        {headerData.map((item, i) => (
          <li key={i}>
            <Link to={item.link} onClick={() => setIsOpenMenu(false)}>
              {item.title}
            </Link>
            {item.submenu && (
              <span className="menu-arrow">
                <SvgArrowDown />
              </span>
            )}
            {/* mega menu */}
            {item.submenu && (
              <div className="mega-menu">
                {item.submenu.map((sub, j) => (
                  <div key={j} className="mega-submenu">
                    {/* title */}
                    {sub.title && <h4>{sub.title}</h4>}
                    {/* items */}
                    {sub.items && (
                      <div className="mega-submenu-items">
                        {sub.items.map((el, k) => (
                          <div key={k} className="mega-item">
                            <a href="#">{el}</a>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* image */}
                    {sub.img && (
                      <div className="mega-submenu-image">
                        <img src={sub.img} alt="menu" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
