import "./ProductCategory.css";
import cat1 from "./../../assets/pic/cat-1-1.jpg";
import cat2 from "./../../assets/pic/cat-2-1.jpg";
import cat3 from "./../../assets/pic/cat-3-1.jpg";
import cat4 from "./../../assets/pic/cat-4-1.jpg";

export const ProductCategory = () => {
  const Category = [
    {
      name: cat1,
      title: "Whiteware Ceramic",
    },
    {
      name: cat2,
      title: "Earthenware Ceramic",
    },
    {
      name: cat3,
      title: "Stoneware Ceramic",
    },
    {
      name: cat4,
      title: "Chinaware Ceramic",
    },
  ];
  return (
    <div className="product-category-wrapper container">
      {Category.map((item, i) => (
        <div key={i} className="product-category-item">
          <div className="product-category-item-data">
            <img src={item.name} alt={item.title} />
          </div>
          <button>{item.title}</button>
        </div>
      ))}
    </div>
  );
};
