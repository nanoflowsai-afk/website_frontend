"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import Image from "next/image";
import { apiFetch } from "@/lib/api";

type Mode = "login" | "signup";

function AuthForm() {
  const router = useRouter();
  const search = useSearchParams();
  const initialMode = (search.get("mode") as Mode) || "login";
  const [mode, setMode] = useState<Mode>(initialMode);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const title = useMemo(
    () => (mode === "login" ? "Welcome Back" : "Create Your Account"),
    [mode],
  );

  const subtitle = useMemo(
    () =>
      mode === "login"
        ? "Sign in to access your NanoFlows dashboard and admin panel."
        : "Join NanoFlows to explore AI-driven experiences.",
    [mode],
  );

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const payload = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const res = await apiFetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);
    if (!res.ok) {
      setError("Invalid credentials");
      return;
    }
    const data = (await res.json().catch(() => null)) as { role?: string } | null;
    if (data?.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
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
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-[100px]" />
      </div>
      
      <div className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6 lg:w-1/2">
          <a href="/" className="inline-flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition">
              <span className="text-2xl font-black text-white">N</span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-white">NanoFlows</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-orange-400">
                AI Software Technologies
              </div>
            </div>
          </a>
          
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-[52px]">{title}</h1>
          <p className="text-lg text-gray-400">{subtitle}</p>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode("login")}
              className={`rounded-xl px-6 py-3 text-sm font-semibold transition ${
                mode === "login"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                  : "border border-white/20 bg-white/5 text-gray-300 hover:border-orange-500/50 hover:bg-white/10"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`rounded-xl px-6 py-3 text-sm font-semibold transition ${
                mode === "signup"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
                  : "border border-white/20 bg-white/5 text-gray-300 hover:border-orange-500/50 hover:bg-white/10"
              }`}
            >
              Sign Up
            </button>
          </div>

          <div className="mt-8 hidden lg:block">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 ring-2 ring-slate-800 flex items-center justify-center text-white text-sm font-semibold">AI</div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 ring-2 ring-slate-800 flex items-center justify-center text-white text-sm font-semibold">ML</div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 ring-2 ring-slate-800 flex items-center justify-center text-white text-sm font-semibold">+</div>
              </div>
              <span className="text-sm">Trusted by 500+ businesses worldwide</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          {mode === "login" ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  required
                />
              </div>
              {error && (
                <p className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm text-red-400">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/40 disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <button type="button" onClick={() => setMode("signup")} className="text-orange-400 hover:text-orange-300 font-medium">
                    Sign up
                  </button>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  required
                />
              </div>
              {error && (
                <p className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm text-red-400">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/40 disabled:opacity-70"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setMode("login")} className="text-orange-400 hover:text-orange-300 font-medium">
                    Sign in
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
      </div>
    }>
      <AuthForm />
    </Suspense>
  );
}
