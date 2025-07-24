"use client";

import React from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import AdaptiveParticles from "../../common/adaptiveParticles";
import CustomBadge from "components/common/customBadge";
import { Images } from "assets";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Davis",
    title: "Founder of Eco Goods",
    image: Images.ReviewImg1.src,
    quote:
      "Ascend has transformed how we manage our e-commerce business. It's simple, effective, and has helped us increase productivity tenfold.",
  },
  {
    id: 2,
    name: "Nina Lee",
    title: "E-commerce Manager at LunaCrafts",
    image: Images.ReviewImg2.src,
    quote:
      "The automated features alone have reduced our workload tremendously. Ascend makes everything easier and faster.",
  },
  {
    id: 3,
    name: "David Nguyen",
    title: "Founder of Urban Outfitters",
    image: Images.ReviewImg3.src,
    quote:
      "Managing multiple sales channels used to be overwhelming, but with Ascend, it's all seamless. We never miss a beat.",
  },
  {
    id: 4,
    name: "Alex Johnson",
    title: "CEO of Bright Gear",
    image: Images.ReviewImg4.src,
    quote:
      "Ascend helped us streamline our operations, from inventory tracking to customer interactions. It's a must-have for growing businesses.",
  },
  {
    id: 5,
    name: "Maya Patel",
    title: "COO at Digital Bloom",
    image: Images.ReviewImg5.src,
    quote:
      "We save hours every week thanks to Ascend's all-in-one dashboard. It keeps everything organized and running smoothly.",
  },
  {
    id: 6,
    name: "Elena Morales",
    title: "Owner of Simply Chic",
    image: Images.ReviewImg6.src,
    quote:
      "This platform provides unmatched insights into customer behavior. We've been able to make smarter decisions and boost sales effortlessly.",
  },
  {
    id: 7,
    name: "Tom Rivas",
    title: "Marketing Director at Trendly",
    image: Images.ReviewImg1.src,
    quote:
      "With Ascend, our sales have increased by 300% in just 6 months. The marketing automation features are incredible.",
  },
  {
    id: 8,
    name: "Carlos Mejia",
    title: "Head of Sales at Fresh Finds",
    image: Images.ReviewImg2.src,
    quote:
      "Ascend's marketing tools helped us reach new customers and scale our business beyond what we thought possible.",
  },
  {
    id: 9,
    name: "Lily Kim",
    title: "Head of Operations at Green Roots",
    image: Images.ReviewImg3.src,
    quote:
      "The customer support team is exceptional. They've helped us optimize every aspect of our operations.",
  },
  {
    id: 10,
    name: "Michael Chen",
    title: "Founder of TechFlow",
    image: Images.ReviewImg4.src,
    quote:
      "Ascend's analytics dashboard gives us insights we never had before. It's like having a crystal ball for our business.",
  },
  {
    id: 11,
    name: "Sophia Rodriguez",
    title: "VP of Marketing at GrowthCo",
    image: Images.ReviewImg5.src,
    quote:
      "The integration capabilities are outstanding. We connected all our tools seamlessly in just one day.",
  },
  {
    id: 12,
    name: "James Wilson",
    title: "CEO of InnovateLab",
    image: Images.ReviewImg6.src,
    quote:
      "Ascend has been the backbone of our digital transformation. We couldn't have scaled this fast without it.",
  },
];

const Testimonials = () => {
  // Create three columns with different animation directions
  const createColumn = (columnIndex: number, direction: "up" | "down") => {
    const itemsPerColumn = Math.ceil(testimonialsData.length / 3);
    const startIndex = columnIndex * itemsPerColumn;
    const columnItems = testimonialsData.slice(
      startIndex,
      startIndex + itemsPerColumn
    );

    // Duplicate items for seamless loop
    const duplicatedItems = [...columnItems, ...columnItems];

    return (
      <div
        key={columnIndex}
        className={classNames(
          styles.column,
          styles[`column${columnIndex + 1}`]
        )}
      >
        <div
          className={classNames(
            styles.columnContent,
            direction === "up" ? styles.slideUp : styles.slideDown
          )}
        >
          {duplicatedItems.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className={styles.testimonialItem}
            >
              <div className={classNames("flex items-center gap-4")}>
                <span className={classNames(styles.testimonialImage)}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </span>
                <div
                  className={classNames(
                    styles.testimonialContent,
                    "flex flex-col gap-1"
                  )}
                >
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.title}</p>
                </div>
              </div>
              <div className={classNames(styles.testimonialText)}>
                <p>"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={classNames(styles.sectionWrapper, "")}
      data-section="testimonials"
    >
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.sectionContainer,
            "relative flex items-center justify-center "
          )}
        >
          <div className={styles.particlesContainer}>
            <AdaptiveParticles section="testimonials" maxParticles={100} />
          </div>
          <div
            className={classNames(
              styles.missionText,
              "flex flex-col gap-4 justify-center items-center text-center relative z-10"
            )}
          >
            <CustomBadge title="Testimonials" />
            <h2>Client Success Stories</h2>
            <p>
              Discover what our clients say about their experiences and success
              working with us.
            </p>
          </div>
        </div>

        <div className={classNames(styles.contentContainer)}>
          <div className={styles.fadeOverlayTop} />
          <div className={styles.sliderContainer}>
            {createColumn(0, "down")}
            {createColumn(1, "up")}
            {createColumn(2, "down")}
          </div>
          <div className={styles.fadeOverlayBottom} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
