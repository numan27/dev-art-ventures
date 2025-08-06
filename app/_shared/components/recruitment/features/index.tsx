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
    title: "Tell Us Your Needs",
    description: "Share role details in 2 minutes.",
  },
  {
    id: 2,
    title: "Get Matched",
    description: "Receive 3-5 pre-interviewed candidates.",
  },
  {
    id: 3,
    title: "Interview & Hire",
    description: "Onboard risk-free with a trial period.",
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
              3 Simple Steps to Hire Your <br />
              Ideal Candidate
            </>
          }
          description="Take The Route That is Easy For You & Get Ahead In Your Design Skills"
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
          <CustomButton title="Hire in 72 Hours" />
        </div>
      </div>
    </div>
  );
};

export default Features;
