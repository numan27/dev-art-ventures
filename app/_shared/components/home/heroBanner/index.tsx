"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import CustomBadge from "components/common/customBadge";
import BrandSlider from "components/common/brandSlider";
import useWindowDimensions from "hooks/useWindowDimensions";
import NextLink from "next/link";

const HeroBanner = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className={styles.fullWidthWrapper}>
        <div
          className={classNames(
            styles.sectionWrapper,
            "flex items-center justify-center relative flex-col gap-12"
          )}
        >
          <div className="relative w-full flex justify-center h-full">
            <div
              className={classNames(
                styles.sectionContainer,
                "flex items-center flex-col justify-center h-full lg:gap-5 md:gap-4 gap-3 relative"
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
                <NextLink
                  target="_blank"
                  href="https://calendly.com/devartventures/30min"
                  className={styles.ctaButton}
                >
                  <CustomButton title="Book Free Consultation" />
                </NextLink>
                {/* <CustomButton
                  containerStyle="secondary-button"
                  title="Let's Partner"
                /> */}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <h6 className="text-center">Technologies We Master</h6>
            <BrandSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
