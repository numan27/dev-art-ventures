"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import CustomBadge from "components/common/customBadge";
import useWindowDimensions from "hooks/useWindowDimensions";
import NextLink from "next/link";
import BrandSlider from "components/common/brandSlider";
import { routeConstant } from "routes/constants";

const HeroBanner = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className={styles.fullWidthWrapper}>
        <div
          className={classNames(
            styles.sectionWrapper,
            "flex items-center justify-center relative flex-col"
          )}
        >
          <div className="relative w-full flex justify-center h-full">
            <div
              className={classNames(
                styles.sectionContainer,
                "flex items-center flex-col justify-center h-full lg:gap-5 md:gap-4 gap-3 relative"
              )}
            >
              <CustomBadge title="Bring Your Ideas To Life" />
              <h1 className="text-center">
                Custom Software <br /> Development Made Easy
              </h1>
              <p>
                We work with the latest technologies and methodologies to create
                software that is innovative, reliable, and tailored exactly to
                your business requirements.
              </p>
              <div
                className={classNames(
                  styles.buttons,
                  "flex items-center gap-2 mt-2"
                )}
              >
                <NextLink
                  href="https://calendly.com/devartventures/30min"
                  className={styles.ctaButton}
                >
                  <CustomButton title="Book Free Consultation" />
                </NextLink>{" "}
                <NextLink
                  href={routeConstant.contact.path}
                  className={styles.ctaButton}
                >
                  <CustomButton
                    containerStyle="secondary-button"
                    title="Start a Project"
                  />
                </NextLink>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <h6 className="text-center">Companies We've Worked With</h6>
            <BrandSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
