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
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 px-6 py-24 sm:py-32">
          <div className="absolute inset-0 opacity-20">
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
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Learn AI Directly from Experts
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 mb-8 leading-relaxed">
                Master practical AI, automation, and intelligent systems through live sessions with industry leaders. No theory, pure implementation.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-50 transition shadow-xl text-lg"
                >
                  Register Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition shadow-xl text-lg border-2 border-white/30"
                >
                  Explore Webinars
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section - Sticky */}
        <section className="sticky top-20 z-40 bg-white border-b-2 border-orange-100 px-6 py-5 shadow-md">
          <div className="mx-auto max-w-[1400px]">
            {/* Search Bar */}
            <div className="mb-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Search webinars by title or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 transition text-base"
                />
              </div>
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5">
              <div>
                <select
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-sm font-medium hover:border-orange-400 transition"
                >
                  <option value="">📂 Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedType || ""}
                  onChange={(e) => setSelectedType(e.target.value || null)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-sm font-medium hover:border-orange-400 transition"
                >
                  <option value="">📅 Type</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedLevel || ""}
                  onChange={(e) => setSelectedLevel(e.target.value || null)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none text-sm font-medium hover:border-orange-400 transition"
                >
                  <option value="">🎯 Level</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                    setSelectedType(null);
                    setSelectedLevel(null);
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold transition text-sm"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Webinar Section */}
        {upcomingWebinars.length > 0 && (
          <section className="px-6 py-20 bg-gradient-to-b from-white via-orange-50/30 to-white">
            <div className="mx-auto max-w-[1400px]">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-3">⭐ Featured Webinar</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Don't Miss This Session</h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-2xl overflow-hidden border-2 border-orange-200 shadow-xl hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img
                    src={featuredWebinar.image}
                    alt={featuredWebinar.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className={`inline-block px-5 py-2 rounded-full text-sm font-bold ${getTypeBadgeColor(featuredWebinar.type)} shadow-lg`}>
                      {getTypeIcon(featuredWebinar.type)} {featuredWebinar.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    {featuredWebinar.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{featuredWebinar.description}</p>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                      <span className="text-2xl">📅</span>
                      <span className="font-medium">{featuredWebinar.date} • {featuredWebinar.time}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                      <span className="text-2xl">⏱️</span>
                      <span className="font-medium">{featuredWebinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 text-lg">
                      <span className="text-2xl">👤</span>
                      <span className="font-medium">With {featuredWebinar.speaker}</span>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                      <span className="text-2xl">🎯</span>
                      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold">
                        {featuredWebinar.level}
                      </span>
                    </div>
                  </div>

                  {featuredWebinar.registeredCount && (
                    <div className="mb-8">
                      <p className="text-gray-600 font-semibold mb-3">
                        🔥 {featuredWebinar.registeredCount} people registered
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full transition-all"
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
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition w-full text-lg"
                  >
                    Register Now →
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Webinars Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedType ? `${selectedType} Webinars` : "All Upcoming Webinars"}
              </h2>
              <p className="text-lg text-gray-600">
                {filteredWebinars.length} {filteredWebinars.length === 1 ? "webinar" : "webinars"} found
              </p>
            </div>

            <AnimatePresence mode="wait">
              {filteredWebinars.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-20"
                >
                  <p className="text-2xl text-gray-600 mb-6">No webinars found matching your filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(null);
                      setSelectedType(null);
                      setSelectedLevel(null);
                    }}
                    className="px-8 py-3 text-orange-600 hover:text-orange-700 font-bold text-lg border-2 border-orange-500 rounded-lg hover:bg-orange-50 transition"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredWebinars.map((webinar, idx) => (
                    <motion.div
                      key={webinar.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="group flex flex-col h-full rounded-2xl border-2 border-orange-100 bg-white hover:border-orange-400 hover:shadow-2xl transition overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-56 w-full overflow-hidden">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold ${getTypeBadgeColor(webinar.type)} shadow-lg`}>
                            {getTypeIcon(webinar.type)} {webinar.type}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 flex flex-col">
                        <div className="flex gap-2 mb-4">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                            {webinar.level}
                          </span>
                          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                            {webinar.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition leading-tight">
                          {webinar.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-2">
                          {webinar.description}
                        </p>

                        <div className="space-y-3 mb-8 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">📅</span>
                            <span className="font-medium">{webinar.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🕐</span>
                            <span className="font-medium">{webinar.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">⏱️</span>
                            <span className="font-medium">{webinar.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">👤</span>
                            <span className="font-medium">{webinar.speaker}</span>
                          </div>
                        </div>

                        {/* Two Buttons Side by Side */}
                        <div className="flex gap-3 mt-auto">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition text-sm"
                          >
                            {webinar.type === "Recorded" ? "Watch" : "Register"}
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition text-sm"
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

        {/* Program Features Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Nanoflows Webinars?</h2>
              <p className="text-lg text-gray-600">Comprehensive learning experience with maximum impact</p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🎬", title: "Live Interactive Sessions", description: "Real-time learning with expert presenters" },
                { icon: "📊", title: "Real-World Case Studies", description: "Learn from actual business implementations" },
                { icon: "🤝", title: "Expert Panel Discussions", description: "Direct engagement with AI specialists" },
                { icon: "🎓", title: "Certification Eligible", description: "Earn recognized certificates on completion" },
                { icon: "📚", title: "Resource Materials", description: "Download slides, templates & resources" },
                { icon: "🔄", title: "Lifetime Access", description: "Access all recordings anytime, anywhere" },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-xl border-2 border-orange-200 bg-white hover:border-orange-400 hover:shadow-xl transition"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra Benefits Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Extra Benefits</h2>
              <p className="text-lg text-gray-600">Additional value to enhance your learning journey</p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
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
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-8 rounded-xl border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 hover:border-orange-300 hover:shadow-lg transition"
                >
                  <div className="text-5xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Attend Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="mx-auto max-w-[1400px]">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Attendees Say</h2>
              <p className="text-lg text-gray-600">Learn from proven strategies by industry leaders</p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🎯", title: "Real-World Use Cases", description: "Practical, implementation-focused content from experts" },
                { icon: "🚀", title: "No Theory, Pure Action", description: "Learn proven strategies you can apply immediately" },
                { icon: "👥", title: "Expert Instructors", description: "Learn from AI engineers with proven track records" },
                { icon: "💬", title: "Live Q&A Sessions", description: "Get answers directly from industry specialists" },
                { icon: "📹", title: "Lifetime Access", description: "Access all recordings whenever you need them" },
                { icon: "🎁", title: "Free & Premium", description: "Choose from free introductory to advanced courses" },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-8 rounded-xl border-2 border-orange-100 bg-white hover:border-orange-300 hover:shadow-lg transition"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
