import "./Discount.css";
export const Discount = () => {
  return (
    <div className="discount-wrapper container">
      <div className="discount-item">
        <p className="discount-item-right">
          Super discount for your <span>first purchase.</span>
        </p>
        <p className="discount-item-center">
          <span>
            <a href="#">FREE15FIRST</a>
          </span>
        </p>
        <p> Use discount code in the checkout!</p>
      </div>
    </div>
  );
};
