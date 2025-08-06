"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";

const RecruitmentCTABottom = () => {
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
            <h3>Design like a pro. Start your journey today.</h3>
            <p>
              Learn how to bring your ideas to life with modern design tools and
              pro-level techniques. Whether you're building a brand or a career,
              this is where your design journey begins.
            </p>
            <CustomButton
              // Icon={Icons.Phone}
              // IconDirection="left"
              title="Book Call"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCTABottom;
