import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Images } from "assets";
import { routeConstant } from "routes/constants";
import { footerLinks } from "utils/constants";
import useWindowDimensions from "hooks/useWindowDimensions";
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { width } = useWindowDimensions();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/devartventures/",
      label: "Facebook",
    },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    {
      icon: Linkedin,
      href: "https://pk.linkedin.com/company/devart-ventures",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.customContainer, "h-full")}>
        {/* Main Footer Content */}
        <div
          className={classNames(
            styles.contentContainer,
            "flex md:flex-row flex-col gap-8  h-full"
          )}
        >
          {/* Logo and Company Info */}
          <div
            className={classNames(
              styles.logoContainer,
              "lg:w-5/12 md:w-4/12 w-full"
            )}
          >
            <div className="flex flex-col md:justify-start justify-center gap-3">
              <Link
                className="flex items-center gap-2"
                href={routeConstant.home.path}
              >
                <Image
                  className={classNames(styles.logo)}
                  width={48}
                  height={48}
                  src={Images.Logo}
                  alt="Core IT Ventures logo"
                  priority
                />
                <span className={classNames(styles.logoText)}>
                  DevArtVentures
                </span>
              </Link>
              <p className={classNames(styles.companyDescription)}>
                Your Partner in Transforming ideas into impactful{" "}
                {width > 768 && <br />} digital solutions. <br /> <br />{" "}
                Experienced team delivering exceptional digital solutions{" "}
                {width > 768 && <br />} tailored to your brand.
              </p>
            </div>
            {/* Social Links */}
            <div className={classNames(styles.socialContainer, "")}>
              <div className={classNames(styles.socialContent)}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classNames(styles.socialItem)}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div
            className={classNames(
              styles.menuContainer,
              "lg:w-7/12 md:w-8/12 w-full"
            )}
          >
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
              {footerLinks.map((column, columnIndex) => (
                <div className="flex flex-col" key={columnIndex}>
                  <h5 className={classNames(styles.columnTitle)}>
                    {column.title}
                  </h5>

                  {/* Render links if they exist */}
                  {column.links && (
                    <ul
                      className={classNames(
                        styles.linkList,
                        "flex flex-col items-start"
                      )}
                    >
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Render contact info if it exists */}
                  {column.contactInfo && (
                    <div className={classNames(styles.contactInfo)}>
                      {column.contactInfo.email && (
                        <div className={classNames(styles.contactItem)}>
                          <span className={classNames(styles.contactLabel)}>
                            Email Address
                          </span>
                          <div className={classNames(styles.emailBox)}>
                            <a
                              href={`mailto:${column.contactInfo.email}`}
                              className={classNames(
                                styles.emailLink,
                                "flex items-center"
                              )}
                              aria-label={`Send email to ${column.contactInfo.email}`}
                            >
                              <Mail size={16} className="mr-2" />
                              {column.contactInfo.email}
                            </a>
                          </div>
                        </div>
                      )}
                      {column.contactInfo.address && (
                        <div className={classNames(styles.contactItem)}>
                          <span className={classNames(styles.contactLabel)}>
                            Address
                          </span>
                          <div className={classNames(styles.addressText)}>
                            <a
                              href={`https://maps.google.com/?q=${encodeURIComponent(
                                column.contactInfo.address.join(", ")
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={classNames(
                                // styles.addressLink,
                                "flex items-start text-nowrap"
                              )}
                              aria-label="Open address in Google Maps"
                            >
                              <MapPin
                                size={16}
                                className="mr-2 mt-1 flex-shrink-0"
                              />
                              <div className="flex flex-col">
                                {column.contactInfo?.address?.map(
                                  (line, lineIndex) => (
                                    <span key={lineIndex}>
                                      {line}
                                      {lineIndex <
                                        (column.contactInfo?.address?.length ||
                                          0) -
                                          1 && <br />}
                                    </span>
                                  )
                                )}
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={classNames(styles.bottomSection)}>
        <div className={classNames(styles.copyright)}>
          <p>© 2025 DevArtVentures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
