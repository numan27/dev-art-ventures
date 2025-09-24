"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import SectionHeadingCard from "components/common/sectionHeadingCard";
import CustomInput from "components/common/customInput";
import CustomDropdown from "components/common/customDropdown";
import CustomTextArea from "components/common/customTextArea";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const RecruitmentForm = () => {
  const [activeTab, setActiveTab] = useState<"request" | "job">("request");

  // On mount, check if a preferred tab was set by the hero banner
  useEffect(() => {
    try {
      const preferred = sessionStorage.getItem("recruitment-form-active-tab");
      if (preferred === "job" || preferred === "request") {
        setActiveTab(preferred);
        // Clean up so subsequent visits default normally
        sessionStorage.removeItem("recruitment-form-active-tab");
      }
    } catch {}
  }, []);

  // Keep tab in sync with URL hash for subsequent clicks without remounting
  useEffect(() => {
    const syncTabWithHash = () => {
      const hash = window.location.hash;
      if (hash === "#recruitment-form-job") {
        setActiveTab("job");
      } else if (hash === "#recruitment-form-request") {
        setActiveTab("request");
      }
    };

    // Initial sync
    try {
      syncTabWithHash();
    } catch {}

    // Listen for hash changes
    window.addEventListener("hashchange", syncTabWithHash);
    return () => window.removeEventListener("hashchange", syncTabWithHash);
  }, []);

  // Shared agreement flag
  const [agreementChecked, setAgreementChecked] = useState(false);

  // Request Talent (company) form
  const [requestFormData, setRequestFormData] = useState({
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

  // Submit Job Role form (maps into company payload on submit)
  const [jobFormData, setJobFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    roleTitle: "",
    employmentType: "",
    location: "",
    experienceLevel: "",
    skills: "",
    salaryRange: "",
    description: "",
  });

  // Yup validation schemas
  const requestValidationSchema = Yup.object({
    companyName: Yup.string().trim().required("Company Name is required"),
    contactName: Yup.string().trim().required("Contact Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().trim().required("Phone is required"),
    projectType: Yup.string().trim().required("Recruitment Type is required"),
    teamSize: Yup.string().trim().required("Number of Hires is required"),
    duration: Yup.string().trim().required("Hiring Timeline is required"),
    timeline: Yup.string().trim().required("Start Window is required"),
    skills: Yup.string().trim().required("Required Skills is required"),
    budget: Yup.string().trim().required("Budget / Salary Range is required"),
    description: Yup.string().trim().required("Description is required"),
  });

  const jobValidationSchema = Yup.object({
    companyName: Yup.string().trim().required("Company Name is required"),
    contactName: Yup.string().trim().required("Contact Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().trim().required("Phone is required"),
    roleTitle: Yup.string().trim().required("Role Title is required"),
    employmentType: Yup.string().trim().required("Employment Type is required"),
    location: Yup.string().trim().required("Location is required"),
    experienceLevel: Yup.string()
      .trim()
      .required("Experience Level is required"),
    skills: Yup.string().trim().required("Key Skills is required"),
    salaryRange: Yup.string().trim().required("Salary Range (USD) is required"),
    description: Yup.string().trim().required("Role Description is required"),
  });

  const projectTypeOptions = [
    {
      title: "Permanent Recruitment",
      action: () =>
        setRequestFormData({
          ...requestFormData,
          projectType: "Permanent Recruitment",
        }),
    },
    {
      title: "Contract Recruitment",
      action: () =>
        setRequestFormData({
          ...requestFormData,
          projectType: "Contract Recruitment",
        }),
    },
    {
      title: "Executive Search",
      action: () =>
        setRequestFormData({
          ...requestFormData,
          projectType: "Executive Search",
        }),
    },
    {
      title: "Multiple Roles Hiring",
      action: () =>
        setRequestFormData({
          ...requestFormData,
          projectType: "Multiple Roles Hiring",
        }),
    },
  ];

  const teamSizeOptions = [
    {
      title: "1-2 hires",
      action: () =>
        setRequestFormData({ ...requestFormData, teamSize: "1-2 hires" }),
    },
    {
      title: "3-5 hires",
      action: () =>
        setRequestFormData({ ...requestFormData, teamSize: "3-5 hires" }),
    },
    {
      title: "6-10 hires",
      action: () =>
        setRequestFormData({ ...requestFormData, teamSize: "6-10 hires" }),
    },
    {
      title: "10+ hires",
      action: () =>
        setRequestFormData({ ...requestFormData, teamSize: "10+ hires" }),
    },
  ];

  const durationOptions = [
    {
      title: "Immediate",
      action: () =>
        setRequestFormData({ ...requestFormData, duration: "Immediate" }),
    },
    {
      title: "1-3 months",
      action: () =>
        setRequestFormData({ ...requestFormData, duration: "1-3 months" }),
    },
    {
      title: "3-6 months",
      action: () =>
        setRequestFormData({ ...requestFormData, duration: "3-6 months" }),
    },
    {
      title: "6+ months",
      action: () =>
        setRequestFormData({ ...requestFormData, duration: "6+ months" }),
    },
  ];

  const timelineOptions = [
    {
      title: "ASAP (1-2 weeks)",
      action: () =>
        setRequestFormData({
          ...requestFormData,
          timeline: "ASAP (1-2 weeks)",
        }),
    },
    {
      title: "Soon (2-4 weeks)",
      action: () =>
        setRequestFormData({
          ...requestFormData,
          timeline: "Soon (2-4 weeks)",
        }),
    },
    {
      title: "Flexible (1-2 months)",
      action: () =>
        setRequestFormData({
          ...requestFormData,
          timeline: "Flexible (1-2 months)",
        }),
    },
  ];

  const employmentTypeOptions = [
    {
      title: "Full-time",
      action: () =>
        setJobFormData({ ...jobFormData, employmentType: "Full-time" }),
    },
    {
      title: "Part-time",
      action: () =>
        setJobFormData({ ...jobFormData, employmentType: "Part-time" }),
    },
    {
      title: "Contract",
      action: () =>
        setJobFormData({ ...jobFormData, employmentType: "Contract" }),
    },
    {
      title: "Internship",
      action: () =>
        setJobFormData({ ...jobFormData, employmentType: "Internship" }),
    },
  ];

  const experienceLevelOptions = [
    {
      title: "Junior",
      action: () =>
        setJobFormData({ ...jobFormData, experienceLevel: "Junior" }),
    },
    {
      title: "Mid-level",
      action: () =>
        setJobFormData({ ...jobFormData, experienceLevel: "Mid-level" }),
    },
    {
      title: "Senior",
      action: () =>
        setJobFormData({ ...jobFormData, experienceLevel: "Senior" }),
    },
    {
      title: "Lead",
      action: () => setJobFormData({ ...jobFormData, experienceLevel: "Lead" }),
    },
  ];

  const handleRequestInputChange = (
    field: string,
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRequestFormData({
      ...requestFormData,
      [field]: (e.target as HTMLInputElement).value,
    });
  };

  const handleJobInputChange = (
    field: string,
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setJobFormData({
      ...jobFormData,
      [field]: (e.target as HTMLInputElement).value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const validateRequestForm = async () => {
    try {
      await requestValidationSchema.validate(requestFormData, {
        abortEarly: false,
      });
      return true;
    } catch (err: any) {
      setSubmitMessage({
        type: "error",
        message:
          err?.errors?.join("\n") || "Please fix the highlighted errors.",
      });
      return false;
    }
  };

  const validateJobForm = async () => {
    try {
      await jobValidationSchema.validate(jobFormData, { abortEarly: false });
      return true;
    } catch (err: any) {
      setSubmitMessage({
        type: "error",
        message:
          err?.errors?.join("\n") || "Please fix the highlighted errors.",
      });
      return false;
    }
  };

  const submitRequest = async () => {
    if (!agreementChecked) return;
    if (!validateRequestForm()) return;
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "company",
          formData: requestFormData,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitMessage({
          type: "success",
          message:
            "Your request has been submitted successfully! We'll get back to you within 24-48 hours.",
        });
        setRequestFormData({
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
      }
    } catch (e) {
      setSubmitMessage({
        type: "error",
        message:
          "An error occurred while submitting your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitJob = async () => {
    if (!agreementChecked) return;
    if (!validateJobForm()) return;
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Map job form into existing company payload to avoid API changes
    const mappedCompanyPayload = {
      companyName: jobFormData.companyName,
      contactName: jobFormData.contactName,
      email: jobFormData.email,
      phone: jobFormData.phone,
      projectType: "Job Role Submission",
      teamSize: "1 role",
      duration: jobFormData.employmentType,
      skills: jobFormData.skills,
      budget: jobFormData.salaryRange,
      timeline: jobFormData.experienceLevel,
      description: `Role Title: ${jobFormData.roleTitle}\nEmployment Type: ${jobFormData.employmentType}\nLocation: ${jobFormData.location}\nExperience Level: ${jobFormData.experienceLevel}\nSkills: ${jobFormData.skills}\nSalary Range: ${jobFormData.salaryRange}\n\nRole Description:\n${jobFormData.description}`,
    };

    try {
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "company",
          formData: mappedCompanyPayload,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitMessage({
          type: "success",
          message:
            "Your job role has been submitted successfully! We'll reach out shortly.",
        });
        setJobFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          roleTitle: "",
          employmentType: "",
          location: "",
          experienceLevel: "",
          skills: "",
          salaryRange: "",
          description: "",
        });
        setAgreementChecked(false);
      } else {
        setSubmitMessage({
          type: "error",
          message:
            result.error || "Failed to submit job role. Please try again.",
        });
      }
    } catch (e) {
      setSubmitMessage({
        type: "error",
        message:
          "An error occurred while submitting the job role. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classNames(styles.sectionWrapper)} id="recruitment-form">
      <div className={classNames(styles.customContainer, "relative z-10")}>
        <SectionHeadingCard
          badge="Get Started"
          heading={<>Recruitment Requests</>}
          description="Request talent or submit your job role — we'll respond within 24–48 hours."
          centered={true}
          maxParticles={200}
          section="services"
        />

        <div className={classNames(styles.tabContainer)}>
          {/* Anchor for Request tab */}
          <div id="recruitment-form-request" />
          <button
            className={classNames(
              styles.tabButton,
              activeTab === "request" && styles.activeTab
            )}
            onClick={() => setActiveTab("request")}
          >
            Request Talent
          </button>
          {/* Anchor for Job tab */}
          <div id="recruitment-form-job" />
          <button
            className={classNames(
              styles.tabButton,
              activeTab === "job" && styles.activeTab
            )}
            onClick={() => setActiveTab("job")}
          >
            Submit Your Job Role
          </button>
        </div>

        <div className={classNames(styles.formContainer)}>
          {activeTab === "request" && (
            <>
              <h3 className={classNames(styles.formTitle)}>Request Talent</h3>
              <p className={classNames(styles.formSubtitle)}>
                Tell us what you need and we’ll match you with pre-vetted
                candidates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <CustomInput
                  label="Company Name"
                  placeholder="Enter your company name"
                  value={requestFormData.companyName}
                  onChange={(e) => handleRequestInputChange("companyName", e)}
                  required
                />
                <CustomInput
                  label="Contact Name"
                  placeholder="Enter your name"
                  value={requestFormData.contactName}
                  onChange={(e) => handleRequestInputChange("contactName", e)}
                  required
                />
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  value={requestFormData.email}
                  onChange={(e) => handleRequestInputChange("email", e)}
                  required
                />
                <CustomInput
                  label="Phone"
                  placeholder="Enter your phone number"
                  value={requestFormData.phone}
                  onChange={(e) => handleRequestInputChange("phone", e)}
                  required
                />
                <CustomDropdown
                  label="Recruitment Type"
                  placeholder="Select type..."
                  value={requestFormData.projectType}
                  options={projectTypeOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomDropdown
                  label="Number of Hires"
                  placeholder="Select team size..."
                  value={requestFormData.teamSize}
                  options={teamSizeOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomDropdown
                  label="Hiring Timeline"
                  placeholder="Select timeline..."
                  value={requestFormData.duration}
                  options={durationOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomDropdown
                  label="Start Window"
                  placeholder="Select start window..."
                  value={requestFormData.timeline}
                  options={timelineOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomInput
                  label="Required Skills"
                  placeholder="e.g., React, Node.js, AWS"
                  value={requestFormData.skills}
                  onChange={(e) => handleRequestInputChange("skills", e)}
                  required
                />
                <CustomInput
                  label="Budget / Salary Range"
                  placeholder="e.g., $80k–$120k"
                  value={requestFormData.budget}
                  onChange={(e) => handleRequestInputChange("budget", e)}
                  required
                />
              </div>

              <div className="mb-6">
                <CustomTextArea
                  label="Role/Project Description"
                  placeholder="Describe the role(s), responsibilities, and any must-have qualifications..."
                  value={requestFormData.description}
                  onChange={(e) => handleRequestInputChange("description", e)}
                  required
                />
              </div>

              <div className="flex items-center gap-2 mb-6">
                <input
                  type="checkbox"
                  id="request-agreement"
                  checked={agreementChecked}
                  onChange={(e) => setAgreementChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="request-agreement"
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
                onClick={submitRequest}
                disabled={!agreementChecked || isSubmitting}
              />
            </>
          )}

          {activeTab === "job" && (
            <>
              <h3 className={classNames(styles.formTitle)}>
                Submit Your Job Role
              </h3>
              <p className={classNames(styles.formSubtitle)}>
                Share your open role details and we’ll start sourcing candidates
                immediately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <CustomInput
                  label="Company Name"
                  placeholder="Enter your company name"
                  value={jobFormData.companyName}
                  onChange={(e) => handleJobInputChange("companyName", e)}
                  required
                />
                <CustomInput
                  label="Contact Name"
                  placeholder="Enter your name"
                  value={jobFormData.contactName}
                  onChange={(e) => handleJobInputChange("contactName", e)}
                  required
                />
                <CustomInput
                  label="Email"
                  placeholder="Enter your email"
                  value={jobFormData.email}
                  onChange={(e) => handleJobInputChange("email", e)}
                  required
                />
                <CustomInput
                  label="Phone"
                  placeholder="Enter your phone number"
                  value={jobFormData.phone}
                  onChange={(e) => handleJobInputChange("phone", e)}
                  required
                />
                <CustomInput
                  label="Role Title"
                  placeholder="e.g., Senior React Developer"
                  value={jobFormData.roleTitle}
                  onChange={(e) => handleJobInputChange("roleTitle", e)}
                  required
                />
                <CustomDropdown
                  label="Employment Type"
                  placeholder="Select type..."
                  value={jobFormData.employmentType}
                  options={employmentTypeOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomInput
                  label="Location"
                  placeholder="e.g., Remote, NYC, Hybrid"
                  value={jobFormData.location}
                  onChange={(e) => handleJobInputChange("location", e)}
                  required
                />
                <CustomDropdown
                  label="Experience Level"
                  placeholder="Select level..."
                  value={jobFormData.experienceLevel}
                  options={experienceLevelOptions}
                  wrapInGlobalWrapper={false}
                  required
                />
                <CustomInput
                  label="Key Skills"
                  placeholder="e.g., TypeScript, Node.js, AWS"
                  value={jobFormData.skills}
                  onChange={(e) => handleJobInputChange("skills", e)}
                  required
                />
                <CustomInput
                  label="Salary Range (USD)"
                  placeholder="e.g., $100k–$140k"
                  value={jobFormData.salaryRange}
                  onChange={(e) => handleJobInputChange("salaryRange", e)}
                  required
                />
              </div>

              <div className="mb-6">
                <CustomTextArea
                  label="Role Description"
                  placeholder="Add responsibilities, requirements, and any other helpful context..."
                  value={jobFormData.description}
                  onChange={(e) => handleJobInputChange("description", e)}
                  required
                />
              </div>

              <div className="flex items-center gap-2 mb-6">
                <input
                  type="checkbox"
                  id="job-agreement"
                  checked={agreementChecked}
                  onChange={(e) => setAgreementChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="job-agreement"
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
                title={isSubmitting ? "Submitting..." : "Submit Job Role"}
                onClick={submitJob}
                disabled={!agreementChecked || isSubmitting}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentForm;
