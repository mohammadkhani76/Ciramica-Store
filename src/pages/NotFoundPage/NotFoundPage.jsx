import { Link } from "react-router";
import "./NotFoundPage.css";
export const NotFoundPage = () => {
  return (
    <div className="notfound-wrapper container mainContainer">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        <Link to={"/"}>Go back home</Link>
      </p>
    </div>
  );
};
