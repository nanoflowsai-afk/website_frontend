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
        <main className="min-h-screen bg-gray-900">
          {/* Red Banner */}
          <div className="bg-red-600 text-white py-3 text-center font-bold text-lg">
            ⚡ 3 Days One Man Business Automation Event!
          </div>

          {/* Hero Section */}
          <section className="px-6 py-16 bg-gray-900 text-white">
            <div className="mx-auto max-w-[1200px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <p className="text-gray-400 mb-4">(Telugu States Biggest Business AI Agents Event On <span className="text-red-500 font-bold">Dec 23/24/25th</span>)</p>
                
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="text-green-400">Automate Business Save Lakhs</span>
                </h2>
                
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  <span className="text-orange-500">Get 12+ AI AGENTS </span>
                  <span className="text-red-500">Work For You 24/7 365 Days </span>
                  <span className="text-green-400">FREE</span>
                </h3>

                <p className="text-gray-300 border-2 border-yellow-400 rounded-lg px-4 py-2 inline-block mb-8">
                  Note: My Live Challenge. After 1st Day You Can Automate In Live With Me.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left - Event Content & CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition">
                    Apply To Get Business Automation Event
                  </button>

                  <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📅</span>
                      <div>
                        <p className="text-gray-400 text-sm">Date</p>
                        <p className="text-white font-bold">Dec 23/24/25th</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🕐</span>
                      <div>
                        <p className="text-gray-400 text-sm">Time</p>
                        <p className="text-white font-bold">10AM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📡</span>
                      <div>
                        <p className="text-gray-400 text-sm">Event</p>
                        <p className="text-white font-bold">Zoom</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎤</span>
                      <div>
                        <p className="text-gray-400 text-sm">Host</p>
                        <p className="text-white font-bold">Digital Chandu</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <button className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold hover:bg-gray-200">f</button>
                    <button className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold hover:bg-gray-200">𝕏</button>
                    <button className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold hover:bg-gray-200">📧</button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-lg transition"
                  >
                    🎯 Apply To Get Invite
                  </motion.button>

                  <p className="text-center text-sm text-gray-400">After 99 People Price Is Rs.499/-</p>
                  <p className="text-center text-lg font-bold text-yellow-400">No Boooring Theory, 100% Live Implementation</p>
                </motion.div>

                {/* Right - Event Image/Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 rounded-2xl p-8 border-2 border-blue-500 aspect-square flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <h4 className="text-2xl font-bold text-white mb-2">One Man Business Automation Event</h4>
                    <p className="text-gray-300 mb-6">Biggest AI AGENTS EVENT</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-yellow-400 font-bold text-sm">LIVE CHALLENGE 🔥</p>
                      <p className="text-green-400 font-semibold text-sm">If You Automate In 10 Employees</p>
                    </div>
                    <div className="flex gap-2 mb-6">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">AI</span>
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">AGENTS</span>
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">EVENT</span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition">
                      🎯 Book Now
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Highlight Section */}
          <section className="px-6 py-12 bg-gray-900">
            <div className="mx-auto max-w-[1200px]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="p-8 bg-white border-2 border-orange-300 rounded-2xl text-center"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-4">UNLOCK AI AGENTS! READ THIS QUICK NOTE:</h3>
                <p className="text-lg text-gray-700 font-semibold">Don't waste 3 months learning. Get 12+ AI agents working for you immediately after this event.</p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="p-4 bg-white border-2 border-orange-200 rounded-xl text-center">
                  <p className="text-sm text-gray-600 font-semibold">📅 Date</p>
                  <p className="text-lg font-bold text-gray-900">Dec 23/24/25th</p>
                </div>
                <div className="p-4 bg-white border-2 border-orange-200 rounded-xl text-center">
                  <p className="text-sm text-gray-600 font-semibold">🕐 Time</p>
                  <p className="text-lg font-bold text-gray-900">10AM</p>
                </div>
                <div className="p-4 bg-white border-2 border-orange-200 rounded-xl text-center">
                  <p className="text-sm text-gray-600 font-semibold">📡 Event</p>
                  <p className="text-lg font-bold text-gray-900">Zoom</p>
                </div>
                <div className="p-4 bg-white border-2 border-orange-200 rounded-xl text-center">
                  <p className="text-sm text-gray-600 font-semibold">🎤 Host</p>
                  <p className="text-lg font-bold text-gray-900">Digital Chandu</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <CountdownTimer />
              </div>

              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-lg hover:shadow-lg transition text-lg"
                >
                  Apply To Get Invite
                </motion.button>
                <p className="mt-4 text-lg font-bold text-orange-600">Check You're In 99 People or Not</p>
                <p className="text-gray-700">After 99 People Price Is Rs.499/-</p>
              </div>

              <p className="mt-8 text-center text-xl font-black text-gray-900">No Boooring Theory, 100% Live Implementation</p>
            </div>
          </section>

          {/* 3 Days Roadmap */}
          <section className="px-6 py-16 bg-gray-900">
            <div className="mx-auto max-w-[1200px]">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl md:text-3xl font-black text-white mb-12 text-center"
              >
                3 Days Live <span className="text-orange-500">Business Automation</span> <span className="text-red-500">Event</span> Roadmap
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Day 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-b from-orange-900 to-gray-900 border-2 border-orange-600 rounded-xl overflow-hidden"
                >
                  <div className="bg-orange-600 text-white text-center py-2">
                    <div className="text-2xl font-black mb-1">❶</div>
                    <h3 className="text-xs font-bold">DAY 1: Business Growth</h3>
                    <p className="text-xs font-semibold">Setup & Management</p>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-orange-400 font-bold text-center mb-3">Install Top 1% Business Model</p>
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
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        className="text-xs text-gray-300"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                {/* Day 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-b from-blue-900 to-gray-900 border-2 border-blue-600 rounded-xl overflow-hidden"
                >
                  <div className="bg-blue-600 text-white text-center py-2">
                    <div className="text-2xl font-black mb-1">❷</div>
                    <h3 className="text-xs font-bold">DAY 2: Hands-on</h3>
                    <p className="text-xs font-semibold">Business Automation</p>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-blue-400 font-bold text-center mb-3">Replace 8 Hrs Employee With System</p>
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
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 + idx * 0.03 }}
                        className="text-xs text-gray-300"
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                {/* Day 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-b from-red-900 to-gray-900 border-2 border-red-600 rounded-xl overflow-hidden"
                >
                  <div className="bg-red-600 text-white text-center py-2">
                    <div className="text-2xl font-black mb-1">❸</div>
                    <h3 className="text-xs font-bold">DAY 3: For Clients</h3>
                    <p className="text-xs font-semibold">Live Business Automation</p>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-red-400 font-bold text-center mb-3">Automate 80% Employee Work</p>
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
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 + idx * 0.03 }}
                        className="text-xs text-gray-300"
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
          <section className="px-6 py-16 bg-gray-900">
            <div className="mx-auto max-w-[1200px]">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-black text-white mb-2 text-center"
              >
                3 Days is all you Need to Your <span className="text-yellow-400">100% Success!</span>
              </motion.h2>
              <p className="text-center text-gray-400 mb-12 text-sm font-bold uppercase tracking-wider">Testimonials</p>

              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              >
                What others are saying
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    initials: 'RK',
                    emoji: '👨‍💼',
                    title: '"Saved Lakhs Every Month"',
                    text: '"Most MasterClass are boring and filled with jargon. But LevelUpVerse showed real automation setups live! I implemented them the same day and replaced my 6 Employees with this system"',
                    author: '- Raj Kumar',
                    rating: 5
                  },
                  {
                    initials: 'PR',
                    emoji: '👩‍💼',
                    title: '"My life changed forever"',
                    text: '"Before the Master class, I had no clue what CRM or workflows meant. Now I\'ve built my own automated client journey — and it runs 24/7!"',
                    author: '- Priya',
                    rating: 5
                  },
                  {
                    initials: 'NV',
                    emoji: '👨‍💻',
                    title: '"Highly recommend this"',
                    text: '"LevelUpVerse taught me how to build systems that never rest. Leads, follow-ups, payments — everything runs automatically. It\'s like having a digital employee."',
                    author: '- Naveen',
                    rating: 5
                  },
                ].map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-2xl font-bold text-white border-4 border-gray-800">
                        {testimonial.emoji}
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-3">{testimonial.title}</h3>
                    <p className="text-xs text-gray-300 mb-4 italic leading-relaxed">{testimonial.text}</p>
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <p className="text-xs font-bold text-gray-400">{testimonial.author}</p>
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
          <section className="px-6 py-16 bg-gray-900">
            <div className="mx-auto max-w-[600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border-2 border-gray-700 rounded-2xl p-8 md:p-12"
              >
                {/* Product Visual */}
                <div className="mb-8 text-center">
                  <div className="inline-block px-8 py-6 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="text-4xl">💻📱⌚</div>
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  Imagine You Never Have To
                </h3>
                
                <h2 className="text-4xl font-black text-yellow-400 text-center mb-8">
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
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-3"
                    >
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <p className={`text-sm leading-relaxed ${item.highlight ? 'text-green-400 font-bold' : 'text-gray-300'}`}>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Chevrons */}
                <div className="flex justify-center gap-4 mb-6">
                  <span className="text-2xl text-orange-600">⌄</span>
                  <span className="text-2xl text-orange-600">⌄</span>
                  <span className="text-2xl text-orange-600">⌄</span>
                </div>

                {/* Social Buttons */}
                <div className="flex justify-center gap-3 mb-6">
                  <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">f</button>
                  <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">𝕏</button>
                  <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">in</button>
                  <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">📧</button>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition mb-3"
                >
                  🎯 Apply To Get Invite
                </motion.button>

                <p className="text-xs text-gray-400 text-center">Unlocked by Digital Chandu</p>
              </motion.div>
            </div>
          </section>

          {/* Bonuses Section */}
          <section className="px-6 py-16 bg-gray-900">
            <div className="mx-auto max-w-[1200px] text-center">
              {/* Decorative Line */}
              <div className="border-t-2 border-gray-700 mb-8 max-w-xs mx-auto"></div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 mb-2 text-sm font-bold"
              >
                For a Limited Time, Get Access To
              </motion.p>

              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-black mb-2"
              >
                <span className="text-yellow-400">5 Powerful Bonuses</span> Worth <span className="text-yellow-400">₹16,298/-</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-white mb-12"
              >
                Absolutely for <span className="text-yellow-400">FREE!!!</span>
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl hover:border-yellow-400 transition"
                  >
                    {/* Header with bonus number */}
                    <div className="text-center mb-4">
                      <p className="text-yellow-400 font-bold text-xs mb-2">BONUS#{bonus.num}:</p>
                    </div>

                    {/* Icon/Visual */}
                    <div className="text-5xl mb-4 text-center">{bonus.icon}</div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-white mb-4 leading-tight">{bonus.title}</h3>

                    {/* Description */}
                    <div className="space-y-2 mb-4">
                      {bonus.desc.map((line, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-green-400 flex-shrink-0">✓</span>
                          <p className="text-xs text-gray-300 text-left leading-relaxed">{line}</p>
                        </div>
                      ))}
                    </div>

                    {/* Value and FREE */}
                    <div className="border-t border-gray-700 pt-3">
                      <p className="text-xs text-gray-400 mb-1">(Value = <span className="text-yellow-400">{bonus.value}</span>)</p>
                      <p className="text-xl font-black text-yellow-400">FREE!!</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Chevrons */}
              <div className="flex justify-center gap-4 mb-6">
                <span className="text-2xl text-orange-600">⌄</span>
                <span className="text-2xl text-orange-600">⌄</span>
                <span className="text-2xl text-orange-600">⌄</span>
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-3 mb-6">
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">f</button>
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">𝕏</button>
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">in</button>
                <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition text-xs font-bold">📧</button>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition mb-3 inline-block"
              >
                🎯 Apply To Get Invite
              </motion.button>

              <p className="text-xs text-gray-400">Unlocked by Digital Chandu</p>
            </div>
          </section>

          {/* Mentor Section */}
          <section className="px-6 py-16 bg-gray-900">
            <div className="mx-auto max-w-[1200px]">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-black text-white text-center mb-12"
              >
                Meet Your Mentor, I am <span className="text-yellow-400">Digital Chandu</span>
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
          <section className="px-6 py-16 bg-gray-900">
            <div className="mx-auto max-w-[1200px]">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-black text-white text-center mb-12"
              >
                Frequently Asked Questions..
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    question: 'How You Are Conducting Master Class?',
                    answer: 'We are conducting online live sessions.'
                  },
                  {
                    question: 'How Many Days Total ?',
                    answer: 'Total 3 Days'
                  },
                  {
                    question: 'What If We Cannot Automate Business ?',
                    answer: 'If you can\'t replicate client tactic, we back you. we will send service.'
                  },
                  {
                    question: 'What Skills I Learn in This Master Class ?',
                    answer: 'You learn leading, selling, management, automation and more...'
                  },
                ].map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="space-y-2"
                  >
                    <h3 className="text-sm font-bold text-white">{faq.question}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="px-6 py-16 bg-gradient-to-r from-orange-500 to-amber-500">
            <div className="mx-auto max-w-[1200px] text-center">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-black text-white mb-6"
              >
                3 Days is all you Need for Your 100% Success!
              </motion.h2>
              <p className="text-lg text-white mb-8">Limited spots available - Only 99 people at this price</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:shadow-lg transition text-lg"
              >
                Apply To Get Invite
              </motion.button>
            </div>
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
