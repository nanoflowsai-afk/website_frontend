import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type SeoEntry = {
    page: string;
    url: string;
    description: string;
    keywords: string[];
};

const seoData: SeoEntry[] = [
    {
        page: "Home Page",
        url: "/",
        description: "Main entry point. Targets high-level brand and core value proposition keywords.",
        keywords: [
            // Core Identity
            "AI Automation Agency", "Enterprise AI Solutions", "Business Process Automation Company",
            "Digital Transformation Agency", "Intelligent Automation Partners", "AI Consultancy Firm",
            "Custom AI Development Services", "SaaS Automation Experts", "Generative AI for Business",
            // High-Intent Services
            "Hire AI Developers", "Outsource AI Automation", "AI Strategy Consulting",
            "Business Logic Automation", "API Integration Specialists", "Workflow Optimization Services",
            "Legacy System Modernization", "Cloud AI Implementation", "Data Science Consulting",
            // Technology Stack
            "Machine Learning Solutions", "Natural Language Processing (NLP) Services", "LLM Integration",
            "OpenAI Business Solutions", "Python Automation Experts", "RPA Alternatives",
            "Low-Code Automation Development", "Zapier/Make.com Experts", "Vector Database Implementation",
            // Outcomes/Benefits
            "Reduce Operational Costs with AI", "Scale Business Operations", "Automate Manual Workflows",
            "Increase Employee Productivity", "AI Driven Decision Making", "Future of Work Solutions",
            "Smart Enterprise Operations", "Paperless Office Transformation", "Rapid MVP Development",
            // Comparative/Long-tail
            "Best AI Agency 2025", "Top Automation Consultants", "AI Agency vs In-house Team",
            "Cost Effective AI Solutions", "Scalable AI Architecture", "Secure Enterprise AI",
            "End-to-End AI Development", "Dedicated AI Teams", "Staff Augmentation for AI"
        ]
    },
    {
        page: "Services (Main Catalog)",
        url: "/services",
        description: "Overview of all service offerings. Targets broad service-seeking intent.",
        keywords: [
            // Service Categories
            "AI Consulting Services", "Custom Software Development", "Process Optimization Consulting",
            "Automation Strategy Workshops", "Technology Roadmapping", "Digital Modernization Services",
            "Tech Stack Audits", "AI Readiness Assessment", "Workflow Analysis",
            "Business Intelligence Consulting", "Data Strategy Solutions", "Cloud Migration for AI",
            // Implementation Types
            "API Development Services", "Microservices Architecture Design", "Serverless Solutions",
            "Enterprise Software Development", "Mobile App Integration", "Web App Automation",
            "Database Design and Optimization", "Real-time Data Pipelines", "Predictive Analytics Setup",
            // Support & Maintenance
            "AI Model Tuning Services", "Fine-tuning LLMs", "Custom GPT Development",
            "Computer Vision Solutions", "Speech Recognition Implementation", "Sentiment Analysis Tools",
            "Recommendation Engine Development", "Fraud Detection Systems", "Supply Chain Optimization",
            // Engagement Models
            "Staff Augmentation", "Dedicated Development Teams", "CTO as a Service",
            "Technical Project Management", "Agile Development Services", "DevOps for AI",
            "MLOps Implementation", "Continuous Integration for AI", "Secure AI Deployment"
        ]
    },
    {
        page: "Service Detail Pages (Template)",
        url: "/services/* (e.g., /services/custom-ai)",
        description: "Applies to individual service pages. Keywords should be specific to the service but follow this pattern.",
        keywords: [
            // Template Pattern: [Service Name] + [Intent]
            "[Service Name] Solutions", "[Service Name] Consulting", "Custom [Service Name] Development",
            "Enterprise [Service Name] Software", "[Service Name] Implementation Agency",
            // Specific Examples (representing the mix)
            "Custom Machine Learning Models", "NLP Model Training", "Computer Vision Integration",
            "Predictive Analytics Dashboards", "Voice AI Agents Development", "Chatbot Design and Build",
            "Robotic Process Automation (RPA)", "Intelligent Document Processing (IDP)",
            "Automated Customer Support Systems", "Supply Chain AI Modules", "HR Automation Tools",
            "Financial Forecasting Models", "Marketing Automation Workflows", "Sales Intelligence Tools",
            "Legal Document Automation", "Healthcare AI Diagnostics", "EdTech Learning Algorithms",
            "FinTech Fraud Detection", "Real Estate Valuation Models", "E-commerce Recommendation AI",
            "Manufacturing Predictive Maintenance", "IoT Data Processing", "Smart City Solutions",
            "Automated Compliance Checks", "Cybersecurity AI Integration", "Blockchain Smart Contracts",
            "DeFi Platform Development", "Telemedicine App Development", "Neobank Architecture"
        ]
    },
    {
        page: "Products (Main Catalog)",
        url: "/products",
        description: "Showcase of SaaS and pre-built solutions. Targets users looking for tools over services.",
        keywords: [
            // Product Categories
            "AI Software Suite", "Business Intelligence Tools", "Automated Marketing Platform",
            "Sales Enablement Software", "Customer Service AI Platforms", "Productivity Software",
            "Collaboration AI Tools", "Data Analysis Dashboards", "Reporting Automation Tools",
            "White Label AI Solutions", "Customizable AI Engines", "API-First AI Products",
            "Headless CMS for AI", "Embedded AI Tools", "Cloud-Native AI Apps",
            // Features
            "Multi-tenant SaaS Architecture", "Subscription Management Systems", "User Behavior Analytics",
            "Conversion Rate Optimization Tools", "A/B Testing AI", "Personalization Engines",
            "Content Management Systems AI", "Digital Asset Management", "Project Management Automation",
            "Task Management AI", "Time Tracking Automation", "Resource Allocation Tools",
            "Budgeting and Forecasting AI", "Invoicing Automation", "Payroll Automation",
            "Compliance Monitoring Tools", "Security Operations AI", "Incident Response Automation"
        ]
    },
    {
        page: "Product Detail Pages (Template)",
        url: "/products/* (e.g., /products/lead-gen)",
        description: "Applies to individual product pages. Focuses on specific tool capabilities and user pain points.",
        keywords: [
            // Lead Gen & Sales
            "Automated Lead Gen Software", "AI Sales Prospecting Tool", "Cold Email Automation",
            "LinkedIn Automation Bot", "Sales Funnel Optimizer", "CRM Data Enrichment",
            "Predictive Lead Scoring", "Sales Forecasting AI", "Deal Health Monitoring",
            // Voice & Comm
            "AI Voice Agents", "Automated Calling Software", "Virtual Sales Assistant",
            "Smart IVR System", "Real-time Call Analytics", "Meeting Summarizer AI",
            // CRM & Dashboards
            "Smart CRM Platform", "Customer Insights Dashboard", "Churn Prediction Tool",
            "Interaction Tracking", "Customer Journey Mapping", "Marketing ROI Tracker",
            // Content & Marketing
            "AI Content Generator", "Social Media Scheduler AI", "Copywriting Assistant",
            "Video Script AI", "Personalized Email Marketing", "Ad Creative Generator",
            // Internal Tools
            "Employee Productivity Bot", "Internal Knowledge Base AI", "HR Onboarding Bot",
            "IT Helpdesk Automation", "Document Search AI", "Company Culture Monitor"
        ]
    },
    {
        page: "Industries (Main Index)",
        url: "/industries",
        description: "Directory of industry-specific solutions. Targets vertical-specific searches.",
        keywords: [
            "Industry Specific AI Solutions", "Vertical SaaS Development", "Sector-Based Automation",
            "Niche Tech Solutions", "Specialized AI Consultants", "Industry 4.0 Providers",
            "Digital Health Innovations", "FinTech Software Compnay", "EdTech Solution Providers",
            "PropTech Development Agency", "LegalTech Automation Experts", "InsurTech AI",
            "AgriTech Solutions", "RetailTech Automation", "Logistics AI Providers",
            "Manufacturing AI Experts", "EnergyTech Solutions", "GovTech Automation",
            "MediaTech Solutions", "AdTech Platforms", "TravelTech AI",
            "Automotive AI Solutions", "Construction Tech", "Professional Services Automation"
        ]
    },
    {
        page: "Industry Detail Pages (Template)",
        url: "/industries/* (e.g., /industries/fintech)",
        description: "Applies to any industry sub-page. Keywords are highly specific to the vertical.",
        keywords: [
            // FinTech
            "Banking Software Development", "Algorithmic Trading Bots", "Fraud Detection AI",
            "Loan Origination Automation", "Neobank App Development", "KYC/AML Automation",
            // HealthTech
            "Telemedicine Platforms", "Electronic Health Records AI", "Medical Imaging Analysis",
            "Patient Monitoring Systems", "Drug Discovery AI", "Healthcare Interoperability",
            // E-commerce
            "Headless Commerce Solutions", "Personalized Shopping AI", "Inventory Prevention AI",
            "Dynamic Pricing Models", "Omnichannel Retail Tech", "Cart Abandonment AI",
            // Real Estate
            "Property Management Connect", "Real Estate Valuation AVM", "Smart Home IoT",
            "Tenant Screening AI", "Virtual Tour Technology", "Construction Management AI",
            // Manufacturing
            "Predictive Maintenance IIoT", "Smart Factory Digital Twins", "Supply Chain Visibility",
            "Quality Control Computer Vision", "Warehouse Robotics Integration", "Production Scheduling AI",
            // Education
            "Personalized Learning LMS", "Student Analytics Dashboards", "AI Tutors",
            "EdTech Gamification", "School Administration Software", "Remote Proctoring AI"
        ]
    },
    {
        page: "Blog (Main Feed)",
        url: "/blog",
        description: "Content hub. Targets informational queries and thought leadership.",
        keywords: [
            "AI Tech Insights", "Automation Industry News", "Digital Transformation Trends",
            "Business Technology Blog", "AI Implementation Guides", "Tech Case Studies",
            "Thought Leadership Articles", "CEO Insights on AI", "CTO Technology Guides",
            "Developer Tutorials", "Best Practices for AI", "Future of Work Articles",
            "Remote Work Productivity", "Scalability Strategies", "Startup Growth Tips",
            "Enterprise Innovation News", "AI Ethics Discussions", "Responsible AI",
            "Machine Learning Explained", "Software Architecture Patterns", "Cloud Tech Trends"
        ]
    },
    {
        page: "Careers",
        url: "/careers",
        description: "Recruitment page. Targets job seekers and talent acquisition.",
        keywords: [
            "AI Careers", "Tech Jobs Remote", "Software Engineer Vacancies",
            "Machine Learning Engineer Jobs", "Data Scientist Roles", "Full Stack Developer Jobs",
            "Product Manager Positions", "UX/UI Designer Jobs", "DevOps Engineer Careers",
            "Sales Careers in Tech", "Marketing Jobs in Tech", "Join Our Team",
            "Internships in AI", "Graduate Tech Programs", "Diversity in Tech",
            "Inclusive Workplace Culture", "Employee Benefits Tech", "Remote First Company",
            "Career Growth Opportunities", "Tech Mentorship Programs", "Global Tech Teams",
            "Work from Home Jobs", "Flexible Work Engineering", "Competitive Salary Tech"
        ]
    },
    {
        page: "Contact",
        url: "/contact",
        description: "Conversion page. Targets users ready to engage or needing support.",
        keywords: [
            "Contact AI Agency", "Hire Automation Team", "Request Project Quote",
            "Book Discovery Call", "Schedule AI Demo", "Technical Support Contact",
            "Partnership Inquiries", "Investor Relations", "Media Inquiries",
            "Office Locations", "Global Presence", "Customer Service AI",
            "RFP Submission", "Project Estimation Request", "Consulting Rates",
            "Dedicated Team Hiring", "Staff Augmentation Inquiry", "Emergency Support",
            "Vendor Registration", "General Inquiry", "Visit Our Office"
        ]
    }
];

