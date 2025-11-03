import appStore from "./../../../../assets/media/FooterMedia/app-store.png";
import googlePlay from "./../../../../assets/media/FooterMedia/google-play.png";

export const FooterTopLeft = () => (
  <div className="footer-top-left">
    <h2>About Our Store</h2>
    <p>
      welcome to our store, where we pride ourselves on provuding exceptional
      products and unparalleled customer service our store style, and innovation
    </p>
    <div className="footer-top-left-icon">
      <div>
        <img src={appStore} alt="appStore" />
      </div>
      <div>
        <img src={googlePlay} alt="googlePlay" />
      </div>
    </div>
  </div>
);
