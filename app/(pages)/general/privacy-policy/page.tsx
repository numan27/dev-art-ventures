import type { Metadata } from "next";
import styles from "./style.module.scss";
import classNames from "classnames";
import CustomSectionHeading from "components/common/customSectionHeading";

export const metadata: Metadata = {
  title: "DevArt Ventures | Privacy Policy",
  description:
    "Learn about DevArt Ventures privacy policy, data protection practices, and how we safeguard your personal information.",
  alternates: {
    canonical: "https://devartventures.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div
          className={classNames(
            styles.customContainer,
            "flex items-center h-full"
          )}
        >
          <div className={styles.heroContent}>
            <CustomSectionHeading
              centered
              badge="Privacy & Data Protection"
              heading="Your Privacy Matters to Us"
              description="At DevArt Ventures, we are committed to protecting your privacy and ensuring transparency in how we handle your personal information. Our comprehensive privacy policy outlines how we collect, use, and safeguard your data."
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.customContainer}>
        <div className={styles.contentSection}>
          <div className={classNames(styles.contentWrapper)}>
            <div className={classNames(styles.mainContent, "")}>
              <div className={styles.sectionHeader}>
                <h2>Privacy Policy</h2>
                <p className={styles.lastUpdated}>
                  Last updated: December 2024
                </p>
              </div>

              <div id="information-collection" className={styles.policySection}>
                <h3>Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, such as
                  when you create an account, contact us, or use our services.
                  This may include your name, email address, phone number,
                  company information, project requirements, and other contact
                  details necessary to provide our services.
                </p>
              </div>

              <div id="data-usage" className={styles.policySection}>
                <h3>How We Use Your Information</h3>
                <p>
                  We use the information we collect to provide, maintain, and
                  improve our services, communicate with you about projects and
                  updates, ensure the security of our platform, and deliver
                  personalized digital solutions tailored to your business
                  needs.
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>Information Sharing</h3>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy. We may share information with
                  trusted partners who assist us in operating our website and
                  providing services, always under strict confidentiality
                  agreements.
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>Cookies & Tracking Technologies</h3>
                <p>
                  We may use cookies and similar technologies to enhance your
                  experience, analyze usage patterns, and deliver relevant
                  content. These technologies help us understand how you
                  interact with our website and improve our services. You can
                  control cookies through your browser settings.
                </p>
              </div>

              <div id="data-security" className={styles.policySection}>
                <h3>Data Security</h3>
                <p>
                  We implement industry-standard security measures to protect
                  your data from unauthorized access, alteration, disclosure, or
                  destruction. Our security protocols include encryption, secure
                  servers, regular security audits, and strict access controls
                  for all team members.
                </p>
              </div>

              <div id="your-rights" className={styles.policySection}>
                <h3>Your Rights</h3>
                <p>
                  You have the right to access, update, or delete your personal
                  information. You can also request information about how we
                  process your data and withdraw consent at any time. To
                  exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:contact@devartventures.com"
                    className={styles.emailLink}
                  >
                    contact@devartventures.com
                  </a>
                  .
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>International Data Transfers</h3>
                <p>
                  As a global company providing digital services, your
                  information may be transferred to and processed in countries
                  other than your own. We ensure that all such transfers comply
                  with applicable data protection laws and maintain the same
                  level of protection for your data.
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>Changes to This Policy</h3>
                <p>
                  We may update this privacy policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  other factors. We encourage you to review this page
                  periodically for any changes. Continued use of our services
                  constitutes acceptance of updated policies.
                </p>
              </div>

              <div id="contact" className={styles.policySection}>
                <h3>Contact Us</h3>
                <p>
                  If you have any questions or concerns about our privacy
                  practices, or if you need to exercise your data rights, please
                  contact us at{" "}
                  <a
                    href="mailto:contact@devartventures.com"
                    className={styles.emailLink}
                  >
                    contact@devartventures.com
                  </a>
                  . We're committed to addressing your privacy concerns promptly
                  and transparently.
                </p>
              </div>

              <div className={styles.policySection}>
                <h3>Data Protection</h3>
                <p>
                  We follow industry best practices and comply with
                  international data protection standards to ensure your
                  information remains secure and confidential. Our commitment to
                  data protection includes regular security audits, employee
                  training, and adherence to global privacy regulations such as
                  GDPR, CCPA, and other applicable frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
