"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { featuresData } from "utils/featuresData";
import { Images } from "assets/images";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const Mission = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "relative")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer, "")}>
        <SectionHeadingCard
          badge="Why Us"
          heading="Our Key Features"
          description="Explore the unique features and capabilities that make us your trusted partner for digital solutions."
          centered={true}
          maxParticles={250}
          section="services"
          backgroundImage={Images.TestimonialsSectionBg.src}
        />

        <div
          className={classNames(
            styles.featuresContainer,
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          )}
        >
          {featuresData.map((feature) => (
            <div key={feature.id} className={styles.feature}>
              <span className={styles.featureIcon}>
                <Image
                  width={50}
                  height={50}
                  src={feature.icon}
                  alt={feature.title}
                />
              </span>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
