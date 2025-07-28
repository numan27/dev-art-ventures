"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";
import CustomButton from "components/common/customButton";

const CTA = () => {
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
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col gap-4 justify-center items-center text-center relative z-10"
            )}
          >
            <span className={classNames(styles.badge)}>3 Spots Left!</span>
            <h2>Let's work together!</h2>
            <p>
              Contact us today to start crafting your exceptional and customized
              design solutions! Start today, scale tomorrow!
            </p>
            <CustomButton title="Start a Project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
