import { useEffect, useState } from "react";
import { SvgArrowUp } from "../../../assets/icon/SvgArrowUp";
import "./ScrollToUp.css";
export const ScrollToUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`scroll-to-top ${showButton ? "" : "hidden"}`}
        onClick={scrollToTop}
      >
        <SvgArrowUp />
      </div>
    </>
  );
};
