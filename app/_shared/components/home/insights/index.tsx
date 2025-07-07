"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import SectionHeading from "../../common/sectionHeading";
import { motion } from "framer-motion";

const Insights = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer)}>
        <motion.div
          className={classNames(styles.content)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <SectionHeading
            subtitle="Why Choose Us"
            title="Why Choose CoreIT Ventures?"
            align="center"
          />

          {/* Information & Insights Section */}
          <motion.div className={styles.insightsSection} variants={fadeInUp}>
            <div className={styles.insightsGrid}>
              <motion.div
                className={styles.insightCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.insightIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className={styles.insightTitle}>Proven Excellence</h4>
                <p className={styles.insightDescription}>
                  Over 150+ successful projects delivered with 98% client
                  satisfaction rate
                </p>
                <div className={styles.insightStats}>
                  <span className={styles.statItem}>150+ Projects</span>
                  <span className={styles.statItem}>98% Success Rate</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.insightCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.insightIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h4 className={styles.insightTitle}>Lightning Fast</h4>
                <p className={styles.insightDescription}>
                  Rapid development cycles with 40% faster delivery compared to
                  industry average
                </p>
                <div className={styles.insightStats}>
                  <span className={styles.statItem}>40% Faster</span>
                  <span className={styles.statItem}>Agile Delivery</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.insightCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.insightIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4 className={styles.insightTitle}>Enterprise Security</h4>
                <p className={styles.insightDescription}>
                  Bank-level security protocols with 99.9% uptime guarantee and
                  24/7 monitoring
                </p>
                <div className={styles.insightStats}>
                  <span className={styles.statItem}>99.9% Uptime</span>
                  <span className={styles.statItem}>24/7 Support</span>
                </div>
              </motion.div>

              <motion.div
                className={styles.insightCard}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.insightIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className={styles.insightTitle}>Expert Team</h4>
                <p className={styles.insightDescription}>
                  Certified professionals with 10+ years average experience
                  across all technologies
                </p>
                <div className={styles.insightStats}>
                  <span className={styles.statItem}>10+ Years Avg</span>
                  <span className={styles.statItem}>Certified Pros</span>
                </div>
              </motion.div>
            </div>

            {/* Vibrant CTAs Section */}
            <motion.div className={styles.ctaSection} variants={fadeInUp}>
              <div className={styles.ctaContent}>
                <div className={styles.ctaLeft}>
                  <h3 className={styles.ctaTitle}>
                    Ready to Transform Your Business?
                  </h3>
                  <p className={styles.ctaDescription}>
                    Choose the path that best fits your needs and let's create
                    something extraordinary together.
                  </p>
                  <div className={styles.ctaBenefits}>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>🚀</span>
                      <span>Free Strategy Session</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>💡</span>
                      <span>Custom Solution Design</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>⚡</span>
                      <span>Rapid Development</span>
                    </div>
                  </div>
                </div>

                <div className={styles.ctaRight}>
                  <div className={styles.ctaCards}>
                    <motion.div
                      className={styles.ctaCard}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={styles.ctaCardIcon}>💼</div>
                      <h4>Start a Project</h4>
                      <p>
                        Ready to build something amazing? Let's discuss your
                        project requirements.
                      </p>
                      <div className="flex justify-center">
                        <CustomButton
                          title="Get Started"
                          className={styles.ctaButton}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className={styles.ctaCard}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={styles.ctaCardIcon}>📞</div>
                      <h4>Schedule a Call</h4>
                      <p>
                        Have questions? Let's have a conversation about your
                        business needs.
                      </p>
                      <div className="flex justify-center">
                        <CustomButton
                          title="Book a Call"
                          className={styles.ctaButtonSecondary}
                        />
                      </div>
                    </motion.div>

                    {/* <motion.div
                      className={styles.ctaCard}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={styles.ctaCardIcon}>📋</div>
                      <h4></h4>
                      <p>
                        Explore our latest projects and see what we can create
                        for you.
                      </p>
                      <div className="flex justify-center">
                        <CustomButton
                          title="View Work"
                          className={styles.ctaButtonTertiary}
                        />
                      </div>
                    </motion.div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
