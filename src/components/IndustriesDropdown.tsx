"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { industries } from "../lib/data/industries";

const industriesData = industries;

interface IndustriesDropdownProps {
  onClose?: () => void;
}

export function IndustriesDropdown({ onClose }: IndustriesDropdownProps) {
  const [expandedIndustryIds, setExpandedIndustryIds] = useState<Set<string>>(new Set());
  const MAX_SHOWN = 6;

  const toggleExpanded = (industryId: string) => {
    const newSet = new Set(expandedIndustryIds);
    if (newSet.has(industryId)) {
      newSet.delete(industryId);
    } else {
      newSet.add(industryId);
    }
    setExpandedIndustryIds(newSet);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-x-0 top-full mt-3 w-[97vw] max-w-[1500px] mx-auto rounded-2xl border border-gray-100 bg-white shadow-2xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-7 gap-0 divide-x divide-gray-200 p-6">
        {industriesData.map((industry, index) => {
          const isExpanded = expandedIndustryIds.has(industry.id);
          const visibleSubs = isExpanded ? industry.subIndustries : industry.subIndustries.slice(0, MAX_SHOWN);
          const hasMore = industry.subIndustries.length > MAX_SHOWN;

          return (
            <div key={industry.id} className={`flex flex-col ${index !== 0 ? 'pl-4' : ''}`}>
              {/* Header Section */}
              <Link
                to={`/industries/${industry.id}`}
                className="group flex flex-col mb-4 pb-4 border-b border-gray-100 transition-all hover:bg-orange-50 hover:text-orange-600 px-2 py-2 rounded-lg"
                onClick={onClose}
              >
                <div className="flex items-start gap-2 mb-2">
                  <motion.span
                    className="text-3xl leading-none"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {industry.icon}
                  </motion.span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest group-hover:text-orange-600 transition leading-tight">
                  {industry.name}
                </h3>
              </Link>

              {/* Sub-items Section */}
              <div className="flex flex-col gap-1.5 items-start">
                {visibleSubs.map((sub, subIndex) => (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 + subIndex * 0.02 }}
                    className="w-full"
                  >
                    <Link
                      to={`/industries/${industry.id}/${sub.id}`}
                      className="group flex items-start gap-2 text-xs font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all py-2 px-2 rounded-md w-full hover:px-3"
                      onClick={onClose}
                    >
                      <motion.span
                        className="text-base flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        {sub.icon}
                      </motion.span>
                      <span className="group-hover:translate-x-0.5 transition-transform text-left">{sub.name}</span>
                    </Link>
                  </motion.div>
                ))}
                {hasMore && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleExpanded(industry.id);
                    }}
                    className="mt-2 text-xs font-semibold text-orange-600 hover:text-orange-700 transition"
                  >
                    {isExpanded ? "Show less ↑" : "Show more →"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
