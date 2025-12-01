// import "./../layout.css";
import "./Footer.css";
import { FooterTopLeft } from "./_component/FooterTopLeft";
import { FooterTopCenter } from "./_component/FooterTopCenter";
import { FooterTopRight } from "./_component/FooterTopRight";
import { FooterBottom } from "./_component/FooterBottom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top container">
          <FooterTopLeft />
          <FooterTopCenter />
          <FooterTopRight />
        </div>
        <FooterBottom />
      </footer>
    </>
  );
};
