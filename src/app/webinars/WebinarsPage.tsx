import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "@/lib/api";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { LoginModal } from "@/components/LoginModal";
import webinarHeroImage from "@assets/stock_images/professional_webinar_6d5e6348.jpg";
import webinarAboutImage from "@assets/stock_images/professional_webinar_0ed09bfd.jpg";

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
  imageUrl: string;
  registeredCount?: number;
  maxCapacity?: number;
  isLandingPage?: boolean;
  computedStatus?: "Upcoming" | "Live" | "Recorded";
};

// Helper to parse date/time string (e.g., "Dec 28, 2025", "3:30 PM IST")
const parseWebinarDateTime = (dateStr: string, timeStr: string) => {
  try {
    const cleanTime = timeStr.replace(/\s*[A-Z]{3}$/, '').trim(); // Remove timezone (IST, etc)
    const dtString = `${dateStr} ${cleanTime}`;
    return new Date(dtString);
  } catch (e) {
    return new Date(); // Fallback
  }
};

const getDurationMinutes = (durationStr: string) => {
  const match = durationStr.match(/(\d+)/);
  return match ? parseInt(match[1]) : 60; // Default 60 mins
};


export default function WebinarsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const checkAuth = () => {
    const adminToken = localStorage.getItem("nano_admin_token");
    const userLoggedIn = localStorage.getItem("nano_user_logged_in");
    return !!adminToken || userLoggedIn === "true";
  };

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const res = await apiFetch("/api/webinars");
        if (res.ok) {
          const data = await res.json();
          let fetchedWebinars: Webinar[] = data.webinars || [];

          // Process status and sort
          const now = new Date();
          const processed = fetchedWebinars.map(w => {
            const start = parseWebinarDateTime(w.date, w.time);
            const durationMins = getDurationMinutes(w.duration);
            const end = new Date(start.getTime() + durationMins * 60000);

            let status: "Upcoming" | "Live" | "Recorded" = "Upcoming";
            if (now > end) {
              status = "Recorded";
            } else if (now >= start && now <= end) {
              status = "Live";
            } else {
              status = "Upcoming";
            }

            // Helper for sorting: Past last, then by date
            return { ...w, computedStatus: status, _sortDate: start };
          });

          // Sort: Active (Live/Upcoming) first, then Recorded. 
          // Within Active: ascending date (nearest first).
          // Within Recorded: descending date (newest recorded first).
          processed.sort((a: any, b: any) => {
            const dateA = a._sortDate;
            const dateB = b._sortDate;

            const isPastA = a.computedStatus === 'Recorded';
            const isPastB = b.computedStatus === 'Recorded';

            if (isPastA && !isPastB) return 1;
            if (!isPastA && isPastB) return -1;

            if (isPastA && isPastB) {
              return dateB.getTime() - dateA.getTime(); // Newest recorded first
            }
            return dateA.getTime() - dateB.getTime(); // Nearest upcoming first
          });

          setWebinars(processed);
        }
      } catch (error) {
        console.error("Failed to fetch webinars", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWebinars();
  }, []);

  const categories = ["AI Automation", "AI Agents", "Marketing AI", "Business AI", "Workshops", "Other"];
  const types = ["Upcoming", "Live", "Recorded"];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const filteredWebinars = useMemo(() => {
    return webinars.filter((webinar) => {
      const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        webinar.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || webinar.category === selectedCategory;
      // Filter by computedStatus if types are selected based on UI (Live, Upcoming, Recorded)
      const statusToMatch = webinar.computedStatus || webinar.type;
      const matchesType = !selectedType || statusToMatch === selectedType;
      const matchesLevel = !selectedLevel || webinar.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesType && matchesLevel;
    });
  }, [webinars, searchTerm, selectedCategory, selectedType, selectedLevel]);

  const upcomingWebinars = filteredWebinars.filter((w) => (w.computedStatus || w.type) !== "Recorded");
  const featuredWebinar = upcomingWebinars[0] || webinars[0];

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
                  onClick={() => {
                    if (checkAuth()) {
                      // Logic for what happens when logged in - in this hero context, maybe scroll to list or specific action? 
                      // For now, assuming it scrolls to Featured or All Webinars as there's no specific link in original code.
                      const featuredSection = document.getElementById("featured-webinar");
                      if (featuredSection) featuredSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                      setShowLoginModal(true);
                    }
                  }}
                  className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition shadow-md text-base"
                >
                  Register for Webinar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const section = document.getElementById("all-webinars");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
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

              {/* Middle Content - Redesigned 3/3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="col-span-1 lg:col-span-1"
              >
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4">Why Choose Our Webinars?</h2>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6 md:mb-8">Discover premium learning experiences with industry experts. Our webinars combine practical knowledge, real-world applications, and interactive discussions to accelerate your AI journey. Get certified, network with professionals, and access resources that transform your skills.</p>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    { icon: "🎬", title: "Live Sessions", description: "Expert-led interactive learning", color: "from-blue-500/10 to-blue-600/5" },
                    { icon: "📊", title: "Case Studies", description: "Real implementations shared", color: "from-green-500/10 to-green-600/5" },
                    { icon: "🤝", title: "Discussions", description: "Direct expert engagement", color: "from-purple-500/10 to-purple-600/5" },
                    { icon: "🎓", title: "Certificates", description: "Earn credentials", color: "from-pink-500/10 to-pink-600/5" },
                    { icon: "📚", title: "Resources", description: "Templates & materials", color: "from-orange-500/10 to-orange-600/5" },
                    { icon: "🔄", title: "Lifetime Access", description: "Watch anytime", color: "from-cyan-500/10 to-cyan-600/5" },
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className={`bg-gradient-to-br ${feature.color} border-l-4 border-orange-500 rounded-lg p-2 md:p-3 hover:border-orange-600 hover:shadow-md transition group h-fit`}
                    >
                      <div className="flex gap-2 items-start">
                        <div className="text-lg md:text-xl flex-shrink-0 group-hover:scale-110 transition">{feature.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 text-xs mb-0.5 group-hover:text-orange-600 transition line-clamp-1 whitespace-normal break-words">{feature.title}</h3>
                          <p className="text-xs text-gray-600 line-clamp-1">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Registration Form - Exact Size Match */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="h-auto md:h-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-white shadow-lg p-4 md:p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Subscribe & Get Notified</h3>

                  {/* Form Input 1 */}
                  <div className="mb-3">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition text-xs"
                    />
                  </div>

                  {/* Form Input 2 */}
                  <div className="mb-3">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition text-xs"
                    />
                  </div>

                  {/* Form Input 3 */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Select Category</label>
                    <select className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition text-xs bg-white">
                      <option>AI Automation</option>
                      <option>AI Agents</option>
                      <option>Marketing AI</option>
                      <option>Business AI</option>
                      <option>Workshops</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Register Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (!checkAuth()) {
                      setShowLoginModal(true);
                    } else {
                      // Placeholder for actual registration logic if needed
                      // For now, we just ensure the auth check is in place
                      alert("Successfully Registered!");
                    }
                  }}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition text-sm"
                >
                  Subscribe & Get Notified →
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

              <div id="featured-webinar"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 bg-white rounded-2xl overflow-hidden border-2 border-orange-200 shadow-lg hover:shadow-xl transition max-w-5xl mx-auto"
              >
                {/* Image */}
                <div className="relative h-48 md:h-64 lg:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={featuredWebinar.imageUrl}
                    alt={featuredWebinar.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${getTypeBadgeColor(featuredWebinar.computedStatus || featuredWebinar.type)} shadow-lg`}>
                      {getTypeIcon(featuredWebinar.computedStatus || featuredWebinar.type)} {featuredWebinar.computedStatus || featuredWebinar.type}
                    </span>
                  </div>
                </div>


                {/* Content */}
                <div className="flex flex-col p-6 lg:p-8 h-auto lg:h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {featuredWebinar.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-5 line-clamp-2">{featuredWebinar.description}</p>

                    <div className="space-y-2 mb-5 text-xs">
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="text-lg">📅</span>
                        <span className="font-medium">{featuredWebinar.date}</span>
                        <span className="text-lg">🕐</span>
                        <span className="font-medium">{featuredWebinar.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <span className="text-lg">⏱️</span>
                        <span className="font-medium">{featuredWebinar.duration}</span>
                        <span className="text-lg">👤</span>
                        <span className="font-medium">{featuredWebinar.speaker}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🎯</span>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                          {featuredWebinar.level}
                        </span>
                      </div>
                    </div>


                  </div>

                  <Link to={`/webinars/${featuredWebinar.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        if (!checkAuth()) {
                          e.preventDefault();
                          setShowLoginModal(true);
                        }
                      }}
                      className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition w-full text-sm"
                    >
                      Register Now →
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* All Webinars Section - THIRD */}
        <section id="all-webinars" className="px-6 py-16 bg-white">
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
                          src={webinar.imageUrl}
                          alt={webinar.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getTypeBadgeColor(webinar.computedStatus || webinar.type)} shadow-lg`}>
                            {getTypeIcon(webinar.computedStatus || webinar.type)} {webinar.computedStatus || webinar.type}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4 flex flex-col">
                        <div className="flex gap-2 mb-2">
                          <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                            {webinar.level}
                          </span>
                          <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                            {webinar.category}
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition line-clamp-2 leading-tight">
                          {webinar.title}
                        </h3>
                        <p className="text-xs text-gray-600 mb-4 flex-grow line-clamp-1">
                          {webinar.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-700">
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
                          <Link to={`/webinars/${webinar.id}`} className="flex-1">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                const currentStatus = webinar.computedStatus || webinar.type;
                                if (currentStatus !== "Recorded" && !checkAuth()) {
                                  e.preventDefault();
                                  setShowLoginModal(true);
                                }
                              }}
                              className={`w-full px-3 py-2 bg-gradient-to-r ${(webinar.computedStatus || webinar.type) === "Recorded"
                                ? "from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700"
                                : "from-orange-500 to-amber-500"
                                } text-white font-bold rounded-lg hover:shadow-lg transition text-xs`}
                            >
                              {(webinar.computedStatus || webinar.type) === "Recorded" ? "Watch Now" : "Register"}
                            </motion.button>
                          </Link>
                          <Link to={`/webinars/${webinar.id}`} className="flex-1">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition text-xs"
                            >
                              Know More
                            </motion.button>
                          </Link>
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
      </main >

      <Footer />
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
}
