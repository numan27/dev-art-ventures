import { routeConstant } from "./constants";

const commonRoutes: any = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
  },
  {
    path: routeConstant.services.design.path,
    title: routeConstant.services.design.title,
  },
  {
    path: routeConstant.privacyPolicy.path,
    title: routeConstant.privacyPolicy.title,
  },
  {
    path: routeConstant.termsAndConditions.path,
    title: routeConstant.termsAndConditions.title,
  },
  {
    path: routeConstant.about.path,
    title: routeConstant.about.title,
  },
  {
    path: routeConstant.contact.path,
    title: routeConstant.contact.title,
  },
];

const publicRoutes: any = [...commonRoutes];

const privateRoutes: any = [...commonRoutes];

export { privateRoutes, publicRoutes };
