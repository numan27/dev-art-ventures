import { Images } from "assets";

export interface FeatureItem {
  id: string;
  position: string;
  icon_description: string;
  title: string;
  description: string;
  icon: any;
}

export const featuresData: FeatureItem[] = [
  {
    id: "feature-item-customer-centric",
    position: "top-middle",
    icon_description: "Yellow rocket ship",
    title: "Customer-Centric Approach",
    description:
      "Tailoring solutions to meet your unique business needs and exceed expectations.",
    icon: Images.FeaturesIcon2,
  },
  {
    id: "feature-item-responsive-work",
    position: "bottom-middle",
    icon_description: "Blue desktop monitor with window",
    title: "Responsive Work",
    description:
      "Ensuring seamless performance across all devices for optimal user experience.",
    icon: Images.FeaturesIcon5,
  },

  {
    id: "feature-item-timely-delivery",
    position: "bottom-left",
    icon_description: "Orange clock/timer",
    title: "Timely Delivery",
    description:
      "Meeting deadlines consistently without compromising on quality or precision.",
    icon: Images.FeaturesIcon4,
  },
  {
    id: "feature-item-transparent-communication",
    position: "bottom-right",
    icon_description: "White speech bubble/message icon",
    title: "Transparent Communication",
    description:
      "Clear, open lines of communication throughout every stage of your project.",
    icon: Images.FeaturesIcon6,
  },
  {
    id: "feature-item-proven-experience",
    position: "top-right",
    icon_description: "Pink calendar with '12'",
    title: "Proven Experience",
    description:
      "Years of successfully delivering impactful web solutions across diverse industries.",
    icon: Images.FeaturesIcon3,
  },
  {
    id: "feature-item-vetted-team",
    position: "top-left",
    icon_description: "Two green human figures",
    title: "Vetted Team",
    description:
      "Dedicated professionals with expertise in cutting-edge web design + development.",
    icon: Images.FeaturesIcon1,
  },
];
