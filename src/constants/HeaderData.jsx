import { SvgCart } from "../assets/icon/SvgCart";
import { SvgFavorite } from "../assets/icon/SvgFavorite";
import { SvgProfile } from "../assets/icon/SvgProfile";
import { SvgSearch } from "../assets/icon/SvgSearch";

export const menuTop = ["About Us", "Blog", "Contact Us", "FAQs"];

export const headerData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "CategoriesSALE",
    link: "#",
  },
  {
    title: "ProductsHOT",
    link: "#",
  },
  {
    title: "Top deals",
    link: "#",
  },
  {
    title: "Elements ",
    link: "#",
  },
];
export const headerDataIcon = [
  { name: "search", icon: <SvgSearch />, link: "#" },
  { name: "profile", icon: <SvgProfile />, link: "#" },
  { name: "favorite", icon: <SvgFavorite />, link: "#" },
  { name: "cart", icon: <SvgCart />, link: "#" },
];
