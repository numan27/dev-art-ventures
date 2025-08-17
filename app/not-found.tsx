"use client";

import styles from "./not-found/style.module.scss";
import Wrapper from "components/common/wrapper";
import HeroBanner from "components/notFound/heroBanner";
import CustomSectionHeading from "components/common/customSectionHeading";
import classNames from "classnames";
import useWindowDimensions from "hooks/useWindowDimensions";
import CustomButton from "components/common/customButton";
import router from "next/router";
import NextLink from "next/link";

export default function NotFound() {
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <div className={classNames(styles.pageWrapper, "min-h-screen")}>
        <HeroBanner />
        <div
          className={classNames(
            styles.contentWrapper,
            "h-fit flex items-center justify-center w-full"
          )}
        >
          <div className="w-full">
            <CustomSectionHeading
              heading={
                <>
                  Ready to take your brand {width > 768 && <br />} to next
                  level?
                </>
              }
              description="Choose from our range of services and let us help you achieve your goals."
              centered
              isHaveCTA={true}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
