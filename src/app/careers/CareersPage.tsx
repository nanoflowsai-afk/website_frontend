import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { apiFetch } from "@/lib/api";

const culturePoints = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: "Culture of Ownership",
        description: "Take full ownership of your work. We trust our team to make impactful decisions."
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Innovation First",
        description: "Push boundaries with cutting-edge AI technology. Experiment, iterate, and innovate."
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: "Growth-Driven",
        description: "Your growth matters. We invest in your learning, career progression, and personal development."
    }
];

const roleCategories = [
    { name: "AI & Machine Learning", icon: "🤖" },
    { name: "Agentic Systems", icon: "⚡" },
    { name: "Automation Engineering", icon: "🔧" },
    { name: "Product & Design", icon: "🎨" },
];

const applyCardConfig = {
    ctaLabel: "Apply Now",
    mode: "modal" as "modal" | "mailto",
    fallbackEmail: "nanoflowsvizag@gmail.com",
};

type Position = {
    id: number;
    title: string;
    type: string;
    location: string;
    department: string;
    description: string;
    requirements: string[];
    isActive: boolean;
    displayOrder: number;
};

function parseJsonArray(val: unknown): string[] {
    if (Array.isArray(val)) return val as string[];
    if (typeof val === "string") {
        try {
            const parsed = JSON.parse(val);
            if (Array.isArray(parsed)) return parsed;
        } catch { }
    }
    return [];
}

