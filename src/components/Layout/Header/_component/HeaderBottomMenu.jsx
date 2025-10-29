import { Link } from "react-router";
import { headerData } from "../../../../constants/HeaderData";

export const HeaderBottomMenu = () => {
  return (
    <>
      <ul>
        {headerData.map((item, i) => (
          <li key={i}>
            {/* <a href={item.link}>{item.title}</a> */}
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
