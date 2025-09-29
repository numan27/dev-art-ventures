import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const socialIcons = [
  // "/brands/adobe-xs.png",
  // "/brands/aws.svg",
  // "/brands/figma.png",
  // "/brands/zoom.svg",
  // "/brands/google.svg",
  // "/brands/framer.png",
  // "/tools/next.png",
  // "/tools/nest.png",
  // "/tools/angular.png",
  // "/tools/react.png",
  // "/tools/typescript.png",
  // "/tools/mongo-db.png",
  // "/tools/wordpress.png",
  // "/tools/vs-code.png",
  // "/tools/git.png",
  // "/tools/git-hub.png",
  // "/tools/vite.png",
  // "/tools/vercel.png",
  // "/tools/tailwind.png",
  // "/tools/css.png",
  // "/tools/git-lab.png",
  // "/tools/html.png",
  // "/tools/jira.png",
  // "/tools/nuxt.png",
  // "/brands/cisco.svg",
  // "/tools/php.png",
  // "/tools/svelte.png",
  "/brands/cridio-studio.png",
  "/brands/core-it-ventures.png",
  "/brands/ace-homes.png",
  "/brands/92-startups.png",
  "/brands/zemotify.png",
  "/brands/logo-3.png",
  "/brands/wp-vendor.png",
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
            <div className={classNames(styles.inner)}>
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
                  style={{ marginLeft: index === 0 ? "-8px" : undefined }}
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
