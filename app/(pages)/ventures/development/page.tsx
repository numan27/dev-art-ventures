import classNames from "classnames";
import type { Metadata } from "next";
import styles from "./style.module.scss";
import DevelopmentPortfolioSlider from "components/development/portfolioSlider";
import Services from "components/development/services";
import Process from "components/development/process";
import Highlights from "components/development/highlights";
import Tools from "components/development/tools";
import CaseStudies from "components/development/caseStudies";
import Testimonials from "components/home/testimonials";
import CTA from "components/home/cta";
import FAQs from "components/design/faqs";
import DevelopmentHeroBanner from "components/development/devHeroBanner";

export const metadata: Metadata = {
  title: "Web & App Development | DevArt Ventures",
  description:
    "Expert custom software development services including web apps, mobile apps, APIs, and e-commerce solutions. We build scalable, innovative software tailored to your business needs.",
  alternates: {
    canonical: "https://devartventures.com/development",
  },
};

export default function Development() {
  const faqs = [
    {
      id: 1,
      title: "What is staff augmentation and how does it work?",
      content:
        "Staff augmentation is a flexible hiring strategy where you temporarily add skilled professionals to your existing team without the overhead of permanent hiring. We provide pre-vetted developers, designers, and engineers who integrate seamlessly with your team, work under your management, and can be scaled up or down based on project needs. It's like having an extended team without the recruitment, training, or long-term commitment costs.",
    },
    {
      id: 2,
      title: "What technologies do you use for web development?",
      content:
        "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, Django, Laravel, and more. Our tech stack is chosen based on your specific project requirements, ensuring optimal performance, scalability, and maintainability. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    },
    {
      id: 3,
      title: "How long does it take to develop a custom web application?",
      content:
        "Development timelines vary depending on project complexity, features, and requirements. A simple website might take 2-4 weeks, while complex enterprise applications can take 3-6 months or more. We provide detailed project timelines during the planning phase and keep you updated throughout the development process with regular milestones and demos.",
    },
    {
      id: 4,
      title: "Do you provide ongoing maintenance and support after launch?",
      content:
        "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We provide different maintenance packages to suit your needs, from basic support to full managed services. Our team is always available to ensure your application runs smoothly and stays up-to-date.",
    },
    {
      id: 5,
      title:
        "Can you help with existing applications that need updates or fixes?",
      content:
        "Absolutely! We specialize in both building new applications and improving existing ones. Whether you need to modernize legacy systems, fix bugs, add new features, or improve performance, our team can analyze your current codebase and provide solutions. We work with various technologies and can integrate with your existing infrastructure.",
    },
    {
      id: 6,
      title: "What is your approach to mobile app development?",
      content:
        "We develop both native and cross-platform mobile applications using React Native, Flutter, and native iOS/Android development. Our approach focuses on creating intuitive user experiences, optimal performance, and seamless integration with backend systems. We ensure your app works flawlessly across different devices and operating systems.",
    },
    {
      id: 7,
      title: "How do you ensure the security of the applications you build?",
      content:
        "Security is built into every stage of our development process. We follow OWASP security guidelines, implement secure coding practices, conduct regular security audits, and use industry-standard authentication and encryption methods. Our applications undergo thorough security testing before deployment, and we provide security documentation and best practices for your team.",
    },
    {
      id: 8,
      title: "What if I need to scale my application as my business grows?",
      content:
        "We build applications with scalability in mind from the start. Our architecture is designed to handle growth through cloud-native solutions, microservices, and scalable databases. We can help you plan for future expansion and implement scaling strategies as your user base and data requirements grow. Our team is always available to optimize and scale your application as needed.",
    },
  ];

  return (
    <div className={classNames(styles.pageWrapper)}>
      <DevelopmentHeroBanner
        tag="Bring Your Ideas To Life"
        heading={
          <>
            Custom Software <br /> Development Made Easy
          </>
        }
        description="We work with the latest technologies and methodologies to create software that is innovative, reliable, and tailored exactly to your business requirements."
        primaryButtonText="Book Free Consultation"
        primaryButtonPath="/contact"
        secondaryButtonText="Start a Project"
        secondaryButtonPath="/contact"
      />
      <div className="mt-16">
        <DevelopmentPortfolioSlider />
        <Services />
        <Process />
        <Highlights />
        <Tools />
        <CaseStudies />
        <Testimonials />
        <FAQs faqsData={faqs} />
        <CTA showBadge={false} />
      </div>
    </div>
  );
}
