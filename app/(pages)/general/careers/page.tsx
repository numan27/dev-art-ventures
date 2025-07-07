import type { Metadata } from "next";
import styles from "./style.module.scss";
import classNames from "classnames";
import SectionHeading from "components/common/sectionHeading";
import { FileText, Search, Code, ThumbsUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Core IT Ventures | Careers",
  description:
    "Join our team at Core IT Ventures. Explore exciting career opportunities in software development, design, and technology.",
  alternates: {
    canonical: "https://coreitventures.com/careers",
  },
};

export default function Careers() {
  const benefits = [
    {
      title: "Flexible Work Environment",
      description: "Work from anywhere with our remote-first culture.",
      icon: "🏠",
    },
    {
      title: "Professional Growth",
      description: "Continuous learning and career development opportunities.",
      icon: "📈",
    },
    {
      title: "Competitive Benefits",
      description: "Health insurance, paid time off, and retirement plans.",
      icon: "💼",
    },
    {
      title: "Innovative Projects",
      description: "Work on cutting-edge technology and exciting projects.",
      icon: "🚀",
    },
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "We're looking for an experienced Full Stack Developer to join our team and help build innovative web applications.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Join our design team to create beautiful and intuitive user experiences for our clients.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead product strategy and development for our client projects and internal products.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Help us build and maintain robust infrastructure and deployment pipelines.",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.customContainer}>
          <div className={styles.heroContent}>
            <SectionHeading
              subtitle="Careers at Core IT Ventures"
              title="Shape the Future of Tech With Us"
              align="center"
              className={styles.heroHeading}
              whiteText
            />
            <p className={styles.heroDescription}>
              Join a vibrant, innovative team where your ideas matter. We're
              passionate about technology, creativity, and making a real impact.
              Ready to build something amazing?
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Why Core IT Ventures"
            title="A Great Place to Work"
            align="center"
            className={styles.benefitsHeading}
          />
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className={styles.jobsSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="Current Openings"
            title="Open Positions"
            align="center"
            className={styles.jobsHeading}
          />
          <div className={styles.jobsGrid}>
            {openPositions.map((position, index) => (
              <div key={index} className={styles.jobCard}>
                <div className={styles.jobHeader}>
                  <h4>{position.title}</h4>
                  <div className={styles.jobMeta}>
                    <span className={styles.department}>
                      {position.department}
                    </span>
                    <span className={styles.location}>{position.location}</span>
                    <span className={styles.type}>{position.type}</span>
                  </div>
                </div>
                <div className={styles.jobDescription}>
                  {position.description}
                </div>
                <div className={styles.jobFooter}>
                  <span className={styles.experience}>
                    Experience: 3+ years
                  </span>
                  <button className={styles.applyBtn}>Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={styles.cultureSection}>
        <div className={styles.customContainer}>
          <div className={styles.cultureContent}>
            <div className={styles.cultureText}>
              <h3>Our Culture</h3>
              <p>
                At Core IT Ventures, we foster a culture of innovation,
                collaboration, and continuous learning. Our team is passionate
                about technology and committed to delivering exceptional
                results.
              </p>
              <p>
                We value diversity, creativity, and work-life balance. Our
                flexible work environment lets you work from anywhere while
                staying connected with your team.
              </p>
            </div>
            <div className={styles.cultureImage}>
              <div className={styles.imagePlaceholder}>
                <span>Team Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className={styles.processSection}>
        <div className={styles.customContainer}>
          <SectionHeading
            subtitle="How to Apply"
            title="Application Process"
            align="center"
            className={styles.processHeading}
          />
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>
                <FileText size={28} />
              </div>
              <h4>Submit Application</h4>
              <p>
                Fill out our online application form with your details and
                resume.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>
                <Search size={28} />
              </div>
              <h4>Initial Review</h4>
              <p>
                Our team will review your application and get back to you within
                a week.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>
                <Code size={28} />
              </div>
              <h4>Technical Interview</h4>
              <p>
                Meet with our team for a technical discussion and skills
                assessment.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>
                <ThumbsUp size={28} />
              </div>
              <h4>Final Decision</h4>
              <p>
                We'll make our final decision and extend an offer to successful
                candidates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.customContainer}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaCard}>
              <h3>Don't See the Right Fit?</h3>
              <p>
                We're always looking for talented individuals to join our team.
                If you don't see a position that matches your skills and
                interests, send us your resume and a cover letter.
              </p>
              <div className={styles.ctaActions}>
                <button className={classNames(styles.primaryBtn)}>
                  Send Resume
                </button>
                <button className={classNames(styles.secondaryBtn)}>
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
