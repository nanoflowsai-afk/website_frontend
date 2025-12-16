"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const agentTypes = [
  { id: "product", label: "Product", icon: "📦" },
  { id: "it", label: "IT Agent", icon: "🖥️" },
  { id: "hr", label: "HR Agent", icon: "👥" },
  { id: "sales", label: "Sales Agent", icon: "💼" },
  { id: "retail", label: "Retail Agent", icon: "🛒" },
  { id: "marketing", label: "Marketing Agent", icon: "📢" },
];

const coreCapabilities = [
  { id: "ai-agent", label: "AI Agent", icon: "🤖" },
  { id: "enterprise-search", label: "Enterprise AI Search", icon: "🔍" },
  { id: "gen-ai-apps", label: "Gen-AI Apps", icon: "✨" },
];

const genAIFeatures = [
  {
    title: "AI Workflows",
    color: "bg-orange-500",
    items: ["Model Playground", "Custom LLMs", "Advanced Fine Tuning"],
  },
  {
    title: "Auditability",
    color: "bg-orange-500",
    items: ["Session Monitoring", "Vision Control", "Feedback and Citation"],
  },
  {
    title: "Compliance",
    color: "bg-orange-500",
    items: ["Hallucination Control", "Content Filter", "Denied Topics"],
  },
  {
    title: "Security & Governance",
    color: "bg-orange-500",
    items: ["Honour RBAC of Source Apps", "Audit and Error Pilots", "PII Masking and Encryption"],
  },
];

