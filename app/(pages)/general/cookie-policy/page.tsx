import type { Metadata } from "next";
import styles from "./style.module.scss";
import classNames from "classnames";
import SectionHeading from "components/common/sectionHeading";

export const metadata: Metadata = {
  title: "Core IT Ventures | Policies",
  description:
    "Learn about Core IT Ventures policies, terms of service, privacy policy, and other important legal information.",
  alternates: {
    canonical: "https://coreitventures.com/policies",
  },
};

export default function CookiePolicy() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.customContainer}>
          <div className={styles.heroContent}>
            <SectionHeading
              subtitle="Cookie Policy"
              title="How We Use Cookies"
              align="center"
              className={styles.heroHeading}
              whiteText
            />
            <p className={styles.heroDescription}>
              This page explains how Core IT Ventures uses cookies and similar
              technologies to improve your experience on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Main Content */}
      <section className={styles.overviewSection}>
        <div className={styles.customContainer}>
          <div className={styles.overviewContent}>
            <div className={classNames(styles.overviewText, styles.whiteText)}>
              <h3>Cookie Policy</h3>
              <p className={styles.lastUpdated}>Last updated: December 2024</p>
              <h4>What Are Cookies?</h4>
              <p>
                Cookies are small text files stored on your device by your web
                browser. They help us enhance your experience and analyze site
                usage.
              </p>
              <h4>How We Use Cookies</h4>
              <p>
                We use cookies to remember your preferences, understand how you
                use our site, and improve our services. Some cookies are
                essential for the website to function properly.
              </p>
              <h4>Types of Cookies We Use</h4>
              <p>
                <strong>Essential Cookies:</strong> Necessary for the operation
                of our website.
                <br />
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our site.
                <br />
                <strong>Preference Cookies:</strong> Remember your preferences
                and settings.
              </p>
              <h4>Managing Cookies</h4>
              <p>
                You can control and delete cookies through your browser
                settings. Please note that disabling cookies may affect your
                experience on our website.
              </p>
              <h4>Third-Party Cookies</h4>
              <p>
                Some third-party services that appear on our site may use their
                own cookies. We do not control these cookies.
              </p>
              <h4>Changes to This Policy</h4>
              <p>
                We may update this cookie policy from time to time. Please
                review this page periodically for any changes.
              </p>
              <h4>Contact Us</h4>
              <p>
                If you have any questions about our use of cookies, please
                contact us at{" "}
                <a href="mailto:privacy@coreitventures.com">
                  privacy@coreitventures.com
                </a>
                .
              </p>
            </div>
            <div className={styles.overviewImage}>
              <div className={styles.imagePlaceholder}>
                <span>Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
