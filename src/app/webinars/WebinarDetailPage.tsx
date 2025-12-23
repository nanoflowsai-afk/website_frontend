import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  isLandingPage?: boolean;
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
    title: "3 Days Business Automation Event",
    description: "Automate Business, Save Lakhs & Get 12+ AI Agents Work For You 24/7 365 Days FREE",
    date: "Dec 23/24/25",
    time: "10:00 AM",
    duration: "3 Days",
    speaker: "NanoFlows Team",
    level: "Beginner",
    category: "Business AI",
    type: "Upcoming",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    registeredCount: 65,
    maxCapacity: 99,
    isLandingPage: true,
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

// Countdown timer component
function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 9, minutes: 15, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex justify-center gap-4 text-center">
      {[
        { value: time.days, label: 'Days' },
        { value: time.hours, label: 'Hours' },
        { value: time.minutes, label: 'Minutes' },
        { value: time.seconds, label: 'Seconds' },
      ].map((item, idx) => (
        <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-white rounded-lg border-2 border-orange-300">
          <div className="text-2xl font-bold text-orange-600">{pad(item.value)}</div>
          <div className="text-xs text-gray-600">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default function WebinarDetailPage() {
  const [showBanner, setShowBanner] = useState(true);
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

  // Special landing page for webinar ID 2
  if (webinar.isLandingPage) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
          {/* Red Banner with Animation */}
          {showBanner && (
            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 flex items-center justify-center font-bold text-lg shadow-lg sticky top-0 z-10"
            >
              <span>⚡ 3 Days One Man Business Automation Event!</span>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowBanner(false)}
                className="absolute right-6 p-1 hover:bg-red-500 rounded-full transition"
                aria-label="Close banner"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          )}

          {/* Hero Section */}
          <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50 text-gray-900">
            <div className="mx-auto max-w-[1200px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-12"
              >
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-4 text-sm font-semibold"
                >
                  (Telugu States Biggest Business AI Agents Event On <span className="text-red-600 font-bold">Dec 23/24/25th</span>)
                </motion.p>
                
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl font-black mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Automate Business</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Save Lakhs</span>
                </motion.h2>
                
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-3xl md:text-5xl font-black mb-8 leading-tight"
                >
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Get 12+ AI AGENTS </span>
                  <br />
                  <span className="text-gray-800">Work For You 24/7 365 Days </span>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">FREE</span>
                </motion.h3>

                <div className="flex flex-col items-center gap-4">
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 border-2 border-orange-400 rounded-xl px-6 py-3 bg-orange-50 shadow-sm font-semibold text-sm"
                  >
                    📌 Note: My Live Challenge. After 1st Day You Can Automate In Live With Me.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition duration-300"
                  >
                    📋 Apply To Get Business Automation Event
                  </motion.button>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left - Event Content & CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-bold text-blue-600">Upcoming</span>
                    </div>
                    <h2 className="text-4xl font-black text-gray-900">Automate Your Business with AI Agents</h2>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">AI Agents</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Beginner</span>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">Learn how AI agents can automate workflows, customer support, and decision-making.</p>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: '📅', label: 'Date', value: 'Dec 23/24/25th', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
                      { icon: '🕐', label: 'Time', value: '10AM', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
                      { icon: '📡', label: 'Event', value: 'Zoom', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
                      { icon: '🎤', label: 'Host', value: 'Digital Chandu', bgColor: 'bg-green-50', borderColor: 'border-green-200' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.08 }}
                        whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
                        className={`p-4 ${item.bgColor} border-2 ${item.borderColor} rounded-xl text-center shadow-md hover:shadow-lg transition`}
                      >
                        <p className="text-3xl mb-2">{item.icon}</p>
                        <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">{item.label}</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-3 justify-center"
                  >
                    {[
                      { label: 'f', color: 'from-blue-600 to-blue-700' },
                      { label: '𝕏', color: 'from-black to-gray-800' },
                      { label: '📧', color: 'from-red-600 to-red-700' }
                    ].map((btn, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 bg-gradient-to-br ${btn.color} text-white rounded-full flex items-center justify-center font-bold hover:shadow-lg transition text-lg`}
                      >
                        {btn.label}
                      </motion.button>
                    ))}
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(220, 38, 38, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl text-lg shadow-lg transition duration-300"
                  >
                    🎯 Apply To Get Invite
                  </motion.button>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className="text-center text-sm text-gray-600 font-semibold">After 99 People Price Is ₹499/-</p>
                    <p className="text-center text-base font-bold text-orange-600 mt-2">✨ No Boring Theory, 100% Live Implementation</p>
                  </motion.div>
                </motion.div>

                {/* Right - Registration Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Ready to Join?</h3>
                  
                  <form className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition bg-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition bg-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition bg-white"
                      />
                    </div>
                  </form>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(251, 146, 60, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 mb-4"
                  >
                    Register Now →
                  </motion.button>

                  <div>
                    <p className="text-center text-sm font-semibold text-gray-700 mb-3">Share This Webinar</p>
                    <div className="flex gap-3 justify-center">
                      {[
                        { label: 'f', color: 'from-blue-600 to-blue-700' },
                        { label: '𝕏', color: 'from-black to-gray-800' },
                        { label: '📧', color: 'from-red-600 to-red-700' }
                      ].map((btn, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-10 h-10 bg-gradient-to-br ${btn.color} text-white rounded-full flex items-center justify-center font-bold hover:shadow-lg transition text-lg`}
                        >
                          {btn.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Highlight Section */}
          <section className="px-6 py-16 bg-gradient-to-b from-gray-50 via-orange-50 to-white">
            <div className="mx-auto max-w-[1200px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-10 bg-gradient-to-r from-white to-orange-50 border-2 border-orange-300 rounded-2xl text-center shadow-lg hover:shadow-xl transition"
              >
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-3xl font-black text-gray-900 mb-4"
                >
                  🔓 UNLOCK AI AGENTS! READ THIS QUICK NOTE:
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-700 font-semibold leading-relaxed"
                >
                  Don't waste 3 months learning. Get 12+ AI agents working for you immediately after this event.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {[
                  { icon: '📅', label: 'Date', value: 'Dec 23/24/25th' },
                  { icon: '🕐', label: 'Time', value: '10AM' },
                  { icon: '📡', label: 'Event', value: 'Zoom' },
                  { icon: '🎤', label: 'Host', value: 'Digital Chandu' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(251, 146, 60, 0.15)" }}
                    className="p-4 bg-white border-2 border-orange-200 rounded-xl text-center shadow-md hover:shadow-lg hover:border-orange-400 transition"
                  >
                    <p className="text-2xl mb-2">{item.icon}</p>
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">{item.label}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10"
              >
                <CountdownTimer />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition text-lg inline-block"
                >
                  ✨ Apply To Get Invite
                </motion.button>
                <p className="mt-6 text-lg font-bold text-orange-600">✔️ Check You're In 99 People or Not</p>
                <p className="text-gray-600 font-semibold">After 99 People Price Is ₹499/-</p>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center text-xl font-black text-gray-900 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
              >
                ✨ No Boring Theory, 100% Live Implementation
              </motion.p>
            </div>
          </section>

          {/* 3 Days Roadmap */}
          <section className="px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="mx-auto max-w-[1200px]">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-black text-gray-900 mb-16 text-center"
              >
                3 Days Live <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Business Automation</span> Event Roadmap
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Day 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(251, 146, 60, 0.2)" }}
                  className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white text-center py-4">
                    <div className="text-3xl font-black mb-2">❶</div>
                    <h3 className="text-sm font-black">DAY 1: Business Growth</h3>
                    <p className="text-xs font-bold text-orange-100">Setup & Management</p>
                  </div>
                  <div className="p-5 space-y-3 bg-gradient-to-b from-orange-50 to-white">
                    <p className="text-xs text-orange-700 font-bold text-center mb-4 bg-orange-100 rounded-lg py-2">📦 Install Top 1% Business Model</p>
                    {[
                      '✅ Website Builder',
                      '✅ Form Builder',
                      '✅ Funnel Builder',
                      '✅ Chatbot – 10 Min',
                      '✅ Shop Builder',
                      '✅ URL Shortener',
                      '✅ Facebook Marketing',
                      '✅ Instagram Marketing',
                      '✅ WhatsApp Ads',
                      '✅ CRM Setup',
                      '✅ Bulk Import',
                    ].map((item, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className="text-xs text-gray-700 font-medium"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                {/* Day 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(37, 99, 235, 0.2)" }}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4">
                    <div className="text-3xl font-black mb-2">❷</div>
                    <h3 className="text-sm font-black">DAY 2: Hands-on</h3>
                    <p className="text-xs font-bold text-blue-100">Business Automation</p>
                  </div>
                  <div className="p-5 space-y-3 bg-gradient-to-b from-blue-50 to-white">
                    <p className="text-xs text-blue-700 font-bold text-center mb-4 bg-blue-100 rounded-lg py-2">🔧 Replace 8 Hrs Employee With System</p>
                    {[
                      '✅ Follow-up Automation',
                      '✅ Contact Segmentation',
                      '✅ Meta Leads Integration',
                      '✅ Customer Management',
                      '✅ Calendar Booking',
                      '✅ LMS Setup',
                      '✅ Email Automation',
                      '✅ WhatsApp 24/7',
                      '✅ Business Workflows',
                      '✅ SMS Marketing',
                      '✅ Lead Scoring',
                    ].map((item, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.04 }}
                        className="text-xs text-gray-700 font-medium"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                {/* Day 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(220, 38, 38, 0.2)" }}
                  className="bg-gradient-to-br from-red-500 to-red-600 border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-4">
                    <div className="text-3xl font-black mb-2">❸</div>
                    <h3 className="text-sm font-black">DAY 3: For Clients</h3>
                    <p className="text-xs font-bold text-red-100">Live Business Automation</p>
                  </div>
                  <div className="p-5 space-y-3 bg-gradient-to-b from-red-50 to-white">
                    <p className="text-xs text-red-700 font-bold text-center mb-4 bg-red-100 rounded-lg py-2">🚀 Automate 80% Employee Work</p>
                    {[
                      '✅ Complete Setup',
                      '✅ Lead Capture',
                      '✅ WhatsApp Integration',
                      '✅ CRM Configuration',
                      '✅ Auto Follow-up',
                      '✅ Pipeline Tracking',
                      '✅ Real Estate Setup',
                      '✅ Salon Automation',
                      '✅ Trainer Tools',
                      '✅ Travel Agent Setup',
                      '✅ Live Demo Work',
                    ].map((item, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.04 }}
                        className="text-xs text-gray-700 font-medium"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto max-w-[1200px]">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center"
              >
                3 Days is all you Need for Your <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">100% Success!</span>
              </motion.h2>
              <p className="text-center text-gray-600 mb-12 text-xs font-bold uppercase tracking-[0.2em]">✨ Testimonials ✨</p>

              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
              >
                What others are saying
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    emoji: '👨‍💼',
                    title: '"Saved Lakhs Every Month"',
                    text: '"Most MasterClass are boring and filled with jargon. But this event showed real automation setups live! I implemented them the same day and replaced my 6 Employees with this system"',
                    author: '- Raj Kumar',
                    rating: 5
                  },
                  {
                    emoji: '👩‍💼',
                    title: '"My life changed forever"',
                    text: '"Before this event, I had no clue what CRM or workflows meant. Now I\'ve built my own automated client journey — and it runs 24/7!"',
                    author: '- Priya',
                    rating: 5
                  },
                  {
                    emoji: '👨‍💻',
                    title: '"Highly recommend this"',
                    text: '"I learned how to build systems that never rest. Leads, follow-ups, payments — everything runs automatically. It\'s like having a digital employee."',
                    author: '- Naveen',
                    rating: 5
                  },
                ].map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(251, 146, 60, 0.1)" }}
                    className="text-center p-6 bg-white border-2 border-orange-100 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition"
                  >
                    <div className="flex justify-center mb-6">
                      <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-3xl shadow-lg"
                      >
                        {testimonial.emoji}
                      </motion.div>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">{testimonial.title}</h3>
                    <p className="text-xs text-gray-700 mb-4 italic leading-relaxed">{testimonial.text}</p>
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.span 
                          key={i} 
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="text-lg"
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                    <p className="text-xs font-bold text-orange-600">{testimonial.author}</p>
                  </motion.div>
                ))}
              </div>

              {/* End Goal Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border-t-4 border-orange-500 pt-12"
              >
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  End Goal of the <span className="text-yellow-400">3 Days</span> Event:
                </h3>
                <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
                  "95% of businesses fail. The other 5% barely survive. That's why we built <span className="font-bold">LevelUpVerse</span> – to save as many businesses as possible through smart automation."
                </p>
                
                <div className="flex justify-center gap-4 mb-8">
                  <span className="text-3xl">⌄</span>
                  <span className="text-3xl">⌄</span>
                  <span className="text-3xl">⌄</span>
                </div>

                <div className="flex justify-center gap-3 mb-6">
                  <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition">f</button>
                  <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition">𝕏</button>
                  <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition">in</button>
                  <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition">📧</button>
                </div>

                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition text-base"
                  >
                    🎯 Apply To Get Invite
                  </motion.button>
                  <p className="text-xs text-gray-400 mt-3">Unlocked by Digital Chandu</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Imagine You Never Have To Section */}
          <section className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-[700px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border-2 border-orange-200 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-white to-orange-50 shadow-lg hover:shadow-xl transition"
              >
                {/* Product Visual */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-8 text-center"
                >
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block px-8 py-6 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg border-2 border-orange-200"
                  >
                    <div className="text-5xl">💻📱⌚</div>
                  </motion.div>
                </motion.div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  Imagine You Never Have To
                </h3>
                
                <h2 className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center mb-8">
                  WASTE TIME ON
                </h2>

                {/* Problems List */}
                <div className="space-y-4 mb-8">
                  {[
                    { text: 'Manual Workflows That Waste Hours Every Day On Repetitive Tasks', icon: '❌' },
                    { text: 'Missed Leads & Follow-Ups Because You\'re Still Doing Everything Manually', icon: '❌' },
                    { text: 'Juggling Too Many Tools – CRM, WhatsApp, Email, Forms, Sheets & More', icon: '❌' },
                    { text: 'Team Miscommunication That Leads To Lost Clients & Missed Deadlines', icon: '❌' },
                    { text: 'Hiring More Staff Just To Handle Simple Work That Automation Can Do', icon: '❌' },
                    { text: 'Zero Clarity On Growth – No Tracking, No Reports, No Control', icon: '❌' },
                    { text: 'We Help You Automate 80% Your Employee Work & Save Lakhs Every Month', icon: '✅', highlight: true },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className={`flex gap-3 p-3 rounded-lg ${item.highlight ? 'bg-green-50 border-2 border-green-200' : 'hover:bg-gray-100 transition'}`}
                    >
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <p className={`text-sm leading-relaxed font-medium ${item.highlight ? 'text-green-700' : 'text-gray-700'}`}>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Chevrons */}
                <motion.div 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex justify-center gap-4 mb-6"
                >
                  <span className="text-2xl text-orange-600">⌄</span>
                  <span className="text-2xl text-orange-600">⌄</span>
                  <span className="text-2xl text-orange-600">⌄</span>
                </motion.div>

                {/* Social Buttons */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center gap-3 mb-6"
                >
                  {[
                    { label: 'f', color: 'from-blue-600 to-blue-700' },
                    { label: '𝕏', color: 'from-black to-gray-800' },
                    { label: 'in', color: 'from-blue-500 to-blue-600' },
                    { label: '📧', color: 'from-red-600 to-red-700' }
                  ].map((btn, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${btn.color} text-white flex items-center justify-center transition shadow-md text-xs font-bold`}
                    >
                      {btn.label}
                    </motion.button>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(220, 38, 38, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition mb-3 shadow-md"
                >
                  🎯 Apply To Get Invite
                </motion.button>

                <p className="text-xs text-gray-600 text-center font-semibold">Unlocked by Digital Chandu</p>
              </motion.div>
            </div>
          </section>

          {/* Bonuses Section */}
          <section className="px-6 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="mx-auto max-w-[1200px] text-center">
              {/* Decorative Line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="border-t-4 border-orange-400 mb-8 max-w-xs mx-auto"
              ></motion.div>

              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 mb-2 text-sm font-bold uppercase tracking-widest"
              >
                🎁 For a Limited Time, Get Access To
              </motion.p>

              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-black mb-4"
              >
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">5 Powerful Bonuses</span> Worth <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">₹16,298/-</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 mb-12"
              >
                Absolutely for <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-black">FREE!!!</span>
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    num: 1,
                    icon: '📚',
                    title: 'Top 1% Business Secrets',
                    desc: ['Unlock our exclusive lead generation strategies that ensure you scale quickly and efficiently.', 'Start driving 5X more leads immediately with our result-driven tactics.'],
                    value: '₹8,999/-'
                  },
                  {
                    num: 2,
                    icon: '🎨',
                    title: 'Landing Page Design Mockup',
                    desc: ['Discover how we strategically design landing pages that skyrocket conversions with cutting-edge design principles.', 'Start boosting your ROI instantly with our simple 5-step landing page formula.'],
                    value: '₹4,999/-'
                  },
                  {
                    num: 3,
                    icon: '🖥️',
                    title: 'Design Mockup Toolkit',
                    desc: ['Get our exclusive design mockup toolkit to quickly transform your ideas into polished visuals.', 'Start impressing clients right away with our easy-to-use, professional design system.'],
                    value: '₹2,300/-'
                  },
                ].map((bonus, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.12, duration: 0.6 }}
                    whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(251, 146, 60, 0.15)" }}
                    className="p-6 bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 rounded-xl shadow-md hover:shadow-lg hover:border-orange-400 transition"
                  >
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: idx * 0.12 + 0.1 }} className="text-center mb-4">
                      <p className="text-orange-600 font-black text-sm mb-2">🎁 BONUS#{bonus.num}</p>
                    </motion.div>
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-6xl mb-4 text-center">
                      {bonus.icon}
                    </motion.div>
                    <h3 className="text-sm font-bold text-gray-900 mb-4 leading-tight">{bonus.title}</h3>
                    <div className="space-y-2 mb-4">
                      {bonus.desc.map((line, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.12 + i * 0.1 }} className="flex gap-2">
                          <span className="text-green-600 flex-shrink-0 font-bold">✓</span>
                          <p className="text-xs text-gray-700 text-left leading-relaxed">{line}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="border-t-2 border-orange-200 pt-3">
                      <p className="text-xs text-gray-600 mb-1">(Value = <span className="text-orange-600 font-bold">{bonus.value}</span>)</p>
                      <p className="text-xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">FREE!!</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex justify-center gap-4 mb-6 mt-12">
                <span className="text-2xl text-orange-600">⌄</span>
                <span className="text-2xl text-orange-600">⌄</span>
                <span className="text-2xl text-orange-600">⌄</span>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex justify-center gap-3 mb-6">
                {[{ label: 'f', color: 'from-blue-600 to-blue-700' }, { label: '𝕏', color: 'from-black to-gray-800' }, { label: 'in', color: 'from-blue-500 to-blue-600' }, { label: '📧', color: 'from-red-600 to-red-700' }].map((btn, idx) => (
                  <motion.button key={idx} whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }} className={`w-9 h-9 rounded-full bg-gradient-to-br ${btn.color} text-white flex items-center justify-center transition shadow-md text-xs font-bold`}>
                    {btn.label}
                  </motion.button>
                ))}
              </motion.div>

              <motion.button whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(220, 38, 38, 0.2)" }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition mb-3 inline-block shadow-md">
                🎯 Apply To Get Invite
              </motion.button>

              <p className="text-xs text-gray-600 font-semibold">Unlocked by Digital Chandu</p>
            </div>
          </section>

          {/* Mentor Section */}
          <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto max-w-[1200px]">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12"
              >
                Meet Your Mentor, <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Digital Chandu</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left - Profile Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative h-64 md:h-80 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl border-2 border-purple-500 flex items-center justify-center overflow-hidden"
                >
                  <div className="text-center">
                    <div className="text-7xl mb-4">👨‍💼</div>
                    <h3 className="text-xl font-bold text-white mb-2">Digital Chandu</h3>
                    <p className="text-sm text-purple-200">(Founder & Host)</p>
                    <p className="text-xl font-black text-blue-300 mt-4">One Man Business</p>
                    <p className="text-xl font-black text-blue-300">Automation Event</p>
                  </div>
                </motion.div>

                {/* Right - Bio and Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="text-sm text-gray-300 leading-relaxed space-y-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Digital Marketing Agency - <span className="text-green-400 font-bold">Digital Chandu</span></p>
                      <p className="text-xs text-gray-400"><span className="text-green-400">I</span> Digital Chandu</p>
                    </div>

                    <p className="text-xs text-gray-300">
                      I launched my first agency but struggled to find consistent, high-quality clients.
                    </p>

                    <p className="text-xs text-gray-300">
                      I tried everything – ads, funnels, and courses – but my business still wasn't growing the way I needed.
                    </p>

                    <p className="text-xs text-gray-300">
                      I realized it wasn't about working harder – it was about building a system that works for you 24/7.
                    </p>

                    <p className="text-xs text-gray-300">
                      That's when I developed the Business Growth System – a step-by-step framework designed to:
                    </p>

                    <ul className="space-y-2 text-xs text-gray-300">
                      <li className="flex gap-2">
                        <span className="text-green-400 flex-shrink-0">✓</span>
                        <span>Attract consistent, high-quality leads</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-400 flex-shrink-0">✓</span>
                        <span>Convert prospects into loyal, high-paying clients</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-400 flex-shrink-0">✓</span>
                        <span>Automate marketing, sales, and follow-ups effortlessly</span>
                      </li>
                    </ul>

                    <p className="text-xs text-gray-300">
                      Now, I'm on a mission to help 100 businesses grow faster, smarter, and more profitably with our business growth system.
                    </p>
                  </div>

                  {/* Decorative Chevrons */}
                  <div className="flex justify-center gap-4 py-4">
                    <span className="text-2xl text-orange-600">⌄</span>
                    <span className="text-2xl text-orange-600">⌄</span>
                    <span className="text-2xl text-orange-600">⌄</span>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex justify-center gap-3 mb-4">
                    <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">f</button>
                    <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">𝕏</button>
                    <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">in</button>
                    <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">📧</button>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
                  >
                    🎯 Apply To Get Invite
                  </motion.button>

                  <p className="text-xs text-gray-400 text-center">Unlocked by Digital Chandu</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="mx-auto max-w-[1200px]">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12"
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: 'How You Are Conducting Master Class?',
                    answer: 'We are conducting online live sessions.'
                  },
                  {
                    question: 'How Many Days Total?',
                    answer: 'Total 3 Days'
                  },
                  {
                    question: 'What If We Cannot Automate Business?',
                    answer: 'If you can\'t replicate client tactic, we back you. we will send service.'
                  },
                  {
                    question: 'What Skills I Learn in This Master Class?',
                    answer: 'You learn leading, selling, management, automation and more...'
                  },
                ].map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                    whileHover={{ boxShadow: "0 10px 30px rgba(251, 146, 60, 0.1)" }}
                    className="p-5 bg-white border-2 border-orange-100 rounded-lg hover:border-orange-300 transition shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-gray-900 mb-2">❓ {faq.question}</h3>
                    <p className="text-xs text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="px-6 py-8 bg-gradient-to-r from-gray-100 to-gray-50">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-[1200px]"
            >
              <p className="text-xs text-gray-700 text-center leading-relaxed font-medium">
                This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™ Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results. I just want to help you by giving great content and direction. For privacy policies and disclaimers, see links below. I feel transparency is important and I hold ourselves to a high standard of integrity. Thanks for stopping by!
              </p>
            </motion.div>
          </section>

          {/* Final CTA Banner */}
          <section className="px-6 py-6 bg-gradient-to-b from-white to-gray-50">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-[1200px]"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl px-8 py-6 shadow-lg">
                {/* Left - Text */}
                <div className="flex-1 text-center md:text-left">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white font-black text-lg md:text-2xl"
                  >
                    📅 Book <span className="text-yellow-300">—</span> Before Time Hit <span className="text-yellow-300">"0"</span>
                  </motion.p>
                </div>

                {/* Middle - Social Buttons */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-3"
                >
                  {['f', '𝕏', 'in', '📧'].map((icon, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-800 transition font-bold text-lg shadow-md"
                    >
                      {icon}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Right - CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition whitespace-nowrap text-base shadow-lg"
                >
                  🎯 Get Invite
                </motion.button>
              </div>
            </motion.div>
          </section>
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
