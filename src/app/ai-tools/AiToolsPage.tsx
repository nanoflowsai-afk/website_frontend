import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { apiFetch } from "@/lib/api";
// import { aiTools, AiTool } from "@/lib/data/ai-tools"; // Removed static import
interface AiTool {
    id: number;
    name: string;
    description: string;
    category: string;
    pricing: string;
    websiteUrl: string;
    imageUrl: string;
    isActive: boolean;
    displayOrder: number;
}
import heroImage from "@assets/stock_images/ai_agents_automation_c41dbe10.jpg";
import meetImage from "@assets/stock_images/business_workflow_au_cb921712.jpg";

export default function AiToolsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedPricing, setSelectedPricing] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tools, setTools] = useState<AiTool[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const res = await fetch("/api/ai-tools"); // Public endpoint
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await res.text();
                    console.error("Received non-JSON response:", text.substring(0, 100));
                    throw new TypeError("Received non-JSON response from server");
                }
                const data = await res.json();
                setTools(data.tools || []);
            } catch (err) {
                console.error("Failed to fetch tools", err);
            } finally {
                setLoading(false);
            }
        };
        fetchTools();
    }, []);


    const categories = Array.from(new Set(tools.map((tool) => tool.category)));
    const pricingOptions = ["Free", "Freemium", "Paid"];

    const filteredTools = useMemo(() => {
        return tools.filter((tool) => {
            const matchesSearch =
                tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = !selectedCategory || tool.category === selectedCategory;
            const matchesPricing = !selectedPricing || tool.pricing === selectedPricing;
            return matchesSearch && matchesCategory && matchesPricing;
        });
    }, [tools, searchTerm, selectedCategory, selectedPricing]);

    // Section 3 Data
    const features = [
        {
            icon: "⚡",
            title: "AI-First Approach",
            description: "We prioritize artificial intelligence in every layer of our solutions.",
        },
        {
            icon: "🛠️",
            title: "Custom-Built Solutions",
            description: "Tailored AI tools designed to fit your specific business needs.",
        },
        {
            icon: "🛡️",
            title: "Scalable & Secure Systems",
            description: "Enterprise-grade security and scalability for growing businesses.",
        },
        {
            icon: "🤝",
            title: "End-to-End Support",
            description: "From consultation to deployment and maintenance.",
        }
    ];

    // Section 4 Categories
    const serviceCategories = [
        { name: "AI Tools", icon: "🤖", link: "#tool-list" }, // Links to internal tool list
        { name: "Automation & Workflows", icon: "⚙️", link: "/services" },
        { name: "Webinars & Learning", icon: "🎓", link: "/webinars" },
        { name: "Business AI Solutions", icon: "💼", link: "/services" },
        { name: "Custom AI Development", icon: "🖥️", link: "/contact" },
    ];

    const scrollToTools = () => {
        const section = document.getElementById("tool-list");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white font-sans text-gray-900">

                {/* 1️⃣ Hero Section */}
                <section className="relative py-24 sm:py-32 overflow-hidden flex items-center justify-center min-h-[500px]">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt="AI Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-white text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Intelligent Systems</span> with AI
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Nano Flows integrates AI into every business process — automation, tools, and workflows.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link to="/contact">
                                    <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition duration-300 transform hover:-translate-y-1">
                                        Get Started
                                    </button>
                                </Link>
                                <button
                                    onClick={scrollToTools}
                                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition duration-300"
                                >
                                    Explore Solutions
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2️⃣ Meet Nano Flows */}
                <section className="pt-24 pb-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:w-1/2"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-100 group">
                                    <img
                                        src={meetImage}
                                        alt="Meet Nano Flows"
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-60"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:w-1/2"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                    Meet <span className="text-orange-500">Nano Flows</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    We are pioneering the future of business intelligence. Our mission is to seamlessly integrate artificial intelligence into your existing infrastructure, creating custom solutions that drive efficiency and innovation.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "AI-powered system integration",
                                        "Custom AI tools & agents",
                                        "Intelligent automation workflows"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-lg font-medium text-gray-800">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3️⃣ Why Choose Us */}
                <section className="pt-16 pb-16 bg-orange-50/50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Delivering excellence through innovation and dedicated support.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl hover:border-orange-300 transition duration-300 group"
                                >
                                    <div className="text-3xl mb-4 bg-orange-50 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4️⃣ Browse by Category */}
                <section className="pt-16 pb-12 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Browse by Category</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {serviceCategories.map((cat, idx) => {
                                const isInternal = cat.link.startsWith("#");
                                const CardContent = (
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-orange-400 transition duration-300 flex items-center gap-4 h-full cursor-pointer group"
                                    >
                                        <div className="text-3xl bg-orange-50 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-orange-100 transition duration-300 flex-shrink-0">
                                            {cat.icon}
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition duration-300">{cat.name}</h3>
                                        </div>
                                    </motion.div>
                                );

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        {isInternal ? (
                                            <button onClick={() => {
                                                if (cat.link === "#tool-list") scrollToTools();
                                            }} className="w-full h-full block">
                                                {CardContent}
                                            </button>
                                        ) : (
                                            <Link to={cat.link} className="w-full h-full block">
                                                {CardContent}
                                            </Link>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>



                {/* 6️⃣ Existing Tool List (Retained Functionality) */}
                <section id="tool-list" className="pt-12 pb-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-3 uppercase tracking-wide">
                                Internal Database
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900">Explore Our AI Tool Database</h2>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex-1 w-full relative">
                                <input
                                    type="text"
                                    placeholder="Search tools..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:outline-none transition"
                                />
                                <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <select
                                    value={selectedCategory || ""}
                                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                                    className="px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:outline-none bg-white w-full md:w-auto cursor-pointer"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedPricing || ""}
                                    onChange={(e) => setSelectedPricing(e.target.value || null)}
                                    className="px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:outline-none bg-white w-full md:w-auto cursor-pointer"
                                >
                                    <option value="">All Pricing</option>
                                    {pricingOptions.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Grid */}
                        <AnimatePresence mode="wait">
                            {filteredTools.length === 0 ? (
                                <div className="text-center py-10">
                                    <p className="text-gray-500">No tools found.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {filteredTools.map((tool) => (
                                        <motion.div
                                            key={tool.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="bg-white rounded-xl overflow-hidden border-2 border-orange-100 hover:shadow-xl hover:border-orange-400 transition duration-300 flex flex-col"
                                        >
                                            <div className="w-full overflow-hidden bg-white relative group">
                                                <img src={tool.imageUrl} alt={tool.name} className="w-full h-auto object-cover group-hover:scale-105 transition duration-500" />
                                                <div className="absolute top-2 right-2">
                                                    <span className={`px-2 py-1 rounded text-xs font-bold bg-white/90 backdrop-blur shadow-sm ${tool.pricing === "Free" ? "text-green-600" : tool.pricing === "Paid" ? "text-red-500" : "text-blue-500"
                                                        }`}>
                                                        {tool.pricing}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-5 flex-1 flex flex-col">
                                                <h3 className="font-bold text-gray-900 text-lg mb-1">{tool.name}</h3>
                                                <p className="text-xs text-orange-500 font-semibold mb-3">{tool.category}</p>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{tool.description}</p>
                                                <a href={tool.websiteUrl} target="_blank" rel="noreferrer" className="mt-auto text-center w-full py-2 border border-orange-500 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition text-sm">
                                                    Visit Tool
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* 5️⃣ Have a Product Idea? */}
                <section className="pt-10 pb-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="flex flex-col md:flex-row gap-6 md:items-start max-w-3xl">
                                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Have a Product Idea?</h2>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-1">
                                        Can't find the product you need? Let us know what you're looking for — we're constantly expanding our collection with community ideas.
                                    </p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Whether it's a UI Kit, plugin, or AI tool, your suggestion could become our next release.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-auto">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold text-sm hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    Request Product
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Request Product Modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                            >
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                    <h3 className="text-xl font-bold text-gray-900">Request a Product</h3>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="text-gray-400 hover:text-gray-600 transition"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                                <div className="p-6">
                                    {!isSuccess ? (
                                        <form onSubmit={async (e) => {
                                            e.preventDefault();
                                            const form = e.target as HTMLFormElement;
                                            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                                            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                                            const idea = (form.elements.namedItem("idea") as HTMLTextAreaElement).value;

                                            try {
                                                const response = await apiFetch("/api/product-requests", {
                                                    method: "POST",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({ name, email, idea }),
                                                });

                                                if (response.ok) {
                                                    setIsSuccess(true);
                                                    form.reset();
                                                } else {
                                                    alert("Failed to submit request. Please try again.");
                                                }
                                            } catch (error) {
                                                console.error("Submission error:", error);
                                                alert("An error occurred. Please try again.");
                                            }
                                        }}>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                                                    <input required name="name" type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition" placeholder="John Doe" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                                                    <input required name="email" type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition" placeholder="john@example.com" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Idea <span className="text-red-500">*</span></label>
                                                    <textarea required name="idea" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition h-32 resize-none" placeholder="Describe the product you're looking for..."></textarea>
                                                </div>
                                                <div className="flex justify-end gap-3 mt-6">
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsModalOpen(false)}
                                                        className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 shadow-md hover:shadow-lg transition"
                                                    >
                                                        Submit Request
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="text-center py-8">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                                            <p className="text-gray-500 mb-8 max-w-xs mx-auto">Thank you for your product idea. We'll review it and get back to you shortly.</p>
                                            <button
                                                onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
                                                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/25 transition transform hover:-translate-y-1"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </main>
            <Footer />
        </>
    );
}
