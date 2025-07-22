"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
// import Header from "../../common/header";
import Topbar from "../../common/topbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Images } from "assets";
import Header from "../../common/header";
import CustomBadge from "components/common/customBadge";
import BrandSlider from "components/common/brandSlider";
import Stats from "../stats";

const HeroBanner = () => {
  return (
    <div
      className={classNames(
        styles.sectionWrapper,
        "flex items-center justify-center relative"
      )}
    >
      <Header />
      <div className="relative w-full flex justify-center h-full">
        <div
          className={classNames(
            styles.sectionContainer,
            "flex items-center flex-col justify-center h-full gap-3 relative z-10"
          )}
        >
          <CustomBadge title="Building Future Ventures" />
          <h1 className="text-center">
            We Partner With Industry Leaders To Build Exceptional Solutions
          </h1>
          <p>
            Your Partner in Transforming ideas into impactful digital solutions.
            Let's <br /> Build Things Together
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
        <div
          className={classNames(
            styles.sliderContainer,
            "absolute -bottom-60 w-full"
          )}
        >
          <BrandSlider />
        </div>{" "}
      </div>
      <div
        className={classNames(
          styles.statsContainer,
          "absolute bottom-4 w-full"
        )}
      >
        <Stats />
      </div>
    </div>
  );
};

export default HeroBanner;
