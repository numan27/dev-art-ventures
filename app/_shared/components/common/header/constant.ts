import { routeConstant } from "routes/constants";

let nav_items = [
  {
    label: "Home",
    path: routeConstant.home.path,
  },
  {
    label: "Services",
    hasDropdown: true,
    dropdownItems: [
      {
        title: "Design",
        description: "UI/UX and Graphic Design",
        path: routeConstant.services.design.path,
      },
      {
        title: "Development",
        description: "Web & App Development",
        path: routeConstant.services.development.path,
      },
      // {
      //   title: "DevArtAcademy",
      //   description: "Learn Design & Development",
      //   path: routeConstant.ventures.academy.path,
      // },
      {
        title: "Staff Augmentation",
        description: "Hire Best Talent",
        path: routeConstant.services.staffAugmentation.path,
      },
      {
        title: "Recruitment Services",
        description: "Talent Acquisition Solutions",
        path: routeConstant.services.recruitment.path,
      },
    ],
  },
  // {
  //   label: "About",
  //   path: routeConstant.about.path,
  // },
  {
    label: "Contact",
    path: routeConstant.contact.path,
  },
];

export { nav_items };
