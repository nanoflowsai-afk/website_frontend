"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import Image from "next/image"; // Removed Next.js Image
import { motion, AnimatePresence } from "framer-motion";
import { IndustriesDropdown } from "./IndustriesDropdown";
import { ProductsDropdown } from "./ProductsDropdown";
import { industries } from "@/lib/data/industries";

export function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [expandedIndustryId, setExpandedIndustryId] = useState<string | null>(null);
  const [expandedSubIndustriesIds, setExpandedSubIndustriesIds] = useState<Set<string>>(new Set());

  // Admin State
  const [isAdmin, setIsAdmin] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("nano_admin_token");
    setIsAdmin(!!token);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 200);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setResourcesOpen(prev => !prev);
  };

  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    }
    setIndustriesOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 200);
  };

  const handleIndustriesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    }
    setIndustriesOpen(prev => !prev);
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 200);
  };

  const handleProductsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (productsTimeoutRef.current) {
      clearTimeout(productsTimeoutRef.current);
    }
    setProductsOpen(prev => !prev);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (industriesTimeoutRef.current) {
        clearTimeout(industriesTimeoutRef.current);
      }
      if (productsTimeoutRef.current) {
        clearTimeout(productsTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen || industriesOpen || productsOpen || resourcesOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, industriesOpen, productsOpen, resourcesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-xl" suppressHydrationWarning>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4" suppressHydrationWarning>
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/nanoflows-logo.png"
            alt="NanoFlows"
            width={180}
            height={50}
            className="h-16 w-auto"

          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 lg:flex">
          <Link to="/services" className="transition hover:text-orange-600">
            Services
          </Link>
          <div
            ref={productsRef}
            className="relative"
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
          >
            <Link
              to="/products"
              className="flex items-center gap-1 transition hover:text-orange-600"
            >
              Products
              <svg className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <AnimatePresence>
              {productsOpen && (
                <ProductsDropdown onClose={() => setProductsOpen(false)} />
              )}
            </AnimatePresence>
          </div>
          <div
            ref={industriesRef}
            className="relative"
            onMouseEnter={handleIndustriesMouseEnter}
            onMouseLeave={handleIndustriesMouseLeave}
          >
            <Link
              to="/industries"
              className="flex items-center gap-1 transition hover:text-orange-600"
            >
              Industries
              <svg className={`h-4 w-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <AnimatePresence>
              {industriesOpen && (
                <IndustriesDropdown onClose={() => setIndustriesOpen(false)} />
              )}
            </AnimatePresence>
          </div>
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={handleClick}
              className="flex items-center gap-1 transition hover:text-orange-600"
            >
              Resources
              <svg className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-orange-100 bg-white py-2 shadow-xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
                  onClick={() => setResourcesOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
                  onClick={() => setResourcesOpen(false)}
                >
                  Blog
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="transition hover:text-orange-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {isAdmin ? (
            <Link
              to="/admin"
              className="hidden rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-800 sm:inline-flex"
            >
              Admin Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/40 lg:px-6"
            >
              Get Started
            </Link>
          )}
          <button
            className="rounded-lg p-2 text-gray-700 transition hover:bg-orange-50 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-orange-100 bg-white overflow-hidden lg:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  to="/services"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-600 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    Products
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-8 mt-1 space-y-2 overflow-hidden"
                    >
                      {[
                        { id: "lead-generation", name: "AI Lead Generation", icon: "🔍" },
                        { id: "calling-followup", name: "AI Calling & Follow-Up", icon: "📞" },
                        { id: "crm-dashboards", name: "AI CRM & Dashboards", icon: "📊" },
                        { id: "content-marketing", name: "AI Content & Marketing", icon: "✍️" },
                        { id: "internal-assistants", name: "Internal AI Assistants", icon: "🤖" },
                      ].map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.id}`}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-all"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="text-base">{product.icon}</span>
                          <span className="text-sm">{product.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    Industries
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 rounded-lg bg-gray-50 p-2 space-y-1"
                    >
                      {industries.map((industry) => {
                        const isExpanded = expandedIndustryId === industry.id;
                        const isSubExpanded = expandedSubIndustriesIds.has(industry.id);
                        const MAX_SHOWN = 6;
                        const visibleSubs = isSubExpanded ? industry.subIndustries : industry.subIndustries.slice(0, MAX_SHOWN);
                        const hasMore = industry.subIndustries.length > MAX_SHOWN;

                        const toggleSubExpanded = (industryId: string) => {
                          const newSet = new Set(expandedSubIndustriesIds);
                          if (newSet.has(industryId)) {
                            newSet.delete(industryId);
                          } else {
                            newSet.add(industryId);
                          }
                          setExpandedSubIndustriesIds(newSet);
                        };

                        return (
                          <div key={industry.id}>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setExpandedIndustryId(isExpanded ? null : industry.id);
                              }}
                              className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-all text-sm font-medium"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-base">{industry.icon}</span>
                                <span>{industry.name}</span>
                              </div>
                              <svg
                                className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-1 space-y-1 overflow-hidden"
                                >
                                  {visibleSubs.map((sub) => (
                                    <a
                                      key={sub.id}
                                      href={`/industries/${industry.id}/${sub.id}`}
                                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-gray-600 text-xs hover:bg-orange-50 hover:text-orange-600 transition-all"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      <span className="text-sm">{sub.icon}</span>
                                      <span className="line-clamp-1">{sub.name}</span>
                                    </a>
                                  ))}
                                  {hasMore && (
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        toggleSubExpanded(industry.id);
                                      }}
                                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-orange-600 text-xs font-semibold hover:bg-orange-50 transition-all mt-2 w-full"
                                    >
                                      {isSubExpanded ? "Show less ↑" : "Show more →"}
                                    </button>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 text-white">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    Resources
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-8 mt-1 space-y-1 overflow-hidden"
                    >
                      <Link
                        to="/careers"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Careers
                      </Link>
                      <Link
                        to="/blog"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        Blog
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-rose-50 hover:text-rose-600 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-red-500 text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
