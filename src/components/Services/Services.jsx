import { SvgMoneyBack } from "../../assets/icon/SvgMoneyBack";
import { SvgShiping } from "../../assets/icon/SvgShiping";
import { SvgStoreSearch } from "../../assets/icon/SvgStoreSearch";
import { SvgSupports } from "../../assets/icon/SvgSupports";
import "./Services.css";
export const Services = () => {
  const servicesData = [
    {
      icon: <SvgShiping />,
      title: "Fast Free Shipping",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      icon: <SvgSupports />,
      title: "24/7 Supports",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      icon: <SvgMoneyBack />,
      title: "Easy Money Back",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      icon: <SvgStoreSearch />,
      title: "Store Search",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
  ];
  return (
    <div className="services-wrapper container">
      {servicesData.map((item, i) => (
        <div key={i} className="services-item">
          <div className="services-item-icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
