import LandingPage from "components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevArt Ventures",
  description:
    "DevArt Ventures is a software development company that provides software development services to businesses.",
  alternates: {
    canonical: "https://devartventures.com/",
  },
};

export default function Home() {
  return <LandingPage />;
}
