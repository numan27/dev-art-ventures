"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { useEffect } from "react";
import Mission from "./mission";
import Services from "./services";
import Testimonials from "./testimonials";
import Features from "./features";
import CTA from "./cta";
import HeroBanner from "./heroBanner";
import PortfolioSlider from "components/development/portfolioSlider";
import Process from "./process";
import PreviousWorkshops from "components/academy/previousWorkshops";

const LandingPage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - window.innerHeight / 1.5 &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          section.classList.add("appear");
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <div className={classNames(styles.homeWrapper, "min-h-screen")}>
        <HeroBanner />
        <Mission />
        <Services />
        {/* <PortfolioSlider /> */}
        <Process />
        <PreviousWorkshops />
        <Features />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
};

export default LandingPage;
