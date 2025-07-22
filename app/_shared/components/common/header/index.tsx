"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Icons, Images } from "assets";
import { nav_items } from "./constant";
import classNames from "classnames";
import dynamic from "next/dynamic";
import CustomButton from "../customButton";
import { routeConstant } from "routes/constants";
import { useRouter } from "next13-progressbar";

interface HeaderProps {
  // scrollToSection: (val: string) => void;
  // isBannerVisible: boolean;
}

const Header: React.FC<HeaderProps> = (
  {
    // scrollToSection,
    // isBannerVisible,
  }
) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth < 990);
      handleResize(); // Set the initial state
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const handleNavigateAuth = () => {
  //   router.push(routeConstant.signUp.path);
  // };

  return (
    <header
      className={
        (styles.mainContainer,
        "fixed xxl:top-16 xl:top:12 lg:top-10 top-8 left-0 right-0")
      }
      ref={headerRef}
    >
      <div
        className={classNames(styles.blurBackground, styles.customContainer)}
        // style={!isBannerVisible ? { background: "#0b000040" } : {}}
      >
        <nav className={classNames(styles.contentContainer, "w-full")}>
          <div className="flex flex-wrap justify-between items-center w-full h-full">
            <div className="flex items-center gap-6">
              <div className={classNames(styles.logoContainer)}>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Image src={Images.Logo} className={styles.logo} alt="Logo" />
                  <span>DevArtVentures</span>
                </a>
              </div>
            </div>

            <div className="flex items-center h-full gap-4">
              {!isMobile && (
                <div
                  className={classNames(
                    "transition-all duration-300 ease-in-out overflow-hidden w-full lg:flex lg:max-h-full lg:opacity-100 items-center",
                    "lg:w-auto max-h-0 opacity-0"
                  )}
                >
                  <ul className="flex flex-row gap-6">
                    {nav_items.map((item, index) => (
                      <li key={index}>
                        <a
                          // onClick={() => scrollToSection(item.sectionRefKey)}
                          className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                          aria-current="page"
                        >
                          <label className={styles.navlabels}>
                            {item.label}
                          </label>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <CustomButton
                title="Book Call"
                // onClick={handleNavigateAuth}
                containerStyle={classNames(styles.joinUsBtn, "ml-2")}
              />
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobile && (
              <div
                className={classNames(
                  "transition-all duration-300 ease-in-out overflow-hidden lg:flex lg:max-h-full lg:opacity-100 items-center w-full lg:w-auto lg:order-1",
                  isMobileMenuOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  {nav_items.map((item, index) => (
                    <li
                      key={index}
                      // onClick={() => scrollToSection(item.sectionRefKey)}
                    >
                      <a
                        className="flex py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        aria-current="page"
                      >
                        <label className={styles.navlabels}>{item.label}</label>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
