import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const socialIcons = [
  // Major Brand Logos (High Priority)
  "/brands/adobe-xs.png",
  "/brands/aws.png",
  "/brands/figma.png",
  "/brands/framer.png",
  "/brands/zoom.png",
  "/brands/google.png",

  // Major Development Tools (Medium Priority)
  "/tools/react.png",
  "/tools/next.png",
  "/tools/nest.png",
  "/tools/angular.png",
  "/tools/typescript.png",
  "/tools/mongo-db.png",
  "/tools/wordpress.png",
  "/tools/vs-code.png",
  "/tools/git.png",
  "/tools/git-hub.png",
  "/tools/vite.png",
  "/tools/vercel.png",
  "/tools/tailwind.png",

  // Other Development Tools (Lower Priority)
  "/tools/css.png",
  "/tools/git-lab.png",
  "/tools/html.png",
  "/tools/jira.png",
  "/tools/nuxt.png",
  "/tools/php.png",
  "/tools/svelte.png",
];

const BrandSlider = () => {
  return (
    <section className={classNames(styles.brands__section)}>
      <div className={styles.brands__container}>
        <div className={styles.brands__fadeOverlay} />
        <div
          className={classNames(
            styles.brands__sectionContent,
            styles.customContainer
          )}
        >
          <div className={classNames(styles.loopSlider)}>
            <div
              className={classNames(styles.inner, "flex items-center gap-2")}
            >
              {/* Render the PNGs three times for seamless looping */}
              {socialIcons.map((icon, index) => (
                <span
                  key={`original-${index}`}
                  className={styles.techIconWrapper}
                >
                  <img
                    src={icon}
                    alt={`Social brand ${index + 1}`}
                    className={styles.brandImage}
                    style={{ objectFit: "contain" }}
                  />
                </span>
              ))}
              {/* Second set for seamless looping */}
              {socialIcons.map((icon, index) => (
                <span
                  key={`duplicate-${index}`}
                  className={styles.techIconWrapper}
                >
                  <img
                    src={icon}
                    alt={`Social brand ${index + 1}`}
                    className={styles.brandImage}
                    style={{ objectFit: "contain" }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BrandSlider);
