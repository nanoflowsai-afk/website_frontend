import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import webinarHeroImage from "@assets/generated_images/ai_assistants_team_hero_no_text.png";

type Webinar = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  speaker: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "AI Automation" | "AI Agents" | "Marketing AI" | "Business AI" | "Workshops";
  type: "Upcoming" | "Live" | "Recorded";
  image: string;
  registeredCount?: number;
  maxCapacity?: number;
};

const allWebinars: Webinar[] = [
  {
    id: 1,
    title: "Automate Your Business with AI Agents",
    description: "Learn how AI agents can automate workflows, customer support, and decision-making.",
    date: "Dec 28, 2025",
    time: "2:00 PM IST",
    duration: "90 Minutes",
    speaker: "Rajesh Kumar",
    level: "Beginner",
    category: "AI Agents",
    type: "Upcoming",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    registeredCount: 234,
    maxCapacity: 500,
  },
  {
    id: 2,
    title: "Marketing Automation with AI",
    description: "Transform your marketing with intelligent automation and personalization strategies.",
    date: "Dec 25, 2025",
    time: "3:30 PM IST",
    duration: "60 Minutes",
    speaker: "Priya Singh",
    level: "Intermediate",
    category: "Marketing AI",
    type: "Live",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    registeredCount: 512,
    maxCapacity: 1000,
  },
  {
    id: 3,
    title: "Building Intelligent Search Systems",
    description: "Enterprise AI search solutions for better data discovery and insights.",
    date: "Dec 20, 2025",
    time: "1:00 PM IST",
    duration: "75 Minutes",
    speaker: "Amit Patel",
    level: "Advanced",
    category: "AI Automation",
    type: "Recorded",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    title: "AI for Business Growth",
    description: "Practical strategies to scale your business using AI-driven automation.",
    date: "Dec 30, 2025",
    time: "4:00 PM IST",
    duration: "90 Minutes",
    speaker: "Sarah Johnson",
    level: "Beginner",
    category: "Business AI",
    type: "Upcoming",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    registeredCount: 156,
    maxCapacity: 500,
  },
  {
    id: 5,
    title: "Workshop: Custom LLM Development",
    description: "Hands-on workshop on building custom language models for your use cases.",
    date: "Dec 15, 2025",
    time: "10:00 AM IST",
    duration: "120 Minutes",
    speaker: "Dr. Neha Gupta",
    level: "Advanced",
    category: "Workshops",
    type: "Recorded",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
  {
    id: 6,
    title: "AI Agents in Customer Support",
    description: "Deploy AI agents to handle customer inquiries and support tickets automatically.",
    date: "Jan 5, 2026",
    time: "2:30 PM IST",
    duration: "60 Minutes",
    speaker: "Marcus Chen",
    level: "Intermediate",
    category: "AI Agents",
    type: "Upcoming",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    registeredCount: 89,
    maxCapacity: 500,
  },
];

const benefitsData = [
  {
    icon: "🎯",
    title: "Real-World Use Cases",
    description: "Practical, implementation-focused content from industry experts",
  },
  {
    icon: "🚀",
    title: "No Theory, Pure Action",
    description: "Learn proven strategies and techniques you can apply immediately",
  },
  {
    icon: "👥",
    title: "Expert Instructors",
    description: "Learn from AI engineers and industry leaders with proven track records",
  },
  {
    icon: "💬",
    title: "Live Q&A Sessions",
    description: "Interact directly with speakers and get answers to your questions",
  },
  {
    icon: "📹",
    title: "Lifetime Access",
    description: "Access recordings of all webinars whenever you want",
  },
  {
    icon: "🎁",
    title: "Free & Premium Content",
    description: "Enjoy free introductory sessions and advanced premium workshops",
  },
];

export default function WebinarsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["AI Automation", "AI Agents", "Marketing AI", "Business AI", "Workshops"];
  const types = ["Upcoming", "Live", "Recorded"];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const filteredWebinars = useMemo(() => {
    return allWebinars.filter((webinar) => {
      const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || webinar.category === selectedCategory;
      const matchesType = !selectedType || webinar.type === selectedType;
      const matchesLevel = !selectedLevel || webinar.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesType && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedType, selectedLevel]);

  const upcomingWebinars = filteredWebinars.filter((w) => w.type === "Upcoming");
  const pastWebinars = filteredWebinars.filter((w) => w.type === "Recorded");
  const liveWebinars = filteredWebinars.filter((w) => w.type === "Live");

  const featuredWebinar = upcomingWebinars[0] || allWebinars[0];

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Live":
        return "bg-green-100 text-green-700";
      case "Upcoming":
        return "bg-blue-100 text-blue-700";
      case "Recorded":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Live":
        return "🟢";
      case "Upcoming":
        return "🔵";
      case "Recorded":
        return "⚪";
      default:
        return "⚪";
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 px-6 py-20 sm:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url(${webinarHeroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
          </div>
          <div className="relative mx-auto max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Webinars & Live AI Sessions
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Learn how to apply AI, automation, and intelligent systems in real-world business scenarios. Expert-led sessions, live Q&A, and practical implementations.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition shadow-lg"
                >
                  Upcoming Webinars
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition shadow-lg"
                >
                  Watch Replays
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-orange-100 px-6 py-4 shadow-sm">
          <div className="mx-auto max-w-[1400px]">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Search webinars by topic or title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
                />
              </div>
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5">
              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="w-full px-3 py-2 rounded-lg border border-orange-200 focus:border-orange-500 focus:outline-none text-sm"
                >
                  <option value="">📂 Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <select
                  value={selectedType || ""}
                  onChange={(e) => setSelectedType(e.target.value || null)}
                  className="w-full px-3 py-2 rounded-lg border border-orange-200 focus:border-orange-500 focus:outline-none text-sm"
                >
                  <option value="">📅 Type</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <select
                  value={selectedLevel || ""}
                  onChange={(e) => setSelectedLevel(e.target.value || null)}
                  className="w-full px-3 py-2 rounded-lg border border-orange-200 focus:border-orange-500 focus:outline-none text-sm"
                >
                  <option value="">🎯 Level</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle - Grid Only */}
              <div className="col-span-2 sm:col-span-1">
                <button
                  className="w-full px-3 py-2 rounded-lg bg-orange-500 text-white border border-orange-500 transition text-sm font-medium"
                >
                  Grid
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Webinar */}
        {upcomingWebinars.length > 0 && (
          <section className="px-6 py-16">
            <div className="mx-auto max-w-[1400px]">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Upcoming Webinar</h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl overflow-hidden border border-orange-200"
              >
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredWebinar.image}
                    alt={featuredWebinar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getTypeBadgeColor(featuredWebinar.type)}`}>
                      {getTypeIcon(featuredWebinar.type)} {featuredWebinar.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {featuredWebinar.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{featuredWebinar.description}</p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-xl">📅</span>
                      <span>{featuredWebinar.date} • {featuredWebinar.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-xl">⏱️</span>
                      <span>{featuredWebinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-xl">👤</span>
                      <span>{featuredWebinar.speaker}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🎯</span>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {featuredWebinar.level}
                      </span>
                    </div>
                  </div>

                  {featuredWebinar.registeredCount && (
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-2">
                        {featuredWebinar.registeredCount} people already registered
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all"
                          style={{
                            width: `${(featuredWebinar.registeredCount / (featuredWebinar.maxCapacity || 100)) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-lg transition w-full sm:w-auto"
                  >
                    Register Now →
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Webinars Grid/List */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {selectedType ? `${selectedType} Webinars` : "All Webinars"}
            </h2>

            <AnimatePresence mode="wait">
              {filteredWebinars.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-16"
                >
                  <p className="text-xl text-gray-600 mb-4">No webinars found matching your filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                      setSelectedType(null);
                      setSelectedLevel(null);
                    }}
                    className="px-6 py-2 text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    Clear filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredWebinars.map((webinar, idx) => (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group overflow-hidden rounded-xl border border-orange-100 bg-white hover:border-orange-300 hover:shadow-lg transition flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-48 w-full">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeBadgeColor(webinar.type)}`}>
                            {getTypeIcon(webinar.type)} {webinar.type}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                          {webinar.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {webinar.description}
                        </p>

                        <div className="space-y-2 mb-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <span>📅</span>
                            <span>{webinar.date} • {webinar.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>⏱️</span>
                            <span>{webinar.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span>👤</span>
                            <span>{webinar.speaker}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                            {webinar.level}
                          </span>
                          <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                            {webinar.category}
                          </span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-auto px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-md transition text-sm w-full sm:w-auto"
                        >
                          {webinar.type === "Recorded" ? "Watch Replay" : "Register Now"}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Program Features Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Program Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive learning experience designed for maximum impact
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🎬",
                  title: "Live Interactive Sessions",
                  description: "Real-time learning with live presenters and instant interaction",
                },
                {
                  icon: "📊",
                  title: "Real-World Case Studies",
                  description: "Learn from actual business implementations and success stories",
                },
                {
                  icon: "🤝",
                  title: "Expert Panel Discussions",
                  description: "Direct engagement with industry leaders and AI specialists",
                },
                {
                  icon: "🎓",
                  title: "Certification Eligible",
                  description: "Earn recognized certificates upon completing webinars",
                },
                {
                  icon: "📚",
                  title: "Resource Materials",
                  description: "Download slides, templates, and additional learning resources",
                },
                {
                  icon: "🔄",
                  title: "Lifetime Access",
                  description: "Access all webinar recordings and materials anytime, anywhere",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-xl border border-orange-200 bg-white hover:border-orange-400 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Attend Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Attend Nanoflows Webinars?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get practical knowledge from industry leaders and transform your AI strategy
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {benefitsData.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50/50 to-amber-50/50 hover:border-orange-300 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra Benefits Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Extra Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Additional value to enhance your learning experience
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              {[
                {
                  icon: "💼",
                  title: "Networking Opportunities",
                  description: "Connect with professionals from various industries and expand your professional network",
                },
                {
                  icon: "🚀",
                  title: "Implementation Support",
                  description: "Get guidance on how to implement learned strategies in your organization",
                },
                {
                  icon: "📈",
                  title: "Performance Tracking",
                  description: "Monitor your progress and learning outcomes through our interactive dashboard",
                },
                {
                  icon: "🎁",
                  title: "Exclusive Discounts",
                  description: "Access special offers on our premium courses, tools, and consulting services",
                },
                {
                  icon: "🌐",
                  title: "Community Access",
                  description: "Join our exclusive community of AI enthusiasts and professionals",
                },
                {
                  icon: "📧",
                  title: "Regular Updates",
                  description: "Receive curated content, industry news, and new webinar announcements",
                },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-8 rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50/50 to-amber-50/50 hover:border-orange-300 hover:shadow-lg transition"
                >
                  <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
