import { SvgCart } from "../assets/icon/SvgCart";
import { SvgFavorite } from "../assets/icon/SvgFavorite";
import { SvgProfile } from "../assets/icon/SvgProfile";
import { SvgSearch } from "../assets/icon/SvgSearch";
import productPic from "./../assets/media/HomeMedia/ProductCategoryMedia/cat-1-1.jpg";

export const menuTop = [
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    title: "FAQs",
    link: "/faqs",
  },
];

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
    title: "Products",
    link: "/product",
    submenu: [
      {
        shopName: "Home Decor Shop",
        title: "Tableware",
        items: [
          { name: "Wouter Ligthart Ceramics Dinner Set", id: "2" },
          { name: "Gray Melamine Dinnerware Sets And Bowls Sets", id: "4" },
          { name: "Terry Planter Ash–Fego Home Living", id: "12" },
        ],
      },
      {
        shopName: "Living Style Shop",
        title: "Collections",
        items: [
          { name: "White & Black Glaze Cup And Dish Set", id: "8" },
          { name: "Small Wooden Bowl Set, Dip Sauce", id: "10" },
          { name: "Traditional Nude Somers Ceramic Vase", id: "11" },
          { name: "Terry Planter Ash–Fego Home Living", id: "12" },
        ],
      },

      {
        img: productPic,
      },
    ],
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];
export const headerDataIcon = [
  { name: "search", icon: <SvgSearch />, link: "#" },
  { name: "profile", icon: <SvgProfile />, link: "#" },
  { name: "favorite", icon: <SvgFavorite />, link: "#" },
  { name: "cart", icon: <SvgCart />, link: "#" },
];
