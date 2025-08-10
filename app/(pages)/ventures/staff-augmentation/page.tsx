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
import RolesWeProvide from "components/recruitment/rolesWeProvide";
import PricingExample from "components/recruitment/pricingExample";

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
      <HeroBanner
        tag="Trusted by 50+ Tech Teams"
        heading={
          <>
            Scale Your Team with Pre-Vetted <br /> Tech Talent
          </>
        }
        description={
          <>
            Access a curated pool of skilled developers, designers, and <br />{" "}
            engineers ready to join your projects immediately.
          </>
        }
        primaryButtonText="Hire in 72 Hours"
        primaryButtonPath="/contact"
        secondaryButtonText="View Talent Pool"
        secondaryButtonPath="/portfolio"
      />
      <Mission
        heading="Our Mission"
        description=<>
          Connect businesses with exceptional tech talent through our <br />{" "}
          rigorous vetting process and proven track record of successful
          placements.
        </>
      />
      <Features />
      <HireTalent />
      <Highlights />
      <RolesWeProvide />
      <PricingExample />
      <Talent />
      <Testimonials />
      <TalentForm />
      <RecruitmentCTABottom />
    </div>
  );
}
