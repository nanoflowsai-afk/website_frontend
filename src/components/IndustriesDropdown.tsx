"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { industries } from "../lib/data/industries";

const industriesData = industries;

interface IndustriesDropdownProps {
  onClose?: () => void;
}

export function IndustriesDropdown({ onClose }: IndustriesDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[75vw] max-w-6xl rounded-2xl border border-gray-100 bg-white shadow-2xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-7 gap-0 divide-x divide-gray-200 p-4">
        {industriesData.map((industry, index) => (
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
            <div className="flex flex-col gap-1 items-center">
              {industry.subIndustries.map((sub, subIndex) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 + subIndex * 0.02 }}
                >
                  <Link
                    to={`/industries/${industry.id}/${sub.id}`}
                    className="group flex items-center justify-center gap-2 text-xs font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all py-2 px-2.5 rounded-md"
                    onClick={onClose}
                  >
                    <motion.span
                      className="text-base flex-shrink-0"
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
        ))}
      </div>
    </motion.div>
  );
}
