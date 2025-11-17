import { SvgLogo } from "../../../../assets/icon/SvgLogo";
import { useEffect, useState } from "react";
import { HeaderBottomMenu } from "./HeaderBottomMenu";
import { HeaderBottomIcon } from "./HeaderBottomIcon";
import { SvgToggleMenu } from "../../../../assets/icon/SvgToggleMenu";
import { SvgClose } from "../../../../assets/icon/SvgClose";
import { HeaderTopMenu } from "./HeaderTop";

export const HeaderBottom = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isopenMenu, setIsOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpenMenu(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <div className="header-bottom-details-logo">
            <SvgToggleMenu
              className="toggle-menu-icon"
              onClick={() => setIsOpenMenu((prev) => !prev)}
            />
            <SvgLogo />
          </div>
          {/*  فقط در حالت موبایل و باز بودن منو نمایش داده شود */}
          {isMobile && isopenMenu && (
            <div className="modal" onClick={() => setIsOpenMenu(false)}>
              <div
                className="modal-overlay"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="close-menu-wrapper">
                  <div className="close-menu-item">
                    <SvgClose
                      className="close-menu-icon"
                      onClick={() => setIsOpenMenu(false)}
                    />
                  </div>
                </div>
                <div className="mobile-top-menu-wrapper">
                  <HeaderBottomMenu isMobile={isMobile} />
                  <HeaderTopMenu isMobile={isMobile} />
                  <HeaderBottomIcon isMobile={isMobile} />
                </div>
              </div>
            </div>
          )}
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
