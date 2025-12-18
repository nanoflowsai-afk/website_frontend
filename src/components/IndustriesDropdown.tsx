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
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "🛒",
    subIndustries: [
      { id: "multi-vendor-marketplaces", name: "Multi-Vendor Marketplaces", icon: "🏪" },
      { id: "b2c-online-retail", name: "B2C E-commerce", icon: "🛍️" },
      { id: "b2b-ecommerce-platforms", name: "B2B E-commerce", icon: "📦" },
      { id: "fashion-lifestyle-ecommerce", name: "Fashion & Apparel", icon: "👕" },
      { id: "grocery-quick-commerce", name: "Groceries & Food Delivery", icon: "🍔" },
      { id: "electronics-digital-goods", name: "Electronics Retail", icon: "📱" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "🏠",
    subIndustries: [
      { id: "residential-real-estate", name: "Residential Real Estate", icon: "🏡" },
      { id: "commercial-real-estate", name: "Commercial Real Estate", icon: "🏢" },
      { id: "property-management-firms", name: "Property Management", icon: "🔑" },
      { id: "real-estate-developers", name: "Real Estate Developers", icon: "📊" },
      { id: "hospitality-vacation-rentals", name: "Hospitality & Resorts", icon: "🏨" },
      { id: "co-living-co-working", name: "Co-living & Co-working", icon: "🏗️" },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "⚕️",
    subIndustries: [
      { id: "hospitals-multispecialty-clinics", name: "Hospitals & Clinics", icon: "🏥" },
      { id: "telemedicine-virtual-care", name: "Telemedicine", icon: "📞" },
      { id: "diagnostic-labs-imaging", name: "Diagnostic Labs", icon: "🔬" },
      { id: "pharmacies-medical-stores", name: "Pharmacies", icon: "💊" },
      { id: "health-insurance-providers", name: "Health Insurance", icon: "📋" },
      { id: "wellness-fitness-centers", name: "Wellness & Fitness", icon: "💪" },
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: "📚",
    subIndustries: [
      { id: "schools-k12", name: "K-12 Schools", icon: "🎓" },
      { id: "colleges-universities", name: "Colleges & Universities", icon: "🎯" },
      { id: "online-learning-platforms", name: "Online Learning Platforms", icon: "💻" },
      { id: "skill-development-vocational", name: "Vocational Training", icon: "🛠️" },
      { id: "corporate-training-ld", name: "Corporate Training", icon: "👔" },
      { id: "coaching-training-institutes", name: "Coaching Institutes", icon: "📈" },
    ],
  },
  {
    id: "local-businesses",
    name: "Local Business",
    icon: "🏪",
    subIndustries: [
      { id: "restaurants-cafes-food", name: "Restaurants & Cafés", icon: "🍕" },
      { id: "salons-spas-personal-care", name: "Salons & Spas", icon: "💇" },
      { id: "automobile-services-workshops", name: "Automotive Services", icon: "🚗" },
      { id: "gyms-yoga-fitness", name: "Fitness & Gyms", icon: "🏋️" },
      { id: "clinics-local-healthcare", name: "Local Clinics", icon: "🏥" },
      { id: "professional-services", name: "Professional Services", icon: "⚖️" },
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
      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[95vw] max-w-6xl rounded-2xl border border-gray-100 bg-white shadow-2xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-7 gap-0 divide-x divide-gray-200 p-10">
        {industriesData.map((industry, index) => (
          <div key={industry.id} className={`flex flex-col ${index !== 0 ? 'pl-6' : ''}`}>
            {/* Header Section */}
            <Link
              href={`/industries/${industry.id}`}
              className="group flex flex-col mb-4 pb-4 border-b border-gray-100 transition-all"
              onClick={onClose}
            >
              <div className="flex items-start gap-2 mb-2">
                <motion.span 
                  className="text-2xl leading-none"
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
            <div className="flex flex-col gap-3">
              {industry.subIndustries.map((sub, subIndex) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 + subIndex * 0.02 }}
                >
                  <Link
                    href={`/industries/${industry.id}/${sub.id}`}
                    className="group flex items-start gap-2 text-sm text-gray-700 hover:text-orange-600 transition-colors py-1"
                    onClick={onClose}
                  >
                    <motion.span 
                      className="text-base mt-0.5"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {sub.icon}
                    </motion.span>
                    <span className="leading-snug group-hover:translate-x-1 transition-transform">{sub.name}</span>
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
