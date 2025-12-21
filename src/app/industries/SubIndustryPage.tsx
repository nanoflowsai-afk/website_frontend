import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { industries, getRelatedServices } from "@/lib/data/industries";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TechStackTabs } from "@/components/TechStackTabs";

// Architecture Flow Section Component - Vertical Flow
function ArchitectureFlowSection() {
  const steps = [
    { title: "Lead / User Entry", icon: "📝", desc: "Capture customer data" },
    { title: "AI Lead Qualification", icon: "🎯", desc: "Score & segment leads" },
    { title: "KYC & Verification", icon: "✅", desc: "Verify identities" },
    { title: "Risk & Credit Scoring", icon: "📊", desc: "Assess creditworthiness" },
    { title: "Transaction Execution", icon: "💳", desc: "Process payments" },
    { title: "AI Follow-Ups", icon: "📢", desc: "Automated outreach" },
    { title: "Support Chatbot", icon: "💬", desc: "24/7 assistance" },
    { title: "Analytics & Compliance", icon: "📈", desc: "Track & monitor" }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
              ARCHITECTURE
            </span>
            <h2 className="text-4xl font-bold text-gray-900">AI-Driven System Flow</h2>
          </div>

          <div className="relative">
            <div className="flex flex-col gap-0">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-6 pb-8">
                  {/* Vertical line connector */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-8 top-24 h-12 w-0.5 bg-gradient-to-b from-orange-400 to-transparent"></div>
                  )}
                  
                  {/* Circle icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex-shrink-0 relative z-10"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white text-2xl shadow-lg">
                      {step.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex-1 pt-2"
                  >
                    <h4 className="font-bold text-gray-900 text-lg">{step.title}</h4>
                    <p className="text-gray-600 mt-1">{step.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 p-6 text-center">
              <p className="text-gray-900 font-semibold text-lg">
                ✨ Ensures speed, accuracy, security, and scalability
              </p>
              <p className="text-sm text-gray-600 mt-2">
                End-to-end automation with real-time monitoring and compliance checks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Industries Scroll Section Component with Smooth Animation
function IndustriesScrollSection() {
  const industriesData = [
    { name: "Startups & SaaS", icon: "🚀", color: "from-blue-500 to-cyan-500" },
    { name: "Enterprises", icon: "🏢", color: "from-indigo-500 to-blue-500" },
    { name: "E-Commerce", icon: "🛍️", color: "from-purple-500 to-pink-500" },
    { name: "Real Estate", icon: "🏠", color: "from-orange-500 to-red-500" },
    { name: "Healthcare", icon: "⚕️", color: "from-green-500 to-emerald-500" },
    { name: "EdTech", icon: "🎓", color: "from-yellow-500 to-orange-500" },
    { name: "Local Business", icon: "🏪", color: "from-rose-500 to-pink-500" }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
              MORE INDUSTRIES
            </span>
            <h2 className="text-4xl font-bold text-gray-900">We Serve Beyond FinTech</h2>
          </div>

          <div className="relative">
            {/* Gradient Fade for Seamless Effect */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent"></div>

            <div className="overflow-hidden">
              <div className="flex animate-scroll-left gap-8 pb-4">
                {[...industriesData, ...industriesData].map((ind, idx) => (
                  <motion.div
                    key={`${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx % industriesData.length) * 0.05 }}
                    className="flex-shrink-0 w-72 group cursor-pointer"
                  >
                    <div className={`flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br ${ind.color} p-10 h-56 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-white`}>
                      <div className="text-7xl">{ind.icon}</div>
                      <p className="text-center font-bold text-xl">{ind.name}</p>
                      <div className="text-white/90 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                        Learn More →
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SubIndustryPage() {
    const { id, subId } = useParams<{ id: string; subId: string }>();
    const navigate = useNavigate();
    const [showAllCategories, setShowAllCategories] = useState(false);
    const industry = industries.find((ind) => ind.id === id);
    const subIndustry = industry?.subIndustries.find((sub) => sub.id === subId);

    useEffect(() => {
        if (!industry || !subIndustry) {
            // navigate('/404');
        }
    }, [industry, subIndustry, navigate]);

    if (!industry || !subIndustry) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Sub-Industry Not Found</h1>
                    <Link to="/industries" className="text-orange-600 font-semibold hover:underline">Back to Industries</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px]">
                <div className="absolute inset-0">
                    <img
                        src={industry.image}
                        alt={`NanoFlows ${subIndustry.name} AI Solutions`}
                        title={`NanoFlows ${subIndustry.name} AI Solutions`}
                        className="object-cover w-full h-full absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/65 to-slate-900/55" > </div>
                </div>
                <div className="relative mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-4xl" >
                        <div className="mb-4 flex flex-wrap items-center gap-3" >
                            <Link
                                to={`/industries/${industry.id}`}
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                            >
                                <span className="text-xl" > {industry.icon} </span>
                                <span className="text-sm font-medium" > {industry.name} </span>
                            </Link>
                            <span className="text-white/50" >→</span>
                            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-white backdrop-blur-sm" >
                                <span className="text-xl" > {subIndustry.icon} </span>
                                <span className="text-sm font-semibold" > {subIndustry.name} </span>
                            </div>
                        </div>
                        <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 px-4 py-2 text-4xl shadow-lg" >
                            {subIndustry.icon}
                        </div>
                        <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl" >
                            {subIndustry.name}
                        </h1>
                        <p className="mt-4 text-xl text-orange-300 font-semibold" >
                            {subIndustry.tagline}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4" >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                Get Started Today →
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition hover:-translate-y-0.5"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FinTech-specific content sections */}
            {subIndustry.id === "fintech-startups" && (
                <>
                    {/* Section 1: Overview */}
                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-12 text-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
                                        OVERVIEW
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding the FinTech Landscape</h2>
                                </div>
                                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
                                    <div className="space-y-6 text-gray-700 leading-relaxed">
                                        <p className="text-lg">
                                            FinTech startups are companies that use technology to deliver financial services such as payments, lending, banking, insurance, investments, and expense management. These businesses rely heavily on software platforms, APIs, data, and automation to operate efficiently.
                                        </p>
                                        <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
                                            <p className="font-semibold text-gray-900 mb-2">The Challenge</p>
                                            <p>
                                                As FinTech companies grow, they face critical challenges: high user volume, strict compliance requirements, security risks, and operational complexity. To scale safely and profitably, FinTech startups need AI-powered systems, automation, and secure software architecture from day one.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Business Categories */}
                    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-12 text-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
                                        CATEGORIES
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900">20+ FinTech Business Models We Support</h2>
                                    <p className="text-gray-600 mt-4">Nano Flows provides tailored solutions for:</p>
                                </div>
                                <div className="grid gap-3 md:grid-cols-2">
                                    {[
                                        "Payment Gateway Platforms",
                                        "Digital Wallet Applications",
                                        "Buy Now Pay Later (BNPL) Platforms",
                                        "Neo Banks & Digital Banking Apps",
                                        "Loan Aggregation Platforms",
                                        "Peer-to-Peer Lending Startups",
                                        "MSME & Microfinance Platforms",
                                        "Credit Scoring & Risk Analytics Companies",
                                        "Insurance Technology (InsurTech) Platforms",
                                        "Wealth Management & Investment Apps",
                                        "Robo-Advisory Platforms",
                                        "Crypto & Blockchain-Based FinTech",
                                        "Regulatory Technology (RegTech) Platforms",
                                        "Accounting & Expense Management SaaS",
                                        "Subscription Billing & Invoicing Platforms",
                                        "Payroll & Salary Advance Solutions",
                                        "Cross-Border Payment Startups",
                                        "Fraud Detection & AML Platforms",
                                        "Open Banking API Providers",
                                        "Embedded Finance Solutions"
                                    ].slice(0, showAllCategories ? undefined : 10).map((category, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4 hover:border-orange-300 hover:bg-orange-50 transition">
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">{index + 1}</div>
                                            <span className="text-gray-900 font-medium">{category}</span>
                                        </div>
                                    ))}
                                </div>
                                {!showAllCategories && (
                                    <div className="mt-8 flex justify-center">
                                        <button
                                            onClick={() => setShowAllCategories(true)}
                                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
                                        >
                                            Show More
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Who & Why */}
                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-12 text-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
                                        WHO & WHY
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900">Who We Serve and Why They Need Us</h2>
                                </div>
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white font-bold">👥</div>
                                            <h3 className="text-xl font-bold text-gray-900">Who We Serve</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {["FinTech startup founders", "Early-stage and growth-stage FinTech companies", "SaaS-based financial platforms", "Financial product innovators", "Enterprises launching FinTech products"].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                    <span className="text-orange-500 font-bold flex-shrink-0 mt-1">✓</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-white font-bold">💡</div>
                                            <h3 className="text-xl font-bold text-gray-900">Why They Need Us</h3>
                                        </div>
                                        <ul className="space-y-4">
                                            {["Automate manual financial workflows", "Improve customer onboarding & engagement", "Reduce operational costs", "Maintain compliance & security", "Scale faster without system failures"].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                    <span className="text-orange-500 font-bold flex-shrink-0 mt-1">→</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Tech Stack */}
                    <section className="bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-6xl">
                                <div className="mb-12 text-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
                                        POWERED BY
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900">Technologies We Work With</h2>
                                    <p className="text-gray-600 mt-4">Enterprise-grade stack built for modern solutions</p>
                                </div>
                                <TechStackTabs />
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Features */}
                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-6xl">
                                <div className="mb-12 text-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
                                        FEATURES
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900">How NanoFlows Serves {subIndustry.name}</h2>
                                    <p className="text-gray-600 mt-4">NanoFlows builds secure, scalable, AI-powered systems specifically for {subIndustry.name.toLowerCase()} operations, including:</p>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    {[
                                        { icon: "🤖", title: "AI-Powered Automation", desc: "Automate customer workflows and reduce manual tasks by 80%" },
                                        { icon: "🔐", title: "Enterprise Security", desc: "Bank-level encryption, compliance-ready architecture" },
                                        { icon: "📈", title: "Real-Time Analytics", desc: "Dashboard with KPIs, user behavior, and transaction insights" },
                                        { icon: "⚡", title: "High Performance", desc: "Sub-second API response time, 99.99% uptime SLA" },
                                        { icon: "🔗", title: "API Integrations", desc: "Connect with payment gateways, banks, and third-party services" },
                                        { icon: "📱", title: "Mobile-First Design", desc: "Responsive web and native app support" },
                                        { icon: "🌍", title: "Multi-Currency", desc: "Support 150+ currencies and instant conversions" },
                                        { icon: "👥", title: "Customer Support", desc: "24/7 AI chatbot + dedicated support team" }
                                    ].map((feature, idx) => (
                                        <div key={idx} className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
                                            <div className="mb-4 text-4xl">{feature.icon}</div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Architecture */}
                    <ArchitectureFlowSection />

                    <section className="bg-white py-20" >
                        <div className="mx-auto max-w-[1400px] px-6" >
                            <div className="mx-auto max-w-4xl" >
                                <div className="mb-8 text-center" >
                                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                        Core {subIndustry.name} Capabilities Included
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-2xl text-gray-600" >
                                        Every {subIndustry.name.toLowerCase()} product we build includes:
                                    </p>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" >
                                    {subIndustry.coreCapabilities.map((capability, index) => (
                                        <div
                                            key={index}
                                            className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                                        >
                                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white" >
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-sm font-bold text-gray-900" > {capability} </h3>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-center text-gray-600 font-medium" >
                                    Security, performance, and accuracy are non - negotiable.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20" >
                        <div className="mx-auto max-w-[1400px] px-6" >
                            <div className="mx-auto max-w-4xl" >
                                <div className="mb-8 text-center" >
                                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                        Ideal For + Business Outcomes
                                    </h2>
                                </div>
                                <div className="grid gap-8 lg:grid-cols-2" >
                                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" >
                                        <h3 className="mb-6 text-xl font-bold text-gray-900" > Ideal for: </h3>
                                        <div className="space-y-3" >
                                            {subIndustry.idealFor.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
                                                >
                                                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold" >
                                                        {index + 1}
                                                    </div>
                                                    <p className="text-gray-700 font-medium" > {item} </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" >
                                        <h3 className="mb-6 text-xl font-bold text-gray-900" > Business outcomes: </h3>
                                        <div className="space-y-3" >
                                            {subIndustry.businessOutcomes.map((outcome, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 p-4"
                                                >
                                                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white" >
                                                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-gray-700 font-medium" > {outcome} </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-20" >
                        <div className="mx-auto max-w-[1400px] px-6" >
                            <div className="mx-auto max-w-5xl" >
                                <div className="mb-10 text-center" >
                                    <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600" >
                                        Our Services
                                    </span>
                                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                        Related Services for {subIndustry.name}
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-2xl text-gray-600" >
                                        Explore the AI services that best complement your {subIndustry.name.toLowerCase()} needs and accelerate your digital transformation.
                                    </p>
                                </div>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" >
                                    {getRelatedServices(subIndustry, industry.id).map((service, index) => (
                                        <div
                                            key={index}
                                            className="group rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl flex flex-col h-full"
                                        >
                                            <div className="relative h-40 overflow-hidden flex-shrink-0" >
                                                <img
                                                    src={service.image}
                                                    alt={`${service.title} - NanoFlows ${service.category} Service`}
                                                    title={service.title}
                                                    className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" > </div>
                                            </div>
                                            <div className="p-5 text-center flex flex-col flex-1" >
                                                <span className="mb-2 inline-block text-xs font-medium text-orange-500 uppercase tracking-wide" >
                                                    {service.category}
                                                </span>
                                                <h3 className="mb-2 text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors" >
                                                    {service.title}
                                                </h3>
                                                <p className="mb-4 text-sm text-gray-600 leading-relaxed flex-1" >
                                                    {service.description}
                                                </p>
                                                <Link
                                                    to={`/services/${service.id}`}
                                                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 mt-auto"
                                                >
                                                    Learn More<span>→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 text-center" >
                                    <Link
                                        to="/services"
                                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
                                    >
                                        View All Our Services
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 8: Industries Scroll */}
                    <IndustriesScrollSection />
                </>
            )}

            <Footer />
        </div>
    );
}
