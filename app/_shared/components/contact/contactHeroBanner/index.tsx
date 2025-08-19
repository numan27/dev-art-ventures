"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import CustomBadge from "../../common/customBadge";
import CustomCard from "../../common/customCard";
import NextLink from "next/link";
import { Images } from "assets";

const ContactHeroBanner = () => {
  return (
    <>
      <div className={styles.fullWidthWrapper}>
        <div
          className={classNames(
            styles.sectionWrapper,
            "flex items-center md:justify-center justify-start relative flex-col pt-48 md:pt-0"
          )}
        >
          <div className="relative w-full flex justify-center items-start h-full">
            <div
              className={classNames(
                styles.sectionContainer,
                "flex items-center flex-col justify-center h-full lg:gap-5 md:gap-4 gap-3 relative"
              )}
            >
              <CustomBadge title="Get In Touch" />
              <h1 className="text-center">
                Let's Build Something <br /> Amazing Together
              </h1>
              <p>
                Ready to transform your ideas into reality? We're here to help
                you create innovative digital solutions that drive your business
                forward. Reach out and let's start your journey.
              </p>
              <div className={classNames(styles.buttons, "mt-2")}>
                <NextLink
                  href="https://calendly.com/devartventures/30min"
                  className={styles.ctaButton}
                >
                  <CustomButton title="Book Free Consultation" />
                </NextLink>
              </div>
            </div>
          </div>
          {/* Contact info cards */}
          <div
            className={classNames(
              styles.contactCardsSection,
              "w-full py-4 absolute bottom-0 left-0"
            )}
          >
            <div className={styles.customContainer}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <CustomCard
                  icon={Images.DesignService6.src}
                  title="120+ Projects"
                  description="Successfully completed"
                  centered={true}
                />
                <CustomCard
                  icon={Images.DesignProcess1.src}
                  title="100% Satisfaction"
                  description="Client happiness rate"
                  centered={true}
                />
                <CustomCard
                  icon={Images.DevFeature5.src}
                  title="5+ Years"
                  description="Industry experience"
                  centered={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeroBanner;
