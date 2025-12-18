"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const productsData = [
  {
    id: "ai-agents",
    name: "AI Agents",
    icon: "🤖",
    items: [
      { id: "sales-agent", name: "Sales Agent", icon: "💼" },
      { id: "customer-support", name: "Customer Support", icon: "💬" },
      { id: "hr-agent", name: "HR Agent", icon: "👥" },
      { id: "content-agent", name: "Content Agent", icon: "✍️" },
      { id: "analysis-agent", name: "Analysis Agent", icon: "📊" },
      { id: "workflow-agent", name: "Workflow Agent", icon: "⚙️" },
    ],
  },
  {
    id: "intelligent-software",
    name: "Intelligent Software",
    icon: "💡",
    items: [
      { id: "crm-system", name: "AI CRM System", icon: "📱" },
      { id: "erp-system", name: "AI ERP System", icon: "🏢" },
      { id: "analytics-dashboard", name: "Analytics Dashboard", icon: "📈" },
      { id: "business-intelligence", name: "Business Intelligence", icon: "🧠" },
      { id: "document-automation", name: "Document Automation", icon: "📄" },
      { id: "workflow-automation", name: "Workflow Automation", icon: "🔄" },
    ],
  },
  {
    id: "gen-ai-platform",
    name: "Gen AI Platform",
    icon: "✨",
    items: [
      { id: "custom-llm", name: "Custom LLM", icon: "🧬" },
      { id: "model-training", name: "Model Training", icon: "🎓" },
      { id: "rag-system", name: "RAG System", icon: "🔍" },
      { id: "fine-tuning", name: "Fine Tuning", icon: "🎯" },
      { id: "prompt-engine", name: "Prompt Engine", icon: "💬" },
      { id: "api-integration", name: "API Integration", icon: "🔗" },
    ],
  },
  {
    id: "automation-suite",
    name: "Automation Suite",
    icon: "⚡",
    items: [
      { id: "process-automation", name: "Process Automation", icon: "🔄" },
      { id: "data-pipeline", name: "Data Pipeline", icon: "🌊" },
      { id: "integration-hub", name: "Integration Hub", icon: "🔀" },
      { id: "scheduled-tasks", name: "Scheduled Tasks", icon: "⏰" },
      { id: "webhook-system", name: "Webhook System", icon: "🪝" },
      { id: "api-builder", name: "API Builder", icon: "🛠️" },
    ],
  },
  {
    id: "data-solutions",
    name: "Data Solutions",
    icon: "📊",
    items: [
      { id: "data-warehouse", name: "Data Warehouse", icon: "🏗️" },
      { id: "analytics-engine", name: "Analytics Engine", icon: "📈" },
      { id: "predictive-ml", name: "Predictive ML", icon: "🔮" },
      { id: "data-visualization", name: "Data Visualization", icon: "📊" },
      { id: "data-governance", name: "Data Governance", icon: "🔐" },
      { id: "real-time-analytics", name: "Real-time Analytics", icon: "⚡" },
    ],
  },
  {
    id: "enterprise-solutions",
    name: "Enterprise Solutions",
    icon: "🏛️",
    items: [
      { id: "compliance-engine", name: "Compliance Engine", icon: "✅" },
      { id: "security-framework", name: "Security Framework", icon: "🔒" },
      { id: "audit-system", name: "Audit System", icon: "📋" },
      { id: "user-management", name: "User Management", icon: "👤" },
      { id: "role-based-access", name: "Role-based Access", icon: "🔑" },
      { id: "enterprise-support", name: "Enterprise Support", icon: "🎧" },
    ],
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
      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[95vw] max-w-6xl rounded-2xl border border-gray-100 bg-white shadow-2xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-6 gap-0 divide-x divide-gray-200 p-10">
        {productsData.map((product, index) => (
          <div key={product.id} className={`flex flex-col ${index !== 0 ? 'pl-6' : ''}`}>
            {/* Header Section */}
            <Link
              href={`/products/${product.id}`}
              className="group flex flex-col mb-4 pb-4 border-b border-gray-100 transition-all"
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
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest group-hover:text-orange-600 transition leading-tight">
                {product.name}
              </h3>
            </Link>

            {/* Items Section */}
            <div className="flex flex-col gap-3">
              {product.items.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 + itemIndex * 0.02 }}
                >
                  <Link
                    href={`/products/${product.id}/${item.id}`}
                    className="group flex items-start gap-2 text-sm text-gray-700 hover:text-orange-600 transition-colors py-1"
                    onClick={onClose}
                  >
                    <motion.span 
                      className="text-base mt-0.5"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="leading-snug group-hover:translate-x-1 transition-transform">{item.name}</span>
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
