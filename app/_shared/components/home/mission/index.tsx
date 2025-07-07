import Image from "next/image";
import styles from "./style.module.scss";
import { Images } from "assets";
import { motion } from "framer-motion";
import SectionHeading from "../../common/sectionHeading";
import useWindowDimensions from "hooks/useWindowDimensions";

const MissionSection = () => {
  const { width } = useWindowDimensions();
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
    <section className={styles.missionSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.floatingOrb1}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={styles.floatingOrb2}
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className={styles.customContainer}>
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className={styles.missionContent}>
            <motion.div className={styles.textContent} variants={fadeInUp}>
              <SectionHeading
                subtitle="Our Mission"
                title="Empowering Businesses Through Innovation"
                align={width > 992 ? "left" : "center"}
                className={styles.missionHeading}
              />

              <div className={styles.missionQuote}>
                <p className={styles.description}>
                  We transform digital challenges into opportunities, crafting
                  innovative technology solutions that drive unprecedented
                  growth and competitive advantage for businesses in the modern
                  digital landscape.
                </p>
              </div>

              <div className={styles.missionTags}>
                <div className={styles.tag}>
                  <div className={styles.tagIcon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19 15L19.74 18.26L23 19L19.74 19.74L19 23L18.26 19.74L15 19L18.26 18.26L19 15Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5 6L5.74 9.26L9 10L5.74 10.74L5 14L4.26 10.74L1 10L4.26 9.26L5 6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span>Innovation</span>
                </div>
                <div className={styles.tag}>
                  <div className={styles.tagIcon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>Excellence</span>
                </div>
                <div className={styles.tag}>
                  <div className={styles.tagIcon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 4C18.21 4 20 5.79 20 8C20 10.21 18.21 12 16 12C13.79 12 12 10.21 12 8C12 5.79 13.79 4 16 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 4C10.21 4 12 5.79 12 8C12 10.21 10.21 12 8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 12C18.21 12 20 13.79 20 16C20 18.21 18.21 20 16 20C13.79 20 12 18.21 12 16C12 13.79 13.79 12 16 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 12C10.21 12 12 13.79 12 16C12 18.21 10.21 20 8 20C5.79 20 4 18.21 4 16C4 13.79 5.79 12 8 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span>Partnership</span>
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.imageContent} variants={fadeInUp}>
              <div className={styles.videoContainer}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.missionVideo}
                >
                  <source src="/mission.mp4" type="video/mp4" />
                </video>
                <div className={styles.videoOverlay} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
