export interface ComparisonItem {
  id: number;
  otherAgencies: string;
  devArtVentures: string;
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
}

export const defaultComparisonData: ComparisonItem[] = [
  {
    id: 1,
    otherAgencies: "Experienced team delivering standard solutions.",
    devArtVentures: "Skilled specialists delivering customized solutions.",
  },
  {
    id: 2,
    otherAgencies: "Offers standard, template-based designs.",
    devArtVentures: "Offers innovative, bespoke website designs.",
  },
  {
    id: 3,
    otherAgencies: "Limited post-launch support and updates.",
    devArtVentures: "Comprehensive post-launch support and updates.",
  },
  {
    id: 4,
    otherAgencies: "Basic performance with average loading times.",
    devArtVentures: "Optimal performance with fast loading times.",
  },
  {
    id: 5,
    otherAgencies: "Basic SEO practices implemented.",
    devArtVentures: "Advanced SEO tactics for enhanced online visibility.",
  },
];
