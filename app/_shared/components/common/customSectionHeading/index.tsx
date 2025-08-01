"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import useWindowDimensions from "hooks/useWindowDimensions";
import CustomBadge from "components/common/customBadge";

interface CustomSectionHeadingProps {
  heading: string;
  description?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

const CustomSectionHeading = ({
  heading,
  description,
  badge,
  centered = false,
  className,
}: CustomSectionHeadingProps) => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

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
      <span {...(isDesktop && { "data-aos": "fade-up" })}>
        {badge && <CustomBadge title={badge} />}
      </span>
      <div
        className={classNames(
          styles.titleContainer,
          "flex gap-1 mb-3",
          centered ? "items-center" : "items-center"
        )}
      >
        <h3 {...(isDesktop && { "data-aos": "fade-up" })}>{heading}</h3>
      </div>
      {description && (
        <p {...(isDesktop && { "data-aos": "fade-up" })}>{description}</p>
      )}
    </div>
  );
};

export default CustomSectionHeading;
