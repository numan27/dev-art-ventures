import Link from "next/link";
import styles from "./style.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Icons, Images } from "assets";
import { routeConstant } from "routes/constants";
import useWindowDimensions from "hooks/useWindowDimensions";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const { width } = useWindowDimensions();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.customContainer, "h-full")}>
        {/* Main Footer Content */}
        <div
          className={classNames(
            styles.contentContainer,
            "grid grid-cols-12 lg:gap-8 md:gap-6 gap-8 h-full"
          )}
        >
          {/* Logo and Company Info */}
          <div
            className={classNames(
              styles.logoContainer,
              "lg:col-span-4 md:col-span-6 col-span-12"
            )}
          >
            <div className="flex flex-col h-full md:justify-start justify-center gap-3">
              <Image
                data-aos={width > 768 && "flip-right"}
                className={classNames(styles.logo)}
                width={150}
                height={150}
                src={Images.LogoWhite}
                alt="Core IT Ventures logo"
                priority
              />
              <p className={classNames(styles.companyDescription)}>
                Empowering businesses with innovative technology solutions. We
                transform ideas into digital reality with cutting-edge
                development services.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div
            className={classNames(
              styles.menuContainer,
              "lg:col-span-5 md:col-span-6 col-span-12"
            )}
          >
            <div className="grid grid-cols-3 gap-8"></div>
          </div>

          {/* Social Links */}
          <div
            className={classNames(
              styles.socialContainer,
              "lg:col-span-3 md:col-span-12 col-span-12"
            )}
          >
            <div className="flex flex-col h-full">
              <h3
                className={classNames(
                  styles.socialHeading,
                  "md:text-left text-center"
                )}
              >
                Connect With Us
              </h3>
              <p className={classNames(styles.socialDescription)}>
                Follow us on social media for the latest updates, insights, and
                industry news.
              </p>
              <div
                className={classNames(
                  styles.socialContent,
                  "md:justify-start justify-center"
                )}
              >
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
        </div>

        {/* Contact Details Section */}
        <div className={classNames(styles.contactSection)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className={classNames(styles.contactIcon)}>
                <Phone size={20} />
              </div>
              <div className="flex flex-col">
                <span className={classNames(styles.contactLabel)}>Phone</span>
                <span className={classNames(styles.contactValue)}>
                  +1 (713) 483-4953
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={classNames(styles.contactIcon)}>
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className={classNames(styles.contactLabel)}>Email</span>
                <span className={classNames(styles.contactValue)}>
                  info@coreitventures.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={classNames(styles.contactIcon)}>
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className={classNames(styles.contactLabel)}>
                  Location
                </span>
                <span className={classNames(styles.contactValue)}>
                  Houston, TX, United States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={classNames(styles.bottomSection)}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Copyright */}
            <div className={classNames(styles.copyright)}>
              <p>© 2025 Core IT Ventures Inc. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className={classNames(styles.legalLinks)}>
              <Link href={routeConstant.termsAndConditions.path}>
                Terms & Conditions
              </Link>
              <Link href={routeConstant.privacyPolicy.path}>
                Privacy Policy
              </Link>
              <Link href="">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