const aiProviders = [
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", fallback: "🤖" },
  { name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg", fallback: "🧠" },
  { name: "Mistral", logo: "https://avatars.githubusercontent.com/u/132372032", fallback: "🌀" },
  { name: "Google AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", fallback: "🔮" },
  { name: "Meta", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg", fallback: "Ⓜ️" },
  { name: "Runway", logo: "https://avatars.githubusercontent.com/u/38747984", fallback: "🎬" },
];

const integrationCategories = [
  {
    name: "Ticketing",
    tools: [
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Zendesk", icon: "https://avatars.githubusercontent.com/u/1529656" },
      { name: "Freshdesk", icon: "https://avatars.githubusercontent.com/u/6165" },
      { name: "ServiceNow", icon: "https://avatars.githubusercontent.com/u/1013569" },
      { name: "Linear", icon: "https://avatars.githubusercontent.com/u/48176821" },
      { name: "Clickup", icon: "https://avatars.githubusercontent.com/u/36680253" },
    ],
  },
  {
    name: "CRM",
    tools: [
      { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
      { name: "Zoho", icon: "https://avatars.githubusercontent.com/u/6891047" },
      { name: "Pipedrive", icon: "https://avatars.githubusercontent.com/u/2866403" },
      { name: "Close", icon: "https://avatars.githubusercontent.com/u/1920256" },
      { name: "Copper", icon: "https://avatars.githubusercontent.com/u/11474328" },
      { name: "Freshsales", icon: "https://avatars.githubusercontent.com/u/6165" },
    ],
  },
  {
    name: "HR",
    tools: [
      { name: "Workday", icon: "https://avatars.githubusercontent.com/u/3219809" },
      { name: "ADP", icon: "https://avatars.githubusercontent.com/u/20965532" },
      { name: "Deel", icon: "https://avatars.githubusercontent.com/u/31977610" },
      { name: "Rippling", icon: "https://avatars.githubusercontent.com/u/30043130" },
      { name: "UKG", icon: "https://avatars.githubusercontent.com/u/7425831" },
      { name: "Paylocity", icon: "https://avatars.githubusercontent.com/u/10091289" },
    ],
  },
  {
    name: "O-Auth",
    tools: [
      { name: "Google", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "Microsoft", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Okta", icon: "https://avatars.githubusercontent.com/u/1829669" },
      { name: "Auth0", icon: "https://avatars.githubusercontent.com/u/2824157" },
      { name: "OneLogin", icon: "https://avatars.githubusercontent.com/u/885589" },
      { name: "Ping", icon: "https://avatars.githubusercontent.com/u/15108791" },
    ],
  },
  {
    id: "file-storage",
    name: "File Storage",
    tools: [
      { name: "Box", icon: "https://avatars.githubusercontent.com/u/263561" },
      { name: "Google Drive", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { name: "OneDrive", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Dropbox", icon: "https://avatars.githubusercontent.com/u/559357" },
      { name: "SharePoint", icon: "https://avatars.githubusercontent.com/u/6154722" },
      { name: "S3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    ],
  },
  {
    id: "collaboration",
    name: "Collaboration",
    tools: [
      { name: "Asana", icon: "https://avatars.githubusercontent.com/u/6165" },
      { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
      { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
      { name: "Monday", icon: "https://avatars.githubusercontent.com/u/9824920" },
      { name: "Teams", icon: "https://avatars.githubusercontent.com/u/6154722" },
    ],
  },
  {
    id: "dev-tools",
    name: "Dev Tools",
    tools: [
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "CircleCI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" },
      { name: "Vercel", icon: "https://avatars.githubusercontent.com/u/14985020" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    tools: [
      { name: "Mailchimp", icon: "https://avatars.githubusercontent.com/u/170749" },
      { name: "HubSpot", icon: "https://avatars.githubusercontent.com/u/326419" },
      { name: "Intercom", icon: "https://avatars.githubusercontent.com/u/1127961" },
      { name: "Klaviyo", icon: "https://avatars.githubusercontent.com/u/5765903" },
      { name: "Segment", icon: "https://avatars.githubusercontent.com/u/819518" },
      { name: "Braze", icon: "https://avatars.githubusercontent.com/u/1311360" },
    ],
  },
];

const deploymentOptions = [
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "VPC", icon: "🔒" },
  { name: "On Premise", icon: "🏢" },
];

export function AIAgentBuilder() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 italic">Just the Way You Need</h3>
      </div>

      <div className="space-y-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 max-w-4xl mx-auto">
          {agentTypes.map((agent) => (
            <motion.button
              key={agent.id}
              onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-full px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                selectedAgent === agent.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100"
              }`}
            >
              <span>{agent.icon}</span>
              <span>{agent.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center py-1">
          <svg className="h-8 w-full max-w-2xl" viewBox="0 0 600 40">
            <defs>
              <marker id="arrowhead1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
              </marker>
            </defs>
            <line x1="100" y1="0" x2="100" y2="12" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="200" y1="0" x2="200" y2="12" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="300" y1="0" x2="300" y2="12" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="400" y1="0" x2="400" y2="12" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="500" y1="0" x2="500" y2="12" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="100" y1="12" x2="500" y2="12" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="150" y1="12" x2="150" y2="40" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead1)" />
            <line x1="300" y1="12" x2="300" y2="40" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead1)" />
            <line x1="450" y1="12" x2="450" y2="40" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead1)" />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
          {coreCapabilities.map((cap) => (
            <motion.button
              key={cap.id}
              onClick={() => setSelectedCapability(selectedCapability === cap.id ? null : cap.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center gap-1 sm:gap-2 rounded-full px-2 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-sm font-medium transition-all ${
                selectedCapability === cap.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-white text-orange-700 border-2 border-orange-300 hover:bg-orange-50"
              }`}
            >
              <span className="text-base sm:text-lg">{cap.icon}</span>
              <span className="leading-tight">{cap.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <svg className="h-6 w-20" viewBox="0 0 80 24">
          <defs>
            <marker id="arrowhead2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
            </marker>
          </defs>
          <line x1="40" y1="0" x2="40" y2="20" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead2)" />
        </svg>
      </div>

      <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-b from-orange-50/50 to-white p-5 space-y-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
            GEN AI
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {genAIFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${feature.color} px-2 sm:px-4 py-1.5 sm:py-2`}>
                <h4 className="text-[10px] sm:text-sm font-semibold text-white">{feature.title}</h4>
              </div>
              <ul className="p-2 sm:p-4 space-y-1 sm:space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="text-[8px] sm:text-xs text-gray-600 flex items-start gap-1 sm:gap-2">
                    <span className="text-orange-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-row justify-between items-center gap-2 sm:gap-6 pt-4 border-t border-gray-100">
          {aiProviders.map((provider) => (
            <div key={provider.name} className="flex flex-col items-center gap-0.5 sm:gap-2">
              <div className="h-6 w-6 sm:h-10 sm:w-10 flex items-center justify-center rounded-lg bg-gray-50 p-0.5 sm:p-1">
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="h-4 w-4 sm:h-7 sm:w-7 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `<span class="text-sm sm:text-2xl">${provider.fallback}</span>`;
                  }}
                />
              </div>
              <span className="text-[7px] sm:text-xs font-semibold text-gray-700">{provider.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <svg className="h-6 w-20" viewBox="0 0 80 24">
          <defs>
            <marker id="arrowhead3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
            </marker>
          </defs>
          <line x1="40" y1="0" x2="40" y2="20" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead3)" />
        </svg>
      </div>

      <div className="rounded-2xl border-2 border-slate-700 overflow-hidden">
        <div className="bg-slate-800 py-3 px-4">
          <h4 className="text-center text-sm sm:text-base font-semibold text-white">
            Unified Integration
          </h4>
        </div>

        <div className="bg-white p-3 sm:p-5">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-4">
            {integrationCategories.map((category, idx) => (
              <div key={category.id || category.name || idx} className="text-center space-y-1 sm:space-y-2">
                <h5 className="text-[8px] sm:text-xs font-semibold text-gray-700 leading-tight">{category.name}</h5>
                <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="h-5 w-5 sm:h-7 sm:w-7 mx-auto rounded-md sm:rounded-lg bg-white border border-gray-100 p-0.5 sm:p-1 flex items-center justify-center hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer"
                      title={tool.name}
                    >
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="h-3 w-3 sm:h-4 sm:w-4 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.innerHTML = `<span class="text-[8px] font-bold text-gray-400">${tool.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <svg className="h-6 w-20" viewBox="0 0 80 24">
          <defs>
            <marker id="arrowhead4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
            </marker>
          </defs>
          <line x1="40" y1="0" x2="40" y2="20" stroke="#f97316" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead4)" />
        </svg>
      </div>

      <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-b from-orange-50/50 to-white p-5 space-y-3">
        <div className="text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
            Deploy Anywhere. No Lock In.
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:grid sm:grid-cols-3 md:grid-cols-6 sm:gap-4">
          {deploymentOptions.map((option, idx) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2 cursor-pointer sm:rounded-xl sm:border sm:border-gray-200 sm:bg-white sm:p-4 sm:hover:shadow-lg sm:hover:border-orange-300 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:border-orange-300 hover:shadow-lg transition-all sm:h-12 sm:w-12 sm:rounded-lg sm:bg-gray-50 sm:border-0">
                {option.icon.startsWith("http") ? (
                  <img
                    src={option.icon}
                    alt={option.name}
                    className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<span class="text-lg font-bold text-gray-400">${option.name.charAt(0)}</span>`;
                    }}
                  />
                ) : (
                  <span className="text-2xl">{option.icon}</span>
                )}
              </div>
              <span className="text-xs font-medium text-gray-600 sm:text-gray-700 text-center">{option.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition"
        >
          Start Building Your AI Agent
          <span>→</span>
        </motion.a>
      </div>
    </div>
  );
}
