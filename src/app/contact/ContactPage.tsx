import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { apiFetch } from "@/lib/api";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const res = await apiFetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    message: "",
                });
            } else {
                const data = await res.json().catch(() => null);
                setError(data?.error || "Failed to send message. Please try again.");
            }
        } catch {
            setError("Failed to send message. Please try again.");
        }

        setSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            value: "nanoflowsvizag@gmail.com",
            link: "mailto:nanoflowsvizag@gmail.com",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Phone",
            value: "+91 8019358855",
            link: "tel:+918019358855",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Location",
            value: "TF-301, 1-152, Sapthagiri Nagar, Revenue Ward-70, Near Chinamushidiwada, Visakhapatnam - 530051",
            link: null,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Business Hours",
            value: "Mon - Sat: 9:30 AM - 6:30 PM",
            subValue: "Weekend: Emergency support available",
            link: null,
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop&fm=webp"
                        alt="Contact background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/65 to-slate-900/55"></div>
                </div>
                <div className="relative mx-auto max-w-[1400px] px-6 flex items-center justify-center h-full">
                    <div className="mx-auto max-w-3xl text-center pt-20">
                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-400">
                            Get In Touch
                        </p>
                        <h1 className="mt-4 text-4xl font-extrabold md:text-5xl text-white">
                            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Amazing Together</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                            Ready to transform your business with AI? Our team is here to help you every step of the way. Reach out and let's discuss your project.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {contactInfo.map((item, idx) => (
                            <div
                                key={idx}
                                className="group rounded-2xl bg-white border-2 border-gray-100 p-6 shadow-sm transition hover:border-orange-200 hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                {item.link ? (
                                    <a
                                        href={item.link}
                                        className="text-gray-600 hover:text-orange-600 transition break-all"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.value}</p>
                                )}
                                {item.subValue && (
                                    <p className="text-orange-600 text-sm mt-1 font-medium">{item.subValue}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="grid gap-12 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600 mb-2">
                                Contact Form
                            </p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form and our team will get back to you within 24 hours. We're excited to learn about your project!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Quick Response</h4>
                                        <p className="text-sm text-gray-600">We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-white">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">100% Confidential</h4>
                                        <p className="text-sm text-gray-600">Your information is secure</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                                        <p className="text-sm text-gray-600">No obligation discussion</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="rounded-2xl border-2 border-gray-100 bg-white p-8 md:p-10 shadow-xl">
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                                            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                                        <p className="mt-3 text-gray-600 max-w-md">
                                            Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-orange-500 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                    First Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="John"
                                                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                    Last Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Doe"
                                                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@company.com"
                                                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 98765 43210"
                                                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Your Company"
                                                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                    Service Interested In
                                                </label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 bg-white"
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="ai-solutions">AI Solutions</option>
                                                    <option value="automation">AI Automation</option>
                                                    <option value="development">Custom Development</option>
                                                    <option value="chatbots">AI Agents & Chatbots</option>
                                                    <option value="analytics">Data Analytics</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your project and how we can help..."
                                                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 resize-none"
                                            />
                                        </div>

                                        {error && (
                                            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                        >
                                            {submitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>

                                        <p className="text-center text-sm text-gray-500">
                                            By submitting this form, you agree to our{" "}
                                            <Link to="/privacy-policy" className="text-orange-600 hover:underline">
                                                Privacy Policy
                                            </Link>
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
