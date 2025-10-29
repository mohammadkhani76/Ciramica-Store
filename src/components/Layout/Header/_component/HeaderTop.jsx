import { menuTop } from "../../../../constants/HeaderData";

export const HeaderTop = () => {
  return (
    <>
      <div className="header-top-inner">
        Free Shipping World wide for all orders over $199
        <a href="#"> SHOP NOW</a>
      </div>
      <nav>
        <HeaderTopMenu />
      </nav>
    </>
  );
};

export const HeaderTopMenu = () => {
  return (
    <>
      <ul className="header-top-menu">
        {menuTop.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
