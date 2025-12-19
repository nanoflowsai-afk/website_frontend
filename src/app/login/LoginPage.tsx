import { useState, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiFetch } from "@/lib/api";

function LoginForm() {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const payload = {
            email: emailValue,
            password: passwordValue,
        };

        try {
            // Try admin login first
            const adminRes = await apiFetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                credentials: "include",
            });

            if (adminRes.ok) {
                try {
                    const data = await adminRes.json().catch(() => null);
                    if (data?.token) {
                        localStorage.setItem("nano_admin_token", data.token);
                    }
                } catch { }
                setLoading(false);
                window.location.href = "/admin";
                return;
            }

            // If admin login fails, try user login
            const userRes = await apiFetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                credentials: "include",
            });

            setLoading(false);

            if (userRes.ok) {
                navigate("/");
                return;
            }

            setError("Invalid credentials. Please try again.");
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold mb-4">
                            🔐 Secure Login
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Sign in to your account</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 animate-in slide-in-from-top-2">
                            <span className="text-lg">⚠️</span>
                            <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5 mb-6">
                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                value={emailValue}
                                onChange={(e) => setEmailValue(e.target.value)}
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/10 dark:focus:ring-orange-400/10"
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
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/10 dark:focus:ring-orange-400/10"
                                required
                            />
                            <label className="absolute left-4 -top-2 bg-white dark:bg-slate-900 px-1 text-xs font-semibold text-gray-600 dark:text-gray-400 transition-all duration-300 pointer-events-none">
                                Password
                            </label>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 rounded accent-orange-500" />
                                <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition">Remember me</span>
                            </label>
                            <Link to="#" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold transition">
                                Forgot?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">or</span>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-white/10"></div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <button className="py-2.5 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-semibold text-sm transition-all duration-300">
                            Google
                        </button>
                        <button className="py-2.5 px-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-semibold text-sm transition-all duration-300">
                            Microsoft
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        Don't have an account?{" "}
                        <Link to="/signup" className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition">
                            Create one
                        </Link>
                    </p>

                    {/* Footer Links */}
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                            By signing in, you agree to our{" "}
                            <Link to="/terms" className="text-orange-600 dark:text-orange-400 hover:underline">
                                Terms
                            </Link>
                            {" "}and{" "}
                            <Link to="/privacy-policy" className="text-orange-600 dark:text-orange-400 hover:underline">
                                Privacy
                            </Link>
                        </p>
                        <Link to="/" className="inline-flex justify-center w-full mt-4 py-2 text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold transition">
                            ← Back to website
                        </Link>
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                        <span className="text-green-500">✓</span>
                        256-bit Encryption
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span className="flex items-center gap-1.5">
                        <span className="text-green-500">✓</span>
                        Secure Login
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="animate-spin h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
            </div>
        }>
            <LoginForm />
        </Suspense>
    );
}
