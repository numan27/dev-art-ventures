"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomInput from "components/common/customInput";
import CustomDropdown from "components/common/customDropdown";
import CustomTextArea from "components/common/customTextArea";
import { useState } from "react";

const TalentForm = () => {
  const [activeTab, setActiveTab] = useState<"request" | "join">("request");

  // Company request form data
  const [companyFormData, setCompanyFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    projectType: "",
    teamSize: "",
    duration: "",
    skills: "",
    budget: "",
    timeline: "",
    description: "",
  });

  // Designer join pool form data
  const [designerFormData, setDesignerFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "",
    skills: "",
    availability: "",
    hourlyRate: "",
    bio: "",
    linkedin: "",
    github: "",
  });

  const [agreementChecked, setAgreementChecked] = useState(false);

  const projectTypeOptions = [
    {
      title: "Web Development",
      action: () =>
        setCompanyFormData({
          ...companyFormData,
          projectType: "Web Development",
        }),
    },
    {
      title: "Mobile Development",
      action: () =>
        setCompanyFormData({
          ...companyFormData,
          projectType: "Mobile Development",
        }),
    },
    {
      title: "UI/UX Design",
      action: () =>
        setCompanyFormData({ ...companyFormData, projectType: "UI/UX Design" }),
    },
    {
      title: "DevOps & Infrastructure",
      action: () =>
        setCompanyFormData({
          ...companyFormData,
          projectType: "DevOps & Infrastructure",
        }),
    },
    {
      title: "QA & Testing",
      action: () =>
        setCompanyFormData({ ...companyFormData, projectType: "QA & Testing" }),
    },
    {
      title: "Full-Stack Development",
      action: () =>
        setCompanyFormData({
          ...companyFormData,
          projectType: "Full-Stack Development",
        }),
    },
  ];

  const teamSizeOptions = [
    {
      title: "1-2 developers",
      action: () =>
        setCompanyFormData({ ...companyFormData, teamSize: "1-2 developers" }),
    },
    {
      title: "3-5 developers",
      action: () =>
        setCompanyFormData({ ...companyFormData, teamSize: "3-5 developers" }),
    },
    {
      title: "6-10 developers",
      action: () =>
        setCompanyFormData({ ...companyFormData, teamSize: "6-10 developers" }),
    },
    {
      title: "10+ developers",
      action: () =>
        setCompanyFormData({ ...companyFormData, teamSize: "10+ developers" }),
    },
  ];

  const durationOptions = [
    {
      title: "1-3 months",
      action: () =>
        setCompanyFormData({ ...companyFormData, duration: "1-3 months" }),
    },
    {
      title: "3-6 months",
      action: () =>
        setCompanyFormData({ ...companyFormData, duration: "3-6 months" }),
    },
    {
      title: "6-12 months",
      action: () =>
        setCompanyFormData({ ...companyFormData, duration: "6-12 months" }),
    },
    {
      title: "12+ months",
      action: () =>
        setCompanyFormData({ ...companyFormData, duration: "12+ months" }),
    },
  ];

  const timelineOptions = [
    {
      title: "Immediate (1-2 weeks)",
      action: () =>
        setCompanyFormData({
          ...companyFormData,
          timeline: "Immediate (1-2 weeks)",
        }),
    },
    {
      title: "Soon (2-4 weeks)",
      action: () =>
        setCompanyFormData({
          ...companyFormData,
          timeline: "Soon (2-4 weeks)",
        }),
    },
    {
      title: "Flexible (1-2 months)",
      action: () =>
        setCompanyFormData({
          ...companyFormData,
          timeline: "Flexible (1-2 months)",
        }),
    },
  ];

  const experienceOptions = [
    {
      title: "0-1 years",
      action: () =>
        setDesignerFormData({ ...designerFormData, experience: "0-1 years" }),
    },
    {
      title: "1-3 years",
      action: () =>
        setDesignerFormData({ ...designerFormData, experience: "1-3 years" }),
    },
    {
      title: "3-5 years",
      action: () =>
        setDesignerFormData({ ...designerFormData, experience: "3-5 years" }),
    },
    {
      title: "5+ years",
      action: () =>
        setDesignerFormData({ ...designerFormData, experience: "5+ years" }),
    },
  ];

  const availabilityOptions = [
    {
      title: "Full-time (40+ hours/week)",
      action: () =>
        setDesignerFormData({
          ...designerFormData,
          availability: "Full-time (40+ hours/week)",
        }),
    },
    {
      title: "Part-time (20-30 hours/week)",
      action: () =>
        setDesignerFormData({
          ...designerFormData,
          availability: "Part-time (20-30 hours/week)",
        }),
    },
    {
      title: "Contract-based",
      action: () =>
        setDesignerFormData({
          ...designerFormData,
          availability: "Contract-based",
        }),
    },
    {
      title: "Project-based",
      action: () =>
        setDesignerFormData({
          ...designerFormData,
          availability: "Project-based",
        }),
    },
  ];

  const handleCompanyInputChange = (
    field: string,
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCompanyFormData({
      ...companyFormData,
      [field]: (e.target as HTMLInputElement).value,
    });
  };

  const handleDesignerInputChange = (
    field: string,
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDesignerFormData({
      ...designerFormData,
      [field]: (e.target as HTMLInputElement).value,
    });
  };

  const handleCompanySubmit = () => {
    console.log("Staff augmentation request submitted:", companyFormData);
  };

  const handleDesignerSubmit = () => {
    console.log("Designer application submitted:", designerFormData);
  };

  return (
    <div className={classNames(styles.sectionWrapper)} id="talent-form">
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Get Started"
          heading={<>Staff Augmentation & Talent Pool</>}
          description="Request staff augmentation for your company or join our talent pool as a designer."
          centered={true}
          maxParticles={200}
          section="services"
        />

        {/* Tab Navigation */}
        <div className={classNames(styles.tabContainer)}>
          <button
            className={classNames(
              styles.tabButton,
              activeTab === "request" && styles.activeTab
            )}
            onClick={() => setActiveTab("request")}
          >
            Request Staff
          </button>
          <button
            className={classNames(
              styles.tabButton,
              activeTab === "join" && styles.activeTab
            )}
            onClick={() => setActiveTab("join")}
          >
            Join Our Talent Pool
          </button>
        </div>

        <div className={classNames(styles.formContainer)}>
          {/* Company Request Form */}
          {activeTab === "request" && (
            <>
              <h3 className={classNames(styles.formTitle)}>
                Request Staff Augmentation
              </h3>
              <p className={classNames(styles.formSubtitle)}>
                Tell us about your project needs and we'll match you with the
                right professionals to scale your team.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <CustomInput
                  label="Company Name"
                  placeholder="Enter your company name"
                  value={companyFormData.companyName}
                  onChange={(e) => handleCompanyInputChange("companyName", e)}
                />
                <CustomInput
                  label="Contact Name"
                  placeholder="Enter your name"
                  value={companyFormData.contactName}
                  onChange={(e) => handleCompanyInputChange("contactName", e)}
                />
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  value={companyFormData.email}
                  onChange={(e) => handleCompanyInputChange("email", e)}
                />
                <CustomInput
                  label="Phone"
                  placeholder="Enter your phone number"
                  value={companyFormData.phone}
                  onChange={(e) => handleCompanyInputChange("phone", e)}
                />
                <CustomDropdown
                  label="Project Type"
                  placeholder="Select project type..."
                  value={companyFormData.projectType}
                  options={projectTypeOptions}
                  wrapInGlobalWrapper={false}
                />
                <CustomDropdown
                  label="Team Size Needed"
                  placeholder="Select team size..."
                  value={companyFormData.teamSize}
                  options={teamSizeOptions}
                  wrapInGlobalWrapper={false}
                />
                <CustomDropdown
                  label="Project Duration"
                  placeholder="Select duration..."
                  value={companyFormData.duration}
                  options={durationOptions}
                  wrapInGlobalWrapper={false}
                />
                <CustomDropdown
                  label="Timeline to Start"
                  placeholder="Select timeline..."
                  value={companyFormData.timeline}
                  options={timelineOptions}
                  wrapInGlobalWrapper={false}
                />
                <CustomInput
                  label="Required Skills"
                  placeholder="e.g., React, Node.js, AWS"
                  value={companyFormData.skills}
                  onChange={(e) => handleCompanyInputChange("skills", e)}
                />
                <CustomInput
                  label="Budget Range"
                  placeholder="e.g., $50k-100k"
                  value={companyFormData.budget}
                  onChange={(e) => handleCompanyInputChange("budget", e)}
                />
              </div>

              <div className="mb-6">
                <CustomTextArea
                  label="Project Description"
                  placeholder="Describe your project requirements, goals, and any specific needs..."
                  value={companyFormData.description}
                  onChange={(e) => handleCompanyInputChange("description", e)}
                />
              </div>

              <div className="flex items-center gap-2 mb-6">
                <input
                  type="checkbox"
                  id="company-agreement"
                  checked={agreementChecked}
                  onChange={(e) => setAgreementChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="company-agreement"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  I agree to the terms and conditions
                </label>
              </div>

              <CustomButton
                title="Submit Request"
                onClick={handleCompanySubmit}
                disabled={!agreementChecked}
              />
            </>
          )}

          {/* Designer Join Pool Form */}
          {activeTab === "join" && (
            <>
              <h3 className={classNames(styles.formTitle)}>
                Join Our Talent Pool
              </h3>
              <p className={classNames(styles.formSubtitle)}>
                Apply to join our network of talented designers and developers.
                We're always looking for exceptional talent.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <CustomInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={designerFormData.fullName}
                  onChange={(e) => handleDesignerInputChange("fullName", e)}
                />
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  value={designerFormData.email}
                  onChange={(e) => handleDesignerInputChange("email", e)}
                />
                <CustomInput
                  label="Phone"
                  placeholder="Enter your phone number"
                  value={designerFormData.phone}
                  onChange={(e) => handleDesignerInputChange("phone", e)}
                />
                <CustomInput
                  label="Portfolio URL"
                  placeholder="Your portfolio website or Behance/Dribbble profile"
                  value={designerFormData.portfolio}
                  onChange={(e) => handleDesignerInputChange("portfolio", e)}
                />
                <CustomDropdown
                  label="Years of Experience"
                  placeholder="Select experience level..."
                  value={designerFormData.experience}
                  options={experienceOptions}
                  wrapInGlobalWrapper={false}
                />
                <CustomDropdown
                  label="Availability"
                  placeholder="Select availability..."
                  value={designerFormData.availability}
                  options={availabilityOptions}
                  wrapInGlobalWrapper={false}
                />
                <CustomInput
                  label="Skills & Technologies"
                  placeholder="e.g., Figma, Adobe Creative Suite, React, UI/UX Design"
                  value={designerFormData.skills}
                  onChange={(e) => handleDesignerInputChange("skills", e)}
                />
                <CustomInput
                  label="Hourly Rate (USD)"
                  placeholder="e.g., $25-50"
                  value={designerFormData.hourlyRate}
                  onChange={(e) => handleDesignerInputChange("hourlyRate", e)}
                />
                <CustomInput
                  label="LinkedIn Profile"
                  placeholder="Your LinkedIn profile URL"
                  value={designerFormData.linkedin}
                  onChange={(e) => handleDesignerInputChange("linkedin", e)}
                />
                <CustomInput
                  label="GitHub Profile (if applicable)"
                  placeholder="Your GitHub profile URL"
                  value={designerFormData.github}
                  onChange={(e) => handleDesignerInputChange("github", e)}
                />
              </div>

              <div className="mb-6">
                <CustomTextArea
                  label="Bio & Experience Summary"
                  placeholder="Tell us about your background, design philosophy, and notable projects..."
                  value={designerFormData.bio}
                  onChange={(e) => handleDesignerInputChange("bio", e)}
                />
              </div>

              <div className="flex items-center gap-2 mb-6">
                <input
                  type="checkbox"
                  id="designer-agreement"
                  checked={agreementChecked}
                  onChange={(e) => setAgreementChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="designer-agreement"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  I agree to the terms and conditions
                </label>
              </div>

              <CustomButton
                title="Submit Application"
                onClick={handleDesignerSubmit}
                disabled={!agreementChecked}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentForm;
