import "./AboutUs.css";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import { Tab } from "./_component/Tab";
import { Info } from "./_component/Info";
import { Faq } from "../../components/Faq/Faq";

export const AboutUs = () => {
  return (
    <>
      <div className="mainContainer container">
        <div className="aboutus-wrapper">
          <Tab />
          <Info />
          <Faq />
        </div>
        <Newsletter />
      </div>
    </>
  );
};
