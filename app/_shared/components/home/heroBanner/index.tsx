"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import CustomBadge from "components/common/customBadge";
import BrandSlider from "components/common/brandSlider";
import useWindowDimensions from "hooks/useWindowDimensions";
import NextLink from "next/link";
import SectionHeading from "components/common/sectionHeading";
import CustomSectionHeading from "components/common/customSectionHeading";
import { routeConstant } from "routes/constants";

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
                Design. Develop. Scale. {width > 768 && <br />} Your Digital
                Product Partner
              </h1>
              <p>
                DevArtVentures delivers end-to-end UI/UX design and full-stack
                development services—and as a trusted tech talent provider, we
                offer recruitment and staff augmentation to embed pre-vetted
                designers and engineers directly into your team.
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
                <NextLink
                  target="_blank"
                  href={routeConstant.contact.path}
                  className={styles.ctaButton}
                >
                  <CustomButton
                    containerStyle="secondary-button"
                    title="Contact Us"
                  />
                </NextLink>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <h6 className="text-center">Industry-Leading Solutions</h6>
            <BrandSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
