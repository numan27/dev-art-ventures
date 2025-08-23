"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomBadge from "components/common/customBadge";
import CustomButton from "../customButton";
import NextLink from "next/link";

interface CustomSectionHeadingProps {
  heading: string | JSX.Element | React.ReactNode;
  description?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
  isHaveCTA?: boolean;
  ctaLink?: string;
  ctaTitle?: string;
}

const CustomSectionHeading = ({
  heading,
  description,
  badge,
  centered = false,
  className,
  isHaveCTA = false,
  ctaLink = "https://calendly.com/devartventures/30min",
  ctaTitle = "Book Free Consultation",
}: CustomSectionHeadingProps) => {
  return (
    <div
      className={classNames(
        styles.sectionHeading,
        "flex flex-col gap-4 justify-center items-center text-center relative z-10",
        centered
          ? "items-center text-center sm:w-8/12 xs:w-10/12 w-full mx-auto"
          : "md:items-start items-center text-left",
        className
      )}
    >
      {badge && (
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
        >
          <CustomBadge title={badge} />
        </div>
      )}
      <div
        className={classNames(
          styles.titleContainer,
          "flex gap-1 mb-3",
          centered ? "items-center" : "items-center"
        )}
      >
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
        >
          {heading}
        </h3>
      </div>
      {description && (
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
        >
          {description}
        </p>
      )}
      {isHaveCTA && (
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          className="flex items-center justify-center mt-4"
        >
          <NextLink href={ctaLink || "#"}>
            <CustomButton title={ctaTitle || "Click Here"} />
          </NextLink>
        </div>
      )}
    </div>
  );
};

export default CustomSectionHeading;
