import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import startupsImage from "@assets/generated_images/startups_saas_ai_office.png";
import enterpriseImage from "@assets/generated_images/enterprise_ai_headquarters.png";
import ecommerceImage from "@assets/generated_images/e-commerce_ai_automation.png";
import realEstateImage from "@assets/generated_images/real_estate_ai_matching.png";
import healthcareImage from "@assets/generated_images/healthcare_ai_diagnostics.png";
import educationImage from "@assets/generated_images/education_ai_learning.png";
import localBusinessImage from "@assets/generated_images/local_business_ai_service.png";
import heroImage from "@assets/generated_images/industries_hero_background_abstract.png";
import type { StaticImageData } from "next/image";

const industries: {
  id: string;
  name: string;
  icon: string;
  image: StaticImageData;
  desc: string;
  benefits: string[];
  useCases: string[];
}[] = [
  {
    id: "startups-saas",
    name: "Startups & SaaS",
    icon: "🚀",
    image: startupsImage,
    desc: "AI-powered growth engines for startups and SaaS companies looking to scale fast without scaling headcount.",
    benefits: ["Automate customer acquisition", "AI-driven product insights", "Reduce churn with predictive analytics", "Scale operations 10x"],
    useCases: ["Lead Generation", "Customer Onboarding", "Support Automation", "Usage Analytics"],
  },
  {
    id: "enterprises",
    name: "Enterprises",
    icon: "🏢",
    image: enterpriseImage,
    desc: "Enterprise-grade AI solutions that integrate seamlessly with existing systems to drive operational efficiency.",
    benefits: ["Digital transformation at scale", "Legacy system integration", "Enterprise security & compliance", "Global deployment capabilities"],
    useCases: ["Process Automation", "Data Intelligence", "Employee Assistants", "Compliance Automation"],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    image: ecommerceImage,
    desc: "Boost conversions and customer lifetime value with AI that personalizes every touchpoint of the shopping journey.",
    benefits: ["Personalized recommendations", "Dynamic pricing optimization", "Inventory forecasting", "24/7 customer support"],
    useCases: ["Product Recommendations", "Cart Abandonment Recovery", "Customer Support Bots", "Review Analysis"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "🏠",
    image: realEstateImage,
    desc: "AI agents that qualify leads, match properties, and nurture prospects 24/7 so agents can focus on closing.",
    benefits: ["Instant lead response", "Smart property matching", "Automated follow-ups", "Market analysis AI"],
    useCases: ["Lead Qualification", "Property Recommendations", "Virtual Tour Scheduling", "Document Processing"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    image: healthcareImage,
    desc: "HIPAA-compliant AI solutions for patient engagement, operational efficiency, and clinical decision support.",
    benefits: ["Patient communication automation", "Appointment scheduling AI", "Claims processing", "Clinical insights"],
    useCases: ["Patient Engagement", "Appointment Management", "Insurance Processing", "Health Analytics"],
  },
  {
    id: "education",
    name: "Education",
    icon: "🎓",
    image: educationImage,
    desc: "Transform learning experiences with AI tutors, automated administration, and personalized education pathways.",
    benefits: ["Personalized learning paths", "Automated grading", "Student support bots", "Enrollment automation"],
    useCases: ["AI Tutoring", "Administrative Automation", "Student Engagement", "Content Generation"],
  },
  {
    id: "local-businesses",
    name: "Local Businesses",
    icon: "🏪",
    image: localBusinessImage,
    desc: "Affordable AI solutions that help local businesses compete with enterprise-level customer experience.",
    benefits: ["24/7 customer response", "Appointment booking AI", "Review management", "Local marketing automation"],
    useCases: ["Customer Service Bots", "Booking Systems", "Reputation Management", "Social Media Automation"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="NanoFlows Industries - AI Solutions for Startups, Enterprises, E-Commerce, Healthcare, Education and Local Businesses"
            title="NanoFlows Industries We Serve"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Industries We Serve
            </p>
            <h1 className="mt-6 text-4xl font-extrabold text-white md:text-6xl leading-tight">
              AI Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Every Industry</span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We build autonomous AI systems tailored to the unique challenges and opportunities of your industry. 
              No matter your sector, we have the expertise to transform your operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="space-y-16">
            {industries.map((industry, idx) => (
              <div
                key={industry.id}
                className={`grid gap-12 lg:grid-cols-2 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl h-80">
                    <Image
                      src={industry.image}
                      alt={`${industry.name} AI Solutions - NanoFlows autonomous AI systems for industry automation`}
                      title={`${industry.name} AI Solutions`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-2xl shadow-lg">
                        {industry.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                    </div>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {industry.desc}
                  </p>
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {industry.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-gray-700">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      Common Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 border border-gray-200"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                    >
                      Get Started with {industry.name} →
                    </Link>
                    <Link
                      href={`/industries/${industry.id}`}
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="rounded-3xl bg-white border border-gray-200 p-12 md:p-16 text-center shadow-sm">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Don't See Your Industry?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI platforms are adaptable to virtually any industry. We've helped businesses across 
              dozens of sectors transform their operations with autonomous AI.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
              >
                Let's Talk About Your Industry →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
