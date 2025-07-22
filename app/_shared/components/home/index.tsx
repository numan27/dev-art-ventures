"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { useEffect } from "react";
import AOS from "aos";
// import Footer from "../common/footer";
import HeroBanner from "./heroBanner";
import Stats from "./stats";

const LandingPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

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
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
