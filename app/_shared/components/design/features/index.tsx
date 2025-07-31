"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomBadge from "components/common/customBadge";
import { Images } from "assets";

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
        <div
          className={classNames(
            styles.heading,
            "flex flex-col gap-4 justify-center items-center text-center relative z-10"
          )}
        >
          <CustomBadge title="Solution" />
          <h3>
            Poor conversions despite great products? Outdated or inconsistent
            UI?
          </h3>
          <p>We fix these with:</p>
        </div>
        <div
          className={classNames(
            styles.cardContainer,
            "grid sm:grid-cols-3 grid-cols-2 md:gap-4 sm:gap-3 gap-2 bg-transparent"
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
      </div>
    </div>
  );
};

export default Features;
