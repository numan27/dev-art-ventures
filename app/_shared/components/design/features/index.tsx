"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomBadge from "components/common/customBadge";
import { Images } from "assets";
import CustomButton from "components/common/customButton";
import CustomSectionHeading from "components/common/customSectionHeading";

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
          <div className={classNames(styles.cardItem, "flex flex-col")}>
            <img
              src={Images.DesignFeature1.src}
              alt="Data-Driven UX Research"
            />
            <h4>Data-Driven UX Research</h4>
            <p>
              Crafting intuitive and visually stunning interfaces for an
              enhanced user experience
            </p>
          </div>
          <div className={classNames(styles.cardItem, "flex flex-col")}>
            <img
              src={Images.DesignFeature2.src}
              alt="Pixel-Perfect, Scalable UI"
            />
            <h4>Pixel-Perfect, Scalable UI</h4>
            <p>
              Crafting intuitive and visually stunning interfaces for an
              enhanced user experience
            </p>
          </div>
          <div className={classNames(styles.cardItem, "flex flex-col")}>
            <img
              src={Images.DesignFeature3.src}
              alt="Testing & Iteration For ROI"
            />
            <h4>Testing & Iteration For ROI</h4>
            <p>
              Crafting intuitive and visually stunning interfaces for an
              enhanced user experience
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <CustomButton title="Get Started Today" />
        </div>
      </div>
    </div>
  );
};

export default Features;
