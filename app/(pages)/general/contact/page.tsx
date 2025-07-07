export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import ContactContent from "../../../_shared/components/contact";

export const metadata: Metadata = {
  title: "Core IT Ventures | Contact Us",
  description:
    "Get in touch with Core IT Ventures. We're here to help with your software development needs and answer any questions you may have.",
  alternates: {
    canonical: "https://coreitventures.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
