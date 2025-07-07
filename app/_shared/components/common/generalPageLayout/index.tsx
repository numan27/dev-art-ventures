"use client";

import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface GeneralPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function GeneralPageLayout({
  children,
  className,
}: GeneralPageLayoutProps) {
  return (
    <div className={classNames(styles.layoutWrapper, className)}>
      {children}
    </div>
  );
}
