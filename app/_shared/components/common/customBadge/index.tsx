"use client";
import classNames from "classnames";
import styles from "./style.module.scss";

interface CustomBadgeProps {
  title: string | any;
  bg?: string | any;
  textUppercase?: string | any;
  height?: number;
}

const CustomBadge = ({
  title,
  bg = "transparent",
  textUppercase = "capitalize",
  height = 29,
}: CustomBadgeProps) => {
  return (
    <div
      style={{
        backgroundColor: bg,
        height: `${height}px`,
      }}
      className={classNames(styles.badge_container)}
    >
      <span
        style={{ textTransform: textUppercase }}
        className={classNames(styles.badge_title)}
      >
        {title}
      </span>
    </div>
  );
};

export default CustomBadge;
