import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCategorySidebar } from "@/components/ServiceCategorySidebar";
import { notFound } from "next/navigation";
import Image from "next/image";
import customLlmImage from "@assets/generated_images/custom_llm_ai_system.png";
import decisionSupportImage from "@assets/generated_images/decision_support_ai_dashboard.png";
import contentIntelImage from "@assets/generated_images/content_intelligence_ai_platform.png";
import salesAutoImage from "@assets/generated_images/sales_automation_workflow.png";
import marketingAutoImage from "@assets/generated_images/marketing_automation_platform.png";
import opsWorkflowImage from "@assets/generated_images/operations_workflow_ai_engine.png";
import aiNativeWebImage from "@assets/generated_images/ai_native_website_builder.png";
import saasDevImage from "@assets/generated_images/saas_platform_development.png";
import entDashImage from "@assets/generated_images/enterprise_dashboard_system.png";
import aiSalesAgentImage from "@assets/generated_images/ai_sales_agent_chat.png";
import customerSupportImage from "@assets/generated_images/customer_support_chatbot.png";
import multiChannelImage from "@assets/generated_images/multi-channel_ai_assistant.png";
import realtimeAnalyticsImage from "@assets/generated_images/real-time_analytics_dashboard.png";
import predictiveAnalyticsImage from "@assets/generated_images/predictive_analytics_engine.png";
import dataIntegrationImage from "@assets/generated_images/data_integration_platform.png";
import whatsappCrmImage from "@assets/generated_images/whatsapp_crm_system.png";
import multiAccountWhatsappImage from "@assets/generated_images/multi-account_whatsapp_crm.png";
import salesInventoryImage from "@assets/generated_images/sales_inventory_management.png";
import posBillingImage from "@assets/generated_images/pos_billing_system.png";
import hrmsImage from "@assets/generated_images/hrms_management_system.png";
import payrollImage from "@assets/generated_images/payroll_management_system.png";
import loanImage from "@assets/generated_images/loan_management_system.png";
import appointmentImage from "@assets/generated_images/appointment_booking_system.png";
import clinicImage from "@assets/generated_images/clinic_hospital_management.png";
import gymImage from "@assets/generated_images/gym_membership_management.png";
import lawyerImage from "@assets/generated_images/lawyer_case_management.png";
import courierImage from "@assets/generated_images/courier_logistics_management.png";
import fleetImage from "@assets/generated_images/fleet_management_system.png";
import propertyImage from "@assets/generated_images/property_tenant_management.png";
import garageImage from "@assets/generated_images/garage_car_wash_management.png";
import salonSpaImage from "@assets/generated_images/salon_spa_management.png";
import laundryImage from "@assets/generated_images/laundry_shop_management.png";
import restaurantImage from "@assets/generated_images/restaurant_table_booking.png";
import singleVendorImage from "@assets/generated_images/single_vendor_e-commerce.png";
import multiVendorImage from "@assets/generated_images/multi-vendor_marketplace.png";
import classifiedsImage from "@assets/generated_images/classifieds_marketplace.png";
import groceryImage from "@assets/generated_images/grocery_e-commerce.png";
import pharmacyImage from "@assets/generated_images/pharmacy_e-commerce.png";
import onDemandImage from "@assets/generated_images/on-demand_services_marketplace.png";
import carRentalImage from "@assets/generated_images/car_rental_platform.png";
import hotelImage from "@assets/generated_images/hotel_booking_platform.png";
import travelImage from "@assets/generated_images/travel_tour_booking.png";
import realEstateImage from "@assets/generated_images/real_estate_marketplace.png";
import jobPortalImage from "@assets/generated_images/job_portal_recruitment.png";
import freelancerImage from "@assets/generated_images/freelancer_marketplace.png";
import digitalProductsImage from "@assets/generated_images/digital_products_marketplace.png";
import crowdfundingImage from "@assets/generated_images/crowdfunding_platform.png";
import ottImage from "@assets/generated_images/ott_streaming_platform.png";
import automobileImage from "@assets/generated_images/automobile_marketplace.png";
import lmsImage from "@assets/generated_images/learning_management_lms.png";
import schoolImage from "@assets/generated_images/school_college_management.png";
import coachingImage from "@assets/generated_images/coaching_institute_management.png";
import examImage from "@assets/generated_images/examination_assessment_system.png";
import courseImage from "@assets/generated_images/course_selling_platform.png";
import libraryImage from "@assets/generated_images/library_management_system.png";
import emailCampaignImage from "@assets/generated_images/email_campaign_marketing.png";
import whatsappMarketingImage from "@assets/generated_images/whatsapp_marketing_saas.png";
import crmEngagementImage from "@assets/generated_images/crm_customer_engagement.png";
import projectTaskImage from "@assets/generated_images/project_task_management.png";
import invoiceBillingImage from "@assets/generated_images/invoice_billing_saas.png";
import ticketingImage from "@assets/generated_images/ticketing_helpdesk_saas.png";
import aiChatbotImage from "@assets/generated_images/ai_chatbot_automation_saas.png";
import newsMediaImage from "@assets/generated_images/news_media_magazine_portal.png";
import bloggingImage from "@assets/generated_images/blogging_portfolio_platform.png";
import corporateCmsImage from "@assets/generated_images/corporate_website_cms.png";
import ngoImage from "@assets/generated_images/ngo_non-profit_portal.png";
import multipurposeCmsImage from "@assets/generated_images/multipurpose_cms_platform.png";
import religiousImage from "@assets/generated_images/religious_organization_website.png";
import eventManagementImage from "@assets/generated_images/event_management_portal.png";
import communityImage from "@assets/generated_images/community_membership_portal.png";
import videoHostingImage from "@assets/generated_images/video_hosting_platform.png";
import musicImage from "@assets/generated_images/music_streaming_platform.png";
import photographyImage from "@assets/generated_images/photography_portfolio_platform.png";
import weddingImage from "@assets/generated_images/wedding_event_showcase.png";
import creativeAgencyImage from "@assets/generated_images/creative_agency_website.png";
import talentImage from "@assets/generated_images/talent_booking_platform.png";
import healthcareBookingImage from "@assets/generated_images/healthcare_booking_portal.png";
import beautyBookingImage from "@assets/generated_images/beauty_service_booking.png";
import homeServicesImage from "@assets/generated_images/home_services_booking.png";
import vehicleServiceImage from "@assets/generated_images/vehicle_service_booking.png";
import fitnessBookingImage from "@assets/generated_images/fitness_wellness_booking.png";
import tutorBookingImage from "@assets/generated_images/tutor_session_booking.png";
import accountingImage from "@assets/generated_images/accounting_financial_software.png";
import inventoryImage from "@assets/generated_images/inventory_stock_control.png";
import vendorImage from "@assets/generated_images/vendor_supplier_management.png";
import assetImage from "@assets/generated_images/asset_resource_management.png";
import paymentGatewayImage from "@assets/generated_images/payment_gateway_wallet.png";
import subscriptionImage from "@assets/generated_images/subscription_billing_management.png";
import utilityRechargeImage from "@assets/generated_images/utility_recharge_platform.png";
import wealthImage from "@assets/generated_images/wealth_management_portal.png";
import insuranceImage from "@assets/generated_images/insurance_crm_management.png";
import firewallImage from "@assets/generated_images/website_firewall_security.png";
import mfaImage from "@assets/generated_images/mfa_identity_access.png";
import adminDashboardImage from "@assets/generated_images/admin_dashboard_control.png";
import fileManagementImage from "@assets/generated_images/file_document_management.png";
import qrAttendanceImage from "@assets/generated_images/qr_biometric_attendance.png";
import parkingImage from "@assets/generated_images/parking_access_management.png";
import visitorImage from "@assets/generated_images/visitor_access_management.png";
import type { StaticImageData } from "next/image";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  category: string;
  problem: string;
  whoFor: string;
  impact: string;
  techStack: string[];
  keyFeatures?: string[];
  deliverables?: string[];
  timeline?: string;
  uniqueValue?: string;
};

