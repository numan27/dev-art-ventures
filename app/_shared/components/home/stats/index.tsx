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
            "grid sm:grid-cols-2 grid-cols-1 md:gap-4 sm:gap-3 gap-2 bg-transparent"
          )}
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
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
