import "./../layout.css";
import { HeaderBottom } from "./_component/HeaderBottom";
import { HeaderTop } from "./_component/HeaderTop";

export const Header = () => {
  return (
    <>
      <header className="header-top container">
        <HeaderTop />
      </header>
      <HeaderBottom />
    </>
  );
};
