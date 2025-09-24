"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Images } from "assets";
import SectionHeadingCard from "components/common/sectionHeadingCard";

const TalentSnapshot = () => {
  const talentProfiles = [
    {
      icon: "👨‍💻",
      role: "Senior React Developer",
      experience: "6+ years",
      expertise: "Fintech projects, remote-ready",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
      icon: "🎨",
      role: "UI/UX Designer",
      experience: "5+ years",
      expertise: "SaaS & Mobile Apps, strong portfolio",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
    {
      icon: "📱",
      role: "Flutter Mobile Developer",
      experience: "4+ years",
      expertise: "worked with startups & enterprises",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    },
    {
      icon: "⚙️",
      role: "DevOps Engineer",
      experience: "7+ years",
      expertise: "AWS, CI/CD automation",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper)}>
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Talent Pool"
          heading="Our Talent Pool"
          description="Meet some of our pre-vetted professionals ready to join your team:"
          centered={true}
          maxParticles={200}
          section="services"
          backgroundImage={Images.ServiceSectionBg.src}
        />
        <div className={styles.talentContainer}>
          {talentProfiles.map((talent, index) => (
            <div key={index} className={styles.talentCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{talent.icon}</span>
                </div>
                <div className={styles.talentInfo}>
                  <h3 className={styles.role}>{talent.role}</h3>
                  <div className={styles.experience}>{talent.experience}</div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.expertise}>{talent.expertise}</p>
                <div className={styles.skillsContainer}>
                  {talent.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentSnapshot;
