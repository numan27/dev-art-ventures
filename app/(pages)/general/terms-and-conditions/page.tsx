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

export default function TermsAndConditions() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.customContainer}>
          <div className={styles.heroContent}>
            <SectionHeading
              subtitle="Terms & Conditions"
              title="Our Service Agreement"
              align="center"
              className={styles.heroHeading}
              whiteText
            />
            <p className={styles.heroDescription}>
              Please read our terms and conditions carefully before using our
              services. By accessing or using our website, you agree to be bound
              by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Main Content */}
      <section className={styles.overviewSection}>
        <div className={styles.customContainer}>
          <div className={styles.overviewContent}>
            <div className={classNames(styles.overviewText, styles.whiteText)}>
              <h3>Terms & Conditions</h3>
              <p className={styles.lastUpdated}>Last updated: December 2024</p>
              <h4>Acceptance of Terms</h4>
              <p>
                By accessing and using our services, you accept and agree to be
                bound by the terms and provisions of this agreement.
              </p>
              <h4>Use License</h4>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on Core IT Ventures's website for personal,
                non-commercial transitory viewing only.
              </p>
              <h4>Disclaimer</h4>
              <p>
                The materials on Core IT Ventures's website are provided on an
                'as is' basis. Core IT Ventures makes no warranties, expressed
                or implied, and hereby disclaims and negates all other
                warranties including without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation
                of rights.
              </p>
              <h4>Limitations</h4>
              <p>
                In no event shall Core IT Ventures or its suppliers be liable
                for any damages arising out of the use or inability to use the
                materials on the website.
              </p>
              <h4>Revisions and Errata</h4>
              <p>
                The materials appearing on Core IT Ventures's website could
                include technical, typographical, or photographic errors. Core
                IT Ventures does not warrant that any of the materials are
                accurate, complete, or current.
              </p>
              <h4>Links</h4>
              <p>
                Core IT Ventures has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site.
              </p>
              <h4>Modifications</h4>
              <p>
                Core IT Ventures may revise these terms of service at any time
                without notice. By using this website you are agreeing to be
                bound by the then current version of these terms of service.
              </p>
              <h4>Governing Law</h4>
              <p>
                Any claim relating to Core IT Ventures's website shall be
                governed by the laws of the company's home jurisdiction without
                regard to its conflict of law provisions.
              </p>
              <h4>Contact Us</h4>
              <p>
                If you have any questions about these terms, please contact us
                at{" "}
                <a href="mailto:privacy@coreitventures.com">
                  privacy@coreitventures.com
                </a>
                .
              </p>
            </div>
            <div className={styles.overviewImage}>
              <div className={styles.imagePlaceholder}>
                <span>Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
