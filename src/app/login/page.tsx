"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { apiFetch } from "@/lib/api";

function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    
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
        if (data?.token && typeof window !== "undefined") {
          localStorage.setItem("nano_admin_token", data.token);
        }
      } catch {}
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
      router.push("/");
      return;
    }
    
    setError("Invalid credentials. Please try again.");
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=1600&fit=crop"
          alt="AI Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
        <div className="relative z-10 flex flex-col justify-between p-12">
          <div></div>
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome Back</h2>
            <p className="text-gray-300 leading-relaxed">
              Sign in once to access your dashboard. Admins will be routed to the admin console automatically.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Secure Login
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              256-bit Encryption
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 lg:px-12">
        <div className="mx-auto w-full max-w-md">

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium mb-4">
              Secure Login
            </div>
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="mt-3 text-gray-400">Sign in to access your dashboard. Admins will be routed to the admin console automatically.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                placeholder="Enter your password"
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
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center space-y-4">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="font-semibold text-orange-400 hover:text-orange-300 transition">
                Sign up
              </Link>
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition"
            >
              <span>← Back to website</span>
            </Link>
          </div>
          
          <p className="mt-8 text-center text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="text-orange-400 hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-orange-400 hover:underline">Privacy Policy</a>
          </p>
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
