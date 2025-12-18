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
import SubIndustryGrid from "./SubIndustryGrid";

type SubIndustry = {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
};

type Industry = {
  id: string;
  name: string;
  icon: string;
  image: StaticImageData;
  imageAlt: string;
  tagline: string;
  description: string;
  subIndustries: SubIndustry[];
};

const industries: Industry[] = [
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
        icon: "💳",
        features: ["Payment Automation", "Fraud Detection", "Credit Scoring AI", "Investment Analytics"],
      },
      {
        id: "healthtech-startups",
        name: "HealthTech Startups",
        description: "Healthcare technology solutions with AI-powered diagnostics, patient engagement, and medical data analytics.",
        icon: "🏥",
        features: ["Telemedicine AI", "Health Analytics", "Patient Engagement", "Medical Imaging AI"],
      },
      {
        id: "edtech-startups",
        name: "EdTech Startups",
        description: "Educational technology platforms with personalized learning, assessment automation, and student engagement tools.",
        icon: "📚",
        features: ["Adaptive Learning", "AI Tutoring", "Assessment Automation", "Learning Analytics"],
      },
      {
        id: "proptech-startups",
        name: "PropTech Startups",
        description: "Property technology solutions for real estate management, virtual tours, and property valuation.",
        icon: "🏗️",
        features: ["Property Valuation AI", "Virtual Tours", "Tenant Management", "Market Analytics"],
      },
      {
        id: "hrtech-recruitment-saas",
        name: "HRTech & Recruitment SaaS",
        description: "Human resources and recruitment automation with AI-powered candidate matching and employee management.",
        icon: "👥",
        features: ["Resume Screening AI", "Candidate Matching", "Employee Analytics", "Onboarding Automation"],
      },
      {
        id: "martech-salestech-saas",
        name: "MarTech & SalesTech SaaS",
        description: "Marketing and sales technology with AI-driven lead generation, campaign optimization, and conversion analytics.",
        icon: "📈",
        features: ["Lead Scoring AI", "Campaign Automation", "Sales Forecasting", "Conversion Optimization"],
      },
      {
        id: "logistics-supply-chain-saas",
        name: "Logistics & Supply Chain SaaS",
        description: "Supply chain management solutions with route optimization, inventory forecasting, and delivery tracking.",
        icon: "🚚",
        features: ["Route Optimization", "Inventory AI", "Demand Forecasting", "Delivery Tracking"],
      },
      {
        id: "productivity-collaboration-tools",
        name: "Productivity & Collaboration Tools",
        description: "Team productivity and collaboration platforms with AI-powered task management and communication tools.",
        icon: "⚡",
        features: ["Task Automation", "Smart Scheduling", "Meeting AI", "Document Collaboration"],
      },
      {
        id: "vertical-saas",
        name: "Vertical SaaS (Industry-Specific)",
        description: "Industry-specific software solutions tailored for niche markets with specialized AI capabilities.",
        icon: "🎯",
        features: ["Industry Templates", "Specialized Workflows", "Compliance Tools", "Custom Integrations"],
      },
      {
        id: "ai-tools-automation-startups",
        name: "AI Tools & Automation Startups",
        description: "AI-native startups building automation tools, intelligent agents, and machine learning platforms.",
        icon: "🤖",
        features: ["AI Agent Development", "ML Platforms", "Automation Tools", "Data Processing AI"],
      },
    ],
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
        features: ["Risk Assessment AI", "Fraud Detection", "Compliance Automation", "Customer Analytics"],
      },
      {
        id: "manufacturing-industrial",
        name: "Manufacturing & Industrial Enterprises",
        description: "Smart manufacturing solutions with predictive maintenance, quality control, and production optimization.",
        icon: "🏭",
        features: ["Predictive Maintenance", "Quality Control AI", "Production Optimization", "Supply Chain AI"],
      },
      {
        id: "it-services-consulting",
        name: "IT Services & Consulting Firms",
        description: "Technology consulting and IT service companies with AI-powered project management and service delivery.",
        icon: "💻",
        features: ["Project Automation", "Resource Planning", "Client Analytics", "Service Optimization"],
      },
      {
        id: "telecom-networking",
        name: "Telecom & Networking Enterprises",
        description: "Telecommunications solutions with network optimization, customer service AI, and infrastructure management.",
        icon: "📡",
        features: ["Network Optimization", "Customer Service AI", "Infrastructure Monitoring", "Traffic Analysis"],
      },
      {
        id: "energy-utilities",
        name: "Energy & Utilities",
        description: "Energy sector solutions with smart grid management, demand forecasting, and sustainability analytics.",
        icon: "⚡",
        features: ["Smart Grid AI", "Demand Forecasting", "Asset Management", "Sustainability Analytics"],
      },
      {
        id: "government-public-sector",
        name: "Government & Public Sector",
        description: "Public sector AI solutions for citizen services, policy analysis, and administrative automation.",
        icon: "🏛️",
        features: ["Citizen Services AI", "Policy Analysis", "Process Automation", "Public Safety AI"],
      },
      {
        id: "retail-consumer-enterprises",
        name: "Retail & Consumer Enterprises",
        description: "Large retail organizations with omnichannel AI, inventory optimization, and customer experience solutions.",
        icon: "🛍️",
        features: ["Omnichannel AI", "Inventory Optimization", "Customer Experience", "Pricing Intelligence"],
      },
      {
        id: "logistics-transportation-enterprises",
        name: "Logistics & Transportation Enterprises",
        description: "Enterprise logistics with fleet management, route optimization, and supply chain intelligence.",
        icon: "🚛",
        features: ["Fleet Management AI", "Route Optimization", "Supply Chain Intelligence", "Delivery Prediction"],
      },
      {
        id: "media-entertainment-enterprises",
        name: "Media & Entertainment Enterprises",
        description: "Media companies with content recommendation, audience analytics, and production automation.",
        icon: "🎬",
        features: ["Content Recommendation", "Audience Analytics", "Production Automation", "Rights Management"],
      },
      {
        id: "large-healthcare-education",
        name: "Large Healthcare & Education Enterprises",
        description: "Enterprise healthcare and education institutions with administrative AI and operational efficiency.",
        icon: "🏫",
        features: ["Administrative AI", "Resource Management", "Student/Patient Analytics", "Compliance Automation"],
      },
    ],
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
        id: "b2c-online-retail",
        name: "B2C Online Retail",
        description: "Consumer-focused online stores with personalized shopping experiences and conversion optimization.",
        icon: "🛍️",
        features: ["Product Recommendations", "Personalization AI", "Cart Recovery", "Customer Segmentation"],
      },
      {
        id: "b2b-ecommerce-platforms",
        name: "B2B E-Commerce Platforms",
        description: "Business-to-business commerce platforms with bulk ordering, pricing tiers, and account management.",
        icon: "🏢",
        features: ["Bulk Order AI", "Dynamic Pricing", "Account Management", "Order Automation"],
      },
      {
        id: "d2c-brands",
        name: "D2C (Direct-to-Consumer) Brands",
        description: "Direct-to-consumer brands with brand storytelling, customer loyalty, and subscription management.",
        icon: "📦",
        features: ["Brand Analytics", "Loyalty Programs AI", "Subscription Management", "Social Commerce"],
      },
      {
        id: "multi-vendor-marketplaces",
        name: "Multi-Vendor Marketplaces",
        description: "Marketplace platforms with seller management, product curation, and marketplace analytics.",
        icon: "🏪",
        features: ["Seller Analytics", "Product Curation AI", "Commission Management", "Fraud Detection"],
      },
      {
        id: "grocery-quick-commerce",
        name: "Grocery & Quick Commerce",
        description: "Fast delivery grocery and convenience platforms with inventory management and delivery optimization.",
        icon: "🥬",
        features: ["Inventory Prediction", "Delivery Optimization", "Fresh Product AI", "Quick Commerce Analytics"],
      },
      {
        id: "fashion-lifestyle-ecommerce",
        name: "Fashion & Lifestyle E-Commerce",
        description: "Fashion and lifestyle stores with visual search, size recommendations, and trend analysis.",
        icon: "👗",
        features: ["Visual Search AI", "Size Recommendation", "Trend Analysis", "Style Matching"],
      },
      {
        id: "electronics-digital-goods",
        name: "Electronics & Digital Goods Stores",
        description: "Electronics and digital product stores with tech specifications matching and comparison tools.",
        icon: "📱",
        features: ["Spec Matching AI", "Comparison Engine", "Tech Support Bot", "Warranty Management"],
      },
      {
        id: "subscription-commerce",
        name: "Subscription-Based Commerce",
        description: "Subscription box and recurring commerce with churn prediction and personalized curation.",
        icon: "📬",
        features: ["Churn Prediction", "Personalized Curation", "Subscription Analytics", "Renewal Optimization"],
      },
      {
        id: "social-commerce",
        name: "Social Commerce",
        description: "Social media-driven commerce with influencer analytics, live shopping, and social selling tools.",
        icon: "📲",
        features: ["Influencer Analytics", "Live Shopping AI", "Social Selling Tools", "UGC Management"],
      },
      {
        id: "cross-border-ecommerce",
        name: "Cross-Border E-Commerce",
        description: "International commerce platforms with multi-currency, localization, and cross-border logistics.",
        icon: "🌍",
        features: ["Currency Optimization", "Localization AI", "Cross-Border Logistics", "Compliance Automation"],
      },
    ],
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
        description: "Home buying and selling with property matching, virtual tours, and buyer qualification.",
        icon: "🏡",
        features: ["Property Matching AI", "Virtual Tours", "Buyer Qualification", "Market Analysis"],
      },
      {
        id: "commercial-real-estate",
        name: "Commercial Real Estate",
        description: "Commercial property solutions with lease management, tenant matching, and investment analytics.",
        icon: "🏢",
        features: ["Lease Management AI", "Tenant Matching", "Investment Analytics", "Space Optimization"],
      },
      {
        id: "real-estate-developers",
        name: "Real Estate Developers & Builders",
        description: "Development projects with project management, sales automation, and construction tracking.",
        icon: "🏗️",
        features: ["Project Management AI", "Sales Automation", "Construction Tracking", "Inventory Management"],
      },
      {
        id: "property-brokers-agencies",
        name: "Property Brokers & Agencies",
        description: "Brokerage solutions with lead management, commission tracking, and agent performance analytics.",
        icon: "🔑",
        features: ["Lead Management AI", "Commission Tracking", "Agent Analytics", "Client Matching"],
      },
      {
        id: "co-living-co-working",
        name: "Co-Living & Co-Working Spaces",
        description: "Shared space management with booking systems, community engagement, and occupancy optimization.",
        icon: "🏘️",
        features: ["Space Booking AI", "Community Engagement", "Occupancy Optimization", "Amenity Management"],
      },
      {
        id: "property-management-firms",
        name: "Property Management Firms",
        description: "Property management with maintenance scheduling, tenant communication, and financial tracking.",
        icon: "🔧",
        features: ["Maintenance AI", "Tenant Communication", "Financial Tracking", "Vendor Management"],
      },
      {
        id: "rental-leasing-platforms",
        name: "Rental & Leasing Platforms",
        description: "Rental platforms with tenant screening, lease automation, and rent collection.",
        icon: "📝",
        features: ["Tenant Screening AI", "Lease Automation", "Rent Collection", "Property Marketing"],
      },
      {
        id: "land-plot-management",
        name: "Land & Plot Management",
        description: "Land and plot sales with mapping, valuation, and documentation management.",
        icon: "🗺️",
        features: ["Land Valuation AI", "Mapping Tools", "Documentation Management", "Title Verification"],
      },
      {
        id: "real-estate-investment",
        name: "Real Estate Investment Firms",
        description: "Investment management with portfolio analytics, market forecasting, and deal sourcing.",
        icon: "💰",
        features: ["Portfolio Analytics", "Market Forecasting AI", "Deal Sourcing", "Risk Assessment"],
      },
      {
        id: "hospitality-vacation-rentals",
        name: "Hospitality & Vacation Rentals",
        description: "Short-term rental management with dynamic pricing, guest communication, and booking optimization.",
        icon: "🏖️",
        features: ["Dynamic Pricing AI", "Guest Communication", "Booking Optimization", "Review Management"],
      },
    ],
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
        name: "Hospitals & Multi-Specialty Clinics",
        description: "Hospital management with patient flow optimization, clinical decision support, and operational efficiency.",
        icon: "🏨",
        features: ["Patient Flow AI", "Clinical Decision Support", "Bed Management", "Staff Scheduling"],
      },
      {
        id: "diagnostic-labs-imaging",
        name: "Diagnostic Labs & Imaging Centers",
        description: "Diagnostic centers with AI-powered image analysis, report generation, and workflow automation.",
        icon: "🔬",
        features: ["Image Analysis AI", "Report Automation", "Lab Workflow", "Results Communication"],
      },
      {
        id: "telemedicine-virtual-care",
        name: "Telemedicine & Virtual Care",
        description: "Virtual healthcare platforms with video consultations, symptom checking, and remote monitoring.",
        icon: "📱",
        features: ["Video Consultation AI", "Symptom Checker", "Remote Monitoring", "Virtual Triage"],
      },
      {
        id: "pharmacies-medical-stores",
        name: "Pharmacies & Medical Stores",
        description: "Pharmacy management with inventory prediction, prescription processing, and medication reminders.",
        icon: "💊",
        features: ["Inventory Prediction", "Prescription Processing AI", "Medication Reminders", "Drug Interaction Checks"],
      },
      {
        id: "health-insurance-providers",
        name: "Health Insurance Providers",
        description: "Insurance solutions with claims processing, fraud detection, and policy management.",
        icon: "🛡️",
        features: ["Claims Processing AI", "Fraud Detection", "Policy Management", "Member Engagement"],
      },
      {
        id: "medical-device-companies",
        name: "Medical Device Companies",
        description: "Medical device manufacturers with quality control, regulatory compliance, and customer support.",
        icon: "🩺",
        features: ["Quality Control AI", "Regulatory Compliance", "Device Analytics", "Customer Support"],
      },
      {
        id: "wellness-fitness-centers",
        name: "Wellness & Fitness Centers",
        description: "Wellness centers with personalized programs, progress tracking, and member engagement.",
        icon: "🧘",
        features: ["Personalized Programs AI", "Progress Tracking", "Member Engagement", "Nutrition Planning"],
      },
      {
        id: "mental-health-counseling",
        name: "Mental Health & Counseling Services",
        description: "Mental health services with appointment scheduling, progress monitoring, and crisis support.",
        icon: "🧠",
        features: ["Appointment AI", "Progress Monitoring", "Crisis Support", "Therapy Matching"],
      },
      {
        id: "home-healthcare-services",
        name: "Home Healthcare Services",
        description: "Home care services with caregiver scheduling, patient monitoring, and care coordination.",
        icon: "🏠",
        features: ["Caregiver Scheduling AI", "Patient Monitoring", "Care Coordination", "Family Communication"],
      },
      {
        id: "healthcare-saas-health-it",
        name: "Healthcare SaaS & Health IT",
        description: "Health technology companies building software for healthcare providers and patients.",
        icon: "💻",
        features: ["EHR Integration", "Health Data Analytics", "Patient Portals", "Interoperability Solutions"],
      },
    ],
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
        name: "Schools (K–12)",
        description: "K-12 schools with student management, parent communication, and classroom analytics.",
        icon: "🏫",
        features: ["Student Management AI", "Parent Communication", "Classroom Analytics", "Attendance Tracking"],
      },
      {
        id: "colleges-universities",
        name: "Colleges & Universities",
        description: "Higher education institutions with admissions AI, student success, and research support.",
        icon: "🎓",
        features: ["Admissions AI", "Student Success Analytics", "Research Support", "Alumni Engagement"],
      },
      {
        id: "coaching-training-institutes",
        name: "Coaching & Training Institutes",
        description: "Coaching centers with batch management, performance tracking, and personalized study plans.",
        icon: "📖",
        features: ["Batch Management AI", "Performance Tracking", "Study Plan Generation", "Test Analysis"],
      },
      {
        id: "online-learning-platforms",
        name: "Online Learning Platforms (EdTech)",
        description: "E-learning platforms with adaptive learning, content recommendations, and engagement analytics.",
        icon: "💻",
        features: ["Adaptive Learning AI", "Content Recommendation", "Engagement Analytics", "Gamification"],
      },
      {
        id: "corporate-training-ld",
        name: "Corporate Training & L&D",
        description: "Corporate learning with skill gap analysis, training automation, and compliance tracking.",
        icon: "👔",
        features: ["Skill Gap Analysis AI", "Training Automation", "Compliance Tracking", "Performance Metrics"],
      },
      {
        id: "skill-development-vocational",
        name: "Skill Development & Vocational Training",
        description: "Vocational training with hands-on skill tracking, job placement, and industry certification.",
        icon: "🛠️",
        features: ["Skill Tracking AI", "Job Placement", "Certification Management", "Industry Partnerships"],
      },
      {
        id: "competitive-exam-prep",
        name: "Competitive Exam Preparation",
        description: "Exam preparation with practice tests, performance analysis, and personalized study paths.",
        icon: "📝",
        features: ["Practice Test AI", "Performance Analysis", "Study Path Generation", "Weak Area Detection"],
      },
      {
        id: "test-certification-providers",
        name: "Test & Certification Providers",
        description: "Testing organizations with exam administration, proctoring, and certification management.",
        icon: "✅",
        features: ["Exam Administration AI", "AI Proctoring", "Certification Tracking", "Credential Verification"],
      },
      {
        id: "education-content-publishers",
        name: "Education Content Publishers",
        description: "Educational publishers with content creation, distribution, and usage analytics.",
        icon: "📚",
        features: ["Content Creation AI", "Distribution Analytics", "Rights Management", "Personalization"],
      },
      {
        id: "learning-management-saas",
        name: "Learning Management SaaS Providers",
        description: "LMS platforms with course management, student tracking, and integration capabilities.",
        icon: "🖥️",
        features: ["Course Management AI", "Student Tracking", "Integration APIs", "Analytics Dashboard"],
      },
    ],
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
        description: "Local retail stores with inventory management, customer engagement, and sales tracking.",
        icon: "🏬",
        features: ["Inventory Management AI", "Customer Engagement", "Sales Tracking", "Loyalty Programs"],
      },
      {
        id: "restaurants-cafes-food",
        name: "Restaurants, Cafés & Food Outlets",
        description: "Food businesses with table management, order automation, and customer feedback analysis.",
        icon: "🍽️",
        features: ["Table Management AI", "Order Automation", "Menu Optimization", "Review Analysis"],
      },
      {
        id: "salons-spas-personal-care",
        name: "Salons, Spas & Personal Care",
        description: "Beauty businesses with appointment booking, staff scheduling, and client management.",
        icon: "💇",
        features: ["Appointment AI", "Staff Scheduling", "Client Management", "Service Recommendations"],
      },
      {
        id: "gyms-yoga-fitness",
        name: "Gyms, Yoga & Fitness Studios",
        description: "Fitness centers with membership management, class scheduling, and member engagement.",
        icon: "🏋️",
        features: ["Membership AI", "Class Scheduling", "Member Engagement", "Workout Recommendations"],
      },
      {
        id: "clinics-local-healthcare",
        name: "Clinics & Local Healthcare Centers",
        description: "Local clinics with patient scheduling, records management, and follow-up automation.",
        icon: "⚕️",
        features: ["Patient Scheduling AI", "Records Management", "Follow-up Automation", "Prescription Management"],
      },
      {
        id: "real-estate-agencies-local",
        name: "Real Estate Agencies",
        description: "Local real estate offices with lead management, property listings, and client communication.",
        icon: "🏠",
        features: ["Lead Management AI", "Property Listings", "Client Communication", "Market Insights"],
      },
      {
        id: "automobile-services-workshops",
        name: "Automobile Services & Workshops",
        description: "Auto service centers with appointment booking, service tracking, and customer communication.",
        icon: "🚗",
        features: ["Service Booking AI", "Job Tracking", "Parts Inventory", "Customer Updates"],
      },
      {
        id: "travel-agents-local-tourism",
        name: "Travel Agents & Local Tourism",
        description: "Travel agencies with trip planning, booking management, and customer engagement.",
        icon: "✈️",
        features: ["Trip Planning AI", "Booking Management", "Itinerary Generation", "Customer Engagement"],
      },
      {
        id: "event-management-services",
        name: "Event Management & Services",
        description: "Event planners with vendor management, scheduling, and event coordination.",
        icon: "🎉",
        features: ["Event Planning AI", "Vendor Management", "Scheduling", "Budget Tracking"],
      },
      {
        id: "professional-services",
        name: "Professional Services (CA, Legal, Consultants)",
        description: "Professional service firms with client management, case tracking, and document automation.",
        icon: "⚖️",
        features: ["Client Management AI", "Case Tracking", "Document Automation", "Billing Management"],
      },
    ],
  },
];

export function generateStaticParams() {
  return industries.map((industry) => ({
    id: industry.id,
  }));
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const industry = industries.find((ind) => ind.id === id);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={industry.image}
            alt={industry.imageAlt}
            title={`NanoFlows ${industry.name} AI Solutions`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
              <span className="text-2xl">{industry.icon}</span>
              <span className="text-sm font-semibold uppercase tracking-[0.1em]">
                {industry.name}
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
              Sub-Industries We Serve
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
              Specialized Solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Choose Your {industry.name} Segment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We offer tailored AI solutions for each sub-industry within {industry.name.toLowerCase()}.
              Select your segment to explore how we can transform your business.
            </p>
          </div>

          <SubIndustryGrid subIndustries={industry.subIndustries} industryId={industry.id} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Don&apos;t See Your Specific Segment?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We work with businesses across all segments within {industry.name.toLowerCase()}.
              Let&apos;s discuss your unique requirements and build a custom AI solution for your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
              >
                Contact Us →
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50"
              >
                ← Back to Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
