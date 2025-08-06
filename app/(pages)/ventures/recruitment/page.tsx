import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import HeroBanner from "components/common/generalHeroBanner";
import Testimonials from "components/home/testimonials";
import Mission from "components/home/mission";
import Features from "components/recruitment/features";
import HireTalent from "components/recruitment/hireTalent";
import Highlights from "components/recruitment/highlights";
import Talent from "components/recruitment/talent";
import RecruitmentCTABottom from "components/recruitment/recruitmentCTABottom";
import TalentForm from "components/recruitment/talentForm";

export const metadata: Metadata = {
  title: "Recruitment | DevArt Ventures",
  description: "Hire Best Designers & Developers for your next project.",
  alternates: {
    canonical: "https://devartventures.com/recruitment",
  },
};

export default function Recruitment() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <HeroBanner
        tag="Trusted by 50+ Tech Teams"
        heading={
          <>
            Hire Pre-Trained <br /> Job-Ready Tech Talent{" "}
          </>
        }
        description={
          <>
            We connect you with top-tier developers, designers, and <br />{" "}
            engineers trained by leading tech programs.
          </>
        }
        primaryButtonText="Hire in 72 Hours"
        primaryButtonPath="/contact"
        secondaryButtonText=""
        secondaryButtonPath="/portfolio"
      />
      <Mission
        heading="Our Mission"
        description=<>
          Provide high-impact, hands-on learning experiences led by top
          professionals, ensuring <br /> real-world applicability and career
          growth.
        </>
      />
      <Features />
      <HireTalent />
      <Highlights />
      <Talent />
      <Testimonials />
      <TalentForm />
      <RecruitmentCTABottom />
    </div>
  );
}
