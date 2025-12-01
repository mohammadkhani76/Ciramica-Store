import { Newsletter } from "../../components/Newsletter/Newsletter";
import { ProductStore } from "../../components/ProductStore/ProductStore";
export const Products = () => {
  return (
    <div className="mainContainer container">
      <ProductStore />
      <Newsletter />
    </div>
  );
};
