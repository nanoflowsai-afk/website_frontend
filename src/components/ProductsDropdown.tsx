"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const productsData = [
  {
    id: "lead-generation",
    name: "AI Lead Generation",
    icon: "🔍",
    description: "Scale your pipeline autonomously",
  },
  {
    id: "calling-followup",
    name: "AI Calling & Follow-Up",
    icon: "📞",
    description: "Voice AI for outbound operations",
  },
  {
    id: "crm-dashboards",
    name: "AI CRM & Dashboards",
    icon: "📊",
    description: "Intelligent data management",
  },
  {
    id: "content-marketing",
    name: "AI Content & Marketing",
    icon: "✍️",
    description: "Content on autopilot",
  },
  {
    id: "internal-assistants",
    name: "Internal AI Assistants",
    icon: "🤖",
    description: "Your team's AI copilot",
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
      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[95vw] max-w-2xl rounded-2xl border border-gray-100 bg-white shadow-2xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-3 gap-0 divide-x divide-gray-200 p-6">
        {productsData.map((product, index) => (
          <div key={product.id} className={`flex flex-col ${index !== 0 ? 'pl-4' : ''}`}>
            <Link
              href={`/products/${product.id}`}
              className="group flex flex-col h-full hover:bg-orange-50 hover:text-orange-600 p-3 rounded-lg transition-all"
              onClick={onClose}
            >
              <div className="flex items-start gap-2 mb-2">
                <motion.span 
                  className="text-2xl leading-none"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.icon}
                </motion.span>
              </div>
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider group-hover:text-orange-600 transition mb-1 leading-tight">
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
