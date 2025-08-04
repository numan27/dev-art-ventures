"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomCard from "components/common/customCard";

const Highlights = () => {
  const cardData = [
    {
      icon: Images.DesignProcess1.src,
      title: "Understanding Goals",
      description: "Every candidate passes technical + soft-skills",
    },
    {
      icon: Images.DevFeature2.src,
      title: "User Centric Approach",
      description: "Every candidate passes technical + soft-skills",
    },
    {
      icon: Images.DevFeature3.src,
      title: "Future Proof Development",
      description: "Every candidate passes technical + soft-skills",
    },
    {
      icon: Images.DevFeature4.src,
      title: "Collaborative Workflow",
      description: "Every candidate passes technical + soft-skills",
    },
    {
      icon: Images.DevFeature5.src,
      title: "Rigorous QA Process",
      description: "Get matched in 24 hours, hire in 3 days.",
    },
    {
      icon: Images.DevFeature6.src,
      title: "On Going Maintenance",
      description: "Transparent pricing—only pay when you hire.",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Why Us"
          heading="How We Deliver Excellence"
          description="Take The Route That is Easy For You & Get Ahead In Your Design Skills"
          centered={true}
          maxParticles={300}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 md:gap-4 gap-3  bg-transparent"
          )}
        >
          {cardData.map((card, index) => (
            <CustomCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              centered={true}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <CustomButton title="Get Started Today" />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
