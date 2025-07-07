"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import Header from "../header";
import Topbar from "../topbar";
import classNames from "classnames";
import styles from "./style.module.scss";
import Footer from "../footer";
import { useTranslationContext } from "_shared/context/TranslationContext";

interface WrapperProps {
  children: React.ReactNode;
  isLandingPage?: boolean;
}

const Wrapper = ({ children, isLandingPage = false }: WrapperProps) => {
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

  // Google Translate Widget handles all translation automatically
  // No need for manual text node manipulation

  return (
    <>
      <Topbar />
      <Header isLandingPage={isLandingPage} />
      <main ref={mainRef} className={classNames(styles.main)}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;
