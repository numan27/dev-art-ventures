"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import CustomBadge from "components/common/customBadge";
import BrandSlider from "components/common/brandSlider";
import Stats from "../stats";
import useWindowDimensions from "hooks/useWindowDimensions";

const HeroBanner = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className={styles.fullWidthWrapper}>
        <div
          className={classNames(
            styles.sectionWrapper,
            "flex items-center justify-center relative flex-col gap-16"
          )}
        >
          <div className="relative w-full flex justify-center h-full">
            <div
              className={classNames(
                styles.sectionContainer,
                "flex items-center flex-col justify-center h-full gap-3 relative"
              )}
            >
              <CustomBadge title="Building Future Ventures" />
              <h1 className="text-center">
                We Partner With Industry {width > 768 && <br />} Leaders To
                Build Exceptional Solutions
              </h1>
              <p>
                Your Partner in Transforming ideas into impactful digital
                solutions. Let's <br /> Build Things Together
              </p>
              <div
                className={classNames(
                  styles.buttons,
                  "flex items-center gap-2 mt-2"
                )}
              >
                <CustomButton title="Book Call" />
                <CustomButton
                  containerStyle="secondary-button"
                  title="Let's Partner"
                />
              </div>
            </div>
          </div>
          <BrandSlider />
          <div
            className={classNames(
              styles.statsContainer,
              "absolute bottom-4 w-full flex flex-col xs:gap-0 gap-4"
            )}
          >
            <Stats />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
