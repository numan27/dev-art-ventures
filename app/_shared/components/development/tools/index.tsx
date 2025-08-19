"use client";
import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const toolsIcons = [
  "/tools/react.png",
  "/tools/next.png",
  "/tools/typescript.png",
  "/tools/html.png",
  "/tools/css.png",
  "/tools/node.png",
  "/tools/tailwind.png",
  "/tools/angular.png",
  "/tools/php.png",
  "/tools/mongo-db.png",
  "/tools/git.png",
  "/tools/git-hub.png",
  "/tools/vs-code.png",
  "/tools/vercel.png",
  "/tools/nest.png",
  "/tools/nuxt.png",
  "/tools/vite.png",
  "/tools/svelte.png",
  "/tools/wordpress.png",
  "/tools/jira.png",
  "/tools/git-lab.png",
];

const Tools = () => {
  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Technologies"
          heading="Modern Tech Stack for Excellence"
          description="We leverage cutting-edge technologies and frameworks to build robust, scalable, and future-proof applications that drive business growth."
          centered={true}
          maxParticles={300}
          section="testimonials"
          backgroundImage={Images.TestimonialsSectionBg.src}
        />
        <div className={classNames(styles.contentContainer)}>
          <div className={classNames(styles.sliderContainer)}>
            <div className={classNames(styles.loopSlider)}>
              <div
                className={classNames(styles.inner, "flex items-center gap-2")}
              >
                {/* Render the tools three times for seamless looping */}
                {toolsIcons.map((icon, index) => (
                  <span key={`original-${index}`} className={styles.sliderItem}>
                    <img
                      src={icon}
                      alt={`Development tool ${index + 1}`}
                      style={{ objectFit: "contain" }}
                    />
                  </span>
                ))}
                {/* Second set for seamless looping */}
                {toolsIcons.map((icon, index) => (
                  <span
                    key={`duplicate-${index}`}
                    className={styles.sliderItem}
                  >
                    <img
                      src={icon}
                      alt={`Development tool ${index + 1}`}
                      style={{ objectFit: "contain" }}
                    />
                  </span>
                ))}
                {/* Third set for seamless looping */}
                {toolsIcons.map((icon, index) => (
                  <span
                    key={`triplicate-${index}`}
                    className={styles.sliderItem}
                  >
                    <img
                      src={icon}
                      alt={`Development tool ${index + 1}`}
                      style={{ objectFit: "contain" }}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Tools);
