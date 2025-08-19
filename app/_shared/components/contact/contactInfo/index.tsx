"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import NextLink from "next/link";
import CustomButton from "components/common/customButton";

const ContactInfo = () => {
  const companyStats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries",
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Expert developers, designers, and consultants",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project feedback surveys",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
    },
  ];

  const teamHighlights = [
    {
      title: "Expert Developers",
      description:
        "Full-stack developers with 5+ years of experience in modern technologies",
      icon: "🚀",
      color: "gradient-1",
    },
    {
      title: "Creative Designers",
      description:
        "UI/UX specialists creating intuitive and beautiful user experiences",
      icon: "🎨",
      color: "gradient-2",
    },
    {
      title: "Project Managers",
      description:
        "Certified PMs ensuring smooth project delivery and communication",
      icon: "📊",
      color: "gradient-3",
    },
    {
      title: "DevOps Engineers",
      description:
        "Infrastructure experts maintaining scalable and secure systems",
      icon: "⚡",
      color: "gradient-4",
    },
  ];

  const additionalWays = [
    {
      title: "Staff Augmentation",
      description:
        "Scale your design team with our expert UI/UX designers and creative professionals on-demand",
      action: "Learn More",
      link: "/ventures/staff-augmentation",
      icon: "👥",
      gradient: "gradient-1",
    },
    {
      title: "Follow Our Journey",
      description:
        "Stay updated with our latest projects and industry insights",
      action: "Follow on LinkedIn",
      link: "https://www.linkedin.com/company/devart-ventures",
      icon: "🔗",
      gradient: "gradient-1",
    },
    {
      title: "Partner With Us",
      description:
        "Interested in collaboration? Let's discuss strategic partnerships and joint ventures",
      action: "Let's Talk",
      link: "https://calendly.com/devartventures/30min",
      icon: "🤝",
      gradient: "gradient-1",
    },
  ];

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.customContainer}>
        <div className={styles.content}>
          {/* Additional Ways to Connect */}
          <div className={styles.additionalWaysSection}>
            <h3>Stay Connected</h3>
            <div className={styles.additionalWaysGrid}>
              {additionalWays.map((way, index) => (
                <div
                  key={index}
                  className={classNames(styles.wayCard, styles[way.gradient])}
                >
                  <div className={styles.wayIcon}>{way.icon}</div>
                  <div className={styles.wayContent}>
                    <h4>{way.title}</h4>
                    <p>{way.description}</p>
                    <NextLink href={way.link}>
                      <CustomButton title={way.action} onClick={() => {}} />
                    </NextLink>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Values
          <div className={styles.valuesSection}>
            <div className={styles.valuesCard}>
              <h3>Our Core Values</h3>
              <div className={styles.valuesGrid}>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>🎯</div>
                  <div>
                    <h4>Innovation First</h4>
                    <p>
                      We push boundaries and embrace cutting-edge technologies
                    </p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>🤝</div>
                  <div>
                    <h4>Partnership Approach</h4>
                    <p>
                      We work as an extension of your team, not just a vendor
                    </p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>🚀</div>
                  <div>
                    <h4>Quality Delivery</h4>
                    <p>Every project meets our high standards of excellence</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>💡</div>
                  <div>
                    <h4>Continuous Learning</h4>
                    <p>We stay ahead of industry trends and best practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
