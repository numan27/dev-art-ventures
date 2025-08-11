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
    icon: Icons.Step1,
    color: "primary",
  },
  {
    id: 2,
    title: "Get Matched",
    description: "Receive pre-vetted candidates within 24 hours.",
    icon: Icons.Step2,
    color: "secondary",
  },
  {
    id: 3,
    title: "Start Immediately",
    description: "Onboard talent and begin your project right away.",
    icon: Icons.Step3,
    color: "accent",
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
            "flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center bg-transparent"
          )}
        >
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className={classNames(
                styles.cardItem,
                "flex flex-col items-center relative group"
              )}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{
                // Custom CSS variable for progress bar animation delay
                ["--delay" as any]: `${index * 0.15}s`,
              }}
            >
              {/* Progress bar at top */}
              <div className={styles.progressBar} />

              {/* Icon with drop shadow effect */}
              <div className={styles.iconWrapper}>
                <feature.icon />
              </div>

              {/* Step number badge */}
              <div className={styles.stepBadge}>
                <span>{feature.id}</span>
              </div>

              {/* Content */}
              <h4 className={styles.cardTitle}>{feature.title}</h4>
              <p className={styles.cardDescription}>{feature.description}</p>

              {/* Hover effect indicator */}
              <div className={styles.hoverIndicator} />
            </div>
          ))}
        </div>

        {/* Connection lines between cards */}
        <div className={styles.connectionLines}>
          <div className={styles.connectionLine} />
          <div className={styles.connectionLine} />
        </div>

        <div
          className={classNames(
            styles.buttonContainer,
            "flex justify-center lg:mt-20 md:mt-16 mt-12"
          )}
        >
          <CustomButton title="Scale Your Team" />
        </div>
      </div>
    </div>
  );
};

export default Features;
