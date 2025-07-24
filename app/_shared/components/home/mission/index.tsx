"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";

const Mission = () => {
  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="mission"
    >
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.sectionContainer,
            "relative flex items-center justify-center "
          )}
        >
          <AdaptiveParticles section="mission" maxParticles={75} />
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col gap-4 justify-center items-center text-center relative z-10"
            )}
          >
            <h2>
              Our mission is to build purpose-driven brands that bring growth
            </h2>
            <p>However, we approach things a bit differently around here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