const services: Service[] = [
  {
    id: "1",
    title: "Custom LLM Systems",
    description: "Build tailored large language model solutions for content generation, intelligence, and enterprise automation using advanced AI algorithms.",
    image: customLlmImage,
    category: "Generative AI Solutions",
    problem: "Businesses struggle with manual content creation, slow decision-making, and inefficient data processing that limits growth and productivity.",
    whoFor: "Enterprises, content-heavy organizations, and businesses seeking to automate knowledge-intensive workflows.",
    impact: "Reduce content creation time by 80%, improve decision accuracy by 60%, and scale operations without proportional headcount increase.",
    techStack: ["OpenAI GPT-4", "Claude", "LangChain", "Pinecone", "Python", "FastAPI"],
    keyFeatures: ["Custom-trained models on your company data", "Multi-language content generation", "Automatic fact-checking and source citation", "Brand voice consistency engine"],
    deliverables: ["Fully deployed LLM system", "Admin dashboard for model management", "API access for integrations", "Training documentation"],
    timeline: "6-10 weeks",
    uniqueValue: "Unlike generic AI tools, we train models specifically on your business knowledge, ensuring outputs match your exact needs and terminology.",
  },
  {
    id: "2",
    title: "Decision Support AI",
    description: "AI-powered systems that analyze data and provide actionable insights for strategic decision-making across your organization.",
    image: decisionSupportImage,
    category: "Generative AI Solutions",
    problem: "Leaders make decisions based on incomplete data, gut feelings, or delayed reports, leading to missed opportunities and costly mistakes.",
    whoFor: "C-suite executives, operations managers, and data-driven organizations seeking competitive advantage.",
    impact: "Accelerate decision-making by 5x, reduce analysis paralysis, and increase strategic accuracy with real-time AI insights.",
    techStack: ["Machine Learning", "Predictive Analytics", "React", "Node.js", "PostgreSQL", "TensorFlow"],
    keyFeatures: ["Scenario simulation with what-if analysis", "Risk scoring for every recommendation", "Historical pattern recognition", "Executive summary generation"],
    deliverables: ["Decision intelligence dashboard", "Mobile app for on-the-go insights", "Weekly automated reports", "Alert system for critical decisions"],
    timeline: "8-12 weeks",
    uniqueValue: "Our system doesn't just show data - it explains why certain decisions matter and ranks options by likelihood of success.",
  },
  {
    id: "3",
    title: "Content Intelligence Platform",
    description: "Automated content creation, summarization, and optimization powered by advanced AI models for maximum engagement.",
    image: contentIntelImage,
    category: "Generative AI Solutions",
    problem: "Content teams are overwhelmed, producing inconsistent quality while struggling to meet growing demand across channels.",
    whoFor: "Marketing teams, publishers, e-commerce businesses, and content agencies scaling their output.",
    impact: "10x content production capacity, maintain brand consistency, and optimize engagement across all channels.",
    techStack: ["GPT-4", "Claude", "Next.js", "Tailwind CSS", "Prisma", "Vercel"],
    keyFeatures: ["SEO-optimized content generation", "Automatic image and video suggestions", "Plagiarism and originality checking", "Performance tracking per content piece"],
    deliverables: ["Content management system with AI", "Editorial workflow automation", "Analytics dashboard", "Template library"],
    timeline: "4-8 weeks",
    uniqueValue: "We combine content creation with real-time performance data, so the AI learns what works best for your specific audience.",
  },
  {
    id: "4",
    title: "Sales Automation System",
    description: "Automate lead scoring, follow-ups, and pipeline management with AI-driven workflows that never sleep.",
    image: salesAutoImage,
    category: "AI Automation & Workflows",
    problem: "Sales teams waste 60% of time on non-selling activities, miss follow-ups, and struggle with inconsistent lead qualification.",
    whoFor: "B2B companies, SaaS businesses, and sales organizations looking to scale without adding headcount.",
    impact: "Increase sales productivity by 40%, improve lead conversion by 25%, and ensure 100% follow-up compliance.",
    techStack: ["n8n", "Make.com", "OpenAI", "CRM Integration", "Python", "Webhooks"],
    keyFeatures: ["Smart lead scoring based on behavior", "Automated personalized follow-up sequences", "Meeting scheduling without back-and-forth", "Deal risk alerts"],
    deliverables: ["CRM integration setup", "Custom automation workflows", "Lead scoring model", "Performance dashboards"],
    timeline: "3-6 weeks",
    uniqueValue: "Our system watches for buying signals in emails and calls, alerting reps at the perfect moment to close deals.",
  },
  {
    id: "5",
    title: "Marketing Automation Suite",
    description: "End-to-end campaign automation, personalization, and performance optimization with intelligent triggers.",
    image: marketingAutoImage,
    category: "AI Automation & Workflows",
    problem: "Marketing teams run fragmented campaigns, struggle with personalization at scale, and lack real-time optimization.",
    whoFor: "Growth marketers, e-commerce brands, and businesses seeking automated, personalized customer journeys.",
    impact: "Reduce campaign setup time by 70%, increase engagement by 45%, and optimize spend with AI-driven insights.",
    techStack: ["HubSpot", "Mailchimp API", "OpenAI", "Analytics", "React", "Node.js"],
    keyFeatures: ["Dynamic audience segmentation", "A/B testing automation", "Cross-channel campaign orchestration", "Budget optimization engine"],
    deliverables: ["Marketing automation platform", "Customer journey maps", "Campaign templates", "ROI tracking system"],
    timeline: "4-8 weeks",
    uniqueValue: "We automatically shift budget to best-performing channels in real-time, maximizing every marketing dollar.",
  },
  {
    id: "6",
    title: "Operations Workflow Engine",
    description: "Streamline operational processes with intelligent automation, real-time monitoring, and predictive maintenance.",
    image: opsWorkflowImage,
    category: "AI Automation & Workflows",
    problem: "Operations are plagued by manual processes, lack visibility, and react to problems instead of preventing them.",
    whoFor: "Operations leaders, manufacturing, logistics, and service businesses seeking operational excellence.",
    impact: "Reduce operational costs by 30%, prevent 80% of issues before they occur, and achieve real-time visibility.",
    techStack: ["Process Mining", "IoT Integration", "Python", "Docker", "Kubernetes", "Grafana"],
    keyFeatures: ["Process bottleneck detection", "Predictive maintenance alerts", "Resource optimization", "Compliance tracking"],
    deliverables: ["Operations control center", "Alert management system", "Process documentation", "Training for your team"],
    timeline: "8-14 weeks",
    uniqueValue: "We map your entire operation digitally, finding hidden inefficiencies that traditional methods miss.",
  },
  {
    id: "7",
    title: "AI-Native Websites",
    description: "Build modern, intelligent websites with integrated AI features, personalization, and dynamic content generation.",
    image: aiNativeWebImage,
    category: "AI-Powered Development",
    problem: "Traditional websites are static, provide generic experiences, and fail to engage visitors with relevant content.",
    whoFor: "Businesses seeking competitive digital presence with personalized user experiences and intelligent features.",
    impact: "Increase conversion rates by 35%, reduce bounce rates, and deliver personalized experiences at scale.",
    techStack: ["Next.js", "React", "OpenAI", "Tailwind CSS", "Vercel", "PostgreSQL"],
    keyFeatures: ["AI-powered search and recommendations", "Dynamic content personalization", "Smart chatbot integration", "Behavior-based content delivery"],
    deliverables: ["Fully responsive website", "Content management system", "Analytics integration", "SEO optimization"],
    timeline: "4-10 weeks",
    uniqueValue: "Every visitor sees a different version of your site, automatically tailored to their interests and behavior.",
  },
  {
    id: "8",
    title: "SaaS Platform Development",
    description: "Develop scalable SaaS products with AI capabilities built into the core architecture for competitive advantage.",
    image: saasDevImage,
    category: "AI-Powered Development",
    problem: "Building SaaS products is complex, expensive, and most lack the AI capabilities users now expect.",
    whoFor: "Startups, entrepreneurs, and enterprises launching new AI-powered software products.",
    impact: "Launch 3x faster, build with AI-first architecture, and create products users love and pay for.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "OpenAI", "AWS"],
    keyFeatures: ["Multi-tenant architecture", "Built-in billing and subscriptions", "User authentication and roles", "AI features from day one"],
    deliverables: ["Production-ready SaaS platform", "Admin panel", "User documentation", "Deployment pipeline"],
    timeline: "10-16 weeks",
    uniqueValue: "We build SaaS products that are AI-ready from the start, not retrofitted later - saving months of future development.",
  },
  {
    id: "9",
    title: "Enterprise Dashboard Systems",
    description: "Create intelligent dashboards with predictive analytics, automated insights, and real-time data visualization.",
    image: entDashImage,
    category: "AI-Powered Development",
    problem: "Executives lack real-time visibility, reports are delayed, and data is scattered across multiple systems.",
    whoFor: "Enterprise leaders, data teams, and organizations needing unified, intelligent business intelligence.",
    impact: "Real-time visibility across all operations, automated anomaly detection, and AI-generated insights.",
    techStack: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Machine Learning"],
    keyFeatures: ["Drag-and-drop dashboard builder", "Natural language data queries", "Automated insight generation", "Custom alert thresholds"],
    deliverables: ["Executive dashboard system", "Data connectors for your tools", "Mobile-friendly views", "User training"],
    timeline: "6-12 weeks",
    uniqueValue: "Ask questions in plain English like 'Why did sales drop last week?' and get instant, accurate answers.",
  },
  {
    id: "10",
    title: "AI Sales Agents",
    description: "Autonomous AI agents that qualify leads, handle objections, and close deals 24/7 with human-like conversations.",
    image: aiSalesAgentImage,
    category: "AI Agents & Chatbots",
    problem: "Sales teams can't respond 24/7, miss leads, and struggle to qualify prospects efficiently at scale.",
    whoFor: "High-volume sales organizations, e-commerce, and businesses with complex qualification processes.",
    impact: "24/7 lead engagement, 50% faster qualification, and 30% increase in qualified opportunities.",
    techStack: ["OpenAI", "LangChain", "Voice AI", "CRM Integration", "Python", "WebSockets"],
    keyFeatures: ["Voice and text conversations", "Objection handling training", "Calendar integration for bookings", "Lead scoring and handoff"],
    deliverables: ["Deployed AI sales agent", "CRM integration", "Conversation analytics", "Continuous improvement program"],
    timeline: "4-8 weeks",
    uniqueValue: "Our agents learn your sales playbook and handle objections exactly how your best salespeople would.",
  },
  {
    id: "11",
    title: "Customer Support Bots",
    description: "Intelligent support bots that resolve issues instantly, escalate when needed, and learn continuously from interactions.",
    image: customerSupportImage,
    category: "AI Agents & Chatbots",
    problem: "Support teams are overwhelmed, response times are slow, and customers expect instant, 24/7 assistance.",
    whoFor: "Customer-centric businesses, SaaS companies, and organizations with high support volumes.",
    impact: "Resolve 70% of queries instantly, reduce support costs by 50%, and improve customer satisfaction.",
    techStack: ["GPT-4", "RAG Systems", "Zendesk Integration", "Node.js", "Vector Databases", "React"],
    keyFeatures: ["Knowledge base integration", "Smart ticket routing", "Sentiment detection for priority cases", "Multi-language support"],
    deliverables: ["Support chatbot deployment", "Help center integration", "Escalation workflow", "Analytics dashboard"],
    timeline: "3-6 weeks",
    uniqueValue: "The bot reads your entire help documentation and learns from every past support ticket to give accurate answers.",
  },
  {
    id: "12",
    title: "Multi-Channel AI Assistants",
    description: "Deploy AI assistants across WhatsApp, web, email, and social platforms for seamless customer engagement.",
    image: multiChannelImage,
    category: "AI Agents & Chatbots",
    problem: "Customers expect consistent experiences across channels, but businesses struggle to maintain unified presence.",
    whoFor: "Omnichannel businesses, retail, hospitality, and customer-focused organizations.",
    impact: "Unified customer experience, 24/7 availability across all channels, and seamless conversation handoffs.",
    techStack: ["WhatsApp API", "Twilio", "OpenAI", "Meta APIs", "Node.js", "MongoDB"],
    keyFeatures: ["Single conversation history across channels", "Channel-specific formatting", "Human handoff with context", "Broadcast messaging"],
    deliverables: ["Multi-channel bot deployment", "Unified inbox dashboard", "Response templates", "Performance reports"],
    timeline: "5-9 weeks",
    uniqueValue: "Customers can start on WhatsApp, continue on web, and finish via email - without repeating themselves.",
  },
  {
    id: "13",
    title: "Real-time Analytics Dashboard",
    description: "Live data visualization and monitoring dashboards with automated alerts and actionable intelligence.",
    image: realtimeAnalyticsImage,
    category: "Data & Intelligence",
    problem: "Businesses operate on stale data, miss critical events, and lack the visibility to make timely decisions.",
    whoFor: "Operations teams, executives, and data-driven organizations needing real-time insights.",
    impact: "Real-time visibility, instant anomaly detection, and proactive alerts before issues escalate.",
    techStack: ["React", "WebSockets", "Grafana", "TimescaleDB", "Python", "Kafka"],
    keyFeatures: ["Sub-second data updates", "Custom alert rules", "Drill-down capabilities", "Mobile notifications"],
    deliverables: ["Live dashboard system", "Data pipeline setup", "Alert configuration", "Team training"],
    timeline: "4-8 weeks",
    uniqueValue: "See problems the moment they happen, not hours later when reports finally arrive.",
  },
  {
    id: "14",
    title: "Predictive Analytics Engine",
    description: "Machine learning models that forecast trends, identify opportunities, and optimize business outcomes.",
    image: predictiveAnalyticsImage,
    category: "Data & Intelligence",
    problem: "Businesses react to trends instead of anticipating them, missing opportunities and facing preventable risks.",
    whoFor: "Forward-thinking organizations, finance, retail, and businesses seeking competitive advantage.",
    impact: "Predict trends 3-6 months ahead, optimize inventory and resources, and prevent costly surprises.",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "PostgreSQL", "FastAPI"],
    keyFeatures: ["Demand forecasting", "Customer churn prediction", "Revenue forecasting", "Trend identification"],
    deliverables: ["Prediction models deployed", "Forecast dashboard", "API for integrations", "Model accuracy reports"],
    timeline: "6-12 weeks",
    uniqueValue: "Our models improve over time, learning from new data to make increasingly accurate predictions.",
  },
  {
    id: "15",
    title: "Data Integration Platform",
    description: "Connect and unify data sources for comprehensive business intelligence and seamless data flow.",
    image: dataIntegrationImage,
    category: "Data & Intelligence",
    problem: "Data is siloed across systems, manual exports waste time, and inconsistent data leads to poor decisions.",
    whoFor: "Enterprises with multiple systems, growing businesses, and organizations seeking single source of truth.",
    impact: "Unified data view, eliminate manual data work, and enable accurate cross-system analytics.",
    techStack: ["Apache Airflow", "dbt", "Snowflake", "Python", "REST APIs", "PostgreSQL"],
    keyFeatures: ["Pre-built connectors for 200+ tools", "Automated data quality checks", "Real-time sync options", "Data lineage tracking"],
    deliverables: ["Data warehouse setup", "ETL pipelines", "Data quality dashboard", "Documentation"],
    timeline: "6-10 weeks",
    uniqueValue: "We clean and standardize your data automatically, so you can trust every report you see.",
  },
  {
    id: "16",
    title: "WhatsApp CRM System",
    description: "AI-powered WhatsApp CRM for seamless customer communication, lead management, and automated follow-ups.",
    image: whatsappCrmImage,
    category: "Business & CRM Solutions",
    problem: "Businesses lose leads due to slow response times, fragmented conversations across multiple WhatsApp accounts, and inability to track customer interactions systematically.",
    whoFor: "SMBs, sales teams, customer service departments, and businesses that primarily communicate with customers via WhatsApp.",
    impact: "Reduce response time by 90%, increase lead conversion by 40%, and centralize all WhatsApp communications in one platform.",
    techStack: ["WhatsApp Business API", "Node.js", "MongoDB", "Redis", "React", "WebSockets"],
  },
  {
    id: "17",
    title: "Multi-Account WhatsApp CRM",
    description: "Manage multiple WhatsApp business accounts from a unified dashboard with AI-driven conversation routing.",
    image: multiAccountWhatsappImage,
    category: "Business & CRM Solutions",
    problem: "Organizations with multiple departments or branches struggle to manage separate WhatsApp accounts efficiently, leading to inconsistent customer experiences.",
    whoFor: "Multi-location businesses, franchises, agencies managing multiple clients, and enterprises with departmental WhatsApp needs.",
    impact: "Centralize all accounts in one dashboard, improve team collaboration, and ensure consistent messaging across all channels.",
    techStack: ["WhatsApp Cloud API", "React", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "18",
    title: "Sales & Inventory Management",
    description: "Complete sales and inventory tracking system with AI forecasting, stock alerts, and analytics.",
    image: salesInventoryImage,
    category: "Business & CRM Solutions",
    problem: "Businesses face stockouts, overstock situations, and struggle to track sales performance across channels, leading to lost revenue.",
    whoFor: "Retail businesses, wholesalers, distributors, and any product-based business needing inventory control.",
    impact: "Reduce stockouts by 85%, optimize inventory levels with AI predictions, and increase sales visibility by 100%.",
    techStack: ["React", "Node.js", "PostgreSQL", "Machine Learning", "REST APIs", "Chart.js"],
  },
  {
    id: "19",
    title: "POS Billing System",
    description: "Smart point-of-sale system for retail, restaurant, and pharmacy with AI-powered recommendations.",
    image: posBillingImage,
    category: "Business & CRM Solutions",
    problem: "Traditional POS systems are slow, lack insights, and don't provide intelligent upselling or customer behavior analytics.",
    whoFor: "Retail stores, restaurants, pharmacies, and any business needing fast, intelligent checkout solutions.",
    impact: "Speed up checkout by 50%, increase average order value with smart recommendations, and gain real-time sales insights.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Thermal Printers", "Barcode Integration"],
  },
  {
    id: "20",
    title: "HRMS - Human Resource Management",
    description: "Complete HR management system with AI-assisted recruitment, performance tracking, and workforce analytics.",
    image: hrmsImage,
    category: "Business & CRM Solutions",
    problem: "HR teams drown in paperwork, struggle with candidate screening, and lack data-driven insights for workforce planning.",
    whoFor: "Growing businesses, HR departments, and organizations looking to modernize their human resource operations.",
    impact: "Reduce hiring time by 60%, automate 80% of HR paperwork, and make data-driven workforce decisions.",
    techStack: ["React", "Node.js", "PostgreSQL", "OpenAI", "PDF Generation", "Email Integration"],
  },
  {
    id: "21",
    title: "Payroll Management System",
    description: "Automated payroll processing with tax calculations, compliance management, and employee self-service.",
    image: payrollImage,
    category: "Business & CRM Solutions",
    problem: "Manual payroll processing is error-prone, time-consuming, and keeping up with tax regulations is challenging.",
    whoFor: "SMBs, HR departments, accountants, and businesses seeking automated, compliant payroll solutions.",
    impact: "Eliminate payroll errors, ensure 100% tax compliance, and reduce processing time by 90%.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tax APIs", "PDF Generation", "Bank Integration"],
  },
  {
    id: "22",
    title: "Loan Management System",
    description: "End-to-end loan lifecycle management with AI credit scoring, payment tracking, and risk assessment.",
    image: loanImage,
    category: "Business & CRM Solutions",
    problem: "Lenders struggle with manual credit assessment, payment tracking, and managing loan portfolios efficiently.",
    whoFor: "NBFCs, microfinance institutions, banks, and any organization offering lending services.",
    impact: "Reduce credit default by 35% with AI scoring, automate collections, and streamline loan origination.",
    techStack: ["React", "Node.js", "PostgreSQL", "Machine Learning", "Payment Gateways", "SMS Integration"],
  },
  {
    id: "23",
    title: "Appointment Booking System",
    description: "Smart scheduling platform with AI-optimized time slots, reminders, and calendar integration.",
    image: appointmentImage,
    category: "Business & CRM Solutions",
    problem: "Businesses lose revenue from no-shows, scheduling conflicts, and the administrative burden of manual booking management.",
    whoFor: "Service businesses, consultants, healthcare providers, and any professional requiring appointment scheduling.",
    impact: "Reduce no-shows by 60% with AI reminders, optimize schedules, and automate booking management entirely.",
    techStack: ["React", "Node.js", "PostgreSQL", "Google Calendar API", "Twilio", "Email Integration"],
  },
  {
    id: "24",
    title: "Clinic & Hospital Management",
    description: "Complete healthcare management system with patient records, scheduling, billing, and AI diagnostics support.",
    image: clinicImage,
    category: "Business & CRM Solutions",
    problem: "Healthcare facilities struggle with patient record management, appointment chaos, and integrating billing with clinical workflows.",
    whoFor: "Clinics, hospitals, diagnostic centers, and healthcare providers of all sizes.",
    impact: "Reduce administrative time by 70%, improve patient experience, and ensure complete medical record digitization.",
    techStack: ["React", "Node.js", "PostgreSQL", "HIPAA Compliance", "HL7 FHIR", "Telemedicine Integration"],
  },
  {
    id: "25",
    title: "Gym Membership Management",
    description: "Fitness center management with member tracking, class scheduling, and AI-powered workout recommendations.",
    image: gymImage,
    category: "Business & CRM Solutions",
    problem: "Gyms struggle with member retention, manual attendance tracking, and providing personalized fitness experiences.",
    whoFor: "Gyms, fitness studios, yoga centers, and wellness facilities of all sizes.",
    impact: "Increase member retention by 40%, automate operations, and provide personalized fitness journeys.",
    techStack: ["React", "Node.js", "PostgreSQL", "QR Codes", "Payment Integration", "Fitness APIs"],
  },
  {
    id: "26",
    title: "Lawyer Case Management",
    description: "Legal practice management system with case tracking, document management, and AI-assisted legal research.",
    image: lawyerImage,
    category: "Business & CRM Solutions",
    problem: "Law firms struggle with case organization, document chaos, deadline management, and time-consuming legal research.",
    whoFor: "Law firms, independent lawyers, legal consultants, and corporate legal departments.",
    impact: "Organize all cases efficiently, never miss deadlines, and accelerate legal research with AI assistance.",
    techStack: ["React", "Node.js", "PostgreSQL", "Document Management", "OpenAI", "Calendar Integration"],
  },
  {
    id: "27",
    title: "Courier & Logistics Management",
    description: "Complete logistics solution with route optimization, real-time tracking, and AI delivery predictions.",
    image: courierImage,
    category: "Business & CRM Solutions",
    problem: "Courier companies face inefficient routing, lack of real-time visibility, and struggle with delivery time predictions.",
    whoFor: "Courier services, logistics companies, e-commerce businesses with delivery operations.",
    impact: "Reduce delivery costs by 30%, improve on-time delivery rates, and provide real-time tracking to customers.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Machine Learning", "Push Notifications"],
  },
  {
    id: "28",
    title: "Fleet Management System",
    description: "Vehicle fleet management with GPS tracking, maintenance scheduling, and fuel optimization using AI.",
    image: fleetImage,
    category: "Business & CRM Solutions",
    problem: "Fleet operators struggle with vehicle tracking, maintenance planning, fuel theft, and driver performance monitoring.",
    whoFor: "Transportation companies, delivery services, construction firms, and any business with vehicle fleets.",
    impact: "Reduce fuel costs by 25%, prevent breakdowns with predictive maintenance, and improve driver efficiency.",
    techStack: ["React", "Node.js", "PostgreSQL", "GPS Integration", "IoT Sensors", "Machine Learning"],
  },
  {
    id: "29",
    title: "Property & Tenant Management",
    description: "Real estate property management with tenant portals, rent collection, and maintenance tracking.",
    image: propertyImage,
    category: "Business & CRM Solutions",
    problem: "Property managers juggle multiple spreadsheets, chase rent payments, and struggle with maintenance request tracking.",
    whoFor: "Property managers, landlords, real estate companies, and housing societies.",
    impact: "Automate rent collection, streamline maintenance requests, and provide self-service portals for tenants.",
    techStack: ["React", "Node.js", "PostgreSQL", "Payment Gateways", "Email/SMS", "Document Storage"],
  },
  {
    id: "30",
    title: "Garage & Car Wash Management",
    description: "Automotive service management with appointment booking, job tracking, and customer management.",
    image: garageImage,
    category: "Business & CRM Solutions",
    problem: "Auto service centers struggle with appointment management, job tracking, spare parts inventory, and customer follow-ups.",
    whoFor: "Auto repair shops, car wash centers, service stations, and automotive service providers.",
    impact: "Streamline operations, improve customer retention with automated follow-ups, and track all jobs efficiently.",
    techStack: ["React", "Node.js", "PostgreSQL", "Appointment System", "Inventory Management", "SMS Integration"],
  },
  {
    id: "31",
    title: "Salon, Spa & Personal Care",
    description: "Beauty business management with appointment booking, staff scheduling, and customer loyalty programs.",
    image: salonSpaImage,
    category: "Business & CRM Solutions",
    problem: "Beauty businesses struggle with appointment scheduling, staff management, and building customer loyalty programs.",
    whoFor: "Salons, spas, beauty parlors, and personal care service providers.",
    impact: "Maximize bookings, reduce no-shows, and increase repeat customers with loyalty programs.",
    techStack: ["React", "Node.js", "PostgreSQL", "Calendar Integration", "Payment Systems", "Loyalty Programs"],
  },
  {
    id: "32",
    title: "Laundry Shop Management",
    description: "Laundry and dry cleaning management with order tracking, pricing, and customer notifications.",
    image: laundryImage,
    category: "Business & CRM Solutions",
    problem: "Laundry businesses struggle with order tracking, pricing complexity, and keeping customers informed about order status.",
    whoFor: "Laundromats, dry cleaners, and laundry service providers.",
    impact: "Streamline order processing, automate customer notifications, and improve operational efficiency.",
    techStack: ["React", "Node.js", "PostgreSQL", "SMS/WhatsApp", "Barcode System", "Payment Integration"],
  },
  {
    id: "33",
    title: "Restaurant & Table Booking",
    description: "Restaurant management with table reservations, menu management, kitchen display, and POS integration.",
    image: restaurantImage,
    category: "Business & CRM Solutions",
    problem: "Restaurants lose customers to poor reservation management, kitchen delays, and disconnected ordering systems.",
    whoFor: "Restaurants, cafes, bars, and food service establishments.",
    impact: "Optimize table utilization, speed up kitchen operations, and enhance dining experience with seamless ordering.",
    techStack: ["React", "Node.js", "PostgreSQL", "Kitchen Display", "POS Integration", "Reservation System"],
  },
  {
    id: "34",
    title: "Single Vendor E-Commerce",
    description: "Complete e-commerce website with product catalog, cart, checkout, and AI-powered product recommendations.",
    image: singleVendorImage,
    category: "Marketplace & E-Commerce",
    problem: "Businesses struggle to establish online presence with functional e-commerce that competes with marketplace giants.",
    whoFor: "Retailers, D2C brands, manufacturers, and businesses wanting their own online store.",
    impact: "Launch online store quickly, increase sales with AI recommendations, and own your customer relationships.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "OpenAI", "CDN"],
  },
  {
    id: "35",
    title: "Multi-Vendor Marketplace",
    description: "Amazon-style marketplace with multiple sellers, vendor management, commissions, and AI fraud detection.",
    image: multiVendorImage,
    category: "Marketplace & E-Commerce",
    problem: "Building a marketplace is complex, requiring vendor onboarding, commission management, and fraud prevention.",
    whoFor: "Entrepreneurs, businesses creating industry-specific marketplaces, and platforms connecting buyers with sellers.",
    impact: "Launch a scalable marketplace, automate vendor management, and ensure platform safety with AI fraud detection.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe Connect", "Machine Learning", "Elasticsearch"],
  },
  {
    id: "36",
    title: "Classifieds Marketplace",
    description: "OLX-style classifieds platform for buying and selling with location-based listings and chat features.",
    image: classifiedsImage,
    category: "Marketplace & E-Commerce",
    problem: "Creating a classifieds platform requires location services, user verification, and secure communication between buyers and sellers.",
    whoFor: "Entrepreneurs targeting local markets, community platforms, and niche classifieds verticals.",
    impact: "Connect local buyers and sellers, enable secure transactions, and build community-driven marketplaces.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Google Maps", "Real-time Chat", "Image Processing"],
  },
  {
    id: "37",
    title: "Grocery E-Commerce Platform",
    description: "Online grocery store with inventory management, delivery scheduling, and AI-powered recommendations.",
    image: groceryImage,
    category: "Marketplace & E-Commerce",
    problem: "Grocery businesses need real-time inventory updates, efficient delivery scheduling, and fresh product management.",
    whoFor: "Grocery stores, supermarkets, organic food retailers, and fresh produce businesses going online.",
    impact: "Capture online grocery market, optimize delivery routes, and reduce food waste with AI inventory management.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Google Maps", "Inventory Management", "Push Notifications"],
  },
  {
    id: "38",
    title: "Pharmacy E-Commerce Platform",
    description: "Online pharmacy with prescription management, medicine search, and automated refill reminders.",
    image: pharmacyImage,
    category: "Marketplace & E-Commerce",
    problem: "Pharmacies need secure prescription handling, medicine database management, and regulatory compliance for online sales.",
    whoFor: "Pharmacies, drugstores, and healthcare retailers expanding to online channels.",
    impact: "Enable online medicine ordering, ensure prescription compliance, and improve customer retention with refill reminders.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Medicine Database", "Prescription Verification", "HIPAA Compliance"],
  },
  {
    id: "39",
    title: "On-Demand Services Marketplace",
    description: "UrbanClap-style platform for home services with provider matching, booking, and ratings.",
    image: onDemandImage,
    category: "Marketplace & E-Commerce",
    problem: "Connecting service providers with customers requires sophisticated matching, scheduling, and quality assurance systems.",
    whoFor: "Entrepreneurs in home services, beauty services, and any on-demand service vertical.",
    impact: "Create a trusted services marketplace, automate booking and payments, and ensure quality through ratings.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Google Maps", "Payment Integration", "Push Notifications"],
  },
  {
    id: "40",
    title: "Car Rental & Mobility Platform",
    description: "Vehicle rental platform with fleet management, booking system, and AI-powered pricing optimization.",
    image: carRentalImage,
    category: "Marketplace & E-Commerce",
    problem: "Car rental businesses struggle with fleet utilization, dynamic pricing, and seamless booking experiences.",
    whoFor: "Car rental companies, bike rental services, and mobility startups.",
    impact: "Maximize fleet utilization, optimize pricing with AI, and provide frictionless rental experiences.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Google Maps", "Payment Gateways", "Machine Learning"],
  },
  {
    id: "41",
    title: "Hotel Booking Platform",
    description: "Hospitality booking platform with room management, reservations, and dynamic pricing algorithms.",
    image: hotelImage,
    category: "Marketplace & E-Commerce",
    problem: "Hotels need sophisticated booking systems, inventory management across channels, and competitive pricing strategies.",
    whoFor: "Hotels, resorts, vacation rentals, and hospitality chains.",
    impact: "Increase direct bookings, optimize room pricing, and provide seamless guest booking experiences.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Channel Manager", "Payment Integration", "Machine Learning"],
  },
  {
    id: "42",
    title: "Bus, Travel & Tour Booking",
    description: "Travel booking portal with bus tickets, tour packages, and AI-powered trip recommendations.",
    image: travelImage,
    category: "Marketplace & E-Commerce",
    problem: "Travel businesses need multi-modal booking, tour package management, and personalized travel recommendations.",
    whoFor: "Travel agencies, bus operators, tour companies, and travel startups.",
    impact: "Centralize all travel bookings, create dynamic tour packages, and increase sales with AI recommendations.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "GDS Integration", "Payment Gateways", "Maps API"],
  },
  {
    id: "43",
    title: "Real Estate Marketplace",
    description: "Property listing platform with virtual tours, lead management, and AI property valuation.",
    image: realEstateImage,
    category: "Marketplace & E-Commerce",
    problem: "Real estate platforms need rich property listings, lead management, and accurate property valuations.",
    whoFor: "Real estate agencies, property developers, and proptech startups.",
    impact: "Showcase properties with virtual tours, capture and nurture leads, and provide AI-powered valuations.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Virtual Tour SDK", "Machine Learning", "Maps Integration"],
  },
  {
    id: "44",
    title: "Job Portal & Recruitment",
    description: "Complete job board with resume parsing, candidate matching, and AI-powered job recommendations.",
    image: jobPortalImage,
    category: "Marketplace & E-Commerce",
    problem: "Job platforms need intelligent matching between candidates and jobs, resume parsing, and application tracking.",
    whoFor: "Recruitment agencies, HR tech startups, and niche job board operators.",
    impact: "Match candidates with AI, automate resume screening, and streamline the recruitment process.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Resume Parsing", "Email Integration"],
  },
  {
    id: "45",
    title: "Freelancer Marketplace",
    description: "Fiverr-style platform for freelance services with gig management, escrow payments, and reviews.",
    image: freelancerImage,
    category: "Marketplace & E-Commerce",
    problem: "Freelance marketplaces need secure payments, milestone management, and trust-building through reviews.",
    whoFor: "Entrepreneurs building gig economy platforms, industry-specific freelance marketplaces.",
    impact: "Enable secure freelancer-client transactions, manage project milestones, and build platform trust.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe Connect", "Escrow System", "Real-time Chat"],
  },
  {
    id: "46",
    title: "Digital Products Marketplace",
    description: "Platform for selling digital products like ebooks, templates, and software with instant delivery.",
    image: digitalProductsImage,
    category: "Marketplace & E-Commerce",
    problem: "Selling digital products requires secure delivery, license management, and protection against piracy.",
    whoFor: "Digital content creators, software developers, and businesses selling downloadable products.",
    impact: "Sell digital products securely, automate delivery, and protect intellectual property.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "CDN", "License Management"],
  },
  {
    id: "47",
    title: "Crowdfunding Platform",
    description: "Fundraising platform for projects and startups with campaign management and backer rewards.",
    image: crowdfundingImage,
    category: "Marketplace & E-Commerce",
    problem: "Launching a crowdfunding platform requires campaign management, payment handling, and reward fulfillment systems.",
    whoFor: "Entrepreneurs in crowdfunding space, cause-based funding platforms, and startup ecosystems.",
    impact: "Enable project funding, manage campaigns effectively, and automate backer reward fulfillment.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Campaign Analytics", "Email Automation"],
  },
  {
    id: "48",
    title: "OTT Streaming Platform",
    description: "Video streaming service with content management, subscriptions, and AI content recommendations.",
    image: ottImage,
    category: "Marketplace & E-Commerce",
    problem: "Building a streaming platform requires video infrastructure, content protection, and personalized recommendations.",
    whoFor: "Media companies, content creators, and entrepreneurs in the streaming space.",
    impact: "Deliver high-quality streaming, protect content with DRM, and increase engagement with AI recommendations.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Video CDN", "DRM", "Machine Learning"],
  },
  {
    id: "49",
    title: "Automobile Listing Marketplace",
    description: "Vehicle marketplace for buying and selling cars with listings, dealer management, and financing options.",
    image: automobileImage,
    category: "Marketplace & E-Commerce",
    problem: "Auto marketplaces need detailed vehicle listings, dealer management, and financing integration.",
    whoFor: "Auto dealers, car selling platforms, and automotive industry entrepreneurs.",
    impact: "Create comprehensive vehicle marketplace, connect buyers with financing, and streamline auto transactions.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Vehicle APIs", "Financing Integration", "Image Gallery"],
  },
  {
    id: "50",
    title: "Learning Management System (LMS)",
    description: "Complete e-learning platform with course creation, student progress tracking, and AI tutoring.",
    image: lmsImage,
    category: "Education & Learning",
    problem: "Educational institutions struggle with digital course delivery, student engagement tracking, and personalized learning.",
    whoFor: "Schools, universities, corporate training departments, and edtech startups.",
    impact: "Digitize education, track student progress, and provide personalized learning paths with AI.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Video Streaming", "OpenAI", "Analytics"],
  },
  {
    id: "51",
    title: "School & College Management",
    description: "Educational institution management with student info, attendance, grades, and parent portals.",
    image: schoolImage,
    category: "Education & Learning",
    problem: "Educational institutions drown in administrative work, paper-based records, and poor parent communication.",
    whoFor: "Schools, colleges, educational institutes, and university administrators.",
    impact: "Digitize all records, automate administrative tasks, and improve parent-school communication.",
    techStack: ["React", "Node.js", "PostgreSQL", "Mobile App", "SMS/Email", "Report Generation"],
  },
  {
    id: "52",
    title: "Coaching Institute Management",
    description: "Coaching center software with batch management, fee collection, and performance analytics.",
    image: coachingImage,
    category: "Education & Learning",
    problem: "Coaching institutes struggle with batch scheduling, fee tracking, and providing performance insights to students and parents.",
    whoFor: "Coaching centers, tutoring institutes, and test prep academies.",
    impact: "Streamline batch operations, automate fee collection, and provide data-driven performance insights.",
    techStack: ["React", "Node.js", "PostgreSQL", "Payment Integration", "Analytics Dashboard", "Mobile App"],
  },
  {
    id: "53",
    title: "Online Examination Platform",
    description: "Assessment platform with AI proctoring, question banks, and automated grading.",
    image: examImage,
    category: "Education & Learning",
    problem: "Online examinations require secure proctoring, diverse question types, and efficient grading at scale.",
    whoFor: "Educational institutions, certification bodies, and corporate training departments.",
    impact: "Conduct secure online exams, automate grading, and prevent cheating with AI proctoring.",
    techStack: ["React", "Node.js", "PostgreSQL", "WebRTC", "AI Proctoring", "Auto-grading"],
  },
  {
    id: "54",
    title: "Course Selling Platform",
    description: "Digital education marketplace for selling courses with video hosting and student management.",
    image: courseImage,
    category: "Education & Learning",
    problem: "Course creators need platforms to host, sell, and manage courses without technical complexity.",
    whoFor: "Course creators, trainers, coaches, and knowledge entrepreneurs.",
    impact: "Launch and sell courses easily, manage students, and scale educational business.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Video Hosting", "Stripe", "Drip Content"],
  },
  {
    id: "55",
    title: "Library Management System",
    description: "Digital library system with catalog management, borrowing, returns, and fine tracking.",
    image: libraryImage,
    category: "Education & Learning",
    problem: "Libraries struggle with catalog organization, tracking borrowed books, and managing overdue fines.",
    whoFor: "Libraries, educational institutions, and organizations with book lending needs.",
    impact: "Digitize library operations, automate borrowing process, and track all library assets.",
    techStack: ["React", "Node.js", "PostgreSQL", "Barcode/RFID", "Email Notifications", "Reporting"],
  },
  {
    id: "56",
    title: "Email & SMS Campaign SaaS",
    description: "Marketing automation platform for email and SMS campaigns with AI-powered personalization.",
    image: emailCampaignImage,
    category: "SaaS Product Development",
    problem: "Marketers need unified platforms for email and SMS campaigns with personalization and analytics.",
    whoFor: "Marketing teams, agencies, and businesses running multi-channel campaigns.",
    impact: "Unify all campaign channels, personalize messages with AI, and track performance comprehensively.",
    techStack: ["React", "Node.js", "PostgreSQL", "SendGrid", "Twilio", "Machine Learning"],
  },
  {
    id: "57",
    title: "WhatsApp Marketing SaaS",
    description: "Bulk WhatsApp messaging platform with templates, scheduling, and engagement analytics.",
    image: whatsappMarketingImage,
    category: "SaaS Product Development",
    problem: "Businesses need compliant WhatsApp marketing with templates, scheduling, and performance tracking.",
    whoFor: "Marketers, agencies, and businesses leveraging WhatsApp for customer engagement.",
    impact: "Scale WhatsApp marketing, ensure compliance, and track engagement with detailed analytics.",
    techStack: ["React", "Node.js", "PostgreSQL", "WhatsApp Business API", "Template Management", "Analytics"],
  },
  {
    id: "58",
    title: "CRM & Customer Engagement SaaS",
    description: "Customer relationship management with sales pipeline, contact management, and AI insights.",
    image: crmEngagementImage,
    category: "SaaS Product Development",
    problem: "Businesses lose deals due to poor pipeline visibility, scattered contact data, and lack of follow-up automation.",
    whoFor: "Sales teams, SMBs, and growing businesses needing organized customer management.",
    impact: "Never lose a deal, automate follow-ups, and gain AI-powered insights into customer behavior.",
    techStack: ["React", "Node.js", "PostgreSQL", "Email Integration", "OpenAI", "Pipeline Management"],
  },
  {
    id: "59",
    title: "Project & Task Management SaaS",
    description: "Team collaboration platform with task boards, time tracking, and AI productivity insights.",
    image: projectTaskImage,
    category: "SaaS Product Development",
    problem: "Teams struggle with task visibility, deadline management, and understanding where time is spent.",
    whoFor: "Project managers, teams, agencies, and businesses seeking organized project delivery.",
    impact: "Improve team visibility, meet deadlines consistently, and gain insights into productivity.",
    techStack: ["React", "Node.js", "PostgreSQL", "Real-time Updates", "Time Tracking", "Analytics"],
  },
  {
    id: "60",
    title: "Invoice & Billing SaaS",
    description: "Billing and invoicing platform with recurring payments, subscription management, and reporting.",
    image: invoiceBillingImage,
    category: "SaaS Product Development",
    problem: "Businesses struggle with invoice creation, payment tracking, and managing recurring subscriptions.",
    whoFor: "Freelancers, SMBs, and subscription-based businesses needing professional billing.",
    impact: "Automate invoicing, manage subscriptions, and get paid faster with payment reminders.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "PDF Generation", "Payment Reminders"],
  },
  {
    id: "61",
    title: "Ticketing & Helpdesk SaaS",
    description: "Customer support platform with ticket management, knowledge base, and AI-powered responses.",
    image: ticketingImage,
    category: "SaaS Product Development",
    problem: "Support teams are overwhelmed with tickets, lack organized knowledge bases, and need faster response capabilities.",
    whoFor: "Customer support teams, SaaS companies, and businesses with high support volumes.",
    impact: "Organize support tickets, deflect queries with knowledge base, and respond faster with AI assistance.",
    techStack: ["React", "Node.js", "PostgreSQL", "OpenAI", "Knowledge Base", "Email Integration"],
  },
  {
    id: "62",
    title: "AI Chatbot Automation SaaS",
    description: "Chatbot builder platform with workflow automation, integrations, and conversation analytics.",
    image: aiChatbotImage,
    category: "SaaS Product Development",
    problem: "Businesses need chatbots but lack technical expertise to build, deploy, and maintain them.",
    whoFor: "Businesses wanting chatbots, agencies, and entrepreneurs building chatbot solutions.",
    impact: "Build chatbots without code, automate conversations, and integrate with existing systems.",
    techStack: ["React", "Node.js", "PostgreSQL", "OpenAI", "Flow Builder", "Integrations API"],
  },
  {
    id: "63",
    title: "News & Magazine Portal",
    description: "Media publishing platform with article management, categories, and reader engagement features.",
    image: newsMediaImage,
    category: "Portal & CMS Solutions",
    problem: "Media organizations need fast publishing, content organization, and reader engagement capabilities.",
    whoFor: "News outlets, magazines, bloggers, and media companies.",
    impact: "Publish content quickly, organize effectively, and increase reader engagement and retention.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Rich Text Editor", "SEO Optimization", "Analytics"],
  },
  {
    id: "64",
    title: "Blogging & Portfolio Platform",
    description: "Personal branding platform for writers and creators with customizable themes and SEO tools.",
    image: bloggingImage,
    category: "Portal & CMS Solutions",
    problem: "Creators need professional online presence with blogging, portfolio showcase, and SEO optimization.",
    whoFor: "Writers, designers, developers, and creative professionals building personal brands.",
    impact: "Establish professional presence, showcase work beautifully, and attract opportunities with SEO.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Markdown", "Theme System", "SEO Tools"],
  },
  {
    id: "65",
    title: "Corporate Website & CMS",
    description: "Professional business website builder with content management and lead capture forms.",
    image: corporateCmsImage,
    category: "Portal & CMS Solutions",
    problem: "Businesses need professional websites they can manage without technical dependencies.",
    whoFor: "Corporations, SMBs, and businesses needing professional web presence.",
    impact: "Launch professional website, manage content easily, and capture leads effectively.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Page Builder", "Form Builder", "Analytics"],
  },
  {
    id: "66",
    title: "NGO & Non-Profit Portal",
    description: "Organization management for charities with donation tracking, volunteer management, and campaigns.",
    image: ngoImage,
    category: "Portal & CMS Solutions",
    problem: "Non-profits struggle with donor management, volunteer coordination, and campaign organization.",
    whoFor: "NGOs, charities, foundations, and non-profit organizations.",
    impact: "Manage donors effectively, coordinate volunteers, and run successful fundraising campaigns.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Payment Integration", "Volunteer Portal", "Campaign Tools"],
  },
  {
    id: "67",
    title: "Multipurpose CMS Platform",
    description: "Flexible content management system with drag-and-drop builder and multi-site support.",
    image: multipurposeCmsImage,
    category: "Portal & CMS Solutions",
    problem: "Businesses need flexible CMS that can power different types of websites without rebuilding.",
    whoFor: "Agencies, businesses with multiple sites, and organizations needing flexible content management.",
    impact: "Build any website type, manage multiple sites, and update content without developers.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Page Builder", "Multi-tenancy", "API-first"],
  },
  {
    id: "68",
    title: "Religious Organization Website",
    description: "Community platform for churches, temples, and trusts with event calendars and member portals.",
    image: religiousImage,
    category: "Portal & CMS Solutions",
    problem: "Religious organizations need community platforms for events, donations, and member engagement.",
    whoFor: "Churches, temples, mosques, and religious community organizations.",
    impact: "Engage community, manage events, and facilitate donations with purpose-built platform.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Event Management", "Donation System", "Member Portal"],
  },
  {
    id: "69",
    title: "Event Management Portal",
    description: "Event planning platform with registration, ticketing, and attendee management.",
    image: eventManagementImage,
    category: "Portal & CMS Solutions",
    problem: "Event organizers struggle with registration, ticketing, and managing attendee experiences.",
    whoFor: "Event organizers, conferences, workshops, and businesses hosting events.",
    impact: "Streamline event registration, sell tickets, and manage attendees seamlessly.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "QR Check-in", "Email Marketing"],
  },
  {
    id: "70",
    title: "Community & Membership Portal",
    description: "Member community platform with forums, subscriptions, and exclusive content areas.",
    image: communityImage,
    category: "Portal & CMS Solutions",
    problem: "Communities need platforms for member interaction, exclusive content, and subscription management.",
    whoFor: "Community builders, membership organizations, and creators with premium content.",
    impact: "Build engaged communities, manage memberships, and monetize exclusive content.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Forum System", "Stripe Subscriptions", "Content Gating"],
  },
  {
    id: "71",
    title: "Video Hosting Platform",
    description: "Video streaming platform with content management, playlists, and monetization options.",
    image: videoHostingImage,
    category: "Creative & Media Platforms",
    problem: "Video creators need platforms to host, organize, and monetize video content effectively.",
    whoFor: "Video creators, media companies, and businesses with video content strategies.",
    impact: "Host videos securely, organize with playlists, and monetize through subscriptions or ads.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Video CDN", "Transcoding", "Analytics"],
  },
  {
    id: "72",
    title: "Music Streaming Platform",
    description: "Audio streaming service with playlists, artist profiles, and AI music recommendations.",
    image: musicImage,
    category: "Creative & Media Platforms",
    problem: "Music platforms need high-quality streaming, discovery features, and artist management capabilities.",
    whoFor: "Music labels, independent artists, and entrepreneurs in the music streaming space.",
    impact: "Deliver quality audio streaming, help users discover music, and support artist growth.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Audio CDN", "Machine Learning", "Artist Dashboard"],
  },
  {
    id: "73",
    title: "Photography Portfolio Platform",
    description: "Visual portfolio website for photographers with galleries, client proofing, and sales.",
    image: photographyImage,
    category: "Creative & Media Platforms",
    problem: "Photographers need professional portfolios with high-quality image display and client interaction features.",
    whoFor: "Photographers, visual artists, and creative professionals showcasing visual work.",
    impact: "Showcase work beautifully, streamline client proofing, and sell prints directly.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Image CDN", "Lightbox Gallery", "E-commerce"],
  },
  {
    id: "74",
    title: "Wedding & Event Showcase",
    description: "Wedding planning website with vendor directories, galleries, and RSVP management.",
    image: weddingImage,
    category: "Creative & Media Platforms",
    problem: "Couples need wedding websites for sharing info, collecting RSVPs, and showcasing memories.",
    whoFor: "Couples, wedding planners, and event organizers needing event showcase websites.",
    impact: "Create beautiful event websites, manage RSVPs, and share memories with loved ones.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Gallery System", "RSVP Management", "Guest Messaging"],
  },
  {
    id: "75",
    title: "Creative Agency Website",
    description: "Portfolio website for design agencies with case studies, team profiles, and contact forms.",
    image: creativeAgencyImage,
    category: "Creative & Media Platforms",
    problem: "Creative agencies need impressive portfolios that showcase work and generate leads effectively.",
    whoFor: "Design agencies, marketing agencies, and creative studios.",
    impact: "Impress potential clients, showcase case studies, and generate quality leads.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Portfolio System", "Case Studies", "Lead Capture"],
  },
  {
    id: "76",
    title: "Artist & Talent Booking Platform",
    description: "Booking platform for artists and performers with profiles, availability, and event management.",
    image: talentImage,
    category: "Creative & Media Platforms",
    problem: "Booking talent is fragmented, requiring negotiations, availability checks, and contract management.",
    whoFor: "Event organizers, talent agencies, and venues booking performers.",
    impact: "Streamline talent booking, manage availability, and handle bookings professionally.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Calendar System", "Payment Processing", "Contract Management"],
  },
  {
    id: "77",
    title: "Healthcare Booking Portal",
    description: "Doctor appointment platform with clinic finder, scheduling, and telemedicine integration.",
    image: healthcareBookingImage,
    category: "Booking & Service Platforms",
    problem: "Patients struggle to find doctors, book appointments, and access healthcare conveniently.",
    whoFor: "Healthcare providers, clinics, and healthtech platforms.",
    impact: "Enable easy doctor discovery, streamline bookings, and provide telemedicine access.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Google Maps", "Video Call", "HIPAA Compliance"],
  },
  {
    id: "78",
    title: "Beauty Service Booking Platform",
    description: "Salon and spa booking with service catalog, stylist selection, and online payments.",
    image: beautyBookingImage,
    category: "Booking & Service Platforms",
    problem: "Beauty service providers need efficient booking, stylist management, and payment collection.",
    whoFor: "Salons, spas, beauty service providers, and beauty marketplace platforms.",
    impact: "Maximize bookings, enable stylist preferences, and collect payments seamlessly.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Calendar System", "Payment Integration", "Reviews"],
  },
  {
    id: "79",
    title: "Home Services Booking Platform",
    description: "On-demand home services platform for plumbers, electricians, and cleaning services.",
    image: homeServicesImage,
    category: "Booking & Service Platforms",
    problem: "Finding and booking reliable home service providers is frustrating and unorganized.",
    whoFor: "Home service aggregators, service provider networks, and local service marketplaces.",
    impact: "Connect customers with verified providers, enable easy booking, and ensure quality service.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Google Maps", "Payment Processing", "Rating System"],
  },
  {
    id: "80",
    title: "Vehicle Service Booking",
    description: "Auto service booking platform for car repairs, maintenance, and roadside assistance.",
    image: vehicleServiceImage,
    category: "Booking & Service Platforms",
    problem: "Vehicle owners struggle to find reliable service centers and book maintenance conveniently.",
    whoFor: "Auto service networks, car dealers, and automotive service platforms.",
    impact: "Enable easy service booking, provide service history, and improve customer retention.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Location Services", "Service History", "Push Notifications"],
  },
  {
    id: "81",
    title: "Fitness & Wellness Booking",
    description: "Fitness trainer and wellness booking with class schedules and personal training sessions.",
    image: fitnessBookingImage,
    category: "Booking & Service Platforms",
    problem: "Fitness enthusiasts struggle to find trainers, book classes, and manage their wellness journey.",
    whoFor: "Fitness platforms, gyms, yoga studios, and wellness service providers.",
    impact: "Connect users with fitness services, enable easy booking, and track wellness progress.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Calendar System", "Video Integration", "Progress Tracking"],
  },
  {
    id: "82",
    title: "Tutor Booking Platform",
    description: "Online tutoring marketplace with subject experts, session scheduling, and video lessons.",
    image: tutorBookingImage,
    category: "Booking & Service Platforms",
    problem: "Students struggle to find qualified tutors, schedule sessions, and learn effectively online.",
    whoFor: "Tutoring platforms, educational marketplaces, and private tutors.",
    impact: "Connect students with tutors, enable seamless scheduling, and facilitate quality learning.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Video Conferencing", "Payment Processing", "Rating System"],
  },
  {
    id: "83",
    title: "Accounting & GST Software",
    description: "Financial management software with tax calculations, compliance, and automated reporting.",
    image: accountingImage,
    category: "Finance & Business Tools",
    problem: "Businesses struggle with accounting, tax compliance, and generating accurate financial reports.",
    whoFor: "SMBs, accountants, and businesses needing compliant financial management.",
    impact: "Automate accounting, ensure tax compliance, and generate accurate financial reports.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tax APIs", "Report Generation", "Bank Integration"],
  },
  {
    id: "84",
    title: "Inventory & Stock Control",
    description: "Warehouse management system with stock tracking, reorder alerts, and multi-location support.",
    image: inventoryImage,
    category: "Finance & Business Tools",
    problem: "Businesses face stockouts, excess inventory, and lack visibility across multiple locations.",
    whoFor: "Retailers, wholesalers, manufacturers, and businesses with inventory needs.",
    impact: "Optimize inventory levels, prevent stockouts, and gain visibility across all locations.",
    techStack: ["React", "Node.js", "PostgreSQL", "Barcode Integration", "Analytics", "Forecasting"],
  },
  {
    id: "85",
    title: "Vendor & Supplier Management",
    description: "Procurement management with supplier database, purchase orders, and payment tracking.",
    image: vendorImage,
    category: "Finance & Business Tools",
    problem: "Managing vendors, purchase orders, and payments across suppliers is chaotic and error-prone.",
    whoFor: "Procurement teams, businesses with multiple vendors, and supply chain managers.",
    impact: "Organize vendor relationships, streamline purchasing, and track payments effectively.",
    techStack: ["React", "Node.js", "PostgreSQL", "Document Management", "Payment Tracking", "Analytics"],
  },
  {
    id: "86",
    title: "Asset Management Software",
    description: "Business asset tracking with depreciation, maintenance schedules, and lifecycle management.",
    image: assetImage,
    category: "Finance & Business Tools",
    problem: "Businesses lose track of assets, miss maintenance schedules, and struggle with depreciation calculations.",
    whoFor: "Facility managers, IT departments, and businesses with significant asset portfolios.",
    impact: "Track all assets, automate depreciation, and ensure timely maintenance.",
    techStack: ["React", "Node.js", "PostgreSQL", "QR/Barcode", "Maintenance Scheduling", "Financial Reporting"],
  },
  {
    id: "87",
    title: "Payment Gateway Integration",
    description: "Secure payment processing with multiple gateways, digital wallets, and transaction management.",
    image: paymentGatewayImage,
    category: "Finance & Business Tools",
    problem: "Integrating multiple payment methods securely while managing transactions is complex.",
    whoFor: "E-commerce businesses, SaaS platforms, and applications needing payment processing.",
    impact: "Accept all payment methods, ensure security, and manage transactions effectively.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Razorpay", "PayPal", "PCI Compliance"],
  },
  {
    id: "88",
    title: "Subscription Billing Management",
    description: "Recurring billing platform with subscription plans, dunning management, and revenue analytics.",
    image: subscriptionImage,
    category: "Finance & Business Tools",
    problem: "Subscription businesses struggle with billing, failed payment recovery, and revenue tracking.",
    whoFor: "SaaS companies, membership businesses, and any subscription-based model.",
    impact: "Automate billing, recover failed payments, and gain insights into subscription revenue.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe Billing", "Dunning System", "Revenue Analytics"],
  },
  {
    id: "89",
    title: "Utility Recharge Platform",
    description: "Prepaid services platform for mobile recharge, bill payments, and utility services.",
    image: utilityRechargeImage,
    category: "Finance & Business Tools",
    problem: "Users need convenient platforms for recharges and bill payments across multiple services.",
    whoFor: "Fintech platforms, mobile apps, and businesses offering recharge services.",
    impact: "Offer convenient recharge services, earn commissions, and serve customer needs.",
    techStack: ["React", "Node.js", "PostgreSQL", "Recharge APIs", "Payment Integration", "Commission Management"],
  },
  {
    id: "90",
    title: "Wealth Management Portal",
    description: "Investment advisory platform with portfolio management, market analytics, and financial planning.",
    image: wealthImage,
    category: "Finance & Business Tools",
    problem: "Wealth managers need digital platforms for client portfolios, analytics, and financial planning.",
    whoFor: "Wealth managers, financial advisors, and investment platforms.",
    impact: "Manage client portfolios digitally, provide insights, and streamline financial planning.",
    techStack: ["React", "Node.js", "PostgreSQL", "Market Data APIs", "Portfolio Analytics", "Client Portal"],
  },
  {
    id: "91",
    title: "Insurance CRM & Policy Management",
    description: "Insurance agent CRM with policy tracking, claims management, and commission calculations.",
    image: insuranceImage,
    category: "Finance & Business Tools",
    problem: "Insurance agents struggle with policy tracking, renewal reminders, and commission management.",
    whoFor: "Insurance agents, brokers, and insurance distribution companies.",
    impact: "Track all policies, automate renewals, and calculate commissions accurately.",
    techStack: ["React", "Node.js", "PostgreSQL", "Policy Management", "Commission Calculator", "Client Portal"],
  },
  {
    id: "92",
    title: "Website Firewall & Anti-Spam",
    description: "Security system with threat protection, DDoS mitigation, and real-time monitoring.",
    image: firewallImage,
    category: "Security & Utility Systems",
    problem: "Websites are vulnerable to attacks, spam, and security threats without proper protection.",
    whoFor: "Website owners, businesses, and organizations needing web security.",
    impact: "Protect against attacks, block spam, and monitor security in real-time.",
    techStack: ["Node.js", "Redis", "Machine Learning", "CDN", "Traffic Analysis", "Alert System"],
  },
  {
    id: "93",
    title: "Multi-Factor Authentication",
    description: "Identity access management with MFA, biometrics, and secure login protocols.",
    image: mfaImage,
    category: "Security & Utility Systems",
    problem: "Password-only authentication is insecure, leading to account breaches and data theft.",
    whoFor: "Applications needing secure authentication, enterprises, and security-conscious businesses.",
    impact: "Secure user accounts, prevent unauthorized access, and comply with security standards.",
    techStack: ["Node.js", "PostgreSQL", "TOTP", "WebAuthn", "Biometrics", "OAuth"],
  },
  {
    id: "94",
    title: "Admin Dashboard Framework",
    description: "Customizable admin panel with analytics widgets, user management, and system monitoring.",
    image: adminDashboardImage,
    category: "Security & Utility Systems",
    problem: "Building admin panels is time-consuming and often lacks proper analytics and user management.",
    whoFor: "Developers, businesses needing admin interfaces, and SaaS platforms.",
    impact: "Deploy admin panels quickly, monitor systems effectively, and manage users efficiently.",
    techStack: ["React", "Node.js", "PostgreSQL", "Charts Library", "Role Management", "Activity Logs"],
  },
  {
    id: "95",
    title: "File & Document Management",
    description: "Secure document storage with version control, sharing, and access permissions.",
    image: fileManagementImage,
    category: "Security & Utility Systems",
    problem: "Documents are scattered, version control is manual, and secure sharing is challenging.",
    whoFor: "Businesses, teams, and organizations needing organized document management.",
    impact: "Centralize documents, maintain version history, and share securely with permissions.",
    techStack: ["React", "Node.js", "PostgreSQL", "S3/Object Storage", "Version Control", "Access Control"],
  },
  {
    id: "96",
    title: "QR & Biometric Attendance",
    description: "Employee attendance system with QR codes, fingerprint, and face recognition.",
    image: qrAttendanceImage,
    category: "Security & Utility Systems",
    problem: "Manual attendance is prone to buddy punching, errors, and lacks real-time visibility.",
    whoFor: "Businesses, factories, schools, and organizations tracking attendance.",
    impact: "Eliminate time theft, automate attendance, and get real-time workforce visibility.",
    techStack: ["React", "Node.js", "PostgreSQL", "QR Codes", "Biometric SDKs", "Mobile App"],
  },
  {
    id: "97",
    title: "Parking Management System",
    description: "Parking facility management with space tracking, payments, and license plate recognition.",
    image: parkingImage,
    category: "Security & Utility Systems",
    problem: "Parking facilities struggle with space utilization, payment collection, and vehicle management.",
    whoFor: "Parking lot operators, malls, airports, and commercial properties.",
    impact: "Optimize space utilization, automate payments, and enhance security with LPR.",
    techStack: ["React", "Node.js", "PostgreSQL", "License Plate Recognition", "Payment Gateway", "IoT Sensors"],
  },
  {
    id: "98",
    title: "Visitor Management System",
    description: "Facility access control with visitor registration, badge printing, and host notifications.",
    image: visitorImage,
    category: "Security & Utility Systems",
    problem: "Managing visitors manually is insecure, slow, and creates poor first impressions.",
    whoFor: "Corporate offices, coworking spaces, educational institutions, and secure facilities.",
    impact: "Streamline visitor check-in, enhance security, and create professional first impressions.",
    techStack: ["React", "Node.js", "PostgreSQL", "Badge Printing", "SMS/Email", "Access Control"],
  },
];

