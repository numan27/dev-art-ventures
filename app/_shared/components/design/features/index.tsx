"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import CustomCard from "components/common/customCard";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import NextLink from "next/link";
import { routeConstant } from "routes/constants";

const Features = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Solution"
          heading="Poor conversions despite great products? Outdated or inconsistent UI?"
          description="We fix these with:"
          maxParticles={200}
          centered={true}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 md:gap-4 gap-3  bg-transparent"
          )}
        >
          <CustomCard
            icon={Images.DesignFeature1.src}
            title="Data-Driven UX Research"
            description="Crafting intuitive and visually stunning interfaces for an enhanced user experience"
          />
          <CustomCard
            icon={Images.DesignFeature2.src}
            title="Pixel-Perfect, Scalable UI"
            description="Crafting intuitive and visually stunning interfaces for an enhanced user experience"
          />
          <CustomCard
            icon={Images.DesignFeature3.src}
            title="Testing & Iteration For ROI"
            description="Crafting intuitive and visually stunning interfaces for an enhanced user experience"
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <NextLink
            href={routeConstant.contact.path}
            className={styles.ctaButton}
          >
            <CustomButton title="Get Started Today" />
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Features;
