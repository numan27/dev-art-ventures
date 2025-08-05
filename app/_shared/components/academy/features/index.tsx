"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import CustomCard from "components/common/customCard";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const featuresData = [
  {
    id: 1,
    icon: Images.DesignFeature1.src,
    title: "Learn From CEOs",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 2,
    icon: Images.DesignFeature2.src,
    title: "High-Level Insights",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 3,
    icon: Images.DesignFeature3.src,
    title: "Elite Networking",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 4,
    icon: Images.DesignFeature1.src,
    title: "Fast Implementation",
    description:
      "Crafting intuitive and visually stunning interfaces for an enhanced user experience",
  },
  {
    id: 5,
    icon: Images.DesignFeature2.src,
    title: "Beginner-Friendly",
    description:
      "Delivering websites that are fast, functional, and tailored to your business goals",
  },
  {
    id: 6,
    icon: Images.DesignFeature3.src,
    title: "Hands-On Projects",
    description:
      "Get access to a pool of amazing resources to help you get ahead with your tech challenges.",
  },
  {
    id: 7,
    icon: Images.DesignFeature1.src,
    title: "Career Support",
    description:
      "Get access to a pool of amazing resources to help you get ahead with your tech challenges.",
  },
  {
    id: 8,
    icon: Images.DesignFeature2.src,
    title: "Portfolio Building",
    description:
      "Get access to a pool of amazing resources to help you get ahead with your tech challenges.",
  },
  {
    id: 9,
    icon: Images.DesignFeature3.src,
    title: "Portfolio Building",
    description:
      "Get access to a pool of amazing resources to help you get ahead with your tech challenges.",
  },
];

const Features = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Features"
          heading="Why DevArt Academy?"
          description="See why we stand out with superior service, innovation, and client satisfaction benchmarks."
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 md:gap-4 gap-3  bg-transparent"
          )}
        >
          {featuresData.map((feature) => (
            <CustomCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
