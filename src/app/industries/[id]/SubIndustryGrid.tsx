"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type SubIndustry = {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
};

interface SubIndustryGridProps {
  subIndustries: SubIndustry[];
}

export default function SubIndustryGrid({ subIndustries }: SubIndustryGridProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {subIndustries.map((subIndustry, index) => (
          <motion.div
            key={subIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-2xl">
                {subIndustry.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600">
                {subIndustry.name}
              </h3>
            </div>
            
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
              {subIndustry.description}
            </p>

            <div className="mb-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Key Features
              </p>
              <div className="flex flex-wrap gap-2">
                {subIndustry.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Started →
            </Link>

            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-orange-500/10 to-amber-500/10 transition-transform group-hover:scale-150"></div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
