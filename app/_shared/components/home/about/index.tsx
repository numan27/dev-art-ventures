"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import SectionHeading from "../../common/sectionHeading";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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

  const features = [
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions",
      icon: "💡",
    },
    {
      title: "Excellence",
      description: "Delivering quality in every project",
      icon: "✨",
    },
    {
      title: "Collaboration",
      description: "Working together to achieve greatness",
      icon: "🤝",
    },
  ];

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
            subtitle="Who We Are"
            title="About CoreIT Ventures"
            align="center"
          />

          <div className={styles.mainContent}>
            <motion.div className={styles.textContent} variants={fadeInUp}>
              <p className={styles.description}>
                We are a forward-thinking technology company dedicated to
                transforming ideas into innovative digital solutions. With our
                expertise in cutting-edge technologies and commitment to
                excellence, we help businesses thrive in the digital age.
              </p>

              <motion.div
                className={classNames(
                  styles.featuresGrid,
                  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:gap-7 lg:gap-5 gap-4"
                )}
                variants={fadeInUp}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={styles.featureCard}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className={styles.ctaContainer} variants={fadeInUp}>
                <CustomButton
                  title="Learn More About Us"
                  onClick={() => (window.location.href = "/about")}
                  containerStyle="bg-blue maxHeighted_btn"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
