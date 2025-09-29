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
      // { title: "About", href: routeConstant.home.path },
      {
        title: "Terms & Conditions",
        href: routeConstant.termsAndConditions.path,
      },
      { title: "Privacy Policy", href: routeConstant.privacyPolicy.path },
      { title: "Contact", href: routeConstant.contact.path },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "UI/UX Design", href: routeConstant.services.design.path },
      {
        title: "Web Development",
        href: routeConstant.services.development.path,
      },
      {
        title: "Staff Augmentation",
        href: routeConstant.services.staffAugmentation.path,
      },
      {
        title: "Recruitment",
        href: routeConstant.services.recruitment.path,
      },
    ],
  },
  {
    title: "Contact",
    contactInfo: {
      email: "contact@devartventures.com",
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

const staffAugmentationFaqs = [
  {
    id: 1,
    title: "What is staff augmentation and how does it work?",
    content:
      "Staff augmentation is a flexible hiring strategy where you temporarily add skilled professionals to your existing team without the overhead of permanent hiring. We provide pre-vetted developers, designers, and engineers who integrate seamlessly with your team, work under your management, and can be scaled up or down based on project needs. It's like having an extended team without the recruitment, training, or long-term commitment costs.",
  },
  {
    id: 2,
    title: "How quickly can you deploy staff augmentation resources?",
    content:
      "We can deploy pre-vetted developers and designers within 72 hours of project approval. Our extensive talent pool and streamlined onboarding process ensure rapid deployment without compromising quality.",
  },
  {
    id: 3,
    title: "What happens if a team member doesn't meet our expectations?",
    content:
      "We offer a 100% satisfaction guarantee. If any team member doesn't meet your expectations within the first 2 weeks, we'll replace them at no additional cost. We're committed to ensuring your project success.",
  },
  {
    id: 4,
    title: "How do you ensure data security and confidentiality?",
    content:
      "All our team members sign comprehensive NDAs and work under strict security protocols. We use enterprise-grade security measures, secure communication channels, and comply with international data protection standards.",
  },
  {
    id: 5,
    title: "Can we scale the team up or down during the project?",
    content:
      "Absolutely! Our flexible engagement model allows you to scale your team up or down based on project requirements. You can add or remove team members with just 2 weeks' notice, ensuring optimal resource allocation.",
  },
  {
    id: 6,
    title: "What are the typical cost savings compared to local hiring?",
    content:
      "Our clients typically save 40-60% compared to local hiring when factoring in recruitment costs, benefits, overhead, and time-to-market. You get enterprise-level talent at competitive rates with zero long-term commitments.",
  },
  {
    id: 7,
    title: "Do you offer specialized roles like DevOps or AI engineers?",
    content:
      "Yes, we provide specialists across all technology domains including DevOps, AI/ML engineers, cloud architects, security experts, and more. Our talent pool covers 50+ technologies and frameworks to meet any project requirement.",
  },
];

export { staffAugmentationFaqs };
