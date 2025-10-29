import payment from "./../../../../assets/pic/payment.png";
import { footerSocial } from "./../../../../constants/FooterData";

export const FooterBottom = () => {
  return (
    <div className="footer-bottom container">
      <div className="footer-bottom-left">
        {footerSocial.map((item, index) => (
          <div className="footer-bottom-left-social-icon" key={index}>
            <a href={item.link}> {item.icon}</a>
          </div>
        ))}
      </div>
      <div className="footer-bottom-center">
        <p>© 2025 Ciramica Demo - WordPress Theme by Avanam</p>
      </div>
      <div className="footer-bottom-right">
        <img src={payment} alt="payment" />
      </div>
    </div>
  );
};
