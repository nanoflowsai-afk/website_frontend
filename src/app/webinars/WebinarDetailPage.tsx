import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

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

export default function WebinarDetailPage() {
  const params = useParams();
  const webinarId = parseInt(params.id as string);
  const webinar = allWebinars.find((w) => w.id === webinarId);

  if (!webinar) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Webinar Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the webinar you're looking for.</p>
            <Link to="/webinars">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition"
              >
                Back to All Webinars
              </motion.button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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

  const relatedWebinars = allWebinars
    .filter((w) => w.id !== webinar.id && w.category === webinar.category)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="px-6 py-4 bg-white border-b border-gray-100">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/webinars" className="text-orange-600 hover:text-orange-700 font-medium">
                Webinars
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{webinar.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Section with Image */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border-2 border-orange-100 shadow-lg"
            >
              <img
                src={webinar.image}
                alt={webinar.title}
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Type Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getTypeBadgeColor(webinar.type)} shadow-lg`}>
                    {getTypeIcon(webinar.type)} {webinar.type}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  {webinar.title}
                </h1>

                {/* Badges - Category & Level */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-bold text-sm">
                    {webinar.category}
                  </span>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm">
                    {webinar.level}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {webinar.description}
                  </p>
                </div>

                {/* Detailed Info Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 bg-orange-50 border-2 border-orange-200 rounded-xl"
                  >
                    <p className="text-xs text-gray-600 font-semibold mb-1">📅 Date</p>
                    <p className="text-lg font-bold text-gray-900">{webinar.date}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl"
                  >
                    <p className="text-xs text-gray-600 font-semibold mb-1">🕐 Time</p>
                    <p className="text-lg font-bold text-gray-900">{webinar.time}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 bg-purple-50 border-2 border-purple-200 rounded-xl"
                  >
                    <p className="text-xs text-gray-600 font-semibold mb-1">⏱️ Duration</p>
                    <p className="text-lg font-bold text-gray-900">{webinar.duration}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                  >
                    <p className="text-xs text-gray-600 font-semibold mb-1">👤 Speaker</p>
                    <p className="text-lg font-bold text-gray-900">{webinar.speaker}</p>
                  </motion.div>
                </div>

                {/* Registration Info */}
                {webinar.registeredCount && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">🔥</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-600">REGISTRATIONS</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {webinar.registeredCount} / {webinar.maxCapacity}
                        </p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full transition-all"
                        style={{
                          width: `${(webinar.registeredCount / (webinar.maxCapacity || 100)) * 100}%`,
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {Math.round((webinar.registeredCount / (webinar.maxCapacity || 100)) * 100)}% spots filled
                    </p>
                  </motion.div>
                )}

                {/* What You'll Learn */}
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                  <div className="grid gap-3">
                    {[
                      `Master ${webinar.category.toLowerCase()} concepts`,
                      `Gain practical implementation experience`,
                      `Learn from industry expert ${webinar.speaker}`,
                      `Network with professionals in your field`,
                      `Access exclusive resources and materials`,
                      `Get certified upon completion`,
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        className="flex items-center gap-3 p-3 bg-white border-2 border-orange-100 rounded-lg hover:border-orange-400 transition"
                      >
                        <span className="text-xl flex-shrink-0">✨</span>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar - Registration Card */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24 p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ready to Join?</h3>

                {/* Form */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none transition bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Register Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition text-base mb-3"
                >
                  {webinar.type === "Recorded" ? "Watch Now →" : "Register Now →"}
                </motion.button>

                {/* Share Info */}
                <div className="text-center border-t border-orange-200 pt-4">
                  <p className="text-xs text-gray-600 font-semibold mb-3">Share This Webinar</p>
                  <div className="flex gap-2 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition text-lg"
                    >
                      f
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-sky-400 text-white rounded-full flex items-center justify-center hover:bg-sky-500 transition text-lg"
                    >
                      𝕏
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition text-lg"
                    >
                      💬
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Webinars */}
        {relatedWebinars.length > 0 && (
          <section className="px-6 py-16 bg-gradient-to-b from-white to-orange-50">
            <div className="mx-auto max-w-[1200px]">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Related Webinars</h2>
                <p className="text-gray-600">Check out other webinars in the same category</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedWebinars.map((related, idx) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex flex-col h-full rounded-xl border-2 border-orange-100 bg-white hover:border-orange-400 hover:shadow-lg transition overflow-hidden"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    <div className="flex-1 p-4 flex flex-col">
                      <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition line-clamp-2 leading-tight">
                        {related.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-4 flex-grow line-clamp-2">
                        {related.description}
                      </p>

                      <div className="flex gap-2">
                        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                          {related.level}
                        </span>
                        <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
                          {related.category}
                        </span>
                      </div>

                      <Link to={`/webinars/${related.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full mt-4 px-3 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition text-xs"
                        >
                          View Details →
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link to="/webinars">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-orange-500 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition"
                  >
                    View All Webinars →
                  </motion.button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
