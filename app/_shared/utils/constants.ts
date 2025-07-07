import { Images } from "assets";
import { StaticImageData } from "next/image";
import { routeConstant } from "routes/constants";
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
