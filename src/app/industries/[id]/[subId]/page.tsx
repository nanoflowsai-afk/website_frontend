import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import startupsImage from "@assets/generated_images/startups_saas_ai_office.png";
import enterpriseImage from "@assets/generated_images/enterprise_ai_headquarters.png";
import ecommerceImage from "@assets/generated_images/e-commerce_ai_automation.png";
import realEstateImage from "@assets/generated_images/real_estate_ai_matching.png";
import healthcareImage from "@assets/generated_images/healthcare_ai_diagnostics.png";
import educationImage from "@assets/generated_images/education_ai_learning.png";
import localBusinessImage from "@assets/generated_images/local_business_ai_service.png";
import type { StaticImageData } from "next/image";
import type { Metadata } from "next";

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

type Industry = {
  id: string;
  name: string;
  icon: string;
  image: StaticImageData;
  imageAlt: string;
  subIndustries: SubIndustry[];
};

const industries: Industry[] = [
  {
    id: "startups-saas",
    name: "Startups & SaaS",
    icon: "🚀",
    image: startupsImage,
    imageAlt: "NanoFlows Startups and SaaS AI Solutions",
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
          "AI dashboards & real-time analytics",
          "Subscription, billing & usage tracking",
          "WhatsApp & notification automation"
        ],
        idealFor: [
          "FinTech startup founders",
          "SaaS finance product teams",
          "NBFCs & digital finance innovators",
          "Enterprises launching FinTech platforms"
        ],
        businessOutcomes: [
          "Faster go-to-market",
          "Reduced manual financial operations",
          "AI-driven insights & decisions",
          "High-trust, scalable SaaS architecture",
          "Future-ready platform for investors & compliance"
        ]
      },
      {
        id: "healthtech-startups",
        name: "HealthTech Startups",
        description: "Healthcare technology solutions with AI-powered diagnostics, patient engagement, and medical data analytics.",
        icon: "🏥",
        tagline: "AI-First, HIPAA-Compliant Healthcare Technology Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help HealthTech startups build AI-native healthcare platforms that are compliant, secure, patient-centric, and automation-driven. From telemedicine apps to diagnostic AI systems, we design healthcare SaaS products that improve patient outcomes while maintaining strict regulatory compliance. We build health-first, AI-powered systems that transform care delivery.",
        whyChoose: {
          intro: "HealthTech requires compliance, accuracy, patient trust, and intelligent automation.",
          points: [
            "HIPAA-compliant architecture from day one",
            "AI-powered diagnostics & clinical decision support",
            "Patient engagement automation & personalization",
            "Secure health data management & interoperability",
            "Built for scale, audits & healthcare integrations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled HealthTech SaaS solutions, including:",
          solutions: [
            "Telemedicine & virtual care platforms",
            "Patient engagement & communication apps",
            "AI-powered diagnostic tools",
            "Remote patient monitoring systems",
            "Health data analytics dashboards",
            "Medical imaging AI platforms",
            "Healthcare workflow automation tools"
          ],
          footer: "All solutions are HIPAA-compliant, cloud-native, and integration-ready."
        },
        coreCapabilities: [
          "AI-driven symptom analysis & triage",
          "Medical image recognition & analysis",
          "Automated appointment scheduling & reminders",
          "Patient data aggregation & insights",
          "Secure messaging & video consultations",
          "EHR/EMR integration capabilities",
          "Compliance monitoring & reporting",
          "Multi-channel patient communication"
        ],
        idealFor: [
          "HealthTech startup founders",
          "Digital health entrepreneurs",
          "Medical device innovators",
          "Healthcare SaaS teams"
        ],
        businessOutcomes: [
          "Faster time-to-market with compliance",
          "Improved patient engagement & outcomes",
          "Reduced operational overhead",
          "Scalable, audit-ready architecture",
          "Investor-ready healthcare platform"
        ]
      },
      {
        id: "edtech-startups",
        name: "EdTech Startups",
        description: "Educational technology platforms with personalized learning, assessment automation, and student engagement tools.",
        icon: "📚",
        tagline: "AI-Powered Personalized Learning & Education Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help EdTech startups build AI-native learning platforms that are personalized, engaging, scalable, and data-driven. From adaptive learning systems to AI tutors, we design education SaaS products that transform how people learn. We build learner-first, AI-powered systems that make quality education accessible.",
        whyChoose: {
          intro: "EdTech needs personalization, engagement, scalability, and learning intelligence.",
          points: [
            "AI-first adaptive learning architecture",
            "Personalized content delivery & recommendations",
            "Automated assessment & instant feedback",
            "Engagement analytics & retention optimization",
            "Built for scale across courses & learners"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled EdTech SaaS solutions, including:",
          solutions: [
            "Adaptive learning management systems",
            "AI tutoring & homework help platforms",
            "Online course marketplace platforms",
            "Assessment & grading automation tools",
            "Language learning applications",
            "Corporate e-learning platforms",
            "Student engagement & analytics dashboards"
          ],
          footer: "All solutions are cloud-native, mobile-first, and integration-ready."
        },
        coreCapabilities: [
          "AI-driven personalized learning paths",
          "Natural language Q&A & tutoring",
          "Automated grading & feedback generation",
          "Learning analytics & progress tracking",
          "Content recommendation engines",
          "Gamification & engagement features",
          "Multi-format content delivery",
          "Real-time collaboration tools"
        ],
        idealFor: [
          "EdTech startup founders",
          "Online course creators",
          "Corporate training innovators",
          "Education SaaS product teams"
        ],
        businessOutcomes: [
          "Higher student engagement & completion rates",
          "Reduced instructor workload",
          "Scalable personalized education",
          "Data-driven learning insights",
          "Investor-ready EdTech platform"
        ]
      },
      {
        id: "proptech-startups",
        name: "PropTech Startups",
        description: "Property technology solutions for real estate management, virtual tours, and property valuation.",
        icon: "🏗️",
        tagline: "AI-Powered Property Technology & Real Estate Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help PropTech startups build AI-native property platforms that are intelligent, data-driven, scalable, and user-friendly. From property valuation tools to smart building systems, we design PropTech SaaS products that transform real estate operations. We build property-first, AI-powered systems that modernize the real estate industry.",
        whyChoose: {
          intro: "PropTech requires accuracy, market intelligence, automation, and seamless experiences.",
          points: [
            "AI-first property analysis & valuation",
            "Immersive virtual tour capabilities",
            "Automated tenant & property management",
            "Predictive market analytics & insights",
            "Built for scale across properties & markets"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled PropTech SaaS solutions, including:",
          solutions: [
            "Property valuation & estimation platforms",
            "Virtual tour & 3D visualization tools",
            "Tenant screening & management systems",
            "Real estate marketplace platforms",
            "Smart building & IoT management",
            "Property investment analytics tools",
            "Lease management & automation platforms"
          ],
          footer: "All solutions are cloud-native, scalable, and real estate integration-ready."
        },
        coreCapabilities: [
          "AI-driven property valuation models",
          "Computer vision for property analysis",
          "Automated tenant screening & matching",
          "Market trend prediction & analytics",
          "Virtual tour generation & hosting",
          "Document processing & verification",
          "Lead management & nurturing",
          "Multi-property portfolio management"
        ],
        idealFor: [
          "PropTech startup founders",
          "Real estate tech entrepreneurs",
          "Property management innovators",
          "Real estate SaaS teams"
        ],
        businessOutcomes: [
          "Faster property valuations & decisions",
          "Reduced manual property operations",
          "AI-driven market intelligence",
          "Scalable multi-property platform",
          "Investor-ready PropTech solution"
        ]
      },
      {
        id: "hrtech-recruitment-saas",
        name: "HRTech & Recruitment SaaS",
        description: "Human resources and recruitment automation with AI-powered candidate matching and employee management.",
        icon: "👥",
        tagline: "AI-Powered HR & Talent Acquisition Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help HRTech startups build AI-native human resources platforms that are intelligent, efficient, candidate-centric, and automation-driven. From recruitment automation to employee analytics, we design HR SaaS products that transform talent management. We build people-first, AI-powered systems that modernize HR operations.",
        whyChoose: {
          intro: "HRTech requires speed, accuracy, candidate experience, and workforce intelligence.",
          points: [
            "AI-first candidate screening & matching",
            "Automated recruitment workflows & scheduling",
            "Employee lifecycle management automation",
            "Predictive analytics for retention & performance",
            "Built for scale across hiring & HR operations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled HRTech SaaS solutions, including:",
          solutions: [
            "Applicant tracking systems (ATS)",
            "AI recruitment & matching platforms",
            "Employee onboarding automation tools",
            "Performance management systems",
            "HR analytics & reporting dashboards",
            "Talent marketplace platforms",
            "Employee engagement & feedback tools"
          ],
          footer: "All solutions are cloud-native, scalable, and HR integration-ready."
        },
        coreCapabilities: [
          "AI-driven resume screening & ranking",
          "Intelligent candidate-job matching",
          "Automated interview scheduling",
          "Employee performance analytics",
          "Onboarding workflow automation",
          "Retention prediction & alerts",
          "HR chatbots & self-service portals",
          "Compliance & documentation management"
        ],
        idealFor: [
          "HRTech startup founders",
          "Recruitment tech entrepreneurs",
          "HR software innovators",
          "Talent management SaaS teams"
        ],
        businessOutcomes: [
          "Faster time-to-hire",
          "Improved quality of hire",
          "Reduced HR operational costs",
          "Data-driven workforce decisions",
          "Investor-ready HRTech platform"
        ]
      },
      {
        id: "martech-salestech-saas",
        name: "MarTech & SalesTech SaaS",
        description: "Marketing and sales technology with AI-driven lead generation, campaign optimization, and conversion analytics.",
        icon: "📈",
        tagline: "AI-Powered Marketing & Sales Technology Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help MarTech and SalesTech startups build AI-native marketing and sales platforms that are conversion-focused, data-driven, scalable, and automation-powered. From lead scoring to campaign optimization, we design MarTech SaaS products that accelerate revenue. We build growth-first, AI-powered systems that transform go-to-market operations.",
        whyChoose: {
          intro: "MarTech/SalesTech requires personalization, predictive analytics, automation, and conversion intelligence.",
          points: [
            "AI-first lead scoring & qualification",
            "Campaign optimization & personalization",
            "Sales intelligence & forecasting",
            "Multi-channel automation capabilities",
            "Built for scale across marketing & sales"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled MarTech & SalesTech SaaS solutions, including:",
          solutions: [
            "Lead generation & scoring platforms",
            "Marketing automation systems",
            "CRM & sales enablement tools",
            "Campaign management & analytics",
            "Customer data platforms (CDP)",
            "Conversational marketing tools",
            "Sales forecasting & intelligence dashboards"
          ],
          footer: "All solutions are cloud-native, scalable, and CRM integration-ready."
        },
        coreCapabilities: [
          "AI-driven lead scoring & prioritization",
          "Predictive campaign optimization",
          "Sales pipeline forecasting",
          "Customer journey personalization",
          "Automated content generation",
          "Attribution modeling & analytics",
          "A/B testing automation",
          "Multi-channel engagement automation"
        ],
        idealFor: [
          "MarTech startup founders",
          "Sales technology entrepreneurs",
          "Growth tech innovators",
          "Revenue SaaS product teams"
        ],
        businessOutcomes: [
          "Higher lead conversion rates",
          "Reduced customer acquisition costs",
          "Accurate sales forecasting",
          "Scalable personalized marketing",
          "Investor-ready growth platform"
        ]
      },
      {
        id: "logistics-supply-chain-saas",
        name: "Logistics & Supply Chain SaaS",
        description: "Supply chain management solutions with route optimization, inventory forecasting, and delivery tracking.",
        icon: "🚚",
        tagline: "AI-Powered Logistics & Supply Chain Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help logistics and supply chain startups build AI-native operations platforms that are efficient, predictive, scalable, and visibility-focused. From route optimization to demand forecasting, we design supply chain SaaS products that transform logistics operations. We build efficiency-first, AI-powered systems that optimize every link.",
        whyChoose: {
          intro: "Logistics requires real-time visibility, predictive planning, optimization, and operational efficiency.",
          points: [
            "AI-first route & delivery optimization",
            "Demand forecasting & inventory intelligence",
            "Real-time tracking & visibility",
            "Warehouse & fleet automation",
            "Built for scale across supply networks"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled Logistics & Supply Chain SaaS solutions, including:",
          solutions: [
            "Route optimization & planning platforms",
            "Inventory management & forecasting tools",
            "Fleet management systems",
            "Warehouse management solutions",
            "Last-mile delivery platforms",
            "Supply chain visibility dashboards",
            "Freight & carrier management systems"
          ],
          footer: "All solutions are cloud-native, scalable, and IoT integration-ready."
        },
        coreCapabilities: [
          "AI-driven route optimization",
          "Demand forecasting & prediction",
          "Real-time shipment tracking",
          "Inventory optimization & alerts",
          "Warehouse automation workflows",
          "Carrier selection & management",
          "Exception handling & alerts",
          "Analytics & performance reporting"
        ],
        idealFor: [
          "Logistics tech startup founders",
          "Supply chain entrepreneurs",
          "Fleet management innovators",
          "Operations SaaS product teams"
        ],
        businessOutcomes: [
          "Reduced logistics costs",
          "Improved on-time delivery rates",
          "Optimized inventory levels",
          "End-to-end supply chain visibility",
          "Investor-ready logistics platform"
        ]
      },
      {
        id: "productivity-collaboration-tools",
        name: "Productivity & Collaboration Tools",
        description: "Team productivity and collaboration platforms with AI-powered task management and communication tools.",
        icon: "⚡",
        tagline: "AI-Powered Productivity & Team Collaboration Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help productivity tool startups build AI-native collaboration platforms that are intelligent, efficient, team-centric, and automation-powered. From smart scheduling to meeting AI, we design productivity SaaS products that transform how teams work. We build teamwork-first, AI-powered systems that multiply productivity.",
        whyChoose: {
          intro: "Productivity tools need intelligent automation, seamless collaboration, and time-saving AI.",
          points: [
            "AI-first task automation & prioritization",
            "Smart scheduling & calendar optimization",
            "Meeting intelligence & action tracking",
            "Document collaboration & search",
            "Built for scale across distributed teams"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled Productivity & Collaboration SaaS solutions, including:",
          solutions: [
            "Project & task management platforms",
            "Team communication & messaging tools",
            "Meeting scheduling & AI assistants",
            "Document collaboration platforms",
            "Workflow automation tools",
            "Knowledge management systems",
            "Virtual workspace solutions"
          ],
          footer: "All solutions are cloud-native, mobile-friendly, and integration-ready."
        },
        coreCapabilities: [
          "AI-driven task prioritization & assignment",
          "Smart scheduling & availability matching",
          "Meeting transcription & summaries",
          "Document search & organization",
          "Workflow automation & triggers",
          "Team analytics & insights",
          "Natural language commands",
          "Cross-platform synchronization"
        ],
        idealFor: [
          "Productivity tool founders",
          "Collaboration tech entrepreneurs",
          "Workflow automation innovators",
          "Team software product teams"
        ],
        businessOutcomes: [
          "Significant time savings per user",
          "Reduced meeting overhead",
          "Streamlined team workflows",
          "Improved team coordination",
          "Investor-ready productivity platform"
        ]
      },
      {
        id: "vertical-saas",
        name: "Vertical SaaS (Industry-Specific)",
        description: "Industry-specific software solutions tailored for niche markets with specialized AI capabilities.",
        icon: "🎯",
        tagline: "AI-Powered Industry-Specific SaaS Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help vertical SaaS startups build AI-native industry-specific platforms that are specialized, compliant, workflow-optimized, and domain-expert. From legal tech to construction software, we design niche SaaS products that dominate their verticals. We build industry-first, AI-powered systems that understand your domain.",
        whyChoose: {
          intro: "Vertical SaaS needs deep industry knowledge, specialized workflows, and domain-specific AI.",
          points: [
            "AI trained on industry-specific data",
            "Pre-built compliance & regulatory frameworks",
            "Specialized workflow templates",
            "Deep industry tool integrations",
            "Built for niche market dominance"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled Vertical SaaS solutions, including:",
          solutions: [
            "Legal tech & practice management",
            "Construction project management",
            "Agriculture & farming technology",
            "Hospitality management systems",
            "Non-profit & association software",
            "Automotive dealership solutions",
            "Industry-specific CRM platforms"
          ],
          footer: "All solutions are domain-optimized, compliant, and industry integration-ready."
        },
        coreCapabilities: [
          "Domain-specific AI & NLP models",
          "Industry compliance automation",
          "Specialized workflow templates",
          "Custom entity recognition",
          "Industry data standardization",
          "Vertical-specific reporting",
          "Niche integration connectors",
          "Industry chatbots & assistants"
        ],
        idealFor: [
          "Vertical SaaS founders",
          "Industry-specific tech entrepreneurs",
          "Niche market innovators",
          "Domain-focused product teams"
        ],
        businessOutcomes: [
          "Faster time-to-value for customers",
          "Higher customer retention in niche",
          "Compliance out of the box",
          "Deep industry credibility",
          "Investor-ready vertical platform"
        ]
      },
      {
        id: "ai-tools-automation-startups",
        name: "AI Tools & Automation Startups",
        description: "AI-native startups building automation tools, intelligent agents, and machine learning platforms.",
        icon: "🤖",
        tagline: "AI-Native Development & Automation Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help AI-native startups build cutting-edge automation platforms that are intelligent, scalable, developer-friendly, and production-ready. From AI agents to ML platforms, we design AI-first products that push the boundaries of automation. We build intelligence-first systems that power the next generation of software.",
        whyChoose: {
          intro: "AI startups need infrastructure, scalability, ML expertise, and rapid development.",
          points: [
            "AI-native architecture & infrastructure",
            "LLM fine-tuning & deployment expertise",
            "Scalable ML operations & model serving",
            "AI observability & monitoring",
            "Built for rapid AI product iteration"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-native automation solutions, including:",
          solutions: [
            "AI agent development platforms",
            "Machine learning model training tools",
            "Intelligent automation platforms",
            "AI API & integration services",
            "Data pipeline automation systems",
            "Computer vision applications",
            "Natural language processing tools"
          ],
          footer: "All solutions are cloud-native, GPU-optimized, and enterprise-ready."
        },
        coreCapabilities: [
          "LLM fine-tuning & customization",
          "AI agent orchestration & deployment",
          "ML model training & serving",
          "Computer vision pipelines",
          "NLP & text processing",
          "AI observability & monitoring",
          "AutoML & model optimization",
          "Data pipeline automation"
        ],
        idealFor: [
          "AI-first startup founders",
          "Automation platform builders",
          "ML infrastructure entrepreneurs",
          "AI research commercializers"
        ],
        businessOutcomes: [
          "Faster AI product development",
          "Reduced ML infrastructure complexity",
          "Scalable AI operations",
          "Production-ready AI systems",
          "Investor-ready AI platform"
        ]
      },
    ],
  },
  {
    id: "enterprises",
    name: "Enterprises",
    icon: "🏢",
    image: enterpriseImage,
    imageAlt: "NanoFlows Enterprise AI Solutions",
    subIndustries: [
      {
        id: "banking-financial-services",
        name: "Banking & Financial Services (BFSI)",
        description: "AI solutions for banks, insurance companies, and financial institutions with compliance and security focus.",
        icon: "🏦",
        tagline: "AI-Powered Banking & Financial Services Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help banking and financial enterprises build AI-native platforms that are secure, compliant, customer-centric, and intelligence-driven. From fraud detection systems to regulatory automation, we design enterprise-grade BFSI solutions that manage risk, ensure compliance, and deliver exceptional customer experiences. We build trust-first, AI-powered financial systems for the modern enterprise.",
        whyChoose: {
          intro: "BFSI enterprises need security, compliance, accuracy, and intelligent automation at scale.",
          points: [
            "Enterprise-grade security & compliance architecture",
            "AI-powered fraud detection & risk management",
            "Regulatory compliance automation & reporting",
            "Customer intelligence & personalization engines",
            "Built for scale, audits & enterprise integrations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled BFSI enterprise solutions, including:",
          solutions: [
            "Fraud detection & prevention systems",
            "Risk assessment & credit scoring platforms",
            "Regulatory compliance automation tools",
            "Customer 360 & analytics dashboards",
            "Loan origination & processing systems",
            "Anti-money laundering (AML) solutions",
            "Digital banking transformation platforms"
          ],
          footer: "All solutions are enterprise-grade, compliant, and integration-ready."
        },
        coreCapabilities: [
          "Real-time transaction monitoring & fraud detection",
          "AI-driven credit risk modeling & scoring",
          "Regulatory compliance automation & reporting",
          "Customer behavior analytics & predictions",
          "Document verification & KYC automation",
          "Voice banking & conversational AI",
          "Secure APIs & core banking integrations",
          "Audit trails & compliance dashboards"
        ],
        idealFor: [
          "Commercial & retail banks",
          "Insurance companies & NBFCs",
          "Investment firms & asset managers",
          "Financial regulators & compliance teams"
        ],
        businessOutcomes: [
          "Reduced fraud losses by up to 80%",
          "Automated regulatory compliance reporting",
          "Enhanced customer lifetime value",
          "Streamlined loan processing & approvals",
          "Improved risk assessment accuracy"
        ]
      },
      {
        id: "manufacturing-industrial",
        name: "Manufacturing & Industrial Enterprises",
        description: "Smart manufacturing solutions with predictive maintenance, quality control, and production optimization.",
        icon: "🏭",
        tagline: "AI-Powered Smart Manufacturing & Industry 4.0 Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help manufacturing and industrial enterprises build AI-native smart factory platforms that are predictive, quality-focused, efficient, and data-driven. From predictive maintenance to quality control automation, we design Industry 4.0 solutions that optimize production and reduce downtime. We build efficiency-first, AI-powered manufacturing systems for the modern industrial enterprise.",
        whyChoose: {
          intro: "Manufacturing enterprises need predictive intelligence, quality assurance, and operational efficiency at scale.",
          points: [
            "AI-first predictive maintenance architecture",
            "Computer vision quality control & inspection",
            "Production optimization & scheduling intelligence",
            "IoT integration & sensor data analytics",
            "Built for scale across plants & production lines"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled manufacturing enterprise solutions, including:",
          solutions: [
            "Predictive maintenance platforms",
            "Visual quality inspection systems",
            "Production planning & optimization tools",
            "Supply chain intelligence dashboards",
            "Digital twin simulation platforms",
            "Energy management & optimization systems",
            "Asset performance management solutions"
          ],
          footer: "All solutions are enterprise-grade, IoT-ready, and integration-capable."
        },
        coreCapabilities: [
          "Predictive equipment failure detection",
          "Computer vision defect identification",
          "Production schedule optimization",
          "IoT sensor data aggregation & analytics",
          "Digital twin modeling & simulation",
          "Supply chain demand forecasting",
          "Energy consumption optimization",
          "Real-time OEE dashboards & reporting"
        ],
        idealFor: [
          "Discrete & process manufacturers",
          "Automotive & aerospace companies",
          "Consumer goods & FMCG enterprises",
          "Heavy industrial & equipment manufacturers"
        ],
        businessOutcomes: [
          "Reduced unplanned downtime by 45%",
          "Improved product quality by 35%",
          "Optimized production efficiency & throughput",
          "Lower maintenance & operational costs",
          "Enhanced supply chain resilience"
        ]
      },
      {
        id: "it-services-consulting",
        name: "IT Services & Consulting Firms",
        description: "Technology consulting and IT service companies with AI-powered project management and service delivery.",
        icon: "💻",
        tagline: "AI-Powered IT Services & Consulting Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help IT services and consulting enterprises build AI-native service delivery platforms that are efficient, client-centric, resource-optimized, and insight-driven. From intelligent resource allocation to project outcome prediction, we design solutions that elevate service delivery and client satisfaction. We build delivery-first, AI-powered IT service systems for the modern consulting enterprise.",
        whyChoose: {
          intro: "IT services enterprises need resource optimization, project intelligence, and client success at scale.",
          points: [
            "AI-first resource matching & allocation",
            "Project outcome prediction & risk mitigation",
            "Automated time tracking & billing workflows",
            "Client success monitoring & intelligence",
            "Built for scale across projects & engagements"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled IT services enterprise solutions, including:",
          solutions: [
            "Intelligent resource management platforms",
            "Project portfolio management systems",
            "Automated time & expense tracking tools",
            "Client relationship intelligence dashboards",
            "Knowledge management & search platforms",
            "Service delivery automation systems",
            "Skills gap analysis & training platforms"
          ],
          footer: "All solutions are enterprise-grade, scalable, and PSA-integration-ready."
        },
        coreCapabilities: [
          "AI-driven resource matching & scheduling",
          "Project risk prediction & mitigation",
          "Automated status reporting & dashboards",
          "Client health scoring & early warning",
          "Knowledge discovery & documentation AI",
          "Skills inventory & gap analysis",
          "Utilization optimization & forecasting",
          "Contract & SLA management automation"
        ],
        idealFor: [
          "IT consulting & advisory firms",
          "Systems integrators & implementation partners",
          "Managed service providers (MSPs)",
          "Digital agencies & technology boutiques"
        ],
        businessOutcomes: [
          "Improved project delivery success rates",
          "Optimized resource utilization by 30%",
          "Enhanced client satisfaction scores",
          "Reduced project overruns & scope creep",
          "Scaled service delivery efficiently"
        ]
      },
      {
        id: "telecom-networking",
        name: "Telecom & Networking Enterprises",
        description: "Telecommunications solutions with network optimization, customer service AI, and infrastructure management.",
        icon: "📡",
        tagline: "AI-Powered Telecom & Network Operations Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help telecom and networking enterprises build AI-native operations platforms that are reliable, customer-focused, infrastructure-optimized, and intelligence-driven. From network anomaly detection to customer service automation, we design solutions that ensure uptime and customer satisfaction. We build network-first, AI-powered telecom systems for the modern communications enterprise.",
        whyChoose: {
          intro: "Telecom enterprises need network reliability, customer experience, and infrastructure intelligence at scale.",
          points: [
            "AI-first network monitoring & anomaly detection",
            "Predictive capacity planning & optimization",
            "Customer service automation & personalization",
            "Infrastructure maintenance intelligence",
            "Built for scale across networks & subscribers"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled telecom enterprise solutions, including:",
          solutions: [
            "Network operations centers (NOC) automation",
            "Predictive network maintenance platforms",
            "Customer experience management systems",
            "Capacity planning & optimization tools",
            "Fraud detection & prevention systems",
            "Self-service customer portals",
            "5G & next-gen network management solutions"
          ],
          footer: "All solutions are enterprise-grade, carrier-class, and OSS/BSS integration-ready."
        },
        coreCapabilities: [
          "Real-time network traffic analysis & optimization",
          "Anomaly detection & predictive maintenance",
          "Customer sentiment monitoring & analytics",
          "Automated customer support & resolution",
          "Usage pattern analysis & forecasting",
          "Fraud detection & prevention systems",
          "Self-healing network automation",
          "SLA monitoring & compliance dashboards"
        ],
        idealFor: [
          "Mobile network operators & carriers",
          "Internet service providers (ISPs)",
          "Cable & satellite communications companies",
          "Network equipment & infrastructure vendors"
        ],
        businessOutcomes: [
          "Reduced network downtime by 60%",
          "Automated 70% of customer inquiries",
          "Optimized network capacity planning",
          "Reduced customer churn & improved NPS",
          "Enhanced service quality metrics"
        ]
      },
      {
        id: "energy-utilities",
        name: "Energy & Utilities",
        description: "Energy sector solutions with smart grid management, demand forecasting, and sustainability analytics.",
        icon: "⚡",
        tagline: "AI-Powered Energy & Utilities Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help energy and utilities enterprises build AI-native grid management platforms that are sustainable, efficient, predictive, and resilience-focused. From smart grid optimization to renewable energy integration, we design solutions that power the energy transition. We build sustainability-first, AI-powered energy systems for the modern utility enterprise.",
        whyChoose: {
          intro: "Energy enterprises need grid reliability, demand intelligence, sustainability, and operational efficiency at scale.",
          points: [
            "AI-first smart grid management & optimization",
            "Predictive demand forecasting & response",
            "Renewable energy integration & balancing",
            "Asset health monitoring & maintenance",
            "Built for scale across grids & energy sources"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled energy & utilities enterprise solutions, including:",
          solutions: [
            "Smart grid management platforms",
            "Demand forecasting & response systems",
            "Asset performance management tools",
            "Renewable energy optimization platforms",
            "Carbon footprint tracking dashboards",
            "Outage prediction & management systems",
            "Customer engagement & billing platforms"
          ],
          footer: "All solutions are enterprise-grade, SCADA-compatible, and integration-ready."
        },
        coreCapabilities: [
          "Time-series demand forecasting & prediction",
          "Grid load balancing & optimization",
          "Anomaly detection for grid events & outages",
          "Weather-based energy predictions",
          "IoT sensor analytics & asset monitoring",
          "Renewable energy source integration",
          "Carbon tracking & sustainability reporting",
          "Customer usage analytics & insights"
        ],
        idealFor: [
          "Electric utilities & grid operators",
          "Renewable energy companies & IPPs",
          "Oil & gas enterprises",
          "Water & gas utility providers"
        ],
        businessOutcomes: [
          "Reduced energy waste by 20%",
          "Improved grid stability & reliability",
          "Optimized renewable energy integration",
          "Predicted & prevented outages proactively",
          "Accelerated sustainability target achievement"
        ]
      },
      {
        id: "government-public-sector",
        name: "Government & Public Sector",
        description: "Public sector AI solutions for citizen services, policy analysis, and administrative automation.",
        icon: "🏛️",
        tagline: "AI-Powered Government & Public Sector Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help government and public sector organizations build AI-native citizen service platforms that are accessible, transparent, efficient, and policy-driven. From citizen inquiry automation to policy impact analysis, we design solutions that modernize public services. We build citizen-first, AI-powered government systems for the modern public sector.",
        whyChoose: {
          intro: "Government organizations need citizen accessibility, transparency, efficiency, and policy intelligence at scale.",
          points: [
            "AI-first citizen service automation & accessibility",
            "Policy impact simulation & analysis",
            "Document processing & verification at scale",
            "Privacy-preserving AI & data security",
            "Built for scale across departments & agencies"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled government & public sector solutions, including:",
          solutions: [
            "Citizen service portals & chatbots",
            "Document processing & verification systems",
            "Policy analysis & simulation platforms",
            "Public safety analytics dashboards",
            "Benefits eligibility automation systems",
            "Inter-agency data sharing platforms",
            "Compliance monitoring & reporting tools"
          ],
          footer: "All solutions are secure, accessible, and government-compliance-ready."
        },
        coreCapabilities: [
          "Multi-language citizen support & accessibility",
          "Document understanding & verification AI",
          "Predictive analytics for public services",
          "Accessible chatbot & voice interfaces",
          "Privacy-preserving data processing",
          "Policy simulation & impact modeling",
          "Fraud detection in benefits programs",
          "Cross-agency workflow automation"
        ],
        idealFor: [
          "Federal government agencies",
          "State & local government bodies",
          "Public safety & law enforcement",
          "Healthcare & social service agencies"
        ],
        businessOutcomes: [
          "Reduced citizen wait times by 80%",
          "Automated routine administrative tasks",
          "Improved policy decision-making",
          "Enhanced public safety outcomes",
          "Increased citizen satisfaction & trust"
        ]
      },
      {
        id: "retail-consumer-enterprises",
        name: "Retail & Consumer Enterprises",
        description: "Large retail organizations with omnichannel AI, inventory optimization, and customer experience solutions.",
        icon: "🛍️",
        tagline: "AI-Powered Retail & Consumer Experience Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help retail and consumer enterprises build AI-native omnichannel platforms that are customer-centric, inventory-optimized, experience-focused, and data-driven. From personalized recommendations to dynamic pricing, we design solutions that transform retail operations. We build customer-first, AI-powered retail systems for the modern enterprise.",
        whyChoose: {
          intro: "Retail enterprises need omnichannel excellence, inventory intelligence, and customer personalization at scale.",
          points: [
            "AI-first omnichannel personalization engine",
            "Demand sensing & inventory optimization",
            "Dynamic pricing & promotion intelligence",
            "Customer journey analytics & insights",
            "Built for scale across stores & channels"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled retail enterprise solutions, including:",
          solutions: [
            "Personalization & recommendation engines",
            "Inventory optimization & demand forecasting",
            "Dynamic pricing & markdown optimization",
            "Customer 360 & loyalty platforms",
            "Store operations & workforce management",
            "Visual merchandising & planogram AI",
            "Omnichannel order management systems"
          ],
          footer: "All solutions are enterprise-grade, POS-integrated, and omnichannel-ready."
        },
        coreCapabilities: [
          "Real-time product personalization & recommendations",
          "Demand forecasting & inventory optimization",
          "Price elasticity modeling & dynamic pricing",
          "Customer lifetime value prediction",
          "Computer vision for retail analytics",
          "Store layout & traffic optimization",
          "Unified customer profile management",
          "Cross-channel attribution & analytics"
        ],
        idealFor: [
          "Department store & specialty retail chains",
          "Grocery & supermarket enterprises",
          "Quick-service & casual dining chains",
          "Wholesale & club retailers"
        ],
        businessOutcomes: [
          "Increased same-store sales by 15%",
          "Reduced stockouts by 40%",
          "Improved customer retention rates",
          "Optimized pricing & promotion ROI",
          "Unified online & offline experiences"
        ]
      },
      {
        id: "hospitality-travel-enterprises",
        name: "Hospitality & Travel Enterprises",
        description: "Hospitality and travel companies with booking optimization, guest experience AI, and revenue management.",
        icon: "🏨",
        tagline: "AI-Powered Hospitality & Travel Experience Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help hospitality and travel enterprises build AI-native guest experience platforms that are personalized, revenue-optimized, operationally efficient, and insight-driven. From dynamic pricing to personalized guest journeys, we design solutions that elevate hospitality. We build guest-first, AI-powered hospitality systems for the modern travel enterprise.",
        whyChoose: {
          intro: "Hospitality enterprises need guest personalization, revenue optimization, and operational excellence at scale.",
          points: [
            "AI-first revenue management & dynamic pricing",
            "Personalized guest journey orchestration",
            "Operational efficiency & workforce optimization",
            "Reputation management & sentiment analysis",
            "Built for scale across properties & destinations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled hospitality & travel enterprise solutions, including:",
          solutions: [
            "Revenue management & dynamic pricing systems",
            "Guest experience personalization platforms",
            "Booking optimization & channel management",
            "Housekeeping & operations management",
            "Reputation & review management dashboards",
            "Loyalty program optimization platforms",
            "Concierge AI & guest service automation"
          ],
          footer: "All solutions are enterprise-grade, PMS-integrated, and hospitality-ready."
        },
        coreCapabilities: [
          "Dynamic pricing & revenue optimization",
          "Guest preference learning & personalization",
          "Demand forecasting & capacity management",
          "Sentiment analysis & reputation monitoring",
          "Workforce scheduling & optimization",
          "Conversational AI for guest services",
          "Loyalty program analytics & optimization",
          "Cross-property guest recognition"
        ],
        idealFor: [
          "Hotel chains & resort groups",
          "Airlines & travel companies",
          "Cruise lines & tour operators",
          "Restaurant & entertainment groups"
        ],
        businessOutcomes: [
          "Increased RevPAR by 20%",
          "Improved guest satisfaction scores",
          "Optimized occupancy & booking rates",
          "Reduced operational costs",
          "Enhanced loyalty program engagement"
        ]
      },
      {
        id: "pharma-life-sciences",
        name: "Pharma & Life Sciences",
        description: "Pharmaceutical and life sciences companies with drug discovery AI, clinical trials optimization, and regulatory compliance.",
        icon: "💊",
        tagline: "AI-Powered Pharma & Life Sciences Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help pharmaceutical and life sciences enterprises build AI-native discovery and development platforms that are research-accelerating, compliance-focused, patient-centric, and data-driven. From drug discovery to clinical trials optimization, we design solutions that advance healthcare innovation. We build science-first, AI-powered pharma systems for the modern life sciences enterprise.",
        whyChoose: {
          intro: "Pharma enterprises need research acceleration, regulatory compliance, and clinical intelligence at scale.",
          points: [
            "AI-first drug discovery & target identification",
            "Clinical trial optimization & patient matching",
            "Regulatory compliance & documentation automation",
            "Real-world evidence & pharmacovigilance",
            "Built for scale across R&D pipelines & trials"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled pharma & life sciences enterprise solutions, including:",
          solutions: [
            "Drug discovery & molecular analysis platforms",
            "Clinical trial management & optimization",
            "Regulatory submission automation systems",
            "Pharmacovigilance & safety monitoring",
            "Medical affairs & scientific intelligence",
            "Supply chain & manufacturing optimization",
            "Commercial analytics & market access platforms"
          ],
          footer: "All solutions are GxP-compliant, validated, and enterprise-ready."
        },
        coreCapabilities: [
          "Molecular analysis & target prediction",
          "Clinical trial site selection & optimization",
          "Patient recruitment & matching algorithms",
          "Adverse event detection & monitoring",
          "Regulatory document generation & review",
          "Real-world evidence analysis",
          "Manufacturing quality prediction",
          "Commercial forecasting & analytics"
        ],
        idealFor: [
          "Pharmaceutical companies & biotechs",
          "Medical device manufacturers",
          "Clinical research organizations (CROs)",
          "Life sciences R&D organizations"
        ],
        businessOutcomes: [
          "Accelerated drug discovery timelines",
          "Optimized clinical trial success rates",
          "Streamlined regulatory submissions",
          "Enhanced pharmacovigilance & safety",
          "Improved manufacturing quality & efficiency"
        ]
      },
      {
        id: "media-entertainment",
        name: "Media & Entertainment",
        description: "Media companies with content recommendation, audience analytics, and production automation.",
        icon: "🎬",
        tagline: "AI-Powered Media & Entertainment Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help media and entertainment enterprises build AI-native content platforms that are audience-centric, engagement-optimized, production-efficient, and data-driven. From personalized recommendations to content creation automation, we design solutions that captivate audiences. We build audience-first, AI-powered media systems for the modern entertainment enterprise.",
        whyChoose: {
          intro: "Media enterprises need audience intelligence, content optimization, and production efficiency at scale.",
          points: [
            "AI-first content recommendation & discovery",
            "Audience behavior analytics & segmentation",
            "Content creation & production automation",
            "Rights management & content protection",
            "Built for scale across platforms & audiences"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled media & entertainment enterprise solutions, including:",
          solutions: [
            "Personalized content recommendation engines",
            "Audience analytics & segmentation platforms",
            "Automated content tagging & metadata",
            "Ad tech & monetization optimization",
            "Content moderation & safety systems",
            "Rights management & royalty tracking",
            "Production workflow automation tools"
          ],
          footer: "All solutions are enterprise-grade, CDN-compatible, and streaming-ready."
        },
        coreCapabilities: [
          "Collaborative filtering & content recommendations",
          "Video & audio content analysis",
          "Audience behavior modeling & prediction",
          "Automated content tagging & classification",
          "Ad placement & yield optimization",
          "Content moderation & policy enforcement",
          "Rights tracking & royalty calculation",
          "Production scheduling & resource optimization"
        ],
        idealFor: [
          "Streaming platforms & OTT services",
          "Broadcast networks & media companies",
          "Publishing & digital content enterprises",
          "Gaming & interactive entertainment companies"
        ],
        businessOutcomes: [
          "Increased viewer engagement by 45%",
          "Reduced content production costs",
          "Optimized content acquisition decisions",
          "Improved advertising effectiveness",
          "Scaled personalization across millions of users"
        ]
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    image: ecommerceImage,
    imageAlt: "NanoFlows E-Commerce AI Solutions",
    subIndustries: [
      {
        id: "b2c-online-retail",
        name: "B2C Online Retail",
        description: "Consumer-focused online stores with personalized shopping experiences and conversion optimization.",
        icon: "🛍️",
        tagline: "AI-Powered Consumer Retail Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help B2C online retailers build AI-native e-commerce platforms that are conversion-focused, personalized, scalable, and customer-centric. From intelligent product recommendations to abandoned cart recovery, we design retail solutions that transform browsers into loyal buyers. We build customer-first, AI-powered retail systems that maximize lifetime value.",
        whyChoose: {
          intro: "B2C retail requires personalization, conversion optimization, and seamless shopping experiences.",
          points: [
            "AI-first product recommendation architecture",
            "Real-time personalization across touchpoints",
            "Automated cart recovery & retargeting",
            "Customer segmentation & behavior analytics",
            "Built for scale across catalogs & traffic spikes"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled B2C retail solutions, including:",
          solutions: [
            "Intelligent product recommendation engines",
            "Dynamic homepage & category personalization",
            "Abandoned cart recovery systems",
            "Customer segmentation platforms",
            "AI-powered site search & discovery",
            "Conversion rate optimization tools",
            "Customer journey analytics dashboards"
          ],
          footer: "All solutions are cloud-native, mobile-first, and e-commerce platform integrated."
        },
        coreCapabilities: [
          "Collaborative filtering & content-based recommendations",
          "Behavioral prediction & purchase propensity modeling",
          "Natural language search & autocomplete",
          "Visual similarity & product matching",
          "Customer journey mapping & optimization",
          "A/B testing & experimentation automation",
          "Real-time inventory & pricing sync",
          "Multi-channel engagement & notifications"
        ],
        idealFor: [
          "Online retail store owners",
          "E-commerce brand managers",
          "Digital commerce platforms",
          "Omnichannel retail enterprises"
        ],
        businessOutcomes: [
          "Increase conversion rates by 40%",
          "Boost average order value by 25%",
          "Recover 30% of abandoned carts",
          "Improve customer retention & LTV",
          "Personalized shopping at scale"
        ]
      },
      {
        id: "b2b-ecommerce-platforms",
        name: "B2B E-Commerce Platforms",
        description: "Business-to-business commerce platforms with bulk ordering, pricing tiers, and account management.",
        icon: "🏢",
        tagline: "AI-Powered B2B Commerce Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help B2B e-commerce companies build AI-native platforms that handle complex business relationships, custom pricing, and automated ordering workflows. From purchase order processing to account intelligence, we design B2B solutions that strengthen customer relationships and drive efficiency. We build relationship-first, AI-powered B2B commerce systems.",
        whyChoose: {
          intro: "B2B commerce requires complex pricing, account management, and intelligent order automation.",
          points: [
            "AI-first purchase order processing & automation",
            "Dynamic pricing & customer-specific catalogs",
            "Account health scoring & relationship intelligence",
            "Automated reordering & inventory sync",
            "Built for scale across enterprise accounts & SKUs"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled B2B e-commerce solutions, including:",
          solutions: [
            "Automated purchase order processing systems",
            "Dynamic pricing & quote management platforms",
            "Customer portal & self-service tools",
            "Inventory availability & forecasting systems",
            "Contract & agreement management platforms",
            "Account relationship analytics dashboards",
            "B2B marketplace & catalog solutions"
          ],
          footer: "All solutions are ERP-integrated, scalable, and enterprise-ready."
        },
        coreCapabilities: [
          "Document AI for PO & invoice processing",
          "Dynamic pricing optimization algorithms",
          "Customer demand forecasting & prediction",
          "Account health scoring & churn prediction",
          "Bulk order workflow automation",
          "Credit management & risk assessment",
          "Multi-warehouse inventory visibility",
          "B2B chatbots & query automation"
        ],
        idealFor: [
          "Wholesale distributors",
          "Manufacturing suppliers",
          "Industrial equipment sellers",
          "B2B marketplace operators"
        ],
        businessOutcomes: [
          "Automate 60% of order processing",
          "Increase customer reorder rates",
          "Reduce order errors by 95%",
          "Optimize bulk pricing decisions",
          "Scale account management efficiently"
        ]
      },
      {
        id: "d2c-brands",
        name: "D2C (Direct-to-Consumer) Brands",
        description: "Direct-to-consumer brands with brand storytelling, customer loyalty, and subscription management.",
        icon: "📦",
        tagline: "AI-Powered Direct-to-Consumer Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help D2C brands build AI-native platforms that create lasting customer relationships through personalized experiences, loyalty programs, and community engagement. From subscription optimization to social commerce, we design D2C solutions that maximize customer lifetime value. We build brand-first, AI-powered D2C systems that scale authentically.",
        whyChoose: {
          intro: "D2C brands need customer loyalty, subscription management, and authentic community building.",
          points: [
            "AI-first customer loyalty & retention architecture",
            "Subscription economics optimization",
            "Social commerce & community engagement",
            "Brand sentiment analysis & feedback loops",
            "Built for scale while maintaining brand authenticity"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled D2C brand solutions, including:",
          solutions: [
            "Customer loyalty & rewards platforms",
            "Subscription management & optimization systems",
            "Community engagement & UGC platforms",
            "Influencer partnership analytics tools",
            "Customer feedback & sentiment dashboards",
            "Social commerce integration platforms",
            "Brand storytelling & content automation"
          ],
          footer: "All solutions are mobile-first, social-integrated, and brand-aligned."
        },
        coreCapabilities: [
          "Customer sentiment analysis & NPS tracking",
          "Churn prediction & intervention automation",
          "Social listening & trend detection",
          "Personalized content & offer delivery",
          "Community engagement scoring & automation",
          "Subscription box curation algorithms",
          "Influencer ROI tracking & optimization",
          "Customer referral & advocacy programs"
        ],
        idealFor: [
          "D2C brand founders",
          "Subscription commerce companies",
          "Lifestyle & wellness brands",
          "Beauty & personal care brands"
        ],
        businessOutcomes: [
          "Increase customer lifetime value by 35%",
          "Reduce subscription churn by 40%",
          "Optimize customer acquisition costs",
          "Build engaged brand communities",
          "Scale personalized experiences authentically"
        ]
      },
      {
        id: "multi-vendor-marketplaces",
        name: "Multi-Vendor Marketplaces",
        description: "Marketplace platforms with seller management, product curation, and marketplace analytics.",
        icon: "🏪",
        tagline: "AI-Powered Marketplace Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help marketplace operators build AI-native platforms that balance seller success with buyer satisfaction. From intelligent product curation to fraud detection, we design marketplace solutions that create trusted, thriving commerce ecosystems. We build ecosystem-first, AI-powered marketplace systems that scale sustainably.",
        whyChoose: {
          intro: "Marketplaces need seller management, product quality control, and ecosystem balance.",
          points: [
            "AI-first product curation & discovery",
            "Seller performance scoring & management",
            "Fraud detection & trust enforcement",
            "Supply-demand balancing algorithms",
            "Built for scale across sellers, products & transactions"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled marketplace solutions, including:",
          solutions: [
            "Intelligent product categorization systems",
            "Seller onboarding & verification platforms",
            "Fraud detection & prevention tools",
            "Search ranking & discovery optimization",
            "Commission & pricing management systems",
            "Seller analytics & performance dashboards",
            "Marketplace dispute resolution tools"
          ],
          footer: "All solutions are scalable, secure, and multi-tenant ready."
        },
        coreCapabilities: [
          "Computer vision for product image validation",
          "Natural language for listing quality analysis",
          "Fraud detection & anomaly algorithms",
          "Search ranking & matching optimization",
          "Seller behavior analysis & scoring",
          "Dynamic commission optimization",
          "Review authenticity verification",
          "Category & attribute standardization"
        ],
        idealFor: [
          "General marketplace operators",
          "Vertical niche marketplaces",
          "Service marketplace platforms",
          "B2B marketplace founders"
        ],
        businessOutcomes: [
          "Improve product discovery by 50%",
          "Reduce fraudulent listings by 90%",
          "Optimize seller performance & quality",
          "Balance supply and demand effectively",
          "Scale marketplace operations sustainably"
        ]
      },
      {
        id: "grocery-quick-commerce",
        name: "Grocery & Quick Commerce",
        description: "Fast delivery grocery and convenience platforms with inventory management and delivery optimization.",
        icon: "🥬",
        tagline: "AI-Powered Quick Commerce Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help grocery and quick commerce platforms build AI-native systems that deliver freshness and speed. From perishable inventory prediction to last-mile optimization, we design quick commerce solutions that minimize waste and maximize delivery efficiency. We build speed-first, AI-powered grocery systems that delight customers.",
        whyChoose: {
          intro: "Quick commerce requires speed, freshness, and hyper-local inventory intelligence.",
          points: [
            "AI-first perishable demand forecasting",
            "Real-time delivery route optimization",
            "Dark store inventory & operations intelligence",
            "Picker efficiency & path optimization",
            "Built for scale across hyperlocal fulfillment"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled grocery & quick commerce solutions, including:",
          solutions: [
            "Perishable inventory forecasting systems",
            "Real-time rider route optimization tools",
            "Dark store management platforms",
            "Substitute product recommendation engines",
            "Dynamic delivery slot & pricing systems",
            "Picker path optimization tools",
            "Freshness tracking & waste reduction dashboards"
          ],
          footer: "All solutions are real-time, hyperlocal-ready, and operations-optimized."
        },
        coreCapabilities: [
          "Short-term demand forecasting for perishables",
          "Real-time route optimization & rider dispatch",
          "Freshness tracking & shelf-life prediction",
          "Picker path & warehouse optimization",
          "Customer preference learning & substitutions",
          "Dynamic delivery pricing algorithms",
          "Inventory replenishment automation",
          "Order batching & slot management"
        ],
        idealFor: [
          "Grocery delivery platforms",
          "Quick commerce startups",
          "Dark store operators",
          "Meal kit & fresh food companies"
        ],
        businessOutcomes: [
          "Reduce food waste by 35%",
          "Achieve sub-15-minute delivery times",
          "Optimize dark store inventory levels",
          "Improve picker efficiency by 40%",
          "Predict demand with 90%+ accuracy"
        ]
      },
      {
        id: "fashion-lifestyle-ecommerce",
        name: "Fashion & Lifestyle E-Commerce",
        description: "Fashion and lifestyle stores with visual search, size recommendations, and trend analysis.",
        icon: "👗",
        tagline: "AI-Powered Fashion Commerce Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help fashion and lifestyle e-commerce platforms build AI-native systems that understand style, fit, and trends. From visual search to size recommendations, we design fashion solutions that reduce returns and increase discovery. We build style-first, AI-powered fashion systems that inspire confident purchases.",
        whyChoose: {
          intro: "Fashion e-commerce needs visual intelligence, sizing accuracy, and trend prediction.",
          points: [
            "AI-first visual search & style matching",
            "Size recommendation & fit prediction",
            "Trend detection & demand forecasting",
            "Outfit completion & styling suggestions",
            "Built for scale across catalogs & seasons"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled fashion e-commerce solutions, including:",
          solutions: [
            "Visual similarity search engines",
            "AI-powered size recommendation systems",
            "Trend forecasting & buying tools",
            "Outfit completion & styling platforms",
            "Virtual try-on & visualization tools",
            "Fashion catalog enrichment systems",
            "Return prediction & prevention dashboards"
          ],
          footer: "All solutions are visual-first, mobile-optimized, and fashion-specialized."
        },
        coreCapabilities: [
          "Computer vision for fashion image analysis",
          "Body measurement & fit prediction AI",
          "Trend detection & forecasting algorithms",
          "Style preference learning & personalization",
          "Color & pattern matching intelligence",
          "Outfit recommendation & completion",
          "Return reason analysis & prevention",
          "Seasonal demand prediction"
        ],
        idealFor: [
          "Fashion retail platforms",
          "Luxury & designer brands",
          "Athletic & activewear companies",
          "Accessories & lifestyle retailers"
        ],
        businessOutcomes: [
          "Reduce returns by 40%",
          "Increase product discovery & engagement",
          "Predict trend-driven demand accurately",
          "Improve size confidence & conversion",
          "Personalize style recommendations at scale"
        ]
      },
      {
        id: "electronics-digital-goods",
        name: "Electronics & Digital Goods Stores",
        description: "Electronics and digital product stores with tech specifications matching and comparison tools.",
        icon: "📱",
        tagline: "AI-Powered Electronics Commerce Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help electronics and digital goods retailers build AI-native platforms that simplify complex purchase decisions. From specification matching to compatibility checking, we design electronics solutions that build purchase confidence and reduce returns. We build tech-first, AI-powered electronics systems that guide informed decisions.",
        whyChoose: {
          intro: "Electronics commerce needs specification intelligence, compatibility checking, and technical support.",
          points: [
            "AI-first product specification understanding",
            "Compatibility & system requirements analysis",
            "Technical support automation & chatbots",
            "Product comparison & recommendation engines",
            "Built for scale across complex product catalogs"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled electronics commerce solutions, including:",
          solutions: [
            "Specification-based product matching systems",
            "Intelligent product comparison engines",
            "AI technical support chatbots",
            "Compatibility checking & validation tools",
            "Warranty claim automation platforms",
            "Product knowledge graph systems",
            "Usage-based recommendation engines"
          ],
          footer: "All solutions are technically accurate, API-integrated, and support-ready."
        },
        coreCapabilities: [
          "Technical specification parsing & understanding",
          "Compatibility analysis & validation AI",
          "Natural language technical support",
          "Product knowledge graph construction",
          "Usage-based product recommendations",
          "Warranty & service automation",
          "Price tracking & competitive intelligence",
          "Technical documentation AI assistants"
        ],
        idealFor: [
          "Consumer electronics retailers",
          "Computer & component stores",
          "Mobile device platforms",
          "Software & digital goods marketplaces"
        ],
        businessOutcomes: [
          "Increase purchase confidence & conversion",
          "Reduce product returns by 30%",
          "Automate 70% of tech support inquiries",
          "Simplify complex product comparisons",
          "Improve post-purchase satisfaction"
        ]
      },
      {
        id: "subscription-commerce",
        name: "Subscription-Based Commerce",
        description: "Subscription box and recurring commerce with churn prediction and personalized curation.",
        icon: "📬",
        tagline: "AI-Powered Subscription Commerce Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help subscription commerce platforms build AI-native systems that predict churn, personalize curation, and optimize recurring revenue. From subscriber analytics to renewal optimization, we design subscription solutions that maximize lifetime value. We build retention-first, AI-powered subscription systems that keep customers engaged.",
        whyChoose: {
          intro: "Subscription commerce needs churn prediction, personalization, and billing optimization.",
          points: [
            "AI-first churn prediction & intervention",
            "Personalized product curation algorithms",
            "Subscription pricing & plan optimization",
            "Renewal timing & engagement automation",
            "Built for scale across subscriber bases"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled subscription commerce solutions, including:",
          solutions: [
            "Churn prediction & prevention platforms",
            "Personalized curation & box algorithms",
            "Subscription analytics dashboards",
            "Plan & pricing optimization tools",
            "Renewal & billing automation systems",
            "Subscriber feedback integration platforms",
            "Win-back campaign automation tools"
          ],
          footer: "All solutions are retention-focused, billing-integrated, and analytics-driven."
        },
        coreCapabilities: [
          "Churn prediction & risk scoring models",
          "Preference learning & curation algorithms",
          "Price sensitivity & elasticity analysis",
          "Engagement scoring & health monitoring",
          "Automated win-back & retention campaigns",
          "Subscriber segmentation & cohort analysis",
          "Renewal timing optimization",
          "Feedback sentiment analysis & action"
        ],
        idealFor: [
          "Subscription box companies",
          "Replenishment subscription services",
          "Digital subscription platforms",
          "Membership program operators"
        ],
        businessOutcomes: [
          "Reduce churn by 35%",
          "Increase subscriber lifetime value",
          "Personalize every delivery experience",
          "Optimize pricing & plan structures",
          "Improve overall subscriber satisfaction"
        ]
      },
      {
        id: "social-commerce",
        name: "Social Commerce",
        description: "Social media-driven commerce with influencer analytics, live shopping, and social selling tools.",
        icon: "📲",
        tagline: "AI-Powered Social Commerce Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help social commerce platforms build AI-native systems that turn social engagement into sales. From influencer analytics to live shopping AI, we design social solutions that optimize creator partnerships and power shoppable experiences. We build engagement-first, AI-powered social commerce systems that convert followers to customers.",
        whyChoose: {
          intro: "Social commerce needs influencer intelligence, live shopping capabilities, and social attribution.",
          points: [
            "AI-first influencer matching & performance prediction",
            "Live shopping & real-time product tagging",
            "Social attribution & ROI tracking",
            "User-generated content management & leverage",
            "Built for scale across platforms & creators"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled social commerce solutions, including:",
          solutions: [
            "Influencer discovery & matching platforms",
            "Live shopping & streaming commerce tools",
            "Social proof & UGC management systems",
            "Shoppable content creation platforms",
            "Social listening & trend detection tools",
            "Creator commerce & affiliate platforms",
            "Social attribution analytics dashboards"
          ],
          footer: "All solutions are platform-integrated, real-time, and creator-friendly."
        },
        coreCapabilities: [
          "Influencer matching & performance prediction",
          "Real-time video analytics & product detection",
          "Sentiment analysis for social engagement",
          "Visual content recognition & tagging",
          "Social graph analytics & reach prediction",
          "UGC curation & moderation automation",
          "Live stream product overlay & checkout",
          "Cross-platform attribution modeling"
        ],
        idealFor: [
          "Social commerce platforms",
          "Live shopping applications",
          "Influencer marketplace operators",
          "Social-first D2C brands"
        ],
        businessOutcomes: [
          "Increase social conversion rates by 50%",
          "Optimize influencer partnership ROI",
          "Scale live shopping events efficiently",
          "Leverage user-generated content at scale",
          "Track accurate social attribution"
        ]
      },
      {
        id: "cross-border-ecommerce",
        name: "Cross-Border E-Commerce",
        description: "International commerce platforms with multi-currency, localization, and cross-border logistics.",
        icon: "🌍",
        tagline: "AI-Powered Global Commerce Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help cross-border e-commerce platforms build AI-native systems that handle international complexity seamlessly. From currency optimization to automated compliance, we design global solutions that expand market reach and reduce friction. We build global-first, AI-powered cross-border systems that scale internationally.",
        whyChoose: {
          intro: "Cross-border commerce needs localization, compliance automation, and logistics intelligence.",
          points: [
            "AI-first content localization & translation",
            "Dynamic currency conversion & optimization",
            "Automated duty, tax & compliance handling",
            "Cross-border shipping cost prediction",
            "Built for scale across markets & regulations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled cross-border commerce solutions, including:",
          solutions: [
            "Neural machine translation platforms",
            "Dynamic currency optimization systems",
            "Duty & tax calculation engines",
            "Cross-border shipping optimization tools",
            "Market entry prioritization platforms",
            "Compliance automation systems",
            "International payment optimization tools"
          ],
          footer: "All solutions are multi-market, compliance-ready, and globally scalable."
        },
        coreCapabilities: [
          "Neural machine translation for commerce",
          "Currency optimization & conversion algorithms",
          "Compliance rule engines & automation",
          "Shipping cost prediction & optimization",
          "Market demand analysis & prioritization",
          "Local payment method optimization",
          "Cross-border returns management",
          "International fraud detection"
        ],
        idealFor: [
          "Global e-commerce brands",
          "Cross-border marketplace operators",
          "Export-focused retailers",
          "International logistics providers"
        ],
        businessOutcomes: [
          "Enter new markets 50% faster",
          "Reduce cross-border friction & cart abandonment",
          "Optimize currency conversion & margins",
          "Automate compliance across jurisdictions",
          "Localize experiences at global scale"
        ]
      },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "🏠",
    image: realEstateImage,
    imageAlt: "NanoFlows Real Estate AI Solutions",
    subIndustries: [
      {
        id: "residential-real-estate",
        name: "Residential Real Estate",
        description: "Home buying and selling with property matching, virtual tours, and buyer qualification.",
        icon: "🏡",
        features: ["Property Matching AI", "Virtual Tours", "Buyer Qualification", "Market Analysis"],
        detailedDescription: "Transform residential real estate with AI that matches buyers to their perfect homes. Our solutions qualify leads instantly, create engaging virtual experiences, and provide market intelligence that closes deals faster.",
        benefits: [
          "Qualify leads in seconds, not hours",
          "Match buyers with 95% accuracy",
          "Reduce time to close by 30%",
          "Provide 24/7 property information",
          "Predict market trends accurately"
        ],
        useCases: [
          "Intelligent buyer-property matching",
          "AI-powered virtual property tours",
          "Lead scoring and qualification",
          "Comparative market analysis",
          "Automated follow-up sequences"
        ],
        aiCapabilities: [
          "Natural language for property queries",
          "Computer vision for property images",
          "Predictive pricing models",
          "Chatbots for buyer inquiries",
          "Preference learning algorithms"
        ],
        targetAudience: [
          "Real estate agents",
          "Home builders",
          "Real estate brokerages",
          "Property listing platforms",
          "Home buying startups"
        ]
      },
      {
        id: "commercial-real-estate",
        name: "Commercial Real Estate",
        description: "Commercial property solutions with lease management, tenant matching, and investment analytics.",
        icon: "🏢",
        features: ["Lease Management AI", "Tenant Matching", "Investment Analytics", "Space Optimization"],
        detailedDescription: "Optimize commercial real estate operations with AI built for complex transactions. Our solutions automate lease management, match tenants to spaces, and provide investment analytics for smarter decisions.",
        benefits: [
          "Reduce lease administration costs",
          "Find qualified tenants faster",
          "Optimize portfolio performance",
          "Predict vacancy and renewals",
          "Make data-driven investments"
        ],
        useCases: [
          "Automated lease abstraction and management",
          "Tenant credit and fit analysis",
          "Investment opportunity scoring",
          "Space utilization optimization",
          "Market rent benchmarking"
        ],
        aiCapabilities: [
          "Document AI for lease analysis",
          "Financial modeling algorithms",
          "Tenant behavior prediction",
          "Market analytics AI",
          "Portfolio optimization"
        ],
        targetAudience: [
          "Commercial brokers",
          "Office building owners",
          "Retail landlords",
          "Industrial property owners",
          "Commercial REITs"
        ]
      },
      {
        id: "real-estate-developers",
        name: "Real Estate Developers & Builders",
        description: "Development projects with project management, sales automation, and construction tracking.",
        icon: "🏗️",
        features: ["Project Management AI", "Sales Automation", "Construction Tracking", "Inventory Management"],
        detailedDescription: "Build smarter with AI that manages development complexity. Our solutions track construction progress, automate sales for new developments, and optimize inventory allocation across projects.",
        benefits: [
          "Track construction in real-time",
          "Automate new home sales",
          "Optimize unit release strategy",
          "Reduce project delays",
          "Improve buyer communication"
        ],
        useCases: [
          "Construction progress monitoring",
          "Automated buyer communication",
          "Unit inventory optimization",
          "Sales pipeline management",
          "Warranty claim tracking"
        ],
        aiCapabilities: [
          "Computer vision for site monitoring",
          "Predictive project analytics",
          "CRM automation",
          "Document management AI",
          "Customer journey automation"
        ],
        targetAudience: [
          "Home builders",
          "Condo developers",
          "Mixed-use developers",
          "Land developers",
          "Construction companies"
        ]
      },
      {
        id: "property-brokers-agencies",
        name: "Property Brokers & Agencies",
        description: "Brokerage solutions with lead management, commission tracking, and agent performance analytics.",
        icon: "🔑",
        features: ["Lead Management AI", "Commission Tracking", "Agent Analytics", "Client Matching"],
        detailedDescription: "Scale your brokerage with AI that maximizes agent productivity. Our solutions manage leads intelligently, track commissions accurately, and provide analytics that help agents perform at their best.",
        benefits: [
          "Increase lead conversion by 40%",
          "Automate commission calculations",
          "Improve agent productivity",
          "Track performance in real-time",
          "Optimize lead distribution"
        ],
        useCases: [
          "Intelligent lead routing and scoring",
          "Automated commission tracking",
          "Agent performance dashboards",
          "Client-agent matching",
          "Transaction coordination"
        ],
        aiCapabilities: [
          "Lead scoring algorithms",
          "Automated transaction tracking",
          "Performance prediction models",
          "CRM integration AI",
          "Market intelligence"
        ],
        targetAudience: [
          "Real estate brokerages",
          "Franchise networks",
          "Boutique agencies",
          "Team leaders",
          "Brokerage technology providers"
        ]
      },
      {
        id: "co-living-co-working",
        name: "Co-Living & Co-Working Spaces",
        description: "Shared space management with booking systems, community engagement, and occupancy optimization.",
        icon: "🏘️",
        features: ["Space Booking AI", "Community Engagement", "Occupancy Optimization", "Amenity Management"],
        detailedDescription: "Create thriving shared spaces with AI that builds community and maximizes occupancy. Our solutions manage bookings, engage members, and optimize space utilization for flexible living and working.",
        benefits: [
          "Maximize space utilization",
          "Build engaged communities",
          "Automate member services",
          "Optimize pricing dynamically",
          "Reduce administrative overhead"
        ],
        useCases: [
          "Smart room and desk booking",
          "Community event recommendations",
          "Dynamic occupancy pricing",
          "Amenity usage optimization",
          "Member matching and networking"
        ],
        aiCapabilities: [
          "Demand forecasting for spaces",
          "Community graph analytics",
          "Dynamic pricing algorithms",
          "Chatbots for member services",
          "Usage pattern analysis"
        ],
        targetAudience: [
          "Co-working operators",
          "Co-living providers",
          "Flexible office platforms",
          "Student housing operators",
          "Community-focused developments"
        ]
      },
      {
        id: "property-management-firms",
        name: "Property Management Firms",
        description: "Property management with maintenance scheduling, tenant communication, and financial tracking.",
        icon: "🔧",
        features: ["Maintenance AI", "Tenant Communication", "Financial Tracking", "Vendor Management"],
        detailedDescription: "Manage properties efficiently with AI that handles the details. Our solutions automate maintenance scheduling, streamline tenant communication, and provide financial visibility across your portfolio.",
        benefits: [
          "Reduce maintenance response times",
          "Automate rent collection",
          "Improve tenant satisfaction",
          "Track financials in real-time",
          "Scale management operations"
        ],
        useCases: [
          "Predictive maintenance scheduling",
          "Automated tenant communication",
          "Rent payment reminders and processing",
          "Vendor coordination and tracking",
          "Financial reporting automation"
        ],
        aiCapabilities: [
          "Maintenance prediction models",
          "Natural language tenant support",
          "Financial analytics AI",
          "Vendor matching algorithms",
          "Document processing"
        ],
        targetAudience: [
          "Residential property managers",
          "Commercial property managers",
          "HOA management companies",
          "Student housing managers",
          "Vacation rental managers"
        ]
      },
      {
        id: "rental-leasing-platforms",
        name: "Rental & Leasing Platforms",
        description: "Rental platforms with tenant screening, lease automation, and rent collection.",
        icon: "📝",
        features: ["Tenant Screening AI", "Lease Automation", "Rent Collection", "Property Marketing"],
        detailedDescription: "Power rental platforms with AI that streamlines the entire leasing journey. Our solutions screen tenants intelligently, automate lease creation, and ensure reliable rent collection.",
        benefits: [
          "Screen tenants in minutes",
          "Automate lease generation",
          "Reduce late payments by 50%",
          "Market properties effectively",
          "Improve landlord experience"
        ],
        useCases: [
          "AI-powered tenant screening",
          "Automated lease document creation",
          "Smart rent payment reminders",
          "Listing optimization for rentals",
          "Move-in/move-out coordination"
        ],
        aiCapabilities: [
          "Credit and background analysis AI",
          "Document generation automation",
          "Payment prediction models",
          "Listing quality scoring",
          "Chatbots for inquiries"
        ],
        targetAudience: [
          "Rental listing platforms",
          "Property management software",
          "Tenant screening services",
          "Lease management platforms",
          "Rent payment platforms"
        ]
      },
      {
        id: "land-plot-management",
        name: "Land & Plot Management",
        description: "Land and plot sales with mapping, valuation, and documentation management.",
        icon: "🗺️",
        features: ["Land Valuation AI", "Mapping Tools", "Documentation Management", "Title Verification"],
        detailedDescription: "Simplify land transactions with AI that values, maps, and verifies. Our solutions provide accurate land valuations, manage complex documentation, and streamline title verification processes.",
        benefits: [
          "Value land accurately and quickly",
          "Visualize parcels effectively",
          "Automate documentation",
          "Verify titles efficiently",
          "Reduce transaction risks"
        ],
        useCases: [
          "Automated land valuation models",
          "GIS-integrated parcel mapping",
          "Title search automation",
          "Document management and tracking",
          "Zoning compliance checking"
        ],
        aiCapabilities: [
          "Satellite imagery analysis",
          "Comparable sales algorithms",
          "Document OCR and extraction",
          "Geographic information AI",
          "Risk assessment models"
        ],
        targetAudience: [
          "Land brokers and agents",
          "Land development companies",
          "Agricultural land platforms",
          "Title companies",
          "Land investment firms"
        ]
      },
      {
        id: "real-estate-investment",
        name: "Real Estate Investment Firms",
        description: "Investment management with portfolio analytics, market forecasting, and deal sourcing.",
        icon: "💰",
        features: ["Portfolio Analytics", "Market Forecasting AI", "Deal Sourcing", "Risk Assessment"],
        detailedDescription: "Make smarter real estate investments with AI that analyzes markets and opportunities. Our solutions provide portfolio analytics, forecast market trends, and source deals that match your investment criteria.",
        benefits: [
          "Identify opportunities faster",
          "Optimize portfolio allocation",
          "Predict market movements",
          "Assess risks accurately",
          "Improve investment returns"
        ],
        useCases: [
          "Deal flow management and scoring",
          "Portfolio performance analytics",
          "Market trend forecasting",
          "Risk-adjusted return modeling",
          "Comparable transaction analysis"
        ],
        aiCapabilities: [
          "Predictive market models",
          "Deal matching algorithms",
          "Financial modeling AI",
          "Alternative data analytics",
          "Portfolio optimization"
        ],
        targetAudience: [
          "Private equity real estate",
          "REITs",
          "Family offices",
          "Institutional investors",
          "Crowdfunding platforms"
        ]
      },
      {
        id: "hospitality-vacation-rentals",
        name: "Hospitality & Vacation Rentals",
        description: "Short-term rental management with dynamic pricing, guest communication, and booking optimization.",
        icon: "🏖️",
        features: ["Dynamic Pricing AI", "Guest Communication", "Booking Optimization", "Review Management"],
        detailedDescription: "Maximize vacation rental revenue with AI that optimizes every booking. Our hospitality solutions price dynamically, automate guest communication, and manage reviews to boost your property ratings.",
        benefits: [
          "Increase revenue per property by 25%",
          "Automate guest communications",
          "Optimize booking calendar",
          "Improve guest satisfaction",
          "Manage reviews proactively"
        ],
        useCases: [
          "AI-powered dynamic pricing",
          "Automated guest messaging",
          "Multi-channel booking management",
          "Review response automation",
          "Cleaning and turnover coordination"
        ],
        aiCapabilities: [
          "Demand-based pricing algorithms",
          "Natural language guest support",
          "Calendar optimization AI",
          "Sentiment analysis for reviews",
          "Operations automation"
        ],
        targetAudience: [
          "Vacation rental managers",
          "Short-term rental hosts",
          "Boutique hotels",
          "Property management companies",
          "Vacation rental platforms"
        ]
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    image: healthcareImage,
    imageAlt: "NanoFlows Healthcare AI Solutions",
    subIndustries: [
      {
        id: "hospitals-multispecialty-clinics",
        name: "Hospitals & Multi-Specialty Clinics",
        description: "Hospital management with patient flow optimization, clinical decision support, and operational efficiency.",
        icon: "🏨",
        features: ["Patient Flow AI", "Clinical Decision Support", "Bed Management", "Staff Scheduling"],
        detailedDescription: "Transform hospital operations with AI that improves patient outcomes and efficiency. Our healthcare solutions optimize patient flow, support clinical decisions, and streamline operations while maintaining HIPAA compliance.",
        benefits: [
          "Reduce patient wait times by 40%",
          "Improve bed utilization by 25%",
          "Support clinical decision-making",
          "Optimize staff scheduling",
          "Reduce operational costs"
        ],
        useCases: [
          "Emergency department flow optimization",
          "Clinical decision support alerts",
          "Predictive bed management",
          "Staff scheduling optimization",
          "Supply chain management"
        ],
        aiCapabilities: [
          "Patient flow prediction models",
          "Clinical NLP for records",
          "Resource optimization algorithms",
          "Real-time alerting systems",
          "Demand forecasting AI"
        ],
        targetAudience: [
          "Hospital systems",
          "Multi-specialty clinics",
          "Ambulatory surgery centers",
          "Urgent care centers",
          "Academic medical centers"
        ]
      },
      {
        id: "diagnostic-labs-imaging",
        name: "Diagnostic Labs & Imaging Centers",
        description: "Diagnostic centers with AI-powered image analysis, report generation, and workflow automation.",
        icon: "🔬",
        features: ["Image Analysis AI", "Report Automation", "Lab Workflow", "Results Communication"],
        detailedDescription: "Enhance diagnostic accuracy and speed with AI-powered analysis. Our solutions analyze medical images, automate report generation, and streamline lab workflows for faster, more accurate diagnoses.",
        benefits: [
          "Improve diagnostic accuracy",
          "Reduce report turnaround time",
          "Automate routine analyses",
          "Ensure quality consistency",
          "Scale diagnostic capacity"
        ],
        useCases: [
          "AI-assisted radiology reading",
          "Automated lab result interpretation",
          "Report generation and distribution",
          "Quality control monitoring",
          "Patient result notification"
        ],
        aiCapabilities: [
          "Medical imaging AI",
          "Lab value analysis",
          "Natural language report generation",
          "Anomaly detection algorithms",
          "Workflow automation"
        ],
        targetAudience: [
          "Radiology practices",
          "Clinical laboratories",
          "Pathology labs",
          "Imaging centers",
          "Reference laboratories"
        ]
      },
      {
        id: "telemedicine-virtual-care",
        name: "Telemedicine & Virtual Care",
        description: "Virtual healthcare platforms with video consultations, symptom checking, and remote monitoring.",
        icon: "📱",
        features: ["Video Consultation AI", "Symptom Checker", "Remote Monitoring", "Virtual Triage"],
        detailedDescription: "Scale virtual care with AI that enhances remote healthcare delivery. Our telemedicine solutions power symptom assessment, triage patients intelligently, and enable effective remote monitoring.",
        benefits: [
          "Scale virtual consultations",
          "Triage patients accurately",
          "Enable remote monitoring",
          "Reduce unnecessary visits",
          "Improve access to care"
        ],
        useCases: [
          "AI symptom assessment and triage",
          "Virtual consultation enhancement",
          "Remote patient monitoring alerts",
          "Post-visit follow-up automation",
          "Chronic condition management"
        ],
        aiCapabilities: [
          "Symptom analysis algorithms",
          "Video consultation AI features",
          "Vital sign monitoring AI",
          "Natural language for intake",
          "Care gap identification"
        ],
        targetAudience: [
          "Telemedicine platforms",
          "Virtual care providers",
          "Remote monitoring companies",
          "Digital health startups",
          "Health systems with virtual care"
        ]
      },
      {
        id: "pharmacies-medical-stores",
        name: "Pharmacies & Medical Stores",
        description: "Pharmacy management with inventory prediction, prescription processing, and medication reminders.",
        icon: "💊",
        features: ["Inventory Prediction", "Prescription Processing AI", "Medication Reminders", "Drug Interaction Checks"],
        detailedDescription: "Optimize pharmacy operations with AI that ensures medication safety and efficiency. Our solutions predict inventory needs, process prescriptions accurately, and improve medication adherence.",
        benefits: [
          "Reduce medication errors",
          "Optimize inventory levels",
          "Improve patient adherence",
          "Speed up prescription processing",
          "Enhance customer service"
        ],
        useCases: [
          "Inventory demand forecasting",
          "Prescription verification and processing",
          "Drug interaction screening",
          "Medication reminder automation",
          "Patient counseling support"
        ],
        aiCapabilities: [
          "Demand forecasting models",
          "Drug database AI",
          "Natural language prescription processing",
          "Patient communication automation",
          "Clinical decision support"
        ],
        targetAudience: [
          "Retail pharmacies",
          "Hospital pharmacies",
          "Specialty pharmacies",
          "Mail-order pharmacies",
          "Pharmacy benefit managers"
        ]
      },
      {
        id: "health-insurance-providers",
        name: "Health Insurance Providers",
        description: "Insurance solutions with claims processing, fraud detection, and policy management.",
        icon: "🛡️",
        features: ["Claims Processing AI", "Fraud Detection", "Policy Management", "Member Engagement"],
        detailedDescription: "Transform health insurance operations with AI that processes claims faster and detects fraud accurately. Our solutions automate claims, engage members, and optimize policy management.",
        benefits: [
          "Reduce claims processing time by 60%",
          "Detect fraud before payment",
          "Improve member satisfaction",
          "Automate policy administration",
          "Lower operational costs"
        ],
        useCases: [
          "Automated claims adjudication",
          "Fraud and abuse detection",
          "Member service automation",
          "Prior authorization processing",
          "Benefits explanation AI"
        ],
        aiCapabilities: [
          "Claims analysis algorithms",
          "Fraud pattern detection",
          "Natural language for member queries",
          "Policy matching AI",
          "Risk stratification models"
        ],
        targetAudience: [
          "Health insurers",
          "Third-party administrators",
          "Self-insured employers",
          "Medicare Advantage plans",
          "Medicaid managed care"
        ]
      },
      {
        id: "medical-device-companies",
        name: "Medical Device Companies",
        description: "Medical device manufacturers with quality control, regulatory compliance, and customer support.",
        icon: "🩺",
        features: ["Quality Control AI", "Regulatory Compliance", "Device Analytics", "Customer Support"],
        detailedDescription: "Accelerate medical device innovation with AI that ensures quality and compliance. Our solutions monitor device performance, automate regulatory processes, and provide intelligent customer support.",
        benefits: [
          "Improve product quality",
          "Accelerate regulatory submissions",
          "Monitor device performance",
          "Enhance customer support",
          "Reduce compliance risk"
        ],
        useCases: [
          "Manufacturing quality inspection",
          "Regulatory document automation",
          "Post-market surveillance",
          "Customer complaint analysis",
          "Device performance analytics"
        ],
        aiCapabilities: [
          "Computer vision for inspection",
          "Document analysis for regulatory",
          "Adverse event detection",
          "Customer support chatbots",
          "Predictive maintenance for devices"
        ],
        targetAudience: [
          "Medical device manufacturers",
          "Diagnostic device companies",
          "Surgical equipment makers",
          "Connected health device companies",
          "Medical supply distributors"
        ]
      },
      {
        id: "wellness-fitness-centers",
        name: "Wellness & Fitness Centers",
        description: "Wellness centers with personalized programs, progress tracking, and member engagement.",
        icon: "🧘",
        features: ["Personalized Programs AI", "Progress Tracking", "Member Engagement", "Nutrition Planning"],
        detailedDescription: "Elevate wellness experiences with AI that personalizes health journeys. Our solutions create custom programs, track progress intelligently, and keep members engaged in their fitness goals.",
        benefits: [
          "Increase member retention",
          "Personalize fitness programs",
          "Track progress effectively",
          "Boost member engagement",
          "Scale personal training"
        ],
        useCases: [
          "Personalized workout generation",
          "Nutrition plan customization",
          "Progress tracking and analytics",
          "Member engagement automation",
          "Class recommendation and booking"
        ],
        aiCapabilities: [
          "Fitness program AI",
          "Nutritional analysis",
          "Wearable data integration",
          "Engagement prediction models",
          "Chatbots for wellness support"
        ],
        targetAudience: [
          "Fitness centers and gyms",
          "Yoga and pilates studios",
          "Wellness retreats",
          "Corporate wellness programs",
          "Fitness app companies"
        ]
      },
      {
        id: "mental-health-counseling",
        name: "Mental Health & Counseling Services",
        description: "Mental health services with appointment scheduling, progress monitoring, and crisis support.",
        icon: "🧠",
        features: ["Appointment AI", "Progress Monitoring", "Crisis Support", "Therapy Matching"],
        detailedDescription: "Expand mental health access with AI that supports care delivery. Our solutions match patients to therapists, monitor treatment progress, and provide crisis support resources.",
        benefits: [
          "Improve access to mental health care",
          "Match patients with right therapists",
          "Monitor treatment progress",
          "Provide crisis resources",
          "Reduce administrative burden"
        ],
        useCases: [
          "Therapist-patient matching",
          "Treatment progress tracking",
          "Between-session support tools",
          "Crisis resource provision",
          "Appointment scheduling automation"
        ],
        aiCapabilities: [
          "Therapist matching algorithms",
          "Symptom tracking AI",
          "Natural language for support",
          "Risk assessment models",
          "Outcome measurement automation"
        ],
        targetAudience: [
          "Mental health practices",
          "Counseling centers",
          "Teletherapy platforms",
          "Employee assistance programs",
          "Behavioral health organizations"
        ]
      },
      {
        id: "home-healthcare-services",
        name: "Home Healthcare Services",
        description: "Home care services with caregiver scheduling, patient monitoring, and care coordination.",
        icon: "🏠",
        features: ["Caregiver Scheduling AI", "Patient Monitoring", "Care Coordination", "Family Communication"],
        detailedDescription: "Optimize home healthcare with AI that coordinates care effectively. Our solutions schedule caregivers efficiently, monitor patient health remotely, and keep families informed about care.",
        benefits: [
          "Optimize caregiver schedules",
          "Monitor patients remotely",
          "Coordinate care effectively",
          "Keep families informed",
          "Improve care quality"
        ],
        useCases: [
          "Intelligent caregiver scheduling",
          "Remote patient health monitoring",
          "Care plan management",
          "Family update automation",
          "Visit verification and documentation"
        ],
        aiCapabilities: [
          "Scheduling optimization algorithms",
          "Remote monitoring AI",
          "Natural language for documentation",
          "Care coordination AI",
          "Risk prediction for patients"
        ],
        targetAudience: [
          "Home health agencies",
          "Hospice providers",
          "Home care companies",
          "Senior care services",
          "Post-acute care providers"
        ]
      },
      {
        id: "healthcare-saas-health-it",
        name: "Healthcare SaaS & Health IT",
        description: "Health technology companies building software for healthcare providers and patients.",
        icon: "💻",
        features: ["EHR Integration", "Health Data Analytics", "Patient Portals", "Interoperability Solutions"],
        detailedDescription: "Build better healthcare software with AI capabilities built in. Our Health IT solutions provide EHR integration, health data analytics, and interoperability features for healthcare software companies.",
        benefits: [
          "Integrate with major EHRs",
          "Analyze health data at scale",
          "Improve interoperability",
          "Enhance patient engagement",
          "Accelerate product development"
        ],
        useCases: [
          "EHR data integration and normalization",
          "Population health analytics",
          "Patient portal personalization",
          "Clinical workflow automation",
          "Healthcare API development"
        ],
        aiCapabilities: [
          "Clinical NLP processing",
          "FHIR and HL7 integration AI",
          "Health data normalization",
          "Clinical coding AI",
          "Patient engagement algorithms"
        ],
        targetAudience: [
          "Healthcare SaaS companies",
          "EHR vendors",
          "Health IT consultants",
          "Healthcare data companies",
          "Digital health platforms"
        ]
      },
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: "🎓",
    image: educationImage,
    imageAlt: "NanoFlows Education AI Solutions",
    subIndustries: [
      {
        id: "schools-k12",
        name: "Schools (K-12)",
        description: "K-12 schools with student management, parent communication, and classroom analytics.",
        icon: "🏫",
        features: ["Student Management AI", "Parent Communication", "Classroom Analytics", "Attendance Tracking"],
        detailedDescription: "Empower K-12 education with AI that supports teachers and students. Our school solutions manage student information, facilitate parent communication, and provide classroom insights that improve learning outcomes.",
        benefits: [
          "Reduce administrative burden on teachers",
          "Improve parent engagement",
          "Track student progress effectively",
          "Identify at-risk students early",
          "Personalize learning support"
        ],
        useCases: [
          "Student information management",
          "Automated parent notifications",
          "Attendance tracking and alerts",
          "Academic progress monitoring",
          "Behavior tracking and intervention"
        ],
        aiCapabilities: [
          "Student performance prediction",
          "Natural language for communication",
          "Pattern recognition for at-risk students",
          "Automated report generation",
          "Scheduling optimization"
        ],
        targetAudience: [
          "Public school districts",
          "Private schools",
          "Charter schools",
          "International schools",
          "School administrators"
        ]
      },
      {
        id: "colleges-universities",
        name: "Colleges & Universities",
        description: "Higher education institutions with admissions AI, student success, and research support.",
        icon: "🎓",
        features: ["Admissions AI", "Student Success Analytics", "Research Support", "Alumni Engagement"],
        detailedDescription: "Transform higher education with AI that enhances every aspect of the student journey. Our university solutions optimize admissions, support student success, and strengthen alumni connections.",
        benefits: [
          "Improve enrollment yield",
          "Increase student retention",
          "Support research productivity",
          "Engage alumni effectively",
          "Optimize resource allocation"
        ],
        useCases: [
          "Admissions application review",
          "Student success prediction and intervention",
          "Research funding matching",
          "Alumni engagement automation",
          "Course scheduling optimization"
        ],
        aiCapabilities: [
          "Application analysis AI",
          "Student risk prediction models",
          "Research matching algorithms",
          "Engagement scoring",
          "Resource optimization AI"
        ],
        targetAudience: [
          "Universities and colleges",
          "Community colleges",
          "Graduate schools",
          "Professional schools",
          "Higher education administrators"
        ]
      },
      {
        id: "coaching-training-institutes",
        name: "Coaching & Training Institutes",
        description: "Coaching centers with batch management, performance tracking, and personalized study plans.",
        icon: "📖",
        features: ["Batch Management AI", "Performance Tracking", "Study Plan Generation", "Test Analysis"],
        detailedDescription: "Scale coaching excellence with AI that personalizes preparation for every student. Our training institute solutions manage batches efficiently, track performance, and generate study plans that maximize results.",
        benefits: [
          "Personalize learning for each student",
          "Track batch performance",
          "Identify weak areas quickly",
          "Optimize teaching resources",
          "Improve exam success rates"
        ],
        useCases: [
          "Batch scheduling and management",
          "Individual performance tracking",
          "Personalized study plan generation",
          "Test result analysis and insights",
          "Parent progress reporting"
        ],
        aiCapabilities: [
          "Adaptive learning algorithms",
          "Performance prediction models",
          "Study plan optimization",
          "Test analytics AI",
          "Batch optimization"
        ],
        targetAudience: [
          "Test prep institutes",
          "Tutoring centers",
          "Competitive exam coaching",
          "Skill training centers",
          "Language schools"
        ]
      },
      {
        id: "online-learning-platforms",
        name: "Online Learning Platforms (EdTech)",
        description: "E-learning platforms with adaptive learning, content recommendations, and engagement analytics.",
        icon: "💻",
        features: ["Adaptive Learning AI", "Content Recommendation", "Engagement Analytics", "Gamification"],
        detailedDescription: "Build engaging e-learning experiences with AI that adapts to every learner. Our EdTech solutions recommend content, measure engagement, and create personalized learning paths that keep students coming back.",
        benefits: [
          "Increase course completion rates",
          "Personalize learning journeys",
          "Improve learner engagement",
          "Optimize content effectiveness",
          "Scale personalized education"
        ],
        useCases: [
          "Personalized content recommendations",
          "Adaptive learning path generation",
          "Engagement tracking and nudges",
          "Gamification and rewards",
          "Learning outcome prediction"
        ],
        aiCapabilities: [
          "Content recommendation engines",
          "Adaptive difficulty algorithms",
          "Engagement prediction models",
          "Natural language Q&A",
          "Video content analysis"
        ],
        targetAudience: [
          "MOOC platforms",
          "Corporate e-learning",
          "K-12 online learning",
          "Language learning apps",
          "Skill development platforms"
        ]
      },
      {
        id: "corporate-training-ld",
        name: "Corporate Training & L&D",
        description: "Corporate learning with skill gap analysis, training automation, and compliance tracking.",
        icon: "👔",
        features: ["Skill Gap Analysis AI", "Training Automation", "Compliance Tracking", "Performance Metrics"],
        detailedDescription: "Upskill your workforce with AI that identifies gaps and delivers targeted training. Our corporate L&D solutions analyze skills, automate compliance training, and measure learning impact on performance.",
        benefits: [
          "Identify skill gaps accurately",
          "Automate compliance training",
          "Measure training effectiveness",
          "Personalize employee development",
          "Reduce training costs"
        ],
        useCases: [
          "Skills assessment and gap analysis",
          "Personalized learning paths",
          "Compliance training automation",
          "Training effectiveness measurement",
          "Career development planning"
        ],
        aiCapabilities: [
          "Skills inference algorithms",
          "Training recommendation engines",
          "Compliance tracking AI",
          "Performance correlation models",
          "Content curation AI"
        ],
        targetAudience: [
          "Corporate L&D teams",
          "HR departments",
          "Training companies",
          "LMS vendors",
          "Professional development providers"
        ]
      },
      {
        id: "skill-development-vocational",
        name: "Skill Development & Vocational Training",
        description: "Vocational training with hands-on skill tracking, job placement, and industry certification.",
        icon: "🛠️",
        features: ["Skill Tracking AI", "Job Placement", "Certification Management", "Industry Partnerships"],
        detailedDescription: "Build career-ready workforce with AI that tracks practical skills and connects to jobs. Our vocational solutions track hands-on learning, manage certifications, and facilitate job placement.",
        benefits: [
          "Track practical skill development",
          "Connect graduates to jobs",
          "Manage industry certifications",
          "Align training with employer needs",
          "Improve employment outcomes"
        ],
        useCases: [
          "Hands-on skill assessment",
          "Job matching and placement",
          "Certification tracking and renewal",
          "Employer requirement matching",
          "Apprenticeship management"
        ],
        aiCapabilities: [
          "Practical skill assessment AI",
          "Job matching algorithms",
          "Certification verification",
          "Employer demand prediction",
          "Career path recommendation"
        ],
        targetAudience: [
          "Vocational schools",
          "Trade schools",
          "Workforce development programs",
          "Apprenticeship programs",
          "Skill development organizations"
        ]
      },
      {
        id: "competitive-exam-prep",
        name: "Competitive Exam Preparation",
        description: "Exam preparation with practice tests, performance analysis, and personalized study paths.",
        icon: "📝",
        features: ["Practice Test AI", "Performance Analysis", "Study Path Generation", "Weak Area Detection"],
        detailedDescription: "Maximize exam success with AI that creates personalized preparation strategies. Our exam prep solutions generate practice tests, analyze performance patterns, and focus study time on weak areas.",
        benefits: [
          "Identify and address weak areas",
          "Generate targeted practice tests",
          "Track preparation progress",
          "Predict exam performance",
          "Optimize study time"
        ],
        useCases: [
          "Adaptive practice test generation",
          "Performance pattern analysis",
          "Weak area identification and focus",
          "Study schedule optimization",
          "Score prediction and tracking"
        ],
        aiCapabilities: [
          "Adaptive testing algorithms",
          "Performance analytics AI",
          "Study path optimization",
          "Question difficulty calibration",
          "Time management analysis"
        ],
        targetAudience: [
          "Test prep companies",
          "Exam coaching centers",
          "Self-study platforms",
          "Professional certification prep",
          "Academic competition prep"
        ]
      },
      {
        id: "test-certification-providers",
        name: "Test & Certification Providers",
        description: "Testing organizations with exam administration, proctoring, and certification management.",
        icon: "✅",
        features: ["Exam Administration AI", "AI Proctoring", "Certification Tracking", "Credential Verification"],
        detailedDescription: "Deliver secure, scalable assessments with AI-powered exam administration. Our testing solutions provide intelligent proctoring, manage certifications, and enable instant credential verification.",
        benefits: [
          "Scale exam delivery securely",
          "Detect cheating effectively",
          "Manage certifications efficiently",
          "Enable instant verification",
          "Reduce administration costs"
        ],
        useCases: [
          "Remote exam proctoring",
          "Exam scheduling and delivery",
          "Certification issuance and tracking",
          "Credential verification APIs",
          "Cheating detection and prevention"
        ],
        aiCapabilities: [
          "AI-powered proctoring",
          "Anomaly detection for cheating",
          "Exam item analysis",
          "Credential verification AI",
          "Scheduling optimization"
        ],
        targetAudience: [
          "Testing organizations",
          "Certification bodies",
          "Professional associations",
          "Educational testing services",
          "Credentialing organizations"
        ]
      },
      {
        id: "education-content-publishers",
        name: "Education Content Publishers",
        description: "Educational publishers with content creation, distribution, and usage analytics.",
        icon: "📚",
        features: ["Content Creation AI", "Distribution Analytics", "Rights Management", "Personalization"],
        detailedDescription: "Transform educational publishing with AI that creates, distributes, and analyzes content. Our solutions help publishers generate content, track usage, and personalize learning materials at scale.",
        benefits: [
          "Accelerate content creation",
          "Track content effectiveness",
          "Manage rights efficiently",
          "Personalize for learners",
          "Optimize distribution channels"
        ],
        useCases: [
          "AI-assisted content creation",
          "Content usage analytics",
          "Rights and licensing management",
          "Adaptive content personalization",
          "Market demand analysis"
        ],
        aiCapabilities: [
          "Content generation AI",
          "Usage pattern analytics",
          "Rights matching algorithms",
          "Personalization engines",
          "Market prediction models"
        ],
        targetAudience: [
          "Textbook publishers",
          "Digital content providers",
          "Assessment publishers",
          "Educational media companies",
          "Open educational resource providers"
        ]
      },
      {
        id: "learning-management-saas",
        name: "Learning Management SaaS Providers",
        description: "LMS platforms with course management, student tracking, and integration capabilities.",
        icon: "🖥️",
        features: ["Course Management AI", "Student Tracking", "Integration APIs", "Analytics Dashboard"],
        detailedDescription: "Build smarter LMS platforms with AI that enhances learning management. Our solutions provide intelligent course management, student tracking, and analytics that help educators make data-driven decisions.",
        benefits: [
          "Improve course completion rates",
          "Track student progress effectively",
          "Integrate with existing tools",
          "Provide actionable analytics",
          "Differentiate with AI features"
        ],
        useCases: [
          "Intelligent course organization",
          "Automated progress tracking",
          "Third-party tool integration",
          "Learning analytics dashboards",
          "Content recommendation within LMS"
        ],
        aiCapabilities: [
          "Course optimization algorithms",
          "Progress prediction models",
          "Integration AI for mapping",
          "Analytics and reporting AI",
          "Recommendation engines"
        ],
        targetAudience: [
          "LMS vendors",
          "Corporate learning platforms",
          "Academic LMS providers",
          "Training management systems",
          "EdTech infrastructure companies"
        ]
      },
    ],
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    icon: "🏪",
    image: localBusinessImage,
    imageAlt: "NanoFlows Local Business AI Solutions",
    subIndustries: [
      {
        id: "retail-stores-showrooms",
        name: "Retail Stores & Showrooms",
        description: "Local retail stores with inventory management, customer engagement, and sales tracking.",
        icon: "🏬",
        features: ["Inventory Management AI", "Customer Engagement", "Sales Tracking", "Loyalty Programs"],
        detailedDescription: "Compete with big retailers using AI that understands local customers. Our retail solutions manage inventory, engage customers personally, and track sales to help local stores thrive.",
        benefits: [
          "Never run out of popular items",
          "Know your customers personally",
          "Track what sells and when",
          "Build customer loyalty",
          "Compete with online retailers"
        ],
        useCases: [
          "Smart inventory reordering",
          "Personalized customer outreach",
          "Sales trend analysis",
          "Loyalty program management",
          "Staff scheduling optimization"
        ],
        aiCapabilities: [
          "Demand forecasting models",
          "Customer preference learning",
          "Sales pattern analysis",
          "Loyalty optimization AI",
          "Natural language for inquiries"
        ],
        targetAudience: [
          "Boutique stores",
          "Specialty retailers",
          "Showroom businesses",
          "Gift shops",
          "Local chains"
        ]
      },
      {
        id: "restaurants-cafes-food",
        name: "Restaurants, Cafes & Food Outlets",
        description: "Food businesses with table management, order automation, and customer feedback analysis.",
        icon: "🍽️",
        features: ["Table Management AI", "Order Automation", "Menu Optimization", "Review Analysis"],
        detailedDescription: "Delight diners with AI that streamlines restaurant operations. Our food service solutions manage reservations, automate ordering, and analyze feedback to keep customers coming back.",
        benefits: [
          "Reduce wait times",
          "Automate order taking",
          "Optimize your menu",
          "Respond to reviews quickly",
          "Increase table turnover"
        ],
        useCases: [
          "Smart reservation management",
          "Order taking and processing",
          "Menu item performance analysis",
          "Review monitoring and response",
          "Kitchen workflow optimization"
        ],
        aiCapabilities: [
          "Reservation optimization",
          "Voice ordering AI",
          "Menu analytics",
          "Sentiment analysis for reviews",
          "Demand prediction"
        ],
        targetAudience: [
          "Restaurants",
          "Cafes and coffee shops",
          "Fast food outlets",
          "Food trucks",
          "Cloud kitchens"
        ]
      },
      {
        id: "salons-spas-personal-care",
        name: "Salons, Spas & Personal Care",
        description: "Beauty businesses with appointment booking, staff scheduling, and client management.",
        icon: "💇",
        features: ["Appointment AI", "Staff Scheduling", "Client Management", "Service Recommendations"],
        detailedDescription: "Elevate client experiences with AI that manages your beauty business effortlessly. Our salon solutions book appointments, schedule staff, and remember every client's preferences.",
        benefits: [
          "Fill appointment slots automatically",
          "Match clients with right stylists",
          "Remember client preferences",
          "Reduce no-shows",
          "Upsell services naturally"
        ],
        useCases: [
          "Online appointment booking",
          "Staff schedule optimization",
          "Client history and preferences",
          "Service package recommendations",
          "No-show prediction and prevention"
        ],
        aiCapabilities: [
          "Booking optimization algorithms",
          "Client preference learning",
          "Schedule optimization",
          "Recommendation engines",
          "Communication automation"
        ],
        targetAudience: [
          "Hair salons",
          "Nail salons",
          "Day spas",
          "Barbershops",
          "Beauty clinics"
        ]
      },
      {
        id: "gyms-yoga-fitness",
        name: "Gyms, Yoga & Fitness Studios",
        description: "Fitness centers with membership management, class scheduling, and member engagement.",
        icon: "🏋️",
        features: ["Membership AI", "Class Scheduling", "Member Engagement", "Workout Recommendations"],
        detailedDescription: "Build thriving fitness communities with AI that keeps members engaged. Our fitness solutions manage memberships, schedule classes, and personalize workouts to reduce churn and increase satisfaction.",
        benefits: [
          "Reduce member churn",
          "Fill classes efficiently",
          "Personalize fitness journeys",
          "Engage inactive members",
          "Grow your community"
        ],
        useCases: [
          "Membership management and renewals",
          "Class scheduling and waitlists",
          "Member workout personalization",
          "Re-engagement campaigns",
          "Trainer scheduling"
        ],
        aiCapabilities: [
          "Churn prediction models",
          "Class demand forecasting",
          "Personalization algorithms",
          "Engagement scoring",
          "Communication automation"
        ],
        targetAudience: [
          "Gyms and fitness centers",
          "Yoga studios",
          "CrossFit boxes",
          "Pilates studios",
          "Martial arts studios"
        ]
      },
      {
        id: "clinics-local-healthcare",
        name: "Clinics & Local Healthcare Centers",
        description: "Local clinics with patient scheduling, records management, and follow-up automation.",
        icon: "⚕️",
        features: ["Patient Scheduling AI", "Records Management", "Follow-up Automation", "Prescription Management"],
        detailedDescription: "Provide better patient care with AI that handles clinic administration. Our local healthcare solutions schedule patients, manage records, and automate follow-ups so you can focus on care.",
        benefits: [
          "Reduce scheduling headaches",
          "Keep patient records organized",
          "Never miss a follow-up",
          "Improve patient satisfaction",
          "Streamline prescriptions"
        ],
        useCases: [
          "Patient appointment scheduling",
          "Electronic health record management",
          "Automated appointment reminders",
          "Prescription refill automation",
          "Patient communication"
        ],
        aiCapabilities: [
          "Scheduling optimization",
          "Document management AI",
          "Follow-up prediction models",
          "Communication automation",
          "Clinical workflow AI"
        ],
        targetAudience: [
          "Family practices",
          "Dental clinics",
          "Specialist clinics",
          "Urgent care centers",
          "Physical therapy clinics"
        ]
      },
      {
        id: "real-estate-agencies-local",
        name: "Real Estate Agencies",
        description: "Local real estate offices with lead management, property listings, and client communication.",
        icon: "🏠",
        features: ["Lead Management AI", "Property Listings", "Client Communication", "Market Insights"],
        detailedDescription: "Close more deals with AI that never lets a lead go cold. Our local real estate solutions manage leads, market properties, and keep clients engaged throughout their buying journey.",
        benefits: [
          "Respond to leads instantly",
          "Market properties effectively",
          "Stay in touch with clients",
          "Understand your local market",
          "Win more listings"
        ],
        useCases: [
          "Lead capture and nurturing",
          "Property listing optimization",
          "Automated client follow-ups",
          "Local market analysis",
          "Open house management"
        ],
        aiCapabilities: [
          "Lead scoring algorithms",
          "Listing optimization AI",
          "Communication automation",
          "Market analytics",
          "Client matching"
        ],
        targetAudience: [
          "Real estate agents",
          "Small brokerages",
          "Property managers",
          "Real estate teams",
          "Independent realtors"
        ]
      },
      {
        id: "automobile-services-workshops",
        name: "Automobile Services & Workshops",
        description: "Auto service centers with appointment booking, service tracking, and customer communication.",
        icon: "🚗",
        features: ["Service Booking AI", "Job Tracking", "Parts Inventory", "Customer Updates"],
        detailedDescription: "Run your auto shop efficiently with AI that tracks every job. Our automotive solutions book appointments, manage parts inventory, and keep customers informed about their vehicles.",
        benefits: [
          "Fill your service bays",
          "Track jobs in real-time",
          "Never run out of common parts",
          "Keep customers informed",
          "Build repeat business"
        ],
        useCases: [
          "Service appointment booking",
          "Job status tracking",
          "Parts inventory management",
          "Customer status updates",
          "Service history tracking"
        ],
        aiCapabilities: [
          "Appointment optimization",
          "Job tracking AI",
          "Inventory prediction",
          "Customer communication automation",
          "Upsell recommendations"
        ],
        targetAudience: [
          "Auto repair shops",
          "Tire and oil change shops",
          "Body shops",
          "Car dealership service centers",
          "Specialty repair shops"
        ]
      },
      {
        id: "travel-agents-local-tourism",
        name: "Travel Agents & Local Tourism",
        description: "Travel agencies with trip planning, booking management, and customer engagement.",
        icon: "✈️",
        features: ["Trip Planning AI", "Booking Management", "Itinerary Generation", "Customer Engagement"],
        detailedDescription: "Create unforgettable trips with AI that knows destinations inside out. Our travel solutions plan itineraries, manage bookings, and engage travelers before, during, and after their journeys.",
        benefits: [
          "Plan trips faster",
          "Manage bookings easily",
          "Create personalized itineraries",
          "Engage travelers proactively",
          "Build loyal customers"
        ],
        useCases: [
          "AI-assisted trip planning",
          "Booking consolidation and management",
          "Personalized itinerary generation",
          "Travel updates and notifications",
          "Post-trip feedback collection"
        ],
        aiCapabilities: [
          "Destination knowledge AI",
          "Booking management automation",
          "Itinerary optimization",
          "Traveler preference learning",
          "Communication automation"
        ],
        targetAudience: [
          "Travel agencies",
          "Tour operators",
          "Destination management companies",
          "Travel advisors",
          "Local tour guides"
        ]
      },
      {
        id: "event-management-services",
        name: "Event Management & Services",
        description: "Event planners with vendor management, scheduling, and event coordination.",
        icon: "🎉",
        features: ["Event Planning AI", "Vendor Management", "Scheduling", "Budget Tracking"],
        detailedDescription: "Execute flawless events with AI that coordinates every detail. Our event solutions manage vendors, track budgets, and ensure every timeline is met for memorable experiences.",
        benefits: [
          "Plan events efficiently",
          "Manage vendors seamlessly",
          "Stay on budget",
          "Never miss a deadline",
          "Delight your clients"
        ],
        useCases: [
          "Event timeline management",
          "Vendor coordination and tracking",
          "Budget monitoring and alerts",
          "Guest list management",
          "Day-of coordination support"
        ],
        aiCapabilities: [
          "Planning optimization algorithms",
          "Vendor matching AI",
          "Budget tracking automation",
          "Timeline prediction models",
          "Communication coordination"
        ],
        targetAudience: [
          "Event planners",
          "Wedding planners",
          "Corporate event managers",
          "Party planners",
          "Venue operators"
        ]
      },
      {
        id: "professional-services",
        name: "Professional Services (CA, Legal, Consultants)",
        description: "Professional service firms with client management, case tracking, and document automation.",
        icon: "⚖️",
        features: ["Client Management AI", "Case Tracking", "Document Automation", "Billing Management"],
        detailedDescription: "Serve clients better with AI that handles the paperwork. Our professional services solutions manage clients, track cases, and automate documents so you can focus on your expertise.",
        benefits: [
          "Manage client relationships",
          "Track cases and matters",
          "Automate document creation",
          "Bill accurately and timely",
          "Grow your practice"
        ],
        useCases: [
          "Client relationship management",
          "Case and matter tracking",
          "Document template automation",
          "Time tracking and billing",
          "Deadline management"
        ],
        aiCapabilities: [
          "Client management AI",
          "Case analytics",
          "Document automation",
          "Billing optimization",
          "Deadline prediction"
        ],
        targetAudience: [
          "Accounting firms",
          "Law practices",
          "Consulting firms",
          "Tax preparers",
          "Financial advisors"
        ]
      },
    ],
  },
];

export async function generateMetadata({ params }: { params: Promise<{ id: string; subId: string }> }): Promise<Metadata> {
  const { id, subId } = await params;
  const industry = industries.find((ind) => ind.id === id);
  const subIndustry = industry?.subIndustries.find((sub) => sub.id === subId);

  if (!industry || !subIndustry) {
    return {
      title: "Sub-Industry Not Found | NanoFlows",
    };
  }

  return {
    title: `${subIndustry.name} AI Solutions | ${industry.name} | NanoFlows`,
    description: subIndustry.overview,
    keywords: [
      subIndustry.name,
      `${subIndustry.name} AI`,
      `${subIndustry.name} automation`,
      industry.name,
      ...subIndustry.whatWeBuild.solutions.slice(0, 4),
      "AI solutions",
      "autonomous AI",
      "NanoFlows"
    ],
    openGraph: {
      title: `${subIndustry.name} AI Solutions | NanoFlows`,
      description: subIndustry.overview,
      type: "website",
    },
  };
}

export default async function SubIndustryPage({ params }: { params: Promise<{ id: string; subId: string }> }) {
  const { id, subId } = await params;
  const industry = industries.find((ind) => ind.id === id);
  const subIndustry = industry?.subIndustries.find((sub) => sub.id === subId);

  if (!industry || !subIndustry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={industry.image}
            alt={`NanoFlows ${subIndustry.name} AI Solutions`}
            title={`NanoFlows ${subIndustry.name} AI Solutions`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Link
                href={`/industries/${industry.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <span className="text-xl">{industry.icon}</span>
                <span className="text-sm font-medium">{industry.name}</span>
              </Link>
              <span className="text-white/50">→</span>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-white backdrop-blur-sm">
                <span className="text-xl">{subIndustry.icon}</span>
                <span className="text-sm font-semibold">{subIndustry.name}</span>
              </div>
            </div>
            <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 px-4 py-2 text-4xl shadow-lg">
              {subIndustry.icon}
            </div>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              {subIndustry.name}
            </h1>
            <p className="mt-4 text-xl text-orange-300 font-semibold">
              {subIndustry.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get Started Today →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
                Section 1
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                {subIndustry.name} Sub-Industry Overview
              </h2>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                {subIndustry.overview}
              </p>
              <p className="mt-6 text-orange-600 font-semibold italic">
                We build trust-first, AI-powered {subIndustry.name.toLowerCase()} systems — not just apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
                Section 2
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Why {subIndustry.name} Choose Nano Flows
              </h2>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-gray-50 p-8">
              <p className="mb-6 text-gray-700 font-medium">
                {subIndustry.whyChoose.intro}
              </p>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-500">
                Nano Flows advantage:
              </p>
              <div className="space-y-3">
                {subIndustry.whyChoose.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 p-4">
                <p className="text-center text-orange-800 font-semibold">
                  Result: A {subIndustry.name.toLowerCase()} product investors and users trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
                Section 3
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                What We Build for {subIndustry.name}
              </h2>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="mb-6 text-gray-700 font-medium">
                {subIndustry.whatWeBuild.intro}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {subIndustry.whatWeBuild.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{solution}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-gray-600 italic">
                {subIndustry.whatWeBuild.footer}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
                Section 4
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Core {subIndustry.name} Capabilities Included
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Every {subIndustry.name.toLowerCase()} product we build includes:
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {subIndustry.coreCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{capability}</h3>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-600 font-medium">
              Security, performance, and accuracy are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
                Section 5
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Ideal For + Business Outcomes
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Ideal for:</h3>
                <div className="space-y-3">
                  {subIndustry.idealFor.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
                    >
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Business outcomes:</h3>
                <div className="space-y-3">
                  {subIndustry.businessOutcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 p-4"
                    >
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-3xl shadow-lg">
              {subIndustry.icon}
            </div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Transform Your {subIndustry.name} Business?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let&apos;s discuss how our AI solutions can help you automate operations, 
              reduce costs, and deliver exceptional experiences to your customers.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
              >
                Schedule a Demo →
              </Link>
              <Link
                href={`/industries/${industry.id}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                ← Back to {industry.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
