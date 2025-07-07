import classNames from "classnames";
import React from "react";
import { Swiper as SwiperClass } from "swiper";
import styles from "./style.module.scss";
import { Icons } from "assets";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SwiperNavButtonsProps {
  nextSlide: () => void;
  prevSlide: () => void;
}

export const SwiperNavButtonsRounded = ({
  nextSlide,
  prevSlide,
}: SwiperNavButtonsProps) => {
  return (
    <div className={styles.customNavigation}>
      <button
        className={classNames(styles.swiperButton, styles.prevButton)}
        onClick={prevSlide}
      >
        <ArrowLeft />
      </button>
      <button
        className={classNames(styles.swiperButton, styles.nextButton)}
        onClick={nextSlide}
      >
        <ArrowRight />
      </button>
    </div>
  );
};
