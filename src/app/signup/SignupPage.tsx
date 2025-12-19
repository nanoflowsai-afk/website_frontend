import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { apiFetch } from "@/lib/api";

export default function SignupPage() {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const payload = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        const res = await apiFetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => null);
            setError(data?.error ?? "Could not sign up");
            return;
        }
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:flex lg:w-1/2 relative">
                <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=1600&fit=crop"
                    alt="AI Technology"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
                <div className="relative z-10 flex flex-col justify-between p-12">
                    <div></div>
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Join the AI Revolution
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Create your account and start building intelligent automation systems that transform your business operations.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-sm font-bold ring-2 ring-slate-900">A</div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold ring-2 ring-slate-900">S</div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold ring-2 ring-slate-900">M</div>
                            </div>
                            <p className="text-sm text-gray-400">
                                Join 500+ businesses using NanoFlows
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Enterprise Security
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Instant Setup
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 lg:px-12">
                <div className="mx-auto w-full max-w-md">

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white">Create your account</h1>
                        <p className="mt-3 text-gray-400">
                            Join NanoFlows to explore AI-powered solutions for your business.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Create a strong password"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition"
                                required
                            />
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm text-red-400">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Creating account...
                                </span>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            Already have an account?{" "}
                            <Link to="/login" className="font-semibold text-orange-400 hover:text-orange-300 transition">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        By creating an account, you agree to our{" "}
                        <Link to="/terms" className="text-orange-400 hover:underline">Terms of Service</Link>
                        {" "}and{" "}
                        <Link to="/privacy-policy" className="text-orange-400 hover:underline">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
