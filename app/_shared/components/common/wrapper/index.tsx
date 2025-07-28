"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import classNames from "classnames";
import styles from "./style.module.scss";
import { useTranslationContext } from "_shared/context/TranslationContext";
import Footer from "../footer";
import Header from "../header";

interface WrapperProps {
  children: React.ReactNode;
  isLandingPage?: boolean;
}

const Wrapper = ({ children }: WrapperProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const { language } = useTranslationContext();
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <main ref={mainRef} className={classNames(styles.main)}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;
