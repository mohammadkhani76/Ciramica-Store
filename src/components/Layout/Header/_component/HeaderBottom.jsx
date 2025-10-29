import { SvgLogo } from "../../../../assets/icon/SvgLogo";
import { useEffect, useState } from "react";
import { HeaderBottomMenu } from "./HeaderBottomMenu";
import { HeaderBottomIcon } from "./HeaderBottomIcon";

export const HeaderBottom = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 43) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="header-bottom">
        <div
          className={`header-bottom-details container ${
            isSticky ? "header-bottom-details-sticky" : ""
          } `}
        >
          <div>
            <SvgLogo />
          </div>

          <nav className="header-bottom-details-menu">
            <HeaderBottomMenu />
          </nav>

          <nav className="header-bottom-details-icon">
            <HeaderBottomIcon />
          </nav>
        </div>
      </div>
    </>
  );
};
