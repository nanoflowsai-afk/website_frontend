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
  const [expandedIndustryId, setExpandedIndustryId] = useState<string | null>(null);
  const MAX_SHOWN = 6;

  const toggleExpanded = (industryId: string) => {
    if (expandedIndustryId === industryId) {
      setExpandedIndustryId(null);
    } else {
      setExpandedIndustryId(industryId);
    }
  };

  console.log("Current expandedIndustryId:", expandedIndustryId);

  const expandedIndustry = industriesData.find(ind => ind.id === expandedIndustryId);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-[56%] -translate-x-1/2 top-full mt-3 w-[96vw] max-w-[1400px] rounded-2xl border border-gray-100 bg-white shadow-2xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      {expandedIndustry ? (
        // Expanded view: show only the selected industry
        <div className="p-6">
          <button
            type="button"
            onClick={() => setExpandedIndustryId(null)}
            className="mb-4 text-xs font-semibold text-gray-500 hover:text-gray-700 transition"
          >
            ← Back
          </button>
          <Link
            to={`/industries/${expandedIndustry.id}`}
            className="group flex flex-col mb-4 pb-4 border-b border-gray-100 transition-all hover:bg-orange-50 hover:text-orange-600 px-2 py-1 rounded-lg"
            onClick={onClose}
          >
            <div className="flex items-start gap-2 mb-1">
              <motion.span
                className="text-3xl leading-none"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {expandedIndustry.icon}
              </motion.span>
            </div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest group-hover:text-orange-600 transition leading-tight">
              {expandedIndustry.name}
            </h3>
          </Link>
          <div className="grid grid-cols-3 gap-4">
            {expandedIndustry.subIndustries.map((sub, subIndex) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 + subIndex * 0.02 }}
              >
                <Link
                  to={`/industries/${expandedIndustry.id}/${sub.id}`}
                  className="group flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all py-2 px-3 rounded-md h-12"
                  onClick={onClose}
                >
                  <motion.span
                    className="text-xl flex-shrink-0"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {sub.icon}
                  </motion.span>
                  <span className="group-hover:translate-x-0.5 transition-transform">{sub.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Desktop grid view */}
          <div className="hidden md:grid grid-cols-7 gap-0 divide-x divide-gray-200 p-4">
            {industriesData.map((industry, index) => {
              const isExpanded = expandedIndustryId === industry.id;
              const visibleSubs = isExpanded ? industry.subIndustries : industry.subIndustries.slice(0, MAX_SHOWN);
              const hasMore = industry.subIndustries.length > MAX_SHOWN;

              return (
                <div key={industry.id} className={`flex flex-col ${index !== 0 ? 'pl-3' : ''}`}>
                  {/* Header Section */}
                  <Link
                    to={`/industries/${industry.id}`}
                    className="group flex flex-col mb-3 pb-3 border-b border-gray-100 transition-all hover:bg-orange-50 hover:text-orange-600 px-2 py-1 rounded-lg"
                    onClick={onClose}
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <motion.span
                        className="text-2xl leading-none"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        {industry.icon}
                      </motion.span>
                    </div>
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest group-hover:text-orange-600 transition leading-tight">
                      {industry.name}
                    </h3>
                  </Link>

                  {/* Sub-items Section */}
                  <div className="flex flex-col gap-3.5 items-start">
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
                          className="group flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all py-1.5 px-2 rounded-md w-full hover:px-3 h-8"
                          onClick={onClose}
                        >
                          <motion.span
                            className="text-base flex-shrink-0"
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
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleExpanded(industry.id);
                        }}
                        className="mt-2 text-xs font-semibold text-orange-600 hover:text-orange-700 transition w-full text-center"
                      >
                        {isExpanded ? "Show less ↑" : "Show more →"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile scroll view */}
          <div className="md:hidden overflow-x-auto scroll-smooth p-4">
            <div className="flex gap-4 min-w-min pb-2">
              {industriesData.map((industry) => {
                const isExpanded = expandedIndustryId === industry.id;
                const visibleSubs = isExpanded ? industry.subIndustries : industry.subIndustries.slice(0, MAX_SHOWN);
                const hasMore = industry.subIndustries.length > MAX_SHOWN;

                return (
                  <div key={industry.id} className="w-[280px] flex-shrink-0">
                    {/* Header Section */}
                    <Link
                      to={`/industries/${industry.id}`}
                      className="group flex flex-col mb-3 pb-3 border-b border-gray-100 transition-all hover:bg-orange-50 hover:text-orange-600 px-2 py-1 rounded-lg"
                      onClick={onClose}
                    >
                      <div className="flex items-start gap-2 mb-1">
                        <motion.span
                          className="text-2xl leading-none"
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.3 }}
                        >
                          {industry.icon}
                        </motion.span>
                      </div>
                      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest group-hover:text-orange-600 transition leading-tight">
                        {industry.name}
                      </h3>
                    </Link>

                    {/* Sub-items Section */}
                    <div className="flex flex-col gap-3.5 items-start">
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
                            className="group flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all py-1.5 px-2 rounded-md w-full hover:px-3 h-8"
                            onClick={onClose}
                          >
                            <motion.span
                              className="text-base flex-shrink-0"
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
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleExpanded(industry.id);
                          }}
                          className="mt-2 text-xs font-semibold text-orange-600 hover:text-orange-700 transition w-full text-center"
                        >
                          {isExpanded ? "Show less ↑" : "Show more →"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
