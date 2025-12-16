"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, use } from "react";
import startupsImage from "@assets/generated_images/startups_saas_ai_office.png";
import enterpriseImage from "@assets/generated_images/enterprise_ai_headquarters.png";
import ecommerceImage from "@assets/generated_images/e-commerce_ai_automation.png";
import realEstateImage from "@assets/generated_images/real_estate_ai_matching.png";
import healthcareImage from "@assets/generated_images/healthcare_ai_diagnostics.png";
import educationImage from "@assets/generated_images/education_ai_learning.png";
import localBusinessImage from "@assets/generated_images/local_business_ai_service.png";
import type { StaticImageData } from "next/image";

type Industry = {
  id: string;
  name: string;
  icon: string;
  image: StaticImageData;
  imageAlt: string;
  tagline: string;
  description: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
    icon: string;
  }[];
  whyNanoflows: {
    title: string;
    description: string;
  }[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
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
    challenges: [
      { title: "Limited Resources", description: "Small teams struggle to handle growing customer demands while maintaining quality." },
      { title: "Scaling Bottlenecks", description: "Manual processes break down as you grow, creating friction and slowing momentum." },
      { title: "Customer Churn", description: "Without predictive insights, you're always reacting to churn instead of preventing it." },
      { title: "Data Silos", description: "Customer data scattered across tools makes it impossible to get a unified view." },
    ],
    solutions: [
      { title: "AI Customer Acquisition", description: "Autonomous lead generation and qualification that runs 24/7", icon: "🎯" },
      { title: "Intelligent Onboarding", description: "Personalized onboarding flows that adapt to each user's behavior", icon: "👋" },
      { title: "Predictive Churn Prevention", description: "ML models that identify at-risk customers before they leave", icon: "📊" },
      { title: "Automated Support", description: "AI agents that resolve 80% of support tickets instantly", icon: "🤖" },
    ],
    whyNanoflows: [
      { title: "Startup-Friendly Pricing", description: "Scale your AI capabilities as you grow, starting with affordable plans designed for early-stage companies." },
      { title: "Rapid Deployment", description: "Go from zero to production in weeks, not months. Our pre-built modules accelerate time-to-value." },
      { title: "Founder-Led Support", description: "Direct access to our team who understands the unique challenges of building a startup." },
      { title: "Integration Ready", description: "Connect seamlessly with your existing stack: Stripe, Intercom, HubSpot, and 100+ more." },
    ],
    techStack: [
      { category: "AI/ML", technologies: ["GPT-4", "Claude", "Custom Fine-tuned Models", "Vector Databases"] },
      { category: "Integrations", technologies: ["Stripe", "HubSpot", "Intercom", "Segment", "Mixpanel"] },
      { category: "Infrastructure", technologies: ["AWS", "GCP", "Kubernetes", "Real-time Processing"] },
      { category: "Security", technologies: ["SOC 2 Type II", "GDPR Compliant", "End-to-end Encryption"] },
    ],
    faqs: [
      { question: "How quickly can we get started?", answer: "Most startups are up and running within 2-4 weeks. Our pre-built templates and integrations accelerate deployment significantly." },
      { question: "Do you offer startup pricing?", answer: "Yes! We have special pricing tiers for early-stage startups, including discounts for YC and other accelerator companies." },
      { question: "Can it integrate with our existing tools?", answer: "Absolutely. We integrate with 100+ popular SaaS tools including CRMs, payment processors, analytics platforms, and communication tools." },
      { question: "What kind of support do you provide?", answer: "Startups get dedicated onboarding support, regular check-ins, and access to our Slack community of fellow founders." },
      { question: "How does the AI learn about our business?", answer: "We train custom models on your data, product documentation, and customer interactions to ensure responses are accurate and on-brand." },
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
    challenges: [
      { title: "Legacy System Integration", description: "Decades of tech investments make it hard to adopt new AI capabilities." },
      { title: "Compliance Requirements", description: "Strict regulatory frameworks require careful implementation of AI systems." },
      { title: "Change Management", description: "Getting buy-in across departments and training thousands of employees." },
      { title: "Data Governance", description: "Ensuring AI systems respect data boundaries and access controls." },
    ],
    solutions: [
      { title: "Legacy Connectors", description: "Pre-built integrations for SAP, Oracle, Salesforce, and legacy systems", icon: "🔗" },
      { title: "Compliance Engine", description: "Built-in controls for GDPR, HIPAA, SOX, and industry regulations", icon: "🛡️" },
      { title: "Change Management Suite", description: "Training modules and adoption tracking for enterprise rollouts", icon: "📈" },
      { title: "Data Governance Layer", description: "Role-based access, audit logs, and data lineage tracking", icon: "🔐" },
    ],
    whyNanoflows: [
      { title: "Enterprise Security", description: "SOC 2 Type II certified with options for on-premise deployment and private cloud." },
      { title: "Dedicated Success Team", description: "Named customer success managers, solution architects, and 24/7 support." },
      { title: "Custom SLAs", description: "Guaranteed uptime and response times tailored to your requirements." },
      { title: "Proven at Scale", description: "Trusted by Fortune 500 companies processing millions of interactions daily." },
    ],
    techStack: [
      { category: "AI/ML", technologies: ["Enterprise LLMs", "On-premise Models", "Federated Learning", "Custom Training"] },
      { category: "Integrations", technologies: ["SAP", "Oracle", "Salesforce", "ServiceNow", "Workday"] },
      { category: "Infrastructure", technologies: ["Private Cloud", "On-premise", "Hybrid Deployment", "Edge Computing"] },
      { category: "Security", technologies: ["SOC 2", "ISO 27001", "FedRAMP Ready", "HIPAA Compliant"] },
    ],
    faqs: [
      { question: "Can you deploy on-premise?", answer: "Yes, we offer full on-premise deployment options as well as private cloud and hybrid configurations." },
      { question: "What compliance certifications do you have?", answer: "We are SOC 2 Type II certified and can support HIPAA, GDPR, and industry-specific compliance requirements." },
      { question: "How do you handle data security?", answer: "All data is encrypted at rest and in transit. We support customer-managed encryption keys and data residency requirements." },
      { question: "What's your typical enterprise deployment timeline?", answer: "Enterprise deployments typically take 8-12 weeks depending on complexity and integration requirements." },
      { question: "Do you provide training for our teams?", answer: "Yes, we provide comprehensive training programs including admin training, user training, and train-the-trainer sessions." },
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
    challenges: [
      { title: "Cart Abandonment", description: "70% of shoppers abandon carts, leaving revenue on the table." },
      { title: "Generic Experiences", description: "One-size-fits-all product pages fail to engage modern shoppers." },
      { title: "Support Overload", description: "Product questions and order issues overwhelm support teams during peak times." },
      { title: "Inventory Management", description: "Stockouts and overstock tie up capital and frustrate customers." },
    ],
    solutions: [
      { title: "Smart Cart Recovery", description: "AI-powered recovery flows that bring shoppers back with personalized offers", icon: "🛒" },
      { title: "Dynamic Personalization", description: "Real-time product recommendations based on browsing behavior", icon: "✨" },
      { title: "AI Shopping Assistant", description: "24/7 product expert that answers questions and guides purchases", icon: "💬" },
      { title: "Demand Forecasting", description: "ML models that predict demand and optimize inventory levels", icon: "📦" },
    ],
    whyNanoflows: [
      { title: "Revenue Impact", description: "Average 25% increase in conversion rates and 15% lift in AOV within 90 days." },
      { title: "Platform Native", description: "Deep integrations with Shopify, WooCommerce, Magento, and BigCommerce." },
      { title: "Black Friday Ready", description: "Infrastructure that scales instantly to handle peak traffic without breaking." },
      { title: "Measurable ROI", description: "Clear attribution and analytics showing exactly how AI impacts your bottom line." },
    ],
    techStack: [
      { category: "AI/ML", technologies: ["Recommendation Engines", "NLP", "Computer Vision", "Demand Forecasting"] },
      { category: "Integrations", technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Klaviyo"] },
      { category: "Infrastructure", technologies: ["Edge CDN", "Auto-scaling", "Real-time Processing", "Global Deployment"] },
      { category: "Analytics", technologies: ["Revenue Attribution", "A/B Testing", "Customer Analytics", "Funnel Analysis"] },
    ],
    faqs: [
      { question: "Will this work with my Shopify store?", answer: "Yes! We have a native Shopify app that installs in minutes and syncs your product catalog automatically." },
      { question: "How do you handle high traffic during sales?", answer: "Our infrastructure auto-scales to handle any traffic level. We've successfully powered Black Friday for major retailers." },
      { question: "Can the AI understand our products?", answer: "Yes, we train on your product catalog, descriptions, and customer reviews to provide accurate, helpful responses." },
      { question: "What's the impact on page speed?", answer: "Our lightweight scripts load asynchronously and have minimal impact on page performance." },
      { question: "How quickly will I see results?", answer: "Most merchants see measurable improvements within 2-4 weeks of deployment." },
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
    challenges: [
      { title: "Lead Response Time", description: "Hot leads go cold within minutes, but agents can't respond instantly to every inquiry." },
      { title: "Lead Qualification", description: "Agents waste time on unqualified leads while serious buyers slip through the cracks." },
      { title: "Property Matching", description: "Finding the perfect property for each buyer requires extensive manual research." },
      { title: "Follow-Up Consistency", description: "Long sales cycles require consistent nurturing that's hard to maintain manually." },
    ],
    solutions: [
      { title: "Instant Lead Response", description: "AI engages new leads within seconds, 24/7, across all channels", icon: "⚡" },
      { title: "Smart Qualification", description: "Automatically qualifies leads based on budget, timeline, and preferences", icon: "✅" },
      { title: "Property Matching AI", description: "Intelligent matching based on stated and inferred preferences", icon: "🏘️" },
      { title: "Automated Nurturing", description: "Personalized drip campaigns that keep leads warm until they're ready", icon: "📧" },
    ],
    whyNanoflows: [
      { title: "Built for Real Estate", description: "Purpose-built for the unique workflows and terminology of the real estate industry." },
      { title: "MLS Integration", description: "Real-time sync with MLS listings for accurate property recommendations." },
      { title: "Agent Empowerment", description: "AI handles the busywork so agents can focus on relationships and closings." },
      { title: "Proven Results", description: "Clients see 3x more qualified appointments within the first month." },
    ],
    techStack: [
      { category: "AI/ML", technologies: ["Natural Language Understanding", "Property Matching", "Lead Scoring", "Sentiment Analysis"] },
      { category: "Integrations", technologies: ["MLS", "Zillow", "Realtor.com", "Follow Up Boss", "kvCORE"] },
      { category: "Communication", technologies: ["SMS", "Email", "Voice AI", "WhatsApp", "Live Chat"] },
      { category: "Analytics", technologies: ["Lead Attribution", "Agent Performance", "Pipeline Analytics", "ROI Tracking"] },
    ],
    faqs: [
      { question: "Does it integrate with my CRM?", answer: "Yes, we integrate with all major real estate CRMs including Follow Up Boss, kvCORE, LionDesk, and more." },
      { question: "Can it handle complex property searches?", answer: "Absolutely. Our AI understands nuanced requirements like school districts, commute times, and neighborhood preferences." },
      { question: "Will leads know they're talking to AI?", answer: "The AI identifies itself appropriately while maintaining natural conversation. It seamlessly hands off to agents when needed." },
      { question: "How does the MLS integration work?", answer: "We pull real-time listing data from your MLS to ensure property recommendations are always current and accurate." },
      { question: "Can it schedule showings?", answer: "Yes, the AI can coordinate showing schedules with both the lead and the agent's calendar." },
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
    challenges: [
      { title: "Patient Communication", description: "Staff spend hours on phone calls, appointment reminders, and basic questions." },
      { title: "Administrative Burden", description: "Clinical staff drowning in paperwork instead of focusing on patient care." },
      { title: "No-Show Rates", description: "Missed appointments cost practices millions and delay patient care." },
      { title: "Insurance Complexity", description: "Verifying coverage and processing claims is time-consuming and error-prone." },
    ],
    solutions: [
      { title: "Patient AI Assistant", description: "HIPAA-compliant chatbot for scheduling, FAQs, and symptom triage", icon: "💬" },
      { title: "Clinical Documentation AI", description: "Automated note-taking and documentation from patient encounters", icon: "📝" },
      { title: "Smart Scheduling", description: "AI-optimized scheduling with automated reminders and waitlist management", icon: "📅" },
      { title: "Claims Automation", description: "Intelligent claims processing and prior authorization handling", icon: "💳" },
    ],
    whyNanoflows: [
      { title: "HIPAA Compliant", description: "Built from the ground up for healthcare with BAA agreements and full HIPAA compliance." },
      { title: "EHR Integration", description: "Seamless integration with Epic, Cerner, athenahealth, and other major EHR systems." },
      { title: "Clinical Accuracy", description: "AI trained on medical knowledge with human oversight for clinical decisions." },
      { title: "Patient-Centric", description: "Designed to enhance the patient experience while respecting privacy." },
    ],
    techStack: [
      { category: "AI/ML", technologies: ["Clinical NLP", "Medical Entity Recognition", "Symptom Analysis", "Risk Stratification"] },
      { category: "Integrations", technologies: ["Epic", "Cerner", "athenahealth", "Allscripts", "eClinicalWorks"] },
      { category: "Security", technologies: ["HIPAA Compliant", "BAA Available", "PHI Encryption", "Audit Logging"] },
      { category: "Communication", technologies: ["Patient Portal", "Secure Messaging", "Voice", "SMS (Compliant)"] },
    ],
    faqs: [
      { question: "Is this HIPAA compliant?", answer: "Yes, our platform is fully HIPAA compliant and we sign Business Associate Agreements with all healthcare clients." },
      { question: "Does it integrate with Epic?", answer: "Yes, we have certified integrations with Epic, Cerner, and other major EHR systems." },
      { question: "Can patients use this for medical advice?", answer: "The AI provides general information and triage guidance, but always recommends consulting a healthcare provider for medical advice." },
      { question: "How is patient data protected?", answer: "All PHI is encrypted at rest and in transit, with strict access controls and comprehensive audit logging." },
      { question: "Can it reduce no-show rates?", answer: "Yes, our clients typically see 30-50% reduction in no-shows through smart reminders and easy rescheduling." },
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
    challenges: [
      { title: "One-Size-Fits-All Learning", description: "Students learn at different paces, but teachers can't personalize for every student." },
      { title: "Administrative Overload", description: "Educators spend too much time on paperwork and not enough on teaching." },
      { title: "Student Support Gaps", description: "Students need help outside class hours when teachers aren't available." },
      { title: "Engagement Challenges", description: "Keeping students engaged in an era of endless digital distractions." },
    ],
    solutions: [
      { title: "AI Tutoring System", description: "Personalized tutoring that adapts to each student's learning style and pace", icon: "🎓" },
      { title: "Automated Grading", description: "Instant feedback on assignments with detailed explanations", icon: "✏️" },
      { title: "24/7 Student Support", description: "AI assistant for homework help, scheduling, and campus questions", icon: "🤖" },
      { title: "Engagement Analytics", description: "Early warning system for at-risk students based on engagement patterns", icon: "📊" },
    ],
    whyNanoflows: [
      { title: "Pedagogy-First Design", description: "Developed with educators to align with proven teaching methodologies." },
      { title: "FERPA Compliant", description: "Built for education with full FERPA and COPPA compliance for all age groups." },
      { title: "Accessibility Focus", description: "WCAG 2.1 compliant with features for diverse learning needs." },
      { title: "Institution Scale", description: "Proven at scale from small schools to large university systems." },
    ],
    techStack: [
      { category: "AI/ML", technologies: ["Adaptive Learning", "Natural Language Tutoring", "Essay Assessment", "Learning Analytics"] },
      { category: "Integrations", technologies: ["Canvas", "Blackboard", "Google Classroom", "Moodle", "PowerSchool"] },
      { category: "Compliance", technologies: ["FERPA Compliant", "COPPA Compliant", "WCAG 2.1", "Student Privacy Pledge"] },
      { category: "Platforms", technologies: ["Web", "iOS", "Android", "LTI Compatible", "API Access"] },
    ],
    faqs: [
      { question: "Is it safe for K-12 students?", answer: "Yes, we are fully COPPA and FERPA compliant with strict content filtering and age-appropriate interactions." },
      { question: "Does it integrate with our LMS?", answer: "Yes, we integrate with Canvas, Blackboard, Google Classroom, Moodle, and other major learning management systems via LTI." },
      { question: "Can it replace teachers?", answer: "No, our AI is designed to support and empower teachers, not replace them. It handles routine tasks so teachers can focus on teaching." },
      { question: "How does the AI tutor work?", answer: "The AI tutor uses Socratic questioning to guide students to understanding, providing hints and explanations tailored to their level." },
      { question: "Can it help with multiple subjects?", answer: "Yes, our AI tutors cover math, science, English, history, and many other subjects across K-12 and higher education." },
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
    challenges: [
      { title: "Limited Availability", description: "You can't answer every call or message when you're busy serving customers." },
      { title: "Review Management", description: "Managing online reputation across multiple platforms is overwhelming." },
      { title: "Booking Chaos", description: "Double bookings, no-shows, and scheduling conflicts hurt your business." },
      { title: "Marketing Time", description: "Running a business leaves no time for consistent marketing." },
    ],
    solutions: [
      { title: "24/7 Customer Response", description: "AI answers calls, texts, and messages instantly, any time of day", icon: "📱" },
      { title: "Reputation Manager", description: "Automatically monitor and respond to reviews across all platforms", icon: "⭐" },
      { title: "Smart Booking System", description: "Automated scheduling with reminders and no-show protection", icon: "📅" },
      { title: "Local Marketing AI", description: "Automated social posts, email campaigns, and local ads", icon: "📣" },
    ],
    whyNanoflows: [
      { title: "Affordable Pricing", description: "Plans starting at prices that make sense for local businesses." },
      { title: "No Technical Skills Needed", description: "Set up and manage everything from a simple mobile app." },
      { title: "Local Focus", description: "Features built specifically for the needs of local service businesses." },
      { title: "Quick Results", description: "Most businesses see increased bookings within the first week." },
    ],
    techStack: [
      { category: "AI/ML", technologies: ["Natural Conversation", "Sentiment Analysis", "Local SEO", "Smart Scheduling"] },
      { category: "Integrations", technologies: ["Google Business", "Yelp", "Facebook", "Square", "QuickBooks"] },
      { category: "Communication", technologies: ["Phone", "SMS", "Facebook Messenger", "Instagram DM", "Website Chat"] },
      { category: "Marketing", technologies: ["Social Media", "Email Marketing", "Local Ads", "Review Management"] },
    ],
    faqs: [
      { question: "Do I need to be tech-savvy?", answer: "Not at all! Our platform is designed for busy business owners. Everything is managed through a simple mobile app." },
      { question: "How much does it cost?", answer: "We have plans starting at affordable monthly rates designed for local businesses. No long-term contracts required." },
      { question: "Can it really sound like me?", answer: "Yes! We customize the AI's personality and responses to match your brand voice and business style." },
      { question: "Will my customers know it's AI?", answer: "The AI is transparent about being an assistant when asked, but handles conversations so naturally that most customers are impressed by the service." },
      { question: "What if I want to take over a conversation?", answer: "You can jump into any conversation at any time from the mobile app. The AI notifies you of high-priority inquiries." },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <span className={`ml-4 flex-shrink-0 text-2xl text-orange-500 transition-transform ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function IndustryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const industry = industries.find((i) => i.id === id);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-200 rounded-full blur-[150px]"></div>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6">
          <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 mb-8">
            ← Back to Industries
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-3xl shadow-lg mb-6">
                {industry.icon}
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                {industry.name}
              </h1>
              <p className="mt-2 text-xl text-orange-600 font-semibold">{industry.tagline}</p>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {industry.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                >
                  Get Started →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-96">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  title={`${industry.name} AI Solutions - NanoFlows`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              Industry Challenges
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Problems We Solve
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industry.challenges.map((challenge) => (
              <div key={challenge.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-orange-200 transition">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 text-xl mb-4">
                  ⚠️
                </div>
                <h3 className="text-lg font-bold text-gray-900">{challenge.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              AI Solutions
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              How We Help
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {industry.solutions.map((solution) => (
              <div key={solution.title} className="flex items-start gap-4 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-2xl">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{solution.title}</h3>
                  <p className="mt-2 text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              Why NanoFlows
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              The NanoFlows Advantage
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {industry.whyNanoflows.map((item, idx) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              Technology Stack
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Built With Best-in-Class Technology
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industry.techStack.map((stack) => (
              <div key={stack.category} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-orange-500">•</span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            {industry.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
