import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import ContactHeroBanner from "components/contact/contactHeroBanner";
import ContactForm from "components/contact/contactForm";
import ContactInfo from "components/contact/contactInfo";
import CTA from "components/home/cta";

export const metadata: Metadata = {
  title: "Contact Us | DevArt Ventures",
  description:
    "Get in touch with DevArt Ventures for custom software development, design, and digital solutions. We're here to bring your ideas to life.",
  alternates: {
    canonical: "https://devartventures.com/contact",
  },
};

export default function Contact() {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <ContactHeroBanner />
      <ContactForm />
      <ContactInfo />
      <CTA
        heading="Ready to start your project?"
        description="Let's discuss how we can help bring your vision to life. Contact us today for a free consultation!"
        buttonText="Schedule a Call"
        buttonLink="https://calendly.com/devartventures/30min"
        buttonTarget="_blank"
      />
    </div>
  );
}