function ApplyModal({ position, onClose }: { position: Position; onClose: () => void }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        message: "",
    });
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [resumeUrl, setResumeUrl] = useState<string>("");
    const [uploading, setUploading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleResumeUpload = async (file: File) => {
        setUploading(true);
        setError(null);
        const formDataUpload = new FormData();
        formDataUpload.append("file", file);
        try {
            const res = await apiFetch("/api/uploads", { method: "POST", body: formDataUpload });
            if (!res.ok) {
                setError("Failed to upload resume. Please try again.");
                setUploading(false);
                return;
            }
            const json = await res.json();
            if (json.url) {
                setResumeUrl(json.url);
                setResumeFile(file);
            }
        } catch {
            setError("Failed to upload resume. Please try again.");
        }
        setUploading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const submitFormData = new FormData();
            submitFormData.append("name", formData.name);
            submitFormData.append("email", formData.email);
            submitFormData.append("phone", formData.phone);
            submitFormData.append("linkedin", formData.linkedin);
            submitFormData.append("message", formData.message);
            submitFormData.append("positionTitle", position.title);
            submitFormData.append("positionDepartment", position.department);
            submitFormData.append("resumeUrl", resumeUrl);

            if (resumeFile) {
                submitFormData.append("resume", resumeFile);
            }

            const res = await apiFetch("/api/apply", {
                method: "POST",
                body: submitFormData,
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                setError(data.error || "Failed to submit application. Please try again.");
                setSubmitting(false);
                return;
            }

            setSubmitted(true);
        } catch {
            setError("Failed to submit application. Please try again.");
        }
        setSubmitting(false);
    };

    const requirements = parseJsonArray(position.requirements);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {submitted ? (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Application Submitted!</h3>
                        <p className="mt-3 text-gray-600">
                            Thank you for applying. We'll review your application and get back to you soon.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-8 w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 shadow-lg shadow-orange-500/25"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold mb-4">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                Now Hiring
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    {position.department}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {position.type}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {position.location}
                                </span>
                            </div>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">{position.description}</p>
                            {requirements.length > 0 && (
                                <div className="mt-4">
                                    <p className="text-sm font-semibold text-gray-700 mb-2">Requirements:</p>
                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                        {requirements.map((req, idx) => (
                                            <li key={idx}>{req}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">LinkedIn</label>
                                    <input
                                        type="url"
                                        value={formData.linkedin}
                                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition"
                                        placeholder="linkedin.com/in/..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Why NanoFlows? *</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none resize-none transition"
                                    placeholder="Tell us about yourself and why you're excited about this role..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Resume/CV *</label>
                                <div className="relative">
                                    {resumeFile ? (
                                        <div className="flex items-center gap-3 p-4 rounded-xl border border-green-200 bg-green-50">
                                            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">{resumeFile.name}</p>
                                                <p className="text-xs text-gray-500">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => { setResumeFile(null); setResumeUrl(""); }}
                                                className="p-1 text-gray-400 hover:text-red-500 transition"
                                            >
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <label className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-orange-400 hover:bg-orange-50/50 transition cursor-pointer">
                                            {uploading ? (
                                                <div className="flex items-center gap-2 text-orange-600">
                                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    <span className="text-sm font-medium">Uploading...</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>
                                                    <span className="text-sm text-gray-600">
                                                        <span className="font-medium text-orange-600">Click to upload</span> or drag and drop
                                                    </span>
                                                    <span className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</span>
                                                </>
                                            )}
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) handleResumeUpload(file);
                                                }}
                                            />
                                        </label>
                                    )}
                                </div>
                                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    disabled={submitting}
                                    className="flex-1 rounded-xl border-2 border-gray-200 px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting || !resumeFile}
                                    className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 shadow-lg shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {submitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Submit Application"
                                    )}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </motion.div>
        </div>
    );
}

export default function CareersPage() {
    const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
    const [openPositions, setOpenPositions] = useState<Position[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiFetch("/api/careers")
            .then((res) => {
                if (!res.ok) {
                    console.error(`Failed to fetch careers: ${res.status} ${res.statusText}`);
                    setLoading(false);
                    return;
                }
                return res.json();
            })
            .then((data) => {
                if (data) {
                    setOpenPositions(data.jobs || []);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching careers:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=800&fit=crop"
                        alt="Careers background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-slate-900/50"></div>
                </div>

                <div className="relative mx-auto max-w-[1400px] px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            We're Hiring
                        </div>
                        <h1 className="text-4xl font-extrabold text-white md:text-6xl lg:text-7xl leading-tight">
                            Careers
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light">
                            We hire builders, thinkers, and AI problem-solvers.
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-3">
                            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition cursor-pointer">
                                <span className="text-lg">💡</span>
                                <span className="text-white font-medium">Culture of ownership & innovation</span>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition cursor-pointer">
                                <span className="text-lg">🤖</span>
                                <span className="text-white font-medium">Open AI-centric roles</span>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition cursor-pointer">
                                <span className="text-lg">📈</span>
                                <span className="text-white font-medium">Growth-driven environment</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="mx-auto max-w-[1400px] px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600 mb-4">Why Join Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Build What Matters</h2>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {culturePoints.map((point, index) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-3xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="mx-auto max-w-[1400px] px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600 mb-4">Open AI-Centric Roles</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Join Our Team</h2>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 mb-12">
                        {roleCategories.map((category) => (
                            <span
                                key={category.name}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-orange-300 hover:bg-orange-50 transition cursor-pointer"
                            >
                                <span>{category.icon}</span>
                                {category.name}
                            </span>
                        ))}
                    </div>

                    <div className="mx-auto max-w-4xl space-y-4">
                        {loading ? (
                            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center text-gray-500">
                                Loading positions...
                            </div>
                        ) : openPositions.length === 0 ? (
                            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center text-gray-500">
                                No open positions at the moment. Check back soon!
                            </div>
                        ) : (
                            openPositions.map((position, index) => (
                                <motion.div
                                    key={position.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-orange-200 hover:shadow-lg"
                                >
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-gray-900">{position.title}</h3>
                                            <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                                                Open
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1.5">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {position.department}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {position.type}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {position.location}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (applyCardConfig.mode === "mailto") {
                                                window.location.href = `mailto:${applyCardConfig.fallbackEmail}?subject=${encodeURIComponent(position.title)}`;
                                                return;
                                            }
                                            setSelectedPosition(position);
                                        }}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25"
                                    >
                                        {applyCardConfig.ctaLabel}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>


            <Footer />
            {selectedPosition && (
                <ApplyModal position={selectedPosition} onClose={() => setSelectedPosition(null)} />
            )}
        </div>
    );
}
