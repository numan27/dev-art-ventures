"use client";

import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface ServicesPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ServicesPageLayout({
  children,
  className,
}: ServicesPageLayoutProps) {
  return (
    <div className={classNames(styles.layoutWrapper, className)}>
      {children}
    </div>
  );
}
