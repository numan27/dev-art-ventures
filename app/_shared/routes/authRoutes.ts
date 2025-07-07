import { routeConstant } from "./constants";

const commonRoutes: any = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
  },
  {
    path: routeConstant.privacyPolicy.path,
    title: routeConstant.privacyPolicy.title,
  },
  {
    path: routeConstant.termsAndConditions.path,
    title: routeConstant.termsAndConditions.title,
  },
];

const publicRoutes: any = [...commonRoutes];

const privateRoutes: any = [...commonRoutes];

export { privateRoutes, publicRoutes };
