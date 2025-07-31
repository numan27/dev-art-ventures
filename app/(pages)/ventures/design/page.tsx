import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import HeroBanner from "components/common/generalHeroBanner";
import PortfolioSlider from "components/design/portfolioSlider";
import Features from "components/design/features";

export const metadata: Metadata = {
  title: "UI/UX and Graphic Design | DevArt Ventures",
  description:
    "We offer UI/UX and Graphic Design services to businesses. We create beautiful and functional designs for your business.",
  alternates: {
    canonical: "https://devartventures.com/design",
  },
};

export default function Design() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <HeroBanner
        tag="Bring Your Ideas To Life"
        heading={
          <>
            Premium Designs That <br /> Bring Growth & Business Success
          </>
        }
        description="Your Partner in Transforming ideas into impactful digital solutions. Let's Build Things Together."
        primaryButtonText="Book Call"
        primaryButtonPath="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonPath="/portfolio"
      />
      <PortfolioSlider />
      <Features />
    </div>
  );
}
