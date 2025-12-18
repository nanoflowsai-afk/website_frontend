"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const productsData = [
  {
    id: "autoflow",
    name: "AutoFlow",
    icon: "⚙️",
    description: "Intelligent workflow automation",
  },
  {
    id: "dataminds",
    name: "DataMinds",
    icon: "🧠",
    description: "Advanced data analytics & insights",
  },
  {
    id: "decisionai",
    name: "DecisionAI",
    icon: "🎯",
    description: "AI-powered decision making",
  },
  {
    id: "processoptimizer",
    name: "ProcessOptimizer",
    icon: "⚡",
    description: "Enterprise process optimization",
  },
  {
    id: "insighthub",
    name: "InsightHub",
    icon: "📊",
    description: "Business intelligence platform",
  },
  {
    id: "smartagent",
    name: "SmartAgent",
    icon: "🤖",
    description: "Autonomous AI agents",
  },
];

interface ProductsDropdownProps {
  onClose?: () => void;
}

export function ProductsDropdown({ onClose }: ProductsDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[95vw] max-w-4xl rounded-2xl border border-gray-100 bg-white shadow-2xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-3 gap-0 divide-x divide-gray-200 p-8">
        {productsData.map((product, index) => (
          <div key={product.id} className={`flex flex-col ${index !== 0 ? 'pl-8' : ''}`}>
            <Link
              href={`/products/${product.id}`}
              className="group flex flex-col h-full hover:bg-orange-50/50 p-4 rounded-lg transition-colors"
              onClick={onClose}
            >
              <div className="flex items-start gap-3 mb-3">
                <motion.span 
                  className="text-3xl leading-none"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.icon}
                </motion.span>
              </div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest group-hover:text-orange-600 transition mb-2 leading-tight">
                {product.name}
              </h3>
              <p className="text-xs text-gray-600 group-hover:text-gray-700 transition">
                {product.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
