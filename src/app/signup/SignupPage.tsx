import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { apiFetch } from "@/lib/api";

export default function SignupPage() {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);

    const validateForm = () => {
        if (!nameValue.trim()) {
            setError("Full name is required");
            return false;
        }
        if (nameValue.trim().length < 2) {
            setError("Name must be at least 2 characters");
            return false;
        }
        if (!emailValue.trim()) {
            setError("Email is required");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            setError("Please enter a valid email address");
            return false;
        }
        if (!passwordValue) {
            setError("Password is required");
            return false;
        }
        if (passwordValue.length < 6) {
            setError("Password must be at least 6 characters");
            return false;
        }
        if (!/[A-Z]/.test(passwordValue)) {
            setError("Password must contain at least one uppercase letter");
            return false;
        }
        if (!/[0-9]/.test(passwordValue)) {
            setError("Password must contain at least one number");
            return false;
        }
        if (!confirmPasswordValue) {
            setError("Please confirm your password");
            return false;
        }
        if (passwordValue !== confirmPasswordValue) {
            setError("Passwords do not match");
            return false;
        }
        if (!termsAccepted) {
            setError("You must agree to the Terms & Conditions");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const payload = {
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        };

        try {
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
        } catch (err) {
            setLoading(false);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Animated background gradient */}
            <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full filter blur-3xl opacity-10 animate-pulse -z-10"></div>
            <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse -z-10"></div>

            <div className="w-full max-w-md relative z-10">
                {/* Card Container with glassmorphism */}
                <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl p-8 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
                            🚀 Join Us
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h1>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Join NanoFlows and explore AI-powered solutions</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 animate-in slide-in-from-top-2">
                            <span className="text-lg">⚠️</span>
                            <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                        {/* Full Name Input */}
                        <div className="relative">
                            <input
                                type="text"
                                value={nameValue}
                                onChange={(e) => setNameValue(e.target.value)}
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10"
                                required
                            />
                            <label className="absolute left-4 -top-2 bg-white dark:bg-slate-900 px-1 text-xs font-semibold text-gray-600 dark:text-gray-400 transition-all duration-300 pointer-events-none">
                                Full Name
                            </label>
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                value={emailValue}
                                onChange={(e) => setEmailValue(e.target.value)}
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10"
                                required
                            />
                            <label className="absolute left-4 -top-2 bg-white dark:bg-slate-900 px-1 text-xs font-semibold text-gray-600 dark:text-gray-400 transition-all duration-300 pointer-events-none">
                                Email
                            </label>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                value={passwordValue}
                                onChange={(e) => setPasswordValue(e.target.value)}
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10"
                                required
                            />
                            <label className="absolute left-4 -top-2 bg-white dark:bg-slate-900 px-1 text-xs font-semibold text-gray-600 dark:text-gray-400 transition-all duration-300 pointer-events-none">
                                Password
                            </label>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                value={confirmPasswordValue}
                                onChange={(e) => setConfirmPasswordValue(e.target.value)}
                                placeholder="Confirm Password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10"
                                required
                            />
                            <label className="absolute left-4 -top-2 bg-white dark:bg-slate-900 px-1 text-xs font-semibold text-gray-600 dark:text-gray-400 transition-all duration-300 pointer-events-none">
                                Confirm Password
                            </label>
                        </div>

                        {/* Terms Checkbox */}
                        <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition">
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                className="w-5 h-5 rounded accent-blue-500 mt-0.5 flex-shrink-0"
                                required
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                I agree to the{" "}
                                <Link to="/terms" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                                    Terms & Conditions
                                </Link>
                            </span>
                        </label>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
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

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">or</span>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <button type="button" className="py-2.5 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-semibold text-sm transition-all duration-300">
                            Google
                        </button>
                        <button type="button" className="py-2.5 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-semibold text-sm transition-all duration-300">
                            Microsoft
                        </button>
                    </div>

                    {/* Sign In Link */}
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition">
                            Sign in
                        </Link>
                    </p>

                    {/* Footer Links */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                            By creating an account, you agree to our{" "}
                            <Link to="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                                Terms
                            </Link>
                            {" "}and{" "}
                            <Link to="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                                Privacy
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Join Community Badge */}
                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                        <span className="text-green-500">✓</span>
                        Enterprise Security
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-green-500">✓</span>
                        Instant Setup
                    </span>
                </div>
            </div>
        </div>
    );
}
