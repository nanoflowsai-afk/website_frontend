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
        tagline: "AI-Powered Residential Property Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help residential real estate businesses build AI-native platforms that match buyers to their perfect homes. From instant lead qualification to engaging virtual experiences, we design solutions that close deals faster while providing 24/7 property intelligence. We build buyer-first, AI-powered residential systems that transform the home buying journey.",
        whyChoose: {
          intro: "Residential real estate requires instant response, accurate matching, and market intelligence.",
          points: [
            "AI-first buyer-property matching with 95% accuracy",
            "Virtual tour and property visualization capabilities",
            "Instant lead scoring and qualification automation",
            "Predictive market analysis and pricing models",
            "Built for scale across listings and buyer inquiries"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled residential real estate solutions, including:",
          solutions: [
            "Intelligent buyer-property matching platforms",
            "AI-powered virtual property tour systems",
            "Lead scoring and qualification automation",
            "Comparative market analysis dashboards",
            "Automated follow-up and nurturing sequences",
            "Property search and recommendation engines",
            "Agent productivity and CRM tools"
          ],
          footer: "All solutions are cloud-native, mobile-first, and MLS integration-ready."
        },
        coreCapabilities: [
          "Natural language property search and queries",
          "Computer vision for property image analysis",
          "Predictive pricing and valuation models",
          "Chatbots for 24/7 buyer inquiries",
          "Preference learning and matching algorithms",
          "Market trend analysis and forecasting",
          "Automated scheduling and showing management",
          "Document processing and transaction coordination"
        ],
        idealFor: [
          "Real estate agents and teams",
          "Home builders and developers",
          "Real estate brokerages",
          "Property listing platforms",
          "Home buying startups"
        ],
        businessOutcomes: [
          "Qualify leads in seconds, not hours",
          "Match buyers with 95% accuracy",
          "Reduce time to close by 30%",
          "Provide 24/7 property information",
          "Predict market trends accurately"
        ]
      },
      {
        id: "commercial-real-estate",
        name: "Commercial Real Estate",
        description: "Commercial property solutions with lease management, tenant matching, and investment analytics.",
        icon: "🏢",
        tagline: "AI-Powered Commercial Property Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help commercial real estate businesses build AI-native platforms for complex property transactions. From automated lease management to intelligent tenant matching, we design solutions that optimize portfolio performance and drive data-driven investment decisions. We build transaction-first, AI-powered commercial systems that maximize asset value.",
        whyChoose: {
          intro: "Commercial real estate requires complex transaction handling, portfolio optimization, and market intelligence.",
          points: [
            "AI-first lease abstraction and management automation",
            "Intelligent tenant credit and fit analysis",
            "Investment opportunity scoring and analytics",
            "Space utilization optimization algorithms",
            "Built for scale across commercial portfolios"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled commercial real estate solutions, including:",
          solutions: [
            "Automated lease abstraction and management platforms",
            "Tenant credit and fit analysis systems",
            "Investment opportunity scoring dashboards",
            "Space utilization optimization tools",
            "Market rent benchmarking platforms",
            "Portfolio performance analytics",
            "Commercial property marketing automation"
          ],
          footer: "All solutions are enterprise-grade, compliant, and CRE platform integrated."
        },
        coreCapabilities: [
          "Document AI for lease analysis and extraction",
          "Financial modeling and investment algorithms",
          "Tenant behavior and renewal prediction",
          "Market analytics and rent forecasting",
          "Portfolio optimization and balancing",
          "Space planning and utilization analysis",
          "Automated reporting and compliance",
          "Multi-property performance dashboards"
        ],
        idealFor: [
          "Commercial brokers and agents",
          "Office building owners and operators",
          "Retail landlords and developers",
          "Industrial property owners",
          "Commercial REITs and investment firms"
        ],
        businessOutcomes: [
          "Reduce lease administration costs by 60%",
          "Find qualified tenants 50% faster",
          "Optimize portfolio performance and returns",
          "Predict vacancy and renewals accurately",
          "Make data-driven investment decisions"
        ]
      },
      {
        id: "real-estate-developers",
        name: "Real Estate Developers & Builders",
        description: "Development projects with project management, sales automation, and construction tracking.",
        icon: "🏗️",
        tagline: "AI-Powered Development & Construction Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help real estate developers and builders build AI-native project management platforms. From real-time construction tracking to automated sales processes, we design solutions that reduce delays and optimize inventory allocation. We build project-first, AI-powered development systems that deliver on time and on budget.",
        whyChoose: {
          intro: "Real estate development requires project visibility, sales automation, and construction intelligence.",
          points: [
            "AI-first construction progress monitoring and alerts",
            "Automated new home sales and buyer communication",
            "Unit inventory and release strategy optimization",
            "Predictive project analytics and delay prevention",
            "Built for scale across multiple development projects"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled real estate development solutions, including:",
          solutions: [
            "Construction progress monitoring platforms",
            "Automated buyer communication systems",
            "Unit inventory optimization tools",
            "Sales pipeline management dashboards",
            "Warranty claim tracking platforms",
            "Project timeline and milestone management",
            "Vendor and subcontractor coordination tools"
          ],
          footer: "All solutions are cloud-native, mobile-accessible, and construction-integrated."
        },
        coreCapabilities: [
          "Computer vision for site monitoring and progress",
          "Predictive project analytics and delay detection",
          "CRM automation for buyer engagement",
          "Document management and version control AI",
          "Customer journey automation and nurturing",
          "Budget tracking and cost prediction",
          "Resource allocation optimization",
          "Quality control and inspection automation"
        ],
        idealFor: [
          "Home builders and residential developers",
          "Condo and apartment developers",
          "Mixed-use and commercial developers",
          "Land developers and subdividers",
          "Construction companies and general contractors"
        ],
        businessOutcomes: [
          "Track construction progress in real-time",
          "Automate new home sales by 70%",
          "Optimize unit release strategy for maximum revenue",
          "Reduce project delays by 35%",
          "Improve buyer communication and satisfaction"
        ]
      },
      {
        id: "property-brokers-agencies",
        name: "Property Brokers & Agencies",
        description: "Brokerage solutions with lead management, commission tracking, and agent performance analytics.",
        icon: "🔑",
        tagline: "AI-Powered Real Estate Brokerage Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help property brokers and agencies build AI-native platforms that maximize agent productivity. From intelligent lead management to automated commission tracking, we design solutions that help brokerages scale efficiently. We build agent-first, AI-powered brokerage systems that drive performance.",
        whyChoose: {
          intro: "Real estate brokerages require lead optimization, commission accuracy, and performance intelligence.",
          points: [
            "AI-first lead routing and scoring algorithms",
            "Automated commission calculation and tracking",
            "Agent performance analytics and coaching insights",
            "Client-agent matching for better outcomes",
            "Built for scale across agents and transactions"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled brokerage solutions, including:",
          solutions: [
            "Intelligent lead routing and scoring platforms",
            "Automated commission tracking systems",
            "Agent performance analytics dashboards",
            "Client-agent matching algorithms",
            "Transaction coordination automation",
            "Brokerage CRM and pipeline management",
            "Training and onboarding platforms"
          ],
          footer: "All solutions are cloud-native, scalable, and brokerage-integrated."
        },
        coreCapabilities: [
          "Lead scoring and prioritization algorithms",
          "Automated transaction tracking and reporting",
          "Performance prediction and coaching models",
          "CRM integration and data synchronization",
          "Market intelligence and competitive analysis",
          "Commission calculation and split automation",
          "Agent productivity analytics",
          "Compliance monitoring and documentation"
        ],
        idealFor: [
          "Real estate brokerages of all sizes",
          "Franchise networks and brands",
          "Boutique and specialty agencies",
          "Team leaders and office managers",
          "Brokerage technology providers"
        ],
        businessOutcomes: [
          "Increase lead conversion by 40%",
          "Automate commission calculations with 100% accuracy",
          "Improve agent productivity by 35%",
          "Track performance in real-time across all agents",
          "Optimize lead distribution for maximum conversion"
        ]
      },
      {
        id: "co-living-co-working",
        name: "Co-Living & Co-Working Spaces",
        description: "Shared space management with booking systems, community engagement, and occupancy optimization.",
        icon: "🏘️",
        tagline: "AI-Powered Flexible Space Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help co-living and co-working operators build AI-native platforms that maximize occupancy and build thriving communities. From smart booking systems to dynamic pricing, we design solutions that optimize space utilization while fostering member engagement. We build community-first, AI-powered space management systems.",
        whyChoose: {
          intro: "Flexible spaces require occupancy optimization, community building, and dynamic operations.",
          points: [
            "AI-first demand forecasting and pricing optimization",
            "Smart room and desk booking automation",
            "Community engagement and event recommendations",
            "Amenity usage optimization and planning",
            "Built for scale across multiple locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled flexible space solutions, including:",
          solutions: [
            "Smart room and desk booking platforms",
            "Community event recommendation engines",
            "Dynamic occupancy pricing systems",
            "Amenity usage optimization tools",
            "Member matching and networking platforms",
            "Space utilization analytics dashboards",
            "Automated member services and support"
          ],
          footer: "All solutions are mobile-first, community-focused, and operations-optimized."
        },
        coreCapabilities: [
          "Demand forecasting for space optimization",
          "Community graph analytics and matching",
          "Dynamic pricing algorithms and yield management",
          "Chatbots for 24/7 member services",
          "Usage pattern analysis and prediction",
          "Event planning and recommendation AI",
          "Access control and security integration",
          "Member satisfaction tracking and improvement"
        ],
        idealFor: [
          "Co-working space operators",
          "Co-living and community housing providers",
          "Flexible office platforms and networks",
          "Student housing and dormitory operators",
          "Community-focused real estate developments"
        ],
        businessOutcomes: [
          "Maximize space utilization by 40%",
          "Build engaged and active communities",
          "Automate member services and reduce overhead",
          "Optimize pricing dynamically for maximum revenue",
          "Reduce administrative overhead by 60%"
        ]
      },
      {
        id: "property-management-firms",
        name: "Property Management Firms",
        description: "Property management with maintenance scheduling, tenant communication, and financial tracking.",
        icon: "🔧",
        tagline: "AI-Powered Property Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help property management firms build AI-native platforms that handle operations at scale. From predictive maintenance scheduling to automated tenant communication, we design solutions that improve satisfaction while reducing costs. We build efficiency-first, AI-powered property management systems.",
        whyChoose: {
          intro: "Property management requires operational efficiency, tenant satisfaction, and financial visibility.",
          points: [
            "AI-first predictive maintenance scheduling",
            "Automated tenant communication and support",
            "Real-time financial tracking and reporting",
            "Vendor coordination and management automation",
            "Built for scale across property portfolios"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled property management solutions, including:",
          solutions: [
            "Predictive maintenance scheduling platforms",
            "Automated tenant communication systems",
            "Rent payment and collection automation",
            "Vendor coordination and tracking tools",
            "Financial reporting and analytics dashboards",
            "Tenant portal and self-service platforms",
            "Lease management and renewal automation"
          ],
          footer: "All solutions are cloud-native, scalable, and property management integrated."
        },
        coreCapabilities: [
          "Maintenance prediction and scheduling models",
          "Natural language tenant support chatbots",
          "Financial analytics and reporting AI",
          "Vendor matching and performance algorithms",
          "Document processing and lease management",
          "Rent collection and payment prediction",
          "Work order automation and tracking",
          "Portfolio performance dashboards"
        ],
        idealFor: [
          "Residential property management companies",
          "Commercial property managers",
          "HOA and community management companies",
          "Student housing management firms",
          "Multi-family property operators"
        ],
        businessOutcomes: [
          "Reduce maintenance response times by 50%",
          "Automate rent collection and reduce late payments",
          "Improve tenant satisfaction scores by 40%",
          "Track financials in real-time across all properties",
          "Scale management operations efficiently"
        ]
      },
      {
        id: "rental-leasing-platforms",
        name: "Rental & Leasing Platforms",
        description: "Rental platforms with tenant screening, lease automation, and rent collection.",
        icon: "📝",
        tagline: "AI-Powered Rental and Leasing Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help rental and leasing platforms build AI-native solutions that streamline the entire leasing journey. From intelligent tenant screening to automated lease creation, we design platforms that reduce friction and ensure reliable rent collection. We build landlord-first, AI-powered rental systems.",
        whyChoose: {
          intro: "Rental platforms require fast screening, seamless leasing, and reliable collections.",
          points: [
            "AI-first tenant screening and risk assessment",
            "Automated lease document generation and signing",
            "Smart rent payment reminders and collection",
            "Listing optimization and property marketing",
            "Built for scale across rental portfolios"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled rental platform solutions, including:",
          solutions: [
            "AI-powered tenant screening platforms",
            "Automated lease document creation systems",
            "Smart rent payment and collection tools",
            "Listing optimization and marketing platforms",
            "Move-in/move-out coordination automation",
            "Landlord and tenant communication portals",
            "Rental market analytics dashboards"
          ],
          footer: "All solutions are cloud-native, secure, and rental platform integrated."
        },
        coreCapabilities: [
          "Credit and background analysis algorithms",
          "Document generation and e-signature automation",
          "Payment prediction and collection models",
          "Listing quality scoring and optimization",
          "Chatbots for tenant and landlord inquiries",
          "Rental pricing and market analysis",
          "Maintenance request handling and routing",
          "Compliance and fair housing automation"
        ],
        idealFor: [
          "Rental listing platforms and marketplaces",
          "Property management software providers",
          "Tenant screening service companies",
          "Lease management platform operators",
          "Rent payment and collection platforms"
        ],
        businessOutcomes: [
          "Screen tenants in minutes, not days",
          "Automate lease generation with 100% accuracy",
          "Reduce late payments by 50%",
          "Market properties more effectively",
          "Improve landlord and tenant experience"
        ]
      },
      {
        id: "land-plot-management",
        name: "Land & Plot Management",
        description: "Land and plot sales with mapping, valuation, and documentation management.",
        icon: "🗺️",
        tagline: "AI-Powered Land and Plot Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help land and plot management companies build AI-native platforms that simplify complex land transactions. From accurate valuations to automated title verification, we design solutions that reduce risks and accelerate deals. We build accuracy-first, AI-powered land management systems.",
        whyChoose: {
          intro: "Land management requires accurate valuation, documentation handling, and risk mitigation.",
          points: [
            "AI-first land valuation using satellite imagery",
            "GIS-integrated parcel mapping and visualization",
            "Automated title search and verification",
            "Document management and tracking automation",
            "Built for scale across land portfolios"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled land management solutions, including:",
          solutions: [
            "Automated land valuation model platforms",
            "GIS-integrated parcel mapping systems",
            "Title search and verification automation",
            "Document management and tracking tools",
            "Zoning compliance checking platforms",
            "Land investment analytics dashboards",
            "Transaction coordination and closing tools"
          ],
          footer: "All solutions are GIS-enabled, secure, and land registry integrated."
        },
        coreCapabilities: [
          "Satellite imagery analysis for land assessment",
          "Comparable sales and valuation algorithms",
          "Document OCR and data extraction AI",
          "Geographic information system integration",
          "Risk assessment and due diligence models",
          "Zoning and regulatory compliance checking",
          "Land use planning and optimization",
          "Transaction document automation"
        ],
        idealFor: [
          "Land brokers and specialty agents",
          "Land development companies",
          "Agricultural land platforms",
          "Title companies and insurers",
          "Land investment and acquisition firms"
        ],
        businessOutcomes: [
          "Value land accurately and 10x faster",
          "Visualize parcels with comprehensive mapping",
          "Automate documentation and reduce errors",
          "Verify titles efficiently and reliably",
          "Reduce transaction risks by 60%"
        ]
      },
      {
        id: "real-estate-investment",
        name: "Real Estate Investment Firms",
        description: "Investment management with portfolio analytics, market forecasting, and deal sourcing.",
        icon: "💰",
        tagline: "AI-Powered Real Estate Investment Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help real estate investment firms build AI-native platforms that identify opportunities and optimize portfolios. From market trend forecasting to intelligent deal sourcing, we design solutions that maximize returns. We build returns-first, AI-powered investment management systems.",
        whyChoose: {
          intro: "Real estate investment requires market intelligence, deal flow optimization, and portfolio management.",
          points: [
            "AI-first deal flow management and scoring",
            "Portfolio performance analytics and optimization",
            "Market trend forecasting and prediction",
            "Risk-adjusted return modeling and analysis",
            "Built for scale across investment portfolios"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled real estate investment solutions, including:",
          solutions: [
            "Deal flow management and scoring platforms",
            "Portfolio performance analytics dashboards",
            "Market trend forecasting systems",
            "Risk-adjusted return modeling tools",
            "Comparable transaction analysis platforms",
            "Investment thesis validation tools",
            "Investor reporting and communication automation"
          ],
          footer: "All solutions are enterprise-grade, secure, and financial systems integrated."
        },
        coreCapabilities: [
          "Predictive market models and trend analysis",
          "Deal matching and opportunity scoring algorithms",
          "Financial modeling and scenario analysis AI",
          "Alternative data analytics and insights",
          "Portfolio optimization and rebalancing",
          "Risk assessment and mitigation modeling",
          "Investor communication automation",
          "Due diligence and underwriting automation"
        ],
        idealFor: [
          "Private equity real estate firms",
          "Real estate investment trusts (REITs)",
          "Family offices with real estate focus",
          "Institutional real estate investors",
          "Real estate crowdfunding platforms"
        ],
        businessOutcomes: [
          "Identify investment opportunities 50% faster",
          "Optimize portfolio allocation for maximum returns",
          "Predict market movements with 85% accuracy",
          "Assess and mitigate risks proactively",
          "Improve overall investment returns by 25%"
        ]
      },
      {
        id: "hospitality-vacation-rentals",
        name: "Hospitality & Vacation Rentals",
        description: "Short-term rental management with dynamic pricing, guest communication, and booking optimization.",
        icon: "🏖️",
        tagline: "AI-Powered Vacation Rental Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help hospitality and vacation rental operators build AI-native platforms that maximize revenue and guest satisfaction. From dynamic pricing optimization to automated guest communication, we design solutions that boost occupancy and ratings. We build hospitality-first, AI-powered vacation rental systems.",
        whyChoose: {
          intro: "Vacation rentals require revenue optimization, guest experience, and operational efficiency.",
          points: [
            "AI-first dynamic pricing and yield management",
            "Automated guest messaging and communication",
            "Multi-channel booking management and optimization",
            "Review response automation and sentiment analysis",
            "Built for scale across property portfolios"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled vacation rental solutions, including:",
          solutions: [
            "AI-powered dynamic pricing platforms",
            "Automated guest messaging systems",
            "Multi-channel booking management tools",
            "Review response automation platforms",
            "Cleaning and turnover coordination systems",
            "Guest experience optimization tools",
            "Revenue and performance analytics dashboards"
          ],
          footer: "All solutions are OTA-integrated, mobile-first, and hospitality-optimized."
        },
        coreCapabilities: [
          "Demand-based pricing algorithms and optimization",
          "Natural language guest support chatbots",
          "Calendar optimization and overbooking prevention",
          "Sentiment analysis for reviews and feedback",
          "Operations automation and scheduling",
          "Channel management and rate parity",
          "Guest preference learning and personalization",
          "Cleaning and maintenance coordination"
        ],
        idealFor: [
          "Vacation rental property managers",
          "Short-term rental hosts and owners",
          "Boutique hotels and B&Bs",
          "Property management companies",
          "Vacation rental platforms and marketplaces"
        ],
        businessOutcomes: [
          "Increase revenue per property by 25%",
          "Automate 80% of guest communications",
          "Optimize booking calendar utilization",
          "Improve guest satisfaction and ratings",
          "Manage reviews proactively and efficiently"
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
        tagline: "AI-Powered Hospital Operations & Clinical Excellence Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help hospitals and multi-specialty clinics build AI-native operational platforms that improve patient outcomes and efficiency. From emergency department flow optimization to clinical decision support, we design HIPAA-compliant solutions that streamline operations while enhancing care quality. We build patient-first, AI-powered hospital systems.",
        whyChoose: {
          intro: "Hospitals require operational efficiency, clinical intelligence, and patient-centered care at scale.",
          points: [
            "AI-first patient flow prediction and optimization",
            "Clinical decision support with evidence-based alerts",
            "Predictive bed management and capacity planning",
            "Staff scheduling optimization and resource allocation",
            "Built for scale across departments and specialties"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled hospital operations solutions, including:",
          solutions: [
            "Emergency department flow optimization platforms",
            "Clinical decision support alert systems",
            "Predictive bed management dashboards",
            "Staff scheduling optimization tools",
            "Supply chain management automation",
            "Patient experience monitoring platforms",
            "Quality metrics and outcomes analytics"
          ],
          footer: "All solutions are HIPAA-compliant, EHR-integrated, and clinically validated."
        },
        coreCapabilities: [
          "Patient flow prediction and optimization models",
          "Clinical NLP for medical records analysis",
          "Resource optimization and allocation algorithms",
          "Real-time alerting and escalation systems",
          "Demand forecasting for staffing and supplies",
          "Patient satisfaction monitoring and analytics",
          "Clinical quality metrics tracking",
          "Integration with major EHR systems"
        ],
        idealFor: [
          "Hospital systems and health networks",
          "Multi-specialty clinics and medical groups",
          "Ambulatory surgery centers",
          "Urgent care centers and networks",
          "Academic medical centers"
        ],
        businessOutcomes: [
          "Reduce patient wait times by 40%",
          "Improve bed utilization by 25%",
          "Support clinical decision-making with AI insights",
          "Optimize staff scheduling and reduce overtime",
          "Reduce operational costs by 30%"
        ]
      },
      {
        id: "diagnostic-labs-imaging",
        name: "Diagnostic Labs & Imaging Centers",
        description: "Diagnostic centers with AI-powered image analysis, report generation, and workflow automation.",
        icon: "🔬",
        tagline: "AI-Powered Diagnostic & Imaging Excellence Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help diagnostic labs and imaging centers build AI-native platforms that enhance accuracy and speed. From AI-assisted radiology reading to automated report generation, we design solutions that streamline workflows while ensuring quality consistency. We build accuracy-first, AI-powered diagnostic systems.",
        whyChoose: {
          intro: "Diagnostic services require accuracy, speed, and quality consistency at scale.",
          points: [
            "AI-first medical image analysis and interpretation",
            "Automated report generation with natural language",
            "Lab workflow optimization and automation",
            "Quality control monitoring and assurance",
            "Built for scale across diagnostic modalities"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled diagnostic solutions, including:",
          solutions: [
            "AI-assisted radiology reading platforms",
            "Automated lab result interpretation systems",
            "Report generation and distribution automation",
            "Quality control monitoring dashboards",
            "Patient result notification systems",
            "Workflow optimization tools",
            "Integration platforms for LIMS and PACS"
          ],
          footer: "All solutions are FDA-aware, HIPAA-compliant, and clinically validated."
        },
        coreCapabilities: [
          "Medical imaging AI for multiple modalities",
          "Lab value analysis and interpretation algorithms",
          "Natural language report generation",
          "Anomaly detection and flagging systems",
          "Workflow automation and optimization",
          "Quality assurance and control monitoring",
          "Turnaround time tracking and optimization",
          "Patient and provider communication automation"
        ],
        idealFor: [
          "Radiology practices and imaging centers",
          "Clinical laboratories and reference labs",
          "Pathology labs and specialty diagnostics",
          "Standalone imaging centers",
          "Hospital laboratory departments"
        ],
        businessOutcomes: [
          "Improve diagnostic accuracy with AI assistance",
          "Reduce report turnaround time by 50%",
          "Automate routine analyses and workflows",
          "Ensure quality consistency across all tests",
          "Scale diagnostic capacity without proportional staffing"
        ]
      },
      {
        id: "telemedicine-virtual-care",
        name: "Telemedicine & Virtual Care",
        description: "Virtual healthcare platforms with video consultations, symptom checking, and remote monitoring.",
        icon: "📱",
        tagline: "AI-Powered Virtual Care & Telemedicine Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help telemedicine providers build AI-native platforms that scale virtual care effectively. From intelligent symptom assessment to remote patient monitoring, we design solutions that enhance care access while maintaining quality. We build access-first, AI-powered virtual care systems.",
        whyChoose: {
          intro: "Virtual care requires intelligent triage, seamless consultations, and effective remote monitoring.",
          points: [
            "AI-first symptom assessment and intelligent triage",
            "Enhanced video consultation with AI features",
            "Remote patient monitoring with smart alerts",
            "Post-visit follow-up automation and care gaps",
            "Built for scale across patient populations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled telemedicine solutions, including:",
          solutions: [
            "AI symptom assessment and triage platforms",
            "Virtual consultation enhancement tools",
            "Remote patient monitoring alert systems",
            "Post-visit follow-up automation",
            "Chronic condition management platforms",
            "Patient intake and documentation automation",
            "Virtual waiting room and queue management"
          ],
          footer: "All solutions are HIPAA-compliant, telehealth platform integrated, and mobile-first."
        },
        coreCapabilities: [
          "Symptom analysis and triage algorithms",
          "Video consultation AI enhancement features",
          "Vital sign monitoring and alerting AI",
          "Natural language patient intake processing",
          "Care gap identification and intervention",
          "Patient scheduling and reminder automation",
          "Clinical documentation assistance",
          "Multi-channel patient communication"
        ],
        idealFor: [
          "Telemedicine platform providers",
          "Virtual care and telehealth companies",
          "Remote monitoring device companies",
          "Digital health startups",
          "Health systems with virtual care programs"
        ],
        businessOutcomes: [
          "Scale virtual consultations efficiently",
          "Triage patients accurately and reduce no-shows",
          "Enable effective remote monitoring programs",
          "Reduce unnecessary in-person visits by 40%",
          "Improve access to care for underserved populations"
        ]
      },
      {
        id: "pharmacies-medical-stores",
        name: "Pharmacies & Medical Stores",
        description: "Pharmacy management with inventory prediction, prescription processing, and medication reminders.",
        icon: "💊",
        tagline: "AI-Powered Pharmacy Operations & Patient Safety Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help pharmacies and medical stores build AI-native platforms that optimize operations and ensure medication safety. From inventory demand forecasting to prescription verification, we design solutions that improve efficiency and patient adherence. We build safety-first, AI-powered pharmacy systems.",
        whyChoose: {
          intro: "Pharmacies require medication safety, inventory optimization, and patient adherence support.",
          points: [
            "AI-first inventory demand forecasting and optimization",
            "Prescription verification and drug interaction checks",
            "Medication reminder and adherence automation",
            "Patient counseling and communication support",
            "Built for scale across pharmacy locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled pharmacy solutions, including:",
          solutions: [
            "Inventory demand forecasting platforms",
            "Prescription verification and processing systems",
            "Drug interaction screening automation",
            "Medication reminder and adherence tools",
            "Patient counseling support platforms",
            "Pharmacy workflow optimization tools",
            "Multi-location pharmacy management dashboards"
          ],
          footer: "All solutions are HIPAA-compliant, pharmacy management integrated, and patient-safe."
        },
        coreCapabilities: [
          "Demand forecasting for pharmaceutical inventory",
          "Drug database and interaction checking AI",
          "Natural language prescription processing",
          "Patient communication and reminder automation",
          "Clinical decision support for pharmacists",
          "Workflow optimization and efficiency tracking",
          "Regulatory compliance monitoring",
          "Patient adherence analytics and intervention"
        ],
        idealFor: [
          "Retail pharmacy chains and independents",
          "Hospital pharmacy departments",
          "Specialty and compounding pharmacies",
          "Mail-order and online pharmacies",
          "Pharmacy benefit managers"
        ],
        businessOutcomes: [
          "Reduce medication errors with AI verification",
          "Optimize inventory levels and reduce waste",
          "Improve patient adherence by 35%",
          "Speed up prescription processing by 50%",
          "Enhance customer service and satisfaction"
        ]
      },
      {
        id: "health-insurance-providers",
        name: "Health Insurance Providers",
        description: "Insurance solutions with claims processing, fraud detection, and policy management.",
        icon: "🛡️",
        tagline: "AI-Powered Health Insurance Operations Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help health insurance providers build AI-native platforms that streamline operations and detect fraud. From automated claims adjudication to member engagement, we design solutions that reduce costs while improving satisfaction. We build efficiency-first, AI-powered health insurance systems.",
        whyChoose: {
          intro: "Health insurance requires claims efficiency, fraud prevention, and member satisfaction at scale.",
          points: [
            "AI-first automated claims adjudication and processing",
            "Fraud and abuse detection before payment",
            "Member service automation and engagement",
            "Prior authorization processing optimization",
            "Built for scale across member populations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled health insurance solutions, including:",
          solutions: [
            "Automated claims adjudication platforms",
            "Fraud and abuse detection systems",
            "Member service automation chatbots",
            "Prior authorization processing tools",
            "Benefits explanation AI platforms",
            "Policy administration automation",
            "Member engagement and communication systems"
          ],
          footer: "All solutions are HIPAA-compliant, payer system integrated, and regulatory-aware."
        },
        coreCapabilities: [
          "Claims analysis and adjudication algorithms",
          "Fraud pattern detection and prevention AI",
          "Natural language for member query handling",
          "Policy matching and eligibility verification",
          "Risk stratification and population health models",
          "Prior authorization workflow automation",
          "Member engagement scoring and outreach",
          "Regulatory compliance monitoring"
        ],
        idealFor: [
          "Health insurance companies and payers",
          "Third-party administrators (TPAs)",
          "Self-insured employers and coalitions",
          "Medicare Advantage and supplement plans",
          "Medicaid managed care organizations"
        ],
        businessOutcomes: [
          "Reduce claims processing time by 60%",
          "Detect fraud before payment with 95% accuracy",
          "Improve member satisfaction scores by 40%",
          "Automate policy administration tasks",
          "Lower operational costs by 35%"
        ]
      },
      {
        id: "medical-device-companies",
        name: "Medical Device Companies",
        description: "Medical device manufacturers with quality control, regulatory compliance, and customer support.",
        icon: "🩺",
        tagline: "AI-Powered Medical Device Innovation & Compliance Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help medical device companies build AI-native platforms that accelerate innovation while ensuring compliance. From manufacturing quality inspection to regulatory automation, we design solutions that improve quality and speed to market. We build quality-first, AI-powered medical device systems.",
        whyChoose: {
          intro: "Medical device companies require quality assurance, regulatory compliance, and market responsiveness.",
          points: [
            "AI-first manufacturing quality inspection and control",
            "Regulatory document automation and submission support",
            "Post-market surveillance and adverse event detection",
            "Customer complaint analysis and resolution",
            "Built for scale across product lines and markets"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled medical device solutions, including:",
          solutions: [
            "Manufacturing quality inspection platforms",
            "Regulatory document automation systems",
            "Post-market surveillance dashboards",
            "Customer complaint analysis tools",
            "Device performance analytics platforms",
            "Training and certification management",
            "Field service optimization tools"
          ],
          footer: "All solutions are FDA/CE compliant, validated, and quality management integrated."
        },
        coreCapabilities: [
          "Computer vision for manufacturing inspection",
          "Document analysis for regulatory submissions",
          "Adverse event detection and reporting AI",
          "Customer support chatbots and automation",
          "Predictive maintenance for connected devices",
          "Quality metrics tracking and trending",
          "Complaint pattern analysis and prevention",
          "Training content and compliance tracking"
        ],
        idealFor: [
          "Medical device manufacturers",
          "Diagnostic device and equipment companies",
          "Surgical equipment and instrument makers",
          "Connected health and IoMT device companies",
          "Medical supply and distribution companies"
        ],
        businessOutcomes: [
          "Improve product quality with AI inspection",
          "Accelerate regulatory submissions by 40%",
          "Monitor device performance proactively",
          "Enhance customer support and satisfaction",
          "Reduce compliance risk and audit findings"
        ]
      },
      {
        id: "wellness-fitness-centers",
        name: "Wellness & Fitness Centers",
        description: "Wellness centers with personalized programs, progress tracking, and member engagement.",
        icon: "🧘",
        tagline: "AI-Powered Wellness & Fitness Experience Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help wellness and fitness centers build AI-native platforms that personalize health journeys. From custom workout generation to nutrition planning, we design solutions that keep members engaged and achieving their goals. We build member-first, AI-powered wellness systems.",
        whyChoose: {
          intro: "Wellness centers require personalization, engagement, and progress tracking at scale.",
          points: [
            "AI-first personalized workout and nutrition programs",
            "Progress tracking with wearable data integration",
            "Member engagement automation and gamification",
            "Class recommendation and scheduling optimization",
            "Built for scale across member populations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled wellness and fitness solutions, including:",
          solutions: [
            "Personalized workout generation platforms",
            "Nutrition plan customization systems",
            "Progress tracking and analytics dashboards",
            "Member engagement automation tools",
            "Class recommendation and booking platforms",
            "Trainer scheduling and management",
            "Wellness challenge and gamification systems"
          ],
          footer: "All solutions are mobile-first, wearable-integrated, and engagement-optimized."
        },
        coreCapabilities: [
          "Fitness program AI for personalized plans",
          "Nutritional analysis and recommendation algorithms",
          "Wearable data integration and insights",
          "Engagement prediction and intervention models",
          "Chatbots for wellness support and motivation",
          "Progress visualization and milestone tracking",
          "Social features and community building",
          "Trainer matching and session optimization"
        ],
        idealFor: [
          "Fitness centers and gym chains",
          "Yoga and pilates studios",
          "Wellness retreats and spas",
          "Corporate wellness programs",
          "Fitness and wellness app companies"
        ],
        businessOutcomes: [
          "Increase member retention by 40%",
          "Personalize fitness programs at scale",
          "Track progress effectively with AI insights",
          "Boost member engagement and satisfaction",
          "Scale personal training efficiently"
        ]
      },
      {
        id: "mental-health-counseling",
        name: "Mental Health & Counseling Services",
        description: "Mental health services with appointment scheduling, progress monitoring, and crisis support.",
        icon: "🧠",
        tagline: "AI-Powered Mental Health Access & Care Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help mental health services build AI-native platforms that expand access to care. From therapist-patient matching to treatment progress monitoring, we design solutions that support care delivery while reducing administrative burden. We build access-first, AI-powered mental health systems.",
        whyChoose: {
          intro: "Mental health services require access expansion, care matching, and outcome tracking.",
          points: [
            "AI-first therapist-patient matching algorithms",
            "Treatment progress tracking and monitoring",
            "Between-session support and engagement tools",
            "Crisis resource provision and escalation",
            "Built for scale across provider networks"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled mental health solutions, including:",
          solutions: [
            "Therapist-patient matching platforms",
            "Treatment progress tracking systems",
            "Between-session support tools",
            "Crisis resource and escalation systems",
            "Appointment scheduling automation",
            "Outcome measurement platforms",
            "Provider and patient communication tools"
          ],
          footer: "All solutions are HIPAA-compliant, clinically informed, and crisis-aware."
        },
        coreCapabilities: [
          "Therapist matching algorithms based on needs",
          "Symptom tracking and progress monitoring AI",
          "Natural language for supportive interactions",
          "Risk assessment and escalation models",
          "Outcome measurement automation",
          "Appointment scheduling and reminder automation",
          "Treatment plan tracking and adherence",
          "Provider dashboard and analytics"
        ],
        idealFor: [
          "Mental health practices and clinics",
          "Counseling centers and group practices",
          "Teletherapy and digital mental health platforms",
          "Employee assistance programs (EAPs)",
          "Behavioral health organizations"
        ],
        businessOutcomes: [
          "Improve access to mental health care",
          "Match patients with right therapists accurately",
          "Monitor treatment progress effectively",
          "Provide crisis resources when needed",
          "Reduce administrative burden by 50%"
        ]
      },
      {
        id: "home-healthcare-services",
        name: "Home Healthcare Services",
        description: "Home care services with caregiver scheduling, patient monitoring, and care coordination.",
        icon: "🏠",
        tagline: "AI-Powered Home Care Coordination Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help home healthcare services build AI-native platforms that coordinate care effectively. From intelligent caregiver scheduling to remote patient monitoring, we design solutions that improve care quality while keeping families informed. We build coordination-first, AI-powered home care systems.",
        whyChoose: {
          intro: "Home healthcare requires scheduling efficiency, patient monitoring, and family communication.",
          points: [
            "AI-first caregiver scheduling and route optimization",
            "Remote patient health monitoring and alerts",
            "Care plan management and coordination",
            "Family update automation and communication",
            "Built for scale across patient populations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled home healthcare solutions, including:",
          solutions: [
            "Intelligent caregiver scheduling platforms",
            "Remote patient health monitoring systems",
            "Care plan management dashboards",
            "Family update automation tools",
            "Visit verification and documentation systems",
            "Medication management and reminders",
            "Care coordination communication platforms"
          ],
          footer: "All solutions are HIPAA-compliant, mobile-first, and home care workflow optimized."
        },
        coreCapabilities: [
          "Scheduling optimization and route planning algorithms",
          "Remote monitoring AI with smart alerts",
          "Natural language clinical documentation",
          "Care coordination and handoff automation",
          "Risk prediction for patient deterioration",
          "Family communication and update automation",
          "Visit verification with GPS and timestamps",
          "Caregiver performance and quality tracking"
        ],
        idealFor: [
          "Home health agencies and providers",
          "Hospice care providers",
          "Private duty home care companies",
          "Senior care and aging-in-place services",
          "Post-acute care and transitional care providers"
        ],
        businessOutcomes: [
          "Optimize caregiver schedules and reduce travel time",
          "Monitor patients remotely with AI alerts",
          "Coordinate care effectively across team members",
          "Keep families informed with automated updates",
          "Improve care quality and outcomes"
        ]
      },
      {
        id: "healthcare-saas-health-it",
        name: "Healthcare SaaS & Health IT",
        description: "Health technology companies building software for healthcare providers and patients.",
        icon: "💻",
        tagline: "AI-Powered Healthcare Technology & Integration Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help healthcare SaaS and Health IT companies build AI-native platforms with advanced capabilities. From EHR integration to health data analytics, we design solutions that accelerate product development and improve interoperability. We build innovation-first, AI-powered health IT systems.",
        whyChoose: {
          intro: "Health IT companies require integration capabilities, data intelligence, and rapid development.",
          points: [
            "AI-first EHR integration and data normalization",
            "Population health analytics and insights",
            "Patient portal personalization and engagement",
            "Clinical workflow automation capabilities",
            "Built for scale across healthcare customers"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled Health IT solutions, including:",
          solutions: [
            "EHR data integration and normalization platforms",
            "Population health analytics dashboards",
            "Patient portal personalization tools",
            "Clinical workflow automation systems",
            "Healthcare API development platforms",
            "Interoperability and FHIR solutions",
            "Clinical documentation AI assistants"
          ],
          footer: "All solutions are HIPAA-compliant, interoperability-ready, and healthcare-validated."
        },
        coreCapabilities: [
          "Clinical NLP processing and understanding",
          "FHIR and HL7 integration automation",
          "Health data normalization and mapping",
          "Clinical coding and billing AI",
          "Patient engagement algorithms",
          "Population health risk stratification",
          "Real-time clinical decision support APIs",
          "Healthcare analytics and reporting"
        ],
        idealFor: [
          "Healthcare SaaS companies and startups",
          "EHR vendors and health IT companies",
          "Health IT consulting and integration firms",
          "Healthcare data and analytics companies",
          "Digital health platforms and applications"
        ],
        businessOutcomes: [
          "Integrate with major EHRs rapidly",
          "Analyze health data at scale with AI",
          "Improve interoperability across systems",
          "Enhance patient engagement and portal usage",
          "Accelerate product development by 40%"
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
        tagline: "AI-Powered K-12 School Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help K-12 schools build AI-native platforms that support teachers and improve student outcomes. From student information management to early intervention systems, we design solutions that reduce administrative burden while enabling personalized learning support. We build student-first, AI-powered school systems.",
        whyChoose: {
          intro: "K-12 schools require administrative efficiency, student tracking, and parent engagement.",
          points: [
            "AI-first student performance prediction and intervention",
            "Automated parent communication and notifications",
            "Attendance tracking and alert automation",
            "At-risk student identification and support",
            "Built for scale across grades and campuses"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled K-12 school solutions, including:",
          solutions: [
            "Student information management platforms",
            "Automated parent notification systems",
            "Attendance tracking and alert automation",
            "Academic progress monitoring dashboards",
            "Behavior tracking and intervention tools",
            "Teacher productivity and planning tools",
            "School analytics and reporting platforms"
          ],
          footer: "All solutions are FERPA-compliant, SIS-integrated, and education-ready."
        },
        coreCapabilities: [
          "Student performance prediction and modeling",
          "Natural language for parent communication",
          "Pattern recognition for at-risk student identification",
          "Automated report card and progress generation",
          "Scheduling optimization for classes and resources",
          "Behavior pattern analysis and intervention",
          "Parent engagement tracking and improvement",
          "Multi-school district management"
        ],
        idealFor: [
          "Public school districts and systems",
          "Private and independent schools",
          "Charter school networks",
          "International and IB schools",
          "School administrators and principals"
        ],
        businessOutcomes: [
          "Reduce administrative burden on teachers by 40%",
          "Improve parent engagement and communication",
          "Track student progress effectively with AI insights",
          "Identify at-risk students 60% earlier",
          "Personalize learning support at scale"
        ]
      },
      {
        id: "colleges-universities",
        name: "Colleges & Universities",
        description: "Higher education institutions with admissions AI, student success, and research support.",
        icon: "🎓",
        tagline: "AI-Powered Higher Education Success Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help colleges and universities build AI-native platforms that enhance the entire student journey. From admissions optimization to alumni engagement, we design solutions that improve yield, retention, and institutional outcomes. We build success-first, AI-powered higher education systems.",
        whyChoose: {
          intro: "Higher education requires enrollment optimization, student success, and research excellence.",
          points: [
            "AI-first admissions application review and optimization",
            "Student success prediction and intervention systems",
            "Research funding matching and support",
            "Alumni engagement automation and fundraising",
            "Built for scale across departments and programs"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled higher education solutions, including:",
          solutions: [
            "Admissions application review platforms",
            "Student success prediction and intervention tools",
            "Research funding matching systems",
            "Alumni engagement automation platforms",
            "Course scheduling optimization tools",
            "Enrollment management dashboards",
            "Institutional effectiveness analytics"
          ],
          footer: "All solutions are FERPA-compliant, SIS-integrated, and higher education ready."
        },
        coreCapabilities: [
          "Application analysis and yield prediction AI",
          "Student risk prediction and early alert models",
          "Research matching and grant discovery algorithms",
          "Engagement scoring and donor cultivation",
          "Resource optimization and scheduling AI",
          "Course demand forecasting",
          "Retention analysis and intervention",
          "Multi-campus and system-wide analytics"
        ],
        idealFor: [
          "Universities and four-year colleges",
          "Community and junior colleges",
          "Graduate and professional schools",
          "Online and hybrid institutions",
          "Higher education administrators and deans"
        ],
        businessOutcomes: [
          "Improve enrollment yield by 20%",
          "Increase student retention rates by 15%",
          "Support research productivity and funding success",
          "Engage alumni effectively for giving and mentorship",
          "Optimize resource allocation across programs"
        ]
      },
      {
        id: "coaching-training-institutes",
        name: "Coaching & Training Institutes",
        description: "Coaching centers with batch management, performance tracking, and personalized study plans.",
        icon: "📖",
        tagline: "AI-Powered Coaching & Training Excellence Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help coaching and training institutes build AI-native platforms that personalize preparation for every student. From batch management to adaptive study plans, we design solutions that maximize exam success rates. We build results-first, AI-powered coaching systems.",
        whyChoose: {
          intro: "Coaching institutes require personalization, performance tracking, and resource optimization.",
          points: [
            "AI-first adaptive learning and study plan generation",
            "Individual and batch performance tracking",
            "Weak area identification and targeted intervention",
            "Test result analysis and improvement insights",
            "Built for scale across batches and locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled coaching institute solutions, including:",
          solutions: [
            "Batch scheduling and management platforms",
            "Individual performance tracking dashboards",
            "Personalized study plan generation tools",
            "Test result analysis and insights systems",
            "Parent progress reporting automation",
            "Teacher productivity and assignment tools",
            "Multi-location institute management"
          ],
          footer: "All solutions are mobile-first, analytics-driven, and coaching-optimized."
        },
        coreCapabilities: [
          "Adaptive learning algorithms for personalization",
          "Performance prediction and improvement models",
          "Study plan optimization based on goals",
          "Test analytics and question-level insights AI",
          "Batch optimization and resource allocation",
          "Parent communication automation",
          "Teacher performance and workload tracking",
          "Competitive benchmarking and ranking"
        ],
        idealFor: [
          "Test preparation institutes",
          "Private tutoring centers",
          "Competitive exam coaching centers",
          "Skill and professional training centers",
          "Language and certification schools"
        ],
        businessOutcomes: [
          "Personalize learning for each student effectively",
          "Track batch and individual performance in real-time",
          "Identify weak areas quickly for targeted focus",
          "Optimize teaching resources and faculty time",
          "Improve exam success rates by 35%"
        ]
      },
      {
        id: "online-learning-platforms",
        name: "Online Learning Platforms (EdTech)",
        description: "E-learning platforms with adaptive learning, content recommendations, and engagement analytics.",
        icon: "💻",
        tagline: "AI-Powered EdTech & Online Learning Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help EdTech companies build AI-native platforms that adapt to every learner. From personalized content recommendations to engagement optimization, we design solutions that increase completion rates and learning outcomes. We build learner-first, AI-powered e-learning systems.",
        whyChoose: {
          intro: "EdTech platforms require personalization, engagement, and scalable learning experiences.",
          points: [
            "AI-first content recommendation and learning paths",
            "Adaptive difficulty and pacing algorithms",
            "Engagement tracking and intervention nudges",
            "Gamification and motivation systems",
            "Built for scale across global learner populations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled EdTech solutions, including:",
          solutions: [
            "Personalized content recommendation engines",
            "Adaptive learning path generation platforms",
            "Engagement tracking and nudge systems",
            "Gamification and rewards platforms",
            "Learning outcome prediction tools",
            "AI tutoring and Q&A assistants",
            "Learner analytics and insights dashboards"
          ],
          footer: "All solutions are cloud-native, mobile-first, and learning science-informed."
        },
        coreCapabilities: [
          "Content recommendation engines and personalization",
          "Adaptive difficulty and mastery algorithms",
          "Engagement prediction and re-engagement models",
          "Natural language Q&A and tutoring AI",
          "Video content analysis and interaction",
          "Learning path optimization",
          "A/B testing for content effectiveness",
          "Cross-platform learning continuity"
        ],
        idealFor: [
          "MOOC and online course platforms",
          "Corporate e-learning providers",
          "K-12 online learning platforms",
          "Language learning apps and platforms",
          "Skill development and upskilling platforms"
        ],
        businessOutcomes: [
          "Increase course completion rates by 40%",
          "Personalize learning journeys for every user",
          "Improve learner engagement and satisfaction",
          "Optimize content effectiveness with data",
          "Scale personalized education globally"
        ]
      },
      {
        id: "corporate-training-ld",
        name: "Corporate Training & L&D",
        description: "Corporate learning with skill gap analysis, training automation, and compliance tracking.",
        icon: "👔",
        tagline: "AI-Powered Corporate Learning & Development Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help corporate L&D teams build AI-native platforms that upskill workforces effectively. From skill gap analysis to compliance automation, we design solutions that deliver targeted training with measurable impact. We build impact-first, AI-powered corporate learning systems.",
        whyChoose: {
          intro: "Corporate L&D requires skill intelligence, compliance assurance, and training effectiveness.",
          points: [
            "AI-first skills assessment and gap analysis",
            "Personalized learning path recommendation",
            "Compliance training automation and tracking",
            "Training effectiveness measurement and ROI",
            "Built for scale across global workforces"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled corporate L&D solutions, including:",
          solutions: [
            "Skills assessment and gap analysis platforms",
            "Personalized learning path systems",
            "Compliance training automation tools",
            "Training effectiveness measurement dashboards",
            "Career development planning platforms",
            "Content curation and recommendation engines",
            "Manager and leadership development tools"
          ],
          footer: "All solutions are enterprise-grade, HRIS-integrated, and compliance-ready."
        },
        coreCapabilities: [
          "Skills inference and gap analysis algorithms",
          "Training recommendation engines",
          "Compliance tracking and certification AI",
          "Performance correlation and impact models",
          "Content curation and discovery AI",
          "Learning engagement and completion prediction",
          "Career pathing and succession planning",
          "Multi-format content delivery optimization"
        ],
        idealFor: [
          "Corporate L&D and training teams",
          "HR departments and talent development",
          "Training and consulting companies",
          "LMS vendors and learning platforms",
          "Professional development providers"
        ],
        businessOutcomes: [
          "Identify skill gaps accurately with AI analysis",
          "Automate compliance training and reduce risk",
          "Measure training effectiveness and ROI",
          "Personalize employee development paths",
          "Reduce training costs by 35%"
        ]
      },
      {
        id: "skill-development-vocational",
        name: "Skill Development & Vocational Training",
        description: "Vocational training with hands-on skill tracking, job placement, and industry certification.",
        icon: "🛠️",
        tagline: "AI-Powered Vocational & Skill Development Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help vocational training organizations build AI-native platforms that create career-ready graduates. From hands-on skill assessment to job placement, we design solutions that align training with employer needs. We build employment-first, AI-powered skill development systems.",
        whyChoose: {
          intro: "Vocational training requires practical skill validation, employer alignment, and placement success.",
          points: [
            "AI-first hands-on skill assessment and tracking",
            "Job matching and placement optimization",
            "Certification tracking and verification",
            "Employer requirement and demand matching",
            "Built for scale across programs and industries"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled vocational training solutions, including:",
          solutions: [
            "Hands-on skill assessment platforms",
            "Job matching and placement systems",
            "Certification tracking and renewal tools",
            "Employer requirement matching dashboards",
            "Apprenticeship management platforms",
            "Industry partnership portals",
            "Graduate outcome tracking systems"
          ],
          footer: "All solutions are industry-aligned, employer-connected, and outcome-focused."
        },
        coreCapabilities: [
          "Practical skill assessment AI",
          "Job matching and recommendation algorithms",
          "Certification verification and tracking",
          "Employer demand prediction and alignment",
          "Career path recommendation and guidance",
          "Apprenticeship progress monitoring",
          "Industry competency mapping",
          "Graduate employment outcome analytics"
        ],
        idealFor: [
          "Vocational and trade schools",
          "Technical and career colleges",
          "Workforce development programs",
          "Apprenticeship and internship programs",
          "Government skill development initiatives"
        ],
        businessOutcomes: [
          "Track practical skill development accurately",
          "Connect graduates to jobs 50% faster",
          "Manage industry certifications efficiently",
          "Align training with employer needs precisely",
          "Improve employment outcomes by 40%"
        ]
      },
      {
        id: "competitive-exam-prep",
        name: "Competitive Exam Preparation",
        description: "Exam preparation with practice tests, performance analysis, and personalized study paths.",
        icon: "📝",
        tagline: "AI-Powered Competitive Exam Success Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help exam preparation companies build AI-native platforms that maximize student success. From adaptive practice tests to personalized study strategies, we design solutions that optimize preparation time and predict outcomes. We build success-first, AI-powered exam prep systems.",
        whyChoose: {
          intro: "Exam preparation requires adaptive testing, performance insights, and focused study strategies.",
          points: [
            "AI-first adaptive practice test generation",
            "Performance pattern analysis and insights",
            "Weak area identification and focused practice",
            "Study schedule optimization for each student",
            "Built for scale across exam types and students"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled exam preparation solutions, including:",
          solutions: [
            "Adaptive practice test generation platforms",
            "Performance pattern analysis dashboards",
            "Weak area identification and focus tools",
            "Study schedule optimization systems",
            "Score prediction and tracking platforms",
            "Question bank management and analytics",
            "Peer comparison and motivation tools"
          ],
          footer: "All solutions are mobile-first, analytics-driven, and exam-pattern aligned."
        },
        coreCapabilities: [
          "Adaptive testing algorithms for personalization",
          "Performance analytics and pattern recognition AI",
          "Study path optimization based on goals",
          "Question difficulty calibration and IRT models",
          "Time management analysis and optimization",
          "Score prediction and readiness assessment",
          "Exam pattern analysis and alignment",
          "Multi-exam and multi-subject support"
        ],
        idealFor: [
          "Test preparation companies and platforms",
          "Exam coaching centers and institutes",
          "Self-study and practice platforms",
          "Professional certification prep providers",
          "Academic competition prep organizations"
        ],
        businessOutcomes: [
          "Identify and address weak areas precisely",
          "Generate targeted practice tests automatically",
          "Track preparation progress with AI insights",
          "Predict exam performance accurately",
          "Optimize study time for maximum results"
        ]
      },
      {
        id: "test-certification-providers",
        name: "Test & Certification Providers",
        description: "Testing organizations with exam administration, proctoring, and certification management.",
        icon: "✅",
        tagline: "AI-Powered Assessment & Certification Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help testing and certification organizations build AI-native platforms that deliver secure, scalable assessments. From intelligent proctoring to instant credential verification, we design solutions that maintain integrity while reducing costs. We build integrity-first, AI-powered testing systems.",
        whyChoose: {
          intro: "Testing organizations require exam security, scalable delivery, and credential management.",
          points: [
            "AI-first remote proctoring and cheating detection",
            "Exam scheduling and scalable delivery systems",
            "Certification issuance and lifecycle management",
            "Instant credential verification APIs",
            "Built for scale across global test-taker populations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled testing and certification solutions, including:",
          solutions: [
            "Remote exam proctoring platforms",
            "Exam scheduling and delivery systems",
            "Certification issuance and tracking tools",
            "Credential verification API services",
            "Cheating detection and prevention systems",
            "Exam item analysis and optimization",
            "Test-taker management dashboards"
          ],
          footer: "All solutions are secure, scalable, and assessment standards compliant."
        },
        coreCapabilities: [
          "AI-powered proctoring and monitoring",
          "Anomaly detection for cheating and fraud",
          "Exam item analysis and psychometrics AI",
          "Credential verification and blockchain options",
          "Scheduling optimization for test centers",
          "Adaptive testing and CAT algorithms",
          "Multi-modal assessment delivery",
          "Global test center network management"
        ],
        idealFor: [
          "Testing organizations and assessment providers",
          "Certification and credentialing bodies",
          "Professional associations with certifications",
          "Educational testing services",
          "Government and regulatory exam providers"
        ],
        businessOutcomes: [
          "Scale exam delivery securely worldwide",
          "Detect cheating effectively with AI",
          "Manage certifications efficiently at scale",
          "Enable instant credential verification",
          "Reduce administration costs by 50%"
        ]
      },
      {
        id: "education-content-publishers",
        name: "Education Content Publishers",
        description: "Educational publishers with content creation, distribution, and usage analytics.",
        icon: "📚",
        tagline: "AI-Powered Educational Publishing Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help educational publishers build AI-native platforms that transform content creation and distribution. From AI-assisted authoring to personalized content delivery, we design solutions that increase engagement and effectiveness. We build content-first, AI-powered publishing systems.",
        whyChoose: {
          intro: "Educational publishers require content efficiency, distribution intelligence, and learner engagement.",
          points: [
            "AI-first content creation and authoring assistance",
            "Content usage analytics and effectiveness tracking",
            "Rights and licensing management automation",
            "Adaptive content personalization for learners",
            "Built for scale across formats and markets"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled educational publishing solutions, including:",
          solutions: [
            "AI-assisted content creation platforms",
            "Content usage analytics dashboards",
            "Rights and licensing management systems",
            "Adaptive content personalization tools",
            "Market demand analysis platforms",
            "Multi-format content delivery systems",
            "Author and contributor management tools"
          ],
          footer: "All solutions are DRM-capable, multi-format, and education standards aligned."
        },
        coreCapabilities: [
          "Content generation and authoring AI",
          "Usage pattern analytics and insights",
          "Rights matching and licensing algorithms",
          "Personalization engines for adaptive content",
          "Market prediction and demand models",
          "Multi-format publishing automation",
          "Accessibility and localization AI",
          "Content effectiveness and learning outcome analysis"
        ],
        idealFor: [
          "Textbook and educational publishers",
          "Digital content and courseware providers",
          "Assessment and test item publishers",
          "Educational media and multimedia companies",
          "Open educational resource providers"
        ],
        businessOutcomes: [
          "Accelerate content creation by 40%",
          "Track content effectiveness with analytics",
          "Manage rights efficiently and reduce risk",
          "Personalize content for individual learners",
          "Optimize distribution channels and revenue"
        ]
      },
      {
        id: "learning-management-saas",
        name: "Learning Management SaaS Providers",
        description: "LMS platforms with course management, student tracking, and integration capabilities.",
        icon: "🖥️",
        tagline: "AI-Powered Learning Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help LMS providers build AI-native platforms that differentiate with intelligent features. From course optimization to predictive analytics, we design solutions that help educators make data-driven decisions. We build educator-first, AI-powered learning management systems.",
        whyChoose: {
          intro: "LMS providers require intelligent course management, learner insights, and integration capabilities.",
          points: [
            "AI-first course organization and optimization",
            "Automated progress tracking and prediction",
            "Seamless third-party tool integration",
            "Learning analytics and actionable insights",
            "Built for scale across institutions and enterprises"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled LMS solutions, including:",
          solutions: [
            "Intelligent course organization platforms",
            "Automated progress tracking systems",
            "Third-party tool integration frameworks",
            "Learning analytics dashboards",
            "Content recommendation within LMS",
            "Instructor productivity tools",
            "API and integration development platforms"
          ],
          footer: "All solutions are LTI-compliant, API-first, and education standards ready."
        },
        coreCapabilities: [
          "Course optimization and sequencing algorithms",
          "Progress prediction and early alert models",
          "Integration AI for tool and system mapping",
          "Analytics and reporting automation",
          "Recommendation engines for content and paths",
          "Instructor workload optimization",
          "Multi-tenant and white-label capabilities",
          "xAPI and learning record store integration"
        ],
        idealFor: [
          "LMS vendors and platform providers",
          "Corporate learning platform companies",
          "Academic LMS and SIS providers",
          "Training management system vendors",
          "EdTech infrastructure companies"
        ],
        businessOutcomes: [
          "Improve course completion rates by 30%",
          "Track student progress effectively with AI",
          "Integrate seamlessly with existing tools",
          "Provide actionable analytics for educators",
          "Differentiate with AI-powered features"
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
        tagline: "AI-Powered Local Retail & Showroom Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help local retail stores and showrooms build AI-native platforms that compete with big retailers. From smart inventory management to personalized customer engagement, we design solutions that help local businesses thrive. We build customer-first, AI-powered local retail systems.",
        whyChoose: {
          intro: "Local retail requires inventory optimization, customer personalization, and sales intelligence.",
          points: [
            "AI-first demand forecasting and inventory management",
            "Personalized customer outreach and engagement",
            "Sales trend analysis and performance tracking",
            "Loyalty program optimization and retention",
            "Built for scale across store locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled local retail solutions, including:",
          solutions: [
            "Smart inventory reordering platforms",
            "Personalized customer outreach systems",
            "Sales trend analysis dashboards",
            "Loyalty program management tools",
            "Staff scheduling optimization platforms",
            "Customer preference tracking systems",
            "Multi-location retail management"
          ],
          footer: "All solutions are affordable, easy to use, and local business optimized."
        },
        coreCapabilities: [
          "Demand forecasting for local markets",
          "Customer preference learning and personalization",
          "Sales pattern analysis and prediction",
          "Loyalty optimization and retention AI",
          "Natural language for customer inquiries",
          "Staff scheduling and shift optimization",
          "Inventory alerts and reorder automation",
          "Local competitor and market analysis"
        ],
        idealFor: [
          "Boutique stores and specialty shops",
          "Showroom businesses and galleries",
          "Gift shops and novelty stores",
          "Local retail chains",
          "Family-owned retail businesses"
        ],
        businessOutcomes: [
          "Never run out of popular items again",
          "Know your customers personally with AI insights",
          "Track what sells and when accurately",
          "Build lasting customer loyalty",
          "Compete effectively with online retailers"
        ]
      },
      {
        id: "restaurants-cafes-food",
        name: "Restaurants, Cafes & Food Outlets",
        description: "Food businesses with table management, order automation, and customer feedback analysis.",
        icon: "🍽️",
        tagline: "AI-Powered Restaurant & Food Service Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help restaurants, cafes, and food outlets build AI-native platforms that delight diners and optimize operations. From smart reservations to menu optimization, we design solutions that keep customers coming back. We build hospitality-first, AI-powered food service systems.",
        whyChoose: {
          intro: "Food businesses require operational efficiency, customer satisfaction, and menu intelligence.",
          points: [
            "AI-first reservation management and table optimization",
            "Order automation and kitchen workflow efficiency",
            "Menu item performance analysis and pricing",
            "Review monitoring and sentiment analysis",
            "Built for scale across restaurant locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled restaurant solutions, including:",
          solutions: [
            "Smart reservation management platforms",
            "Order taking and processing automation",
            "Menu item performance dashboards",
            "Review monitoring and response tools",
            "Kitchen workflow optimization systems",
            "Customer engagement and loyalty platforms",
            "Multi-location restaurant management"
          ],
          footer: "All solutions are POS-integrated, mobile-first, and restaurant-optimized."
        },
        coreCapabilities: [
          "Reservation optimization and table management",
          "Voice and digital ordering AI",
          "Menu analytics and pricing optimization",
          "Sentiment analysis for reviews and feedback",
          "Demand prediction and prep planning",
          "Staff scheduling and labor optimization",
          "Inventory tracking and waste reduction",
          "Customer preference and dietary tracking"
        ],
        idealFor: [
          "Full-service restaurants and bistros",
          "Cafes and coffee shops",
          "Fast food and quick-service outlets",
          "Food trucks and mobile vendors",
          "Cloud kitchens and delivery-only restaurants"
        ],
        businessOutcomes: [
          "Reduce customer wait times by 40%",
          "Automate order taking and reduce errors",
          "Optimize menu with data-driven insights",
          "Respond to reviews quickly and professionally",
          "Increase table turnover and revenue"
        ]
      },
      {
        id: "salons-spas-personal-care",
        name: "Salons, Spas & Personal Care",
        description: "Beauty businesses with appointment booking, staff scheduling, and client management.",
        icon: "💇",
        tagline: "AI-Powered Salon & Spa Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help salons, spas, and personal care businesses build AI-native platforms that elevate client experiences. From intelligent booking to personalized service recommendations, we design solutions that build lasting client relationships. We build client-first, AI-powered beauty business systems.",
        whyChoose: {
          intro: "Beauty businesses require booking efficiency, client personalization, and service optimization.",
          points: [
            "AI-first online booking and slot optimization",
            "Staff scheduling and stylist matching",
            "Client history and preference tracking",
            "Service package recommendations and upselling",
            "Built for scale across salon locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled salon and spa solutions, including:",
          solutions: [
            "Online appointment booking platforms",
            "Staff schedule optimization tools",
            "Client history and preference systems",
            "Service package recommendation engines",
            "No-show prediction and prevention tools",
            "Client communication automation",
            "Multi-location salon management"
          ],
          footer: "All solutions are mobile-first, booking-integrated, and beauty business optimized."
        },
        coreCapabilities: [
          "Booking optimization and slot filling algorithms",
          "Client preference learning and personalization",
          "Schedule optimization for staff and services",
          "Recommendation engines for services and products",
          "Communication automation for reminders and follow-ups",
          "No-show prediction and intervention",
          "Revenue optimization and pricing intelligence",
          "Loyalty program and retention tracking"
        ],
        idealFor: [
          "Hair salons and styling studios",
          "Nail salons and beauty bars",
          "Day spas and wellness centers",
          "Barbershops and grooming studios",
          "Med spas and aesthetic clinics"
        ],
        businessOutcomes: [
          "Fill appointment slots automatically",
          "Match clients with the right stylists",
          "Remember every client's preferences",
          "Reduce no-shows by 50%",
          "Upsell services naturally with AI"
        ]
      },
      {
        id: "gyms-yoga-fitness",
        name: "Gyms, Yoga & Fitness Studios",
        description: "Fitness centers with membership management, class scheduling, and member engagement.",
        icon: "🏋️",
        tagline: "AI-Powered Fitness Studio Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help gyms, yoga studios, and fitness centers build AI-native platforms that build thriving communities. From membership management to personalized workout recommendations, we design solutions that reduce churn and increase satisfaction. We build community-first, AI-powered fitness systems.",
        whyChoose: {
          intro: "Fitness businesses require member retention, class optimization, and engagement.",
          points: [
            "AI-first membership management and renewal prediction",
            "Class scheduling and demand-based capacity planning",
            "Member workout personalization and progress tracking",
            "Re-engagement campaigns for inactive members",
            "Built for scale across studio locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled fitness studio solutions, including:",
          solutions: [
            "Membership management and renewal platforms",
            "Class scheduling and waitlist systems",
            "Member workout personalization tools",
            "Re-engagement campaign automation",
            "Trainer scheduling and management platforms",
            "Member progress tracking dashboards",
            "Multi-location fitness management"
          ],
          footer: "All solutions are member-app integrated, mobile-first, and fitness-optimized."
        },
        coreCapabilities: [
          "Churn prediction and prevention models",
          "Class demand forecasting and scheduling",
          "Personalization algorithms for workouts",
          "Engagement scoring and intervention AI",
          "Communication automation for members",
          "Trainer matching and scheduling optimization",
          "Progress tracking and goal setting",
          "Revenue optimization and pricing"
        ],
        idealFor: [
          "Gyms and fitness centers",
          "Yoga and pilates studios",
          "CrossFit boxes and functional fitness",
          "Martial arts studios and dojos",
          "Dance and movement studios"
        ],
        businessOutcomes: [
          "Reduce member churn by 35%",
          "Fill classes efficiently with AI scheduling",
          "Personalize fitness journeys for each member",
          "Re-engage inactive members proactively",
          "Grow your fitness community sustainably"
        ]
      },
      {
        id: "clinics-local-healthcare",
        name: "Clinics & Local Healthcare Centers",
        description: "Local clinics with patient scheduling, records management, and follow-up automation.",
        icon: "⚕️",
        tagline: "AI-Powered Local Clinic Management Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help local clinics and healthcare centers build AI-native platforms that improve patient care while reducing administrative burden. From intelligent scheduling to automated follow-ups, we design solutions that let providers focus on what matters. We build care-first, AI-powered clinic systems.",
        whyChoose: {
          intro: "Local clinics require scheduling efficiency, record organization, and patient engagement.",
          points: [
            "AI-first patient scheduling and optimization",
            "Electronic health record organization and access",
            "Automated appointment reminders and follow-ups",
            "Prescription management and refill automation",
            "Built for scale across clinic locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled local clinic solutions, including:",
          solutions: [
            "Patient appointment scheduling platforms",
            "Electronic health record management systems",
            "Automated appointment reminder tools",
            "Prescription refill automation platforms",
            "Patient communication portals",
            "Clinical workflow optimization tools",
            "Multi-location clinic management"
          ],
          footer: "All solutions are HIPAA-compliant, EHR-integrated, and clinic-optimized."
        },
        coreCapabilities: [
          "Scheduling optimization and no-show prevention",
          "Document management and record organization AI",
          "Follow-up prediction and reminder automation",
          "Communication automation for patients",
          "Clinical workflow efficiency optimization",
          "Prescription tracking and refill management",
          "Patient satisfaction monitoring",
          "Revenue cycle optimization"
        ],
        idealFor: [
          "Family medicine practices",
          "Dental clinics and offices",
          "Specialist and specialty clinics",
          "Urgent care and walk-in centers",
          "Physical therapy and rehab clinics"
        ],
        businessOutcomes: [
          "Reduce scheduling headaches with AI optimization",
          "Keep patient records organized and accessible",
          "Never miss a patient follow-up",
          "Improve patient satisfaction scores",
          "Streamline prescription management"
        ]
      },
      {
        id: "real-estate-agencies-local",
        name: "Real Estate Agencies",
        description: "Local real estate offices with lead management, property listings, and client communication.",
        icon: "🏠",
        tagline: "AI-Powered Local Real Estate Agency Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help local real estate agencies build AI-native platforms that close more deals. From intelligent lead management to automated client communication, we design solutions that never let a lead go cold. We build agent-first, AI-powered local real estate systems.",
        whyChoose: {
          intro: "Local real estate agencies require lead management, property marketing, and client engagement.",
          points: [
            "AI-first lead capture and nurturing automation",
            "Property listing optimization and marketing",
            "Automated client follow-ups and communication",
            "Local market analysis and pricing insights",
            "Built for scale across agents and listings"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled local real estate solutions, including:",
          solutions: [
            "Lead capture and nurturing platforms",
            "Property listing optimization tools",
            "Automated client follow-up systems",
            "Local market analysis dashboards",
            "Open house management platforms",
            "Agent productivity and CRM tools",
            "Team performance tracking"
          ],
          footer: "All solutions are MLS-integrated, mobile-first, and real estate optimized."
        },
        coreCapabilities: [
          "Lead scoring and prioritization algorithms",
          "Listing optimization and marketing AI",
          "Communication automation for clients",
          "Market analytics and pricing insights",
          "Client matching and recommendation",
          "Open house scheduling and follow-up",
          "Transaction coordination automation",
          "Agent performance tracking"
        ],
        idealFor: [
          "Independent real estate agents",
          "Small and boutique brokerages",
          "Property management offices",
          "Real estate teams and groups",
          "New and growing agents"
        ],
        businessOutcomes: [
          "Respond to leads instantly with AI",
          "Market properties more effectively",
          "Stay in touch with clients automatically",
          "Understand your local market deeply",
          "Win more listings and close more deals"
        ]
      },
      {
        id: "automobile-services-workshops",
        name: "Automobile Services & Workshops",
        description: "Auto service centers with appointment booking, service tracking, and customer communication.",
        icon: "🚗",
        tagline: "AI-Powered Auto Service & Workshop Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help auto service centers and workshops build AI-native platforms that run efficiently. From appointment booking to job tracking, we design solutions that keep customers informed and coming back. We build service-first, AI-powered automotive systems.",
        whyChoose: {
          intro: "Auto service centers require appointment efficiency, job tracking, and customer communication.",
          points: [
            "AI-first service appointment booking and optimization",
            "Real-time job status tracking and updates",
            "Parts inventory management and prediction",
            "Customer status updates and communication",
            "Built for scale across service bays and locations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled auto service solutions, including:",
          solutions: [
            "Service appointment booking platforms",
            "Job status tracking systems",
            "Parts inventory management tools",
            "Customer status update automation",
            "Service history tracking databases",
            "Technician scheduling and assignment",
            "Multi-location workshop management"
          ],
          footer: "All solutions are shop-management integrated, mobile-first, and automotive-optimized."
        },
        coreCapabilities: [
          "Appointment optimization and bay utilization",
          "Job tracking and progress monitoring AI",
          "Inventory prediction and reorder automation",
          "Customer communication and update automation",
          "Upsell recommendation based on vehicle history",
          "Technician scheduling and skill matching",
          "Warranty and recall tracking",
          "Customer retention and service reminders"
        ],
        idealFor: [
          "Auto repair shops and garages",
          "Tire and oil change service centers",
          "Body shops and collision repair",
          "Car dealership service departments",
          "Specialty and performance shops"
        ],
        businessOutcomes: [
          "Fill service bays efficiently",
          "Track jobs in real-time across technicians",
          "Never run out of common parts",
          "Keep customers informed automatically",
          "Build repeat business and loyalty"
        ]
      },
      {
        id: "travel-agents-local-tourism",
        name: "Travel Agents & Local Tourism",
        description: "Travel agencies with trip planning, booking management, and customer engagement.",
        icon: "✈️",
        tagline: "AI-Powered Travel Agency & Tourism Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help travel agents and local tourism businesses build AI-native platforms that create unforgettable trips. From personalized itinerary generation to booking management, we design solutions that engage travelers throughout their journey. We build traveler-first, AI-powered travel systems.",
        whyChoose: {
          intro: "Travel agencies require trip planning efficiency, booking management, and traveler engagement.",
          points: [
            "AI-first trip planning and itinerary generation",
            "Booking consolidation and management automation",
            "Personalized travel recommendations and preferences",
            "Travel updates and proactive communication",
            "Built for scale across clients and destinations"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled travel agency solutions, including:",
          solutions: [
            "AI-assisted trip planning platforms",
            "Booking consolidation and management systems",
            "Personalized itinerary generation tools",
            "Travel update and notification automation",
            "Post-trip feedback collection platforms",
            "Client preference and history tracking",
            "Supplier and vendor management"
          ],
          footer: "All solutions are GDS-integrated, mobile-first, and travel-optimized."
        },
        coreCapabilities: [
          "Destination knowledge and recommendation AI",
          "Booking management and consolidation automation",
          "Itinerary optimization and personalization",
          "Traveler preference learning over time",
          "Communication automation for all trip stages",
          "Pricing and deal optimization",
          "Supplier relationship management",
          "Client loyalty and repeat booking"
        ],
        idealFor: [
          "Travel agencies and travel advisors",
          "Tour operators and package providers",
          "Destination management companies",
          "Independent travel consultants",
          "Local tour guides and experience providers"
        ],
        businessOutcomes: [
          "Plan trips faster with AI assistance",
          "Manage bookings easily across suppliers",
          "Create personalized itineraries instantly",
          "Engage travelers proactively throughout their trip",
          "Build loyal customers who return"
        ]
      },
      {
        id: "event-management-services",
        name: "Event Management & Services",
        description: "Event planners with vendor management, scheduling, and event coordination.",
        icon: "🎉",
        tagline: "AI-Powered Event Planning & Coordination Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help event planners and management services build AI-native platforms that execute flawless events. From vendor coordination to budget tracking, we design solutions that ensure every detail is handled. We build experience-first, AI-powered event systems.",
        whyChoose: {
          intro: "Event management requires vendor coordination, budget control, and timeline precision.",
          points: [
            "AI-first event timeline management and tracking",
            "Vendor coordination and performance monitoring",
            "Budget monitoring with real-time alerts",
            "Guest list management and communication",
            "Built for scale across event types and sizes"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled event management solutions, including:",
          solutions: [
            "Event timeline management platforms",
            "Vendor coordination and tracking systems",
            "Budget monitoring and alert tools",
            "Guest list management platforms",
            "Day-of coordination support tools",
            "Client communication automation",
            "Post-event feedback and analytics"
          ],
          footer: "All solutions are mobile-first, collaboration-ready, and event-optimized."
        },
        coreCapabilities: [
          "Planning optimization and timeline algorithms",
          "Vendor matching and performance AI",
          "Budget tracking and variance automation",
          "Timeline prediction and risk models",
          "Communication coordination across stakeholders",
          "Guest management and RSVP tracking",
          "Checklist and task automation",
          "Post-event analytics and improvement"
        ],
        idealFor: [
          "Event planning companies",
          "Wedding planners and coordinators",
          "Corporate event managers",
          "Party and celebration planners",
          "Venue operators and managers"
        ],
        businessOutcomes: [
          "Plan events more efficiently with AI",
          "Manage vendors seamlessly and professionally",
          "Stay on budget with real-time tracking",
          "Never miss a deadline or detail",
          "Delight clients with flawless execution"
        ]
      },
      {
        id: "professional-services",
        name: "Professional Services (CA, Legal, Consultants)",
        description: "Professional service firms with client management, case tracking, and document automation.",
        icon: "⚖️",
        tagline: "AI-Powered Professional Services Practice Platforms",
        overview: "At Nano Flows AI Software Technologies Pvt. Ltd., we help professional service firms build AI-native platforms that serve clients better. From client management to document automation, we design solutions that handle the paperwork so professionals can focus on their expertise. We build expertise-first, AI-powered practice systems.",
        whyChoose: {
          intro: "Professional services require client management, case tracking, and billing accuracy.",
          points: [
            "AI-first client relationship management and tracking",
            "Case and matter tracking with status updates",
            "Document template automation and generation",
            "Time tracking and accurate billing automation",
            "Built for scale across practices and clients"
          ]
        },
        whatWeBuild: {
          intro: "We develop AI-enabled professional services solutions, including:",
          solutions: [
            "Client relationship management platforms",
            "Case and matter tracking systems",
            "Document template automation tools",
            "Time tracking and billing automation",
            "Deadline management and alerting",
            "Client communication portals",
            "Practice analytics and reporting"
          ],
          footer: "All solutions are practice-management integrated, secure, and compliance-aware."
        },
        coreCapabilities: [
          "Client management and relationship AI",
          "Case analytics and status tracking",
          "Document automation and template generation",
          "Billing optimization and time tracking",
          "Deadline prediction and management",
          "Communication automation for clients",
          "Knowledge management and precedent search",
          "Practice performance analytics"
        ],
        idealFor: [
          "Accounting firms and CPAs",
          "Law practices and attorneys",
          "Consulting firms and advisors",
          "Tax preparation services",
          "Financial advisors and planners"
        ],
        businessOutcomes: [
          "Manage client relationships more effectively",
          "Track cases and matters with full visibility",
          "Automate document creation and save time",
          "Bill accurately and timely with tracking",
          "Grow your practice with AI efficiency"
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
