import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./style.module.scss";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Images } from "assets";
import useWindowDimensions from "hooks/useWindowDimensions";
import { routeConstant } from "routes/constants";
import { useTheme } from "../../../context/ThemeContext";
import CustomButton from "../customButton";
import LanguageDropdown from "../languageDropdown";

interface HeaderProps {
  isLandingPage?: boolean;
  isTransparent?: boolean;
}

const Header = ({
  isLandingPage = false,
  isTransparent = false,
}: HeaderProps) => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownCloseTimeout = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const serviceDescriptions = {
    "Managed IT Services": "Complete IT management and monitoring.",
    "IT Support Services": "Fast, reliable support for your systems and staff.",
    "IT Consulting Services":
      "Expert guidance to plan, scale, and optimize your IT.",
    "Cybersecurity Services":
      "Protection for your business, network, and devices.",
    "Network & Infrastructure Services":
      "Design, setup, Wi-Fi surveys, cabling, and full infrastructure support.",
    "Business IT Services":
      "Custom IT solutions for your day-to-day operations.",
    "Data Center Services":
      "On-site engineering, testing, and hands-on support for data centers.",
    "Web Development": "Modern, scalable websites and web applications.",
    "UI/UX & Graphics":
      "User interface, experience design, and creative graphics.",
    "IT Business Consulting Services":
      "Strategic IT advice to optimize business operations and growth.",
    "SEO & Digital Marketing":
      "Grow your business with search and digital marketing.",
  } as const;

  function getServiceDescription(title: string) {
    return serviceDescriptions[title as keyof typeof serviceDescriptions] || "";
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      // Hide mega menu if click outside
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownMouseEnter = (title: string) => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
    setActiveDropdown(title);
  };

  const handleDropdownMouseLeave = () => {
    dropdownCloseTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const getHeaderStyle = () => {
    // Check if we're on the home page
    const isHomePage = pathname === "/" || pathname === "/home";

    if (isTransparent) {
      return "bg-transparent hover:bg-white transition-all duration-300";
    }
    if (isLandingPage || isHomePage) {
      // On mobile, return empty string to let inline styles handle the background
      if (width < 768) {
        return "";
      }
      // On desktop, use scroll-based behavior
      return isScrolled ? "glass-navbar bg-white/80" : "bg-white";
    }
    // For all other pages, use white background with dark text
    return "bg-white";
  };

  const getTextStyle = () => {
    // Check if we're on the home page
    const isHomePage = pathname === "/" || pathname === "/home";

    if (isTransparent) {
      return "text-white transition-colors duration-300";
    }
    if (isLandingPage || isHomePage) {
      // On mobile, use dark text for better contrast with transparent background
      if (width < 768) {
        return "text-black/90";
      }
      // On desktop, use scroll-based behavior
      return isScrolled ? "text-black/80" : "text-black/90";
    }
    return "text-black/90";
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const headerLinks = [
    {
      path: routeConstant.services.path,
      title: "Services",
      megaMenu: [
        {
          section: "Our Services",
          links: [
            {
              path: routeConstant.services.managedIT.path,
              title: routeConstant.services.managedIT.title,
            },
            {
              path: routeConstant.services.itSupport.path,
              title: routeConstant.services.itSupport.title,
            },
            {
              path: routeConstant.services.itBusinessConsulting.path,
              title: routeConstant.services.itBusinessConsulting.title,
            },
            {
              path: routeConstant.services.cyberSecurity.path,
              title: routeConstant.services.cyberSecurity.title,
            },
            {
              path: routeConstant.services.networkInfrastructure.path,
              title: routeConstant.services.networkInfrastructure.title,
            },
            {
              path: routeConstant.services.dataCenter.path,
              title: routeConstant.services.dataCenter.title,
            },
            {
              path: routeConstant.services.webDevelopment.path,
              title: routeConstant.services.webDevelopment.title,
            },
            {
              path: routeConstant.services.creative.path,
              title: routeConstant.services.creative.title,
            },
            {
              path: routeConstant.services.seoDigitalMarketing.path,
              title: routeConstant.services.seoDigitalMarketing.title,
            },
          ],
        },
      ],
    },
    {
      path: routeConstant.aboutUs.path,
      title: "About",
      megaMenu: [
        {
          section: "Company",
          links: [
            {
              path: routeConstant.aboutUs.path,
              title: routeConstant.aboutUs.title,
            },
            {
              path: routeConstant.careers.path,
              title: routeConstant.careers.title,
            },
          ],
        },
        {
          section: "Legal",
          links: [
            {
              path: routeConstant.privacyPolicy.path,
              title: routeConstant.privacyPolicy.title,
            },
            {
              path: routeConstant.termsAndConditions.path,
              title: routeConstant.termsAndConditions.title,
            },
          ],
        },
      ],
    },
    {
      path: routeConstant.portfolio.path,
      title: "Portfolio",
    },
    {
      path: routeConstant.contact.path,
      title: "Contact",
    },
  ];

  function hasChildren(
    link: any
  ): link is { children: Array<{ path: string; title: string }> } {
    return Array.isArray(link.children);
  }

  return (
    <header
      className={classNames(
        styles.header,
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        getHeaderStyle(),
        // Only apply glass-navbar on desktop when scrolled
        width >= 768 && isScrolled && "glass-navbar",
        // Add mobile menu open class for solid background
        width < 768 && isMobileMenuOpen && styles.mobileMenuOpen,
        "py-2",
        isTransparent && isHovered && "header-hovered"
      )}
      style={
        width < 768
          ? isMobileMenuOpen
            ? {
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              }
            : {
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              }
          : undefined
      }
      data-scrolled={isScrolled}
      data-page={pathname === "/" || pathname === "/home" ? "home" : "other"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mega Menu for desktop - moved outside container for full width */}
      {headerLinks.map((link, index) =>
        link.megaMenu &&
        link.title === "Services" &&
        activeDropdown === link.title ? (
          <div
            key={"megaMenu"}
            ref={megaMenuRef}
            className={classNames(styles.megaMenu, {
              [styles.active]: activeDropdown === link.title,
            })}
            onMouseEnter={() => handleDropdownMouseEnter(link.title)}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className={classNames("megaMenuInner", styles.megaMenuInner)}>
              {/* Card-style header */}
              <Link
                href={routeConstant.services.path}
                className={styles.megaMenuHeader}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={() => setActiveDropdown(null)}
              >
                <div className={styles.megaMenuHeaderIcon}>🛠️</div>
                <div style={{ flex: 1 }}>
                  <div className={styles.megaMenuHeaderTitle}>
                    Custom IT & Digital Services
                  </div>
                  <div className={styles.megaMenuHeaderSubtitle}>
                    Discover our core offerings
                  </div>
                </div>
                <span
                  className="megaMenuHeaderArrow"
                  style={{
                    marginLeft: 16,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6862 5.99089C17.9459 5.99846 18.1925 6.1068 18.3737 6.29298L27.707 15.6263C27.8945 15.8139 27.9998 16.0682 27.9998 16.3333C27.9998 16.5985 27.8945 16.8528 27.707 17.0404L18.3737 26.3737C18.2816 26.4697 18.1712 26.5463 18.0491 26.5991C17.9269 26.6519 17.7955 26.6797 17.6625 26.6811C17.5294 26.6824 17.3975 26.6572 17.2743 26.607C17.1511 26.5567 17.0392 26.4823 16.9451 26.3882C16.851 26.2941 16.7767 26.1822 16.7264 26.0591C16.6761 25.9359 16.6509 25.8039 16.6523 25.6709C16.6536 25.5378 16.6815 25.4064 16.7343 25.2843C16.7871 25.1622 16.8637 25.0518 16.9596 24.9596L24.5859 17.3333H5.00001C4.8675 17.3352 4.73594 17.3107 4.61297 17.2613C4.49 17.2119 4.37808 17.1385 4.28371 17.0455C4.18934 16.9525 4.1144 16.8416 4.06326 16.7193C4.01211 16.5971 3.98577 16.4659 3.98577 16.3333C3.98577 16.2008 4.01211 16.0696 4.06326 15.9474C4.1144 15.8251 4.18934 15.7142 4.28371 15.6212C4.37808 15.5281 4.49 15.4548 4.61297 15.4054C4.73594 15.3559 4.8675 15.3315 5.00001 15.3333H24.5859L16.9596 7.70704C16.8154 7.56654 16.7169 7.38575 16.6771 7.18835C16.6372 6.99094 16.6579 6.78612 16.7365 6.60067C16.815 6.41523 16.9476 6.2578 17.1171 6.149C17.2866 6.0402 17.4849 5.9851 17.6862 5.99089Z"
                      fill="#2563eb"
                    />
                  </svg>
                </span>
              </Link>
              {/* Grouped columns layout for services */}
              <div className={styles.megaMenuColumnsWrapper}>
                {(() => {
                  const serviceLinks = link.megaMenu[0].links;
                  // Rearranged groups:
                  const group1 = [
                    serviceLinks.find((s) => s.title === "Managed IT Services"),
                    serviceLinks.find((s) => s.title === "IT Support Services"),
                    serviceLinks.find(
                      (s) => s.title === "Network & Infrastructure Services"
                    ),
                  ].filter(Boolean);
                  const group2 = [
                    serviceLinks.find(
                      (s) => s.title === "IT Business Consulting Services"
                    ),
                    serviceLinks.find(
                      (s) => s.title === "Data Center Services"
                    ),
                    serviceLinks.find(
                      (s) => s.title === "Cybersecurity Services"
                    ),
                  ].filter(Boolean);
                  const group3 = [
                    serviceLinks.find((s) => s.title === "Web Development"),
                    serviceLinks.find((s) => s.title === "UI/UX & Graphics"),
                    serviceLinks.find(
                      (s) => s.title === "SEO & Digital Marketing"
                    ),
                  ].filter(Boolean);
                  const columns = [group1, group2, group3];
                  const groupHeadings = [
                    "IT Management",
                    "Consultancy & Security",
                    "Web & Creative",
                  ];
                  return columns.map((col, colIdx) => (
                    <div className={styles.megaMenuColumn} key={colIdx}>
                      <div className={styles.megaMenuColumnTitle}>
                        {groupHeadings[colIdx]}
                      </div>
                      <ul>
                        {col.map((item, itemIdx) =>
                          item ? (
                            <li key={itemIdx}>
                              <Link
                                href={item.path}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className={styles.megaMenuServiceTitle}>
                                  {item.title}
                                </span>
                                <span className={styles.megaMenuServiceDesc}>
                                  {getServiceDescription(item.title)}
                                </span>
                              </Link>
                            </li>
                          ) : null
                        )}
                      </ul>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        ) : null
      )}
      {/* Mega Menu for desktop - moved outside container for full width */}
      {headerLinks.map((link, index) =>
        link.megaMenu &&
        link.title === "About" &&
        activeDropdown === link.title ? (
          <div
            key={"megaMenuAbout"}
            ref={megaMenuRef}
            className={classNames(styles.megaMenu, {
              [styles.active]: activeDropdown === link.title,
            })}
            onMouseEnter={() => handleDropdownMouseEnter(link.title)}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div
              className={classNames("megaMenuInner", styles.megaMenuInner)}
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                borderRadius: 24,
                padding: "2rem 2.5rem",
              }}
            >
              <div
                className={styles.megaMenuColumnsWrapper}
                style={{ gap: "2.5rem" }}
              >
                {link.megaMenu.map((section, sectionIdx) => (
                  <div key={sectionIdx} className={styles.megaMenuColumn}>
                    <div className={styles.megaMenuColumnTitle}>
                      {section.section}
                    </div>
                    <ul>
                      {section.links.map((item, itemIdx) => (
                        <li key={itemIdx} style={{ marginBottom: "1.25rem" }}>
                          <Link
                            href={item.path}
                            className={styles.megaMenuServiceTitle}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null
      )}
      <div className="container px-4 mx-auto">
        <div
          className="flex items-center justify-between h-20 relative"
          style={{ minHeight: "80px" }}
        >
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link
              href={routeConstant.home.path}
              className={classNames(styles.logo)}
            >
              <Image
                width={180}
                height={80}
                src={
                  // Use regular logo for mobile, white logo only for desktop transparent header
                  width < 768
                    ? Images.Logo
                    : isTransparent && !isHovered && !isScrolled
                    ? Images.LogoWhite
                    : Images.Logo
                }
                alt="Core IT Ventures Logo"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center">
              <ul
                className={classNames(
                  styles.main__menu,
                  "flex items-center gap-8"
                )}
              >
                {headerLinks.map((link, index) => (
                  <li
                    key={index}
                    className={classNames("relative group")}
                    onMouseEnter={
                      link.megaMenu
                        ? () => handleDropdownMouseEnter(link.title)
                        : undefined
                    }
                    onMouseLeave={
                      link.megaMenu ? handleDropdownMouseLeave : undefined
                    }
                    style={{
                      minHeight: "40px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      href={link.path}
                      className={classNames(
                        styles.navLink,
                        pathname === link.path && styles.activeLink,
                        link.megaMenu &&
                          activeDropdown === link.title &&
                          styles.navLinkMegaActive,
                        "flex items-center uppercase text-sm font-medium transition-all duration-200",
                        !isScrolled && getTextStyle()
                      )}
                      style={
                        isTransparent && isHovered
                          ? { color: "#1a1a1a" }
                          : isScrolled
                          ? { color: "#1a1a1a" }
                          : undefined
                      }
                    >
                      {link.title}
                    </Link>
                    {/* Old submenu for non-megaMenu links (if needed) */}
                    {!link.megaMenu &&
                      (link as any).children &&
                      (() => {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        const children: Array<{ path: string; title: string }> =
                          (link as any).children;
                        return (
                          <ul
                            className={classNames(
                              styles.subMenu,
                              "absolute left-0 hidden group-hover:block bg-white shadow-xl rounded-lg py-3 min-w-[240px] transform transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 border border-gray-100 z-50"
                            )}
                          >
                            {children.map(
                              (
                                child: { path: string; title: string },
                                childIndex: number
                              ) => (
                                <li
                                  className={classNames(styles.subMenuItem)}
                                  key={childIndex}
                                >
                                  <Link
                                    href={child.path}
                                    className={classNames(
                                      styles.subMenuLink,
                                      "block px-6 py-3 text-gray-800 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600",
                                      pathname === child.path &&
                                        "text-blue-600 bg-blue-50/80 font-medium border-l-4 border-blue-600"
                                    )}
                                  >
                                    {child.title}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        );
                      })()}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CTA Buttons - Right */}
          <div className="flex items-center space-x-6">
            {/* CTA Button - Hidden on Mobile */}
            <div className="hidden md:block">
              <CustomButton
                title="Let's Talk"
                whiteButton={isTransparent && !isHovered && !isScrolled}
                onClick={() => router.push("/contact")}
              />
            </div>

            {/* Language Dropdown - Mobile Only */}
            <div className="md:hidden">
              <LanguageDropdown variant="mobile" />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={classNames(
                "hover:opacity-80 transition-colors md:hidden relative z-[1001]",
                isMobileMenuOpen
                  ? "text-gray-800"
                  : isScrolled
                  ? "text-gray-800"
                  : isTransparent && !isHovered && !isScrolled
                  ? "text-white"
                  : getTextStyle(),
                isHovered && styles.menuHovered
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={24} className={styles.cross} />
              ) : (
                <Menu size={24} className={styles.cross} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={classNames(
            styles.mobileMenu,
            isMobileMenuOpen && styles.open,
            "fixed top-0 left-0 w-full h-screen z-[1000] overflow-y-auto transition-transform duration-300 ease-in-out transform",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
            // Solid background for mobile menu for better visibility
            "bg-white"
            // Remove transparent class for solid styling
          )}
        >
          {/* Mobile Menu Header with Logo */}
          {/* <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link
              href={routeConstant.home.path}
              className={classNames(styles.logo)}
              onClick={closeMobileMenu}
            >
              <Image
                width={140}
                height={60}
                src={Images.Logo}
                alt="Core IT Ventures Logo"
                className="object-contain"
              />
            </Link>
          </div> */}

          <nav className="flex flex-col items-center space-y-6 p-6 w-full">
            {headerLinks.map((item, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => handleDropdownMouseEnter(item.title)}
                  className={classNames(
                    styles.mobileNavLink,
                    "w-full text-left text-lg md:text-xl font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-between",
                    pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-gray-900 hover:bg-gray-100/80"
                  )}
                >
                  {item.title}
                  {item.megaMenu && (
                    <span className="transform transition-transform duration-200 text-gray-800">
                      {activeDropdown === item.title ? "−" : "+"}
                    </span>
                  )}
                </button>

                {/* For megaMenu */}
                {item.megaMenu && activeDropdown === item.title && (
                  <div className="mt-2 ml-4 space-y-6 border-l-2 border-gray-100 pl-4 max-h-96 overflow-y-auto">
                    {item.megaMenu.map((section, sectionIdx) => (
                      <div key={sectionIdx} className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          {section.section}
                        </h3>
                        <div className="space-y-2">
                          {section.links.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.path}
                              className={classNames(
                                styles.mobileNavLink,
                                "block text-base md:text-lg py-2 px-4 rounded-lg transition-colors",
                                pathname === child.path
                                  ? "text-primary bg-primary/10"
                                  : "text-gray-900 hover:bg-gray-100/80"
                              )}
                              onClick={closeMobileMenu}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* For legacy children */}
                {(item as any).children && activeDropdown === item.title && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-gray-100 pl-4">
                    {(
                      (item as any).children as Array<{
                        path: string;
                        title: string;
                      }>
                    ).map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.path}
                        className={classNames(
                          styles.mobileNavLink,
                          "block text-base md:text-lg py-2 px-4 rounded-lg transition-colors",
                          pathname === child.path
                            ? "text-primary bg-primary/10"
                            : "text-gray-900 hover:bg-gray-100/80"
                        )}
                        onClick={closeMobileMenu}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Button */}
            <div className="w-full mt-8 px-4 flex justify-center">
              <CustomButton
                title="Get Started"
                whiteButton={isTransparent && isHovered}
                onClick={() => {
                  router.push("/contact");
                  closeMobileMenu();
                }}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
