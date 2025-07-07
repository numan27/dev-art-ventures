"use client";

// import type { Metadata } from "next";
import styles from "./style.module.scss";
import classNames from "classnames";
import SectionHeading from "components/common/sectionHeading";
import { routeConstant } from "routes/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ServiceBanner from "../../_shared/components/services/ServiceBanner";
import { Icons } from "assets";
import ServiceCTA from "components/common/ServiceCTA";
import {
  Server,
  Headphones,
  Briefcase,
  Shield,
  Globe,
  Users,
  Monitor,
  Paintbrush,
  Rocket,
} from "lucide-react";

// export const metadata: Metadata = {
//   title: "Core IT Ventures | Our Services",
//   description:
//     "Comprehensive IT services including web development, mobile apps, AI solutions, cybersecurity, cloud services, and more. Transform your business with our expert team.",
//   alternates: {
//     canonical: "https://coreitventures.com/services",
//   },
// };

export default function Services() {
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      title: routeConstant.services.managedIT.title,
      path: routeConstant.services.managedIT.path,
      description: "Complete IT management and monitoring.",
      features: [
        "Proactive Monitoring",
        "Patch Management",
        "Asset Management",
        "Reporting",
      ],
      icon: <Server size={32} color="#fff" strokeWidth={2.2} />,
    },
    {
      title: routeConstant.services.itSupport.title,
      path: routeConstant.services.itSupport.path,
      description: "Fast, reliable support for your systems and staff.",
      features: [
        "Remote Support",
        "Onsite Support",
        "Helpdesk",
        "Troubleshooting",
      ],
      icon: <Headphones size={32} color="#fff" strokeWidth={2.2} />,
    },
    {
      title: routeConstant.services.itBusinessConsulting.title,
      path: routeConstant.services.itBusinessConsulting.path,
      description: "Expert guidance to plan, scale, and optimize your IT.",
      features: [
        "IT Strategy",
        "Digital Transformation",
        "Technology Assessment",
        "Project Planning",
      ],
      icon: <Briefcase size={32} color="#fff" strokeWidth={2.2} />,
    },
    {
      title: routeConstant.services.cyberSecurity.title,
      path: routeConstant.services.cyberSecurity.path,
      description: "Protection for your business, network, and devices.",
      features: [
        "Threat Detection",
        "Vulnerability Assessment",
        "Incident Response",
        "Compliance",
      ],
      icon: <Shield size={32} color="#fff" strokeWidth={2.2} />,
    },
    {
      title: routeConstant.services.networkInfrastructure.title,
      path: routeConstant.services.networkInfrastructure.path,
      description:
        "Design, setup, Wi-Fi surveys, cabling, and full infrastructure support.",
      features: [
        "Network Design",
        "Wi-Fi Surveys",
        "Cabling",
        "Infrastructure Support",
      ],
      icon: <Globe size={32} color="#fff" strokeWidth={2.2} />,
    },
    {
      title: routeConstant.services.itBusinessConsulting.title,
      path: routeConstant.services.itBusinessConsulting.path,
      description: "Custom IT solutions for your day-to-day operations.",
      features: [
        "Custom Solutions",
        "Process Automation",
        "IT Optimization",
        "Support",
      ],
      icon: <Users size={32} color="#fff" strokeWidth={2.2} />,
    },
    {
      title: routeConstant.services.dataCenter.title,
      path: routeConstant.services.dataCenter.path,
      description:
        "On-site engineering, testing, and hands-on support for data centers.",
      features: ["On-site Engineering", "Testing", "Maintenance", "Support"],
      icon: <Server size={32} color="#fff" strokeWidth={2.2} />,
    },
    {
      title: routeConstant.services.webDevelopment.title,
      path: routeConstant.services.webDevelopment.path,
      description: "Web Development, UI/UX & Graphics",
      features: ["Web Development", "UI/UX Design", "Branding", "Graphics"],
      icon: <Monitor size={32} color="#fff" strokeWidth={2.2} />,
    },
    {
      title: routeConstant.services.creative.title,
      path: routeConstant.services.creative.path,
      description: "SEO & Digital Marketing, Creative",
      features: [
        "SEO",
        "Digital Marketing",
        "Content Creation",
        "Creative Campaigns",
      ],
      icon: <Paintbrush size={32} color="#fff" strokeWidth={2.2} />,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Use regular divs if not on client side to prevent hydration issues
  const MotionDiv = isClient ? motion.div : "div";

  return (
    <div className={styles.pageWrapper}>
      {/* Full-Height Service Banner */}
      <ServiceBanner
        title="Our Services"
        subtitle="Comprehensive IT & Digital Solutions for Modern Businesses"
        buttonText="Get Started"
        badge="Explore Services"
        image={"/images/services-banner.jpg"} // Replace with your actual banner image
      />

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="What We Offer"
            title="Our Service Portfolio"
            align="center"
            className={styles.servicesHeading}
          />
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <a href={service.path} className={styles.serviceCard} key={idx}>
                <span className={styles.serviceIconWrap}>{service.icon}</span>
                <div className={styles.serviceTitle}>{service.title}</div>
                <div className={styles.serviceDescription}>
                  {service.description}
                </div>
                <div className={styles.serviceFeatures}>
                  {service.features.slice(0, 3).map((feature, fidx) => (
                    <span className={styles.featureTag} key={fidx}>
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className={styles.moreFeatures}>
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
                <div className={styles.serviceArrow}>
                  <span>Learn More</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Image-Content Grid Section */}
      <section className={styles.altGridSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Key Capabilities"
            title="What Makes Us Different"
            align="center"
          />
          <div className={styles.altGridBlock}>
            <div className={styles.altGridImageWrap}>
              <img
                src="/images/feature1.jpg"
                alt="Feature 1"
                className={styles.altGridImage}
              />
            </div>
            <div className={styles.altGridContent}>
              <h3>Seamless IT Integration</h3>
              <p className={styles.altGridDesc}>
                Integrate new technologies into your business with zero
                disruption. Our experts ensure smooth transitions and ongoing
                support for all your IT needs.
              </p>
              <ul className={styles.altGridList}>
                <li>Cloud & On-Premise Integration</li>
                <li>24/7 Support</li>
                <li>Zero Downtime Migrations</li>
              </ul>
            </div>
          </div>
          <div className={styles.altGridBlock + " " + styles.reverse}>
            <div className={styles.altGridImageWrap}>
              <img
                src="/images/feature2.jpg"
                alt="Feature 2"
                className={styles.altGridImage}
              />
            </div>
            <div className={styles.altGridContent}>
              <h3>Advanced Security Solutions</h3>
              <p className={styles.altGridDesc}>
                Protect your business with state-of-the-art cybersecurity,
                proactive monitoring, and compliance management tailored to your
                industry.
              </p>
              <ul className={styles.altGridList}>
                <li>Threat Detection & Response</li>
                <li>Compliance Management</li>
                <li>Security Audits</li>
              </ul>
            </div>
          </div>
          <div className={styles.altGridBlock}>
            <div className={styles.altGridImageWrap}>
              <img
                src="/images/feature3.jpg"
                alt="Feature 3"
                className={styles.altGridImage}
              />
            </div>
            <div className={styles.altGridContent}>
              <h3>Business Growth Acceleration</h3>
              <p className={styles.altGridDesc}>
                Leverage automation, analytics, and digital marketing to
                accelerate your business growth and stay ahead of the
                competition.
              </p>
              <ul className={styles.altGridList}>
                <li>Process Automation</li>
                <li>Data-Driven Insights</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Why Us"
            title="Why Choose Us?"
            align="center"
            className={styles.whyChooseHeading}
          />
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>🚀</div>
              <h4>Proven Expertise</h4>
              <p>
                Our team brings years of experience and a track record of
                successful IT projects for businesses of all sizes.
              </p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>🤝</div>
              <h4>Client-Centric Approach</h4>
              <p>
                We prioritize your business goals and tailor our solutions to
                fit your unique needs and challenges.
              </p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>💡</div>
              <h4>Innovation & Agility</h4>
              <p>
                We stay ahead of the curve with the latest technologies and
                adapt quickly to changing business landscapes.
              </p>
            </div>
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>🔒</div>
              <h4>Security First</h4>
              <p>
                Security is at the core of everything we do, ensuring your data
                and operations are always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ServiceCTA />
    </div>
  );
}
