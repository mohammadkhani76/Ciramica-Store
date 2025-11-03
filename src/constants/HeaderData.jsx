import { SvgCart } from "../assets/icon/SvgCart";
import { SvgFavorite } from "../assets/icon/SvgFavorite";
import { SvgProfile } from "../assets/icon/SvgProfile";
import { SvgSearch } from "../assets/icon/SvgSearch";
import productPic from "./../assets/media/HomeMedia/ProductCategoryMedia/cat-1-1.jpg";
import blogPic from "./../assets/media/HomeMedia/BlogMedia/blog-1.jpg";
import shipPic from "./../assets/media/HomeMedia/ProductCategoryMedia/cat-2-1.jpg";

export const menuTop = [
  {
    title: "About Us",
    link: "#",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "#",
  },
  {
    title: "FAQs",
    link: "#",
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
    submenu: [
      {
        title: "Categories",
        items: ["Tableware", "Cutlery", "Glassware", "Accessories"],
      },
      {
        title: "Collections",
        items: ["New Arrivals", "Best Sellers", "Handmade", "Sale"],
      },
      {
        title: "Brands",
        items: ["Brand A", "Brand B", "Brand C", "Brand D"],
      },
      {
        img: shipPic, // ستون عکس
      },
    ],
  },
  {
    title: "Products",
    link: "/product",
    submenu: [
      {
        title: "Tableware",
        items: ["Plates", "Cups", "Bowls"],
      },
      {
        title: "Collections",
        items: ["New Arrivals", "Handmade", "Best Sellers"],
      },
      {
        title: "Accessories",
        items: ["Spoons", "Forks", "Knives"],
      },
      {
        img: productPic,
      },
    ],
  },
  {
    title: "Blog",
    link: "/blog",
    submenu: [
      {
        title: "Latest Articles",
        items: ["Interior Design Tips", "DIY Projects", "Lifestyle Guides"],
      },
      {
        title: "Categories",
        items: ["Home Decor", "Kitchen", "Reviews", "Trends"],
      },
      {
        title: "Authors",
        items: ["John Doe", "Jane Smith", "Alex Johnson"],
      },
      {
        img: blogPic,
      },
    ],
  },
  {
    title: "Top deals",
    link: "#",
  },
  {
    title: "Elements",
    link: "#",
  },
];
export const headerDataIcon = [
  { name: "search", icon: <SvgSearch />, link: "#" },
  { name: "profile", icon: <SvgProfile />, link: "#" },
  { name: "favorite", icon: <SvgFavorite />, link: "#" },
  { name: "cart", icon: <SvgCart />, link: "#" },
];
