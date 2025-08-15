"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import CustomBadge from "components/common/customBadge";
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
              <CustomBadge title="Page Not Found" />
              <h1 className="text-center">
                Seems we missed the {width > 768 && <br />} mark on this page
              </h1>
              <p>
                Looks like you've reached a page that isn’t here. Not to
                worry—there’s plenty more {width > 768 && <br />} to explore
                across our site.
              </p>
              <div className={classNames(styles.buttons, "mt-2")}>
                <NextLink href="/" className={styles.ctaButton}>
                  <CustomButton title="Go Back Home" />
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
