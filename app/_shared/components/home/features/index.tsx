"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";
import Image from "next/image";
import CustomBadge from "components/common/customBadge";
import { featuresData } from "utils/featuresData";

const Mission = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "relative")}
      data-section="services"
    >
      {/* <span
        className={classNames(
          styles.shape1,
          "absolute left-0 top-0 md:block hidden"
        )}
      >
        <Image
          width={300}
          height={300}
          src={Images.FeaturesShapeLeft.src}
          alt="shape"
        />
      </span>
      <span
        className={classNames(
          styles.shape2,
          "absolute right-0 top-0 md:block hidden"
        )}
      >
        <Image
          width={300}
          height={300}
          src={Images.FeaturesShapeRight.src}
          alt="shape"
        />
      </span> */}
      <div className={classNames(styles.customContainer, "")}>
        <div
          className={classNames(
            styles.sectionContainer,
            "relative flex items-center justify-center"
          )}
        >
          <div className={styles.particlesContainer}>
            <AdaptiveParticles section="services" maxParticles={100} />
          </div>
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col lg:gap-4 md:gap-3 gap-2 justify-center items-center text-center relative z-10"
            )}
          >
            <CustomBadge title="Why Us" />
            <h2>Why We Stand Out</h2>
            <p>
              Discover why Arise excels in delivering innovative, client-focused
              web design solutions.
            </p>
          </div>
        </div>

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
