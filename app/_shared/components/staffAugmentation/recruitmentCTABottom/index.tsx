"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import NextLink from "next/link";

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
            <h3>Scale your team like a pro. Start your project today.</h3>
            <p>
              Access pre-vetted tech talent and scale your development team with
              confidence. Whether you need developers, designers, or engineers,
              we've got you covered.
            </p>
            <NextLink
              target="_blank"
              href="https://calendly.com/devartventures/30min"
              className={styles.ctaButton}
            >
              <CustomButton
                // Icon={Icons.Phone}
                // IconDirection="left"
                title="Book a Free Consultation"
              />
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentCTABottom;
