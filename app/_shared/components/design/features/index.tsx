"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomBadge from "components/common/customBadge";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomCard from "components/common/customCard";

const Features = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${Images.DesignFeaturesBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "712px",
          height: "692px",
          position: "absolute",
          left: "calc(50% - 356px)",
          top: "calc(54.6012% - 346px)",
          opacity: "0.75",
          zIndex: 0,
        }}
      ></div>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <CustomSectionHeading
          badge="Solution"
          heading="Poor conversions despite great products? Outdated or inconsistent UI?"
          description="We fix these with:"
          centered={true}
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
          <CustomButton title="Get Started Today" />
        </div>
      </div>
    </div>
  );
};

export default Features;
