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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const validateCompanyForm = () => {
    const requiredFields = [
      "companyName",
      "contactName",
      "email",
      "phone",
      "projectType",
      "teamSize",
      "duration",
      "timeline",
      "skills",
      "budget",
      "description",
    ];
    const missingFields = requiredFields.filter(
      (field) => !companyFormData[field as keyof typeof companyFormData]?.trim()
    );

    if (missingFields.length > 0) {
      setSubmitMessage({
        type: "error",
        message: `Please fill in all required fields: ${missingFields.join(
          ", "
        )}`,
      });
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(companyFormData.email)) {
      setSubmitMessage({
        type: "error",
        message: "Please enter a valid email address",
      });
      return false;
    }

    return true;
  };

  const validateDesignerForm = () => {
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "portfolio",
      "experience",
      "availability",
      "skills",
      "hourlyRate",
      "bio",
    ];
    const missingFields = requiredFields.filter(
      (field) =>
        !designerFormData[field as keyof typeof designerFormData]?.trim()
    );

    if (missingFields.length > 0) {
      setSubmitMessage({
        type: "error",
        message: `Please fill in all required fields: ${missingFields.join(
          ", "
        )}`,
      });
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(designerFormData.email)) {
      setSubmitMessage({
        type: "error",
        message: "Please enter a valid email address",
      });
      return false;
    }

    return true;
  };

  const handleCompanySubmit = async () => {
    if (!agreementChecked) return;

    if (!validateCompanyForm()) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "company",
          formData: companyFormData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          message:
            "Your staff augmentation request has been submitted successfully! We will get back to you within 24-48 hours.",
        });
        // Reset form
        setCompanyFormData({
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
        setAgreementChecked(false);
      } else {
        setSubmitMessage({
          type: "error",
          message:
            result.error || "Failed to submit request. Please try again.",
        });
        console.error("API Error Response:", result);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage({
        type: "error",
        message:
          "An error occurred while submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDesignerSubmit = async () => {
    if (!agreementChecked) return;

    if (!validateDesignerForm()) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "designer",
          formData: designerFormData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          message:
            "Your designer application has been submitted successfully! We will review your profile and get back to you within 24-48 hours.",
        });
        // Reset form
        setDesignerFormData({
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
        setAgreementChecked(false);
      } else {
        setSubmitMessage({
          type: "error",
          message:
            result.error || "Failed to submit application. Please try again.",
        });
        console.error("API Error Response:", result);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage({
        type: "error",
        message:
          "An error occurred while submitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  required
                />
                <CustomInput
                  label="Contact Name"
                  placeholder="Enter your name"
                  value={companyFormData.contactName}
                  onChange={(e) => handleCompanyInputChange("contactName", e)}
                  required
                />
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  value={companyFormData.email}
                  onChange={(e) => handleCompanyInputChange("email", e)}
                  required
                />
                <CustomInput
                  label="Phone"
                  placeholder="Enter your phone number"
                  value={companyFormData.phone}
                  onChange={(e) => handleCompanyInputChange("phone", e)}
                  required
                />
                <CustomDropdown
                  label="Project Type"
                  placeholder="Select project type..."
                  value={companyFormData.projectType}
                  options={projectTypeOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomDropdown
                  label="Team Size Needed"
                  placeholder="Select team size..."
                  value={companyFormData.teamSize}
                  options={teamSizeOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomDropdown
                  label="Project Duration"
                  placeholder="Select duration..."
                  value={companyFormData.duration}
                  options={durationOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomDropdown
                  label="Timeline to Start"
                  placeholder="Select timeline..."
                  value={companyFormData.timeline}
                  options={timelineOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomInput
                  label="Required Skills"
                  placeholder="e.g., React, Node.js, AWS"
                  value={companyFormData.skills}
                  onChange={(e) => handleCompanyInputChange("skills", e)}
                  required
                />
                <CustomInput
                  label="Budget Range"
                  placeholder="e.g., $50k-100k"
                  value={companyFormData.budget}
                  onChange={(e) => handleCompanyInputChange("budget", e)}
                  required
                />
              </div>

              <div className="mb-6">
                <CustomTextArea
                  label="Project Description"
                  placeholder="Describe your project requirements, goals, and any specific needs..."
                  value={companyFormData.description}
                  onChange={(e) => handleCompanyInputChange("description", e)}
                  required
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

              {submitMessage && (
                <div
                  className={`mb-4 p-4 rounded-lg ${
                    submitMessage.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {submitMessage.message}
                </div>
              )}

              <CustomButton
                title={isSubmitting ? "Submitting..." : "Submit Request"}
                onClick={handleCompanySubmit}
                disabled={!agreementChecked || isSubmitting}
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
                  required
                />
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  value={designerFormData.email}
                  onChange={(e) => handleDesignerInputChange("email", e)}
                  required
                />
                <CustomInput
                  label="Phone"
                  placeholder="Enter your phone number"
                  value={designerFormData.phone}
                  onChange={(e) => handleDesignerInputChange("phone", e)}
                  required
                />
                <CustomInput
                  label="Portfolio URL"
                  placeholder="Your portfolio website or Behance/Dribbble profile"
                  value={designerFormData.portfolio}
                  onChange={(e) => handleDesignerInputChange("portfolio", e)}
                  required
                />
                <CustomDropdown
                  label="Years of Experience"
                  placeholder="Select experience level..."
                  value={designerFormData.experience}
                  options={experienceOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomDropdown
                  label="Availability"
                  placeholder="Select availability..."
                  value={designerFormData.availability}
                  options={availabilityOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomInput
                  label="Skills & Technologies"
                  placeholder="e.g., Figma, Adobe Creative Suite, React, UI/UX Design"
                  value={designerFormData.skills}
                  onChange={(e) => handleDesignerInputChange("skills", e)}
                  required
                />
                <CustomInput
                  label="Hourly Rate (USD)"
                  placeholder="e.g., $25-50"
                  value={designerFormData.hourlyRate}
                  onChange={(e) => handleDesignerInputChange("hourlyRate", e)}
                  required
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
                  required
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

              {submitMessage && (
                <div
                  className={`mb-4 p-4 rounded-lg ${
                    submitMessage.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {submitMessage.message}
                </div>
              )}

              <CustomButton
                title={isSubmitting ? "Submitting..." : "Submit Application"}
                onClick={handleDesignerSubmit}
                disabled={!agreementChecked || isSubmitting}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentForm;
