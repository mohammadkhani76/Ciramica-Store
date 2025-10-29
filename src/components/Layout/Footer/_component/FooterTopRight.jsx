import { contactInfo } from "./../../../../constants/FooterData";

export const FooterTopRight = () => {
  return (
    <div className="footer-top-right">
      <h2>Contact Us</h2>
      <div className="footer-top-right-wrapper-info">
        {contactInfo.map((item, index) => (
          <div key={index} className="footer-top-right-info">
            <div>{item.icon}</div>
            <p>{item.link ? <a href={item.link}>{item.text}</a> : item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
