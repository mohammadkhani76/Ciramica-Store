import { Link } from "react-router";
import { menuTop } from "../../../../constants/HeaderData";

export const HeaderTop = () => {
  return (
    <>
      <div className="header-top-inner">
        <p>
          Free Shipping World wide for all orders over $199
          <a href="#"> SHOP NOW</a>
        </p>
      </div>
      <nav>
        <HeaderTopMenu />
      </nav>
    </>
  );
};

export const HeaderTopMenu = ({ isMobile, setIsOpenMenu }) => {
  return (
    <>
      <ul className={isMobile ? "mobile-top-menu-second" : "header-top-menu"}>
        {menuTop.map((item, index) => (
          <li key={index}>
            <Link to={item.link} onClick={() => setIsOpenMenu(false)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
