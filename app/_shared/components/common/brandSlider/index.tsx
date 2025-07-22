import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const socialIcons = [
  // "/advertisement-brand-1.png",
  // "/advertisement-brand-2.png",
  // "/advertisement-brand-3.png",
  // "/advertisement-brand-4.png",
  // "/advertisement-brand-5.png",
  // "/advertisement-brand-6.png",
  // "/advertisement-brand-7.png",
  // "/advertisement-brand-8.png",
  "/social-brand-1.png",
  "/social-brand-2.png",
  "/social-brand-3.png",
  "/social-brand-4.png",
  "/social-brand-5.png",
  "/social-brand-6.png",
  "/social-brand-7.png",
];

const BrandSlider = () => {
  return (
    <section className={classNames(styles.brands__section)}>
      <div className={styles.brands__fadeOverlay} />
      <div className={classNames(styles.brands__sectionContent)}>
        <div data-aos="fade-up" className={classNames(styles.loopSlider)}>
          <div className={classNames(styles.inner, "flex items-center gap-2")}>
            {/* Render the PNGs once */}
            {socialIcons.map((icon, index) => (
              <span
                key={`original-${index}`}
                className={styles.techIconWrapper}
              >
                <img
                  src={icon}
                  alt={`Social brand ${index + 1}`}
                  width={64}
                  height={64}
                  style={{ objectFit: "contain" }}
                />
              </span>
            ))}
            {/* Render the PNGs again for seamless looping */}
            {socialIcons.map((icon, index) => (
              <span
                key={`duplicate-${index}`}
                className={styles.techIconWrapper}
              >
                <img
                  src={icon}
                  alt={`Social brand ${index + 1}`}
                  width={64}
                  height={64}
                  style={{ objectFit: "contain" }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BrandSlider);
