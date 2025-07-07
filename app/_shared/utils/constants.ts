import { Images } from "assets";
import { StaticImageData } from "next/image";
import { routeConstant } from "routes/constants";
// import { routeConstant, type RouteConstant } from "../../../routes/constants";

export type Product = {
  id: string;
  name: string;
  price: string;
  color: string;
  colorsAvailable: string;
  image: StaticImageData;
  hoverImage: StaticImageData;
  images: StaticImageData[];
  category: "shirts" | "trousers" | "jeans";
  isNew?: boolean;
  description: string;
  sizes: string[];
  materials: string;
  fit: string;
  productCode: string;
  modelInfo: string;
  outOfStock?: boolean;
  discount?: number;
};

// const headerLinks: SideBarItemPathType[] = [
//   {
//     path: "",
//     title: routeConstant.shop.title,
//     children: [
//       {
//         path: routeConstant.collections.path + "?shirts",
//         title: routeConstant.shirts.title,
//       },
//       {
//         path: routeConstant.collections.path + "?trousers",
//         title: routeConstant.trousers.title,
//       },
//       {
//         path: routeConstant.collections.path + "?jeans",
//         title: routeConstant.jeans.title,
//       },
//       {
//         path: routeConstant.collections.path,
//         title: routeConstant.collections.title,
//       },
//     ],
//   },
//   {
//     path: "",
//     title: routeConstant.brand.title,
//     children: [
//       {
//         path: routeConstant.lookbook.path,
//         title: routeConstant.lookbook.title,
//       },
//       {
//         path: routeConstant.about.path,
//         title: routeConstant.about.title,
//       },
//     ],
//   },
//   {
//     path: "",
//     title: routeConstant.info.title,
//     children: [
//       {
//         path: routeConstant.contact.path,
//         title: routeConstant.contact.title,
//       },
//       {
//         path: routeConstant.sizeGuide.path,
//         title: routeConstant.sizeGuide.title,
//       },
//       {
//         path: routeConstant.termsAndConditions.path,
//         title: routeConstant.termsAndConditions.title,
//       },
//       {
//         path: routeConstant.shippingAndReturns.path,
//         title: routeConstant.shippingAndReturns.title,
//       },
//     ],
//   },
// ];

