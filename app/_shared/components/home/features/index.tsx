"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";
import { Icons, Images } from "assets";
import Image from "next/image";
import CustomButton from "components/common/customButton";
import CustomBadge from "components/common/customBadge";

const Mission = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="services"
    >
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.sectionContainer,
            "relative flex items-center justify-center"
          )}
        >
          <span
            className={classNames(styles.shape1, "absolute -top-32 -left-32")}
          >
            <Image
              width={616}
              height={556}
              src={Images.FeaturesShapeLeft.src}
              alt="shape"
            />
          </span>
          <span
            className={classNames(styles.shape2, "absolute -top-32 -right-32")}
          >
            <Image
              width={616}
              height={556}
              src={Images.FeaturesShapeRight.src}
              alt="shape"
            />
          </span>
          <div className={styles.particlesContainer}>
            <AdaptiveParticles section="services" maxParticles={100} />
          </div>
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col gap-4 justify-center items-center text-center relative z-10"
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
      </div>
    </div>
  );
};

export default Mission;
