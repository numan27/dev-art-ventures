"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../customButton";

interface CustomCardProps {
  icon?: string;
  iconNode?: React.ReactNode;
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
  button?: boolean;
  buttonText?: string;
  height?: string;
}

const CustomCard = ({
  icon,
  iconNode,
  title,
  description,
  centered = false,
  className,
  button = false,
  buttonText = "Learn More",
  height = "min-h-[220px]",
}: CustomCardProps) => {
  return (
    <div
      className={classNames(
        styles.cardItem,
        "flex flex-col",
        centered ? "items-center" : "items-start",
        className
      )}
      style={{ minHeight: height }}
    >
      {iconNode ? (
        <div className={styles.cardIcon}>{iconNode}</div>
      ) : icon ? (
        <img src={icon} alt={title} className={styles.cardIcon} />
      ) : null}
      <h4 className={styles.cardTitle}>{title}</h4>
      <p
        className={classNames(
          styles.cardDescription,
          centered ? "text-center" : "text-left"
        )}
      >
        {description}
      </p>
      {button && <CustomButton title={buttonText} />}
    </div>
  );
};

export default CustomCard;
