import { Link } from "react-router";
import { footerLink } from "./../../../../constants/FooterData";
export const FooterTopCenter = () => {
  return (
    <div className="footer-top-center">
      {footerLink.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <nav>
            <ul>
              {section.list.map((item, i) => (
                <li key={i}>
                  {/* <a href="#">{item.name}</a> */}
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </div>
  );
};
