"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import CustomButton from "components/common/customButton";
import CustomCard from "components/common/customCard";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const featuresData = [
  {
    id: 1,
    title: "Define Your Needs",
    description: "Tell us about your project requirements and team needs.",
  },
  {
    id: 2,
    title: "Get Matched",
    description: "Receive pre-vetted candidates within 24 hours.",
  },
  {
    id: 3,
    title: "Start Immediately",
    description: "Onboard talent and begin your project right away.",
  },
];

const Features = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="How it works"
          heading={
            <>
              3 Simple Steps to Scale <br />
              Your Team
            </>
          }
          description="Streamlined process to get you the right talent when you need it"
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div
          className={classNames(
            styles.cardContainer,
            "flex flex-col sm:flex-row md:gap-0 gap-4 items-center justify-center bg-transparent"
          )}
        >
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className="flex items-center sm:w-auto w-full"
            >
              <div
                className={classNames(
                  styles.cardItem,
                  "flex flex-col items-center"
                )}
              >
                <div className={styles.count}>
                  <span>{feature.id}</span>
                </div>
                <h4 className={styles.cardTitle}>{feature.title}</h4>
                <p className={classNames(styles.cardDescription)}>
                  {feature.description}
                </p>
              </div>
              {index < featuresData.length - 1 && (
                <div className="hidden md:flex lg:mx-4 mx-2 items-center justify-center">
                  <Icons.JoinArrow />
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className={classNames(
            styles.buttonContainer,
            "flex justify-center lg:mt-16 md:mt-12 mt-8"
          )}
        >
          <CustomButton title="Scale Your Team" />
        </div>
      </div>
    </div>
  );
};

export default Features;
