"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomCard from "components/common/customCard";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const Highlights = () => {
  const cardsData = [
    {
      icon: Images.DevFeature2.src,
      title: "Pre-Vetted Talent",
      description: "Every candidate passes technical + soft-skills assessment",
    },
    {
      icon: Images.DevFeature5.src,
      title: "Immediate Availability",
      description: "Get matched in 24 hours, start working in 3 days.",
    },
    {
      icon: Images.Dollar.src,
      title: "Flexible Engagement",
      description: "Scale up or down based on your project needs.",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="WHY US"
          heading={
            <>
              Why Choose DevArt <br /> Staff Augmentation?
            </>
          }
          description="Access top-tier tech talent with proven expertise and immediate availability"
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
          {cardsData.map((card, index) => (
            <CustomCard
              key={index}
              centered={true}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
