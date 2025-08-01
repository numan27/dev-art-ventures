"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";

const servicesData = [
  {
    id: 1,
    icon: Images.DesignFeature1.src,
    title: "Design Strategy",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 2,
    icon: Images.DesignFeature2.src,
    title: "Branding",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 3,
    icon: Images.DesignFeature3.src,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 4,
    icon: Images.DesignService4.src,
    title: "Web Apps",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 5,
    icon: Images.DesignService5.src,
    title: "Mobile Apps",
    description:
      "Delivering websites that are fast, functional, and tailored to your business goals",
  },
  {
    id: 6,
    icon: Images.DesignService6.src,
    title: "Web Design",
    description:
      "Get access to a pool of amazing resources to help you get ahead with your tech challenges.",
  },
];

const Features = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <CustomSectionHeading
          badge="Services"
          heading="Services We Offer"
          description="From cutting-edge web development to creative design and strategic marketing, we provide tailored solutions to meet your unique needs"
          centered={true}
        />
        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 md:gap-4 gap-3 bg-transparent"
          )}
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={classNames(styles.cardItem, "flex flex-col")}
            >
              <img src={service.icon} alt={service.title} />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