const serviceData = {
  "web-development": {
    title: "Web Development",
    subtitle: "Custom Web Solutions",
    description:
      "We create cutting-edge web applications that drive business growth and deliver exceptional user experiences.",
    longDescription:
      "Our web development services encompass everything from simple websites to complex web applications. We use modern technologies and best practices to build scalable, secure, and high-performance solutions that help your business succeed in the digital landscape.",
    icon: "🌐",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
      "Database Design",
      "Performance Optimization",
      "Security Implementation",
      "Responsive Design",
    ],
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "🟢" },
      { name: "TypeScript", icon: "📘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description:
          "We start by understanding your business goals, target audience, and technical requirements.",
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description:
          "Our designers create wireframes and prototypes to visualize the user experience.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Our developers build your website using modern technologies and best practices.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description:
          "We thoroughly test your website and launch it with proper monitoring and support.",
      },
    ],
    benefits: [
      "Scalable and maintainable codebase",
      "Fast loading times and optimal performance",
      "Mobile-first responsive design",
      "SEO-optimized for better visibility",
      "Secure and compliant with industry standards",
      "24/7 monitoring and support",
    ],
  },
  "mobile-development": {
    title: "Mobile Development",
    subtitle: "Native & Cross-Platform Apps",
    description:
      "We build powerful mobile applications that engage users and drive business results across iOS and Android platforms.",
    longDescription:
      "Our mobile development expertise spans native iOS and Android development, as well as cross-platform solutions. We create intuitive, high-performance mobile apps that provide seamless user experiences and help businesses connect with their customers on the go.",
    icon: "📱",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Social Media Integration",
      "Analytics & Tracking",
    ],
    technologies: [
      { name: "React Native", icon: "⚛️" },
      { name: "Flutter", icon: "🦋" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
      { name: "Firebase", icon: "🔥" },
      { name: "AWS Mobile", icon: "☁️" },
    ],
    process: [
      {
        step: "01",
        title: "Requirements Analysis",
        description:
          "We analyze your business needs and target audience to define app requirements.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        description:
          "Our designers create intuitive and engaging user interfaces for mobile.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "We build your mobile app using the most suitable technology stack.",
      },
      {
        step: "04",
        title: "Testing & Deployment",
        description:
          "Rigorous testing followed by app store deployment and launch.",
      },
    ],
    benefits: [
      "Native performance and user experience",
      "Cross-platform compatibility",
      "App store optimization",
      "Real-time updates and notifications",
      "Offline functionality",
      "Comprehensive analytics and insights",
    ],
  },
  mvps: {
    title: "MVPs",
    subtitle: "Rapid Prototyping & Validation",
    description:
      "We help you quickly build and validate your ideas with rapid MVP development that gets you to market faster.",
    longDescription:
      "Our MVP development services focus on speed and validation. We help startups and businesses quickly build functional prototypes to test market demand, gather user feedback, and iterate towards product-market fit. Our lean approach ensures you get maximum value with minimal investment.",
    icon: "🚀",
    features: [
      "Rapid Prototyping",
      "User Testing & Validation",
      "Iterative Development",
      "Market Research",
      "Feature Prioritization",
      "User Feedback Collection",
      "Analytics Integration",
      "Scalable Architecture",
    ],
    technologies: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "Firebase", icon: "🔥" },
      { name: "Vercel", icon: "▲" },
      { name: "Stripe", icon: "💳" },
      { name: "Analytics", icon: "📊" },
    ],
    process: [
      {
        step: "01",
        title: "Idea Validation",
        description:
          "We help validate your business idea through market research and user interviews.",
      },
      {
        step: "02",
        title: "Rapid Prototyping",
        description:
          "Quick development of core features to test key assumptions.",
      },
      {
        step: "03",
        title: "User Testing",
        description:
          "Gather feedback from real users to validate product-market fit.",
      },
      {
        step: "04",
        title: "Iteration & Scale",
        description: "Refine based on feedback and prepare for scaling.",
      },
    ],
    benefits: [
      "Faster time to market",
      "Reduced development costs",
      "Early user feedback",
      "Validated product-market fit",
      "Risk mitigation",
      "Foundation for scaling",
    ],
  },
  "ai-development": {
    title: "AI Development",
    subtitle: "Intelligent Solutions",
    description:
      "We develop custom AI solutions that automate processes, enhance decision-making, and create competitive advantages for your business.",
    longDescription:
      "Our AI development services leverage cutting-edge machine learning and artificial intelligence technologies to solve complex business problems. From predictive analytics to natural language processing, we create intelligent solutions that drive innovation and efficiency.",
    icon: "🧠",
    features: [
      "Machine Learning Models",
      "Deep Learning Solutions",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Recommendation Systems",
      "Chatbots & Virtual Assistants",
      "Data Mining & Analysis",
    ],
    technologies: [
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "Python", icon: "🐍" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "OpenAI", icon: "🤖" },
      { name: "AWS SageMaker", icon: "☁️" },
    ],
    process: [
      {
        step: "01",
        title: "Problem Definition",
        description:
          "We identify the specific business problem that AI can solve.",
      },
      {
        step: "02",
        title: "Data Preparation",
        description:
          "We collect, clean, and prepare data for AI model training.",
      },
      {
        step: "03",
        title: "Model Development",
        description:
          "We develop and train AI models using appropriate algorithms.",
      },
      {
        step: "04",
        title: "Integration & Deployment",
        description: "We integrate AI solutions into your existing systems.",
      },
    ],
    benefits: [
      "Automated decision-making processes",
      "Improved accuracy and efficiency",
      "Predictive insights and analytics",
      "Cost reduction through automation",
      "Enhanced customer experiences",
      "Competitive advantage through AI",
    ],
  },
  "generative-ai": {
    title: "Generative AI",
    subtitle: "Creative AI Solutions",
    description:
      "We integrate cutting-edge generative AI technologies to create innovative content, automate creative processes, and enhance user experiences.",
    longDescription:
      "Our generative AI services leverage the latest advancements in AI to create text, images, code, and other content. We help businesses automate creative processes, enhance customer interactions, and unlock new possibilities with AI-powered content generation.",
    icon: "🎨",
    features: [
      "Text Generation & Summarization",
      "Image Generation & Editing",
      "Code Generation & Assistance",
      "Content Creation Automation",
      "Chatbot Development",
      "Document Processing",
      "Creative Design Assistance",
      "Multilingual Content",
    ],
    technologies: [
      { name: "OpenAI GPT", icon: "🤖" },
      { name: "DALL-E", icon: "🎨" },
      { name: "Claude", icon: "🧠" },
      { name: "Stable Diffusion", icon: "🖼️" },
      { name: "LangChain", icon: "🔗" },
      { name: "Hugging Face", icon: "🤗" },
    ],
    process: [
      {
        step: "01",
        title: "Use Case Analysis",
        description:
          "We identify where generative AI can add value to your business processes.",
      },
      {
        step: "02",
        title: "Model Selection",
        description:
          "We choose the most appropriate AI models for your specific needs.",
      },
      {
        step: "03",
        title: "Integration Development",
        description:
          "We build custom integrations and workflows for your AI solutions.",
      },
      {
        step: "04",
        title: "Testing & Optimization",
        description:
          "We test, refine, and optimize the AI outputs for quality and accuracy.",
      },
    ],
    benefits: [
      "Automated content creation",
      "Enhanced creativity and productivity",
      "Improved customer engagement",
      "Cost-effective content generation",
      "Scalable creative processes",
      "Competitive advantage through AI",
    ],
  },
  "ai-agent": {
    title: "AI Agent",
    subtitle: "Intelligent Automation",
    description:
      "We develop intelligent AI agents that automate complex tasks, provide personalized assistance, and enhance business operations.",
    longDescription:
      "Our AI agent development creates intelligent systems that can understand context, make decisions, and perform tasks autonomously. These agents can handle customer service, data analysis, process automation, and more, providing 24/7 intelligent assistance.",
    icon: "🤖",
    features: [
      "Intelligent Task Automation",
      "Context-Aware Conversations",
      "Multi-Modal Interactions",
      "Learning & Adaptation",
      "Integration with Business Systems",
      "Real-Time Decision Making",
      "Personalized Assistance",
      "Scalable Operations",
    ],
    technologies: [
      { name: "OpenAI API", icon: "🤖" },
      { name: "LangChain", icon: "🔗" },
      { name: "Vector Databases", icon: "🗄️" },
      { name: "RAG Systems", icon: "📚" },
      { name: "Webhooks", icon: "🔗" },
      { name: "APIs", icon: "🌐" },
    ],
    process: [
      {
        step: "01",
        title: "Agent Design",
        description:
          "We design the agent's capabilities, personality, and interaction patterns.",
      },
      {
        step: "02",
        title: "Knowledge Integration",
        description:
          "We integrate relevant knowledge bases and data sources for the agent.",
      },
      {
        step: "03",
        title: "Development & Training",
        description:
          "We develop and train the agent with appropriate prompts and workflows.",
      },
      {
        step: "04",
        title: "Deployment & Monitoring",
        description:
          "We deploy the agent and continuously monitor its performance.",
      },
    ],
    benefits: [
      "24/7 automated assistance",
      "Reduced operational costs",
      "Improved customer satisfaction",
      "Scalable business operations",
      "Intelligent decision support",
      "Enhanced productivity",
    ],
  },
  "data-engineering": {
    title: "Data Engineering",
    subtitle: "Data Infrastructure & Analytics",
    description:
      "We build robust data pipelines, warehouses, and analytics infrastructure to transform raw data into actionable insights.",
    longDescription:
      "Our data engineering services help organizations collect, process, store, and analyze data at scale. We create reliable data infrastructure that enables data-driven decision making and supports advanced analytics and machine learning initiatives.",
    icon: "📊",
    features: [
      "Data Pipeline Development",
      "Data Warehouse Design",
      "ETL/ELT Processes",
      "Real-Time Data Processing",
      "Data Quality Management",
      "Big Data Solutions",
      "Analytics Infrastructure",
      "Data Governance",
    ],
    technologies: [
      { name: "Apache Kafka", icon: "📡" },
      { name: "Apache Spark", icon: "⚡" },
      { name: "Snowflake", icon: "❄️" },
      { name: "Airflow", icon: "🌪️" },
      { name: "dbt", icon: "🔄" },
      { name: "AWS Glue", icon: "☁️" },
    ],
    process: [
      {
        step: "01",
        title: "Data Assessment",
        description:
          "We analyze your current data landscape and identify improvement opportunities.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description:
          "We design scalable data architecture that meets your current and future needs.",
      },
      {
        step: "03",
        title: "Pipeline Development",
        description:
          "We build robust data pipelines for reliable data processing and storage.",
      },
      {
        step: "04",
        title: "Monitoring & Optimization",
        description:
          "We implement monitoring and continuously optimize your data infrastructure.",
      },
    ],
    benefits: [
      "Reliable data processing",
      "Scalable data infrastructure",
      "Improved data quality",
      "Faster insights delivery",
      "Cost-effective data management",
      "Foundation for AI/ML initiatives",
    ],
  },
  "cyber-security": {
    title: "Cyber Security",
    subtitle: "Protect Your Digital Assets",
    description:
      "We provide comprehensive cybersecurity solutions to protect your business from evolving digital threats and ensure compliance with security standards.",
    longDescription:
      "Our cybersecurity services help businesses protect their digital assets, maintain customer trust, and comply with industry regulations. We implement multi-layered security strategies that adapt to emerging threats and safeguard your critical business data.",
    icon: "🔒",
    features: [
      "Threat Detection & Response",
      "Vulnerability Assessment",
      "Security Audits",
      "Penetration Testing",
      "Incident Response",
      "Security Training",
      "Compliance Management",
      "Data Protection",
    ],
    technologies: [
      { name: "SIEM", icon: "🔍" },
      { name: "Firewall", icon: "🔥" },
      { name: "VPN", icon: "🛡️" },
      { name: "Encryption", icon: "🔐" },
      { name: "IDS/IPS", icon: "🚨" },
      { name: "EDR", icon: "💻" },
    ],
    process: [
      {
        step: "01",
        title: "Security Assessment",
        description:
          "We conduct comprehensive security audits and vulnerability assessments.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "We develop a customized security strategy based on your needs.",
      },
      {
        step: "03",
        title: "Implementation",
        description: "We implement security solutions and monitoring systems.",
      },
      {
        step: "04",
        title: "Ongoing Support",
        description: "We provide continuous monitoring and security updates.",
      },
    ],
    benefits: [
      "Protection against cyber threats",
      "Compliance with security regulations",
      "Reduced risk of data breaches",
      "Enhanced customer trust",
      "24/7 security monitoring",
      "Rapid incident response",
    ],
  },
  "cloud-strategy": {
    title: "Cloud Strategy",
    subtitle: "Strategic Cloud Solutions",
    description:
      "We help you develop and implement comprehensive cloud strategies that optimize costs, improve performance, and enable digital transformation.",
    longDescription:
      "Our cloud strategy services help organizations plan, migrate, and optimize their cloud infrastructure. We provide expert guidance on cloud adoption, cost optimization, security, and scalability to ensure your cloud journey delivers maximum value.",
    icon: "☁️",
    features: [
      "Cloud Migration Planning",
      "Cost Optimization",
      "Security & Compliance",
      "Performance Optimization",
      "Scalability Planning",
      "Disaster Recovery",
      "Multi-Cloud Strategy",
      "DevOps Implementation",
    ],
    technologies: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🔷" },
      { name: "Google Cloud", icon: "🔵" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Docker", icon: "🐳" },
    ],
    process: [
      {
        step: "01",
        title: "Cloud Assessment",
        description:
          "We evaluate your current infrastructure and identify cloud opportunities.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "We create a comprehensive cloud strategy aligned with your business goals.",
      },
      {
        step: "03",
        title: "Migration & Implementation",
        description:
          "We execute the migration plan with minimal disruption to your business.",
      },
      {
        step: "04",
        title: "Optimization & Management",
        description:
          "We continuously optimize and manage your cloud infrastructure.",
      },
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability and performance",
      "Enhanced security and compliance",
      "Faster time to market",
      "Disaster recovery capabilities",
      "Operational efficiency",
    ],
  },
  networking: {
    title: "Networking",
    subtitle: "Network Infrastructure",
    description:
      "We design, implement, and manage robust network infrastructure that ensures reliable connectivity and optimal performance for your business.",
    longDescription:
      "Our networking services provide comprehensive network solutions from design to implementation and ongoing management. We create secure, scalable, and high-performance networks that support your business operations and growth.",
    icon: "🌐",
    features: [
      "Network Design & Architecture",
      "Network Security",
      "Performance Optimization",
      "Network Monitoring",
      "Disaster Recovery",
      "Wireless Solutions",
      "VPN Implementation",
      "Network Maintenance",
    ],
    technologies: [
      { name: "Cisco", icon: "🔵" },
      { name: "Juniper", icon: "🟡" },
      { name: "Fortinet", icon: "🟠" },
      { name: "Aruba", icon: "🟢" },
      { name: "VMware", icon: "🟣" },
      { name: "SD-WAN", icon: "🌐" },
    ],
    process: [
      {
        step: "01",
        title: "Network Assessment",
        description:
          "We analyze your current network infrastructure and identify improvement areas.",
      },
      {
        step: "02",
        title: "Design & Planning",
        description:
          "We design a network architecture that meets your current and future needs.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "We implement the network solution with minimal disruption to your operations.",
      },
      {
        step: "04",
        title: "Management & Support",
        description:
          "We provide ongoing network management and support services.",
      },
    ],
    benefits: [
      "Reliable network connectivity",
      "Enhanced security and performance",
      "Scalable network infrastructure",
      "Reduced downtime and outages",
      "Improved user experience",
      "Cost-effective network management",
    ],
  },
  compliance: {
    title: "Compliance",
    subtitle: "Regulatory Compliance",
    description:
      "We help organizations achieve and maintain compliance with industry regulations and standards through comprehensive compliance solutions.",
    longDescription:
      "Our compliance services ensure your organization meets regulatory requirements and industry standards. We provide expert guidance on GDPR, HIPAA, SOX, ISO standards, and other compliance frameworks to protect your business and build customer trust.",
    icon: "📋",
    features: [
      "GDPR Compliance",
      "HIPAA Compliance",
      "SOX Compliance",
      "ISO Standards",
      "PCI DSS",
      "SOC 2",
      "Compliance Auditing",
      "Policy Development",
    ],
    technologies: [
      { name: "Compliance Tools", icon: "🛠️" },
      { name: "Audit Software", icon: "📊" },
      { name: "Documentation", icon: "📄" },
      { name: "Monitoring", icon: "👁️" },
      { name: "Reporting", icon: "📈" },
      { name: "Training", icon: "🎓" },
    ],
    process: [
      {
        step: "01",
        title: "Compliance Assessment",
        description:
          "We assess your current compliance status and identify gaps.",
      },
      {
        step: "02",
        title: "Gap Analysis",
        description:
          "We identify specific areas that need improvement to meet compliance requirements.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "We implement necessary controls, policies, and procedures.",
      },
      {
        step: "04",
        title: "Monitoring & Maintenance",
        description:
          "We provide ongoing monitoring and maintenance of compliance programs.",
      },
    ],
    benefits: [
      "Regulatory compliance",
      "Reduced legal and financial risks",
      "Enhanced customer trust",
      "Improved data protection",
      "Competitive advantage",
      "Operational efficiency",
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    subtitle: "End-to-End Cloud Services",
    description:
      "We provide comprehensive cloud solutions including migration, management, optimization, and support to maximize your cloud investment.",
    longDescription:
      "Our cloud solutions encompass the full spectrum of cloud services from initial assessment to ongoing management. We help organizations leverage the power of cloud computing to drive innovation, reduce costs, and improve operational efficiency.",
    icon: "☁️",
    features: [
      "Cloud Migration Services",
      "Infrastructure Management",
      "Cost Optimization",
      "Security Implementation",
      "Performance Tuning",
      "Backup & Recovery",
      "Monitoring & Alerting",
      "24/7 Support",
    ],
    technologies: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🔷" },
      { name: "Google Cloud", icon: "🔵" },
      { name: "Kubernetes", icon: "⚓" },
      { name: "Docker", icon: "🐳" },
      { name: "Terraform", icon: "🏗️" },
    ],
    process: [
      {
        step: "01",
        title: "Cloud Assessment",
        description:
          "We evaluate your current infrastructure and cloud readiness.",
      },
      {
        step: "02",
        title: "Migration Planning",
        description:
          "We develop a comprehensive migration strategy and timeline.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "We execute the migration with minimal business disruption.",
      },
      {
        step: "04",
        title: "Optimization",
        description:
          "We continuously optimize your cloud environment for cost and performance.",
      },
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability and flexibility",
      "Enhanced security and reliability",
      "Faster deployment capabilities",
      "Disaster recovery solutions",
      "24/7 expert support",
    ],
  },
  "product-design": {
    title: "Product Design",
    subtitle: "User-Centered Design",
    description:
      "We create user-centered product designs that deliver exceptional user experiences and drive business success through thoughtful design strategy.",
    longDescription:
      "Our product design services focus on creating intuitive, engaging, and effective user experiences. We combine user research, design thinking, and technical expertise to design products that users love and businesses value.",
    icon: "📐",
    features: [
      "User Research & Analysis",
      "Design Strategy",
      "Wireframing & Prototyping",
      "User Testing",
      "Design Systems",
      "Interactive Prototypes",
      "Design Documentation",
      "Design Handoff",
    ],
    technologies: [
      { name: "Figma", icon: "🎨" },
      { name: "Sketch", icon: "✏️" },
      { name: "Adobe XD", icon: "🎯" },
      { name: "InVision", icon: "👁️" },
      { name: "Principle", icon: "⚡" },
      { name: "Miro", icon: "🧠" },
    ],
    process: [
      {
        step: "01",
        title: "Research & Discovery",
        description:
          "We conduct user research and analyze business requirements.",
      },
      {
        step: "02",
        title: "Design Strategy",
        description:
          "We develop design strategy and create user personas and journey maps.",
      },
      {
        step: "03",
        title: "Design & Prototyping",
        description:
          "We create wireframes, prototypes, and high-fidelity designs.",
      },
      {
        step: "04",
        title: "Testing & Iteration",
        description:
          "We test designs with users and iterate based on feedback.",
      },
    ],
    benefits: [
      "Improved user experience",
      "Increased user engagement",
      "Reduced development costs",
      "Faster time to market",
      "Higher conversion rates",
      "Competitive advantage",
    ],
  },
  "ux-design": {
    title: "UX Design",
    subtitle: "User Experience Design",
    description:
      "We design exceptional user experiences that delight users, drive engagement, and achieve business objectives through thoughtful UX design.",
    longDescription:
      "Our UX design services focus on creating meaningful, accessible, and enjoyable user experiences. We use research-driven design methods to understand user needs and create solutions that solve real problems while delivering business value.",
    icon: "👥",
    features: [
      "User Research",
      "Information Architecture",
      "User Journey Mapping",
      "Interaction Design",
      "Usability Testing",
      "Accessibility Design",
      "User Personas",
      "Experience Strategy",
    ],
    technologies: [
      { name: "Figma", icon: "🎨" },
      { name: "Sketch", icon: "✏️" },
      { name: "Adobe XD", icon: "🎯" },
      { name: "InVision", icon: "👁️" },
      { name: "Maze", icon: "🧪" },
      { name: "Hotjar", icon: "🔥" },
    ],
    process: [
      {
        step: "01",
        title: "User Research",
        description:
          "We conduct comprehensive user research to understand needs and pain points.",
      },
      {
        step: "02",
        title: "Information Architecture",
        description:
          "We organize information and create intuitive navigation structures.",
      },
      {
        step: "03",
        title: "Interaction Design",
        description: "We design user interactions and interface behaviors.",
      },
      {
        step: "04",
        title: "Testing & Validation",
        description:
          "We test designs with real users and validate our solutions.",
      },
    ],
    benefits: [
      "Enhanced user satisfaction",
      "Improved usability and accessibility",
      "Reduced user errors",
      "Increased user engagement",
      "Higher conversion rates",
      "Competitive differentiation",
    ],
  },
  "ui-design": {
    title: "UI Design",
    subtitle: "User Interface Design",
    description:
      "We create beautiful, functional, and accessible user interfaces that bring designs to life and deliver exceptional visual experiences.",
    longDescription:
      "Our UI design services focus on creating visually appealing and functional interfaces that align with brand identity and user expectations. We combine aesthetics with usability to create interfaces that are both beautiful and effective.",
    icon: "🎨",
    features: [
      "Visual Design",
      "Design Systems",
      "Responsive Design",
      "Accessibility Design",
      "Brand Integration",
      "Component Libraries",
      "Design Specifications",
      "Design Handoff",
    ],
    technologies: [
      { name: "Figma", icon: "🎨" },
      { name: "Sketch", icon: "✏️" },
      { name: "Adobe Creative Suite", icon: "🎯" },
      { name: "Principle", icon: "⚡" },
      { name: "Lottie", icon: "🎬" },
      { name: "Storybook", icon: "📚" },
    ],
    process: [
      {
        step: "01",
        title: "Visual Strategy",
        description:
          "We develop visual design strategy aligned with brand and user needs.",
      },
      {
        step: "02",
        title: "Design System",
        description:
          "We create comprehensive design systems for consistency and scalability.",
      },
      {
        step: "03",
        title: "Interface Design",
        description: "We design beautiful and functional user interfaces.",
      },
      {
        step: "04",
        title: "Implementation Support",
        description:
          "We provide design specifications and support for development.",
      },
    ],
    benefits: [
      "Consistent brand experience",
      "Improved visual appeal",
      "Enhanced usability",
      "Faster development",
      "Better accessibility",
      "Scalable design system",
    ],
  },
  "it-consulting": {
    title: "IT Consulting",
    subtitle: "Strategic Technology Guidance",
    description:
      "We provide strategic IT consulting services to help organizations make informed technology decisions and achieve digital transformation goals.",
    longDescription:
      "Our IT consulting services help organizations navigate complex technology decisions, optimize IT operations, and achieve digital transformation objectives. We provide expert guidance on technology strategy, architecture, and implementation.",
    icon: "💼",
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "IT Architecture",
      "Process Optimization",
      "Technology Assessment",
      "Vendor Selection",
      "Project Management",
      "Change Management",
    ],
    technologies: [
      { name: "Strategy Tools", icon: "📊" },
      { name: "Architecture Tools", icon: "🏗️" },
      { name: "Project Management", icon: "📋" },
      { name: "Analytics", icon: "📈" },
      { name: "Documentation", icon: "📄" },
      { name: "Collaboration", icon: "🤝" },
    ],
    process: [
      {
        step: "01",
        title: "Assessment & Analysis",
        description:
          "We assess your current technology landscape and business objectives.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "We develop comprehensive technology strategy and roadmap.",
      },
      {
        step: "03",
        title: "Implementation Planning",
        description: "We create detailed implementation plans and timelines.",
      },
      {
        step: "04",
        title: "Execution Support",
        description:
          "We provide ongoing support and guidance during implementation.",
      },
    ],
    benefits: [
      "Informed technology decisions",
      "Optimized IT operations",
      "Reduced technology risks",
      "Improved efficiency",
      "Cost optimization",
      "Digital transformation success",
    ],
  },
  "quality-assurance": {
    title: "Quality Assurance",
    subtitle: "Comprehensive Testing",
    description:
      "We provide comprehensive quality assurance and testing services to ensure your software meets the highest standards of quality and reliability.",
    longDescription:
      "Our quality assurance services help organizations deliver high-quality software through comprehensive testing strategies. We use automated and manual testing approaches to identify issues early and ensure software reliability and performance.",
    icon: "✅",
    features: [
      "Automated Testing",
      "Manual Testing",
      "Performance Testing",
      "Security Testing",
      "Mobile Testing",
      "API Testing",
      "Test Automation",
      "Quality Metrics",
    ],
    technologies: [
      { name: "Selenium", icon: "🤖" },
      { name: "Cypress", icon: "🌲" },
      { name: "Jest", icon: "⚡" },
      { name: "JMeter", icon: "📊" },
      { name: "Postman", icon: "📮" },
      { name: "Appium", icon: "📱" },
    ],
    process: [
      {
        step: "01",
        title: "Test Strategy",
        description:
          "We develop comprehensive testing strategy and test plans.",
      },
      {
        step: "02",
        title: "Test Design",
        description: "We design test cases and create automated test scripts.",
      },
      {
        step: "03",
        title: "Test Execution",
        description: "We execute tests and report on quality metrics.",
      },
      {
        step: "04",
        title: "Continuous Improvement",
        description:
          "We continuously improve testing processes and automation.",
      },
    ],
    benefits: [
      "Higher software quality",
      "Reduced defects and bugs",
      "Improved user experience",
      "Faster release cycles",
      "Cost-effective testing",
      "Risk mitigation",
    ],
  },
  "product-management": {
    title: "Product Management",
    subtitle: "Strategic Product Leadership",
    description:
      "We provide product management services to help organizations develop and launch successful products that meet market needs and drive business growth.",
    longDescription:
      "Our product management services help organizations define, develop, and launch successful products. We provide strategic guidance on product strategy, roadmap planning, feature prioritization, and go-to-market strategies.",
    icon: "📈",
    features: [
      "Product Strategy",
      "Roadmap Planning",
      "Feature Prioritization",
      "Market Research",
      "User Research",
      "Stakeholder Management",
      "Go-to-Market Strategy",
      "Product Analytics",
    ],
    technologies: [
      { name: "Product Tools", icon: "📊" },
      { name: "Analytics", icon: "📈" },
      { name: "Research Tools", icon: "🔍" },
      { name: "Collaboration", icon: "🤝" },
      { name: "Project Management", icon: "📋" },
      { name: "Communication", icon: "💬" },
    ],
    process: [
      {
        step: "01",
        title: "Product Discovery",
        description:
          "We conduct market and user research to identify opportunities.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "We develop product strategy and roadmap aligned with business goals.",
      },
      {
        step: "03",
        title: "Execution Support",
        description:
          "We support product development and feature prioritization.",
      },
      {
        step: "04",
        title: "Launch & Optimization",
        description: "We support product launch and continuous optimization.",
      },
    ],
    benefits: [
      "Clear product direction",
      "Improved market fit",
      "Better feature prioritization",
      "Faster time to market",
      "Increased user satisfaction",
      "Business growth",
    ],
  },
  "software-maintenance": {
    title: "Software Maintenance",
    subtitle: "Ongoing Support & Updates",
    description:
      "We provide comprehensive software maintenance services to ensure your applications remain secure, up-to-date, and perform optimally.",
    longDescription:
      "Our software maintenance services help organizations keep their applications running smoothly, securely, and efficiently. We provide ongoing support, updates, and optimization to ensure long-term success of your software investments.",
    icon: "🔧",
    features: [
      "Bug Fixes & Updates",
      "Security Patches",
      "Performance Optimization",
      "Feature Updates",
      "Monitoring & Alerting",
      "Backup & Recovery",
      "Documentation Updates",
      "Technical Support",
    ],
    technologies: [
      { name: "Monitoring Tools", icon: "👁️" },
      { name: "CI/CD", icon: "🔄" },
      { name: "Security Tools", icon: "🔒" },
      { name: "Performance Tools", icon: "⚡" },
      { name: "Backup Systems", icon: "💾" },
      { name: "Support Tools", icon: "🛠️" },
    ],
    process: [
      {
        step: "01",
        title: "Maintenance Assessment",
        description:
          "We assess current software health and identify maintenance needs.",
      },
      {
        step: "02",
        title: "Maintenance Planning",
        description: "We develop maintenance schedules and procedures.",
      },
      {
        step: "03",
        title: "Implementation",
        description: "We implement updates, fixes, and optimizations.",
      },
      {
        step: "04",
        title: "Monitoring & Support",
        description: "We provide ongoing monitoring and support services.",
      },
    ],
    benefits: [
      "Improved software reliability",
      "Enhanced security",
      "Better performance",
      "Reduced downtime",
      "Extended software lifespan",
      "Cost-effective maintenance",
    ],
  },
  "support-maintenance": {
    title: "Support & Maintenance",
    subtitle: "24/7 Technical Support",
    description:
      "We provide comprehensive support and maintenance services to ensure your IT infrastructure runs smoothly and efficiently around the clock.",
    longDescription:
      "Our support and maintenance services provide organizations with reliable, responsive technical support and proactive maintenance. We help prevent issues before they occur and resolve problems quickly when they do arise.",
    icon: "🛠️",
    features: [
      "24/7 Technical Support",
      "System Monitoring",
      "Backup Management",
      "Disaster Recovery",
      "Performance Optimization",
      "Security Updates",
      "Hardware Maintenance",
      "Network Support",
    ],
    technologies: [
      { name: "Monitoring Systems", icon: "👁️" },
      { name: "Backup Solutions", icon: "💾" },
      { name: "Support Tools", icon: "🛠️" },
      { name: "Security Tools", icon: "🔒" },
      { name: "Network Tools", icon: "🌐" },
      { name: "Communication", icon: "💬" },
    ],
    process: [
      {
        step: "01",
        title: "Support Setup",
        description: "We establish support processes and monitoring systems.",
      },
      {
        step: "02",
        title: "Proactive Monitoring",
        description: "We monitor systems and identify potential issues early.",
      },
      {
        step: "03",
        title: "Issue Resolution",
        description:
          "We quickly resolve issues and implement preventive measures.",
      },
      {
        step: "04",
        title: "Continuous Improvement",
        description: "We continuously improve support processes and systems.",
      },
    ],
    benefits: [
      "24/7 reliable support",
      "Reduced downtime",
      "Improved system performance",
      "Enhanced security",
      "Peace of mind",
      "Cost-effective support",
    ],
  },
};

export { serviceData };
