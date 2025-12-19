
import startupsImage from "@assets/generated_images/startups_saas_ai_office.png";
import enterpriseImage from "@assets/generated_images/enterprise_ai_headquarters.png";
import ecommerceImage from "@assets/generated_images/e-commerce_ai_automation.png";
import realEstateImage from "@assets/generated_images/real_estate_ai_matching.png";
import healthcareImage from "@assets/generated_images/healthcare_ai_diagnostics.png";
import educationImage from "@assets/generated_images/education_ai_learning.png";
import localBusinessImage from "@assets/generated_images/local_business_ai_service.png";
import customLlmImage from "@assets/generated_images/custom_llm_ai_system.png";
import decisionSupportImage from "@assets/generated_images/decision_support_ai_dashboard.png";
import contentIntelImage from "@assets/generated_images/content_intelligence_ai_platform.png";
import salesAutoImage from "@assets/generated_images/sales_automation_workflow.png";
import marketingAutoImage from "@assets/generated_images/marketing_automation_platform.png";
import opsWorkflowImage from "@assets/generated_images/operations_workflow_ai.png";
import aiNativeWebImage from "@assets/generated_images/ai_native_website_builder.png";
import saasDevImage from "@assets/generated_images/saas_platform_development.png";
import entDashImage from "@assets/generated_images/enterprise_dashboard_system.png";
import aiSalesAgentImage from "@assets/generated_images/ai_sales_agent_chat.png";
import customerSupportImage from "@assets/generated_images/customer_support_chatbot.png";
import followUpAgentImage from "@assets/generated_images/multi-channel_ai_assistant.png";
import realtimeAnalyticsImage from "@assets/generated_images/real-time_analytics_dashboard.png";
import predictiveAnalyticsImage from "@assets/generated_images/predictive_analytics_engine.png";
import dataIntegrationImage from "@assets/generated_images/data_integration_platform.png";
import hrSupportImage from "@assets/generated_images/hrms_management_system.png";
import customSoftwareImage from "@assets/generated_images/project_task_management.png";
import enterpriseAutoImage from "@assets/generated_images/ai_crm_dashboard_analytics.png";
import analysisAgentImage from "@assets/generated_images/ai_chatbot_automation_saas.png";
import decisionIntelImage from "@assets/generated_images/ai_team_assistant_interface.png";


type SubIndustry = {
  id: string;
  name: string;
  description: string;
  icon: string;
  tagline: string;
  overview: string;
  whyChoose: {
    intro: string;
    points: string[];
  };
  whatWeBuild: {
    intro: string;
    solutions: string[];
    footer: string;
  };
  coreCapabilities: string[];
  idealFor: string[];
  businessOutcomes: string[];
};

type RelatedService = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  image: string;
};

export const allServices: RelatedService[] = [
  { id: "1", title: "Custom LLM Systems", description: "Build tailored large language model solutions for content generation, intelligence, and enterprise automation.", icon: "🤖", category: "Generative AI Solutions", image: customLlmImage },
  { id: "2", title: "Decision Support AI", description: "AI-powered systems that analyze data and provide actionable insights for strategic decision-making.", icon: "📊", category: "Generative AI Solutions", image: decisionSupportImage },
  { id: "3", title: "Content Intelligence", description: "Automated content creation, summarization, and optimization powered by advanced AI models.", icon: "✍️", category: "Generative AI Solutions", image: contentIntelImage },
  { id: "6", title: "Operations Workflow", description: "Streamline operational processes with intelligent automation and real-time monitoring.", icon: "🔄", category: "AI Automation & Workflows", image: opsWorkflowImage },
  { id: "4", title: "Sales Automation", description: "Automate lead scoring, follow-ups, and pipeline management with AI-driven workflows.", icon: "💼", category: "AI Automation & Workflows", image: salesAutoImage },
  { id: "5", title: "Marketing Automation", description: "End-to-end campaign automation, personalization, and performance optimization.", icon: "📢", category: "AI Automation & Workflows", image: marketingAutoImage },
  { id: "20", title: "HR & Support Systems", description: "Automate HR processes and customer support with AI-powered ticket routing and responses.", icon: "👥", category: "AI Automation & Workflows", image: hrSupportImage },
  { id: "7", title: "AI-Native Websites", description: "Build modern, intelligent websites with integrated AI features and personalization.", icon: "🌐", category: "AI-Powered Development", image: aiNativeWebImage },
  { id: "8", title: "SaaS Platforms", description: "Develop scalable SaaS products with AI capabilities built into the core architecture.", icon: "☁️", category: "AI-Powered Development", image: saasDevImage },
  { id: "9", title: "Enterprise Dashboards", description: "Create intelligent dashboards with predictive analytics and automated insights.", icon: "📈", category: "AI-Powered Development", image: entDashImage },
  { id: "58", title: "Custom Software", description: "Build production-grade software with AI features tailored to your business needs.", icon: "🛠️", category: "AI-Powered Development", image: customSoftwareImage },
  { id: "10", title: "Sales Agents", description: "Autonomous AI agents that qualify leads, handle objections, and close deals 24/7.", icon: "💰", category: "AI Agents & Chatbots", image: aiSalesAgentImage },
  { id: "11", title: "Support Agents", description: "Intelligent support bots that resolve issues, escalate when needed, and learn continuously.", icon: "🎧", category: "AI Agents & Chatbots", image: customerSupportImage },
  { id: "12", title: "Follow-up Agents", description: "Automated follow-up systems that nurture leads and maintain customer relationships.", icon: "📧", category: "AI Agents & Chatbots", image: followUpAgentImage },
  { id: "71", title: "Analysis Agents", description: "AI agents that monitor, analyze, and report on key business metrics automatically.", icon: "🔍", category: "AI Agents & Chatbots", image: analysisAgentImage },
  { id: "13", title: "Real-time Dashboards", description: "Live data visualization and monitoring dashboards with automated alerts.", icon: "📉", category: "Data & Intelligence", image: realtimeAnalyticsImage },
  { id: "14", title: "Predictive Analytics", description: "Machine learning models that forecast trends and identify opportunities.", icon: "🔮", category: "Data & Intelligence", image: predictiveAnalyticsImage },
  { id: "16", title: "Decision Intelligence", description: "AI systems that synthesize data and recommend optimal business decisions.", icon: "🎯", category: "Data & Intelligence", image: decisionIntelImage },
  { id: "15", title: "Data Integration", description: "Connect and unify data sources for comprehensive business intelligence.", icon: "🔗", category: "Data & Intelligence", image: dataIntegrationImage },
];

export function getRelatedServices(subIndustry: SubIndustry, industryId: string): RelatedService[] {
  const name = subIndustry.name.toLowerCase();
  const desc = subIndustry.description.toLowerCase();
  const overview = subIndustry.overview.toLowerCase();
  const combined = `${name} ${desc} ${overview}`;

  const serviceMatches: { service: RelatedService; score: number }[] = [];

  allServices.forEach(service => {
    let score = 0;

    if (combined.includes("sales") || combined.includes("lead") || combined.includes("crm")) {
      if (service.title === "Sales Automation" || service.title === "Sales Agents" || service.title === "Follow-up Agents") score += 3;
    }
    if (combined.includes("marketing") || combined.includes("campaign") || combined.includes("content")) {
      if (service.title === "Marketing Automation" || service.title === "Content Intelligence") score += 3;
    }
    if (combined.includes("support") || combined.includes("customer service") || combined.includes("ticket")) {
      if (service.title === "Support Agents" || service.title === "HR & Support Systems") score += 3;
    }
    if (combined.includes("dashboard") || combined.includes("analytics") || combined.includes("data") || combined.includes("insights")) {
      if (service.title === "Real-time Dashboards" || service.title === "Predictive Analytics" || service.title === "Enterprise Dashboards" || service.title === "Decision Intelligence") score += 3;
    }
    if (combined.includes("automation") || combined.includes("workflow") || combined.includes("process")) {
      if (service.title === "Operations Workflow" || service.title === "Enterprise Automation") score += 3;
    }
    if (combined.includes("saas") || combined.includes("platform") || combined.includes("software")) {
      if (service.title === "SaaS Platforms" || service.title === "Custom Software") score += 3;
    }
    if (combined.includes("website") || combined.includes("web") || combined.includes("online")) {
      if (service.title === "AI-Native Websites") score += 3;
    }
    if (combined.includes("hr") || combined.includes("recruitment") || combined.includes("employee") || combined.includes("hiring")) {
      if (service.title === "HR & Support Systems") score += 3;
    }
    if (combined.includes("llm") || combined.includes("language model") || combined.includes("ai-powered") || combined.includes("intelligent")) {
      if (service.title === "Custom LLM Systems" || service.title === "Decision Support AI") score += 2;
    }
    if (combined.includes("integration") || combined.includes("connect") || combined.includes("unify")) {
      if (service.title === "Data Integration") score += 3;
    }
    if (combined.includes("forecast") || combined.includes("predict") || combined.includes("trend")) {
      if (service.title === "Predictive Analytics") score += 3;
    }
    if (combined.includes("agent") || combined.includes("bot") || combined.includes("chatbot") || combined.includes("assistant")) {
      if (service.title === "Sales Agents" || service.title === "Support Agents" || service.title === "Analysis Agents") score += 2;
    }

    if (industryId === "enterprises" || industryId === "startups-saas") {
      if (service.title === "Enterprise Dashboards" || service.title === "SaaS Platforms" || service.title === "Enterprise Automation") score += 1;
    }
    if (industryId === "ecommerce") {
      if (service.title === "Sales Automation" || service.title === "Marketing Automation" || service.title === "Predictive Analytics") score += 1;
    }
    if (industryId === "healthcare" || industryId === "education") {
      if (service.title === "Support Agents" || service.title === "Custom Software" || service.title === "Data Integration") score += 1;
    }
    if (industryId === "real-estate" || industryId === "local-businesses") {
      if (service.title === "Sales Agents" || service.title === "Follow-up Agents" || service.title === "AI-Native Websites") score += 1;
    }

    if (score > 0) {
      serviceMatches.push({ service, score });
    }
  });

  serviceMatches.sort((a, b) => b.score - a.score);

  const topServices = serviceMatches.slice(0, 4).map(m => m.service);

  if (topServices.length < 4) {
    const defaultServices = [
      allServices.find(s => s.title === "Custom LLM Systems")!,
      allServices.find(s => s.title === "Enterprise Automation")!,
      allServices.find(s => s.title === "Support Agents")!,
      allServices.find(s => s.title === "Real-time Dashboards")!,
    ];
    const existingTitles = new Set(topServices.map(s => s.title));
    for (const defaultService of defaultServices) {
      if (topServices.length >= 4) break;
      if (!existingTitles.has(defaultService.title)) {
        topServices.push(defaultService);
        existingTitles.add(defaultService.title);
      }
    }
  }

  return topServices;
}

