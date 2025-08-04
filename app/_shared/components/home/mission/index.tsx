"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";

interface MissionProps {
  heading: string;
  description: string | any;
}

const Mission = ({
  heading = "Our mission is to build purpose-driven brands that bring growth",
  description = "However, we approach things a bit differently around here.",
}: MissionProps) => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="mission"
    >
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.sectionContainer,
            "relative flex items-center justify-center xs:px-0 px-3"
          )}
        >
          <AdaptiveParticles section="mission" maxParticles={75} />
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col md:gap-4 sm:gap-3 gap-2 justify-center items-center text-center relative z-10"
            )}
          >
            <h2>{heading}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
