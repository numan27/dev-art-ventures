"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "../../common/customButton";
import Header from "../../common/header";
import Topbar from "../../common/topbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      Hello WOrld
    </div>
  );
};

export default HeroBanner;
