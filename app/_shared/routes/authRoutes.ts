import { routeConstant } from "./constants";

const commonRoutes: any = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
  },
  {
    path: routeConstant.ventures.design.path,
    title: routeConstant.ventures.design.title,
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
    path: routeConstant.whyUs.path,
    title: routeConstant.whyUs.title,
  },
];

const publicRoutes: any = [...commonRoutes];

const privateRoutes: any = [...commonRoutes];

export { privateRoutes, publicRoutes };
