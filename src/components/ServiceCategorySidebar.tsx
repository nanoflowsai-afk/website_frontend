"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";

type Service = {
  id: string;
  title: string;
  image: string | StaticImageData;
  category: string;
};

type ServiceCategorySidebarProps = {
  currentServiceId: string;
  currentCategory: string;
  services: Service[];
  hideWhenPastHero?: boolean;
};

export function ServiceCategorySidebar({
  currentServiceId,
  currentCategory,
  services,
  hideWhenPastHero = true,
}: ServiceCategorySidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const checkVisibility = useCallback(() => {
    const aboutSection = document.getElementById("about-service-section");
    if (!aboutSection) {
      setIsVisible(true);
      return;
    }

    const rect = aboutSection.getBoundingClientRect();
    const threshold = 200;
    const shouldHide = rect.top < threshold;
    setIsVisible(!shouldHide);
  }, []);

  useEffect(() => {
    if (!hideWhenPastHero) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    checkVisibility();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideWhenPastHero, checkVisibility]);

  const categoryServices = services.filter(
    (s) => s.category === currentCategory && s.id !== currentServiceId
  );

  if (categoryServices.length === 0) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              className="group flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-r-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ x: 5 }}
              style={{ originX: 0 }}
              aria-label="Open related services sidebar"
            >
              <div className="flex items-center gap-1 sm:gap-2 py-3 sm:py-4 px-2 sm:px-3">
                <motion.span
                  className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  More Services
                </motion.span>
                <motion.svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{
                    x: [0, 4, 0],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 md:w-96 bg-white z-50 shadow-2xl overflow-hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="sidebar-title"
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      {currentCategory}
                    </p>
                    <h3 id="sidebar-title" className="text-white text-lg font-bold">
                      Related Services
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Close sidebar"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {categoryServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/services/${service.id}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50 transition-all duration-200 border border-transparent hover:border-orange-200"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                        {typeof service.image === "string" ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 font-semibold text-sm group-hover:text-orange-600 transition-colors line-clamp-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-500 text-xs mt-1">
                          Click to explore
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
                >
                  View All Services
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
