"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../adaptiveParticles";
import CustomSectionHeading from "../customSectionHeading";

interface SectionHeadingCardProps {
  heading: string | any;
  description?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
  maxParticles?: number;
  section?: "mission" | "services" | "testimonials";
  backgroundImage?: string;
}

const SectionHeadingCard = ({
  heading,
  description,
  badge,
  centered = true,
  className,
  maxParticles = 200,
  section = "services",
  backgroundImage,
}: SectionHeadingCardProps) => {
  return (
    <div
      className={classNames(
        styles.sectionContainer,
        "relative flex items-center justify-center",
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
            }
          : undefined
      }
    >
      <div className={styles.particlesContainer}>
        <AdaptiveParticles section={section} maxParticles={maxParticles} />
      </div>
      <div className={styles.headingWrapper}>
        <CustomSectionHeading
          badge={badge}
          heading={heading}
          description={description}
          centered={centered}
        />
      </div>
    </div>
  );
};

export default SectionHeadingCard;
