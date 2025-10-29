import { SvgEmail } from "../assets/icon/SvgEmail";
import { SvgFacebook } from "../assets/icon/SvgFacebook";
import { SvgGoogle } from "../assets/icon/SvgGoogle";
import { SvgInstagram } from "../assets/icon/SvgInstagram";
import { SvgLocation } from "../assets/icon/SvgLocation";
import { SvgMobilePhone } from "../assets/icon/SvgMobilePhone";
import { SvgPhone } from "../assets/icon/SvgPhone";
import { SvgPinterest } from "../assets/icon/SvgPinterest";
import { SvgX } from "../assets/icon/SvgX";

export const footerSocial = [
  {
    icon: <SvgFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <SvgX />,
    link: "https://x.com/",
  },
  {
    icon: <SvgInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <SvgPinterest />,
    link: "https://www.pinterest.com/",
  },
  {
    icon: <SvgGoogle />,
    link: "https://www.google.com",
  },
];

export const footerLink = [
  {
    title: "Quick Links",
    list: [
      { name: "prices drop", url: "/coming-soon" },
      { name: " new products", url: "/coming-soon" },
      { name: "best sales ", url: "/coming-soon" },
      { name: "contact us ", url: "/coming-soon" },
      { name: "sitemap ", url: "/coming-soon" },
      { name: "stores ", url: "/coming-soon" },
    ],
  },
  {
    title: "Services",
    list: [
      { name: "delivery", url: "/coming-soon" },
      { name: "legal notice", url: "/coming-soon" },
      { name: "terms and conditions", url: "/coming-soon" },
      { name: "about us", url: "/coming-soon" },
      { name: "secure payment", url: "/coming-soon" },
      { name: "locality", url: "/coming-soon" },
    ],
  },
  {
    title: "Your Account",
    list: [
      { name: "delivery", url: "/coming-soon" },
      { name: "legal notice", url: "/coming-soon" },
      { name: "terms and conditions", url: "/coming-soon" },
      { name: "about us", url: "/coming-soon" },
      { name: "secure payment", url: "/coming-soon" },
      { name: "my account", url: "/coming-soon" },
    ],
  },
];

export const contactInfo = [
  {
    icon: <SvgLocation />,
    text: "60 29th Street San Francisco, 507-Union Trade Center, United States America - 94110",
  },
  {
    icon: <SvgPhone />,
    text: "(+91)-0123-456-789",
    link: "tel:+910123456789",
  },
  {
    icon: <SvgMobilePhone />,
    text: "(+91) 9876-543-210",
    link: "tel:+919876543210",
  },
  {
    icon: <SvgEmail />,
    text: "demo@example.com",
    link: "mailto:demo@example.com",
  },
];
