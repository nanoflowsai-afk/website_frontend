"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TechItem = {
  name: string;
  icon: string;
};

type Category = {
  id: string;
  label: string;
  technologies: TechItem[];
};

function TechIcon({ tech }: { tech: TechItem }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">
        {tech.name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={tech.icon}
      alt={tech.name}
      title={tech.name}
      className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
      onError={() => setHasError(true)}
    />
  );
}

const categories: Category[] = [
  {
    id: "llms",
    label: "LLMs & AI",
    technologies: [
      { name: "OpenAI", icon: "https://www.svgrepo.com/show/306500/openai.svg" },
      { name: "Claude", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg" },
      { name: "Gemini", icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
      { name: "Meta AI", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" },
      { name: "Mistral", icon: "https://docs.mistral.ai/img/logo.svg" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    ],
  },
  {
    id: "vector",
    label: "Vector DBs & RAG",
    technologies: [
      { name: "Pinecone", icon: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4" },
      { name: "Weaviate", icon: "https://avatars.githubusercontent.com/u/37794290?s=200&v=4" },
      { name: "Chroma", icon: "https://avatars.githubusercontent.com/u/120410494?s=200&v=4" },
      { name: "Qdrant", icon: "https://avatars.githubusercontent.com/u/73504361?s=200&v=4" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    technologies: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    ],
  },
];

export function TechStackTabs() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeTech = categories.find((c) => c.id === activeCategory)?.technologies ?? [];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex overflow-x-auto scrollbar-hide justify-start sm:justify-center gap-1 sm:gap-2 border-b border-gray-200 pb-3 sm:pb-4 -mx-2 px-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative whitespace-nowrap px-3 py-2 text-xs sm:text-sm font-medium transition-colors flex-shrink-0 rounded-lg ${
              activeCategory === category.id
                ? "text-orange-600 bg-orange-50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {category.label}
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-3 md:grid-cols-6"
          >
            {activeTech.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl border border-gray-100 bg-white p-4 sm:p-5 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg min-h-[100px] sm:min-h-[120px]"
              >
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-xl bg-gray-50 p-2 sm:p-3 transition group-hover:bg-orange-50">
                  <TechIcon tech={tech} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-600 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
