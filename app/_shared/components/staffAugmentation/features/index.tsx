"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import NextLink from "next/link";

const featuresData = [
  {
    id: 1,
    title: "Consult",
    description: "You tell us about your project, goals, and team culture.",
    icon: Images.DevFeature4.src,
    color: "primary",
  },
  {
    id: 2,
    title: "Match",
    description: "We shortlist 2-3 pre-vetted designers for your review.",
    icon: Images.DesignProcess1.src,
    color: "secondary",
  },
  {
    id: 3,
    title: "Interview",
    description:
      "You interview the candidates (at no cost). Choose your favorite.",
    icon: Images.DesignProcess2.src,
    color: "accent",
  },
  {
    id: 4,
    title: "Start",
    description: "Onboard and begin collaborating. We handle all the admin.",
    icon: Images.DesignProcess5.src,
    color: "primary",
  },
];

const Features = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="How it works"
          heading={<>Simple 4-Step Process</>}
          description="Streamlined process to get you the right talent when you need it"
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />

        <div
          className={classNames(
            styles.cardContainer,
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-center bg-transparent"
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
                <img src={feature.icon} alt={feature.title} />
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

        <div
          className={classNames(
            styles.buttonContainer,
            "flex justify-center lg:mt-20 md:mt-16 mt-12"
          )}
        >
          <NextLink href="#talent-form">
            <CustomButton title="Scale Your Team" />
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Features;
