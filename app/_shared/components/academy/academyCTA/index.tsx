"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import { Images } from "assets";
import Image from "next/image";

const AcademyCTA = () => {
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
            <Image src={Images.Clock} alt="icon" />
            <h2>Limited-Time Offers</h2>
            <p>First 10 sign-ups get a free 1:1 mentorship session!</p>
            <CustomButton title="Book Your Session Now" />
            <div className={classNames(styles.offerText)}>
              <span>Enroll now</span> – 20% off until <span>25/12/2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyCTA;
