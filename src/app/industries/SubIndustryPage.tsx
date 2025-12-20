import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { industries, getRelatedServices } from "@/lib/data/industries";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Tech Stack Section Component
function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    {
      label: "Frontend",
      technologies: [
        { name: "React", icon: "🎨" },
        { name: "Next.js", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎯" },
        { name: "Vue.js", icon: "💚" },
        { name: "Angular", icon: "🅰️" }
      ]
    },
    {
      label: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟩" },
        { name: "Python", icon: "🐍" },
        { name: "FastAPI", icon: "⚙️" },
        { name: "Express", icon: "🚂" },
        { name: "Django", icon: "🎭" },
        { name: "Go", icon: "🔵" }
      ]
    },
    {
      label: "Databases",
      technologies: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "Firebase", icon: "🔥" },
        { name: "MySQL", icon: "🐬" },
        { name: "DynamoDB", icon: "⚡" }
      ]
    },
    {
      label: "Cloud & DevOps",
      technologies: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
        { name: "GCP", icon: "🌐" },
        { name: "Azure", icon: "💙" },
        { name: "CI/CD", icon: "🔄" }
      ]
    },
    {
      label: "AI & LLM",
      technologies: [
        { name: "OpenAI", icon: "🤖" },
        { name: "Claude", icon: "🧠" },
        { name: "LangChain", icon: "🔗" },
        { name: "RAG Systems", icon: "📚" },
        { name: "Custom Models", icon: "🎓" },
        { name: "Embeddings", icon: "🔍" }
      ]
    }
  ];

  const activeTechs = categories[activeCategory].technologies;

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-orange-50/30 py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
              <span className="text-lg">4️⃣</span> TECH STACK
            </span>
            <h2 className="text-4xl font-bold text-gray-900">Modern, Secure & Scalable Technology</h2>
            <p className="text-gray-600 mt-4">Enterprise-grade stack built for FinTech</p>
          </div>

          <div className="space-y-6">
            {/* Category Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide gap-2 border-b border-gray-200 pb-4">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`relative whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors flex-shrink-0 rounded-lg ${
                    activeCategory === idx
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {cat.label}
                  {activeCategory === idx && (
                    <motion.div
                      layoutId="activeTech"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Technology Cards */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 md:grid-cols-3"
                >
                  {activeTechs.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white p-4 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg min-h-[110px]"
                    >
                      <div className="text-5xl">{tech.icon}</div>
                      <span className="text-sm font-medium text-gray-600 text-center">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Architecture Flow Section Component
function ArchitectureFlowSection() {
  const steps = [
    { title: "Lead / User Entry", icon: "📝", desc: "Capture customer data" },
    { title: "AI Lead Qualification", icon: "🎯", desc: "Score & segment leads" },
    { title: "CRM & User Management", icon: "👤", desc: "Organize customer info" },
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
              <span className="text-lg">6️⃣</span> ARCHITECTURE
            </span>
            <h2 className="text-4xl font-bold text-gray-900">AI-Driven System Flow</h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white text-2xl shadow-lg mb-4">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 text-center mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600 text-center">{step.desc}</p>
                  </motion.div>

                  {/* Flow arrows for desktop */}
                  {idx < steps.length - 1 && idx % 3 !== 2 && (
                    <div className="hidden md:flex absolute top-8 -right-3 text-gray-400 text-2xl">→</div>
                  )}
                  {idx % 3 === 2 && idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute -bottom-6 text-gray-400 text-2xl">↓</div>
                  )}
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

// Industries Scroll Section Component
function IndustriesScrollSection() {
  const industriesData = [
    { name: "Startups & SaaS", icon: "🚀" },
    { name: "Enterprises", icon: "🏢" },
    { name: "E-Commerce", icon: "🛍️" },
    { name: "Real Estate", icon: "🏠" },
    { name: "Healthcare", icon: "⚕️" },
    { name: "EdTech", icon: "🎓" },
    { name: "Local Business", icon: "🏪" }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
              <span className="text-lg">8️⃣</span> MORE INDUSTRIES
            </span>
            <h2 className="text-4xl font-bold text-gray-900">We Serve Beyond FinTech</h2>
            <p className="text-gray-600 mt-2">Scroll to explore all industries</p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 pb-4 w-max md:w-full">
                {industriesData.map((ind, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex-shrink-0 w-40 md:w-auto md:flex-1 group"
                  >
                    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 h-48 hover:border-orange-300 hover:shadow-lg hover:bg-orange-50 transition duration-300">
                      <div className="text-5xl">{ind.icon}</div>
                      <p className="text-center font-bold text-gray-900 text-sm md:text-base">{ind.name}</p>
                      <div className="text-orange-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
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
                                        <span className="text-lg">1️⃣</span> OVERVIEW
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
                                        <span className="text-lg">2️⃣</span> CATEGORIES
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
                                    ].map((category, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 p-4 hover:border-orange-300 hover:bg-orange-50 transition">
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">{index + 1}</div>
                                            <span className="text-gray-900 font-medium">{category}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Who & Why */}
                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-12 text-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
                                        <span className="text-lg">3️⃣</span> WHO & WHY
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
                    <TechStackSection />

                    {/* Section 5: Features */}
                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-12 text-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
                                        <span className="text-lg">5️⃣</span> FEATURES
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900">Comprehensive FinTech Solutions</h2>
                                    <p className="text-gray-600 mt-4">Everything you need to build and scale</p>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {[
                                        "AI-Native FinTech SaaS Platform Development",
                                        "Customer & Lead Management CRM",
                                        "AI Chatbots for onboarding & support",
                                        "WhatsApp & Email Automation",
                                        "AI-Based Follow-Up & Retention Systems",
                                        "Automated KYC & Workflow Management",
                                        "Role-Based Admin & User Dashboards",
                                        "Real-Time Business & Financial Analytics",
                                        "API-Ready Architecture for integrations"
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 hover:border-orange-300 hover:shadow-md transition">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-sm">✓</div>
                                            <span className="text-gray-900 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Architecture */}
                    <ArchitectureFlowSection />

                    {/* Section 7: Benefits */}
                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-12 text-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 mb-4">
                                        <span className="text-lg">7️⃣</span> BENEFITS
                                    </span>
                                    <h2 className="text-4xl font-bold text-gray-900">Measurable Business Impact</h2>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {[
                                        { metric: "50-70%", description: "Reduction in manual work" },
                                        { metric: "10x", description: "Faster user onboarding" },
                                        { metric: "Higher", description: "Customer retention rates" },
                                        { metric: "Real-time", description: "Operational visibility" },
                                        { metric: "100%", description: "Compliance readiness" },
                                        { metric: "Confident", description: "Scale with growth" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 text-center hover:border-orange-500 transition">
                                            <div className="text-4xl font-bold text-orange-600 mb-2">{item.metric}</div>
                                            <p className="text-gray-700 font-medium">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 8: Other Industries */}
                    <IndustriesScrollSection />

                    {/* CTA Section */}
                    <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 py-20">
                        <div className="mx-auto max-w-[1400px] px-6">
                            <div className="mx-auto max-w-3xl text-center">
                                <h2 className="text-4xl font-bold text-white md:text-5xl mb-4">
                                    Ready to Transform Your FinTech Business?
                                </h2>
                                <p className="text-lg text-white/90 mb-10">
                                    Let's discuss how our AI solutions can help you automate operations, reduce costs, and deliver exceptional experiences.
                                </p>
                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 shadow-lg hover:shadow-xl transition hover:-translate-y-0.5"
                                    >
                                        Schedule a Demo →
                                    </Link>
                                    <Link
                                        to={`/industries/${industry.id}`}
                                        className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                                    >
                                        ← Back to {industry.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Generic sub-industry sections for non-FinTech pages */}
            {subIndustry.id !== "fintech-startups" && (
                <>
                    <section className="bg-gradient-to-b from-gray-50 to-white py-20" >
                        <div className="mx-auto max-w-[1400px] px-6" >
                            <div className="mx-auto max-w-4xl" >
                                <div className="mb-8 text-center" >
                                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                        {subIndustry.name} Sub - Industry Overview
                                    </h2>
                                </div>
                                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" >
                                    <p className="text-lg text-gray-700 leading-relaxed" >
                                        {subIndustry.overview}
                                    </p>
                                    <p className="mt-6 text-orange-600 font-semibold italic" >
                                        We build trust - first, AI - powered {subIndustry.name.toLowerCase()} systems — not just apps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-20" >
                        <div className="mx-auto max-w-[1400px] px-6" >
                            <div className="mx-auto max-w-4xl" >
                                <div className="mb-8 text-center" >
                                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                        Why {subIndustry.name} Choose Nano Flows
                                    </h2>
                                </div>
                                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-gray-50 p-8" >
                                    <p className="mb-6 text-gray-700 font-medium" >
                                        {subIndustry.whyChoose.intro}
                                    </p>
                                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-500" >
                                        Nano Flows advantage:
                                    </p>
                                    <div className="space-y-3" >
                                        {subIndustry.whyChoose.points.map((point, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                                            >
                                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white" >
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-700 font-medium" > {point} </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 p-4" >
                                        <p className="text-center text-orange-800 font-semibold" >
                                            Result: A {subIndustry.name.toLowerCase()} product investors and users trust.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20" >
                        <div className="mx-auto max-w-[1400px] px-6" >
                            <div className="mx-auto max-w-4xl" >
                                <div className="mb-8 text-center" >
                                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                        What We Build for {subIndustry.name}
                                    </h2>
                                </div>
                                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" >
                                    <p className="mb-6 text-gray-700 font-medium" >
                                        {subIndustry.whatWeBuild.intro}
                                    </p>
                                    <div className="grid gap-4 md:grid-cols-2" >
                                        {subIndustry.whatWeBuild.solutions.map((solution, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-orange-200 hover:bg-orange-50"
                                            >
                                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-white text-sm font-bold" >
                                                    {index + 1}
                                                </div>
                                                <p className="text-gray-700 font-medium" > {solution} </p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-6 text-center text-gray-600 italic" >
                                        {subIndustry.whatWeBuild.footer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

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

                    <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20" >
                        <div className="mx-auto max-w-[1400px] px-6" >
                            <div className="mx-auto max-w-3xl text-center" >
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-3xl shadow-lg" >
                                    {subIndustry.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                    Ready to Transform Your {subIndustry.name} Business ?
                                </h2>
                                <p className="mt-4 text-lg text-gray-600" >
                                    Let's discuss how our AI solutions can help you automate operations,
                                    reduce costs, and deliver exceptional experiences to your customers.
                                </p>
                                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row" >
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                                    >
                                        Schedule a Demo →
                                    </Link>
                                    <Link
                                        to={`/industries/${industry.id}`}
                                        className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50"
                                    >
                                        ← Back to {industry.name}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            <Footer />
        </div>
    );
}
