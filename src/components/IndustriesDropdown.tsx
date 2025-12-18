"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const industriesData = [
  {
    id: "startups-saas",
    name: "Startups & SaaS",
    icon: "🚀",
    subIndustries: [
      { id: "fintech-startups", name: "FinTech Startups", icon: "💳" },
      { id: "healthtech-startups", name: "HealthTech Startups", icon: "🏥" },
      { id: "edtech-startups", name: "EdTech Startups", icon: "📚" },
      { id: "proptech-startups", name: "PropTech Startups", icon: "🏗️" },
      { id: "hrtech-recruitment-saas", name: "HRTech & Recruitment", icon: "👥" },
      { id: "martech-salestech-saas", name: "MarTech & SalesTech", icon: "📈" },
      { id: "logistics-supply-chain-saas", name: "Logistics & Supply Chain", icon: "🚚" },
      { id: "productivity-collaboration-tools", name: "Productivity Tools", icon: "⚡" },
    ],
  },
  {
    id: "enterprises",
    name: "Enterprises",
    icon: "🏢",
    subIndustries: [
      { id: "banking-financial-services", name: "Banking & Financial Services", icon: "🏦" },
      { id: "manufacturing-industrial", name: "Manufacturing & Industrial", icon: "🏭" },
      { id: "it-services-consulting", name: "IT Services & Consulting", icon: "💻" },
      { id: "telecom-networking", name: "Telecom & Networking", icon: "📡" },
      { id: "energy-utilities", name: "Energy & Utilities", icon: "⚡" },
      { id: "government-public-sector", name: "Government & Public Sector", icon: "🏛️" },
      { id: "retail-consumer-enterprises", name: "Retail & Consumer", icon: "🛍️" },
      { id: "media-entertainment", name: "Media & Entertainment", icon: "🎬" },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    subIndustries: [
      { id: "marketplace-platforms", name: "Marketplace Platforms", icon: "🏪" },
      { id: "b2c-ecommerce", name: "B2C E-commerce", icon: "🛍️" },
      { id: "b2b-ecommerce", name: "B2B E-commerce", icon: "📦" },
      { id: "fashion-ecommerce", name: "Fashion & Apparel", icon: "👕" },
      { id: "groceries-food-delivery", name: "Groceries & Food Delivery", icon: "🍔" },
      { id: "electronics-retail", name: "Electronics Retail", icon: "📱" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "🏠",
    subIndustries: [
      { id: "residential-real-estate", name: "Residential Real Estate", icon: "🏡" },
      { id: "commercial-real-estate", name: "Commercial Real Estate", icon: "🏢" },
      { id: "property-management", name: "Property Management", icon: "🔑" },
      { id: "real-estate-analytics", name: "Real Estate Analytics", icon: "📊" },
      { id: "hospitality-resorts", name: "Hospitality & Resorts", icon: "🏨" },
      { id: "co-working-spaces", name: "Co-working Spaces", icon: "🏗️" },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "⚕️",
    subIndustries: [
      { id: "hospitals-clinics", name: "Hospitals & Clinics", icon: "🏥" },
      { id: "telemedicine", name: "Telemedicine", icon: "📞" },
      { id: "medical-diagnostics", name: "Medical Diagnostics", icon: "🔬" },
      { id: "pharmacy-management", name: "Pharmacy Management", icon: "💊" },
      { id: "health-insurance", name: "Health Insurance", icon: "📋" },
      { id: "wellness-fitness", name: "Wellness & Fitness", icon: "💪" },
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: "📚",
    subIndustries: [
      { id: "k12-schools", name: "K-12 Schools", icon: "🎓" },
      { id: "higher-education", name: "Higher Education", icon: "🎯" },
      { id: "online-learning", name: "Online Learning Platforms", icon: "💻" },
      { id: "vocational-training", name: "Vocational Training", icon: "🛠️" },
      { id: "corporate-training", name: "Corporate Training", icon: "👔" },
      { id: "skill-development", name: "Skill Development", icon: "📈" },
    ],
  },
  {
    id: "local-business",
    name: "Local Business",
    icon: "🏪",
    subIndustries: [
      { id: "restaurants-cafes", name: "Restaurants & Cafés", icon: "🍕" },
      { id: "salons-spas", name: "Salons & Spas", icon: "💇" },
      { id: "automotive-services", name: "Automotive Services", icon: "🚗" },
      { id: "fitness-gyms", name: "Fitness & Gyms", icon: "🏋️" },
      { id: "plumbing-repair", name: "Plumbing & Repair", icon: "🔧" },
      { id: "legal-services", name: "Legal Services", icon: "⚖️" },
    ],
  },
];

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
      className="absolute left-0 top-full mt-2 w-screen max-w-5xl rounded-xl border border-orange-100 bg-white shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-7 gap-8 p-8">
        {industriesData.map((industry) => (
          <div key={industry.id} className="space-y-3">
            <Link
              href={`/industries/${industry.id}`}
              className="flex items-center gap-2 font-semibold text-gray-900 transition hover:text-orange-600"
              onClick={onClose}
            >
              <span className="text-lg">{industry.icon}</span>
              <span className="text-xs uppercase tracking-wide">{industry.name}</span>
            </Link>

            <div className="space-y-2">
              {industry.subIndustries.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/industries/${industry.id}/${sub.id}`}
                  className="block text-xs text-gray-600 transition hover:text-orange-600 hover:pl-1"
                  onClick={onClose}
                >
                  <span className="mr-1">{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
