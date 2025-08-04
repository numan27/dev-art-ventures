import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import HeroBanner from "components/common/generalHeroBanner";
import PortfolioSlider from "components/design/portfolioSlider";
import Services from "components/development/services";
import Work from "components/design/work";
import Process from "components/development/process";
import Comparison from "components/design/comparison";
import Testimonials from "components/home/testimonials";
import CTA from "components/home/cta";
import FAQs from "components/design/faqs";
import Highlights from "components/development/highlights";
import Tools from "components/development/tools";

export const metadata: Metadata = {
  title: "Web & App Development | DevArt Ventures",
  description:
    "We offer Web Development services to businesses. We create beautiful and functional websites for your business.",
  alternates: {
    canonical: "https://devartventures.com/development",
  },
};

export default function Development() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <HeroBanner
        tag="Bring Your Ideas To Life"
        heading={
          <>
            Custom Software <br /> Development Made Easy
          </>
        }
        description="We work with the latest technologies and methodologies to create software that is innovative, reliable, and tailored exactly to your business requirements."
        primaryButtonText="Book Call"
        primaryButtonPath="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonPath="/portfolio"
      />
      <PortfolioSlider />
      <Highlights />
      <Tools />
      <Services />
      <Work />
      <Process />
      <Comparison />
      <Testimonials />
      <FAQs />
      <CTA showBadge={false} />
    </div>
  );
}
