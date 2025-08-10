import { routeConstant } from "routes/constants";

let nav_items = [
  {
    label: "Home",
    path: routeConstant.home.path,
  },
  {
    label: "Why Us",
    path: routeConstant.whyUs.path,
  },
  {
    label: "Ventures",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Design",
        description: "UI/UX and Graphic Design",
        path: routeConstant.ventures.design.path,
      },
      {
        title: "Development",
        description: "Web & App Development",
        path: routeConstant.ventures.development.path,
      },
      // {
      //   title: "DevArtAcademy",
      //   description: "Learn Design & Development",
      //   path: routeConstant.ventures.academy.path,
      // },
      {
        title: "Staff Augmentation",
        description: "Hire Best Talent",
        path: routeConstant.ventures.staffAugmentation.path,
      },
    ],
  },
  {
    label: "About",
    path: routeConstant.about.path,
  },
];

export { nav_items };
