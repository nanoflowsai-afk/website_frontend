"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import aboutImage from "@assets/generated_images/ai_company_office_collaboration.png";

type AboutData = {
  mission: string;
  vision: string;
  coreValues: string[];
};

const defaultData: AboutData = {
  mission:
    "To help businesses operate on autonomous intelligence, using AI to automate workflows, enhance decision-making, and unlock scalable growth.",
  vision:
    "To build a global ecosystem where AI agents, intelligent software, and automation workflows become the default operating layer for every business.",
  coreValues: [
    "Revolutionize industries with AI-powered solutions",
    "Foster innovation for a tech-driven future",
    "Enable businesses to achieve global success",
    "Deliver autonomous, scalable intelligence",
  ],
};

type Tab = "vision" | "mission" | "values" | "growth";

const growthMetrics = [
  "Projects Delivered Across Multiple Industries",
  "AI Systems Deployed Globally",
  "Multi-Domain Automation Expertise",
  "Continuous R&D in Agentic AI",
];

export function AboutSection({ data }: { data?: AboutData | null }) {
  const [activeTab, setActiveTab] = useState<Tab>("vision");

  const aboutData = data ?? defaultData;

  const tabs: { id: Tab; label: string }[] = [
    { id: "vision", label: "Our Vision" },
    { id: "mission", label: "Our Mission" },
    { id: "values", label: "Core Values" },
    { id: "growth", label: "Growth Metrics" },
  ];

  const getContent = () => {
    switch (activeTab) {
      case "vision":
        return (
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {aboutData.vision}
            </p>
            <ul className="space-y-2">
              {aboutData.coreValues.slice(0, 3).map((value, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-orange-500 mt-0.5">→</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        );
      case "mission":
        return (
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {aboutData.mission}
            </p>
            <ul className="space-y-2">
              {aboutData.coreValues.slice(0, 3).map((value, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-orange-500 mt-0.5">→</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        );
      case "values":
        return (
          <ul className="space-y-3">
            {aboutData.coreValues.map((value, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600">
                <span className="text-orange-500 mt-0.5">→</span>
                {value}
              </li>
            ))}
          </ul>
        );
      case "growth":
        return (
          <ul className="space-y-3">
            {growthMetrics.map((metric, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600">
                <span className="text-orange-500 mt-0.5">→</span>
                {metric}
              </li>
            ))}
          </ul>
        );
    }
  };

  const ImageBlock = () => (
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-orange-200 rounded-lg opacity-50"></div>
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-100 rounded-lg opacity-50"></div>
      <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={aboutImage}
          alt="NanoFlows AI Innovation Team"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center">
      <div className="hidden lg:block lg:w-1/2 relative">
        <ImageBlock />
      </div>

      <div className="lg:w-1/2">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-600 mb-2">
          |⁘ About Company ⁘|
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          At NanoFlows, Every Problem Meets a{" "}
          <span className="text-orange-600">Solution</span>
        </h2>

        <div className="block lg:hidden mb-6">
          <ImageBlock />
        </div>

        <p className="text-gray-600 text-sm mb-6">
          We craft innovative, forward-thinking AI strategies to empower businesses, 
          ensuring proactive solutions that drive success and growth in an ever-evolving digital landscape.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-6 border-b border-gray-200 mb-6 justify-between sm:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-3 text-xs sm:text-sm font-medium transition-colors text-center sm:text-left ${
                activeTab === tab.id
                  ? "text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="aboutTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="min-h-[140px]"
          >
            {getContent()}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
