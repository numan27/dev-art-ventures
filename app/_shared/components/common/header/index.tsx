"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Images } from "assets";
import { nav_items } from "./constant";

import classNames from "classnames";
import CustomButton from "../customButton";
import { useRouter } from "next13-progressbar";
import NextLink from "next/link";
import LanguageDropdown from "../languageDropdown";

interface HeaderProps {
  // scrollToSection?: (val: string) => void;
  // isBannerVisible?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{
    x: number;
    y: number;
    width: number;
  } | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 990);
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleNavItemClick = (path: string) => {
    // scrollToSection?.(sectionRefKey);
    console.log("Navigate to section:", path);
    router.push(path);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleMobileDropdownToggle = (itemLabel: string) => {
    if (activeMobileDropdown === itemLabel) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(itemLabel);
    }
  };

  const handleDropdownMouseEnter = (
    itemLabel: string,
    event: React.MouseEvent
  ) => {
    if (isMobile) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2,
      y: rect.bottom + 16, // Restored the proper gap
      width: rect.width,
    };
    setDropdownPosition(position);
    setActiveDropdown(itemLabel);
  };

  const handleDropdownMouseLeave = () => {
    if (isMobile) return;

    // Simple timeout approach
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }

    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setDropdownPosition(null);
    }, 3000); // Very long timeout

    setDropdownTimeout(timeout);
  };

  return (
    <header
      className={classNames(
        styles.mainContainer,
        isScrolled && styles.scrolled
      )}
      ref={headerRef}
    >
      <div className={styles.customContainer}>
        <div
          className={classNames(
            styles.contentContainer,
            isScrolled && styles.contentContainerScrolled
          )}
        >
          <div
            className={classNames(
              styles.blurBackground,
              isScrolled && styles.blurBackgroundScrolled
            )}
          >
            {/* Logo Section */}
            <div className={styles.logoContainer}>
              <a
                href="/"
                className="flex items-center gap-3"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
                aria-label="Go to homepage"
              >
                <Image
                  src={Images.Logo}
                  className={styles.logo}
                  alt="DevArtVentures Logo"
                />
                <span>DevArtVentures</span>
              </a>
            </div>

            <div className="flex items-center gap-5">
              {/* Desktop Navigation */}
              <div>
                {!isMobile && (
                  <nav
                    className={styles.desktopNav}
                    role="navigation"
                    aria-label="Main navigation"
                  >
                    <ul
                      className={classNames(
                        styles.navList,
                        "flex items-center gap-2"
                      )}
                    >
                      {nav_items.map((item, index) => (
                        <li
                          key={index}
                          className={classNames(
                            styles.navItemWrapper,
                            item.hasDropdown && styles.navItemWrapperExtended,
                            "relative group"
                          )}
                          style={{
                            // For dropdown items, extend the hover area downward
                            ...(item.hasDropdown && {
                              paddingBottom: "40px", // Increased from 20px
                              marginBottom: "-40px", // Increased from -20px
                            }),
                          }}
                        >
                          <Link
                            href={item.path || "#"}
                            className={styles.navItem}
                            onMouseEnter={(e) => {
                              if (item.hasDropdown) {
                                handleDropdownMouseEnter(item.label, e);
                              }
                            }}
                            onMouseLeave={handleDropdownMouseLeave}
                            aria-expanded={
                              item.hasDropdown
                                ? activeDropdown === item.label
                                : undefined
                            }
                            aria-haspopup={item.hasDropdown}
                          >
                            <span className={styles.navlabels}>
                              {item.label}
                            </span>
                            {item.hasDropdown && (
                              <svg
                                className={styles.dropdownIcon}
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <path
                                  d="M3 4.5L6 7.5L9 4.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>

              {/* CTA Button - Desktop Only */}
              {!isMobile && (
                <div
                  className={classNames(
                    styles.ctaSection,
                    "flex items-center gap-2"
                  )}
                >
                  {/* <LanguageDropdown /> */}
                  <NextLink
                    target="_blank"
                    href="https://calendly.com/devartventures/30min"
                    className={styles.ctaButton}
                  >
                    <CustomButton title="Schedule Meeting" />
                  </NextLink>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <button
                onClick={toggleMobileMenu}
                type="button"
                className={styles.mobileMenuToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {isMobile && (
            <div
              id="mobile-menu"
              className={classNames(
                styles.mobileMenu,
                isMobileMenuOpen && styles.mobileMenuOpen
              )}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavList}>
                  {nav_items.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() =>
                          item.hasDropdown
                            ? handleMobileDropdownToggle(item.label)
                            : item.path && handleNavItemClick(item.path)
                        }
                        className={styles.mobileNavItem}
                        aria-expanded={
                          item.hasDropdown
                            ? activeMobileDropdown === item.label
                            : undefined
                        }
                        aria-haspopup={item.hasDropdown}
                      >
                        <span className={styles.navlabels}>{item.label}</span>
                        {item.hasDropdown && (
                          <svg
                            className={classNames(
                              styles.mobileDropdownIcon,
                              activeMobileDropdown === item.label &&
                                styles.mobileDropdownIconRotated
                            )}
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 4.5L6 7.5L9 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Mobile Dropdown Menu */}
                      {item.hasDropdown &&
                        activeMobileDropdown === item.label && (
                          <div
                            className={styles.mobileDropdownMenu}
                            role="menu"
                            aria-label={`${item.label} submenu`}
                          >
                            {item.dropdownItems?.map(
                              (dropdownItem, dropdownIndex) => (
                                <Link
                                  key={dropdownIndex}
                                  href={dropdownItem.path}
                                  className={styles.mobileDropdownItem}
                                  role="menuitem"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveMobileDropdown(null);
                                  }}
                                >
                                  <div
                                    className={styles.mobileDropdownItemContent}
                                  >
                                    <span
                                      className={styles.mobileDropdownItemTitle}
                                    >
                                      {dropdownItem.title}
                                    </span>
                                    <span
                                      className={
                                        styles.mobileDropdownItemDescription
                                      }
                                    >
                                      {dropdownItem.description}
                                    </span>
                                  </div>
                                </Link>
                              )
                            )}
                          </div>
                        )}
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Mobile Only */}
                <div className={styles.mobileCtaSection}>
                  <NextLink
                    target="_blank"
                    href="https://calendly.com/devartventures/30min"
                    className={styles.ctaButton}
                  >
                    <CustomButton title="Schedule Meeting" />
                  </NextLink>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Portal Mobile Menu Backdrop */}
      {isMobile &&
        isMobileMenuOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className={styles.mobileMenuBackdrop}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />,
          document.body
        )}

      {/* Portal Dropdown Menu */}
      {activeDropdown && dropdownPosition && typeof window !== "undefined" && (
        <div
          className={styles.dropdownMenu}
          style={{
            position: "fixed",
            top: dropdownPosition.y,
            left: dropdownPosition.x,
            transform: "translateX(-50%)",
            zIndex: 2147483647,
          }}
          onMouseEnter={(e) => {
            if (dropdownTimeout) {
              clearTimeout(dropdownTimeout);
              setDropdownTimeout(null);
            }
          }}
          onMouseLeave={(e) => {
            const timeout = setTimeout(() => {
              setActiveDropdown(null);
              setDropdownPosition(null);
            }, 1000);
            setDropdownTimeout(timeout);
          }}
          role="menu"
          aria-label={`${activeDropdown} submenu`}
        >
          {nav_items
            .find((item) => item.label === activeDropdown)
            ?.dropdownItems?.map((dropdownItem, dropdownIndex) => (
              <div key={dropdownIndex} className={styles.dropdownItem}>
                <Link
                  href={dropdownItem.path}
                  className={styles.dropdownItemLink}
                  role="menuitem"
                >
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>
                      {dropdownItem.title}
                    </span>
                    <span className={styles.dropdownItemDescription}>
                      {dropdownItem.description}
                    </span>
                  </div>
                </Link>
                {dropdownIndex <
                  (nav_items.find((item) => item.label === activeDropdown)
                    ?.dropdownItems?.length || 0) -
                    1 && <div className={styles.dropdownDivider} />}
              </div>
            ))}
        </div>
      )}
    </header>
  );
};

export default Header;
