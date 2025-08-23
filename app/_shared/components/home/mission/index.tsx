"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";
import Stats from "../stats";
import CustomBadge from "components/common/customBadge";

interface MissionProps {
  heading?: string;
  description?: string | any;
}

const Mission = ({
  heading = "Our mission is to build purpose-driven brands that bring growth",
  description = "We align strategy, design, and engineering to deliver outcomes that compound over time. Our multidisciplinary team partners with you from concept to scale to build durable products and brands.",
}: MissionProps) => {
  return (
    <div className={classNames(styles.sectionWrapper)} data-section="mission">
      <div
        className={classNames(
          styles.customContainer,
          "grid md:grid-cols-2 grid-cols-1 gap-8 items-stretch h-full"
        )}
      >
        <div
          className={classNames(
            styles.sectionContainer,
            "relative flex items-center justify-center xs:px-0 px-3"
          )}
        >
          <AdaptiveParticles section="mission" maxParticles={60} />
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col md:gap-5 sm:gap-4 gap-3 justify-center md:items-start items-center relative z-10"
            )}
          >
            {/* <CustomBadge title="Our Mission" height={30} /> */}
            <h2>{heading}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div
          className={classNames(
            styles.statsContainer,
            "flex items-center h-full"
          )}
        >
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Mission;
