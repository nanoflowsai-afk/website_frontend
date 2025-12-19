import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import leadGenImage from "@assets/generated_images/ai_lead_generation_dashboard.png";
import callingImage from "@assets/generated_images/ai_calling_system_interface.png";
import crmImage from "@assets/generated_images/ai_crm_analytics_dashboard.png";
import contentImage from "@assets/generated_images/ai_content_marketing_platform.png";
import assistantImage from "@assets/generated_images/internal_ai_team_assistant.png";
import heroImage from "@assets/generated_images/products_hero_background_abstract.png";

const productTypes: {
    id: string;
    name: string;
    image: string;
    desc: string;
    features: string[];
    color: string;
    highlight: string;
}[] = [
        {
            id: "lead-generation",
            name: "AI Lead Generation Engines",
            image: leadGenImage,
            desc: "Autonomous systems that identify, qualify, and nurture leads 24/7 without human intervention. Built to scale your pipeline effortlessly.",
            features: ["Automated prospecting", "Lead scoring AI", "Multi-channel outreach", "CRM sync"],
            color: "from-red-500 to-orange-500",
            highlight: "Scale your pipeline 10x",
        },
        {
            id: "calling-followup",
            name: "AI Calling & Follow-Up Systems",
            image: callingImage,
            desc: "Voice AI platforms that handle outbound calls, follow-ups, and appointment scheduling autonomously with human-like conversations.",
            features: ["Natural voice AI", "Smart scheduling", "Call transcription", "Sentiment analysis"],
            color: "from-orange-500 to-amber-500",
            highlight: "Never miss a follow-up",
        },
        {
            id: "crm-dashboards",
            name: "AI CRM & Dashboards",
            image: crmImage,
            desc: "Intelligent CRM platforms that update themselves, predict outcomes, and surface insights without manual data entry.",
            features: ["Auto-updating records", "Predictive analytics", "Real-time insights", "Custom reporting"],
            color: "from-amber-500 to-yellow-500",
            highlight: "Zero data entry",
        },
        {
            id: "content-marketing",
            name: "AI Content & Marketing Systems",
            image: contentImage,
            desc: "End-to-end content platforms that create, optimize, and distribute marketing assets across all channels autonomously.",
            features: ["Auto content generation", "SEO optimization", "Multi-channel publishing", "Performance tracking"],
            color: "from-green-500 to-emerald-500",
            highlight: "Content on autopilot",
        },
        {
            id: "internal-assistants",
            name: "Internal AI Assistants for Teams",
            image: assistantImage,
            desc: "Custom AI assistants trained on your company knowledge to support employees with instant answers and automated workflows.",
            features: ["Company knowledge base", "Task automation", "Meeting summaries", "Slack/Teams integration"],
            color: "from-blue-500 to-indigo-500",
            highlight: "Your team's AI copilot",
        },
    ];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="NanoFlows AI Products - Autonomous AI Platforms for lead generation, CRM, calling systems and content marketing"
                        title="NanoFlows AI Products"
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
                </div>
                <div className="relative mx-auto max-w-[1400px] px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                            Our Products
                        </p>
                        <h1 className="mt-6 text-4xl font-extrabold text-white md:text-6xl leading-tight">
                            AI Platforms That <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Work Autonomously</span>
                        </h1>
                        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            NanoFlows products are built to operate independently with minimal human input.
                            They don't assist — they execute. Set them up once, and watch them work.
                        </p>
                    </div>
                </div>
            </section>

            <section id="products" className="py-20 bg-white">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="space-y-20">
                        {productTypes.map((product, idx) => (
                            <div
                                key={product.id}
                                className={`grid gap-12 lg:grid-cols-2 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                                    }`}
                            >
                                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl h-80">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} - NanoFlows AI Product for autonomous business operations`}
                                            title={product.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6">
                                            <span className={`inline-block rounded-full bg-gradient-to-r ${product.color} px-4 py-2 text-sm font-semibold text-white`}>
                                                {product.highlight}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h3>
                                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                        {product.desc}
                                    </p>
                                    <div className="mt-8">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-600 mb-4">
                                            Key Capabilities
                                        </h4>
                                        <ul className="grid grid-cols-2 gap-3">
                                            {product.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-gray-700">
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <Link
                                            to={`/products/${product.id}`}
                                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                                        >
                                            Learn More →
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50"
                                        >
                                            Get Demo
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
                            Need a Custom Solution?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Every business is unique. Let's discuss how we can build an AI platform
                            tailored specifically to your workflows and goals.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                            >
                                Let's Build Together →
                            </Link>
                            <Link
                                to="/services"
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
