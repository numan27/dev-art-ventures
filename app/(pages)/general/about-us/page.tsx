import type { Metadata } from "next";
import styles from "./style.module.scss";
import classNames from "classnames";
import SectionHeading from "components/common/sectionHeading";
import ServiceBanner from "../../../_shared/components/services/ServiceBanner";
import { Rocket, Star, Handshake, Gem } from "lucide-react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Images } from "assets";

export const metadata: Metadata = {
  title: "Core IT Ventures | About Us",
  description:
    "Core IT Ventures is a software development company that provides software development services to businesses.",
  alternates: {
    canonical: "https://coreitventures.com/",
  },
};

export default function AboutUs() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that drive business growth.",
      icon: <Rocket size={32} color="#41c8f1" strokeWidth={2.2} />,
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in every project we undertake.",
      icon: <Star size={32} color="#41c8f1" strokeWidth={2.2} />,
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and close collaboration with our clients.",
      icon: <Handshake size={32} color="#41c8f1" strokeWidth={2.2} />,
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical practices in all our dealings.",
      icon: <Gem size={32} color="#41c8f1" strokeWidth={2.2} />,
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Service Banner Section */}
      <ServiceBanner
        title="About Core IT Ventures"
        subtitle="Building Digital Excellence Since 2014"
        buttonText="Contact Us"
        badge="Who We Are"
        image={Images.AboutBg}
      />

      {/* Company Overview */}
      <section className={styles.overviewSection}>
        <div className={styles.customContainer}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h3>Our Story</h3>
              <p>
                Founded in 2014, Core IT Ventures has grown from a small startup
                to a leading software development company. We've helped hundreds
                of businesses across various industries transform their digital
                presence and streamline their operations.
              </p>
              <p>
                Our journey has been marked by continuous learning, adaptation
                to emerging technologies, and an unwavering commitment to
                delivering exceptional value to our clients. Today, we stand as
                a trusted partner for organizations seeking innovative digital
                solutions.
              </p>
            </div>
            <div className={styles.overviewImage}>
              <Image
                className="rounded-2xl"
                src={Images.StoryImg}
                alt="story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionSection}>
        <div className={styles.customContainer}>
          <div className={styles.missionContent}>
            <div className={styles.missionCard}>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in the
                digital age.
              </p>
            </div>
            <div className={styles.visionCard}>
              <h3>Our Vision</h3>
              <p>
                To be the leading technology partner that transforms how
                businesses operate and succeed in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="What Drives Us"
            title="Our Core Values"
            align="center"
            className={styles.valuesHeading}
          />
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className={styles.statsSection}>
        <div className={styles.customContainer}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <h2 className={styles.statNumber}>{stat.number}</h2>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Meet Our Team"
            title="The People Behind Our Success"
            align="center"
            className={styles.teamHeading}
          />
          <div className={styles.teamContent}>
            <p className={styles.teamDescription}>
              Our diverse team of experts brings together years of experience in
              software development, design, and business strategy. We're united
              by our passion for technology and commitment to delivering
              exceptional results.
            </p>
            <div className={styles.teamGrid}>
              {[
                {
                  name: "Alex Johnson",
                  position: "CEO & Founder",
                  image: "/images/team1.jpg",
                  bio: "Visionary leader and tech enthusiast.",
                  linkedin: "#",
                },
                {
                  name: "Priya Patel",
                  position: "CTO",
                  image: "/images/team2.jpg",
                  bio: "Loves solving complex problems.",
                  linkedin: "#",
                },
                {
                  name: "Michael Chen",
                  position: "Lead Designer",
                  image: "/images/team3.jpg",
                  bio: "Passionate about user experience.",
                  linkedin: "#",
                },
                {
                  name: "Sara Lee",
                  position: "Project Manager",
                  image: "/images/team4.jpg",
                  bio: "Keeps projects on track and clients happy.",
                  linkedin: "#",
                },
              ].map((member, index) => (
                <div key={index} className={styles.teamMember}>
                  <div className={styles.memberImageWrap}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className={styles.memberImage}
                    />
                  </div>
                  <h4>{member.name}</h4>
                  <p className={styles.memberPosition}>{member.position}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.memberLinkedin}
                  >
                    <Linkedin size={22} color="#41c8f1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
