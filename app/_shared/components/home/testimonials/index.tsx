"use client";

import { Icons, Images } from "assets";
import classNames from "classnames";
import useWindowDimensions from "hooks/useWindowDimensions";
import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.scss";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../../common/sectionHeading";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface TestimonialsProps {
  isPan?: boolean;
}

const Testimonials = ({ isPan }: TestimonialsProps) => {
  const { width } = useWindowDimensions();

  const [activeIndex, setActiveIndex] = useState<number>(2);

  const testimonialsData = [
    {
      image: Images.ManagedITImage,
      text: "Michael S.",
      desc: "Core IT Ventures' Managed IT Services have streamlined our operations and reduced downtime. Their proactive approach keeps our systems running smoothly.",
      role: "Managed IT Services Client",
    },
    {
      image: Images.ITSupportImage,
      text: "Sarah L.",
      desc: "The IT Support team is always quick to respond and resolve our issues. We feel secure knowing experts are just a call away.",
      role: "IT Support Services Client",
    },
    {
      image: Images.NetworkImage,
      text: "David R.",
      desc: "Their Network & Infrastructure Services gave us a robust, scalable network. We've never had more reliable connectivity.",
      role: "Network & Infrastructure Client",
    },
    {
      image: Images.Service3,
      text: "Priya K.",
      desc: "The Web Development team delivered a beautiful, high-performance website that's helped us grow our business online.",
      role: "Web Development Client",
    },
    {
      image: Images.Service4,
      text: "Alex T.",
      desc: "Their Cybersecurity Services give us peace of mind. We know our data and systems are protected against threats.",
      role: "Cybersecurity Client",
    },
    {
      image: Images.Service5,
      text: "Emily W.",
      desc: "The UI/UX & Graphics team brought our brand to life with stunning visuals and intuitive design.",
      role: "UI/UX & Graphics Client",
    },
    {
      image: Images.Service6,
      text: "Carlos M.",
      desc: "Their SEO & Digital Marketing services have boosted our online visibility and brought in more leads than ever before.",
      role: "SEO & Digital Marketing Client",
    },
  ];

  const getSlideSize = () => {
    if (width < 768) return { active: "100%", inactive: "0%" };
    if (width >= 1400) return { active: 800, inactive: 180 };
    if (width >= 1200) return { active: 700, inactive: 160 };
    if (width >= 992) return { active: 600, inactive: 140 };
    if (width >= 768) return { active: 500, inactive: 120 };
    return { active: "100%", inactive: "50%" };
  };

  const { active, inactive } = getSlideSize();

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData?.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData?.length) % testimonialsData?.length
    );
  };

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
    <section className={classNames(styles.sectionContainer, "relative")}>
      <div className={classNames(styles.customContainer)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              subtitle="Client Success Stories"
              title="What Our Clients Say"
              align="center"
            />
          </motion.div>
        </motion.div>

        <div className={classNames(styles.sliderContainer)}>
          <div className={classNames(styles.slider)}>
            {testimonialsData?.map((item: any, index: number) => {
              let offset: any =
                (index - activeIndex + testimonialsData.length) %
                testimonialsData.length;
              if (offset > 2) offset -= testimonialsData.length;

              let translateX: any =
                //@ts-ignore
                offset * (typeof active === "number" ? active / 1.5 : "50%");
              let slideWidth =
                offset === 0
                  ? `${active}${typeof active === "number" ? "px" : ""}`
                  : `${inactive}${typeof inactive === "number" ? "px" : ""}`;
              let zIndex = offset === 0 ? 3 : 1;

              // Mobile handling - only show active slide
              const isMobile = width < 768;
              const isActive = index === activeIndex;
              const shouldShow = isMobile ? isActive : true;

              return (
                <div
                  className={classNames(styles.testimonialSlide)}
                  style={{
                    transform: isMobile
                      ? "translateX(0)"
                      : `translateX(${translateX}px)`,
                    zIndex,
                    width: isMobile ? (isActive ? "100%" : "0%") : slideWidth,
                    opacity: shouldShow ? 1 : 0,
                    display: isMobile && !isActive ? "none" : "block",
                  }}
                  key={index}
                >
                  <div
                    className={classNames(
                      index === activeIndex
                        ? styles.activeSlide
                        : styles.inactiveSlide,
                      "flex flex-col justify-between items-center text-center"
                    )}
                  >
                    <div
                      className={classNames(
                        styles.iconContainer,
                        "flex justify-center"
                      )}
                    >
                      <Icons.BigQuotesIcon />
                    </div>
                    <div
                      className={classNames(
                        index !== activeIndex && "hiddenDesc",
                        styles.desc,
                        index === activeIndex && styles.activeText
                      )}
                    >
                      <p>{item.desc}</p>
                    </div>
                    <div
                      className={classNames(
                        "flex flex-col justify-center items-center",
                        index !== activeIndex && styles.hiddenRole
                      )}
                    >
                      <div className={classNames(styles.imgContainer)}>
                        <Image
                          src={item.image}
                          height={70}
                          width={70}
                          alt="customer-img"
                        />
                      </div>
                      <p>{item.text}</p>
                      <span
                        className={classNames(
                          index !== activeIndex && "hiddenRole"
                        )}
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={classNames(
            styles.customControls,
            "flex items-center justify-center gap-4"
          )}
        >
          {/* Custom Progress Bar */}
          <div className={styles.customProgressWrapper}>
            <span className={styles.currentSlide}>{` ${
              activeIndex < 10 ? "0" : ""
            }${activeIndex}`}</span>
            <span className={styles.progressLine}>
              <span
                className={styles.progressBar}
                style={{
                  width: `${(activeIndex / testimonialsData.length) * 100}%`,
                }}
              ></span>
            </span>
            <span className={styles.totalSlides}>{`
              ${testimonialsData.length < 10 ? "0" : ""}${
              testimonialsData.length
            }`}</span>
          </div>
          <div>
            <div className={styles.customNavigation}>
              <motion.button
                className={styles.navButton}
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowLeft />
              </motion.button>
              <motion.button
                className={styles.navButton}
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowRight />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
