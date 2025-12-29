import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { apiFetch, userApi } from "@/lib/api";
import { CheckCircle, Clock, Info } from 'lucide-react';
import { normalizeImageUrl } from "@/lib/images";
import { LoginModal } from "@/components/LoginModal";

type RoadmapItem = {
    id: number;
    day: number;
    title: string;
    subtitle: string;
    highlight: string;
    description: string[]; // Parsed from JSON
    imageUrl: string;
};

type Webinar = {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    speaker: string;
    level: string;
    category: string;
    type: string;
    imageUrl: string;
    registeredCount: number;
    maxCapacity: number;
    isLandingPage: boolean;
    notificationActive: boolean;
    notificationText: string;
    heroTitle: string;
    heroSubtitle: string;
    heroContext: string;
    heroImage: string;
    platform: string;
    mentorName: string;
    mentorRole: string;
    mentorImage: string;
    mentorBio: string;
    roadmapItems: RoadmapItem[];
};



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
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', business: '' });
    const [userRegistrations, setUserRegistrations] = useState<any[]>([]);

    // Status Popup State
    const [statusPopup, setStatusPopup] = useState<{
        open: boolean;
        title: string;
        message: string;
        type: 'success' | 'pending' | 'info';
    }>({ open: false, title: '', message: '', type: 'info' });
    const params = useParams();
    const webinarId = parseInt(params.id as string);

    const [webinar, setWebinar] = useState<Webinar | null>(null);
    const [loading, setLoading] = useState(true);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const checkAuth = () => {
        const adminToken = localStorage.getItem("nano_admin_token");
        const userLoggedIn = localStorage.getItem("nano_user_logged_in");
        return !!adminToken || userLoggedIn === "true";
    };

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await apiFetch(`/api/webinars/${webinarId}`); // Use public ID endpoint
                if (res.ok) {
                    const data = await res.json();
                    const webinarData = data.webinar;

                    setWebinar({
                        ...webinarData,
                        roadmapItems: (webinarData.roadmapItems || [])
                            .filter((item: any, index: number, self: any[]) =>
                                index === self.findIndex((t) => t.day === item.day)
                            )
                            .map((item: any) => ({
                                ...item,
                                description: Array.isArray(item.description) ? item.description : (typeof item.description === 'string' ? JSON.parse(item.description) : [])
                            }))
                            .sort((a: any, b: any) => a.day - b.day)
                    });
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchUserRegistrations = async () => {
            const userId = localStorage.getItem("user_id");
            if (userId) { // Or check token presence
                try {
                    const res = await userApi.getRegistrations();
                    setUserRegistrations(res.data.registrations || []);
                } catch (err) {
                    console.error("Failed to fetch user registrations", err);
                }
            }
        };

        fetchDetails();
        fetchUserRegistrations();
    }, [webinarId]);

    const handleRegister = () => {
        const userId = localStorage.getItem("user_id"); // Or use context if available
        if (!userId && !checkAuth()) { // Fallback auth check
            // If not logged in, maybe show login modal or redirect? 
            // Existing code showed modal directly, but logic implies we need auth to check registration.
            // If no auth, assume new registration or prompt login.
            // For now, let's just proceed to showModal which likely handles partial forms or prompts.
            // But user asked for "Already Registered" check which implies logged in state.
            // If not logged in, they can't be "already registered" in this context easily without checking email later.
            setShowLoginModal(true);
            return;
        }

        const existingReg = userRegistrations.find(r => r.webinarId === webinarId || r.id === webinarId);
        if (existingReg) {
            if (existingReg.status === 'accepted') {
                setStatusPopup({
                    open: true,
                    title: "Already Registered",
                    message: "You are already confirmed for this webinar! We look forward to seeing you there.",
                    type: 'success'
                });
            } else if (existingReg.status === 'pending') {
                setStatusPopup({
                    open: true,
                    title: "Registration Pending",
                    message: "Your registration has been submitted and is currently pending admin approval. You will be notified once approved.",
                    type: 'pending'
                });
            } else {
                setStatusPopup({
                    open: true,
                    title: "Registration Status",
                    message: `You have already registered. Current status: ${existingReg.status}`,
                    type: 'info'
                });
            }
            return;
        }
        setShowModal(true);
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

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

                {/* Status Popup */}
                <AnimatePresence>
                    {statusPopup.open && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setStatusPopup(prev => ({ ...prev, open: false }))}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-center"
                            >
                                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${statusPopup.type === 'success' ? 'bg-green-100' :
                                    statusPopup.type === 'pending' ? 'bg-orange-100' : 'bg-blue-100'
                                    }`}>
                                    {statusPopup.type === 'success' && <CheckCircle className="h-8 w-8 text-green-600" />}
                                    {statusPopup.type === 'pending' && <Clock className="h-8 w-8 text-orange-600" />}
                                    {statusPopup.type === 'info' && <Info className="h-8 w-8 text-blue-600" />}
                                </div>

                                <h3 className="mb-2 text-xl font-bold text-gray-900">{statusPopup.title}</h3>
                                <p className="mb-6 text-gray-500">{statusPopup.message}</p>

                                <button
                                    onClick={() => setStatusPopup(prev => ({ ...prev, open: false }))}
                                    className="w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-gray-800"
                                >
                                    Close
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </>
        );
    }

    // Unified design for all webinars
    if (webinar) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
                    {/* Red Banner with Animation */}
                    {showBanner && webinar.notificationActive && (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-6 flex items-center justify-between md:justify-center font-bold text-sm md:text-base shadow-lg sticky top-0 z-10 whitespace-nowrap"
                        >
                            <span className="flex-1 md:flex-none text-center">{webinar.notificationText}</span>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setShowBanner(false)}
                                className="flex-shrink-0 p-1 hover:bg-red-500 rounded-full transition ml-4 md:absolute md:right-6"
                                aria-label="Close banner"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    )}

                    {/* Hero Section */}
                    <section className="px-6 py-20 text-gray-900 relative" style={{
                        backgroundImage: `url('${normalizeImageUrl(webinar.heroImage)}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}>
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="mx-auto max-w-[1200px] relative z-10">
                            {/* Breadcrumb Navigation */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex items-center justify-start gap-2 mb-8 text-white text-sm"
                            >
                                <Link to="/webinars" className="hover:text-orange-300 transition">
                                    Webinars
                                </Link>
                                <span>/</span>
                                <span className="text-orange-300 font-semibold">{webinar.title}</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-center mb-12"
                            >
                                {webinar.heroContext && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-white mb-4 text-sm font-semibold"
                                    >
                                        {webinar.heroContext}
                                    </motion.p>
                                )}

                                <motion.h2
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="text-5xl md:text-6xl font-black mb-6 leading-tight"
                                >
                                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{webinar.heroTitle}</span>
                                </motion.h2>

                                {webinar.heroSubtitle && (
                                    <motion.h3
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white"
                                    >
                                        {webinar.heroSubtitle}
                                    </motion.h3>
                                )}

                                <div className="flex flex-col items-center gap-4">
                                    <motion.button
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={handleRegister}
                                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition duration-300"
                                    >
                                        📋 Apply To Get Business Automation Event
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Upcoming Session Section */}
                    <section className="px-6 py-20 bg-white text-gray-900">
                        <div className="mx-auto max-w-[1200px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-4 md:p-6 lg:p-8 bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition mx-auto w-full"
                            >
                                <div className="text-center mb-6 md:mb-8">
                                    <span className="px-3 py-1 md:px-4 md:py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">Upcoming</span>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4 md:mb-6 mt-3 md:mt-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Automate Your Business with AI Agents</h2>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
                                    {/* Left - Event Content & CTA */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                        className="space-y-4 md:space-y-6 order-2 lg:order-2"
                                    >
                                        <div className="mb-4 md:mb-6 text-center md:text-left">
                                            <div className="flex gap-2 flex-wrap mb-3 md:mb-4 justify-center md:justify-start">
                                                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider">{webinar.category}</span>
                                                <span className="px-3 py-1 md:px-4 md:py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">{webinar.level}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{webinar.description}</p>
                                        </div>

                                        {/* Mobile Image - appears here on mobile */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="flex flex-col items-center gap-6 lg:hidden order-2 w-full"
                                        >
                                            <motion.div
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                                className="rounded-2xl border-2 border-orange-200 shadow-lg overflow-hidden w-full"
                                            >
                                                <img
                                                    src="/attached_assets/stock_images/ai_agents_automation_c41dbe10.jpg"
                                                    alt="AI Agents Automation"
                                                    className="w-full h-auto object-cover rounded-xl"
                                                />
                                            </motion.div>
                                        </motion.div>

                                        <div className="grid grid-cols-2 gap-2 md:gap-4">
                                            {[
                                                { icon: '📅', label: 'Date', value: webinar.date, bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
                                                { icon: '🕐', label: 'Time', value: webinar.time, bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
                                                { icon: '📡', label: 'Platform', value: webinar.platform, bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
                                                { icon: '🎤', label: 'Host', value: webinar.mentorName, bgColor: 'bg-green-50', borderColor: 'border-green-200' }
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

                                        <motion.button
                                            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(220, 38, 38, 0.4)" }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                            onClick={handleRegister}
                                            className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl text-sm md:text-lg shadow-lg transition duration-300"
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

                                    {/* Desktop Image - appears on left on desktop only */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="hidden lg:flex flex-col items-center gap-6 order-1 lg:order-1"
                                    >
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="rounded-2xl border-2 border-orange-200 shadow-lg overflow-hidden w-full"
                                        >
                                            <img
                                                src="/attached_assets/stock_images/ai_agents_automation_c41dbe10.jpg"
                                                alt="AI Agents Automation"
                                                className="w-full h-auto object-cover rounded-xl"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* 3 Days Roadmap */}
                    <section className="px-6 py-10 bg-gradient-to-b from-white via-gray-50 to-white">
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
                                {(webinar.roadmapItems || []).map((item, idx) => {
                                    // Define color themes
                                    const themes = [
                                        { // Theme 1 (Orange) - Day 1, 4, 7...
                                            header: "from-orange-500 to-amber-500",
                                            subtitle: "text-orange-100",
                                            body: "from-orange-50 to-white",
                                            highlightText: "text-orange-700",
                                            highlightBg: "bg-orange-100",
                                            shadow: "rgba(251, 146, 60, 0.2)"
                                        },
                                        { // Theme 2 (Blue) - Day 2, 5, 8...
                                            header: "from-blue-600 to-blue-400",
                                            subtitle: "text-blue-100",
                                            body: "from-blue-50 to-white",
                                            highlightText: "text-blue-700",
                                            highlightBg: "bg-blue-100",
                                            shadow: "rgba(59, 130, 246, 0.2)"
                                        },
                                        { // Theme 3 (Red) - Day 3, 6, 9...
                                            header: "from-red-600 to-red-500",
                                            subtitle: "text-red-100",
                                            body: "from-red-50 to-white",
                                            highlightText: "text-red-700",
                                            highlightBg: "bg-red-100",
                                            shadow: "rgba(220, 38, 38, 0.2)"
                                        }
                                    ];

                                    const colors = themes[idx % themes.length];

                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                                            whileHover={{ y: -10, boxShadow: `0 20px 50px ${colors.shadow}` }}
                                            className="bg-white border-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col"
                                        >
                                            <div className={`bg-gradient-to-r ${colors.header} text-white text-center py-4`}>
                                                <div className="text-3xl font-black mb-2">Day {item.day}</div>
                                                <h3 className="text-sm font-black">{item.title}</h3>
                                                <p className={`text-xs font-bold ${colors.subtitle}`}>{item.subtitle}</p>
                                            </div>
                                            {item.imageUrl && <img src={normalizeImageUrl(item.imageUrl)} alt={item.title} className="w-full h-48 object-cover" />}
                                            <div className={`p-5 space-y-3 bg-gradient-to-b ${colors.body} flex-1`}>
                                                <p className={`text-xs ${colors.highlightText} font-bold text-center mb-4 ${colors.highlightBg} rounded-lg py-2`}>📦 {item.highlight}</p>
                                                {(item.description || []).map((desc, i) => (
                                                    <motion.p
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.04 }}
                                                        className="text-xs text-gray-700 font-medium"
                                                    >
                                                        ✅ {desc}
                                                    </motion.p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Alert Section */}
                    <section className="px-6 py-16 bg-gradient-to-b from-white via-orange-50 to-white">
                        <div className="mx-auto max-w-[1200px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-center space-y-6 p-8 md:p-12 bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 rounded-2xl shadow-lg"
                            >
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg md:text-xl font-bold text-orange-700"
                                >
                                    ALERT: Might you've strong product or service, but not have systems ( We Cannot Work 24/7 But Systems Work For Us, Top 1% Business People Use This ) Now You Can. ( I See You Live ).
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(220, 38, 38, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleRegister}
                                    className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg shadow-lg transition duration-300"
                                >
                                    Apply To Get Invite
                                </motion.button>

                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-4xl font-black text-gray-900"
                                >
                                    3 Days is all you Need to Your <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">100% Success!</span>
                                </motion.h3>
                            </motion.div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="px-6 py-8 bg-gradient-to-b from-white to-gray-50">
                        <div className="mx-auto max-w-[1200px]">
                            <p className="text-center text-gray-600 mb-12 text-xs font-bold uppercase tracking-[0.2em]">✨ Testimonials ✨</p>

                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
                            >
                                What others are saying
                            </motion.h3>

                            <div className="overflow-hidden">
                                <motion.div
                                    className="flex gap-8 w-max"
                                    animate={{ x: ["0%", "-100%"] }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
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
                                            whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(251, 146, 60, 0.1)" }}
                                            className="text-center p-6 bg-white border-2 border-orange-100 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition flex-shrink-0 w-80"
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
                                                    <span
                                                        key={i}
                                                        className="text-lg"
                                                    >
                                                        ⭐
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-xs font-bold text-orange-600">{testimonial.author}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Imagine You Never Have To Section */}
                    <section className="px-6 py-8 bg-gradient-to-b from-gray-50 to-white">
                        <div className="mx-auto max-w-[1200px]">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                                    Imagine You Never Have To
                                </h3>

                                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">
                                    WASTE TIME ON
                                </h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                            >
                                {/* Left - Problems List */}
                                <div className="space-y-4 order-2 lg:order-1">
                                    {[
                                        { text: 'Manual Workflows That Waste Hours Every Day On Repetitive Tasks', icon: '❌' },
                                        { text: 'Missed Leads & Follow-Ups Because You\'re Still Doing Everything Manually', icon: '❌' },
                                        { text: 'Juggling Too Many Tools – CRM, WhatsApp, Email, Forms, Sheets & More', icon: '❌' },
                                        { text: 'Team Miscommunication That Leads To Lost Clients & Missed Deadlines', icon: '❌' },
                                        { text: 'Hiring More Staff Just To Handle Simple Work That Automation Can Do', icon: '❌' },
                                        { text: 'We Help You Automate 80% Your Employee Work & Save Lakhs Every Month', icon: '✅', highlight: true },
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.06 }}
                                            className={`flex gap-3 p-4 rounded-lg ${item.highlight ? 'bg-green-50 border-2 border-green-200' : 'bg-white border-2 border-orange-100 hover:border-orange-300 transition'}`}
                                        >
                                            <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                            <p className={`text-sm leading-relaxed font-medium ${item.highlight ? 'text-green-700' : 'text-gray-700'}`}>
                                                {item.text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Right - Image Visual and CTA */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-col items-center gap-6 order-1 lg:order-2"
                                >
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="rounded-2xl border-2 border-orange-200 shadow-lg overflow-hidden w-full"
                                    >
                                        <img
                                            src="/attached_assets/stock_images/business_workflow_au_cb921712.jpg"
                                            alt="Business Workflow Automation"
                                            className="w-full h-auto object-cover rounded-xl"
                                        />
                                    </motion.div>

                                    {/* CTA Button Below Image */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-center w-full"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(220, 38, 38, 0.2)" }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                if (checkAuth()) {
                                                    setShowModal(true);
                                                } else {
                                                    setShowLoginModal(true);
                                                }
                                            }}
                                            className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition mb-3 shadow-lg text-lg"
                                        >
                                            🎯 Apply To Get Invite
                                        </motion.button>

                                        <p className="text-sm text-gray-600 font-semibold">Unlocked by Digital Chandu</p>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Bonuses Section */}
                    <section className="px-6 py-10 bg-gradient-to-b from-white via-gray-50 to-white">
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
                        </div>
                    </section>

                    {/* Meet Your Mentor Section */}
                    <section className="px-6 py-10 bg-white">
                        <div className="mx-auto max-w-[1000px]">
                            <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">
                                Meet Your <span className="text-orange-600">Mentor</span>
                            </h2>

                            <div className="bg-white border-2 border-orange-100 rounded-2xl p-6 md:p-10 shadow-lg flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                                {/* Mentor Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-shrink-0"
                                >
                                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-orange-100 p-2 relative">
                                        <div className="absolute inset-0 border-2 border-orange-500 rounded-full border-dashed animate-spin-slow"></div>
                                        <img
                                            src={normalizeImageUrl(webinar.mentorImage)}
                                            alt={webinar.mentorName}
                                            className="w-full h-full object-cover rounded-full shadow-md"
                                        />
                                    </div>
                                </motion.div>

                                {/* Mentor Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex-1 text-center md:text-left"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{webinar.mentorName}</h3>
                                    <div className="mb-6">
                                        <p className="text-xs text-gray-700 mb-1">{webinar.mentorRole} - <span className="text-orange-600 font-bold">{webinar.mentorName}</span></p>
                                    </div>

                                    <div className="text-xs text-gray-700 space-y-4 whitespace-pre-wrap">
                                        {webinar.mentorBio}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="px-6 py-10 bg-gradient-to-b from-gray-50 to-white">
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

                                {/* Right - CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.08, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleRegister}
                                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition whitespace-nowrap text-base shadow-lg"
                                >
                                    🎯 Get Invite
                                </motion.button>
                            </div>
                        </motion.div>
                    </section>

                    {/* Modal */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Modal Content */}
                                <div className="p-8">
                                    <h2 className="text-2xl font-black text-center text-orange-600 mb-8">
                                        Apply For 🎥 One Man Business Event
                                    </h2>

                                    <form className="space-y-4 mb-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition bg-white text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition bg-white text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                WhatsApp Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-2">
                                                <div className="flex items-center px-3 border-2 border-gray-200 rounded-lg bg-white">
                                                    <span className="text-sm font-semibold">🇮🇳 +91</span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    placeholder="81234 56789"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition bg-white text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Business Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="enter business name"
                                                value={formData.business}
                                                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                                                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition bg-white text-sm"
                                            />
                                        </div>
                                    </form>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition shadow-lg text-base mb-4"
                                    >
                                        Apply To Get Invite
                                    </motion.button>

                                    <p className="text-center text-xs text-red-600 font-semibold">
                                        Note: Remember, After 99 People It's Rs.499/- ( Get Your Seat Fast )
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </main>
                <Footer />
                <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

                {/* Status Popup */}
                <AnimatePresence>
                    {statusPopup.open && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setStatusPopup(prev => ({ ...prev, open: false }))}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl text-center"
                            >
                                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${statusPopup.type === 'success' ? 'bg-green-100' :
                                    statusPopup.type === 'pending' ? 'bg-orange-100' : 'bg-blue-100'
                                    }`}>
                                    {statusPopup.type === 'success' && <CheckCircle className="h-8 w-8 text-green-600" />}
                                    {statusPopup.type === 'pending' && <Clock className="h-8 w-8 text-orange-600" />}
                                    {statusPopup.type === 'info' && <Info className="h-8 w-8 text-blue-600" />}
                                </div>

                                <h3 className="mb-2 text-xl font-bold text-gray-900">{statusPopup.title}</h3>
                                <p className="mb-6 text-gray-500">{statusPopup.message}</p>

                                <button
                                    onClick={() => setStatusPopup(prev => ({ ...prev, open: false }))}
                                    className="w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-gray-800"
                                >
                                    Close
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </>
        );
    }

    return null;
}
