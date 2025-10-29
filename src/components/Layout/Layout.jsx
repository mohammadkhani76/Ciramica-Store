import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import "./layout.css";
import { ScrollToUp } from "./ScrollToUp/ScrollToUp";
export const Layout = () => {
  return (
    <>
      <div className="layout ">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollToUp />
      </div>
    </>
  );
};
