import { Link } from "react-router";
import "./ProductNotFound.css";
export const ProductNotFound = () => {
  return (
    <div className="product-notfound-wrapper container mainContainer">
      <h1>404</h1>
      <h2>Product Not Found</h2>
      <p>The product you're looking for does not exist or has been removed.</p>
      <p>
        <Link to={"/"}>Go back home</Link>
      </p>
    </div>
  );
};
