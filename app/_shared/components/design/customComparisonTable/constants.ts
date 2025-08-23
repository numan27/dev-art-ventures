export interface ComparisonItem {
  id: number;
  otherAgencies: string;
  devArtVentures: string;
  // SEO-friendly metadata
  category?: string;
  feature?: string;
}

export interface ComparisonProps {
  comparisonData?: ComparisonItem[];
  badge?: string;
  heading?: string;
  description?: string;
  centered?: boolean;
  maxParticles?: number;
  section?: "mission" | "services" | "testimonials";
  backgroundImage?: string;
  leftLabel?: string;
  rightLabel?: string;
  showLogo?: boolean;
  // Additional customization options
  tableId?: string;
  ariaLabel?: string;
  showHeader?: boolean;
  customStyles?: {
    tableClass?: string;
    rowClass?: string;
    cellClass?: string;
  };
}

export const defaultComparisonData: ComparisonItem[] = [
  {
    id: 1,
    otherAgencies: "Standard development practices",
    devArtVentures:
      "AI-enhanced development with intelligent code generation, automated testing, and smart debugging",
    category: "Development Intelligence",
    feature: "AI-Powered Development",
  },
  {
    id: 2,
    otherAgencies: "Basic SEO with standard optimization",
    devArtVentures:
      "Advanced AEO (AI-Enhanced Optimization) with machine learning algorithms",
    category: "SEO Technology",
    feature: "AI-Enhanced SEO",
  },
  {
    id: 3,
    otherAgencies: "Traditional content optimization",
    devArtVentures:
      "GEO (Generative Engine Optimization) for AI-powered content creation",
    category: "Content Strategy",
    feature: "AI Content Generation",
  },
  {
    id: 4,
    otherAgencies: "Standard MVP development",
    devArtVentures:
      "Rapid MVP development with iterative prototyping and user feedback",
    category: "Development Speed",
    feature: "Rapid Prototyping",
  },
  {
    id: 5,
    otherAgencies: "Limited team scaling options",
    devArtVentures:
      "Comprehensive staff augmentation with pre-vetted tech talent",
    category: "Team Scaling",
    feature: "Staff Augmentation",
  },
  {
    id: 6,
    otherAgencies: "Basic design templates",
    devArtVentures: "Custom UI/UX design with brand identity and user research",
    category: "Design Quality",
    feature: "Custom Design",
  },
  {
    id: 7,
    otherAgencies: "Standard web development",
    devArtVentures:
      "Full-stack development with modern tech stack and cloud deployment",
    category: "Development Stack",
    feature: "Modern Technology",
  },
  {
    id: 8,
    otherAgencies: "Limited post-launch support",
    devArtVentures:
      "24/7 technical support with continuous monitoring and updates",
    category: "Support & Maintenance",
    feature: "Continuous Support",
  },
  {
    id: 9,
    otherAgencies: "Basic performance optimization",
    devArtVentures:
      "Advanced performance optimization with CDN, caching, and analytics",
    category: "Performance",
    feature: "Speed Optimization",
  },
];

// Predefined comparison datasets for common use cases
export const comparisonDatasets = {
  aiServices: [
    {
      id: 1,
      otherAgencies: "Basic SEO optimization",
      devArtVentures:
        "AEO (AI-Enhanced Optimization) with predictive analytics",
      category: "AI Technology",
      feature: "Predictive SEO",
    },
    {
      id: 2,
      otherAgencies: "Manual content creation",
      devArtVentures:
        "GEO (Generative Engine Optimization) for automated content",
      category: "Content Automation",
      feature: "AI Content",
    },
    {
      id: 3,
      otherAgencies: "Standard keyword research",
      devArtVentures: "AI-powered keyword research with trend analysis",
      category: "Research Methods",
      feature: "AI Research",
    },
  ],
  mvpDevelopment: [
    {
      id: 1,
      otherAgencies: "6-12 months development time",
      devArtVentures: "2-4 weeks rapid MVP with iterative development",
      category: "Development Speed",
      feature: "Rapid Delivery",
    },
    {
      id: 2,
      otherAgencies: "Basic user testing",
      devArtVentures: "Continuous user feedback integration and A/B testing",
      category: "User Validation",
      feature: "Continuous Testing",
    },
    {
      id: 3,
      otherAgencies: "Standard tech stack",
      devArtVentures: "Modern, scalable tech stack with cloud deployment",
      category: "Technology",
      feature: "Modern Stack",
    },
  ],
  staffAugmentation: [
    {
      id: 1,
      otherAgencies: "Basic talent sourcing",
      devArtVentures: "Pre-vetted tech professionals with skill verification",
      category: "Talent Quality",
      feature: "Vetted Professionals",
    },
    {
      id: 2,
      otherAgencies: "Limited skill coverage",
      devArtVentures: "Full-stack expertise across design, development, and AI",
      category: "Skill Coverage",
      feature: "Full-Stack Talent",
    },
    {
      id: 3,
      otherAgencies: "Standard onboarding",
      devArtVentures: "Seamless integration with existing teams and processes",
      category: "Team Integration",
      feature: "Seamless Onboarding",
    },
  ],
  designServices: [
    {
      id: 1,
      otherAgencies: "Template-based designs",
      devArtVentures: "Custom UI/UX with brand identity and user research",
      category: "Design Approach",
      feature: "Custom Design",
    },
    {
      id: 2,
      otherAgencies: "Limited iterations",
      devArtVentures: "Unlimited revisions with user testing and feedback",
      category: "Design Process",
      feature: "User-Centered Design",
    },
    {
      id: 3,
      otherAgencies: "Basic responsive design",
      devArtVentures:
        "Advanced responsive design with accessibility compliance",
      category: "Design Quality",
      feature: "Accessibility First",
    },
  ],
};
