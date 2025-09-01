import type { Metadata } from "next";
import styles from "./style.module.scss";
import classNames from "classnames";
import CustomSectionHeading from "components/common/customSectionHeading";

export const metadata: Metadata = {
  title: "DevArt Ventures | Terms and Conditions",
  description:
    "Learn about DevArt Ventures terms and conditions, how we operate, and your rights as a user.",
  alternates: {
    canonical: "https://devartventures.com/terms-and-conditions",
  },
};

export default function TermsAndConditions() {
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
              badge="Terms & Conditions"
              heading="Terms and Conditions"
              description="Please read these terms and conditions carefully before using our services. By accessing or using our website and services, you agree to be bound by these terms."
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
                <h2>Terms and Conditions</h2>
                <p className={styles.lastUpdated}>Last updated: August 2025</p>
              </div>

              <div id="acceptance-of-terms" className={styles.policySection}>
                <h3>Acceptance of Terms</h3>
                <p>
                  By accessing and using DevArt Ventures' website and services,
                  you accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </div>

              <div id="services-description" className={styles.policySection}>
                <h3>Description of Services</h3>
                <p>
                  DevArt Ventures provides digital services including web
                  development, design, staff augmentation, and training
                  programs. We reserve the right to modify, suspend, or
                  discontinue any aspect of our services at any time.
                </p>
              </div>

              <div id="user-obligations" className={styles.policySection}>
                <h3>User Obligations</h3>
                <p>
                  You agree to use our services only for lawful purposes and in
                  accordance with these terms. You must not use our services to
                  transmit any material that is defamatory, offensive, or
                  otherwise objectionable.
                </p>
              </div>

              <div id="intellectual-property" className={styles.policySection}>
                <h3>Intellectual Property Rights</h3>
                <p>
                  All content, features, and functionality on our website,
                  including but not limited to text, graphics, logos, and
                  software, are owned by DevArt Ventures and are protected by
                  copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div id="payment-terms" className={styles.policySection}>
                <h3>Payment Terms</h3>
                <p>
                  Payment terms will be specified in individual project
                  agreements. All fees are due as outlined in your service
                  agreement. Late payments may result in service suspension or
                  termination.
                </p>
              </div>

              <div
                id="limitation-of-liability"
                className={styles.policySection}
              >
                <h3>Limitation of Liability</h3>
                <p>
                  DevArt Ventures shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  resulting from your use of our services. Our total liability
                  shall not exceed the amount paid for the specific service.
                </p>
              </div>

              <div id="termination" className={styles.policySection}>
                <h3>Termination</h3>
                <p>
                  Either party may terminate this agreement with written notice.
                  Upon termination, you will cease using our services, and we
                  will cease providing services to you. All provisions that
                  should survive termination shall remain in effect.
                </p>
              </div>

              <div id="governing-law" className={styles.policySection}>
                <h3>Governing Law</h3>
                <p>
                  These terms shall be governed by and construed in accordance
                  with the laws of the jurisdiction in which DevArt Ventures
                  operates. Any disputes shall be resolved through appropriate
                  legal channels.
                </p>
              </div>

              <div id="changes-to-terms" className={styles.policySection}>
                <h3>Changes to Terms</h3>
                <p>
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting. Your
                  continued use of our services constitutes acceptance of the
                  modified terms.
                </p>
              </div>

              <div id="contact" className={styles.policySection}>
                <h3>Contact Information</h3>
                <p>
                  If you have any questions about these terms and conditions,
                  please contact us at{" "}
                  <a
                    href="mailto:contact@devartventures.com"
                    className={styles.emailLink}
                  >
                    contact@devartventures.com
                  </a>
                  . We're here to help clarify any aspects of our terms.
                </p>
              </div>

              <div id="entire-agreement" className={styles.policySection}>
                <h3>Entire Agreement</h3>
                <p>
                  These terms constitute the entire agreement between you and
                  DevArt Ventures regarding the use of our services. Any prior
                  agreements or understandings are superseded by these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
