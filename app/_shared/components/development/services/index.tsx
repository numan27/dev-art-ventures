"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomCard from "components/common/customCard";

const servicesData = [
  {
    id: 1,
    icon: Images.DesignFeature3.src,
    title: "Frontend Development",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 2,
    icon: Images.DevFeature3.src,
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs for scalable solutions",
  },
  {
    id: 3,
    icon: Images.DesignService6.src,
    title: "E-Commerce Development",
    description:
      "Creating powerful online stores with seamless shopping experiences",
  },
  {
    id: 4,
    icon: Images.DevFeature6.src,
    title: "Maintenance & Support",
    description:
      "Providing ongoing technical support and maintenance for your applications",
  },
  {
    id: 5,
    icon: Images.DevService5.src,
    title: "API Development",
    description:
      "Delivering websites that are fast, functional, and tailored to your business goals",
  },
  {
    id: 6,
    icon: Images.DesignService4.src,
    title: "MVP Development",
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
            <CustomCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              button={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
