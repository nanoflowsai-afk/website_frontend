"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SafeBackgroundImage } from "@/components/SafeBackgroundImage";

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
};

type ServiceCategory = {
  id: string;
  label: string;
  icon: string;
  services: ServiceCard[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "genai",
    label: "Generative AI Solutions",
    icon: "🧠",
    services: [
      {
        title: "Custom LLM Systems",
        description: "Build tailored large language model solutions for content generation, intelligence, and enterprise automation.",
        icon: "💡",
      },
      {
        title: "Decision Support AI",
        description: "AI-powered systems that analyze data and provide actionable insights for strategic decision-making.",
        icon: "🧩",
      },
      {
        title: "Content Intelligence",
        description: "Automated content creation, summarization, and optimization powered by advanced AI models.",
        icon: "✍️",
      },
      {
        title: "Enterprise Automation",
        description: "Transform business processes with intelligent automation that learns and adapts to your workflows.",
        icon: "⚡",
      },
    ],
  },
  {
    id: "automation",
    label: "AI Automation & Workflows",
    icon: "⚙️",
    services: [
      {
        title: "Sales Automation",
        description: "Automate lead scoring, follow-ups, and pipeline management with AI-driven workflows.",
        icon: "💼",
      },
      {
        title: "Marketing Automation",
        description: "End-to-end campaign automation, personalization, and performance optimization.",
        icon: "📢",
      },
      {
        title: "Operations Workflow",
        description: "Streamline operational processes with intelligent automation and real-time monitoring.",
        icon: "🔄",
      },
      {
        title: "HR & Support Systems",
        description: "Automate HR processes and customer support with AI-powered ticket routing and responses.",
        icon: "👥",
      },
    ],
  },
  {
    id: "development",
    label: "AI-Powered Development",
    icon: "💻",
    services: [
      {
        title: "AI-Native Websites",
        description: "Build modern, intelligent websites with integrated AI features and personalization.",
        icon: "🌐",
      },
      {
        title: "SaaS Platforms",
        description: "Develop scalable SaaS products with AI capabilities built into the core architecture.",
        icon: "☁️",
      },
      {
        title: "Enterprise Dashboards",
        description: "Create intelligent dashboards with predictive analytics and automated insights.",
        icon: "📈",
      },
      {
        title: "Custom Software",
        description: "Build production-grade software with AI features tailored to your business needs.",
        icon: "🛠️",
      },
    ],
  },
  {
    id: "agents",
    label: "AI Agents & Chatbots",
    icon: "🤖",
    services: [
      {
        title: "Sales Agents",
        description: "Autonomous AI agents that qualify leads, handle objections, and close deals 24/7.",
        icon: "💰",
      },
      {
        title: "Support Agents",
        description: "Intelligent support bots that resolve issues, escalate when needed, and learn continuously.",
        icon: "🎧",
      },
      {
        title: "Follow-up Agents",
        description: "Automated follow-up systems that nurture leads and maintain customer relationships.",
        icon: "📧",
      },
      {
        title: "Analysis Agents",
        description: "AI agents that monitor, analyze, and report on key business metrics automatically.",
        icon: "🔍",
      },
    ],
  },
  {
    id: "analytics",
    label: "Data & Intelligence",
    icon: "📊",
    services: [
      {
        title: "Real-time Dashboards",
        description: "Live data visualization and monitoring dashboards with automated alerts.",
        icon: "📉",
      },
      {
        title: "Predictive Analytics",
        description: "Machine learning models that forecast trends and identify opportunities.",
        icon: "🔮",
      },
      {
        title: "Decision Intelligence",
        description: "AI systems that synthesize data and recommend optimal business decisions.",
        icon: "🎯",
      },
      {
        title: "Data Integration",
        description: "Connect and unify data sources for comprehensive business intelligence.",
        icon: "🔗",
      },
    ],
  },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const currentCategory = serviceCategories.find((c) => c.id === activeCategory);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <SafeBackgroundImage 
        src="/attached_assets/stock_images/professional_busines_75038a4f.jpg"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
      <div className="relative flex flex-col lg:flex-row gap-6 p-0.5">
      <div className="lg:w-56 flex-shrink-0 lg:border-r lg:border-gray-200 lg:pr-6">
        <div className="flex flex-wrap lg:flex-col justify-center lg:justify-start gap-2 pb-4 lg:pb-0">
          {serviceCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col sm:flex-row items-center lg:justify-start gap-1 sm:gap-2 px-3 py-3 lg:py-2 rounded-lg text-center sm:text-left transition-all max-w-xs sm:max-w-none lg:max-w-none lg:w-full ${
                activeCategory === category.id
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                  : "bg-gray-50 text-gray-700 hover:bg-orange-50 border border-gray-100"
              }`}
            >
              <span className="text-lg flex-shrink-0">{category.icon}</span>
              <span className="text-[10px] sm:text-xs font-medium leading-tight">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {currentCategory?.services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-lg border border-gray-200 bg-white p-4 transition hover:border-orange-200 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-50 text-lg flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">{service.title}</h4>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href="/services"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-orange-600 hover:text-orange-700"
                    >
                      Explore More <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}
