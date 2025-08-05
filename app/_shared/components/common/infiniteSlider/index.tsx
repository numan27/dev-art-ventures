import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

interface ImageItem {
  src: string;
  alt: string;
}

interface InfiniteSliderProps {
  images: ImageItem[];
  className?: string;
  animationDuration?: number;
  imageHeight?: number;
  imageWidth?: number;
  gap?: number;
  dualRow?: boolean;
  secondRowImages?: ImageItem[];
}

const InfiniteSlider = ({
  images,
  className,
  animationDuration = 60,
  imageHeight = 320,
  imageWidth = 200,
  gap = 8,
  dualRow = false,
  secondRowImages,
}: InfiniteSliderProps) => {
  const renderSliderRow = (
    rowImages: ImageItem[],
    isReverse: boolean = false
  ) => (
    <div
      className={classNames(styles.inner, "flex items-center sm:gap-2", {
        [styles.reverseAnimation]: isReverse,
      })}
      style={{
        animationDuration: `${animationDuration}s`,
        gap: `${gap}px`,
      }}
    >
      {/* First set for seamless looping */}
      {rowImages.map((image, index) => (
        <span key={`first-${index}`} className={styles.techIconWrapper}>
          <img
            src={image.src}
            alt={image.alt}
            className={styles.brandImage}
            style={{
              objectFit: "contain",
              height: `${imageHeight}px`,
              width: `${imageWidth}px`,
            }}
          />
        </span>
      ))}
      {/* Second set for seamless looping */}
      {rowImages.map((image, index) => (
        <span key={`second-${index}`} className={styles.techIconWrapper}>
          <img
            src={image.src}
            alt={image.alt}
            className={styles.brandImage}
            style={{
              objectFit: "contain",
              height: `${imageHeight}px`,
              width: `${imageWidth}px`,
            }}
          />
        </span>
      ))}
      {/* Third set for seamless looping */}
      {rowImages.map((image, index) => (
        <span key={`third-${index}`} className={styles.techIconWrapper}>
          <img
            src={image.src}
            alt={image.alt}
            className={styles.brandImage}
            style={{
              objectFit: "contain",
              height: `${imageHeight}px`,
              width: `${imageWidth}px`,
            }}
          />
        </span>
      ))}
    </div>
  );

  return (
    <section className={classNames(styles.brands__section, className)}>
      <div className={styles.brands__container}>
        <div className={styles.brands__fadeOverlay} />
        <div
          className={classNames(
            styles.brands__sectionContent,
            styles.customContainer
          )}
        >
          <div data-aos="fade-up" className={classNames(styles.loopSlider)}>
            {renderSliderRow(images, false)}
          </div>
          {dualRow && secondRowImages && (
            <div
              data-aos="fade-up"
              className={classNames(styles.loopSlider, styles.secondRow)}
            >
              {renderSliderRow(secondRowImages, true)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(InfiniteSlider);
