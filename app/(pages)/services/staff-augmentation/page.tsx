import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import StaffAugmentationContent from "components/staffAugmentation";

export const metadata: Metadata = {
  title: "Staff Augmentation | DevArt Ventures",
  description:
    "Scale your team with pre-vetted tech talent. Hire skilled developers, designers, and engineers on-demand.",
  alternates: {
    canonical: "https://devartventures.com/staff-augmentation",
  },
};

export default function StaffAugmentation() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <StaffAugmentationContent />
    </div>
  );
}
