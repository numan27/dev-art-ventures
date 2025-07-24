"use client";

import classNames from "classnames";
import styles from "./style.module.scss";

const statsData = [
  { value: "150+", label: "Projects" },
  { value: "10+", label: "Years of Experience" },
  { value: "100+", label: "Happy Clients" },
  { value: "100+", label: "Happy Clients" },
];

const Stats = () => {
  return (
    <div className={classNames(styles.sectionWrapper, "")}>
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.cardContainer,
            "grid grid-cols-4 gap-4 bg-transparent"
          )}
        >
          {statsData.map((stat) => (
            <div
              className={classNames(
                styles.cardItem,
                "flex flex-col items-center justify-center gap-3"
              )}
            >
              <h2>{stat.value}</h2>
              <h5>{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
