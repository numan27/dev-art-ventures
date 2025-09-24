import RecruitmentServices from "components/recruitment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment Services | DevArt Ventures",
  description:
    "Strategic talent acquisition and recruitment services to help you find and retain top talent for your organization.",
  alternates: {
    canonical: "https://devartventures.com/services/recruitment-services",
  },
};

export default function RecruitmentServicesPage() {
  return <RecruitmentServices />;
}
