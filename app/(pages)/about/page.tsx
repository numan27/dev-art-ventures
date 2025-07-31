import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";

export const metadata: Metadata = {
  title: "About | DevArt Ventures",
  description:
    "We are a team of designers and developers who are passionate about creating beautiful and functional designs for your business.",
  alternates: {
    canonical: "https://devartventures.com/design",
  },
};

export default function About() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <h1>About</h1>
    </div>
  );
}
