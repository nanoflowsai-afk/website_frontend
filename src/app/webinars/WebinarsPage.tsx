import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import webinarHeroImage from "@assets/generated_images/ai_technology_abstract_digital_background.png";
import webinarAboutImage from "@assets/generated_images/professional_business_webinar_training_room.png";

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

export default function WebinarsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

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
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `url(${webinarHeroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50" />
          </div>
          <div className="relative mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                Learn AI Directly from <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Experts</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed">
                Master practical AI, automation, and intelligent systems through live sessions with industry leaders. No theory, pure implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition shadow-md text-base"
                >
                  Register for Webinar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition border border-white/30 text-base"
                >
                  View Upcoming Sessions
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section - Sticky - Two Rows Mobile, Single Row Desktop */}
        <section className="sticky top-20 z-40 bg-white border-b-2 border-orange-100 px-4 md:px-6 py-3 md:py-4 shadow-md">
          <div className="mx-auto max-w-[1400px]">
            {/* Mobile Layout: Two Rows */}
            <div className="flex flex-col md:hidden gap-3">
              {/* Mobile Row 1: Search + Category */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="🔍 Search webinars by title or topic..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition text-xs"
                  />
                </div>

                <select
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="px-3 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-xs font-medium hover:border-orange-400 transition bg-white"
                >
                  <option value="">📂 Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Row 2: Type, Level, Clear */}
              <div className="flex gap-2">
                <select
                  value={selectedType || ""}
                  onChange={(e) => setSelectedType(e.target.value || null)}
                  className="flex-1 px-3 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-xs font-medium hover:border-orange-400 transition bg-white"
                >
                  <option value="">📅 Type</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLevel || ""}
                  onChange={(e) => setSelectedLevel(e.target.value || null)}
                  className="flex-1 px-3 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-xs font-medium hover:border-orange-400 transition bg-white"
                >
                  <option value="">🎯 Level</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                    setSelectedType(null);
                    setSelectedLevel(null);
                  }}
                  className="px-3 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold transition text-xs whitespace-nowrap"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Desktop Layout: Single Row */}
            <div className="hidden md:flex gap-3 items-center">
              {/* Search Bar */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="🔍 Search webinars by title or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition text-sm"
                />
              </div>

              {/* Category */}
              <select
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-3 py-2.5 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-xs font-medium hover:border-orange-400 transition bg-white"
              >
                <option value="">📂 Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* Type */}
              <select
                value={selectedType || ""}
                onChange={(e) => setSelectedType(e.target.value || null)}
                className="px-3 py-2.5 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-xs font-medium hover:border-orange-400 transition bg-white"
              >
                <option value="">📅 Type</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* Level */}
              <select
                value={selectedLevel || ""}
                onChange={(e) => setSelectedLevel(e.target.value || null)}
                className="px-3 py-2.5 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-xs font-medium hover:border-orange-400 transition bg-white"
              >
                <option value="">🎯 Level</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              {/* Clear Button */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                  setSelectedType(null);
                  setSelectedLevel(null);
                }}
                className="px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold transition text-xs whitespace-nowrap"
              >
                Clear
              </button>
            </div>
          </div>
        </section>

        {/* Program Features Section - FIRST */}
        <section className="px-4 md:px-6 py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-orange-200 shadow-lg"
              >
                <img
                  src={webinarAboutImage}
                  alt="Why Choose Nanoflows"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Middle Content - Redesigned */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="col-span-1 lg:col-span-1"
              >
                <div className="mb-5 md:mb-6">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 md:mb-3">Why Choose Our Webinars?</h2>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Discover premium learning experiences with industry experts. Our webinars combine practical knowledge, real-world applications, and interactive discussions to accelerate your AI journey.</p>
                </div>
                
                <div className="space-y-2 md:space-y-2.5">
                  {[
                    { icon: "🎬", title: "Live Sessions", description: "Expert-led interactive learning" },
                    { icon: "📊", title: "Case Studies", description: "Real implementations shared" },
                    { icon: "🤝", title: "Discussions", description: "Direct expert engagement" },
                    { icon: "🎓", title: "Certificates", description: "Earn credentials" },
                    { icon: "📚", title: "Resources", description: "Templates & materials" },
                    { icon: "🔄", title: "Lifetime Access", description: "Watch anytime" },
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-3 p-2.5 md:p-3 bg-gradient-to-r from-orange-50 to-white rounded-lg border-l-4 border-orange-500 hover:border-orange-600 hover:shadow-md transition group"
                    >
                      <div className="text-lg md:text-xl flex-shrink-0 group-hover:scale-110 transition">{feature.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-xs md:text-sm group-hover:text-orange-600 transition">{feature.title}</h3>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Registration Form - 3/3 Layout, Height Matched */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-white shadow-lg p-3 md:p-4 flex flex-col"
              >
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3 flex-shrink-0">Register Now</h3>
                
                <div className="flex-1 overflow-y-auto space-y-2 md:space-y-2.5 mb-2 md:mb-3">
                  {/* Form Input 1 */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-2.5 py-1.5 md:py-2 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition text-xs"
                    />
                  </div>

                  {/* Form Input 2 */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-2.5 py-1.5 md:py-2 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition text-xs"
                    />
                  </div>

                  {/* Form Input 3 */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Select Category</label>
                    <select className="w-full px-2.5 py-1.5 md:py-2 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition text-xs bg-white">
                      <option>AI Automation</option>
                      <option>AI Agents</option>
                      <option>Marketing AI</option>
                      <option>Business AI</option>
                      <option>Workshops</option>
                    </select>
                  </div>
                </div>

                {/* Register Button - Flex Shrink */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-3 py-2 md:py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition text-xs md:text-sm flex-shrink-0"
                >
                  Register for Webinar →
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Webinar Section - SECOND */}
        {upcomingWebinars.length > 0 && (
          <section className="px-6 py-16 bg-white">
            <div className="mx-auto max-w-[1400px]">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-3">⭐ Featured Webinar</span>
                <h2 className="text-3xl font-bold text-gray-900">Don't Miss This Session</h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 bg-white rounded-2xl overflow-hidden border-2 border-orange-200 shadow-lg hover:shadow-xl transition max-w-5xl mx-auto"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 lg:h-80 overflow-hidden rounded-xl">
                  <img
                    src={featuredWebinar.image}
                    alt={featuredWebinar.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2 md:top-4 left-2 md:left-4">
                    <span className={`inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-bold ${getTypeBadgeColor(featuredWebinar.type)} shadow-lg`}>
                      {getTypeIcon(featuredWebinar.type)} {featuredWebinar.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col p-4 md:p-6 lg:p-8">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
                      {featuredWebinar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2">{featuredWebinar.description}</p>

                    <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4 text-xs">
                      <div className="flex items-center gap-2 md:gap-3 text-gray-700">
                        <span className="text-base md:text-lg">📅</span>
                        <span className="font-medium">{featuredWebinar.date}</span>
                        <span className="text-base md:text-lg">🕐</span>
                        <span className="font-medium">{featuredWebinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 text-gray-700">
                        <span className="text-base md:text-lg">⏱️</span>
                        <span className="font-medium">{featuredWebinar.duration}</span>
                        <span className="text-base md:text-lg">👤</span>
                        <span className="font-medium">{featuredWebinar.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-base md:text-lg">🎯</span>
                        <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                          {featuredWebinar.level}
                        </span>
                      </div>
                    </div>

                    {featuredWebinar.registeredCount && (
                      <div className="mb-3 md:mb-4">
                        <p className="text-gray-600 font-semibold text-xs mb-1">
                          🔥 {featuredWebinar.registeredCount} people registered
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-amber-500 h-1.5 rounded-full transition-all"
                            style={{
                              width: `${(featuredWebinar.registeredCount / (featuredWebinar.maxCapacity || 100)) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition w-full text-xs md:text-sm flex-shrink-0 mt-2 md:mt-3"
                  >
                    Register Now →
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Webinars Section - THIRD */}
        <section className="px-6 py-16 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                All Upcoming Webinars
              </h2>
              <p className="text-sm text-gray-600">
                {filteredWebinars.length} {filteredWebinars.length === 1 ? "webinar" : "webinars"} found
              </p>
            </div>

            <AnimatePresence mode="wait">
              {filteredWebinars.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-16"
                >
                  <p className="text-lg text-gray-600 mb-6">No webinars found matching your filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                      setSelectedType(null);
                      setSelectedLevel(null);
                    }}
                    className="px-6 py-2.5 text-orange-600 hover:text-orange-700 font-bold text-sm border-2 border-orange-500 rounded-lg hover:bg-orange-50 transition"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {filteredWebinars.map((webinar, idx) => (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="group flex flex-col h-full rounded-xl border-2 border-orange-100 bg-white hover:border-orange-400 hover:shadow-lg transition overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-40 w-full overflow-hidden">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getTypeBadgeColor(webinar.type)} shadow-lg`}>
                            {getTypeIcon(webinar.type)} {webinar.type}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-3 md:p-4 flex flex-col">
                        <div className="flex gap-1.5 mb-1.5 md:mb-2">
                          <span className="inline-block px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                            {webinar.level}
                          </span>
                          <span className="inline-block px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                            {webinar.category}
                          </span>
                        </div>

                        <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-orange-600 transition line-clamp-2 leading-tight">
                          {webinar.title}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2 md:mb-3 flex-grow line-clamp-1">
                          {webinar.description}
                        </p>

                        <div className="hidden md:grid grid-cols-2 gap-3 mb-3 text-xs text-gray-700">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5">
                              <span>📅</span>
                              <span className="font-medium">{webinar.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span>⏱️</span>
                              <span className="font-medium">{webinar.duration}</span>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5">
                              <span>🕐</span>
                              <span className="font-medium">{webinar.time}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span>👤</span>
                              <span className="font-medium">{webinar.speaker}</span>
                            </div>
                          </div>
                        </div>

                        {/* Two Buttons Side by Side */}
                        <div className="flex gap-2 mt-auto">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-2 md:px-3 py-1.5 md:py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition text-xs"
                          >
                            {webinar.type === "Recorded" ? "Watch" : "Register"}
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-2 md:px-3 py-1.5 md:py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition text-xs"
                          >
                            Know More
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Extra Benefits Section - FOURTH */}
        <section className="px-6 py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Extra Benefits</h2>
              <p className="text-gray-600">Additional value to enhance your learning journey</p>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "💼", title: "Networking Opportunities", description: "Connect with professionals from various industries" },
                { icon: "🚀", title: "Implementation Support", description: "Get guidance on applying learned strategies" },
                { icon: "📈", title: "Performance Tracking", description: "Monitor progress through interactive dashboards" },
                { icon: "🎁", title: "Exclusive Discounts", description: "Special offers on premium courses & services" },
                { icon: "🌐", title: "Community Access", description: "Join exclusive AI enthusiast communities" },
                { icon: "📧", title: "Regular Updates", description: "Curated content & new webinar announcements" },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-lg border-2 border-orange-200 bg-white hover:border-orange-400 hover:shadow-md transition"
                >
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
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
