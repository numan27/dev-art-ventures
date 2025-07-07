import { routeConstant } from "./constants";

const commonRoutes: any = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
  },
  {
    path: routeConstant.aboutUs.path,
    title: routeConstant.aboutUs.title,
  },
  {
    path: routeConstant.services.path,
    title: routeConstant.services.title,
  },
  {
    path: routeConstant.contact.path,
    title: routeConstant.contact.title,
  },
  {
    path: routeConstant.careers.path,
    title: routeConstant.careers.title,
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
    path: routeConstant.cookiePolicy.path,
    title: routeConstant.cookiePolicy.title,
  },
  {
    path: routeConstant.portfolio.path,
    title: routeConstant.portfolio.title,
  },
];

const publicRoutes: any = [...commonRoutes];

const privateRoutes: any = [...commonRoutes];

export { privateRoutes, publicRoutes };
