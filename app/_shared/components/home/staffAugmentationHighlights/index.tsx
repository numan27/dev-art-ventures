"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import CustomCard from "components/common/customCard";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import { routeConstant } from "routes/constants";
import NextLink from "next/link";

const StaffAugmentationHighlights = () => {
  const highlightsData = [
    {
      icon: Images.DevFeature2.src,
      title: "Pre-Vetted Talent",
      description: "Every candidate passes technical + soft-skills assessment",
    },
    {
      icon: Images.DevFeature5.src,
      title: "72-Hour Deployment",
      description: "Get matched in 24 hours, start working in 3 days",
    },
    {
      icon: Images.Dollar.src,
      title: "Flexible Scaling",
      description: "Scale up or down based on your project needs",
    },
    {
      icon: Images.DevFeature3.src,
      title: "Cost Effective",
      description: "Save 40-60% compared to local hiring costs",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer)}>
        <SectionHeadingCard
          badge="STAFF AUGMENTATION"
          heading={
            <>
              Scale Your Team with <br />
              Pre-Vetted Tech Talent
            </>
          }
          description="Access top-tier developers, designers, and engineers with proven expertise and immediate availability"
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.cardContainer,
            "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-5 gap-4 bg-transparent lg:mt-16 md:mt-12 sm:mt-8 mt-6"
          )}
        >
          {highlightsData.map((highlight, index) => (
            <CustomCard
              key={index}
              centered={true}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>

        <div
          className={classNames(
            styles.buttonContainer,
            "flex justify-center sm:mt-12 mt-10"
          )}
        >
          <NextLink href={routeConstant.services.staffAugmentation.path}>
            <CustomButton title="Hire in 72 Hours" />
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default StaffAugmentationHighlights;
