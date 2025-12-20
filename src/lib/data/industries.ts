
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
      allServices.find(s => s.title === "Operations Workflow")!,
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
        id: "ai-native-saas",
        name: "AI-Native SaaS Products",
        description: "Next-generation SaaS built with AI at the core, offering intelligent automation and predictive capabilities.",
        icon: "🤖",
        tagline: "Intelligence Built In",
        overview: "AI-native SaaS products leverage advanced AI models as core differentiators, not add-ons.",
        whyChoose: {
          intro: "Build SaaS that learns and improves automatically",
          points: [
            "AI models integrated into product architecture",
            "Self-improving algorithms",
            "Personalization at scale",
            "Predictive automation",
            "Natural language interfaces"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-native SaaS solutions:",
          solutions: [
            "Intelligent content platforms",
            "Predictive analytics engines",
            "Autonomous workflow systems",
            "AI-powered collaboration tools",
            "Smart automation platforms"
          ],
          footer: "Built with machine learning at the foundation."
        },
        coreCapabilities: [
          "AI model integration",
          "Continuous learning systems",
          "Real-time predictions",
          "Automated optimization",
          "Intelligent recommendations"
        ],
        idealFor: ["Early-stage SaaS founders", "Venture-backed startups", "Product innovators"],
        businessOutcomes: ["Higher user engagement", "Reduced churn", "Premium pricing power", "Competitive differentiation"]
      },
      {
        id: "fintech-startups",
        name: "FinTech Startups",
        description: "Secure, intelligent financial technology platforms for payments, lending, and wealth management.",
        icon: "💳",
        tagline: "Secure Financial Innovation",
        overview: "FinTech startups need security, compliance, and intelligence to compete with legacy banks.",
        whyChoose: {
          intro: "Build trusted financial platforms with AI",
          points: [
            "Bank-grade security & compliance",
            "Fraud detection AI",
            "Automated KYC workflows",
            "Real-time risk assessment",
            "Scalable infrastructure"
          ]
        },
        whatWeBuild: {
          intro: "FinTech solutions including:",
          solutions: [
            "Payment processing platforms",
            "Lending & loan management",
            "Digital wallets & neobanks",
            "Investment platforms",
            "Billing & subscription systems"
          ],
          footer: "Compliant, secure, and intelligent."
        },
        coreCapabilities: [
          "Fraud detection",
          "Compliance automation",
          "Risk analytics",
          "Transaction processing",
          "Multi-currency support"
        ],
        idealFor: ["Payment startups", "Lending platforms", "Digital banks"],
        businessOutcomes: ["Regulatory compliance", "Reduced fraud losses", "Faster onboarding", "Higher transaction volume"]
      },
      {
        id: "martech-salestech",
        name: "MarTech & SalesTech Platforms",
        description: "Marketing automation and sales enablement tools powered by AI for revenue growth.",
        icon: "📊",
        tagline: "Revenue Growth Automation",
        overview: "MarTech and SalesTech platforms multiply the effectiveness of marketing and sales teams.",
        whyChoose: {
          intro: "Automate revenue generation",
          points: [
            "AI-powered lead scoring",
            "Campaign personalization",
            "Sales forecasting",
            "Content generation",
            "Customer journey mapping"
          ]
        },
        whatWeBuild: {
          intro: "Marketing & Sales automation platforms:",
          solutions: [
            "Marketing automation suites",
            "CRM systems",
            "Lead scoring engines",
            "Campaign management tools",
            "Sales analytics dashboards"
          ],
          footer: "Multiply team productivity."
        },
        coreCapabilities: [
          "AI lead scoring",
          "Campaign automation",
          "Personalization engines",
          "Sales forecasting",
          "Attribution modeling"
        ],
        idealFor: ["Marketing teams", "Sales organizations", "Growth companies"],
        businessOutcomes: ["Shorter sales cycles", "Higher conversion rates", "More qualified leads", "Revenue growth"]
      },
      {
        id: "hrtech-recruitment",
        name: "HRTech & Recruitment SaaS",
        description: "AI-powered talent acquisition, management, and HR automation platforms.",
        icon: "👥",
        tagline: "Smart Talent Management",
        overview: "HRTech platforms automate hiring, onboarding, and employee management with AI.",
        whyChoose: {
          intro: "Build the future of work",
          points: [
            "AI resume screening",
            "Bias-free hiring",
            "Employee engagement AI",
            "Predictive attrition",
            "Automated onboarding"
          ]
        },
        whatWeBuild: {
          intro: "HRTech solutions including:",
          solutions: [
            "Applicant tracking systems",
            "Resume screening tools",
            "Employee experience platforms",
            "Payroll systems",
            "Workforce planning tools"
          ],
          footer: "Intelligent talent management."
        },
        coreCapabilities: [
          "Resume parsing",
          "Candidate matching",
          "Sentiment analysis",
          "Performance prediction",
          "Engagement tracking"
        ],
        idealFor: ["HR teams", "Recruitment agencies", "Enterprise HR"],
        businessOutcomes: ["Faster hiring", "Better hires", "Lower turnover", "Improved retention"]
      },
      {
        id: "healthtech-startups",
        name: "HealthTech & MedTech SaaS",
        description: "HIPAA-compliant healthcare platforms for telemedicine, patient management, and diagnostics.",
        icon: "⚕️",
        tagline: "Smart Healthcare Delivery",
        overview: "HealthTech startups deliver care more efficiently with AI-powered platforms.",
        whyChoose: {
          intro: "Healthcare needs security and intelligence",
          points: [
            "HIPAA-compliant design",
            "AI diagnostics support",
            "Secure telemedicine",
            "Patient monitoring automation",
            "EHR integration"
          ]
        },
        whatWeBuild: {
          intro: "HealthTech platforms including:",
          solutions: [
            "Telemedicine platforms",
            "Patient management systems",
            "Remote monitoring apps",
            "Diagnostic tools",
            "Health records systems"
          ],
          footer: "Secure and intelligent healthcare."
        },
        coreCapabilities: [
          "HIPAA compliance",
          "Secure messaging",
          "AI symptom checking",
          "Appointment management",
          "Clinical documentation"
        ],
        idealFor: ["Telehealth providers", "Digital health startups", "Clinics"],
        businessOutcomes: ["Better patient outcomes", "Reduced operational costs", "Compliance", "Scalable care"]
      },
      {
        id: "logistics-supply-chain",
        name: "Logistics & Supply Chain SaaS",
        description: "Intelligent platforms for supply chain optimization, tracking, and logistics management.",
        icon: "🚚",
        tagline: "Supply Chain Intelligence",
        overview: "Supply chain platforms use AI to optimize routes, reduce costs, and improve visibility.",
        whyChoose: {
          intro: "Optimize your supply chain",
          points: [
            "AI route optimization",
            "Real-time tracking",
            "Demand forecasting",
            "Inventory optimization",
            "Cost reduction AI"
          ]
        },
        whatWeBuild: {
          intro: "Supply chain solutions:",
          solutions: [
            "Route optimization engines",
            "Tracking & visibility platforms",
            "Inventory management systems",
            "Demand forecasting tools",
            "Vendor management portals"
          ],
          footer: "Optimize your supply chain."
        },
        coreCapabilities: [
          "Route optimization",
          "Real-time tracking",
          "Demand forecasting",
          "Inventory prediction",
          "Cost analytics"
        ],
        idealFor: ["Logistics companies", "E-commerce", "Manufacturing"],
        businessOutcomes: ["Reduced costs", "Faster delivery", "Better visibility", "Improved efficiency"]
      },
      {
        id: "edtech-platforms",
        name: "EdTech Platforms & LMS",
        description: "Intelligent learning management systems with personalized learning paths and analytics.",
        icon: "📚",
        tagline: "Smart Education Platforms",
        overview: "EdTech platforms adapt to learners and automate administrative tasks with AI.",
        whyChoose: {
          intro: "Education that adapts to learners",
          points: [
            "AI personalization",
            "Adaptive learning paths",
            "Automated grading",
            "Content recommendations",
            "Student analytics"
          ]
        },
        whatWeBuild: {
          intro: "EdTech solutions including:",
          solutions: [
            "Learning management systems",
            "Tutoring platforms",
            "Online course platforms",
            "Assessment tools",
            "Corporate training systems"
          ],
          footer: "Intelligent education."
        },
        coreCapabilities: [
          "Adaptive learning",
          "AI tutoring",
          "Automated grading",
          "Progress tracking",
          "Content recommendations"
        ],
        idealFor: ["Course creators", "Schools & Universities", "Corporate training"],
        businessOutcomes: ["Higher completion rates", "Better learning outcomes", "Reduced admin work", "Scalability"]
      },
      {
        id: "cybersecurity-saas",
        name: "Cybersecurity SaaS",
        description: "AI-powered threat detection, vulnerability management, and security automation platforms.",
        icon: "🔒",
        tagline: "Intelligent Security",
        overview: "Cybersecurity platforms use AI to detect threats faster and automate responses.",
        whyChoose: {
          intro: "Stay ahead of threats",
          points: [
            "AI threat detection",
            "Automated response",
            "Vulnerability scanning",
            "Anomaly detection",
            "Real-time alerts"
          ]
        },
        whatWeBuild: {
          intro: "Cybersecurity solutions:",
          solutions: [
            "Threat detection systems",
            "Vulnerability management",
            "SIEM platforms",
            "Access control systems",
            "Security monitoring tools"
          ],
          footer: "Intelligent threat protection."
        },
        coreCapabilities: [
          "Threat detection",
          "Vulnerability scanning",
          "Anomaly detection",
          "Automated response",
          "Compliance monitoring"
        ],
        idealFor: ["Enterprises", "MSPs", "Security teams"],
        businessOutcomes: ["Faster threat response", "Reduced breaches", "Compliance", "Risk reduction"]
      },
      {
        id: "proptech-platforms",
        name: "PropTech Platforms",
        description: "Real estate technology solutions for property management, valuations, and smart buildings.",
        icon: "🏢",
        tagline: "Smart Real Estate",
        overview: "PropTech platforms streamline property management and sales with AI insights.",
        whyChoose: {
          intro: "Digitize real estate",
          points: [
            "AI property valuation",
            "Virtual tours",
            "Smart building controls",
            "Automated lease management",
            "Market analytics"
          ]
        },
        whatWeBuild: {
          intro: "Real estate solutions:",
          solutions: [
            "Property management software",
            "Real estate marketplaces",
            "Valuation engines",
            "Smart building platforms",
            "Tenant management systems"
          ],
          footer: "Smart property technology."
        },
        coreCapabilities: [
          "Property valuation",
          "Virtual tours",
          "IoT integration",
          "Lease automation",
          "Market analytics"
        ],
        idealFor: ["Real estate developers", "Property managers", "Agents"],
        businessOutcomes: ["Faster sales", "Better valuations", "Operational efficiency", "Market intelligence"]
      },
      {
        id: "agritech-startups",
        name: "AgriTech Startups",
        description: "Agricultural technology for crop optimization, farm management, and supply chain tracking.",
        icon: "🌾",
        tagline: "Smart Agriculture",
        overview: "AgriTech startups use AI and IoT to improve crop yields and farm efficiency.",
        whyChoose: {
          intro: "Modernize agriculture",
          points: [
            "Crop yield optimization",
            "Weather predictions",
            "Pest detection AI",
            "Resource optimization",
            "Farm automation"
          ]
        },
        whatWeBuild: {
          intro: "AgriTech solutions:",
          solutions: [
            "Crop management systems",
            "Farm monitoring platforms",
            "Yield prediction tools",
            "Resource optimization",
            "Supply chain tracking"
          ],
          footer: "Intelligent farming."
        },
        coreCapabilities: [
          "Crop analytics",
          "Weather prediction",
          "Pest detection",
          "Resource management",
          "IoT integration"
        ],
        idealFor: ["Farms", "Agricultural companies", "Food producers"],
        businessOutcomes: ["Higher yields", "Lower costs", "Sustainability", "Better planning"]
      }
    ]
  },
  {
    id: "enterprises",
    name: "Enterprises",
    icon: "🏢",
    image: enterpriseImage,
    imageAlt: "NanoFlows Enterprise AI Solutions - ERP, automation, and intelligence for large organizations",
    tagline: "Enterprise-Scale AI Automation",
    description: "Transform enterprise operations with AI-powered automation, analytics, and decision-making systems that drive efficiency and innovation.",
    subIndustries: [
      {
        id: "erp-business-automation",
        name: "ERP & Business Process Automation",
        description: "Enterprise resource planning with AI-driven automation for seamless operations.",
        icon: "⚙️",
        tagline: "Unified Enterprise Operations",
        overview: "Modern ERP systems integrate all business processes with AI automation.",
        whyChoose: {
          intro: "Streamline enterprise operations",
          points: [
            "Process automation",
            "Data integration",
            "Real-time visibility",
            "AI-driven insights",
            "Workflow optimization"
          ]
        },
        whatWeBuild: {
          intro: "ERP and automation solutions:",
          solutions: [
            "Enterprise ERP systems",
            "Workflow automation",
            "Process mining",
            "Business intelligence",
            "Integration platforms"
          ],
          footer: "Unified operations."
        },
        coreCapabilities: [
          "Process automation",
          "Data integration",
          "Analytics dashboards",
          "Workflow management",
          "Real-time reporting"
        ],
        idealFor: ["Large enterprises", "Manufacturing", "Retail"],
        businessOutcomes: ["Operational efficiency", "Cost reduction", "Better decisions", "Faster cycles"]
      },
      {
        id: "enterprise-ai-rpa",
        name: "Enterprise AI & RPA",
        description: "Robotic process automation and AI for intelligent enterprise automation.",
        icon: "🤖",
        tagline: "Intelligent Automation at Scale",
        overview: "Enterprise RPA uses AI to automate complex, repetitive business processes.",
        whyChoose: {
          intro: "Automate enterprise processes",
          points: [
            "Process automation",
            "AI-enhanced workflows",
            "Continuous improvement",
            "Cost reduction",
            "Faster processing"
          ]
        },
        whatWeBuild: {
          intro: "RPA solutions:",
          solutions: [
            "Robotic process automation",
            "Intelligent document processing",
            "Workflow automation",
            "Process monitoring",
            "Bot management platforms"
          ],
          footer: "Intelligent automation."
        },
        coreCapabilities: [
          "Bot development",
          "Process automation",
          "Document processing",
          "Workflow orchestration",
          "Performance monitoring"
        ],
        idealFor: ["Enterprises", "Financial services", "Insurance"],
        businessOutcomes: ["Cost savings", "Efficiency", "Accuracy", "Scalability"]
      },
      {
        id: "enterprise-crm",
        name: "Enterprise CRM & Sales Automation",
        description: "Comprehensive customer relationship management with AI-powered sales optimization.",
        icon: "📈",
        tagline: "Enterprise Sales Optimization",
        overview: "Enterprise CRM systems manage complex sales processes with AI insights.",
        whyChoose: {
          intro: "Manage enterprise customer relationships",
          points: [
            "Customer 360 view",
            "AI sales forecasting",
            "Opportunity scoring",
            "Sales analytics",
            "Pipeline management"
          ]
        },
        whatWeBuild: {
          intro: "Enterprise CRM solutions:",
          solutions: [
            "CRM platforms",
            "Sales forecasting systems",
            "Customer analytics",
            "Lead management",
            "Deal tracking systems"
          ],
          footer: "Enterprise customer relationships."
        },
        coreCapabilities: [
          "Customer data management",
          "Sales forecasting",
          "Opportunity scoring",
          "Pipeline analytics",
          "Integration capabilities"
        ],
        idealFor: ["Sales organizations", "Large enterprises", "B2B companies"],
        businessOutcomes: ["Higher revenue", "Better forecasts", "Shorter cycles", "Customer insights"]
      },
      {
        id: "business-intelligence",
        name: "Business Intelligence & Analytics",
        description: "Advanced analytics and BI platforms for enterprise decision-making.",
        icon: "📊",
        tagline: "Data-Driven Enterprise Decisions",
        overview: "Enterprise BI systems turn data into actionable intelligence.",
        whyChoose: {
          intro: "Make data-driven decisions",
          points: [
            "Data warehouse solutions",
            "Advanced analytics",
            "Real-time dashboards",
            "Predictive insights",
            "Data visualization"
          ]
        },
        whatWeBuild: {
          intro: "BI & Analytics platforms:",
          solutions: [
            "Data warehouses",
            "BI dashboards",
            "Analytics platforms",
            "Data lakes",
            "Reporting systems"
          ],
          footer: "Intelligence-driven insights."
        },
        coreCapabilities: [
          "Data integration",
          "Advanced analytics",
          "Real-time dashboards",
          "Predictive modeling",
          "Data visualization"
        ],
        idealFor: ["Enterprises", "Financial firms", "Retail"],
        businessOutcomes: ["Better decisions", "Faster insights", "Competitive advantage", "ROI visibility"]
      },
      {
        id: "bfsi-banking",
        name: "BFSI (Banking, Financial Services, Insurance)",
        description: "Banking, financial services, and insurance solutions with security and compliance.",
        icon: "🏦",
        tagline: "Secure Financial Services",
        overview: "BFSI systems handle sensitive financial data with bank-grade security.",
        whyChoose: {
          intro: "Build trusted financial services",
          points: [
            "Bank-grade security",
            "Regulatory compliance",
            "Fraud prevention",
            "Risk management",
            "Customer onboarding"
          ]
        },
        whatWeBuild: {
          intro: "BFSI solutions:",
          solutions: [
            "Core banking systems",
            "Insurance platforms",
            "Wealth management",
            "Compliance systems",
            "Risk management platforms"
          ],
          footer: "Secure financial services."
        },
        coreCapabilities: [
          "Security & encryption",
          "Compliance management",
          "Fraud detection",
          "Risk analytics",
          "Customer management"
        ],
        idealFor: ["Banks", "Insurance companies", "Financial firms"],
        businessOutcomes: ["Regulatory compliance", "Fraud reduction", "Customer trust", "Operational efficiency"]
      },
      {
        id: "hrms-payroll",
        name: "HRMS & Payroll Systems",
        description: "Human resource management and payroll systems for enterprise HR operations.",
        icon: "💰",
        tagline: "Enterprise HR & Payroll",
        overview: "Enterprise HRMS systems manage all HR and payroll functions.",
        whyChoose: {
          intro: "Manage enterprise HR at scale",
          points: [
            "Payroll automation",
            "Benefits management",
            "Employee self-service",
            "Compliance management",
            "Analytics & insights"
          ]
        },
        whatWeBuild: {
          intro: "HRMS solutions:",
          solutions: [
            "HRMS platforms",
            "Payroll systems",
            "Benefits management",
            "Time tracking",
            "Performance management"
          ],
          footer: "Enterprise HR management."
        },
        coreCapabilities: [
          "Payroll processing",
          "Benefits administration",
          "Employee data management",
          "Compliance tracking",
          "Analytics dashboards"
        ],
        idealFor: ["Large enterprises", "HR departments", "Multinational companies"],
        businessOutcomes: ["Cost savings", "Compliance", "Employee satisfaction", "Operational efficiency"]
      },
      {
        id: "supply-chain-procurement",
        name: "Supply Chain & Procurement Systems",
        description: "End-to-end supply chain management and procurement automation.",
        icon: "🔗",
        tagline: "Smart Supply Chain",
        overview: "Enterprise supply chain systems optimize purchasing and vendor management.",
        whyChoose: {
          intro: "Optimize enterprise supply chain",
          points: [
            "Procurement automation",
            "Vendor management",
            "Contract management",
            "Cost optimization",
            "Supply visibility"
          ]
        },
        whatWeBuild: {
          intro: "Supply chain solutions:",
          solutions: [
            "Procurement platforms",
            "Vendor management systems",
            "Inventory management",
            "Supplier portals",
            "Cost optimization tools"
          ],
          footer: "Intelligent supply chain."
        },
        coreCapabilities: [
          "Procurement automation",
          "Vendor management",
          "Contract management",
          "Cost analytics",
          "Supply planning"
        ],
        idealFor: ["Large retailers", "Manufacturing", "Enterprises"],
        businessOutcomes: ["Cost savings", "Better terms", "Faster procurement", "Risk reduction"]
      },
      {
        id: "cybersecurity-compliance",
        name: "Cybersecurity & Compliance Solutions",
        description: "Enterprise-grade security and compliance management systems.",
        icon: "🛡️",
        tagline: "Enterprise Security & Compliance",
        overview: "Enterprise security systems protect and manage compliance across the organization.",
        whyChoose: {
          intro: "Secure your enterprise",
          points: [
            "Threat detection",
            "Compliance automation",
            "Risk management",
            "Access control",
            "Incident response"
          ]
        },
        whatWeBuild: {
          intro: "Security solutions:",
          solutions: [
            "Security operations centers",
            "Compliance platforms",
            "Identity management",
            "Threat intelligence",
            "Audit management"
          ],
          footer: "Enterprise security."
        },
        coreCapabilities: [
          "Threat detection",
          "Compliance monitoring",
          "Risk assessment",
          "Access management",
          "Incident tracking"
        ],
        idealFor: ["Large enterprises", "Regulated industries", "Financial firms"],
        businessOutcomes: ["Risk reduction", "Compliance", "Breach prevention", "Audit readiness"]
      },
      {
        id: "manufacturing-industrial",
        name: "Manufacturing & Industrial Automation",
        description: "Smart manufacturing and industrial IoT solutions for operations optimization.",
        icon: "🏭",
        tagline: "Smart Manufacturing",
        overview: "Manufacturing systems optimize production with IoT and AI.",
        whyChoose: {
          intro: "Optimize manufacturing operations",
          points: [
            "Production optimization",
            "Predictive maintenance",
            "Quality control",
            "IoT integration",
            "Process efficiency"
          ]
        },
        whatWeBuild: {
          intro: "Manufacturing solutions:",
          solutions: [
            "MES platforms",
            "Predictive maintenance",
            "Quality control systems",
            "Inventory management",
            "Production planning"
          ],
          footer: "Intelligent manufacturing."
        },
        coreCapabilities: [
          "IoT integration",
          "Predictive maintenance",
          "Quality analytics",
          "Production tracking",
          "Performance monitoring"
        ],
        idealFor: ["Manufacturing plants", "Industrial companies", "Utilities"],
        businessOutcomes: ["Uptime improvement", "Reduced downtime", "Quality improvement", "Cost savings"]
      },
      {
        id: "it-services",
        name: "IT Services & Managed Services",
        description: "Platforms for IT service delivery, ticketing, and managed services.",
        icon: "💻",
        tagline: "Enterprise IT Operations",
        overview: "IT services platforms manage infrastructure and service delivery.",
        whyChoose: {
          intro: "Manage enterprise IT operations",
          points: [
            "ITSM solutions",
            "Helpdesk automation",
            "Monitoring & alerting",
            "Change management",
            "Asset management"
          ]
        },
        whatWeBuild: {
          intro: "IT service solutions:",
          solutions: [
            "ITSM platforms",
            "Help desk systems",
            "Monitoring tools",
            "Asset management",
            "Incident management"
          ],
          footer: "Enterprise IT management."
        },
        coreCapabilities: [
          "Ticketing systems",
          "Monitoring & alerting",
          "Change management",
          "Asset tracking",
          "Service analytics"
        ],
        idealFor: ["IT teams", "MSPs", "Enterprises"],
        businessOutcomes: ["Faster resolution", "Better service", "Cost efficiency", "Uptime improvement"]
      }
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    image: ecommerceImage,
    imageAlt: "NanoFlows E-Commerce AI Solutions - Personalization, optimization, and growth for online retailers",
    tagline: "AI-Powered E-Commerce Growth",
    description: "Transform your online store with AI-driven personalization, optimization, and customer engagement that increases conversion and lifetime value.",
    subIndustries: [
      {
        id: "ai-personalization",
        name: "AI-Powered Personalization & CRO",
        description: "Personalization engines and conversion rate optimization powered by AI.",
        icon: "✨",
        tagline: "Personalized Shopping Experiences",
        overview: "AI personalization engines increase conversion by adapting to each customer.",
        whyChoose: {
          intro: "Convert more visitors",
          points: [
            "Dynamic personalization",
            "AI recommendations",
            "Behavior prediction",
            "A/B testing automation",
            "Conversion optimization"
          ]
        },
        whatWeBuild: {
          intro: "Personalization solutions:",
          solutions: [
            "Recommendation engines",
            "Personalization platforms",
            "A/B testing tools",
            "CRO analytics",
            "Customer journey optimization"
          ],
          footer: "Personalized experiences."
        },
        coreCapabilities: [
          "Recommendation algorithms",
          "Behavior prediction",
          "Dynamic content",
          "A/B testing",
          "Conversion analytics"
        ],
        idealFor: ["E-commerce sites", "Retailers", "Online marketplaces"],
        businessOutcomes: ["Higher conversion", "Increased AOV", "Better engagement", "Customer loyalty"]
      },
      {
        id: "omnichannel-retail",
        name: "Omnichannel Retail Systems",
        description: "Unified retail systems managing online, mobile, and physical store operations.",
        icon: "🔄",
        tagline: "Unified Retail Operations",
        overview: "Omnichannel systems integrate all retail channels for seamless experiences.",
        whyChoose: {
          intro: "Sell everywhere",
          points: [
            "Channel integration",
            "Unified inventory",
            "Consistent experience",
            "Cross-channel tracking",
            "Customer unification"
          ]
        },
        whatWeBuild: {
          intro: "Omnichannel solutions:",
          solutions: [
            "Omnichannel platforms",
            "Inventory management",
            "POS systems",
            "Order management",
            "Customer management"
          ],
          footer: "Unified retail."
        },
        coreCapabilities: [
          "Channel integration",
          "Inventory synchronization",
          "Order routing",
          "Customer profiles",
          "Analytics across channels"
        ],
        idealFor: ["Retailers", "Department stores", "Fashion brands"],
        businessOutcomes: ["Seamless experience", "Increased sales", "Inventory efficiency", "Customer satisfaction"]
      },
      {
        id: "order-inventory-management",
        name: "Order & Inventory Management Systems",
        description: "Intelligent order and inventory management for retail optimization.",
        icon: "📦",
        tagline: "Smart Order & Inventory",
        overview: "Inventory systems optimize stock levels and fulfill orders efficiently.",
        whyChoose: {
          intro: "Optimize your inventory",
          points: [
            "Demand forecasting",
            "Inventory optimization",
            "Order fulfillment",
            "Warehouse management",
            "Cost reduction"
          ]
        },
        whatWeBuild: {
          intro: "Inventory solutions:",
          solutions: [
            "Inventory management systems",
            "Warehouse management",
            "Order fulfillment",
            "Shipping & logistics",
            "Return management"
          ],
          footer: "Intelligent inventory."
        },
        coreCapabilities: [
          "Demand forecasting",
          "Inventory optimization",
          "Order tracking",
          "Warehouse automation",
          "Cost analytics"
        ],
        idealFor: ["E-commerce", "Retailers", "Warehousing"],
        businessOutcomes: ["Lower inventory costs", "Faster fulfillment", "Fewer stockouts", "Better margins"]
      },
      {
        id: "d2c-brands",
        name: "D2C Brand Platforms",
        description: "Direct-to-consumer platforms for online brand selling and customer engagement.",
        icon: "🎯",
        tagline: "Direct Customer Connection",
        overview: "D2C platforms help brands sell directly and build customer relationships.",
        whyChoose: {
          intro: "Build your D2C brand",
          points: [
            "Store builder",
            "Customer management",
            "Marketing automation",
            "Community building",
            "Analytics"
          ]
        },
        whatWeBuild: {
          intro: "D2C solutions:",
          solutions: [
            "E-commerce platforms",
            "Store builders",
            "Customer loyalty programs",
            "Email marketing",
            "Analytics dashboards"
          ],
          footer: "Direct brand connection."
        },
        coreCapabilities: [
          "Store management",
          "Customer relationships",
          "Marketing automation",
          "Community features",
          "Sales analytics"
        ],
        idealFor: ["Brands", "Niche sellers", "Startups"],
        businessOutcomes: ["Higher margins", "Customer loyalty", "Direct data", "Brand control"]
      },
      {
        id: "multi-vendor-marketplaces",
        name: "Multi-Vendor Marketplaces",
        description: "Marketplace platforms managing multiple vendors and their inventory.",
        icon: "🏬",
        tagline: "Vendor Marketplace Platform",
        overview: "Marketplace platforms connect multiple sellers and buyers.",
        whyChoose: {
          intro: "Build a thriving marketplace",
          points: [
            "Vendor management",
            "Commission system",
            "Dispute resolution",
            "Quality control",
            "Growth automation"
          ]
        },
        whatWeBuild: {
          intro: "Marketplace solutions:",
          solutions: [
            "Marketplace platforms",
            "Vendor portals",
            "Commission management",
            "Quality assurance",
            "Logistics integration"
          ],
          footer: "Multi-vendor success."
        },
        coreCapabilities: [
          "Vendor onboarding",
          "Commission tracking",
          "Dispute management",
          "Quality monitoring",
          "Growth analytics"
        ],
        idealFor: ["Marketplace operators", "Enterprise e-commerce", "Hyperlocal"],
        businessOutcomes: ["Network effects", "Higher GMV", "Vendor satisfaction", "Scalability"]
      },
      {
        id: "subscription-commerce",
        name: "Subscription-Based Commerce",
        description: "Subscription platforms for recurring revenue models and customer retention.",
        icon: "🔁",
        tagline: "Recurring Revenue Platform",
        overview: "Subscription platforms build predictable revenue from repeat customers.",
        whyChoose: {
          intro: "Build subscription business",
          points: [
            "Subscription management",
            "Billing automation",
            "Churn prediction",
            "Customer retention",
            "Lifetime value optimization"
          ]
        },
        whatWeBuild: {
          intro: "Subscription solutions:",
          solutions: [
            "Subscription platforms",
            "Billing systems",
            "Retention tools",
            "Analytics dashboards",
            "Customer portals"
          ],
          footer: "Predictable revenue."
        },
        coreCapabilities: [
          "Subscription management",
          "Recurring billing",
          "Churn prediction",
          "Retention automation",
          "Revenue analytics"
        ],
        idealFor: ["Box services", "SaaS", "Membership sites"],
        businessOutcomes: ["Predictable revenue", "Customer lifetime value", "Churn reduction", "Growth"]
      },
      {
        id: "social-commerce",
        name: "Social Commerce (Instagram / WhatsApp)",
        description: "Shopping integration within social platforms for seamless purchasing.",
        icon: "📱",
        tagline: "Social Shopping Platform",
        overview: "Social commerce platforms let customers shop within social apps.",
        whyChoose: {
          intro: "Sell on social media",
          points: [
            "Instagram shopping",
            "WhatsApp commerce",
            "Shoppable posts",
            "Social listening",
            "Direct messaging sales"
          ]
        },
        whatWeBuild: {
          intro: "Social commerce solutions:",
          solutions: [
            "Instagram shop integration",
            "WhatsApp commerce",
            "Social listening",
            "Chat commerce",
            "Influencer management"
          ],
          footer: "Social selling."
        },
        coreCapabilities: [
          "Social platform integration",
          "Chat commerce",
          "Shoppable content",
          "Social analytics",
          "Influencer tracking"
        ],
        idealFor: ["Fashion", "Beauty", "Lifestyle brands"],
        businessOutcomes: ["Impulse sales", "Viral reach", "Direct engagement", "Brand loyalty"]
      },
      {
        id: "b2b-wholesale-marketplaces",
        name: "B2B Wholesale Marketplaces",
        description: "B2B platforms for wholesale trading and bulk purchasing.",
        icon: "🏢",
        tagline: "B2B Wholesale Platform",
        overview: "B2B marketplaces connect wholesalers and bulk buyers efficiently.",
        whyChoose: {
          intro: "Build B2B marketplace",
          points: [
            "Bulk pricing",
            "Order management",
            "Credit terms",
            "Supplier network",
            "Quality control"
          ]
        },
        whatWeBuild: {
          intro: "B2B solutions:",
          solutions: [
            "B2B marketplaces",
            "Wholesale platforms",
            "Buyer portals",
            "Supplier networks",
            "Order management"
          ],
          footer: "B2B commerce."
        },
        coreCapabilities: [
          "Bulk order management",
          "Dynamic pricing",
          "Credit management",
          "Supplier integration",
          "Quality assurance"
        ],
        idealFor: ["Wholesalers", "Distributors", "Enterprise procurement"],
        businessOutcomes: ["Efficient bulk sales", "Supplier expansion", "Volume growth", "Better margins"]
      },
      {
        id: "b2c-online-stores",
        name: "B2C Online Stores",
        description: "Traditional business-to-consumer online retail platforms.",
        icon: "🛍️",
        tagline: "B2C E-Commerce Store",
        overview: "B2C platforms provide complete online retail functionality.",
        whyChoose: {
          intro: "Launch online store",
          points: [
            "Store management",
            "Payment processing",
            "Shipping integration",
            "Marketing tools",
            "Analytics"
          ]
        },
        whatWeBuild: {
          intro: "B2C solutions:",
          solutions: [
            "E-commerce platforms",
            "Shopping cart systems",
            "Payment gateways",
            "Shipping management",
            "Marketing automation"
          ],
          footer: "Complete B2C solution."
        },
        coreCapabilities: [
          "Store management",
          "Payment processing",
          "Shipping automation",
          "Marketing tools",
          "Sales analytics"
        ],
        idealFor: ["Retailers", "Online sellers", "Brands"],
        businessOutcomes: ["Easier selling", "Global reach", "Integrated experience", "Data visibility"]
      },
      {
        id: "dropshipping",
        name: "Dropshipping Businesses",
        description: "Dropshipping platforms connecting retailers with suppliers.",
        icon: "🚀",
        tagline: "Dropshipping Operations",
        overview: "Dropshipping platforms automate the supply chain for online sellers.",
        whyChoose: {
          intro: "Start dropshipping",
          points: [
            "Supplier network",
            "Automatic ordering",
            "Inventory sync",
            "Order tracking",
            "Supplier integration"
          ]
        },
        whatWeBuild: {
          intro: "Dropshipping solutions:",
          solutions: [
            "Dropshipping platforms",
            "Supplier integrations",
            "Automated ordering",
            "Inventory sync",
            "Order fulfillment"
          ],
          footer: "Automated dropshipping."
        },
        coreCapabilities: [
          "Supplier integration",
          "Automatic ordering",
          "Inventory synchronization",
          "Order tracking",
          "Margin management"
        ],
        idealFor: ["Online entrepreneurs", "Niche sellers", "New e-commerce"],
        businessOutcomes: ["Low startup costs", "No inventory risk", "Easy scaling", "Global products"]
      }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "🏘️",
    image: realEstateImage,
    imageAlt: "NanoFlows Real Estate AI Solutions - CRM, lead automation, and smart property platforms",
    tagline: "AI-Powered Real Estate Solutions",
    description: "Streamline property sales, management, and operations with AI-driven CRM, virtual tours, and intelligent lead automation.",
    subIndustries: [
      {
        id: "real-estate-crm",
        name: "Real Estate CRM & Lead Automation",
        description: "CRM systems for real estate with lead management and sales automation.",
        icon: "📋",
        tagline: "Real Estate Lead Management",
        overview: "Real estate CRM systems automate lead follow-up and sales processes.",
        whyChoose: {
          intro: "Manage real estate leads efficiently",
          points: [
            "Lead capture & scoring",
            "Automated follow-up",
            "Property matching",
            "Client communication",
            "Sales pipeline"
          ]
        },
        whatWeBuild: {
          intro: "Real estate CRM solutions:",
          solutions: [
            "Real estate CRM",
            "Lead management",
            "Property management",
            "Client portals",
            "Sales automation"
          ],
          footer: "Smart lead management."
        },
        coreCapabilities: [
          "Lead scoring",
          "Automated follow-up",
          "Property matching",
          "Communication tools",
          "Sales analytics"
        ],
        idealFor: ["Real estate agents", "Brokers", "Agencies"],
        businessOutcomes: ["More closings", "Better lead conversion", "Time savings", "Repeat business"]
      },
      {
        id: "real-estate-marketing",
        name: "Real Estate Marketing Automation",
        description: "Marketing automation platforms for real estate companies and agents.",
        icon: "📢",
        tagline: "Real Estate Marketing",
        overview: "Real estate marketing platforms automate campaigns and lead generation.",
        whyChoose: {
          intro: "Generate real estate leads",
          points: [
            "Lead generation",
            "Email campaigns",
            "Social media automation",
            "Property promotion",
            "Market analytics"
          ]
        },
        whatWeBuild: {
          intro: "Real estate marketing solutions:",
          solutions: [
            "Email marketing",
            "Social media campaigns",
            "Lead generation",
            "Property promotion",
            "Analytics dashboards"
          ],
          footer: "Automated real estate marketing."
        },
        coreCapabilities: [
          "Campaign automation",
          "Lead generation",
          "Email marketing",
          "Social media management",
          "Performance tracking"
        ],
        idealFor: ["Real estate firms", "Brokers", "Agents"],
        businessOutcomes: ["More leads", "Better conversion", "Lower CAC", "Consistent pipeline"]
      },
      {
        id: "booking-virtual-tours",
        name: "Booking & Virtual Tour Platforms",
        description: "Virtual tour and booking platforms for property showings.",
        icon: "🎥",
        tagline: "Virtual Property Tours",
        overview: "Virtual tour platforms reduce showing friction and expand reach.",
        whyChoose: {
          intro: "Showcase properties virtually",
          points: [
            "360 virtual tours",
            "3D walkthroughs",
            "Booking automation",
            "Lead capture",
            "Mobile experience"
          ]
        },
        whatWeBuild: {
          intro: "Virtual tour solutions:",
          solutions: [
            "Virtual tour platform",
            "360 photography integration",
            "Booking system",
            "Lead capture",
            "Mobile app"
          ],
          footer: "Immersive property experiences."
        },
        coreCapabilities: [
          "Virtual tour creation",
          "3D visualization",
          "Automated booking",
          "Lead capture",
          "Mobile optimization"
        ],
        idealFor: ["Real estate companies", "Property managers", "Brokers"],
        businessOutcomes: ["More showings", "Faster sales", "Remote viewing", "Lead quality"]
      },
      {
        id: "property-facility-management",
        name: "Property & Facility Management",
        description: "Management platforms for properties, facilities, and tenants.",
        icon: "🔧",
        tagline: "Property Management System",
        overview: "Property management systems streamline operations and tenant relations.",
        whyChoose: {
          intro: "Manage properties efficiently",
          points: [
            "Tenant management",
            "Maintenance tracking",
            "Rent collection",
            "Expense tracking",
            "Communication"
          ]
        },
        whatWeBuild: {
          intro: "Property management solutions:",
          solutions: [
            "Property management software",
            "Maintenance tracking",
            "Tenant portals",
            "Rent collection",
            "Financial reporting"
          ],
          footer: "Smart property management."
        },
        coreCapabilities: [
          "Tenant management",
          "Maintenance tracking",
          "Rent & lease management",
          "Expense tracking",
          "Financial reporting"
        ],
        idealFor: ["Property managers", "Landlords", "Real estate companies"],
        businessOutcomes: ["Operational efficiency", "Tenant satisfaction", "Better margins", "Compliance"]
      },
      {
        id: "commercial-real-estate",
        name: "Commercial Real Estate Systems",
        description: "Platforms for commercial property sales, leasing, and management.",
        icon: "🏙️",
        tagline: "Commercial Real Estate",
        overview: "Commercial real estate systems manage complex deals and relationships.",
        whyChoose: {
          intro: "Manage commercial real estate",
          points: [
            "Deal management",
            "Lease tracking",
            "Tenant relations",
            "Market analysis",
            "Financial modeling"
          ]
        },
        whatWeBuild: {
          intro: "Commercial RE solutions:",
          solutions: [
            "Commercial CRM",
            "Deal management",
            "Lease management",
            "Tenant portals",
            "Analytics dashboards"
          ],
          footer: "Commercial real estate intelligence."
        },
        coreCapabilities: [
          "Deal tracking",
          "Lease management",
          "Tenant management",
          "Market analytics",
          "Financial reporting"
        ],
        idealFor: ["Commercial brokers", "REITs", "Property companies"],
        businessOutcomes: ["Faster closings", "Better deals", "Market insights", "Efficiency"]
      },
      {
        id: "broker-channel-partners",
        name: "Broker & Channel Partner Platforms",
        description: "Platforms connecting brokers and channel partners for collaboration.",
        icon: "🤝",
        tagline: "Broker Network Platform",
        overview: "Broker platforms enable collaboration and deal sharing.",
        whyChoose: {
          intro: "Build broker networks",
          points: [
            "Broker management",
            "Deal distribution",
            "Commission tracking",
            "Collaboration tools",
            "Network effects"
          ]
        },
        whatWeBuild: {
          intro: "Broker platform solutions:",
          solutions: [
            "Broker portals",
            "Deal distribution",
            "Commission management",
            "Collaboration tools",
            "Analytics"
          ],
          footer: "Unified broker network."
        },
        coreCapabilities: [
          "Broker onboarding",
          "Deal distribution",
          "Commission tracking",
          "Collaboration tools",
          "Network analytics"
        ],
        idealFor: ["Real estate networks", "Brokerage firms", "Brokers"],
        businessOutcomes: ["More deals", "Stronger network", "Revenue sharing", "Growth"]
      },
      {
        id: "real-estate-analytics",
        name: "Real Estate Analytics & Forecasting",
        description: "Analytics and predictive tools for real estate market insights.",
        icon: "📈",
        tagline: "Real Estate Intelligence",
        overview: "Real estate analytics provide market insights and predictions.",
        whyChoose: {
          intro: "Understand real estate markets",
          points: [
            "Market analysis",
            "Price forecasting",
            "Investment insights",
            "Trend prediction",
            "Competitive analysis"
          ]
        },
        whatWeBuild: {
          intro: "Analytics solutions:",
          solutions: [
            "Analytics dashboards",
            "Price forecasting",
            "Market reports",
            "Investment analysis",
            "Trend tracking"
          ],
          footer: "Data-driven real estate decisions."
        },
        coreCapabilities: [
          "Market analysis",
          "Price prediction",
          "Trend analysis",
          "Competitive intelligence",
          "Investment metrics"
        ],
        idealFor: ["Investors", "Analysts", "Real estate firms"],
        businessOutcomes: ["Better investments", "Market insights", "Risk reduction", "Timing advantage"]
      },
      {
        id: "residential-portals",
        name: "Residential Property Portals",
        description: "Portals for listing and searching residential properties.",
        icon: "🏠",
        tagline: "Residential Property Portal",
        overview: "Residential portals are major traffic drivers for property search.",
        whyChoose: {
          intro: "Build property portal",
          points: [
            "Property listings",
            "Search functionality",
            "Lead capture",
            "Agent network",
            "User engagement"
          ]
        },
        whatWeBuild: {
          intro: "Residential portal solutions:",
          solutions: [
            "Property portal",
            "Listing management",
            "Search engine",
            "Agent network",
            "Mobile apps"
          ],
          footer: "Residential property discovery."
        },
        coreCapabilities: [
          "Listing management",
          "Advanced search",
          "Lead capture",
          "Agent connectivity",
          "Mobile experience"
        ],
        idealFor: ["Real estate sites", "Brokers", "Portal operators"],
        businessOutcomes: ["User traffic", "Lead generation", "Agent network", "Revenue model"]
      },
      {
        id: "construction-project-management",
        name: "Construction Project Management",
        description: "Project management platforms for construction and development.",
        icon: "🏗️",
        tagline: "Construction Management",
        overview: "Construction platforms manage complex projects, budgets, and teams.",
        whyChoose: {
          intro: "Manage construction projects",
          points: [
            "Project tracking",
            "Budget management",
            "Team collaboration",
            "Document management",
            "Timeline tracking"
          ]
        },
        whatWeBuild: {
          intro: "Construction solutions:",
          solutions: [
            "Project management",
            "Budget tracking",
            "Team collaboration",
            "Document management",
            "Reporting"
          ],
          footer: "Smart construction management."
        },
        coreCapabilities: [
          "Project tracking",
          "Budget management",
          "Collaboration tools",
          "Document management",
          "Progress reporting"
        ],
        idealFor: ["Contractors", "Developers", "Construction firms"],
        businessOutcomes: ["On-time delivery", "Budget control", "Team efficiency", "Better communication"]
      },
      {
        id: "smart-property-iot",
        name: "Smart Property / IoT Solutions",
        description: "IoT and smart home solutions for intelligent property management.",
        icon: "🏠",
        tagline: "Smart Property Technology",
        overview: "Smart property systems use IoT for connected, automated properties.",
        whyChoose: {
          intro: "Make properties smart",
          points: [
            "Smart controls",
            "Energy optimization",
            "Security systems",
            "Tenant convenience",
            "Sustainability"
          ]
        },
        whatWeBuild: {
          intro: "Smart property solutions:",
          solutions: [
            "Smart building controls",
            "IoT sensors",
            "Energy management",
            "Security systems",
            "Tenant apps"
          ],
          footer: "Intelligent properties."
        },
        coreCapabilities: [
          "IoT integration",
          "Smart controls",
          "Energy monitoring",
          "Security integration",
          "Tenant interface"
        ],
        idealFor: ["Property developers", "Facilities", "Modern buildings"],
        businessOutcomes: ["Energy savings", "Tenant satisfaction", "Property value", "Sustainability"]
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    image: healthcareImage,
    imageAlt: "NanoFlows Healthcare AI Solutions - HMS, telemedicine, and patient engagement platforms",
    tagline: "AI-Powered Healthcare Solutions",
    description: "Deliver better patient care with HIPAA-compliant AI systems for hospital management, telemedicine, diagnostics, and wellness.",
    subIndustries: [
      {
        id: "hospital-management",
        name: "Hospital Management Systems (HMS)",
        description: "Comprehensive hospital management systems for patient care and operations.",
        icon: "🏥",
        tagline: "Hospital Management Platform",
        overview: "HMS systems streamline hospital operations from admission to discharge.",
        whyChoose: {
          intro: "Manage hospital operations",
          points: [
            "Patient admission & discharge",
            "Doctor scheduling",
            "Bed management",
            "Billing & insurance",
            "Compliance management"
          ]
        },
        whatWeBuild: {
          intro: "HMS solutions:",
          solutions: [
            "Hospital management software",
            "Patient management",
            "Doctor scheduling",
            "Billing systems",
            "EHR systems"
          ],
          footer: "Efficient hospital operations."
        },
        coreCapabilities: [
          "Patient admission",
          "Doctor & staff scheduling",
          "Bed management",
          "Billing & claims",
          "Electronic health records"
        ],
        idealFor: ["Hospitals", "Healthcare networks", "Medical centers"],
        businessOutcomes: ["Better patient care", "Operational efficiency", "Revenue cycle", "Compliance"]
      },
      {
        id: "clinic-opd-management",
        name: "Clinic & OPD Management",
        description: "Management systems for clinics and outpatient departments.",
        icon: "🩺",
        tagline: "Clinic Management System",
        overview: "Clinic systems manage patient flow and outpatient care.",
        whyChoose: {
          intro: "Manage clinic operations",
          points: [
            "Patient registration",
            "Appointment scheduling",
            "Doctor consultation",
            "Prescription management",
            "Payment collection"
          ]
        },
        whatWeBuild: {
          intro: "Clinic solutions:",
          solutions: [
            "Clinic management software",
            "Appointment system",
            "Patient records",
            "Prescription system",
            "Billing"
          ],
          footer: "Efficient clinic operations."
        },
        coreCapabilities: [
          "Appointment scheduling",
          "Patient records",
          "Consultation management",
          "Prescription generation",
          "Payment processing"
        ],
        idealFor: ["Clinics", "Private practices", "Diagnostic centers"],
        businessOutcomes: ["Better throughput", "Patient satisfaction", "Revenue growth", "Organization"]
      },
      {
        id: "healthcare-crm",
        name: "Healthcare CRM & Patient Engagement",
        description: "CRM systems for healthcare providers to manage patient relationships.",
        icon: "💬",
        tagline: "Patient Engagement Platform",
        overview: "Healthcare CRM improves patient relationships and engagement.",
        whyChoose: {
          intro: "Engage patients effectively",
          points: [
            "Patient communication",
            "Appointment reminders",
            "Health education",
            "Follow-up management",
            "Loyalty programs"
          ]
        },
        whatWeBuild: {
          intro: "Healthcare CRM solutions:",
          solutions: [
            "Patient CRM",
            "Communication platform",
            "Appointment management",
            "Health education",
            "Patient portals"
          ],
          footer: "Patient-centric engagement."
        },
        coreCapabilities: [
          "Patient communication",
          "Automated reminders",
          "Health content",
          "Follow-up automation",
          "Patient feedback"
        ],
        idealFor: ["Healthcare providers", "Hospitals", "Clinics"],
        businessOutcomes: ["Higher adherence", "Better outcomes", "Patient loyalty", "Repeat visits"]
      },
      {
        id: "telemedicine",
        name: "Telemedicine & Virtual Care",
        description: "Telehealth platforms enabling remote patient consultations.",
        icon: "📱",
        tagline: "Virtual Healthcare Platform",
        overview: "Telemedicine platforms expand healthcare access beyond physical locations.",
        whyChoose: {
          intro: "Enable remote healthcare",
          points: [
            "Video consultations",
            "Remote patient monitoring",
            "Prescription delivery",
            "Patient convenience",
            "Provider efficiency"
          ]
        },
        whatWeBuild: {
          intro: "Telemedicine solutions:",
          solutions: [
            "Telemedicine platform",
            "Video consultation",
            "Remote monitoring",
            "Prescription system",
            "Patient app"
          ],
          footer: "Healthcare accessibility."
        },
        coreCapabilities: [
          "Secure video calls",
          "Patient monitoring",
          "Prescription e-delivery",
          "Patient records",
          "Scheduling"
        ],
        idealFor: ["Healthcare providers", "Clinics", "Digital health startups"],
        businessOutcomes: ["Expanded reach", "Patient convenience", "Cost savings", "Accessibility"]
      },
      {
        id: "medical-billing",
        name: "Medical Billing & Insurance Technology",
        description: "Billing and insurance processing systems for healthcare providers.",
        icon: "💰",
        tagline: "Healthcare Billing System",
        overview: "Medical billing systems streamline claims and insurance management.",
        whyChoose: {
          intro: "Simplify healthcare billing",
          points: [
            "Claims processing",
            "Insurance verification",
            "Automated billing",
            "Denial management",
            "Revenue optimization"
          ]
        },
        whatWeBuild: {
          intro: "Medical billing solutions:",
          solutions: [
            "Billing software",
            "Claims management",
            "Insurance verification",
            "Coding & compliance",
            "Revenue analytics"
          ],
          footer: "Efficient healthcare billing."
        },
        coreCapabilities: [
          "Claims generation",
          "Insurance verification",
          "Automated billing",
          "Denial tracking",
          "Revenue reporting"
        ],
        idealFor: ["Hospitals", "Clinics", "Healthcare networks"],
        businessOutcomes: ["Faster collections", "Reduced denials", "Revenue growth", "Compliance"]
      },
      {
        id: "diagnostic-labs",
        name: "Diagnostic Labs & Radiology Software",
        description: "Laboratory and radiology information systems for test management.",
        icon: "🔬",
        tagline: "Diagnostic Lab System",
        overview: "Lab systems manage tests, results, and image storage.",
        whyChoose: {
          intro: "Streamline lab operations",
          points: [
            "Sample tracking",
            "Test management",
            "Result reporting",
            "Image storage",
            "Integration with EHR"
          ]
        },
        whatWeBuild: {
          intro: "Lab management solutions:",
          solutions: [
            "Laboratory information system",
            "Radiology management",
            "PACS system",
            "Report generation",
            "Integration services"
          ],
          footer: "Efficient lab operations."
        },
        coreCapabilities: [
          "Sample & test tracking",
          "Result management",
          "Image storage & retrieval",
          "Report generation",
          "Quality control"
        ],
        idealFor: ["Diagnostic labs", "Hospitals", "Radiology centers"],
        businessOutcomes: ["Faster results", "Quality improvement", "Integration", "Compliance"]
      },
      {
        id: "pharmacy-inventory",
        name: "Pharmacy & Inventory Systems",
        description: "Pharmacy management and drug inventory control systems.",
        icon: "💊",
        tagline: "Pharmacy Management System",
        overview: "Pharmacy systems manage prescriptions, inventory, and dispensing.",
        whyChoose: {
          intro: "Manage pharmacy operations",
          points: [
            "Prescription management",
            "Inventory control",
            "Drug interaction checking",
            "Billing integration",
            "Regulatory compliance"
          ]
        },
        whatWeBuild: {
          intro: "Pharmacy solutions:",
          solutions: [
            "Pharmacy management software",
            "Inventory system",
            "Prescription system",
            "Billing integration",
            "Quality assurance"
          ],
          footer: "Efficient pharmacy operations."
        },
        coreCapabilities: [
          "Prescription processing",
          "Inventory management",
          "Drug interaction checking",
          "Billing & insurance",
          "Compliance tracking"
        ],
        idealFor: ["Pharmacies", "Hospitals", "Healthcare networks"],
        businessOutcomes: ["Efficiency", "Safety", "Accuracy", "Compliance"]
      },
      {
        id: "healthcare-analytics",
        name: "AI-Based Healthcare Analytics",
        description: "Analytics platforms for healthcare data insights and AI diagnostics.",
        icon: "📊",
        tagline: "Healthcare Analytics Platform",
        overview: "Healthcare analytics transform data into actionable clinical insights.",
        whyChoose: {
          intro: "Data-driven healthcare",
          points: [
            "Clinical analytics",
            "Predictive models",
            "AI diagnostics support",
            "Outcomes tracking",
            "Quality improvement"
          ]
        },
        whatWeBuild: {
          intro: "Healthcare analytics solutions:",
          solutions: [
            "Analytics platform",
            "Predictive models",
            "Outcomes dashboards",
            "Quality metrics",
            "Reporting tools"
          ],
          footer: "Intelligence-driven healthcare."
        },
        coreCapabilities: [
          "Data integration",
          "Clinical analytics",
          "Predictive modeling",
          "Outcomes analysis",
          "Quality tracking"
        ],
        idealFor: ["Hospitals", "Healthcare networks", "Researchers"],
        businessOutcomes: ["Better outcomes", "Quality improvement", "Cost savings", "Evidence-based care"]
      },
      {
        id: "wellness-preventive",
        name: "Wellness & Preventive Care Platforms",
        description: "Platforms promoting wellness, prevention, and healthy lifestyles.",
        icon: "🏃",
        tagline: "Wellness & Prevention Platform",
        overview: "Wellness platforms help prevent disease through engagement.",
        whyChoose: {
          intro: "Promote preventive health",
          points: [
            "Health tracking",
            "Wellness programs",
            "Behavior change",
            "Incentives",
            "Community support"
          ]
        },
        whatWeBuild: {
          intro: "Wellness solutions:",
          solutions: [
            "Wellness app",
            "Health coaching platform",
            "Corporate wellness programs",
            "Incentive management",
            "Community features"
          ],
          footer: "Prevention through wellness."
        },
        coreCapabilities: [
          "Health tracking",
          "Coaching programs",
          "Incentive management",
          "Social engagement",
          "Progress analytics"
        ],
        idealFor: ["Employers", "Health plans", "Corporate wellness"],
        businessOutcomes: ["Healthier population", "Lower costs", "Engagement", "Prevention"]
      },
      {
        id: "wearable-health-monitoring",
        name: "Wearable Health Monitoring Platforms",
        description: "Platforms integrating wearable devices for continuous health monitoring.",
        icon: "⌚",
        tagline: "Wearable Health Platform",
        overview: "Wearable platforms provide continuous health monitoring and insights.",
        whyChoose: {
          intro: "Monitor health continuously",
          points: [
            "Wearable integration",
            "Continuous monitoring",
            "Real-time alerts",
            "Health insights",
            "Provider integration"
          ]
        },
        whatWeBuild: {
          intro: "Wearable solutions:",
          solutions: [
            "Wearable platform",
            "Health monitoring app",
            "Alert system",
            "Provider dashboard",
            "Analytics"
          ],
          footer: "Continuous health monitoring."
        },
        coreCapabilities: [
          "Wearable integration",
          "Data collection",
          "Real-time alerts",
          "Health analytics",
          "Provider sharing"
        ],
        idealFor: ["Health platforms", "Insurance companies", "Healthcare providers"],
        businessOutcomes: ["Proactive health", "Early intervention", "Engagement", "Prevention"]
      }
    ]
  },
  {
    id: "education",
    name: "Education",
    icon: "🎓",
    image: educationImage,
    imageAlt: "NanoFlows Education AI Solutions - LMS, EdTech platforms, and intelligent learning systems",
    tagline: "AI-Powered Learning Platforms",
    description: "Transform education with AI-driven learning platforms that personalize education, automate administration, and improve outcomes.",
    subIndustries: [
      {
        id: "learning-management-systems",
        name: "Learning Management Systems (LMS)",
        description: "Core LMS platforms for course delivery and student management.",
        icon: "📚",
        tagline: "Modern LMS Platform",
        overview: "LMS platforms provide the foundation for online education.",
        whyChoose: {
          intro: "Build your learning platform",
          points: [
            "Course management",
            "Student enrollment",
            "Content delivery",
            "Assignments & grading",
            "Progress tracking"
          ]
        },
        whatWeBuild: {
          intro: "LMS solutions:",
          solutions: [
            "Learning management system",
            "Course authoring tools",
            "Assessment system",
            "Student portal",
            "Reporting"
          ],
          footer: "Complete LMS platform."
        },
        coreCapabilities: [
          "Course management",
          "Content delivery",
          "Assessment tools",
          "Progress tracking",
          "Certification"
        ],
        idealFor: ["Educational institutions", "Training companies", "Course creators"],
        businessOutcomes: ["Scalable learning", "Better engagement", "Data insights", "Certification"]
      },
      {
        id: "online-edtech-platforms",
        name: "Online EdTech Platforms",
        description: "Online learning platforms offering courses and educational content.",
        icon: "🎥",
        tagline: "Online Learning Platform",
        overview: "Online platforms democratize education through accessible learning.",
        whyChoose: {
          intro: "Offer online courses",
          points: [
            "Scalable platform",
            "Multiple course formats",
            "Interactive content",
            "Social learning",
            "Instructor tools"
          ]
        },
        whatWeBuild: {
          intro: "Online platform solutions:",
          solutions: [
            "Online learning platform",
            "Course marketplace",
            "Content management",
            "Student community",
            "Payment processing"
          ],
          footer: "Accessible learning."
        },
        coreCapabilities: [
          "Scalable architecture",
          "Content delivery",
          "Interactive features",
          "Community building",
          "Analytics"
        ],
        idealFor: ["EdTech startups", "Course creators", "Educational companies"],
        businessOutcomes: ["Global reach", "Scalability", "Revenue model", "Learning outcomes"]
      },
      {
        id: "school-management-systems",
        name: "School Management Systems",
        description: "Management systems for K-12 schools covering all operations.",
        icon: "🏫",
        tagline: "School Management Platform",
        overview: "School systems manage students, staff, operations, and learning.",
        whyChoose: {
          intro: "Manage school operations",
          points: [
            "Student management",
            "Class & schedule management",
            "Attendance tracking",
            "Parent communication",
            "Academic performance"
          ]
        },
        whatWeBuild: {
          intro: "School management solutions:",
          solutions: [
            "School management software",
            "Student information system",
            "Scheduling system",
            "Parent portal",
            "Reporting"
          ],
          footer: "Complete school management."
        },
        coreCapabilities: [
          "Student records",
          "Class scheduling",
          "Attendance management",
          "Grade management",
          "Parent communication"
        ],
        idealFor: ["K-12 schools", "School districts", "Private schools"],
        businessOutcomes: ["Operational efficiency", "Parent engagement", "Better communication", "Data visibility"]
      },
      {
        id: "college-university-erp",
        name: "College & University ERP",
        description: "Enterprise systems for higher education institutions.",
        icon: "🎓",
        tagline: "Higher Education ERP",
        overview: "University ERP systems manage complex academic and business operations.",
        whyChoose: {
          intro: "Manage university operations",
          points: [
            "Student lifecycle",
            "Course management",
            "Faculty management",
            "Admissions",
            "Financial management"
          ]
        },
        whatWeBuild: {
          intro: "University ERP solutions:",
          solutions: [
            "University ERP",
            "Student information system",
            "Admissions system",
            "Faculty portal",
            "Financial system"
          ],
          footer: "Complete university management."
        },
        coreCapabilities: [
          "Student lifecycle",
          "Course scheduling",
          "Faculty management",
          "Admissions",
          "Financial tracking"
        ],
        idealFor: ["Universities", "Colleges", "Higher education"],
        businessOutcomes: ["Operational efficiency", "Student satisfaction", "Data integration", "Reporting"]
      },
      {
        id: "student-crm-admissions",
        name: "Student CRM & Admissions Systems",
        description: "CRM systems for student recruitment and admissions management.",
        icon: "📝",
        tagline: "Student Recruitment Platform",
        overview: "Student CRM automates recruitment and streamlines admissions.",
        whyChoose: {
          intro: "Recruit & enroll students",
          points: [
            "Lead management",
            "Automated communication",
            "Application processing",
            "Document management",
            "Student tracking"
          ]
        },
        whatWeBuild: {
          intro: "Student CRM solutions:",
          solutions: [
            "Student CRM platform",
            "Lead management",
            "Application system",
            "Document portal",
            "Analytics"
          ],
          footer: "Streamlined admissions."
        },
        coreCapabilities: [
          "Lead capture & scoring",
          "Automated communication",
          "Application processing",
          "Document management",
          "Analytics"
        ],
        idealFor: ["Educational institutions", "University admissions", "Recruitment"],
        businessOutcomes: ["Higher enrollment", "Better conversion", "Data insights", "Efficiency"]
      },
      {
        id: "online-examination",
        name: "Online Examination & Proctoring",
        description: "Online testing platforms with proctoring for secure assessments.",
        icon: "📱",
        tagline: "Online Assessment Platform",
        overview: "Online exam platforms enable secure remote testing.",
        whyChoose: {
          intro: "Conduct secure exams",
          points: [
            "Proctoring technology",
            "Secure testing",
            "Multiple question types",
            "Result analytics",
            "Integrity checks"
          ]
        },
        whatWeBuild: {
          intro: "Online exam solutions:",
          solutions: [
            "Exam platform",
            "Proctoring system",
            "Question bank",
            "Result analysis",
            "Certificate generation"
          ],
          footer: "Secure online testing."
        },
        coreCapabilities: [
          "AI proctoring",
          "Secure testing environment",
          "Multiple question types",
          "Result analytics",
          "Cheating detection"
        ],
        idealFor: ["Educational institutions", "Certification bodies", "Testing companies"],
        businessOutcomes: ["Secure testing", "Fraud prevention", "Scalability", "Data insights"]
      },
      {
        id: "corporate-training",
        name: "Corporate Training Platforms",
        description: "Training platforms for employee development and onboarding.",
        icon: "💼",
        tagline: "Corporate Training Platform",
        overview: "Corporate training platforms develop workforce skills.",
        whyChoose: {
          intro: "Train your workforce",
          points: [
            "Course management",
            "Skill development",
            "Compliance training",
            "Progress tracking",
            "ROI measurement"
          ]
        },
        whatWeBuild: {
          intro: "Corporate training solutions:",
          solutions: [
            "Training platform",
            "Course authoring",
            "Compliance training",
            "Skills assessment",
            "Analytics"
          ],
          footer: "Workforce development."
        },
        coreCapabilities: [
          "Course management",
          "Assessment tools",
          "Progress tracking",
          "Compliance management",
          "Analytics"
        ],
        idealFor: ["Enterprises", "HR departments", "Training departments"],
        businessOutcomes: ["Skill development", "Compliance", "Retention", "Performance improvement"]
      },
      {
        id: "virtual-classrooms",
        name: "Virtual Classrooms & Content Platforms",
        description: "Live teaching platforms and interactive educational content.",
        icon: "💻",
        tagline: "Virtual Classroom Platform",
        overview: "Virtual classroom platforms enable live, interactive learning.",
        whyChoose: {
          intro: "Teach virtually",
          points: [
            "Live teaching",
            "Interactive tools",
            "Recording & playback",
            "Student engagement",
            "Collaboration features"
          ]
        },
        whatWeBuild: {
          intro: "Virtual classroom solutions:",
          solutions: [
            "Virtual classroom platform",
            "Live teaching tools",
            "Interactive features",
            "Recording system",
            "Collaboration tools"
          ],
          footer: "Interactive virtual learning."
        },
        coreCapabilities: [
          "Live video teaching",
          "Interactive whiteboard",
          "Breakout rooms",
          "Recording & playback",
          "Student engagement tools"
        ],
        idealFor: ["Educational institutions", "Online tutors", "Training companies"],
        businessOutcomes: ["Engagement", "Scalability", "Flexibility", "Learning outcomes"]
      },
      {
        id: "education-analytics",
        name: "Education Analytics & AI Insights",
        description: "Analytics platforms providing educational insights and AI-driven recommendations.",
        icon: "📊",
        tagline: "Education Analytics Platform",
        overview: "Education analytics optimize learning outcomes with data insights.",
        whyChoose: {
          intro: "Data-driven education",
          points: [
            "Student performance analytics",
            "Predictive modeling",
            "Personalization insights",
            "Learning path recommendations",
            "Intervention identification"
          ]
        },
        whatWeBuild: {
          intro: "Analytics solutions:",
          solutions: [
            "Analytics platform",
            "Dashboard system",
            "Predictive models",
            "Intervention tools",
            "Reporting"
          ],
          footer: "Intelligence-driven education."
        },
        coreCapabilities: [
          "Data integration",
          "Student analytics",
          "Predictive modeling",
          "Performance tracking",
          "Intervention recommendations"
        ],
        idealFor: ["Educational institutions", "EdTech companies", "Researchers"],
        businessOutcomes: ["Better outcomes", "Early intervention", "Personalization", "Retention"]
      },
      {
        id: "coaching-testprep",
        name: "Coaching & Test-Prep Institutes",
        description: "Specialized platforms for test preparation and coaching services.",
        icon: "🎯",
        tagline: "Test-Prep Platform",
        overview: "Test-prep platforms help students prepare for competitive exams.",
        whyChoose: {
          intro: "Support exam preparation",
          points: [
            "Question bank",
            "Practice tests",
            "Progress tracking",
            "Personalized guidance",
            "Results analytics"
          ]
        },
        whatWeBuild: {
          intro: "Test-prep solutions:",
          solutions: [
            "Test-prep platform",
            "Question bank",
            "Mock tests",
            "Performance tracking",
            "Coaching portal"
          ],
          footer: "Exam preparation success."
        },
        coreCapabilities: [
          "Question bank",
          "Mock tests",
          "Progress tracking",
          "Performance analytics",
          "Personalized recommendations"
        ],
        idealFor: ["Coaching institutes", "Test-prep companies", "Online tutors"],
        businessOutcomes: ["Student success", "Better results", "Retention", "Reputation"]
      }
    ]
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    icon: "🏪",
    image: localBusinessImage,
    imageAlt: "NanoFlows Local Business AI Solutions - POS, CRM, and service management for local businesses",
    tagline: "AI Solutions for Local Business Growth",
    description: "Empower local businesses with AI-driven tools for customer engagement, operations, and growth.",
    subIndustries: [
      {
        id: "whatsapp-crm",
        name: "WhatsApp CRM & Business Automation",
        description: "CRM systems leveraging WhatsApp for customer communication.",
        icon: "💬",
        tagline: "WhatsApp Business Platform",
        overview: "WhatsApp CRM meets customers where they communicate most.",
        whyChoose: {
          intro: "Engage via WhatsApp",
          points: [
            "WhatsApp integration",
            "Automated messaging",
            "Customer database",
            "Broadcast campaigns",
            "Order tracking"
          ]
        },
        whatWeBuild: {
          intro: "WhatsApp CRM solutions:",
          solutions: [
            "WhatsApp CRM platform",
            "Chatbot system",
            "Broadcast campaigns",
            "Order management",
            "Customer database"
          ],
          footer: "WhatsApp business excellence."
        },
        coreCapabilities: [
          "WhatsApp integration",
          "Automated messaging",
          "Customer database",
          "Order management",
          "Analytics"
        ],
        idealFor: ["Small businesses", "Retail shops", "Service providers"],
        businessOutcomes: ["Better engagement", "Higher sales", "Customer retention", "Efficiency"]
      },
      {
        id: "retail-pos",
        name: "Retail Stores & POS Systems",
        description: "Point-of-sale systems for retail stores and shop management.",
        icon: "🛒",
        tagline: "Retail POS System",
        overview: "Retail POS systems manage sales, inventory, and customers.",
        whyChoose: {
          intro: "Manage retail operations",
          points: [
            "Sales transactions",
            "Inventory tracking",
            "Customer profiles",
            "Reporting",
            "Offline capability"
          ]
        },
        whatWeBuild: {
          intro: "Retail POS solutions:",
          solutions: [
            "POS system",
            "Inventory management",
            "Customer database",
            "Sales reporting",
            "Mobile POS"
          ],
          footer: "Efficient retail operations."
        },
        coreCapabilities: [
          "Transaction processing",
          "Inventory management",
          "Customer tracking",
          "Sales reporting",
          "Multi-location support"
        ],
        idealFor: ["Retail shops", "Stores", "Retail chains"],
        businessOutcomes: ["Faster checkouts", "Inventory control", "Sales insights", "Efficiency"]
      },
      {
        id: "restaurants-cafes",
        name: "Restaurants, Cafés & Food Chains",
        description: "Management systems for food and beverage businesses.",
        icon: "🍽️",
        tagline: "Restaurant Management",
        overview: "Restaurant systems manage orders, inventory, and customers.",
        whyChoose: {
          intro: "Manage food business",
          points: [
            "Order management",
            "Kitchen display",
            "Table management",
            "Inventory control",
            "Customer loyalty"
          ]
        },
        whatWeBuild: {
          intro: "Restaurant solutions:",
          solutions: [
            "Restaurant management software",
            "POS system",
            "Order management",
            "Inventory tracking",
            "Delivery integration"
          ],
          footer: "Smooth restaurant operations."
        },
        coreCapabilities: [
          "Order taking & management",
          "Kitchen integration",
          "Table management",
          "Inventory tracking",
          "Delivery coordination"
        ],
        idealFor: ["Restaurants", "Food chains", "Cafés"],
        businessOutcomes: ["Faster service", "Better operations", "Inventory control", "Customer satisfaction"]
      },
      {
        id: "clinics-diagnostic",
        name: "Clinics & Diagnostic Centers",
        description: "Management systems for medical clinics and diagnostic services.",
        icon: "🩺",
        tagline: "Clinic Management System",
        overview: "Clinic systems streamline patient care and operations.",
        whyChoose: {
          intro: "Manage clinic operations",
          points: [
            "Patient management",
            "Appointment scheduling",
            "Billing & insurance",
            "Test management",
            "Report generation"
          ]
        },
        whatWeBuild: {
          intro: "Clinic solutions:",
          solutions: [
            "Clinic management software",
            "Patient management",
            "Appointment system",
            "Billing system",
            "Report generation"
          ],
          footer: "Efficient clinic operations."
        },
        coreCapabilities: [
          "Patient registration",
          "Appointment scheduling",
          "Test management",
          "Billing & insurance",
          "Report generation"
        ],
        idealFor: ["Clinics", "Diagnostic centers", "Medical practices"],
        businessOutcomes: ["Better operations", "Patient satisfaction", "Revenue tracking", "Organization"]
      },
      {
        id: "salons-spas",
        name: "Salons, Spas & Wellness Centers",
        description: "Management systems for beauty, spa, and wellness businesses.",
        icon: "💆",
        tagline: "Salon Management System",
        overview: "Salon systems manage appointments, inventory, and customers.",
        whyChoose: {
          intro: "Manage salon operations",
          points: [
            "Appointment scheduling",
            "Staff management",
            "Customer profiles",
            "Inventory tracking",
            "Loyalty programs"
          ]
        },
        whatWeBuild: {
          intro: "Salon solutions:",
          solutions: [
            "Salon management software",
            "Appointment system",
            "Staff scheduling",
            "Customer database",
            "Billing & loyalty"
          ],
          footer: "Salon business success."
        },
        coreCapabilities: [
          "Appointment scheduling",
          "Staff management",
          "Service pricing",
          "Customer loyalty",
          "Inventory management"
        ],
        idealFor: ["Salons", "Spas", "Wellness centers"],
        businessOutcomes: ["Better scheduling", "Repeat customers", "Staff efficiency", "Loyalty"]
      },
      {
        id: "gyms-fitness",
        name: "Gyms & Fitness Studios",
        description: "Management systems for fitness facilities and training.",
        icon: "💪",
        tagline: "Gym Management System",
        overview: "Gym systems manage memberships, classes, and members.",
        whyChoose: {
          intro: "Manage fitness business",
          points: [
            "Membership management",
            "Class scheduling",
            "Trainer management",
            "Payment collection",
            "Member engagement"
          ]
        },
        whatWeBuild: {
          intro: "Gym solutions:",
          solutions: [
            "Gym management software",
            "Membership system",
            "Class management",
            "Billing system",
            "Mobile app"
          ],
          footer: "Fitness business success."
        },
        coreCapabilities: [
          "Membership management",
          "Class scheduling",
          "Trainer assignment",
          "Payment processing",
          "Member tracking"
        ],
        idealFor: ["Gyms", "Fitness studios", "Wellness centers"],
        businessOutcomes: ["Better retention", "Higher utilization", "Payment efficiency", "Member engagement"]
      },
      {
        id: "automobile-service",
        name: "Automobile Service Centers",
        description: "Management systems for car repair and service centers.",
        icon: "🚗",
        tagline: "Auto Service Management",
        overview: "Auto service systems manage repairs, inventory, and customers.",
        whyChoose: {
          intro: "Manage auto service",
          points: [
            "Job scheduling",
            "Parts inventory",
            "Service history",
            "Customer communication",
            "Billing"
          ]
        },
        whatWeBuild: {
          intro: "Auto service solutions:",
          solutions: [
            "Service management software",
            "Job scheduling",
            "Parts inventory",
            "Customer records",
            "Billing system"
          ],
          footer: "Auto service excellence."
        },
        coreCapabilities: [
          "Job scheduling",
          "Parts management",
          "Service history",
          "Labor tracking",
          "Customer communication"
        ],
        idealFor: ["Service centers", "Repair shops", "Auto dealers"],
        businessOutcomes: ["Better scheduling", "Service quality", "Customer retention", "Efficiency"]
      },
      {
        id: "home-service-providers",
        name: "Home Service Providers",
        description: "Platforms for home services like plumbing, electrician, cleaning.",
        icon: "🔧",
        tagline: "Home Service Platform",
        overview: "Home service platforms connect providers with customers.",
        whyChoose: {
          intro: "Manage home services",
          points: [
            "Job scheduling",
            "Service provider management",
            "Customer booking",
            "Payment collection",
            "Service tracking"
          ]
        },
        whatWeBuild: {
          intro: "Home service solutions:",
          solutions: [
            "Home service platform",
            "Provider management",
            "Booking system",
            "Billing system",
            "Customer app"
          ],
          footer: "Home service success."
        },
        coreCapabilities: [
          "Service scheduling",
          "Provider assignment",
          "Customer booking",
          "Payment processing",
          "Service tracking"
        ],
        idealFor: ["Service providers", "Handymen", "Service networks"],
        businessOutcomes: ["More bookings", "Efficiency", "Customer retention", "Growth"]
      },
      {
        id: "logistics-local-delivery",
        name: "Logistics & Local Delivery Services",
        description: "Platforms for local delivery and logistics operations.",
        icon: "🚚",
        tagline: "Local Delivery Platform",
        overview: "Delivery platforms optimize routes and track deliveries.",
        whyChoose: {
          intro: "Manage deliveries",
          points: [
            "Order management",
            "Route optimization",
            "Real-time tracking",
            "Driver management",
            "Customer communication"
          ]
        },
        whatWeBuild: {
          intro: "Delivery solutions:",
          solutions: [
            "Delivery management system",
            "Route optimization",
            "Tracking system",
            "Driver app",
            "Customer app"
          ],
          footer: "Efficient deliveries."
        },
        coreCapabilities: [
          "Order management",
          "Route optimization",
          "Real-time tracking",
          "Driver coordination",
          "Customer notifications"
        ],
        idealFor: ["Delivery services", "Logistics companies", "E-commerce"],
        businessOutcomes: ["Faster delivery", "Cost efficiency", "Customer satisfaction", "Scalability"]
      },
      {
        id: "local-seo-digital-marketing",
        name: "Local SEO, Ads & Digital Marketing",
        description: "Digital marketing services for local business growth.",
        icon: "📱",
        tagline: "Local Marketing Platform",
        overview: "Local marketing services help businesses reach nearby customers.",
        whyChoose: {
          intro: "Market locally",
          points: [
            "Google My Business optimization",
            "Local SEO",
            "Local ads management",
            "Review management",
            "Analytics"
          ]
        },
        whatWeBuild: {
          intro: "Local marketing solutions:",
          solutions: [
            "Local SEO platform",
            "Ads management",
            "Review management",
            "Analytics dashboard",
            "Local insights"
          ],
          footer: "Local business growth."
        },
        coreCapabilities: [
          "Local SEO optimization",
          "Ad campaign management",
          "Review monitoring",
          "Local analytics",
          "Reputation management"
        ],
        idealFor: ["Local businesses", "Franchises", "Multi-location brands"],
        businessOutcomes: ["Higher visibility", "More customers", "Better reviews", "Local dominance"]
      }
    ]
  }
];