export default function SeoKeywordsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPage, setSelectedPage] = useState<string>("All");

    const filteredData = seoData.filter(item => {
        const matchesSearch = item.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase())) ||
            item.page.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPage = selectedPage === "All" || item.page === selectedPage;
        return matchesSearch && matchesPage;
    });

    // Extract unique pages for dropdown
    const pages = ["All", ...Array.from(new Set(seoData.map(d => d.page)))];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">SEO Keyword Matrix</h1>
                        <p className="mt-2 text-gray-600">
                            Consolidated view of keyword strategies for main pages and template types.
                            This guide ensures all dynamically generated pages follow a consistent high-ranking strategy.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 mb-8">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Search Keywords or Pages</label>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Page Type</label>
                                <select
                                    className="w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                    value={selectedPage}
                                    onChange={(e) => setSelectedPage(e.target.value)}
                                >
                                    {pages.map(page => (
                                        <option key={page} value={page}>{page}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {filteredData.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col">
                                <div className="bg-orange-50/50 px-5 py-4 border-b border-orange-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg text-gray-900">{item.page}</h3>
                                        <code className="text-xs bg-white px-2 py-1 rounded text-orange-600 border border-orange-200 font-mono">{item.url}</code>
                                    </div>
                                    <p className="text-sm text-gray-600 italic">{item.description}</p>
                                </div>
                                <div className="p-5 flex-grow">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Target Keywords ({item.keywords.length})</h4>
                                    <div className="flex flex-wrap gap-2 max-h-96 overflow-y-auto content-start pr-1 scrollbar-thin scrollbar-thumb-gray-200">
                                        {item.keywords.map((keyword, kIdx) => (
                                            <span key={kIdx} className="inline-flex items-center px-2.5 py-1.5 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 transition cursor-default">
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
