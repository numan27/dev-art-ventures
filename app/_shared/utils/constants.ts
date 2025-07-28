import { Images } from "assets";
import { StaticImageData } from "next/image";
import { routeConstant } from "routes/constants";

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links?: FooterLink[];
  contactInfo?: {
    email?: string;
    address?: string[];
  };
}

export const footerLinks: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { title: "About", href: routeConstant.home.path },
      {
        title: "Terms & Conditions",
        href: routeConstant.termsAndConditions.path,
      },
      { title: "Privacy Policy", href: routeConstant.privacyPolicy.path },
      { title: "Disclaimer", href: "" },
      { title: "Contact", href: "" },
    ],
  },
  {
    title: "Ventures",
    links: [
      { title: "UI/UX Design", href: "" },
      { title: "Web Development", href: "" },
      { title: "Recruitment", href: "" },
      { title: "DevArt Academy", href: "" },
    ],
  },
  {
    title: "Contact",
    contactInfo: {
      email: "hello@devartventures.com",
      address: ["3, Block B1 PGECHS, Lahore,", "Pakistan"],
    },
  },
];
// import { routeConstant, type RouteConstant } from "../../../routes/constants";

export type Product = {
  id: string;
  name: string;
  price: string;
  color: string;
  colorsAvailable: string;
  image: StaticImageData;
  hoverImage: StaticImageData;
  images: StaticImageData[];
  category: "shirts" | "trousers" | "jeans";
  isNew?: boolean;
  description: string;
  sizes: string[];
  materials: string;
  fit: string;
  productCode: string;
  modelInfo: string;
  outOfStock?: boolean;
  discount?: number;
};

// const headerLinks: SideBarItemPathType[] = [
//   {
//     path: "",
//     title: routeConstant.shop.title,
//     children: [
//       {
//         path: routeConstant.collections.path + "?shirts",
//         title: routeConstant.shirts.title,
//       },
//       {
//         path: routeConstant.collections.path + "?trousers",
//         title: routeConstant.trousers.title,
//       },
//       {
//         path: routeConstant.collections.path + "?jeans",
//         title: routeConstant.jeans.title,
//       },
//       {
//         path: routeConstant.collections.path,
//         title: routeConstant.collections.title,
//       },
//     ],
//   },
//   {
//     path: "",
//     title: routeConstant.brand.title,
//     children: [
//       {
//         path: routeConstant.lookbook.path,
//         title: routeConstant.lookbook.title,
//       },
//       {
//         path: routeConstant.about.path,
//         title: routeConstant.about.title,
//       },
//     ],
//   },
//   {
//     path: "",
//     title: routeConstant.info.title,
//     children: [
//       {
//         path: routeConstant.contact.path,
//         title: routeConstant.contact.title,
//       },
//       {
//         path: routeConstant.sizeGuide.path,
//         title: routeConstant.sizeGuide.title,
//       },
//       {
//         path: routeConstant.termsAndConditions.path,
//         title: routeConstant.termsAndConditions.title,
//       },
//       {
//         path: routeConstant.shippingAndReturns.path,
//         title: routeConstant.shippingAndReturns.title,
//       },
//     ],
//   },
// ];

export {};