type Industry = {
  id: string;
  name: string;
  icon: string;
  image: string;
  imageAlt: string;
  tagline: string;
  description: string;
  subIndustries: SubIndustry[];
};

export const industries: Industry[] = [
  {
    id: "startups-saas",
    name: "Startups & SaaS",
    icon: "🚀",
    image: startupsImage,
    imageAlt: "NanoFlows Startups and SaaS AI Solutions - AI-powered growth engines for scaling companies and startup automation",
    tagline: "AI-Powered Growth for Fast-Moving Teams",
    description: "Scale your startup with AI systems that automate customer acquisition, optimize retention, and deliver enterprise-grade experiences without enterprise-sized teams.",
    subIndustries: [
      {
        id: "fintech-startups",
        name: "FinTech Startups",
        description: "AI solutions for financial technology startups including payment processing, lending platforms, and investment tools.",
        icon: "🏦",
        tagline: "AI-Powered, Secure & Scalable Financial SaaS Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help FinTech startups build AI-native financial platforms that are secure, compliant, scalable, and automation-driven. From digital payments and lending platforms to AI-driven finance tools, we design future-ready FinTech SaaS products that handle real-world financial complexity with intelligence at the core. We build trust-first, AI-powered FinTech systems — not just apps.",
        whyChoose: {
          intro: "FinTech is not regular SaaS. It needs security, compliance, accuracy, and intelligence.",
          points: [
            "AI-first architecture for risk, fraud & decisioning",
            "Multi-tenant FinTech SaaS design",
            "Automation-driven operations (KYC, onboarding, workflows)",
            "Data security & role-based access by default",
            "Built for scale, audits & future integrations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled FinTech SaaS solutions, including:",
          solutions: [
            "Digital payments & wallet platforms",
            "Lending & loan management SaaS",
            "Subscription & billing platforms",
            "Investment & wealth-tech tools",
            "AI-based financial dashboards",
            "Embedded finance & API-based platforms",
            "Internal FinTech tools for enterprises"
          ],
          footer: "All solutions are cloud-native, scalable, and automation-ready."
        },
        coreCapabilities: [
          "AI-driven data analysis & insights",
          "Fraud detection & anomaly monitoring (AI-assisted)",
          "Automated onboarding & KYC workflows",
          "Role-based access & multi-tenant isolation",
          "Secure APIs & integrations",
          "AI dashboards & real-time analytics"
        ],
        idealFor: [
          "Early-stage FinTech startups",
          "Digital payment platforms",
          "Asset management firms",
          "Neobanks & lending apps"
        ],
        businessOutcomes: [
          "Faster time-to-market for financial products",
          "Reduced operational costs via automation",
          "Increased security & compliance adherence",
          "Scalable infrastructure from Day 1"
        ]
      },
      {
        id: "edtech-startups",
        name: "EdTech Startups",
        description: "AI-powered educational platforms offering personalized learning experiences, automated grading, and smart content delivery.",
        icon: "🎓",
        tagline: "AI-Powered Learning, Personalized for every Student",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we empower EdTech startups to move beyond static video courses. We build AI-native learning platforms that adapt to students, automate administrative tasks, and provide real-time performance insights. Whether you are building an LMS, a tutoring app, or a corporate training platform, we help you create intelligent educational experiences that drive engagement and outcomes.",
        whyChoose: {
          intro: "Education is evolving. Your platform should too.",
          points: [
            "AI-driven personalization engines",
            "Scalable video & content delivery",
            "Built-in gamification & engagement tools",
            "Automated enhancing & grading capabilities",
            "Seamless integration with existing school systems"
          ]
        },
        whatWeBuild: {
          intro: "We build comprehensive EdTech solutions:",
          solutions: [
            "Custom Learning Management Systems (LMS)",
            "AI-powered tutoring & quiz apps",
            "Virtual classroom & live streaming platforms",
            "Skill assessment & certification tools",
            "Corporate training & employee onboarding SaaS",
            "Mobile-first learning applications"
          ],
          footer: "Designed for engagement, retention, and learning outcomes."
        },
        coreCapabilities: [
          "Adaptive learning paths & recommendations",
          "AI-generated quizzes & content",
          "Real-time student performance analytics",
          "Interactive video players & live classes",
          "Multi-language support & localization"
        ],
        idealFor: [
          "Online course creators & bootcamps",
          "Corporate training departments",
          "K-12 & Higher Education institutions",
          "Language learning startups"
        ],
        businessOutcomes: [
          "Higher student engagement & completion rates",
          "Reduced manual grading & admin work",
          "Scalable to millions of users",
          "Data-driven insights for curriculum improvement"
        ]
      },
      {
        id: "healthtech-startups",
        name: "HealthTech Startups",
        description: "HIPAA-compliant AI solutions for healthcare startups, including telemedicine, patient management, and diagnostic tools.",
        icon: "⚕️",
        tagline: "Secure, Intelligent & Patient-Centric HealthTech Solutions",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help HealthTech startups build secure, compliant, and AI-enabled healthcare platforms. From telemedicine apps to AI diagnostic tools and practice management software, we ensure your technology meets strict regulatory standards (HIPAA) while delivering exceptional patient and provider experiences. We build technology that saves time—and lives.",
        whyChoose: {
          intro: "Healthcare requires zero error margins and absolute data privacy.",
          points: [
            "HIPAA-compliant architecture & data encryption",
            "Interoperability with EHR/EMR systems",
            "AI-assisted diagnostics & triage workflows",
            "Secure telemedicine & video consultation features",
            "User-friendly interfaces for patients & doctors"
          ]
        },
        whatWeBuild: {
          intro: "We develop secure HealthTech applications:",
          solutions: [
            "Telemedicine & virtual care platforms",
            "Patient portal & appointment scheduling apps",
            "Remote patient monitoring (RPM) dashboards",
            "AI-driven diagnostic support tools",
            "Practice management & billing software",
            "Mental health & wellness applications"
          ],
          footer: "Built with security, privacy, and care at the center."
        },
        coreCapabilities: [
          "Secure video & messaging (Encrypted)",
          "AI symptom checkers & triage",
          "Automated appointment reminders & scheduling",
          "Integration with wearable devices",
          "Data analytics for patient outcomes"
        ],
        idealFor: [
          "Telehealth startups",
          "Digital therapeutics companies",
          "Specialized medical clinics",
          "Wellness & fitness apps"
        ],
        businessOutcomes: [
          "Expanded access to care via digital channels",
          "Improved patient adherence & engagement",
          "Streamlined clinical operations",
          "Compliance-ready for rapid scaling"
        ]
      },
      {
        id: "ai-tools-automation-startups",
        name: "AI Tools & Automation Startups",
        description: "Next-generation SaaS applications with core AI capabilities for automation, prediction, and intelligent workflows.",
        icon: "🧠",
        tagline: "Building the Next Generation of Intelligent SaaS",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we specialize in building AI-first SaaS products. Unlike traditional software, AI SaaS learns, adapts, and automates complex tasks for users. Whether you are building an AI writing assistant, a predictive analytics tool, or an automated workflow platform, we provide the engineering expertise to integrate advanced AI models (LLMs, NLP, Computer Vision) directly into your product's core value proposition.",
        whyChoose: {
          intro: "Don't just add AI as a feature. Build it as the core.",
          points: [
            "Deep integration of LLMs (GPT, Claude, etc.)",
            "Scalable vector database architectures",
            "Real-time processing & inference optimization",
            "User-centric AI UX/UI design",
            "Prompt engineering & fine-tuning pipelines"
          ]
        },
        whatWeBuild: {
          intro: "We Engineer AI-native SaaS products such as:",
          solutions: [
            "Generative AI content creation tools",
            "Intelligent document processing platforms",
            "AI-powered customer support suites",
            "Predictive analytics & forecasting tools",
            "Automated code generation & dev tools",
            "Voice & audio processing applications"
          ],
          footer: "From prototype to production-grade AI SaaS."
        },
        coreCapabilities: [
          "Custom model fine-tuning & integration",
          "RAG (Retrieval-Augmented Generation) pipelines",
          "Multi-modal capabilities (Text, Image, Audio)",
          "Usage-based billing & scalable infrastructure",
          "Production-ready AI systems"
        ],
        idealFor: [
          "AI startups & founders",
          "SaaS companies pivoting to AI",
          "Enterprise innovation labs",
          "Data-focused product teams"
        ],
        businessOutcomes: [
          "Unique competitive advantage via proprietary AI",
          "Higher user retention through intelligent features",
          "Automated value delivery to customers",
          "Investor-ready AI platform"
        ]
      },
      {
        id: "proptech-startups",
        name: "PropTech Startups",
        description: "AI solutions for real estate technology, including property management, valuation, and smart building systems.",
        icon: "🏗️",
        tagline: "Smart Real Estate & Property Tech Solutions",
        overview: "Transform the real estate industry with AI-driven PropTech solutions. We help startups build platforms for property management, virtual tours, automated valuations, and smart building operations.",
        whyChoose: {
          intro: "Innovate in the property market:",
          points: [
            "Automated Property Valuation Models",
            "Smart Building IoT Integration",
            "Virtual Tour & AR Experiences",
            "Tenant Management Automation",
            "Real-time Market Analytics"
          ]
        },
        whatWeBuild: {
          intro: "We build:",
          solutions: [
            "Property Management Software",
            "Real Estate Marketplaces",
            "Smart Home Dashboards",
            "Construction Project Management Tools",
            "Tenant Experience Apps"
          ],
          footer: "Building the future of real estate."
        },
        coreCapabilities: [
          "Automated Valuation",
          "IoT Data Processing",
          "Visual Search for Properties",
          "Lease Management Automation"
        ],
        idealFor: [
          "PropTech Startups",
          "Real Estate Developers",
          "Property Management Companies",
          "Smart City Initiatives"
        ],
        businessOutcomes: [
          "Increased Operational Efficiency",
          "Enhanced Tenant Satisfaction",
          "Better Asset Utilization",
          "Data-Driven Investment Decisions"
        ]
      },
      {
        id: "hrtech-recruitment-saas",
        name: "HRTech & Recruitment",
        description: "AI-powered platforms for talent acquisition, employee engagement, and HR automation.",
        icon: "👥",
        tagline: "Intelligent HR & Recruitment Solutions",
        overview: "Revolutionize HR with AI. From automated resume screening to employee engagement analysis, we build SaaS platforms that streamline the entire talent lifecycle.",
        whyChoose: {
          intro: "Optimize your workforce management:",
          points: [
            "Bias-free Resume Screening",
            "Employee Sentiment Analysis",
            "Automated Onboarding flows",
            "Performance Prediction Models",
            "Smart Scheduling Systems"
          ]
        },
        whatWeBuild: {
          intro: "HRTech solutions including:",
          solutions: [
            "Applicant Tracking Systems (ATS)",
            "Employee Experience Platforms",
            "Payroll & Benefits Administration",
            "Video Interview Platforms",
            "Workforce Planning Tools"
          ],
          footer: "Bringing intelligence to people operations."
        },
        coreCapabilities: [
          "Resume Parsing & Matching",
          "Sentiment Analysis",
          "Chatbots for HR Queries",
          "Predictive Attrition Modeling"
        ],
        idealFor: [
          "Recruitment Agencies",
          "HR SaaS Companies",
          "Enterprise HR Departments",
          "Staffing Firms"
        ],
        businessOutcomes: [
          "Reduced Time-to-Hire",
          "Improved Quality of Hire",
          "Higher Employee Retention",
          "Streamlined HR Processes"
        ]
      },
      {
        id: "martech-salestech-saas",
        name: "MarTech & SalesTech",
        description: "Tools for marketing automation, sales enablement, and customer relationship management.",
        icon: "📈",
        tagline: "Drive Growth with AI Marketing & Sales Tools",
        overview: "Empower marketing and sales teams with AI. We develop SaaS platforms that automate campaigns, score leads, and provide actionable insights to drive revenue growth.",
        whyChoose: {
          intro: "Supercharge your growth engine:",
          points: [
            "Personalized Content Generation",
            "Lead Scoring & Prioritization",
            "Omnichannel Campaign Management",
            "Sales Forecasting AI",
            "Customer Journey Mapping"
          ]
        },
        whatWeBuild: {
          intro: "Sales & Marketing platforms:",
          solutions: [
            "Marketing Automation Platforms",
            "CRM Systems",
            "Social Media Management Tools",
            "SEO & Content Optimization Tools",
            "ABM (Account-Based Marketing) Platforms"
          ],
          footer: "Accelerating your go-to-market strategy."
        },
        coreCapabilities: [
          "Content Generation (GenAI)",
          "Predictive Lead Scoring",
          "Customer Segmentation",
          "Attribution Modeling"
        ],
        idealFor: [
          "Marketing Agencies",
          "Sales Teams",
          "B2B SaaS Companies",
          "E-commerce Brands"
        ],
        businessOutcomes: [
          "Higher Conversion Rates",
          "Increased ROI on Ad Spend",
          "Shortened Sales Cycles",
          "Better Customer Alignment"
        ]
      },
      {
        id: "logistics-supply-chain-saas",
        name: "Logistics & Supply Chain",
        description: "AI solutions for fleet management, inventory optimization, and supply chain visibility.",
        icon: "🚚",
        tagline: "Optimized Logistics & Supply Chain Management",
        overview: "Streamline global operations with AI. We build software that optimizes routes, predicts inventory needs, and provides real-time visibility into complex supply chains.",
        whyChoose: {
          intro: "Efficiency in motion:",
          points: [
            "Route Optimization Algorithms",
            "Demand Forecasting",
            "Real-time Shipment Tracking",
            "Warehouse Automation Integration",
            "Supplier Risk Management"
          ]
        },
        whatWeBuild: {
          intro: "Logistics platforms:",
          solutions: [
            "Fleet Management Systems",
            "Warehouse Management Systems (WMS)",
            "Supply Chain Control Towers",
            "Last-Mile Delivery Apps",
            "Freight Forwarding Platforms"
          ],
          footer: "Delivering efficiency at scale."
        },
        coreCapabilities: [
          "Route Optimization",
          "Demand Prediction",
          "IoT Tracking Integration",
          "Document Automation"
        ],
        idealFor: [
          "3PL Providers",
          "Freight Companies",
          "Manufacturing Firms",
          "Last-mile Delivery Startups"
        ],
        businessOutcomes: [
          "Reduced Fuel Costs",
          "Faster Delivery Times",
          "Lower Inventory Holding Costs",
          "Improved Supply Chain Resilience"
        ]
      },
      {
        id: "productivity-collaboration-tools",
        name: "Productivity & Collaboration",
        description: "SaaS tools for project management, team collaboration, and workflow automation.",
        icon: "🤝",
        tagline: "Empowering Teams to Do More",
        overview: "Build the next generation of work tools. We help startups create collaboration platforms that integrate AI assistants, automate repetitive tasks, and bring teams together.",
        whyChoose: {
          intro: "Work smarter, not harder:",
          points: [
            "AI Meeting Assistants",
            "Smart Task Prioritization",
            "Real-time Document Collaboration",
            "Workflow Automation Builders",
            "Knowledge Management Search"
          ]
        },
        whatWeBuild: {
          intro: "Productivity solutions:",
          solutions: [
            "Project Management Tools",
            "Team Chat & Video Apps",
            "Note-taking & Knowledge Bases",
            "Design Collaboration Tools",
            "No-code/Low-code Platforms"
          ],
          footer: "Redefining the future of work."
        },
        coreCapabilities: [
          "Natural Language Search",
          "Real-time Sync",
          "Meeting Transcription & Summary",
          "Automated Workflows"
        ],
        idealFor: [
          "Remote Teams",
          "Enterprise Organizations",
          "Creative Agencies",
          "Software Development Teams"
        ],
        businessOutcomes: [
          "Increased Team Output",
          "Reduced Meeting Overhead",
          "Better Information Access",
          "Higher Employee Satisfaction"
        ]
      },
      {
        id: "vertical-saas",
        name: "Vertical SaaS",
        description: "Industry-specific SaaS solutions tailored to niche markets and unique business workflows.",
        icon: "🧩",
        tagline: "Specialized Software for Niche Industries",
        overview: "Solve deep industry problems with Vertical SaaS. Whether for legal, construction, or agriculture, we build specialized platforms that address the unique challenges of specific sectors.",
        whyChoose: {
          intro: "Deep domain expertise in code:",
          points: [
            "Industry-specific Compliance",
            "Tailored Workflow Automation",
            "Specialized Data Models",
            "Pre-built Industry Integrations",
            "User-friendly Interface for Non-tech Users"
          ]
        },
        whatWeBuild: {
          intro: "Niche solutions for:",
          solutions: [
            "Legal Practice Management",
            "Construction ERP",
            "Restaurant Management Systems",
            "Farm Management Software",
            "Salon & Spa Booking Systems"
          ],
          footer: "Purpose-built for your industry."
        },
        coreCapabilities: [
          "Custom Reporting",
          "Compliance Management",
          "Field Service Management",
          "Inventory Tracking"
        ],
        idealFor: [
          "Industry Insiders",
          "Niche Market Founders",
          "Professional Service Firms",
          "Trade Associations"
        ],
        businessOutcomes: [
          "Higher Market Penetration",
          "Reduced Churn",
          "Increased Customer Value",
          "Dominant Market Position"
        ]
      }
    ]
  },
  {
    id: "enterprises",
    name: "Enterprises",
    icon: "🏢",
    image: enterpriseImage,
    imageAlt: "NanoFlows Enterprise AI Solutions - Enterprise-grade artificial intelligence for digital transformation and operational efficiency",
    tagline: "Enterprise-Grade AI That Integrates Seamlessly",
    description: "Transform your organization with AI solutions built for enterprise scale, security, and compliance requirements.",
    subIndustries: [
      {
        id: "banking-financial-services",
        name: "Banking & Financial Services (BFSI)",
        description: "AI solutions for banks, insurance companies, and financial institutions with compliance and security focus.",
        icon: "🏦",
        tagline: "AI-Powered Banking & Financial Services Platforms",
        overview: "Secure, compliant, and scalable AI solutions for the financial sector. We help banks and fintechs automate operations, detect fraud, and personalize customer experiences.",
        whyChoose: {
          intro: "Key benefits for financial institutions:",
          points: [
            "Compliance & Regulatory Adherence",
            "Enhanced Security & Fraud Prevention",
            "Scalable Transaction Processing",
            "Personalized Customer Insights",
            "24/7 Automated Support"
          ]
        },
        whatWeBuild: {
          intro: "Our BFSI solutions include:",
          solutions: [
            "Fraud Detection Systems",
            "Automated Loan Processing",
            "Customer Service Chatbots",
            "Personalized Wealth Management Tools",
            "Risk Assessment Models"
          ],
          footer: "Driving efficiency and trust in financial services."
        },
        coreCapabilities: [
          "Real-time Fraud Detection",
          "Automated KYC/AML",
          "Conversational AI Banking",
          "Predictive Financial Analytics"
        ],
        idealFor: [
          "Banks",
          "Insurance Companies",
          "Investment Firms",
          "Fintech Enterprises"
        ],
        businessOutcomes: [
          "Reduced Fraud Losses",
          "Lower Operational Costs",
          "Improved Customer Satisfaction",
          "Faster Processing Times"
        ]
      },
      {
        id: "manufacturing-industrial",
        name: "Manufacturing & Industrial",
        description: "AI-driven predictive maintenance, supply chain optimization, and quality control systems.",
        icon: "🏭",
        tagline: "Smart Manufacturing & Industry 4.0",
        overview: "Empower your manufacturing operations with Industry 4.0 solutions. We build AI systems that predict equipment failures, optimize production schedules, and ensure product quality through computer vision.",
        whyChoose: {
          intro: "Optimize production with AI:",
          points: [
            "Predictive Maintenance Alerts",
            "Computer Vision Quality Control",
            "Supply Chain Twin Simulation",
            "Worker Safety Monitoring AI",
            "Energy Consumption Optimization"
          ]
        },
        whatWeBuild: {
          intro: "Industrial solutions:",
          solutions: [
            "Defect Detection Systems",
            "Process Optimization Engines",
            "Inventory Management AI",
            "Robotics Integration Middleware",
            "Production Dashboards"
          ],
          footer: "Building the factory of the future."
        },
        coreCapabilities: [
          "Defect Detection (Vision)",
          "Predictive Maintenance",
          "Production Forecasting",
          "Digital Twin"
        ],
        idealFor: [
          "Automotive Manufacturers",
          "FMCG Factories",
          "Electronics Assembly",
          "Heavy Industry"
        ],
        businessOutcomes: [
          "Reduced Downtime",
          "Lower Waste & Scrap",
          "Higher Production Throughput",
          "Improved Worker Safety"
        ]
      },
      {
        id: "it-services-consulting",
        name: "IT Services & Consulting",
        description: "AI capability enhancement for IT service providers and consultancy firms.",
        icon: "💻",
        tagline: "AI for IT Modernization",
        overview: "Enhance your IT service offerings with white-labeled AI capabilities. We partner with consultancies to deliver AI transformation projects, from automated code migration to intelligent test automation.",
        whyChoose: {
          intro: "Accelerate delivery:",
          points: [
            "Automated Code Refactoring",
            "Test Case Generation",
            "Log Analysis & Anomaly Detection",
            "AI-Assisted DevOps",
            "Knowledge Base Automation"
          ]
        },
        whatWeBuild: {
          intro: "We build:",
          solutions: [
            "AIOps Platforms",
            "Service Desk Chatbots",
            "Migration Accelerators",
            "Performance Monitoring Tools",
            "Developer Productivity Suites"
          ],
          footer: "Scaling IT expertise with AI."
        },
        coreCapabilities: [
          "Code Generation",
          "Automated Testing",
          "Incident Response AI",
          "Legacy System Analytics"
        ],
        idealFor: [
          "System Integrators",
          "Managed Service Providers",
          "Digital Agencies",
          "IT Consultancies"
        ],
        businessOutcomes: [
          "Faster Project Delivery",
          "Higher Margins",
          "Reduced Support Ticket Volume",
          "Competitive Differentiation"
        ]
      },
      {
        id: "telecom-networking",
        name: "Telecom & Networking",
        description: "AI solutions for network optimization, customer experience management, and fraud prevention.",
        icon: "📡",
        tagline: "Intelligent Networks & Connectivity",
        overview: "Transform telecommunications with AI. We help telcos optimize network performance, predict outages, and deliver hyper-personalized customer experiences.",
        whyChoose: {
          intro: "Connect smarter:",
          points: [
            "Predictive Network Maintenance",
            "Churn Prediction & Prevention",
            "Automated Network Planning",
            "Fraud & Revenue Assurance",
            "Intelligent Customer Support"
          ]
        },
        whatWeBuild: {
          intro: "Telecom innovations:",
          solutions: [
            "Network Operations Center (NOC) AI",
            "Self-Optimizing Network (SON) Tools",
            "Customer Experience Management (CEM)",
            "Billing Anomaly Detection",
            "Field Force Management Apps"
          ],
          footer: "Powering the next generation of connectivity."
        },
        coreCapabilities: [
          "Network Traffic Analysis",
          "Signal Quality Prediction",
          "Customer Churn Modeling",
          "Automated Routing"
        ],
        idealFor: [
          "Mobile Network Operators",
          "ISPs",
          "Tower Companies",
          "Network Equipment Vendors"
        ],
        businessOutcomes: [
          "Improved Network Uptime",
          "Reduced Customer Churn",
          "Lower OpEx",
          "Faster Issue Resolution"
        ]
      },
      {
        id: "energy-utilities",
        name: "Energy & Utilities",
        description: "AI for smart grids, renewable energy management, and demand forecasting.",
        icon: "⚡",
        tagline: "Smarter Energy for a Sustainable Future",
        overview: "Drive the energy transition with AI. We build systems for load forecasting, renewable energy integration, and predictive maintenance of utility assets.",
        whyChoose: {
          intro: "Energize efficiency:",
          points: [
            "Accurate Demand Forecasting",
            "Grid Load Balancing",
            "Renewable Output Prediction",
            "Asset Health Monitoring",
            "Energy Trading AI"
          ]
        },
        whatWeBuild: {
          intro: "Utility solutions:",
          solutions: [
            "Smart Grid Managment Systems",
            "Energy Consumption Analytics",
            "Solar/Wind Forecasting Tools",
            "Outage Management Systems",
            "Customer Energy Portals"
          ],
          footer: "Innovating for energy efficiency."
        },
        coreCapabilities: [
          "Time-series Forecasting",
          "Grid Anomaly Detection",
          "Satellite Imagery Analysis",
          "Predictive Asset Maintenance"
        ],
        idealFor: [
          "Utility Companies",
          "Renewable Energy Firms",
          "Grid Operators",
          "Energy Traders"
        ],
        businessOutcomes: [
          "Grid Stability",
          "Optimized Energy Trading",
          "Reduced Outage Duration",
          "Lower Carbon Footprint"
        ]
      },
      {
        id: "government-public-sector",
        name: "Government & Public Sector",
        description: "Secure AI solutions for citizen services, public safety, and administrative efficiency.",
        icon: "🏛️",
        tagline: "Efficient, Transparent & Smart Governance",
        overview: "Modernize public services with secure AI. We help government agencies automate processes, improve citizen engagement, and make data-driven policy decisions.",
        whyChoose: {
          intro: "Serve citizens better:",
          points: [
            "Automated Document Processing",
            "Smart City Traffic Management",
            "Public Safety Analytics",
            "Fraud Detection in Benefits",
            "Citizen Chatbots"
          ]
        },
        whatWeBuild: {
          intro: "GovTech solutions:",
          solutions: [
            "e-Governance Portals",
            "Traffic & Urban Planning Tools",
            "Public Safety Command Systems",
            "Tax Compliance AI",
            "Social Service Case Management"
          ],
          footer: "Technology for the public good."
        },
        coreCapabilities: [
          "Document Digitization (OCR)",
          "Privacy-Preserving Analytics",
          "Traffic Pattern Analysis",
          "Sentiment Analysis on Public Feedback"
        ],
        idealFor: [
          "City Municipalities",
          "Federal Agencies",
          "Public Transport Authorities",
          "Urban Planning Departments"
        ],
        businessOutcomes: [
          "Faster Service Delivery",
          "Improved Public Trust",
          "Cost Savings",
          "Better Resource Allocation"
        ]
      },
      {
        id: "retail-consumer-enterprises",
        name: "Retail & Consumer",
        description: "AI strategies for large retail chains to unify online and offline experiences.",
        icon: "🛍️",
        tagline: "Unified Commerce & Customer Intelligence",
        overview: "Bridge the gap between digital and physical retail. We help enterprise retailers use AI to optimize supply chains, personalize marketing, and store operations.",
        whyChoose: {
          intro: "Retail reimagined:",
          points: [
            "Omnichannel Customer View",
            "Planogram Compliance AI",
            "Dynamic Pricing Strategy",
            "Demand Sensing",
            "Personalized Loyalty Programs"
          ]
        },
        whatWeBuild: {
          intro: "Enterprise Retail tools:",
          solutions: [
            "Retail Media Networks",
            "Smart Shelf Monitoring",
            "Supply Chain Visibility Platforms",
            "Customer Data Platforms (CDP)",
            "Store Operations Apps"
          ],
          footer: "Delivering the future of retail."
        },
        coreCapabilities: [
          "Image Recognition (Shelves)",
          "Demand Forecasting",
          "Customer Clustering",
          "Price Elasticity Modeling"
        ],
        idealFor: [
          "Retail Chains",
          "CPG Brands",
          "Department Stores",
          "Supermarkets"
        ],
        businessOutcomes: [
          "Increased Same-Store Sales",
          "Optimized Inventory",
          "Higher Customer Lifetime Value",
          "Streamlined Store Ops"
        ]
      }
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    image: ecommerceImage,
    imageAlt: "NanoFlows E-Commerce AI Solutions - Personalized shopping experiences, cart recovery, and AI-powered product recommendations",
    tagline: "AI That Converts Browsers Into Buyers",
    description: "Boost conversions, increase average order value, and deliver personalized shopping experiences at scale.",
    subIndustries: [
      {
        id: "multi-vendor-marketplaces",
        name: "Multi-Vendor Marketplaces",
        description: "AI solutions for scaling marketplaces, managing vendors, and personalizing search.",
        icon: "🏪",
        tagline: "Scalable Marketplace Intelligence",
        overview: "Build the next Amazon or Etsy with AI. We provide engines for vendor management, catalog unification, and intelligent search to power complex multi-vendor ecosystems.",
        whyChoose: {
          intro: "Scale your marketplace:",
          points: [
            "Vendor Onboarding Automation",
            "Unified Catalog Search",
            "Fraud & Quality Control",
            "Dynamic Commission Models",
            "Hyper-personalized Feeds"
          ]
        },
        whatWeBuild: {
          intro: "Marketplace tech:",
          solutions: [
            "Vendor Portals",
            "Marketplace Admin Dashboards",
            "Cross-border Payment Systems",
            "Dispute Resolution AI",
            "User Review Analyzers"
          ],
          footer: "Creating thriving digital economies."
        },
        coreCapabilities: [
          "Catalog Matching",
          "Search & Discovery",
          "Fraud Detection",
          "Pricing Optimization"
        ],
        idealFor: [
          "B2B Marketplaces",
          "Service Aggregators",
          "Niche Retail Platforms",
          "Global Trade Hubs"
        ],
        businessOutcomes: [
          "Faster GMV Growth",
          "Lower Operational Overhead",
          "Better Vendor Retention",
          "Increased Trust & Safety"
        ]
      },
      {
        id: "b2c-online-retail",
        name: "B2C Online Retail",
        description: "AI-driven solutions for online retailers to optimize sales, marketing, and customer service.",
        icon: "🛍️",
        tagline: "Personalized Shopping Experiences",
        overview: "Transform your online store with AI. We build solutions that personalize shopping journeys, automate marketing, and streamline inventory management.",
        whyChoose: {
          intro: "Why AI for E-Commerce:",
          points: [
            "Increased Conversion Rates",
            "Higher Average Order Value",
            "Reduced Cart Abandonment",
            "Automated Customer Support",
            "Optimized Inventory Levels"
          ]
        },
        whatWeBuild: {
          intro: "We build:",
          solutions: [
            "Recommendation Engines",
            "Visual Search Tools",
            "Dynamic Pricing Models",
            "Chatbots for Order Tracking",
            "Automated Email Marketing"
          ],
          footer: "Scaling your retail business with intelligence."
        },
        coreCapabilities: [
          "Product Recommendations",
          "Behavioral Targeting",
          "Inventory Forecasting",
          "Visual Search"
        ],
        idealFor: [
          "Online Fashion Retailers",
          "Electronics Stores",
          "Home Goods Brands",
          "DTC Brands"
        ],
        businessOutcomes: [
          "Higher Revenue per User",
          "Improved Customer Loyalty",
          "Lower Support Costs",
          "Efficient Inventory Management"
        ]
      },
      {
        id: "b2b-ecommerce-platforms",
        name: "B2B E-Commerce",
        description: "AI-driven platforms for wholesale, distribution, and complex B2B buying journeys.",
        icon: "🏭",
        tagline: "Modernizing B2B Trade",
        overview: "Streamline B2B sales with AI. From bulk ordering to negotiated pricing, we build platforms that simplify complex procurement processes for businesses.",
        whyChoose: {
          intro: "Simplify B2B sales:",
          points: [
            "Automated Quote Generation (CPQ)",
            "Dynamic Pricing Logic",
            "Reorder Prediction",
            "Credit Risk Assessment",
            "Self-service Portals"
          ]
        },
        whatWeBuild: {
          intro: "B2B Solutions:",
          solutions: [
            "Wholesale Portals",
            "Distributor Management Systems",
            "Quick Order Apps",
            "Procurement Integrations",
            "Sales Rep Analytics"
          ],
          footer: "Digitizing the supply chain."
        },
        coreCapabilities: [
          "CPQ Automation",
          "Pricing Engines",
          "Inventory Sync",
          "Account Management AI"
        ],
        idealFor: [
          "Wholesalers",
          "Manufacturers",
          "Distributors",
          "Industrial Suppliers"
        ],
        businessOutcomes: [
          "Higher Average Order Value",
          "Reduced Sales Admin Time",
          "Faster Quote-to-Cash",
          "Improved Customer Stickiness"
        ]
      },
      {
        id: "fashion-lifestyle-ecommerce",
        name: "Fashion & Lifestyle",
        description: "AI for visual commerce, trend prediction, and personalized styling.",
        icon: "👗",
        tagline: "Style & Substance with AI",
        overview: "Lead the fashion industry with AI. We build visual search, virtual try-on, and trend forecasting tools that delight customers and reduce returns.",
        whyChoose: {
          intro: "Innovate in fashion:",
          points: [
            "Virtual Try-On Tech",
            "Visual Search & Discovery",
            "Size Recommendation AI",
            "Trend Forecasting",
            "Automated Tagging"
          ]
        },
        whatWeBuild: {
          intro: "Fashion tech:",
          solutions: [
            "Personal Styling Apps",
            "Smart Mirrors for Retail",
            "Sustainability Trackers",
            "Influencer Marketing Platforms",
            "Inventory Planning Bots"
          ],
          footer: "Defining the future of style."
        },
        coreCapabilities: [
          "Computer Vision (Style)",
          "Size Fitting Algorithms",
          "Trend Analysis",
          "Social Commerce"
        ],
        idealFor: [
          "Fashion Brands",
          "Luxury Retailers",
          "Apparel Startups",
          "Lifestyle Marketplaces"
        ],
        businessOutcomes: [
          "Lower Return Rates",
          "Higher Conversion",
          "Better Inventory Planning",
          "Enhanced Brand Loyalty"
        ]
      },
      {
        id: "grocery-quick-commerce",
        name: "Grocery & Quick Commerce",
        description: "Hyper-local delivery algorithms and inventory management for speed and freshness.",
        icon: "🥦",
        tagline: "Speed & Freshness Delivered",
        overview: "Win the race for speed. We build AI for rapid delivery services, optimizing dark stores, rider routes, and inventory to ensure freshness and speed.",
        whyChoose: {
          intro: "Deliver faster:",
          points: [
            "Hyper-local Demand Prediction",
            "Dark Store Optimization",
            "Dynamic Delivery Fees",
            "Freshness Monitoring",
            "Rider Fleet Allocation"
          ]
        },
        whatWeBuild: {
          intro: "Q-Commerce solutions:",
          solutions: [
            "Delivery Apps",
            "Picker Apps for Warehouses",
            "Inventory Dashboards",
            "Route Planners",
            "Supply Chain Integrations"
          ],
          footer: "The future of convenience."
        },
        coreCapabilities: [
          "Real-time Routing",
          "Perishable Management",
          "Surge Pricing",
          "Demand Sensing"
        ],
        idealFor: [
          "Grocery Chains",
          "Delivery Startups",
          "Dark Store Operators",
          "FMCG Brands"
        ],
        businessOutcomes: [
          "Reduced Delivery Time",
          "Lower Spoilage",
          "Higher Fleet Efficiency",
          "Customer Convenience"
        ]
      },
      {
        id: "electronics-digital-goods",
        name: "Electronics & Digital Goods",
        description: "Technical product discovery engines and digital download platforms.",
        icon: "📱",
        tagline: "Tech Retail, Upgraded",
        overview: "Simplify tech buying with AI. We help electronics retailers guide customers through complex specs, compare products, and manage high-value inventory.",
        whyChoose: {
          intro: "Sell tech better:",
          points: [
            "Spec Comparison Engines",
            "Compatibility Checkers",
            "Warranty & Repair Automation",
            "Review Summarization AI",
            "Digital License Management"
          ]
        },
        whatWeBuild: {
          intro: "Electronics retail:",
          solutions: [
            "Product Comparison Tools",
            "Support Bots for Setup",
            "RMA Management Systems",
            "Refurbished Certification AI",
            "Digital Asset Delivery"
          ],
          footer: "Powering the digital lifestyle."
        },
        coreCapabilities: [
          "Technical Search",
          "Compatibility Logic",
          "Fraud Prevention (Digital)",
          "Review Analysis"
        ],
        idealFor: [
          "Electronics Retailers",
          "Software Marketplaces",
          "Gaming Platforms",
          "Mobile Carriers"
        ],
        businessOutcomes: [
          "Reduced Return Rates",
          "Higher Tech Attach Rate",
          "Better Customer Education",
          "Trusted Refurbished Sales"
        ]
      }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "🏠",
    image: realEstateImage,
    imageAlt: "NanoFlows Real Estate AI Solutions - AI agents for lead qualification, property matching, and 24/7 prospect nurturing",
    tagline: "AI Agents That Never Miss a Lead",
    description: "Qualify leads, match properties, and nurture prospects 24/7 so your agents can focus on closing deals.",
    subIndustries: [
      {
        id: "residential-real-estate",
        name: "Residential Real Estate",
        description: "AI tools for real estate agencies to manage leads, schedule viewings, and market properties.",
        icon: "🏡",
        tagline: "Automated Real Estate Operations",
        overview: "Streamline your real estate business with AI. From lead qualification to property matching, we automate the busy work so agents can focus on closing.",
        whyChoose: {
          intro: "Benefits for Real Estate:",
          points: [
            "24/7 Lead Response",
            "Automated Viewing Scheduling",
            "Smart Property Matching",
            "Market Analysis Insights",
            "Efficient Client Communication"
          ]
        },
        whatWeBuild: {
          intro: "Solutions for Agencies:",
          solutions: [
            "AI Lead Qualifiers",
            "Automated CRM Updates",
            "Virtual Tour Experiences",
            "Property Value Estimators",
            "Client Follow-up Automation"
          ],
          footer: "Modernizing real estate transactions."
        },
        coreCapabilities: [
          "Lead Scoring & Qualification",
          "Automated Scheduling",
          "Property Matching Algorithms",
          "Virtual Assistants"
        ],
        idealFor: [
          "Real Estate Agencies",
          "Property Management Firms",
          "Developers",
          "Brokerages"
        ],
        businessOutcomes: [
          "Increased Deal Flow",
          "Faster Sales Cycles",
          "Better Agent Productivity",
          "Higher Client Satisfaction"
        ]
      },
      {
        id: "commercial-real-estate",
        name: "Commercial Real Estate",
        description: "AI analytics for commercial property valuation, leasing, and tenant management.",
        icon: "🏢",
        tagline: "Smarter Commercial Investments",
        overview: "Optimize commercial portfolios with AI. We help firms forecast market trends, value assets accurately, and find the perfect tenants for office and retail spaces.",
        whyChoose: {
          intro: "Maximize ROI:",
          points: [
            "Lease Abstraction AI",
            "Vacancy Prediction",
            "Tenant Credit Scoring",
            "Market Trend Forecasting",
            "Smart Building Energy Mgmt"
          ]
        },
        whatWeBuild: {
          intro: "CRE tools:",
          solutions: [
            "Portfolio Management Dashboards",
            "Automated Valuation Models (AVM)",
            "Lease Management Systems",
            "Space Utilization Analytics",
            "Investment Deal Flow Platforms"
          ],
          footer: "Data-driven commercial success."
        },
        coreCapabilities: [
          "Document Analysis (Leases)",
          "Predictive Analytics",
          "Geospatial Intelligence",
          "Financial Modeling"
        ],
        idealFor: [
          "Commercial Brokerages",
          "REITs",
          "Asset Managers",
          "Corporate Real Estate Techs"
        ],
        businessOutcomes: [
          "Higher Occupancy Rates",
          "Optimized Rental Yields",
          "Faster Due Diligence",
          "Lower Operating Costs"
        ]
      },
      {
        id: "property-management-firms",
        name: "Property Management",
        description: "Automation for maintenance requests, rent collection, and tenant communication.",
        icon: "🔑",
        tagline: "Effortless Property Management",
        overview: "Automate the day-to-day of property management. Our AI solutions handle maintenance tickets, rent reminders, and tenant inquiries so you can scale your portfolio.",
        whyChoose: {
          intro: "Manage more units:",
          points: [
            "Automated Maintenance Triaging",
            "Rent Collection Reminders",
            "24/7 Tenant Support Chatbots",
            "Vendor Scheduling AI",
            "Lease Renewal Prediction"
          ]
        },
        whatWeBuild: {
          intro: "PM software:",
          solutions: [
            "Tenant Portals & Apps",
            "Maintenance Workflow Automation",
            "Digital Lease Signing Tools",
            "Smart Lock Integration",
            "Accounting & Reporting Suites"
          ],
          footer: "Scaling property operations."
        },
        coreCapabilities: [
          "NLP for Maintenance Requests",
          "Automated Notifications",
          "Payment Processing Integration",
          "IoT Management"
        ],
        idealFor: [
          "Property Managers",
          "Landlords",
          "HOA Management Companies",
          "Student Housing Operators"
        ],
        businessOutcomes: [
          "Reduced Admin Work",
          "Faster Maintenance Resolution",
          "Improved Tenant Retention",
          "Scalable Operations"
        ]
      },
      {
        id: "real-estate-developers",
        name: "Real Estate Developers",
        description: "AI for site selection, project planning, and construction management.",
        icon: "🏗️",
        tagline: "Build Smarter with Data",
        overview: "De-risk development with AI. We provide data-driven insights for site selection, cost estimation, and project timeline management to ensure profitable developments.",
        whyChoose: {
          intro: "Build with confidence:",
          points: [
            "AI-Driven Site Selection",
            "Construction Cost Forecasting",
            "Regulatory Compliance Checks",
            "Project Timeline Optimization",
            "Virtual Staging for Presales"
          ]
        },
        whatWeBuild: {
          intro: "Development tech:",
          solutions: [
            "Land Acquisition Analyzers",
            "Project Management ERPs",
            "Budget Tracking Tools",
            "Investor Reporting Portals",
            "Zoning Analysis AI"
          ],
          footer: "From ground-breaking to ribbon-cutting."
        },
        coreCapabilities: [
          "Geospatial Data Analysis",
          "Cost Modeling",
          "Generative Design",
          "Risk Assessment"
        ],
        idealFor: [
          "Residential Developers",
          "Commercial Developers",
          "Urban Planners",
          "Infrastructure Firms"
        ],
        businessOutcomes: [
          "Identify Best Sites Faster",
          "Avoid Cost Overruns",
          "Accelerate Presales",
          "Streamlined Permitting"
        ]
      },
      {
        id: "hospitality-vacation-rentals",
        name: "Hospitality & Vacation Rentals",
        description: "Dynamic pricing and guest experience AI for hotels and short-term rentals.",
        icon: "🏨",
        tagline: "Five-Star Guest Experiences",
        overview: "Maximize revenue per available room (RevPAR) with AI. We build dynamic pricing engines and guest experience platforms for the hospitality industry.",
        whyChoose: {
          intro: "Host better:",
          points: [
            "Dynamic Pricing Algorithms",
            "Automated Guest Messaging",
            "Review Sentiment Analysis",
            "Housekeeping Scheduling Optimization",
            "Direct Booking Engines"
          ]
        },
        whatWeBuild: {
          intro: "Hospitality solutions:",
          solutions: [
            "Property Management Systems (PMS)",
            "Channel Managers",
            "Guest Apps (Check-in/out)",
            "Revenue Management Systems",
            "Cleaning Management Ops"
          ],
          footer: "Elevating the guest journey."
        },
        coreCapabilities: [
          "Price Prediction",
          "Chatbots for Guest Services",
          "Reputation Management",
          "Calendar Sync"
        ],
        idealFor: [
          "Hotel Chains",
          "Vacation Rental Hosts",
          "Boutique Hotels",
          "Travel Agencies"
        ],
        businessOutcomes: [
          "Maximized Revenue",
          "Higher Occupancy",
          "Better Guest Reviews",
          "Operational Efficiency"
        ]
      },
      {
        id: "co-living-co-working",
        name: "Co-Living & Co-Working",
        description: "Community management and space utilization platforms for shared spaces.",
        icon: "🛋️",
        tagline: "Community-First Space Management",
        overview: "Manage shared spaces effortlessly. Our AI platforms help co-living and co-working operators build community, manage bookings, and optimize space usage.",
        whyChoose: {
          intro: "Power your community:",
          points: [
            "Member Matching AI",
            "Automated Desk/Room Booking",
            "Community Event Recommendations",
            "Smart Access Control",
            "Utilization Heatmaps"
          ]
        },
        whatWeBuild: {
          intro: "Shared space tech:",
          solutions: [
            "Member Apps",
            "Space Management Dashboards",
            "Billing & Invoicing Systems",
            "Event Management Tools",
            "Visitor Management Systems"
          ],
          footer: "Fostering connection and collaboration."
        },
        coreCapabilities: [
          "Matching Algorithms",
          "Resource Scheduling",
          "IoT Integration",
          "Behavioral Analytics"
        ],
        idealFor: [
          "Co-Working Spaces",
          "Co-Living Operators",
          "Student Housing",
          "Flexible Office Providers"
        ],
        businessOutcomes: [
          "Higher Member Retention",
          "Optimized Space Usage",
          "Vibrant Communities",
          "Streamlined Billing"
        ]
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    image: healthcareImage,
    imageAlt: "NanoFlows Healthcare AI Solutions - HIPAA-compliant AI for patient engagement, clinical support, and healthcare automation",
    tagline: "HIPAA-Compliant AI for Better Patient Care",
    description: "Improve patient engagement, streamline operations, and support clinical decisions while maintaining strict compliance.",
    subIndustries: [
      {
        id: "hospitals-multispecialty-clinics",
        name: "Hospitals & Clinics",
        description: "AI solutions for hospitals to improve patient flow, administrative efficiency, and clinical outcomes.",
        icon: "🏥",
        tagline: "Efficient Hospital Operations",
        overview: "Optimize healthcare delivery with AI. We help hospitals and clinics reduce wait times, automate administrative tasks, and improve patient communication.",
        whyChoose: {
          intro: "Why AI in Healthcare:",
          points: [
            "Improved Patient Flow",
            "Reduced Administrative Burden",
            "Better Resource Allocation",
            "Enhanced Patient Experience",
            "Data-Driven Insights"
          ]
        },
        whatWeBuild: {
          intro: "We deliver:",
          solutions: [
            "Patient Flow Management Systems",
            "Automated appointment booking",
            "EHR Integration Tools",
            "Predictive Staffing Models",
            "Post-discharge Monitoring"
          ],
          footer: "Technology for better care."
        },
        coreCapabilities: [
          "Patient Triage AI",
          "Resource Scheduling",
          "Clinical Decision Support",
          "Operational Analytics"
        ],
        idealFor: [
          "Multi-specialty Hospitals",
          "Urgent Care Centers",
          "Private Clinics",
          "Diagnostic Labs"
        ],
        businessOutcomes: [
          "Reduced Wait Times",
          "Lower Operational Costs",
          "Improved Patient Satisfaction",
          "Better Staff Utilization"
        ]
      },
      {
        id: "telemedicine-virtual-care",
        name: "Telemedicine & Virtual Care",
        description: "AI-powered remote patient monitoring and virtual consultation platforms.",
        icon: "🩺",
        tagline: "Healthcare Beyond Walls",
        overview: "Extend care beyond the clinic. We build telemedicine platforms with AI diagnosis support, remote monitoring integration, and secure video conferencing.",
        whyChoose: {
          intro: "Expand your reach:",
          points: [
            "AI Symptom Checker",
            "Remote Patient Monitoring (RPM)",
            "Secure Video Consultations",
            "Digital Prescription Management",
            "Chronic Disease Management"
          ]
        },
        whatWeBuild: {
          intro: "Telehealth solutions:",
          solutions: [
            "Telemedicine Apps",
            "RPM Dashboards",
            "Mental Health Apps",
            "Virtual Triage Bots",
            "Integration with Wearables"
          ],
          footer: "Accessible care for everyone."
        },
        coreCapabilities: [
          "Video Streaming (WebRTC)",
          "Symptom Analysis NLP",
          "IoT Wearable Sync",
          "Secure Messaging"
        ],
        idealFor: [
          "Hospital Networks",
          "Digital Health Startups",
          "Insurance Providers",
          "Rural Health Clinics"
        ],
        businessOutcomes: [
          "Reduced Re-admissions",
          "Broader Patient Reach",
          "Continuous Care Models",
          "Lower Cost of Delivery"
        ]
      },
      {
        id: "diagnostic-labs-imaging",
        name: "Diagnostic Labs & Imaging",
        description: "AI analysis of medical images and lab results for faster diagnosis.",
        icon: "🔬",
        tagline: "Precision Diagnostics with AI",
        overview: "Accelerate diagnosis with computer vision. We build systems that analyze X-rays, MRIs, and lab results to assist pathologists and radiologists in detecting anomalies.",
        whyChoose: {
          intro: "Diagnose faster:",
          points: [
            "Automated Image Analysis",
            "Pattern Recognition in Labs",
            "Worklist Prioritization",
            "Quality Control AI",
            "Integrated Reporting"
          ]
        },
        whatWeBuild: {
          intro: "Diagnostic tools:",
          solutions: [
            "PACS/RIS Integration",
            "Pathology Image Viewers",
            "Lab Information Systems (LIS)",
            "Genetic Data Analysis Tools",
            "AI Second Opinion Bots"
          ],
          footer: "Empowering diagnostic precision."
        },
        coreCapabilities: [
          "Computer Vision (Medical)",
          "Data Pattern Recognition",
          "DICOM Standard Support",
          "Anonymization"
        ],
        idealFor: [
          "Diagnostic Centers",
          "Radiology Clinics",
          "Pathology Labs",
          "Research Institutes"
        ],
        businessOutcomes: [
          "Faster Turnaround Time",
          "Reduced Diagnostic Error",
          "Higher Throughput",
          "Standardized Reporting"
        ]
      },
      {
        id: "pharmacies-medical-stores",
        name: "Pharmacies & Medical Stores",
        description: "Inventory management and digital prescription systems for pharmacies.",
        icon: "💊",
        tagline: "Smart Pharmacy Management",
        overview: "Digitize pharmacy operations. We build inventory management, e-prescription, and customer loyalty systems tailored for retail and hospital pharmacies.",
        whyChoose: {
          intro: "Manage efficiently:",
          points: [
            "Automated Restocking",
            "Expiry Date Tracking",
            "Digital Prescription Processing",
            "Interaction Checking AI",
            "Customer adherence reminders"
          ]
        },
        whatWeBuild: {
          intro: "Pharmacy tech:",
          solutions: [
            "Pharmacy Management Systems",
            "Online Pharmacy Apps",
            "Inventory Forecasting Tools",
            "B2B Pharma Supply Chain",
            "POS Systems"
          ],
          footer: "Delivering health, efficiently."
        },
        coreCapabilities: [
          "Barcode Scanning",
          "Inventory Prediction",
          "Drug Database Integration",
          "Compliance Tracking"
        ],
        idealFor: [
          "Retail Pharmacy Chains",
          "Independent Chemists",
          "Hospital Pharmacies",
          "e-Pharmacies"
        ],
        businessOutcomes: [
          "Reduced Waste",
          "Improved Compliance",
          "Better Customer Service",
          "Optimized Stock Levels"
        ]
      },
      {
        id: "health-insurance-providers",
        name: "Health Insurance & Payers",
        description: "AI claims processing, fraud detection, and risk assessment for insurers.",
        icon: "🛡️",
        tagline: "Intelligent Health Insurance",
        overview: "Automate claims and assess risk accurately. We help health insurers use AI to process claims faster, detect fraud, and offer personalized wellness programs.",
        whyChoose: {
          intro: "Insure smarter:",
          points: [
            "Automated Claims Adjudication",
            "Fraud & Waste Detection",
            "Predictive Risk Modeling",
            "Member Engagement Bots",
            "Wellness Program Analytics"
          ]
        },
        whatWeBuild: {
          intro: "Payer solutions:",
          solutions: [
            "Claims Management Systems",
            "Fraud Detection Engines",
            "Member Portals",
            "Underwriting Assistants",
            "Network Management Tools"
          ],
          footer: "Protecting health and wealth."
        },
        coreCapabilities: [
          "Document Processing (Claims)",
          "Anomaly Detection",
          "Risk Algorithms",
          "Chatbots"
        ],
        idealFor: [
          "Health Insurance Companies",
          "TPAs (Third Party Administrators)",
          "Government Health Schemes",
          "Corporate Wellness Providers"
        ],
        businessOutcomes: [
          "Faster Claim Settlement",
          "Reduced Fraud Losses",
          "Better Risk Scoring",
          "Improved Member Trust"
        ]
      },
      {
        id: "wellness-fitness-centers",
        name: "Wellness & Fitness",
        description: "Member management and personalized workout plans for fitness centers.",
        icon: "🧘",
        tagline: "Technology for Well-being",
        overview: "Engage members with personalized wellness. We build apps and management systems for gyms, yoga studios, and wellness centers that keep members coming back.",
        whyChoose: {
          intro: "Grow your community:",
          points: [
            "Personalized Workout Plans AI",
            "Class Booking Automation",
            "Member Retention Prediction",
            "Virtual Coaching Integration",
            "Wearable Data Sync"
          ]
        },
        whatWeBuild: {
          intro: "Fitness tech:",
          solutions: [
            "Gym Management Software",
            "Workout Tracking Apps",
            "Tele-wellness Platforms",
            "Studio Booking Systems",
            "Nutrition Planning AI"
          ],
          footer: "Inspiring healthy lifestyles."
        },
        coreCapabilities: [
          "Recommendation Engines",
          "Scheduling Algorithms",
          "Video Content Delivery",
          "Activity Tracking"
        ],
        idealFor: [
          "Gym Chains",
          "Yoga Studios",
          "Personal Trainers",
          "Corporate Wellness Programs"
        ],
        businessOutcomes: [
          "Higher Member Retention",
          "Increased Ancillary Revenue",
          "Better Operational Efficiency",
          "Enhanced Member Results"
        ]
      }
    ]
  },
  {
    id: "education",
    name: "Education",
    icon: "🎓",
    image: educationImage,
    imageAlt: "NanoFlows Education AI Solutions - AI tutoring, personalized learning paths, and educational automation for schools",
    tagline: "AI That Transforms Learning Experiences",
    description: "Personalize education, automate administration, and support students with AI tutors available 24/7.",
    subIndustries: [
      {
        id: "schools-k12",
        name: "Schools & K-12",
        description: "AI tools for schools to personalize learning, manage administration, and engage students.",
        icon: "🏫",
        tagline: "Smart Schools, Better Learning",
        overview: "Bring AI into the classroom. We provide solutions that help teachers personalize instruction and schools manage operations more efficiently.",
        whyChoose: {
          intro: "Advancing Education with AI:",
          points: [
            "Personalized Learning Plans",
            "Automated Grading",
            "Student Progress Tracking",
            "Efficient Administration",
            "Enhanced Parent Communication"
          ]
        },
        whatWeBuild: {
          intro: "Our Education Solutions:",
          solutions: [
            "Adaptive Learning Platforms",
            "AI Tutors",
            "Administrative Dashboards",
            "Attendance Tracking Systems",
            "Parent Portals"
          ],
          footer: "Empowering educators and students."
        },
        coreCapabilities: [
          "Adaptive Learning Algorithms",
          "Automated Assessment",
          "Student Analytics",
          "Content Recommendation"
        ],
        idealFor: [
          "K-12 Schools",
          "School Districts",
          "Tutoring Centers",
          "Educational Non-profits"
        ],
        businessOutcomes: [
          "Improved Student Outcomes",
          "Time Savings for Teachers",
          "Better Resource Management",
          "Increased Engagement"
        ]
      },
      {
        id: "colleges-universities",
        name: "Colleges & Universities",
        description: "Higher education management systems and research collaboration platforms.",
        icon: "🏛️",
        tagline: "Smarter Higher Education",
        overview: "Transform higher ed with AI. We help universities manage admissions, improve student success rates, and facilitate cutting-edge research collaboration.",
        whyChoose: {
          intro: "Elevate your campus:",
          points: [
            "AI-Powered Admissions",
            "Student Success Prediction",
            "Research Data Management",
            "Alumni Engagement AI",
            "Campus Resource Optimization"
          ]
        },
        whatWeBuild: {
          intro: "University tech:",
          solutions: [
            "Student Information Systems (SIS)",
            "Grant Management Platforms",
            "Virtual Campus Tours",
            "Career Matching AI",
            "Learning Management Integration"
          ],
          footer: "Shaping the future of knowledge."
        },
        coreCapabilities: [
          "Predictive Analytics (Retention)",
          "NLP for Research",
          "Matchmaking Algorithms",
          "Secure Data Sharing"
        ],
        idealFor: [
          "Universities",
          "Community Colleges",
          "Research Labs",
          "Vocational Schools"
        ],
        businessOutcomes: [
          "Higher Enrollment Yield",
          "Improved Retention Rates",
          "More Research Grants",
          "Stronger Alumni Networks"
        ]
      },
      {
        id: "online-learning-platforms",
        name: "Online Learning Platforms",
        description: "Scalable LMS and personalized course delivery engines.",
        icon: "💻",
        tagline: "Learning Without Limits",
        overview: "Scale your online education business. We build robust learning platforms that can handle millions of users, personalized content delivery, and interactive learning experiences.",
        whyChoose: {
          intro: "Scale your impact:",
          points: [
            "Personalized Content Recommendations",
            "Automated Video Captioning",
            "Interactive Assessments",
            "Peer-to-Peer Learning Support",
            "Skill Gap Analysis"
          ]
        },
        whatWeBuild: {
          intro: "EdTech platforms:",
          solutions: [
            "Course Creation Tools",
            "Video Streaming LMS",
            "Certification Engines",
            "Learning Analytics Dashboards",
            "Gamified Learning Apps"
          ],
          footer: "Democratizing access to education."
        },
        coreCapabilities: [
          "Video Streaming",
          "Recommendation Engines",
          "Gamification Logic",
          "Real-time Analytics"
        ],
        idealFor: [
          "EdTech Startups",
          "Bootcamps",
          "Professional Assoc.",
          "Continuing Ed Providers"
        ],
        businessOutcomes: [
          "Higher Course Completion",
          "Increased User Engagement",
          "Lower Content Costs",
          "Faster Skill Acquisition"
        ]
      },
      {
        id: "skill-development-vocational",
        name: "Skill Development & Vocational",
        description: "Hands-on training simulations and certification tracking.",
        icon: "🛠️",
        tagline: "Skills for the Future Workforce",
        overview: "Bridge the skills gap with AI. We build platforms that focus on practical skill acquisition, using simulations, progress tracking, and verified credentials.",
        whyChoose: {
          intro: "Train the workforce:",
          points: [
            "VR/AR Training Simulations",
            "Competency-Based Assessment",
            "Digital Badges & Certificates",
            "Job Market Alignment AI",
            "Mobile-first Learning"
          ]
        },
        whatWeBuild: {
          intro: "Vocational tech:",
          solutions: [
            "Simulation Training Apps",
            "Apprenticeship Management",
            "Credentialing Wallets",
            "Job Board Integrations",
            "Skill Assessment Portals"
          ],
          footer: "Building a capable workforce."
        },
        coreCapabilities: [
          "Interactive Simulations",
          "Credential Verification",
          "Pathways Modeling",
          "Mobile Learning"
        ],
        idealFor: [
          "Vocational Institutes",
          "Trade Schools",
          "Government Skilling Missions",
          " NGOs"
        ],
        businessOutcomes: [
          "Higher Job Placement Rates",
          "Improved Skill Retention",
          "Standardized Training",
          "Verifiable Credentials"
        ]
      },
      {
        id: "corporate-training-ld",
        name: "Corporate Training & L&D",
        description: "Employee upskilling platforms and compliance training automation.",
        icon: "👔",
        tagline: "Empower Your Workforce",
        overview: "Upskill your team at scale. We build corporate learning systems that align training with business goals, ensuring employees have the skills they need to succeed.",
        whyChoose: {
          intro: "Drive business performance:",
          points: [
            "Role-Based Learning Paths",
            "Compliance Management",
            "Micro-learning Delivery",
            "Performance-Learning Linkage",
            "Social Learning Features"
          ]
        },
        whatWeBuild: {
          intro: "L&D platforms:",
          solutions: [
            "LXP (Learning Experience Platforms)",
            "Onboarding Portals",
            "Compliance Tracking Tools",
            "Mentorship Matching Apps",
            "Knowledge Sharing Hubs"
          ],
          footer: "Investing in human capital."
        },
        coreCapabilities: [
          "Content Curation",
          "User Profiling",
          "Integration with HRIS",
          "Social Collaboration"
        ],
        idealFor: [
          "Enterprise HR",
          "L&D Departments",
          "Consulting Firms",
          "Sales Organizations"
        ],
        businessOutcomes: [
          "Reduced Onboarding Time",
          "Higher Regulatory Compliance",
          "Improved Employee Performance",
          "Better Talent Retention"
        ]
      },
      {
        id: "coaching-training-institutes",
        name: "Coaching & Training Institutes",
        description: "Management software for private coaching centers and training academies.",
        icon: "📝",
        tagline: "Manage Classes, Scale Growth",
        overview: "Run your training institute efficiently. We provide software to manage students, schedule classes, collect fees, and deliver online supplementary materials.",
        whyChoose: {
          intro: "Streamline operations:",
          points: [
            "Automated Fee Collection",
            "Class Scheduling & Reminders",
            "Online Test Series",
            "Student Performance Reports",
            "Lead Management CRM"
          ]
        },
        whatWeBuild: {
          intro: "Institute management:",
          solutions: [
            "Coaching Management Software",
            "Online Exam Portals",
            "Student Apps",
            "Parent Communication Apps",
            "Marketing Automation"
          ],
          footer: "Focus on teaching, not admin."
        },
        coreCapabilities: [
          "Billing Automation",
          "Scheduling Logic",
          "Quiz Engines",
          "CRM Features"
        ],
        idealFor: [
          "Test Prep Centers",
          "Language Schools",
          "Music/Art Academies",
          "Sports Academies"
        ],
        businessOutcomes: [
          "Increased Student Intake",
          "Fewer Admin Errors",
          "Timely Fee Collection",
          "Better Student Outcomes"
        ]
      }
    ]
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    icon: "🏪",
    image: localBusinessImage,
    imageAlt: "NanoFlows Local Business AI Solutions - Affordable AI for 24/7 customer service, booking automation, and local marketing",
    tagline: "Enterprise AI at Local Business Prices",
    description: "Compete with big brands by delivering 24/7 customer service, automated bookings, and smart marketing.",
    subIndustries: [
      {
        id: "retail-stores-showrooms",
        name: "Retail Stores & Showrooms",
        description: "AI solutions for local retailers to manage inventory, engage customers, and drive foot traffic.",
        icon: "🏪",
        tagline: "Smart Retail for Local Shops",
        overview: "Level the playing field with AI. We help local retailers use technology to compete with big chains, from inventory management to personalized marketing.",
        whyChoose: {
          intro: "Grow your local business:",
          points: [
            "Better Inventory Control",
            "Automated Marketing",
            "Customer Loyalty Programs",
            "Sales Insights",
            "Efficient Operations"
          ]
        },
        whatWeBuild: {
          intro: "Tools for Retailers:",
          solutions: [
            "POS Integration",
            "Inventory Prediction",
            "Loyalty App",
            "Automated SMS Marketing",
            "Customer Feedback Tools"
          ],
          footer: "Helping local businesses thrive."
        },
        coreCapabilities: [
          "Inventory Optimization",
          "Automated Marketing Campaigns",
          "Customer Analytics",
          "Sales Forecasting"
        ],
        idealFor: [
          "Boutiques",
          "Hardware Stores",
          "Local Showrooms",
          "Specialty Shops"
        ],
        businessOutcomes: [
          "Increased Sales",
          "Reduced Waste",
          "Higher Customer Retention",
          "Better Cash Flow"
        ]
      },
      {
        id: "restaurants-cafes-food",
        name: "Restaurants & Food",
        description: "Digital menus, online ordering, and kitchen management systems.",
        icon: "🍽️",
        tagline: "Served with Intelligence",
        overview: "Modernize your restaurant. We help food businesses manage orders, reduce waste, and build loyal customer bases through smart apps and POS integrations.",
        whyChoose: {
          intro: "Optimize your kitchen:",
          points: [
            "QR Code Ordering",
            "Kitchen Display Systems (KDS)",
            "Inventory Waste Tracking",
            "Auto-scaling Delivery Integration",
            "Reputation Management"
          ]
        },
        whatWeBuild: {
          intro: "Restaurant tech:",
          solutions: [
            "Online Ordering Apps",
            "Table Reservation Systems",
            "Digital Menu Boards",
            "Ghost Kitchen Management",
            "Staff Scheduling Tools"
          ],
          footer: "Bon appétit, business growth."
        },
        coreCapabilities: [
          "Order Aggregation",
          "Menu Engineering Analytics",
          "Staff Performance Tracking",
          "Customer Database"
        ],
        idealFor: [
          "Restaurants",
          "Cafes",
          "Food Trucks",
          "Ghost Kitchens"
        ],
        businessOutcomes: [
          "Higher Table Turnover",
          "Increased Average Ticket",
          "Lower Food Cost",
          "More Repeat Diners"
        ]
      },
      {
        id: "salons-spas-personal-care",
        name: "Salons & Spas",
        description: "Booking engines and client management for personal care businesses.",
        icon: "💇",
        tagline: "Beautifully Simple Management",
        overview: "Run your salon smoothly. We provide tools for online booking, staff management, and automated appointment reminders to reduce no-shows.",
        whyChoose: {
          intro: "Style your business:",
          points: [
            "24/7 Online Booking",
            "Automated Reminders (SMS/Email)",
            "Client History & Preferences",
            "Membership Management",
            "Commission Tracking"
          ]
        },
        whatWeBuild: {
          intro: "Salon software:",
          solutions: [
            "Appointment Scheduling Apps",
            "POS for Services & Retail",
            "Client Portfolio Apps",
            "Marketing Automation Suite",
            "Inventory Tracking"
          ],
          footer: "Focus on the client, not the calendar."
        },
        coreCapabilities: [
          "Scheduling Algorithms",
          "CRM for Personal Care",
          "Photo Galleries",
          "Payment Processing"
        ],
        idealFor: [
          "Hair Salons",
          "Spas",
          "Nail Studios",
          "Barbershops"
        ],
        businessOutcomes: [
          "Reduced No-Shows",
          "Full Calendars",
          "Higher Retail Sales",
          "Better Client Retention"
        ]
      },
      {
        id: "automobile-services-workshops",
        name: "Auto Services & Workshops",
        description: "Garage management software and service reminders.",
        icon: "🚗",
        tagline: "Drive Efficiency in Your Shop",
        overview: "Streamline your auto workshop. We build software to manage job cards, track parts, and keep customers updated on their vehicle status.",
        whyChoose: {
          intro: "Tune up operations:",
          points: [
            "Digital Job Cards",
            "Service History Tracking",
            "Automated Service Reminders",
            "Parts Inventory Lookup",
            "Status Updates via SMS"
          ]
        },
        whatWeBuild: {
          intro: "Workshop tools:",
          solutions: [
            "Garage Management Software",
            "Mechanic Apps",
            "Customer Booking Portals",
            "Invoicing & Estimates",
            "Fleet Maintenance Logs"
          ],
          footer: "Keeping your business moving."
        },
        coreCapabilities: [
          "Vehicle Lookup API",
          "Job Tracking",
          "Estimating Tools",
          "Customer Communication"
        ],
        idealFor: [
          "Auto Repair Shops",
          "Car Washes",
          "Detailing Centers",
          "Tire Shops"
        ],
        businessOutcomes: [
          "Faster Turnaround",
          "Improved Trust",
          "Repeat Service Revenue",
          "Accurate Inventory"
        ]
      },
      {
        id: "gyms-yoga-fitness",
        name: "Gyms & Yoga Studios",
        description: "Local fitness studio management and class scheduling.",
        icon: "🧘",
        tagline: "Community Fitness Management",
        overview: "Manage your local studio with ease. From class bookings to membership renewals, we help you build a thriving fitness community.",
        whyChoose: {
          intro: "Strengthen your business:",
          points: [
            "Class Credential Booking",
            "Membership Recurring Billing",
            "Waitlist Automation",
            "Instructor Management",
            "VOD for Hybrid Classes"
          ]
        },
        whatWeBuild: {
          intro: "Studio tech:",
          solutions: [
            "Member Apps",
            "Check-in Kiosks",
            "Class Streaming Platforms",
            "Challenge & Leaderboard Tools",
            "Studio Admin Dashboards"
          ],
          footer: "Namaste, organized."
        },
        coreCapabilities: [
          "Calendar Management",
          "Payment Gateways",
          "Access Control Integration",
          "Video Hosting"
        ],
        idealFor: [
          "Local Gyms",
          "Yoga Studios",
          "Pilates Centers",
          "CrossFit Boxes"
        ],
        businessOutcomes: [
          "Full Classes",
          "Automated Payments",
          "Engaged Community",
          "Less Admin Time"
        ]
      },
      {
        id: "clinics-local-healthcare",
        name: "Local Clinics & Dentists",
        description: "Practice management for independent doctors and dentists.",
        icon: "🦷",
        tagline: "Care Focused Management",
        overview: "Modern practice management. We help independent clinics manage appointments, patient records, and billing without the complexity of enterprise hospital systems.",
        whyChoose: {
          intro: "Care more, manage less:",
          points: [
            "Online Appointment Booking",
            "Digital Patient Intake Forms",
            "Tele-consultation Integration",
            "Review Generation",
            "Insurance Claim Assistance"
          ]
        },
        whatWeBuild: {
          intro: "Practice software:",
          solutions: [
            "Clinic Management Systems",
            "Patient Portals",
            "Teledentistry Apps",
            "E-Prescription Tools",
            "Billing Software"
          ],
          footer: "Your practice, modernized."
        },
        coreCapabilities: [
          "Calendar Sync",
          "Secure Forms (HIPAA)",
          "Video Calling",
          "Invoicing"
        ],
        idealFor: [
          "Dental Clinics",
          "GP Practices",
          "Physiotherapy Centers",
          "Chiropractors"
        ],
        businessOutcomes: [
          "Reduced No-Shows",
          "Paperless Operations",
          "Better Patient Reviews",
          "Faster Payments"
        ]
      },
      {
        id: "professional-services",
        name: "Professional Services",
        description: "Client portals and project tracking for lawyers, accountants, and consultants.",
        icon: "⚖️",
        tagline: "Professional Client Management",
        overview: "Impress your clients. We build secure portals, document sharing tools, and billing systems for professional service firms.",
        whyChoose: {
          intro: "Professionalize operations:",
          points: [
            "Secure Document Exchange",
            "Time Tracking & Billing",
            "Client Onboarding Automation",
            "Appointment Scheduling",
            "Case/Project Management"
          ]
        },
        whatWeBuild: {
          intro: "Firm solutions:",
          solutions: [
            "Client Portals",
            "Practice Management Software",
            "Document Automation Tools",
            "CRM for Firms",
            "Billing & Invoicing Apps"
          ],
          footer: "Trust and efficiency."
        },
        coreCapabilities: [
          "Encryption & Security",
          "Time Tracking",
          "Document Management",
          "Signature Integration"
        ],
        idealFor: [
          "Law Firms",
          "Accounting Firms",
          "Consultancies",
          "Agencies"
        ],
        businessOutcomes: [
          "Billable Hours Accuracy",
          "Client Satisfaction",
          "Secure Collaboration",
          "Faster Collections"
        ]
      }
    ]
  }
];