const processSteps = [
  { step: "Strategy", desc: "We conduct in-depth market research and comprehensive user analysis, creating a strategic roadmap that aligns your product vision with business objectives to maximize success and market relevance." },
  { step: "Planning", desc: "Our planning phase translates strategy into actionable steps, outlining timelines, resource allocation, and milestones, ensuring every phase of the development process stays organized and efficient." },
  { step: "Development", desc: "Using agile methodologies, we bring your vision to innovative digital products with a focus on functionality, scalability, and quality, ensuring it will meet your unique specifications perfectly." },
  { step: "Testing", desc: "Our rigorous testing phase identifies and resolves any potential issues, guaranteeing a seamless, user-friendly experience while ensuring that your product meets all quality standards consistently." },
  { step: "Launch", desc: "We execute a well-coordinated launch plan, including final checks and promotional strategies, positioning your product for success and maximizing user engagement from day one." },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Custom",
    desc: "Perfect for small teams getting started with AI",
    features: ["Basic AI implementation", "Standard support", "Monthly reporting", "1 integration"],
  },
  {
    name: "Growth",
    price: "Custom",
    desc: "For growing businesses scaling AI operations",
    features: ["Advanced AI features", "Priority support", "Weekly reporting", "5 integrations", "Custom training"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Full-scale AI transformation for enterprises",
    features: ["Unlimited AI capabilities", "24/7 dedicated support", "Real-time analytics", "Unlimited integrations", "Custom AI models", "On-premise option"],
  },
];

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  const serviceImage = service.image;

  const sidebarServices = services.map((s) => ({
    id: s.id,
    title: s.title,
    image: s.image,
    category: s.category,
  }));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <ServiceCategorySidebar
        currentServiceId={id}
        currentCategory={service.category}
        services={sidebarServices}
      />

      <section className="relative">
        <div className="absolute inset-0">
          {typeof serviceImage === 'string' ? (
            <img
              src={serviceImage}
              alt={`${service.title} - NanoFlows ${service.category} Service`}
              title={service.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={serviceImage}
              alt={`${service.title} - NanoFlows ${service.category} Service for ${service.whoFor.split(',')[0]}`}
              title={service.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-400">
            {service.category}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl max-w-2xl">
            {service.title}
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            {service.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>

      <section id="about-service-section" className="py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
              About This Service
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
              Understanding the Value
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl">
                🎯
              </div>
              <h3 className="text-lg font-bold text-gray-900">Problem It Solves</h3>
              <p className="mt-3 text-gray-600">{service.problem}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                👥
              </div>
              <h3 className="text-lg font-bold text-gray-900">Who It's For</h3>
              <p className="mt-3 text-gray-600">{service.whoFor}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                📈
              </div>
              <h3 className="text-lg font-bold text-gray-900">Business Impact</h3>
              <p className="mt-3 text-gray-600">{service.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {(service.keyFeatures || service.deliverables || service.timeline || service.uniqueValue) && (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                Our Approach
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
                Key Features & Deliverables
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {service.keyFeatures && service.keyFeatures.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                    ⭐
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm mt-0.5">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.deliverables && service.deliverables.length > 0 && (
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-2xl">
                    📦
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600 text-sm mt-0.5">✓</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </section>
      )}

      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm overflow-hidden">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-600">
                Integrate AI Agents
              </p>
              <h2 className="mt-2 text-xl font-extrabold text-gray-900 md:text-2xl">
                With 2000+ Business Platforms - From CRM to Slack
              </h2>
            </div>
            
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="space-y-3 overflow-hidden">
                <div className="flex animate-scroll-left gap-3">
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-3 shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/notion/000000" alt="Notion" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/google/4285F4" alt="Google" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Gmail" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/googledrive/4285F4" alt="Drive" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/googlesheets/34A853" alt="Sheets" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/spotify/1DB954" alt="Spotify" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/googlechrome/4285F4" alt="Chrome" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/discord/5865F2" alt="Discord" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/x/000000" alt="X" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/anthropic/191919" alt="Anthropic" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/zoom/2D8CFF" alt="Zoom" className="w-7 h-7" /></div>
                    </div>
                  ))}
                </div>
                
                <div className="flex animate-scroll-right gap-3">
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-3 shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/hubspot/FF7A59" alt="HubSpot" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/airtable/18BFFF" alt="Airtable" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/stripe/635BFF" alt="Stripe" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/zendesk/03363D" alt="Zendesk" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/calendly/006BFF" alt="Calendly" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/mailchimp/FFE01B" alt="Mailchimp" className="w-7 h-7" /></div>
                    </div>
                  ))}
                </div>
                
                <div className="flex animate-scroll-left-slow gap-3">
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-3 shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/googleanalytics/E37400" alt="Analytics" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/meta/0081FB" alt="Meta" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/jira/0052CC" alt="Jira" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/zapier/FF4A00" alt="Zapier" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/reddit/FF4500" alt="Reddit" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/asana/F06A6A" alt="Asana" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/intercom/6AFDEF" alt="Intercom" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/trello/0052CC" alt="Trello" className="w-7 h-7" /></div>
                      <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center shadow-sm border border-gray-100 shrink-0"><img src="https://cdn.simpleicons.org/dropbox/0061FF" alt="Dropbox" className="w-7 h-7" /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Get AI Agent Integration
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-8 md:p-12 shadow-sm">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                Steps To Engage
              </p>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Our Digital Product Development Process We Follow
              </h2>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 -translate-y-1/2 z-0"></div>
              
              <div className="flex md:grid md:grid-cols-5 gap-6 relative z-10 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory">
                {processSteps.map((item, idx) => {
                  const bgColor = idx === 4 ? 'bg-amber-50' : 'bg-orange-50';
                  return (
                    <div key={idx} className="flex-shrink-0 w-[280px] md:w-auto snap-start">
                      <div className="relative flex-1 flex flex-col h-full">
                        <div className={`${bgColor} rounded-2xl p-5 shadow-sm border border-orange-100 flex-1 flex flex-col h-full`}>
                          <span className="inline-block px-3 py-1 bg-amber-400 text-amber-900 text-xs font-semibold rounded-full mb-3 self-start">
                            Step {idx + 1}
                          </span>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{item.step}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
