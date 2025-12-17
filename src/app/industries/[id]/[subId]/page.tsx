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
  features: string[];
  detailedDescription: string;
  benefits: string[];
  useCases: string[];
  aiCapabilities: string[];
  targetAudience: string[];
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
        icon: "💳",
        features: ["Payment Automation", "Fraud Detection", "Credit Scoring AI", "Investment Analytics"],
        detailedDescription: "Transform your FinTech startup with cutting-edge AI solutions designed specifically for the financial technology sector. Our autonomous AI agents handle complex payment processing, detect fraudulent transactions in real-time, and provide intelligent credit scoring that adapts to market conditions.",
        benefits: [
          "Reduce payment processing errors by up to 95%",
          "Detect fraud before it impacts your business",
          "Automate credit decisions in seconds, not days",
          "Scale financial operations without scaling headcount",
          "Maintain regulatory compliance automatically"
        ],
        useCases: [
          "Automated payment reconciliation and dispute resolution",
          "Real-time fraud detection and prevention systems",
          "AI-powered credit underwriting and risk assessment",
          "Investment portfolio optimization and rebalancing",
          "Customer onboarding and KYC automation"
        ],
        aiCapabilities: [
          "Natural language processing for document analysis",
          "Machine learning fraud detection models",
          "Predictive analytics for market trends",
          "Automated regulatory reporting",
          "24/7 customer support chatbots"
        ],
        targetAudience: [
          "Payment processing startups",
          "Digital lending platforms",
          "Investment and wealth management apps",
          "Cryptocurrency and blockchain companies",
          "InsurTech startups"
        ]
      },
      {
        id: "healthtech-startups",
        name: "HealthTech Startups",
        description: "Healthcare technology solutions with AI-powered diagnostics, patient engagement, and medical data analytics.",
        icon: "🏥",
        features: ["Telemedicine AI", "Health Analytics", "Patient Engagement", "Medical Imaging AI"],
        detailedDescription: "Revolutionize healthcare delivery with AI solutions built for HealthTech innovators. Our HIPAA-compliant AI systems power telemedicine platforms, analyze medical data at scale, and create personalized patient engagement experiences that improve outcomes.",
        benefits: [
          "Improve diagnostic accuracy with AI-assisted analysis",
          "Reduce patient wait times by 70%",
          "Increase patient engagement and adherence",
          "Scale telehealth operations efficiently",
          "Maintain HIPAA compliance automatically"
        ],
        useCases: [
          "AI-powered symptom checking and triage",
          "Medical image analysis and interpretation",
          "Patient appointment scheduling and reminders",
          "Health data aggregation and analytics",
          "Remote patient monitoring and alerts"
        ],
        aiCapabilities: [
          "Medical natural language processing",
          "Computer vision for diagnostic imaging",
          "Predictive health analytics",
          "Voice-enabled patient interactions",
          "Automated health record management"
        ],
        targetAudience: [
          "Telemedicine platforms",
          "Digital health apps",
          "Medical device companies",
          "Health data analytics startups",
          "Mental health technology companies"
        ]
      },
      {
        id: "edtech-startups",
        name: "EdTech Startups",
        description: "Educational technology platforms with personalized learning, assessment automation, and student engagement tools.",
        icon: "📚",
        features: ["Adaptive Learning", "AI Tutoring", "Assessment Automation", "Learning Analytics"],
        detailedDescription: "Build the future of education with AI that adapts to every learner. Our EdTech solutions create personalized learning paths, automate assessments, and provide real-time insights into student progress and engagement.",
        benefits: [
          "Increase learning outcomes by 40%",
          "Reduce instructor workload significantly",
          "Scale personalized education affordably",
          "Improve student retention rates",
          "Generate actionable learning insights"
        ],
        useCases: [
          "Adaptive learning path generation",
          "AI tutoring and homework assistance",
          "Automated grading and feedback",
          "Student engagement monitoring",
          "Content recommendation engines"
        ],
        aiCapabilities: [
          "Natural language understanding for Q&A",
          "Learning pattern recognition",
          "Automated content generation",
          "Speech recognition for language learning",
          "Plagiarism detection AI"
        ],
        targetAudience: [
          "Online learning platforms",
          "Language learning apps",
          "Test preparation companies",
          "Corporate training platforms",
          "K-12 educational software"
        ]
      },
      {
        id: "proptech-startups",
        name: "PropTech Startups",
        description: "Property technology solutions for real estate management, virtual tours, and property valuation.",
        icon: "🏗️",
        features: ["Property Valuation AI", "Virtual Tours", "Tenant Management", "Market Analytics"],
        detailedDescription: "Disrupt the real estate industry with AI-powered property technology. Our PropTech solutions automate property valuations, create immersive virtual experiences, and provide market intelligence that gives you a competitive edge.",
        benefits: [
          "Instant property valuations with 95% accuracy",
          "Reduce property showing time by 60%",
          "Automate tenant screening and management",
          "Predict market trends before competitors",
          "Scale property operations efficiently"
        ],
        useCases: [
          "Automated property valuation models",
          "AI-generated virtual property tours",
          "Tenant screening and matching",
          "Predictive market analytics",
          "Smart building management"
        ],
        aiCapabilities: [
          "Computer vision for property analysis",
          "Natural language for property descriptions",
          "Predictive pricing models",
          "Automated document processing",
          "Chatbots for property inquiries"
        ],
        targetAudience: [
          "Real estate marketplaces",
          "Property management software",
          "Home valuation platforms",
          "Commercial real estate tech",
          "Smart building companies"
        ]
      },
      {
        id: "hrtech-recruitment-saas",
        name: "HRTech & Recruitment SaaS",
        description: "Human resources and recruitment automation with AI-powered candidate matching and employee management.",
        icon: "👥",
        features: ["Resume Screening AI", "Candidate Matching", "Employee Analytics", "Onboarding Automation"],
        detailedDescription: "Transform talent acquisition and HR operations with intelligent automation. Our HRTech solutions screen candidates in seconds, match talent to opportunities with precision, and streamline the entire employee lifecycle.",
        benefits: [
          "Screen 1000s of resumes in minutes",
          "Improve quality of hire by 50%",
          "Reduce time-to-hire by 65%",
          "Automate repetitive HR tasks",
          "Increase employee retention"
        ],
        useCases: [
          "AI-powered resume screening and ranking",
          "Intelligent candidate-job matching",
          "Automated interview scheduling",
          "Employee performance analytics",
          "Onboarding workflow automation"
        ],
        aiCapabilities: [
          "Resume parsing and analysis",
          "Skill matching algorithms",
          "Sentiment analysis for feedback",
          "Predictive attrition modeling",
          "Chatbots for HR queries"
        ],
        targetAudience: [
          "Recruitment platforms",
          "HR management software",
          "Talent marketplace companies",
          "Employee engagement tools",
          "Workforce analytics platforms"
        ]
      },
      {
        id: "martech-salestech-saas",
        name: "MarTech & SalesTech SaaS",
        description: "Marketing and sales technology with AI-driven lead generation, campaign optimization, and conversion analytics.",
        icon: "📈",
        features: ["Lead Scoring AI", "Campaign Automation", "Sales Forecasting", "Conversion Optimization"],
        detailedDescription: "Supercharge your marketing and sales stack with AI that converts. Our MarTech solutions identify high-value leads, optimize campaigns in real-time, and provide sales intelligence that closes deals faster.",
        benefits: [
          "Increase lead conversion rates by 3x",
          "Reduce customer acquisition costs",
          "Automate personalized marketing at scale",
          "Improve sales forecast accuracy by 40%",
          "Identify best opportunities instantly"
        ],
        useCases: [
          "Predictive lead scoring and prioritization",
          "AI-powered email campaign optimization",
          "Sales pipeline forecasting",
          "Customer journey personalization",
          "A/B testing automation"
        ],
        aiCapabilities: [
          "Predictive analytics for conversions",
          "Natural language generation for content",
          "Customer segmentation AI",
          "Attribution modeling",
          "Conversational AI for sales"
        ],
        targetAudience: [
          "Marketing automation platforms",
          "CRM software companies",
          "Sales enablement tools",
          "Ad tech companies",
          "Customer data platforms"
        ]
      },
      {
        id: "logistics-supply-chain-saas",
        name: "Logistics & Supply Chain SaaS",
        description: "Supply chain management solutions with route optimization, inventory forecasting, and delivery tracking.",
        icon: "🚚",
        features: ["Route Optimization", "Inventory AI", "Demand Forecasting", "Delivery Tracking"],
        detailedDescription: "Optimize every link in the supply chain with AI that predicts, plans, and performs. Our logistics solutions minimize costs, maximize efficiency, and provide end-to-end visibility across complex supply networks.",
        benefits: [
          "Reduce logistics costs by 25%",
          "Improve on-time delivery rates to 98%",
          "Minimize inventory holding costs",
          "Predict demand with 95% accuracy",
          "Automate route planning at scale"
        ],
        useCases: [
          "Dynamic route optimization",
          "Demand forecasting and planning",
          "Warehouse automation",
          "Last-mile delivery optimization",
          "Supplier risk assessment"
        ],
        aiCapabilities: [
          "Machine learning for demand prediction",
          "Optimization algorithms for routing",
          "Computer vision for package processing",
          "IoT data analytics",
          "Predictive maintenance AI"
        ],
        targetAudience: [
          "Logistics management platforms",
          "Fleet management software",
          "Warehouse management systems",
          "Supply chain visibility tools",
          "Freight tech companies"
        ]
      },
      {
        id: "productivity-collaboration-tools",
        name: "Productivity & Collaboration Tools",
        description: "Team productivity and collaboration platforms with AI-powered task management and communication tools.",
        icon: "⚡",
        features: ["Task Automation", "Smart Scheduling", "Meeting AI", "Document Collaboration"],
        detailedDescription: "Boost team productivity with AI that works alongside your team. Our productivity solutions automate routine tasks, optimize schedules, and make collaboration seamless across distributed teams.",
        benefits: [
          "Save 10+ hours per employee weekly",
          "Reduce meeting time by 40%",
          "Automate repetitive workflows",
          "Improve team coordination",
          "Enhance decision-making speed"
        ],
        useCases: [
          "Intelligent task prioritization and assignment",
          "AI meeting summaries and action items",
          "Smart calendar scheduling",
          "Document drafting and editing",
          "Workflow automation"
        ],
        aiCapabilities: [
          "Natural language processing for commands",
          "Meeting transcription and analysis",
          "Smart search across documents",
          "Automated report generation",
          "Context-aware suggestions"
        ],
        targetAudience: [
          "Project management tools",
          "Team communication platforms",
          "Document collaboration software",
          "Workflow automation tools",
          "Virtual workspace providers"
        ]
      },
      {
        id: "vertical-saas",
        name: "Vertical SaaS (Industry-Specific)",
        description: "Industry-specific software solutions tailored for niche markets with specialized AI capabilities.",
        icon: "🎯",
        features: ["Industry Templates", "Specialized Workflows", "Compliance Tools", "Custom Integrations"],
        detailedDescription: "Dominate your niche with AI built for your specific industry. Our vertical SaaS solutions provide deep domain expertise, pre-built workflows, and compliance tools that generic solutions cannot match.",
        benefits: [
          "Industry-specific AI out of the box",
          "Pre-built compliance frameworks",
          "Faster time to value",
          "Deep integration with industry tools",
          "Specialized customer support"
        ],
        useCases: [
          "Industry-specific workflow automation",
          "Regulatory compliance management",
          "Domain-specific analytics",
          "Specialized customer portals",
          "Industry data integration"
        ],
        aiCapabilities: [
          "Domain-trained language models",
          "Industry-specific prediction models",
          "Specialized document processing",
          "Custom entity recognition",
          "Vertical-specific chatbots"
        ],
        targetAudience: [
          "Legal tech companies",
          "Construction software",
          "Agriculture technology",
          "Hospitality software",
          "Non-profit technology"
        ]
      },
      {
        id: "ai-tools-automation-startups",
        name: "AI Tools & Automation Startups",
        description: "AI-native startups building automation tools, intelligent agents, and machine learning platforms.",
        icon: "🤖",
        features: ["AI Agent Development", "ML Platforms", "Automation Tools", "Data Processing AI"],
        detailedDescription: "Build the next generation of AI products with our development platform. We provide the infrastructure, tools, and expertise to help AI-native startups ship faster and scale efficiently.",
        benefits: [
          "Accelerate AI product development",
          "Reduce infrastructure complexity",
          "Scale ML operations efficiently",
          "Access pre-trained models and APIs",
          "Expert AI engineering support"
        ],
        useCases: [
          "AI agent development and deployment",
          "Machine learning model training",
          "Data pipeline automation",
          "AI API development",
          "Intelligent automation platforms"
        ],
        aiCapabilities: [
          "Large language model fine-tuning",
          "Computer vision pipelines",
          "AutoML capabilities",
          "Model serving infrastructure",
          "AI observability and monitoring"
        ],
        targetAudience: [
          "AI-first startups",
          "Automation platform builders",
          "ML infrastructure companies",
          "AI consulting firms",
          "Research-focused startups"
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
        features: ["Risk Assessment AI", "Fraud Detection", "Compliance Automation", "Customer Analytics"],
        detailedDescription: "Enterprise-grade AI solutions for the banking and financial services sector. Our BFSI solutions provide robust risk management, regulatory compliance automation, and customer intelligence that drives growth while maintaining the highest security standards.",
        benefits: [
          "Reduce fraud losses by up to 80%",
          "Automate regulatory compliance reporting",
          "Enhance customer lifetime value",
          "Streamline loan processing",
          "Improve risk assessment accuracy"
        ],
        useCases: [
          "Anti-money laundering detection",
          "Credit risk modeling and scoring",
          "Customer churn prediction",
          "Regulatory reporting automation",
          "Personalized financial advice"
        ],
        aiCapabilities: [
          "Real-time transaction monitoring",
          "Natural language compliance analysis",
          "Predictive risk modeling",
          "Document verification AI",
          "Voice banking assistants"
        ],
        targetAudience: [
          "Commercial and retail banks",
          "Insurance companies",
          "Investment firms",
          "Credit unions",
          "Financial regulators"
        ]
      },
      {
        id: "manufacturing-industrial",
        name: "Manufacturing & Industrial Enterprises",
        description: "Smart manufacturing solutions with predictive maintenance, quality control, and production optimization.",
        icon: "🏭",
        features: ["Predictive Maintenance", "Quality Control AI", "Production Optimization", "Supply Chain AI"],
        detailedDescription: "Transform manufacturing operations with Industry 4.0 AI solutions. Our manufacturing AI predicts equipment failures, ensures quality standards, and optimizes production schedules for maximum efficiency.",
        benefits: [
          "Reduce unplanned downtime by 45%",
          "Improve product quality by 35%",
          "Optimize production efficiency",
          "Lower maintenance costs",
          "Enhance supply chain resilience"
        ],
        useCases: [
          "Predictive equipment maintenance",
          "Visual quality inspection",
          "Production schedule optimization",
          "Inventory optimization",
          "Energy consumption reduction"
        ],
        aiCapabilities: [
          "IoT sensor data analytics",
          "Computer vision for defect detection",
          "Digital twin simulation",
          "Demand forecasting AI",
          "Robotic process automation"
        ],
        targetAudience: [
          "Discrete manufacturers",
          "Process manufacturers",
          "Automotive companies",
          "Aerospace and defense",
          "Consumer goods manufacturers"
        ]
      },
      {
        id: "it-services-consulting",
        name: "IT Services & Consulting Firms",
        description: "Technology consulting and IT service companies with AI-powered project management and service delivery.",
        icon: "💻",
        features: ["Project Automation", "Resource Planning", "Client Analytics", "Service Optimization"],
        detailedDescription: "Elevate IT service delivery with AI that optimizes every project. Our solutions help consulting firms manage resources, predict project outcomes, and deliver exceptional client experiences.",
        benefits: [
          "Improve project delivery success rates",
          "Optimize resource utilization by 30%",
          "Enhance client satisfaction scores",
          "Reduce project overruns",
          "Scale service delivery efficiently"
        ],
        useCases: [
          "Intelligent resource allocation",
          "Project risk prediction",
          "Automated time tracking and billing",
          "Client success monitoring",
          "Knowledge management automation"
        ],
        aiCapabilities: [
          "Resource matching algorithms",
          "Project outcome prediction",
          "Document analysis and search",
          "Automated status reporting",
          "Skills gap analysis"
        ],
        targetAudience: [
          "IT consulting firms",
          "Systems integrators",
          "Managed service providers",
          "Digital agencies",
          "Technology advisory firms"
        ]
      },
      {
        id: "telecom-networking",
        name: "Telecom & Networking Enterprises",
        description: "Telecommunications solutions with network optimization, customer service AI, and infrastructure management.",
        icon: "📡",
        features: ["Network Optimization", "Customer Service AI", "Infrastructure Monitoring", "Traffic Analysis"],
        detailedDescription: "Optimize telecommunications operations with AI that ensures network reliability and customer satisfaction. Our telecom solutions predict network issues, automate customer support, and optimize infrastructure investments.",
        benefits: [
          "Reduce network downtime by 60%",
          "Automate 70% of customer inquiries",
          "Optimize network capacity planning",
          "Reduce customer churn",
          "Improve service quality metrics"
        ],
        useCases: [
          "Network anomaly detection",
          "Predictive capacity planning",
          "Customer complaint resolution",
          "Fraud detection and prevention",
          "Service quality optimization"
        ],
        aiCapabilities: [
          "Network traffic analysis",
          "Customer sentiment monitoring",
          "Predictive maintenance for infrastructure",
          "Voice and text customer support",
          "Usage pattern analytics"
        ],
        targetAudience: [
          "Mobile network operators",
          "Internet service providers",
          "Cable and satellite companies",
          "Network equipment vendors",
          "Telecom tower companies"
        ]
      },
      {
        id: "energy-utilities",
        name: "Energy & Utilities",
        description: "Energy sector solutions with smart grid management, demand forecasting, and sustainability analytics.",
        icon: "⚡",
        features: ["Smart Grid AI", "Demand Forecasting", "Asset Management", "Sustainability Analytics"],
        detailedDescription: "Power the energy transition with AI that optimizes operations and sustainability. Our energy solutions enable smart grid management, predict demand patterns, and support renewable energy integration.",
        benefits: [
          "Reduce energy waste by 20%",
          "Improve grid stability and reliability",
          "Optimize renewable energy integration",
          "Predict and prevent outages",
          "Meet sustainability targets faster"
        ],
        useCases: [
          "Demand response optimization",
          "Grid load balancing",
          "Predictive asset maintenance",
          "Renewable energy forecasting",
          "Carbon footprint tracking"
        ],
        aiCapabilities: [
          "Time-series forecasting",
          "Anomaly detection for grid events",
          "Optimization algorithms for distribution",
          "Weather-based predictions",
          "IoT sensor analytics"
        ],
        targetAudience: [
          "Electric utilities",
          "Renewable energy companies",
          "Oil and gas companies",
          "Energy retailers",
          "Grid operators"
        ]
      },
      {
        id: "government-public-sector",
        name: "Government & Public Sector",
        description: "Public sector AI solutions for citizen services, policy analysis, and administrative automation.",
        icon: "🏛️",
        features: ["Citizen Services AI", "Policy Analysis", "Process Automation", "Public Safety AI"],
        detailedDescription: "Modernize government services with AI that serves citizens better. Our public sector solutions automate administrative processes, analyze policy impacts, and improve citizen engagement while maintaining transparency.",
        benefits: [
          "Reduce citizen wait times by 80%",
          "Automate routine administrative tasks",
          "Improve policy decision-making",
          "Enhance public safety outcomes",
          "Increase citizen satisfaction"
        ],
        useCases: [
          "Citizen inquiry automation",
          "Document processing and verification",
          "Policy impact simulation",
          "Public safety analytics",
          "Benefits eligibility determination"
        ],
        aiCapabilities: [
          "Multi-language support",
          "Document understanding AI",
          "Predictive analytics for services",
          "Accessible chatbot interfaces",
          "Privacy-preserving AI"
        ],
        targetAudience: [
          "Federal agencies",
          "State and local governments",
          "Public safety organizations",
          "Healthcare agencies",
          "Education departments"
        ]
      },
      {
        id: "retail-consumer-enterprises",
        name: "Retail & Consumer Enterprises",
        description: "Large retail organizations with omnichannel AI, inventory optimization, and customer experience solutions.",
        icon: "🛍️",
        features: ["Omnichannel AI", "Inventory Optimization", "Customer Experience", "Pricing Intelligence"],
        detailedDescription: "Transform retail operations with AI that delivers seamless customer experiences across all channels. Our retail enterprise solutions optimize inventory, personalize shopping, and drive customer loyalty at scale.",
        benefits: [
          "Increase same-store sales by 15%",
          "Reduce stockouts by 40%",
          "Improve customer retention rates",
          "Optimize pricing dynamically",
          "Unify online and offline experiences"
        ],
        useCases: [
          "Personalized product recommendations",
          "Dynamic pricing optimization",
          "Inventory demand forecasting",
          "Customer lifetime value modeling",
          "Store layout optimization"
        ],
        aiCapabilities: [
          "Real-time personalization engines",
          "Computer vision for retail",
          "Demand sensing algorithms",
          "Price elasticity modeling",
          "Customer journey analytics"
        ],
        targetAudience: [
          "Department store chains",
          "Specialty retailers",
          "Grocery chains",
          "Convenience store chains",
          "Wholesale retailers"
        ]
      },
      {
        id: "logistics-transportation-enterprises",
        name: "Logistics & Transportation Enterprises",
        description: "Enterprise logistics with fleet management, route optimization, and supply chain intelligence.",
        icon: "🚛",
        features: ["Fleet Management AI", "Route Optimization", "Supply Chain Intelligence", "Delivery Prediction"],
        detailedDescription: "Optimize logistics operations at enterprise scale with AI that maximizes efficiency. Our transportation solutions manage complex fleets, optimize routes in real-time, and provide supply chain visibility that reduces costs.",
        benefits: [
          "Reduce fuel costs by 20%",
          "Improve on-time delivery to 99%",
          "Optimize fleet utilization",
          "Enhance supply chain visibility",
          "Reduce carbon emissions"
        ],
        useCases: [
          "Multi-stop route optimization",
          "Driver behavior analytics",
          "Shipment tracking and ETA prediction",
          "Capacity planning and scheduling",
          "Carrier selection optimization"
        ],
        aiCapabilities: [
          "Real-time GPS analytics",
          "Machine learning route planning",
          "Predictive maintenance for vehicles",
          "Weather-aware logistics AI",
          "Load optimization algorithms"
        ],
        targetAudience: [
          "Trucking companies",
          "Shipping and freight",
          "Third-party logistics (3PL)",
          "Courier services",
          "Rail and intermodal"
        ]
      },
      {
        id: "media-entertainment-enterprises",
        name: "Media & Entertainment Enterprises",
        description: "Media companies with content recommendation, audience analytics, and production automation.",
        icon: "🎬",
        features: ["Content Recommendation", "Audience Analytics", "Production Automation", "Rights Management"],
        detailedDescription: "Captivate audiences with AI that understands content and viewers. Our media solutions recommend the right content, analyze audience behavior, and streamline production workflows for maximum engagement.",
        benefits: [
          "Increase viewer engagement by 45%",
          "Reduce content production costs",
          "Optimize content acquisition decisions",
          "Improve advertising effectiveness",
          "Personalize at massive scale"
        ],
        useCases: [
          "Personalized content recommendations",
          "Audience segmentation and targeting",
          "Automated content tagging",
          "Ad placement optimization",
          "Content performance prediction"
        ],
        aiCapabilities: [
          "Collaborative filtering algorithms",
          "Video and audio analysis",
          "Natural language content understanding",
          "Viewer behavior modeling",
          "Creative optimization AI"
        ],
        targetAudience: [
          "Streaming platforms",
          "Broadcast networks",
          "Publishing companies",
          "Gaming companies",
          "Sports organizations"
        ]
      },
      {
        id: "large-healthcare-education",
        name: "Large Healthcare & Education Enterprises",
        description: "Enterprise healthcare and education institutions with administrative AI and operational efficiency.",
        icon: "🏫",
        features: ["Administrative AI", "Resource Management", "Student/Patient Analytics", "Compliance Automation"],
        detailedDescription: "Optimize large-scale healthcare and education operations with AI that manages complexity. Our enterprise solutions streamline administration, improve resource allocation, and ensure compliance across large institutions.",
        benefits: [
          "Reduce administrative costs by 30%",
          "Improve resource utilization",
          "Enhance student/patient outcomes",
          "Automate compliance reporting",
          "Scale operations efficiently"
        ],
        useCases: [
          "Centralized scheduling and resource management",
          "Enrollment and admissions automation",
          "Compliance monitoring and reporting",
          "Facility and asset management",
          "Staff scheduling optimization"
        ],
        aiCapabilities: [
          "Large-scale data analytics",
          "Workflow automation",
          "Predictive modeling for outcomes",
          "Document processing at scale",
          "Multi-campus coordination"
        ],
        targetAudience: [
          "Hospital systems",
          "University systems",
          "School districts",
          "Healthcare networks",
          "Educational consortiums"
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
        features: ["Product Recommendations", "Personalization AI", "Cart Recovery", "Customer Segmentation"],
        detailedDescription: "Transform your B2C online store with AI that converts browsers into buyers. Our retail AI delivers hyper-personalized shopping experiences, recovers abandoned carts, and maximizes customer lifetime value.",
        benefits: [
          "Increase conversion rates by 40%",
          "Boost average order value by 25%",
          "Recover 30% of abandoned carts",
          "Improve customer retention",
          "Personalize every touchpoint"
        ],
        useCases: [
          "Real-time product recommendations",
          "Dynamic homepage personalization",
          "Abandoned cart recovery campaigns",
          "Customer segment-based marketing",
          "Search result optimization"
        ],
        aiCapabilities: [
          "Collaborative filtering engines",
          "Behavioral prediction models",
          "Natural language search",
          "Visual similarity matching",
          "Customer journey optimization"
        ],
        targetAudience: [
          "Online retailers",
          "Direct-to-consumer brands",
          "E-commerce marketplaces",
          "Digital storefronts",
          "Omnichannel retailers"
        ]
      },
      {
        id: "b2b-ecommerce-platforms",
        name: "B2B E-Commerce Platforms",
        description: "Business-to-business commerce platforms with bulk ordering, pricing tiers, and account management.",
        icon: "🏢",
        features: ["Bulk Order AI", "Dynamic Pricing", "Account Management", "Order Automation"],
        detailedDescription: "Streamline B2B commerce with AI built for complex business relationships. Our B2B solutions handle custom pricing, automate reordering, and provide account intelligence that strengthens customer relationships.",
        benefits: [
          "Automate 60% of order processing",
          "Increase customer reorder rates",
          "Optimize bulk pricing decisions",
          "Reduce order errors by 95%",
          "Scale account management"
        ],
        useCases: [
          "Automated purchase order processing",
          "Customer-specific pricing optimization",
          "Inventory availability forecasting",
          "Contract and quote management",
          "Customer health scoring"
        ],
        aiCapabilities: [
          "Document processing for POs",
          "Pricing optimization algorithms",
          "Demand forecasting for customers",
          "Account relationship AI",
          "Chatbots for business queries"
        ],
        targetAudience: [
          "Wholesale distributors",
          "Manufacturing suppliers",
          "Industrial equipment sellers",
          "Business service providers",
          "B2B marketplaces"
        ]
      },
      {
        id: "d2c-brands",
        name: "D2C (Direct-to-Consumer) Brands",
        description: "Direct-to-consumer brands with brand storytelling, customer loyalty, and subscription management.",
        icon: "📦",
        features: ["Brand Analytics", "Loyalty Programs AI", "Subscription Management", "Social Commerce"],
        detailedDescription: "Build lasting D2C brand relationships with AI that creates loyal customers. Our D2C solutions power engaging brand experiences, optimize subscription economics, and leverage social commerce for growth.",
        benefits: [
          "Increase customer lifetime value by 35%",
          "Reduce subscription churn by 40%",
          "Optimize customer acquisition costs",
          "Build brand community engagement",
          "Scale personalized experiences"
        ],
        useCases: [
          "Loyalty program optimization",
          "Subscription box personalization",
          "Social media engagement automation",
          "Influencer campaign tracking",
          "Customer feedback analysis"
        ],
        aiCapabilities: [
          "Customer sentiment analysis",
          "Churn prediction models",
          "Social listening AI",
          "Content personalization",
          "Community engagement automation"
        ],
        targetAudience: [
          "D2C consumer brands",
          "Subscription box companies",
          "Lifestyle brands",
          "Health and wellness brands",
          "Beauty and personal care"
        ]
      },
      {
        id: "multi-vendor-marketplaces",
        name: "Multi-Vendor Marketplaces",
        description: "Marketplace platforms with seller management, product curation, and marketplace analytics.",
        icon: "🏪",
        features: ["Seller Analytics", "Product Curation AI", "Commission Management", "Fraud Detection"],
        detailedDescription: "Build thriving marketplaces with AI that balances seller success and buyer satisfaction. Our marketplace solutions curate products, manage seller performance, and detect fraud to create trusted commerce ecosystems.",
        benefits: [
          "Improve product discovery by 50%",
          "Reduce fraudulent listings by 90%",
          "Optimize seller performance",
          "Balance supply and demand",
          "Scale marketplace operations"
        ],
        useCases: [
          "Intelligent product categorization",
          "Seller quality scoring",
          "Fraudulent listing detection",
          "Search ranking optimization",
          "Commission and pricing optimization"
        ],
        aiCapabilities: [
          "Computer vision for product images",
          "Natural language for listings",
          "Fraud detection algorithms",
          "Matching algorithms for search",
          "Seller behavior analysis"
        ],
        targetAudience: [
          "General marketplaces",
          "Niche vertical marketplaces",
          "Service marketplaces",
          "B2B marketplaces",
          "Rental marketplaces"
        ]
      },
      {
        id: "grocery-quick-commerce",
        name: "Grocery & Quick Commerce",
        description: "Fast delivery grocery and convenience platforms with inventory management and delivery optimization.",
        icon: "🥬",
        features: ["Inventory Prediction", "Delivery Optimization", "Fresh Product AI", "Quick Commerce Analytics"],
        detailedDescription: "Win in quick commerce with AI that delivers freshness and speed. Our grocery solutions predict demand for perishables, optimize dark store operations, and ensure lightning-fast delivery times.",
        benefits: [
          "Reduce food waste by 35%",
          "Achieve 15-minute delivery times",
          "Optimize dark store inventory",
          "Improve picker efficiency",
          "Predict demand accurately"
        ],
        useCases: [
          "Perishable inventory forecasting",
          "Rider route optimization",
          "Dark store slot management",
          "Substitute product recommendations",
          "Dynamic delivery pricing"
        ],
        aiCapabilities: [
          "Short-term demand forecasting",
          "Real-time route optimization",
          "Freshness tracking AI",
          "Picker path optimization",
          "Customer preference learning"
        ],
        targetAudience: [
          "Grocery delivery platforms",
          "Quick commerce startups",
          "Convenience store chains",
          "Dark store operators",
          "Meal kit companies"
        ]
      },
      {
        id: "fashion-lifestyle-ecommerce",
        name: "Fashion & Lifestyle E-Commerce",
        description: "Fashion and lifestyle stores with visual search, size recommendations, and trend analysis.",
        icon: "👗",
        features: ["Visual Search AI", "Size Recommendation", "Trend Analysis", "Style Matching"],
        detailedDescription: "Revolutionize fashion e-commerce with AI that understands style. Our fashion solutions enable visual discovery, solve sizing challenges, and predict trends to keep your inventory relevant.",
        benefits: [
          "Reduce returns by 40%",
          "Increase product discovery",
          "Predict trend-driven demand",
          "Improve size confidence",
          "Personalize style recommendations"
        ],
        useCases: [
          "Visual similarity search",
          "AI size recommendations",
          "Trend forecasting and buying",
          "Outfit completion suggestions",
          "Virtual try-on experiences"
        ],
        aiCapabilities: [
          "Computer vision for fashion",
          "Body measurement AI",
          "Trend detection algorithms",
          "Style preference learning",
          "Color and pattern matching"
        ],
        targetAudience: [
          "Fashion retailers",
          "Luxury brands",
          "Athletic apparel",
          "Accessories brands",
          "Home decor retailers"
        ]
      },
      {
        id: "electronics-digital-goods",
        name: "Electronics & Digital Goods Stores",
        description: "Electronics and digital product stores with tech specifications matching and comparison tools.",
        icon: "📱",
        features: ["Spec Matching AI", "Comparison Engine", "Tech Support Bot", "Warranty Management"],
        detailedDescription: "Simplify electronics e-commerce with AI that matches complex specifications. Our solutions help customers find the right products, compare options intelligently, and get instant tech support.",
        benefits: [
          "Increase confidence in purchases",
          "Reduce product returns by 30%",
          "Automate tech support inquiries",
          "Simplify product comparisons",
          "Improve post-purchase satisfaction"
        ],
        useCases: [
          "Specification-based product matching",
          "Intelligent product comparison",
          "AI technical support chatbot",
          "Compatibility checking",
          "Warranty claim automation"
        ],
        aiCapabilities: [
          "Technical specification understanding",
          "Compatibility analysis AI",
          "Natural language tech support",
          "Product knowledge graphs",
          "Usage-based recommendations"
        ],
        targetAudience: [
          "Consumer electronics retailers",
          "Computer and component stores",
          "Mobile device retailers",
          "Software marketplaces",
          "Gaming equipment stores"
        ]
      },
      {
        id: "subscription-commerce",
        name: "Subscription-Based Commerce",
        description: "Subscription box and recurring commerce with churn prediction and personalized curation.",
        icon: "📬",
        features: ["Churn Prediction", "Personalized Curation", "Subscription Analytics", "Renewal Optimization"],
        detailedDescription: "Build subscription businesses that last with AI that predicts and prevents churn. Our subscription solutions personalize every box, optimize billing, and keep subscribers engaged month after month.",
        benefits: [
          "Reduce churn by 35%",
          "Increase subscription LTV",
          "Personalize every delivery",
          "Optimize pricing and plans",
          "Improve subscriber satisfaction"
        ],
        useCases: [
          "Churn risk prediction and intervention",
          "Personalized product curation",
          "Subscription plan optimization",
          "Renewal timing optimization",
          "Customer feedback integration"
        ],
        aiCapabilities: [
          "Churn prediction models",
          "Preference learning algorithms",
          "Price sensitivity analysis",
          "Engagement scoring",
          "Automated win-back campaigns"
        ],
        targetAudience: [
          "Subscription box companies",
          "Replenishment subscriptions",
          "Digital subscription services",
          "Membership programs",
          "Curated commerce brands"
        ]
      },
      {
        id: "social-commerce",
        name: "Social Commerce",
        description: "Social media-driven commerce with influencer analytics, live shopping, and social selling tools.",
        icon: "📲",
        features: ["Influencer Analytics", "Live Shopping AI", "Social Selling Tools", "UGC Management"],
        detailedDescription: "Capture social commerce opportunities with AI that understands social behavior. Our solutions optimize influencer partnerships, power live shopping experiences, and turn social engagement into sales.",
        benefits: [
          "Increase social conversion rates",
          "Optimize influencer ROI",
          "Scale live shopping events",
          "Leverage user-generated content",
          "Track social attribution"
        ],
        useCases: [
          "Influencer performance prediction",
          "Live stream product detection",
          "Social proof automation",
          "Shoppable content creation",
          "Social listening for trends"
        ],
        aiCapabilities: [
          "Influencer matching algorithms",
          "Real-time video analytics",
          "Sentiment analysis for comments",
          "Visual content recognition",
          "Social graph analytics"
        ],
        targetAudience: [
          "Social commerce platforms",
          "Live shopping apps",
          "Influencer marketplaces",
          "Social-first brands",
          "Creator commerce tools"
        ]
      },
      {
        id: "cross-border-ecommerce",
        name: "Cross-Border E-Commerce",
        description: "International commerce platforms with multi-currency, localization, and cross-border logistics.",
        icon: "🌍",
        features: ["Currency Optimization", "Localization AI", "Cross-Border Logistics", "Compliance Automation"],
        detailedDescription: "Expand globally with AI that handles cross-border complexity. Our international commerce solutions optimize currencies, localize experiences, and navigate regulatory requirements for seamless global selling.",
        benefits: [
          "Enter new markets faster",
          "Reduce cross-border friction",
          "Optimize currency conversion",
          "Automate compliance",
          "Localize at scale"
        ],
        useCases: [
          "Dynamic currency conversion",
          "Content localization and translation",
          "Duty and tax calculation",
          "Cross-border shipping optimization",
          "Market entry prioritization"
        ],
        aiCapabilities: [
          "Neural machine translation",
          "Currency optimization algorithms",
          "Compliance rule engines",
          "Shipping cost prediction",
          "Market demand analysis"
        ],
        targetAudience: [
          "Global e-commerce brands",
          "Cross-border marketplaces",
          "Export-focused retailers",
          "Global logistics providers",
          "International payment platforms"
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
    description: subIndustry.detailedDescription,
    keywords: [
      subIndustry.name,
      `${subIndustry.name} AI`,
      `${subIndustry.name} automation`,
      industry.name,
      ...subIndustry.features,
      "AI solutions",
      "autonomous AI",
      "NanoFlows"
    ],
    openGraph: {
      title: `${subIndustry.name} AI Solutions | NanoFlows`,
      description: subIndustry.detailedDescription,
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
            <h1 className="mt-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              AI Solutions for <span className="text-orange-400">{subIndustry.name}</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              {subIndustry.detailedDescription}
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
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
              Core Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Key Features for {subIndustry.name}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {subIndustry.features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-2xl font-bold text-orange-600">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
                Why Choose NanoFlows
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Benefits for Your Business
              </h2>
              <div className="mt-8 space-y-4">
                {subIndustry.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
                Real-World Applications
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Use Cases
              </h2>
              <div className="mt-8 space-y-4">
                {subIndustry.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-orange-200 hover:bg-orange-50"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
              Powered by AI
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              AI Capabilities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our autonomous AI systems leverage cutting-edge technology to deliver results for {subIndustry.name.toLowerCase()}.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {subIndustry.aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
              Who We Help
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Target Audience
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {subIndustry.targetAudience.map((audience, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50"
              >
                {audience}
              </span>
            ))}
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
