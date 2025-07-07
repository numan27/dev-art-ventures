import LandingPage from "components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core IT Ventures",
  description:
    "Core IT Ventures is a software development company that provides software development services to businesses.",
  alternates: {
    canonical: "https://coreitventures.com/",
  },
};

export default function Home() {
  return <LandingPage />;
}
