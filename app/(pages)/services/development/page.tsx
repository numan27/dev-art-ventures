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
import { routeConstant } from "routes/constants";

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
      title: "What types of web applications do you build?",
      content:
        "We design and develop marketing websites, e‑commerce stores, SaaS dashboards, internal admin portals, content platforms, and SEO‑friendly, high‑performance web apps. Depending on the need, we use SSR/SSG with Next.js for speed, reliability, and discoverability.",
    },
    {
      id: 2,
      title: "What is your development process?",
      content:
        "We follow a proven lifecycle: discovery and requirements, UX/UI design, technical architecture, agile sprints with demos, automated testing and QA, UAT, and a staged launch with CI/CD. After go‑live, we monitor, iterate, and optimize based on real usage.",
    },
    {
      id: 3,
      title: "Which technologies do you use?",
      content:
        "Our core stack includes Next.js/React, Node.js (NestJS/Express), TypeScript, PostgreSQL or MongoDB, Prisma/TypeORM, REST/GraphQL APIs, and Tailwind/SCSS. We deploy to AWS, Vercel, or similar clouds with modern CI/CD, logging, and monitoring.",
    },
    {
      id: 4,
      title: "How long does a project typically take?",
      content:
        "Timelines depend on scope: a marketing site may take 2–4 weeks, an MVP web app 6–10 weeks, and complex, integrated platforms 3–6+ months. We share a detailed plan with milestones after discovery so you always know what’s next.",
    },
    {
      id: 5,
      title: "How do you ensure performance, SEO, and accessibility?",
      content:
        "We optimize Core Web Vitals, use SSR/SSG, caching/CDN, image optimization, and code splitting. We implement semantic HTML and ARIA for accessibility (WCAG 2.1 AA) and follow technical SEO best practices with structured data and clean URLs.",
    },
    {
      id: 6,
      title: "Do you provide post‑launch maintenance and support?",
      content:
        "Yes. We offer maintenance plans with SLAs that cover monitoring, security updates, backups, performance tuning, bug fixes, and iterative feature work. We can act as your ongoing product team or support your in‑house engineers.",
    },
    {
      id: 7,
      title: "Can you integrate with existing systems or migrate legacy sites?",
      content:
        "Absolutely. We build and consume REST/GraphQL APIs, integrate with CRMs, ERPs, analytics, Stripe/PayPal, and email providers. We also migrate from WordPress/monoliths to modern stacks or headless CMSs (Contentful, Strapi, headless WP) with minimal downtime.",
    },
    {
      id: 8,
      title: "How do you handle security and compliance?",
      content:
        "We follow OWASP best practices, enforce secure authentication/authorization, protect data in transit and at rest, apply secure headers, and conduct code reviews and audits. We help align with GDPR/CCPA and provide security documentation upon request.",
    },
  ];

  return (
    <div className={classNames(styles.pageWrapper)}>
      <DevelopmentHeroBanner />
      <div className="mt-16">
        <DevelopmentPortfolioSlider />
        <Services />
        <Process />
        <Highlights />
        <Tools />
        <CaseStudies />
        <Testimonials />
        <FAQs faqsData={faqs} />
        <CTA
          heading="Let's work together!"
          description="Contact us today to start crafting your exceptional and customized design solutions! Start today, scale tomorrow!"
          buttonText="Start a Project"
          buttonLink={routeConstant.contact.path}
          buttonTarget="_self"
        />
      </div>
    </div>
  );
}
