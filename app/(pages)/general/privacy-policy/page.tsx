import type { Metadata } from "next";
import styles from "./style.module.scss";
import classNames from "classnames";
import SectionHeading from "components/common/sectionHeading";

export const metadata: Metadata = {
  title: "DevArt Ventures | Policies",
  description:
    "Learn about DevArt Ventures policies, terms of service, privacy policy, and other important legal information.",
  alternates: {
    canonical: "https://devartventures.com/policies",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.customContainer}>
          <div className={styles.heroContent}>
            <SectionHeading
              subtitle="Privacy Policy"
              title="Your Privacy Matters to Us"
              align="center"
              className={styles.heroHeading}
              whiteText
            />
            <p className={styles.heroDescription}>
              At Core IT Ventures, we are committed to protecting your privacy
              and ensuring transparency in how we handle your personal
              information. Please read our privacy policy below to understand
              how your data is collected, used, and safeguarded.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Main Content */}
      <section className={styles.overviewSection}>
        <div className={styles.customContainer}>
          <div className={styles.overviewContent}>
            <div className={classNames(styles.overviewText, styles.whiteText)}>
              <h3>Privacy Policy</h3>
              <p className={styles.lastUpdated}>Last updated: December 2024</p>
              <h4>Information We Collect</h4>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, contact us, or use our services. This may
                include your name, email address, phone number, and other
                contact information.
              </p>
              <h4>How We Use Your Information</h4>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, communicate with you, and ensure the
                security of our platform.
              </p>
              <h4>Information Sharing</h4>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy.
              </p>
              <h4>Cookies & Tracking Technologies</h4>
              <p>
                We may use cookies and similar technologies to enhance your
                experience, analyze usage, and deliver relevant content. You can
                control cookies through your browser settings.
              </p>
              <h4>Data Security</h4>
              <p>
                We implement industry-standard security measures to protect your
                data from unauthorized access, alteration, disclosure, or
                destruction.
              </p>
              <h4>Your Rights</h4>
              <p>
                You have the right to access, update, or delete your personal
                information. To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@coreitventures.com">
                  privacy@coreitventures.com
                </a>
                .
              </p>
              <h4>Changes to This Policy</h4>
              <p>
                We may update this privacy policy from time to time. We
                encourage you to review this page periodically for any changes.
              </p>
              <h4>Contact Us</h4>
              <p>
                If you have any questions or concerns about our privacy
                practices, please contact us at{" "}
                <a href="mailto:privacy@coreitventures.com">
                  privacy@coreitventures.com
                </a>
                .
              </p>
            </div>
            <div className={styles.overviewImage}>
              <div className={styles.imagePlaceholder}>
                <span>Privacy & Data Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
