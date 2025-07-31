import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";

const socialIcons = [
  Images.DesignSlider1,
  Images.DesignSlider2,
  Images.DesignSlider3,
  Images.DesignSlider4,
  Images.DesignSlider5,
  Images.DesignSlider6,
  Images.DesignSlider7,
  Images.DesignSlider8,
  Images.DesignSlider9,
];

const PortfolioSlider = () => {
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
          <div data-aos="fade-up" className={classNames(styles.loopSlider)}>
            <div
              className={classNames(styles.inner, "flex items-center sm:gap-2")}
            >
              {/* First set for seamless looping */}
              {socialIcons.map((icon, index) => (
                <span key={`first-${index}`} className={styles.techIconWrapper}>
                  <img
                    src={icon.src}
                    alt={`Social brand ${index + 1}`}
                    className={styles.brandImage}
                    style={{ objectFit: "contain" }}
                  />
                </span>
              ))}
              {/* Second set for seamless looping */}
              {socialIcons.map((icon, index) => (
                <span
                  key={`second-${index}`}
                  className={styles.techIconWrapper}
                >
                  <img
                    src={icon.src}
                    alt={`Social brand ${index + 1}`}
                    className={styles.brandImage}
                    style={{ objectFit: "contain" }}
                  />
                </span>
              ))}
              {/* Third set for seamless looping */}
              {socialIcons.map((icon, index) => (
                <span key={`third-${index}`} className={styles.techIconWrapper}>
                  <img
                    src={icon.src}
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

export default memo(PortfolioSlider);
