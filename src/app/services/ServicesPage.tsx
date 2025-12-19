import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

import customLlmImage from "@assets/generated_images/custom_llm_ai_system.png";
import decisionSupportImage from "@assets/generated_images/decision_support_ai_dashboard.png";
import contentIntelImage from "@assets/generated_images/content_intelligence_ai_platform.png";
import salesAutoImage from "@assets/generated_images/sales_automation_workflow.png";
import marketingAutoImage from "@assets/generated_images/marketing_automation_platform.png";
import opsWorkflowImage from "@assets/generated_images/operations_workflow_ai.png";
import aiNativeWebImage from "@assets/generated_images/ai_native_website_builder.png";
import saasDevImage from "@assets/generated_images/saas_platform_development.png";
import entDashImage from "@assets/generated_images/enterprise_dashboard_system.png";
import aiSalesAgentImage from "@assets/generated_images/ai_sales_agent_chat.png";
import customerSupportImage from "@assets/generated_images/customer_support_chatbot.png";
import multiChannelImage from "@assets/generated_images/multi-channel_ai_assistant.png";
import realtimeAnalyticsImage from "@assets/generated_images/real-time_analytics_dashboard.png";
import predictiveAnalyticsImage from "@assets/generated_images/predictive_analytics_engine.png";
import dataIntegrationImage from "@assets/generated_images/data_integration_platform.png";
import servicesHeroImage from "@assets/generated_images/professional_tech_services_background.png";
import whatsappCrmImage from "@assets/generated_images/whatsapp_crm_system.png";
import multiAccountWhatsappImage from "@assets/generated_images/multi-account_whatsapp_crm.png";
import salesInventoryImage from "@assets/generated_images/sales_inventory_management.png";
import posBillingImage from "@assets/generated_images/pos_billing_system.png";
import hrmsImage from "@assets/generated_images/hrms_management_system.png";
import payrollImage from "@assets/generated_images/payroll_management.png";
import loanImage from "@assets/generated_images/loan_management_system.png";
import appointmentImage from "@assets/generated_images/appointment_booking.png";
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
import onDemandImage from "@assets/generated_images/on-demand_services.png";
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
import examImage from "@assets/generated_images/examination_assessment.png";
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

type Service = {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
};

const categories = [
    { id: "all", label: "All" },
    { id: "genai", label: "Generative AI Solutions" },
    { id: "automation", label: "AI Automation & Workflows" },
    { id: "development", label: "AI-Powered Development" },
    { id: "agents", label: "AI Agents & Chatbots" },
    { id: "analytics", label: "Data & Intelligence" },
    { id: "business", label: "Business & CRM Solutions" },
    { id: "marketplace", label: "Marketplace & E-Commerce" },
    { id: "education", label: "Education & Learning" },
    { id: "saas", label: "SaaS Product Development" },
    { id: "portal", label: "Portal & CMS Solutions" },
    { id: "creative", label: "Creative & Media Platforms" },
    { id: "booking", label: "Booking & Service Platforms" },
    { id: "finance", label: "Finance & Business Tools" },
    { id: "security", label: "Security & Utility Systems" },
];

const services: Service[] = [
    {
        id: "1",
        title: "Custom LLM Systems",
        description: "Build tailored large language model solutions for content generation, intelligence, and enterprise automation using advanced AI algorithms.",
        image: customLlmImage,
        category: "genai",
    },
    {
        id: "2",
        title: "Decision Support AI",
        description: "AI-powered systems that analyze data and provide actionable insights for strategic decision-making across your organization.",
        image: decisionSupportImage,
        category: "genai",
    },
    {
        id: "3",
        title: "Content Intelligence Platform",
        description: "Automated content creation, summarization, and optimization powered by advanced AI models for maximum engagement.",
        image: contentIntelImage,
        category: "genai",
    },
    {
        id: "4",
        title: "Sales Automation System",
        description: "Automate lead scoring, follow-ups, and pipeline management with AI-driven workflows that never sleep.",
        image: salesAutoImage,
        category: "automation",
    },
    {
        id: "5",
        title: "Marketing Automation Suite",
        description: "End-to-end campaign automation, personalization, and performance optimization with intelligent triggers.",
        image: marketingAutoImage,
        category: "automation",
    },
    {
        id: "6",
        title: "Operations Workflow Engine",
        description: "Streamline operational processes with intelligent automation, real-time monitoring, and predictive maintenance.",
        image: opsWorkflowImage,
        category: "automation",
    },
    {
        id: "7",
        title: "AI-Native Websites",
        description: "Build modern, intelligent websites with integrated AI features, personalization, and dynamic content generation.",
        image: aiNativeWebImage,
        category: "development",
    },
    {
        id: "8",
        title: "SaaS Platform Development",
        description: "Develop scalable SaaS products with AI capabilities built into the core architecture for competitive advantage.",
        image: saasDevImage,
        category: "development",
    },
    {
        id: "9",
        title: "Enterprise Dashboard Systems",
        description: "Create intelligent dashboards with predictive analytics, automated insights, and real-time data visualization.",
        image: entDashImage,
        category: "development",
    },
    {
        id: "10",
        title: "AI Sales Agents",
        description: "Autonomous AI agents that qualify leads, handle objections, and close deals 24/7 with human-like conversations.",
        image: aiSalesAgentImage,
        category: "agents",
    },
    {
        id: "11",
        title: "Customer Support Bots",
        description: "Intelligent support bots that resolve issues instantly, escalate when needed, and learn continuously from interactions.",
        image: customerSupportImage,
        category: "agents",
    },
    {
        id: "12",
        title: "Multi-Channel AI Assistants",
        description: "Deploy AI assistants across WhatsApp, web, email, and social platforms for seamless customer engagement.",
        image: multiChannelImage,
        category: "agents",
    },
    {
        id: "13",
        title: "Real-time Analytics Dashboard",
        description: "Live data visualization and monitoring dashboards with automated alerts and actionable intelligence.",
        image: realtimeAnalyticsImage,
        category: "analytics",
    },
    {
        id: "14",
        title: "Predictive Analytics Engine",
        description: "Machine learning models that forecast trends, identify opportunities, and optimize business outcomes.",
        image: predictiveAnalyticsImage,
        category: "analytics",
    },
    {
        id: "15",
        title: "Data Integration Platform",
        description: "Connect and unify data sources for comprehensive business intelligence and seamless data flow.",
        image: dataIntegrationImage,
        category: "analytics",
    },
    {
        id: "16",
        title: "WhatsApp CRM System",
        description: "AI-powered WhatsApp CRM for seamless customer communication, lead management, and automated follow-ups.",
        image: whatsappCrmImage,
        category: "business",
    },
    {
        id: "17",
        title: "Multi-Account WhatsApp CRM",
        description: "Manage multiple WhatsApp business accounts from a unified dashboard with AI-driven conversation routing.",
        image: multiAccountWhatsappImage,
        category: "business",
    },
    {
        id: "18",
        title: "Sales & Inventory Management",
        description: "Complete sales and inventory tracking system with AI forecasting, stock alerts, and analytics.",
        image: salesInventoryImage,
        category: "business",
    },
    {
        id: "19",
        title: "POS Billing System",
        description: "Smart point-of-sale system for retail, restaurant, and pharmacy with AI-powered recommendations.",
        image: posBillingImage,
        category: "business",
    },
    {
        id: "20",
        title: "HRMS - Human Resource Management",
        description: "Complete HR management system with AI-assisted recruitment, performance tracking, and workforce analytics.",
        image: hrmsImage,
        category: "business",
    },
    {
        id: "21",
        title: "Payroll Management System",
        description: "Automated payroll processing with tax calculations, compliance management, and employee self-service.",
        image: payrollImage,
        category: "business",
    },
    {
        id: "22",
        title: "Loan Management System",
        description: "End-to-end loan lifecycle management with AI credit scoring, payment tracking, and risk assessment.",
        image: loanImage,
        category: "business",
    },
    {
        id: "23",
        title: "Appointment Booking System",
        description: "Smart scheduling platform with AI-optimized time slots, reminders, and calendar integration.",
        image: appointmentImage,
        category: "business",
    },
    {
        id: "24",
        title: "Clinic & Hospital Management",
        description: "Complete healthcare management system with patient records, scheduling, billing, and AI diagnostics support.",
        image: clinicImage,
        category: "business",
    },
    {
        id: "25",
        title: "Gym Membership Management",
        description: "Fitness center management with member tracking, class scheduling, and AI-powered workout recommendations.",
        image: gymImage,
        category: "business",
    },
    {
        id: "26",
        title: "Lawyer Case Management",
        description: "Legal practice management system with case tracking, document management, and AI-assisted legal research.",
        image: lawyerImage,
        category: "business",
    },
    {
        id: "27",
        title: "Courier & Logistics Management",
        description: "Complete logistics solution with route optimization, real-time tracking, and AI delivery predictions.",
        image: courierImage,
        category: "business",
    },
    {
        id: "28",
        title: "Fleet Management System",
        description: "Vehicle fleet management with GPS tracking, maintenance scheduling, and fuel optimization using AI.",
        image: fleetImage,
        category: "business",
    },
    {
        id: "29",
        title: "Property & Tenant Management",
        description: "Real estate property management with tenant portals, rent collection, and maintenance tracking.",
        image: propertyImage,
        category: "business",
    },
    {
        id: "30",
        title: "Garage & Car Wash Management",
        description: "Automotive service management with appointment booking, job tracking, and customer management.",
        image: garageImage,
        category: "business",
    },
    {
        id: "31",
        title: "Salon, Spa & Personal Care",
        description: "Beauty business management with appointment booking, staff scheduling, and customer loyalty programs.",
        image: salonSpaImage,
        category: "business",
    },
    {
        id: "32",
        title: "Laundry Shop Management",
        description: "Laundry and dry cleaning management with order tracking, pricing, and customer notifications.",
        image: laundryImage,
        category: "business",
    },
    {
        id: "33",
        title: "Restaurant & Table Booking",
        description: "Restaurant management with table reservations, menu management, kitchen display, and POS integration.",
        image: restaurantImage,
        category: "business",
    },
    {
        id: "34",
        title: "Single Vendor E-Commerce",
        description: "Complete e-commerce website with product catalog, cart, checkout, and AI-powered product recommendations.",
        image: singleVendorImage,
        category: "marketplace",
    },
    {
        id: "35",
        title: "Multi-Vendor Marketplace",
        description: "Amazon-style marketplace with multiple sellers, vendor management, commissions, and AI fraud detection.",
        image: multiVendorImage,
        category: "marketplace",
    },
    {
        id: "36",
        title: "Classifieds Marketplace",
        description: "OLX-style classifieds platform for buying and selling with location-based listings and chat features.",
        image: classifiedsImage,
        category: "marketplace",
    },
    {
        id: "37",
        title: "Grocery E-Commerce Platform",
        description: "Online grocery store with inventory management, delivery scheduling, and AI-powered recommendations.",
        image: groceryImage,
        category: "marketplace",
    },
    {
        id: "38",
        title: "Pharmacy E-Commerce Platform",
        description: "Online pharmacy with prescription management, medicine search, and automated refill reminders.",
        image: pharmacyImage,
        category: "marketplace",
    },
    {
        id: "39",
        title: "On-Demand Services Marketplace",
        description: "UrbanClap-style platform for home services with provider matching, booking, and ratings.",
        image: onDemandImage,
        category: "marketplace",
    },
    {
        id: "40",
        title: "Car Rental & Mobility Platform",
        description: "Vehicle rental platform with fleet management, booking system, and AI-powered pricing optimization.",
        image: carRentalImage,
        category: "marketplace",
    },
    {
        id: "41",
        title: "Hotel Booking Platform",
        description: "Hospitality booking platform with room management, reservations, and dynamic pricing algorithms.",
        image: hotelImage,
        category: "marketplace",
    },
    {
        id: "42",
        title: "Bus, Travel & Tour Booking",
        description: "Travel booking portal with bus tickets, tour packages, and AI-powered trip recommendations.",
        image: travelImage,
        category: "marketplace",
    },
    {
        id: "43",
        title: "Real Estate Marketplace",
        description: "Property listing platform with virtual tours, lead management, and AI property valuation.",
        image: realEstateImage,
        category: "marketplace",
    },
    {
        id: "44",
        title: "Job Portal & Recruitment",
        description: "Complete job board with resume parsing, candidate matching, and AI-powered job recommendations.",
        image: jobPortalImage,
        category: "marketplace",
    },
    {
        id: "45",
        title: "Freelancer Marketplace",
        description: "Fiverr-style platform for freelance services with gig management, escrow payments, and reviews.",
        image: freelancerImage,
        category: "marketplace",
    },
    {
        id: "46",
        title: "Digital Products Marketplace",
        description: "Platform for selling digital products like ebooks, templates, and software with instant delivery.",
        image: digitalProductsImage,
        category: "marketplace",
    },
    {
        id: "47",
        title: "Crowdfunding Platform",
        description: "Fundraising platform for projects and startups with campaign management and backer rewards.",
        image: crowdfundingImage,
        category: "marketplace",
    },
    {
        id: "48",
        title: "OTT Streaming Platform",
        description: "Video streaming service with content management, subscriptions, and AI content recommendations.",
        image: ottImage,
        category: "marketplace",
    },
    {
        id: "49",
        title: "Automobile Listing Marketplace",
        description: "Vehicle marketplace for buying and selling cars with listings, dealer management, and financing options.",
        image: automobileImage,
        category: "marketplace",
    },
    {
        id: "50",
        title: "Learning Management System (LMS)",
        description: "Complete e-learning platform with course creation, student progress tracking, and AI tutoring.",
        image: lmsImage,
        category: "education",
    },
    {
        id: "51",
        title: "School & College Management",
        description: "Educational institution management with student info, attendance, grades, and parent portals.",
        image: schoolImage,
        category: "education",
    },
    {
        id: "52",
        title: "Coaching Institute Management",
        description: "Coaching center software with batch management, fee collection, and performance analytics.",
        image: coachingImage,
        category: "education",
    },
    {
        id: "53",
        title: "Online Examination Platform",
        description: "Assessment platform with AI proctoring, question banks, and automated grading.",
        image: examImage,
        category: "education",
    },
    {
        id: "54",
        title: "Course Selling Platform",
        description: "Digital education marketplace for selling courses with video hosting and student management.",
        image: courseImage,
        category: "education",
    },
    {
        id: "55",
        title: "Library Management System",
        description: "Digital library system with catalog management, borrowing, returns, and fine tracking.",
        image: libraryImage,
        category: "education",
    },
    {
        id: "56",
        title: "Email & SMS Campaign SaaS",
        description: "Marketing automation platform for email and SMS campaigns with AI-powered personalization.",
        image: emailCampaignImage,
        category: "saas",
    },
    {
        id: "57",
        title: "WhatsApp Marketing SaaS",
        description: "Bulk WhatsApp messaging platform with templates, scheduling, and engagement analytics.",
        image: whatsappMarketingImage,
        category: "saas",
    },
    {
        id: "58",
        title: "CRM & Customer Engagement SaaS",
        description: "Customer relationship management with sales pipeline, contact management, and AI insights.",
        image: crmEngagementImage,
        category: "saas",
    },
    {
        id: "59",
        title: "Project & Task Management SaaS",
        description: "Team collaboration platform with task boards, time tracking, and AI productivity insights.",
        image: projectTaskImage,
        category: "saas",
    },
    {
        id: "60",
        title: "Invoice & Billing SaaS",
        description: "Billing and invoicing platform with recurring payments, subscription management, and reporting.",
        image: invoiceBillingImage,
        category: "saas",
    },
    {
        id: "61",
        title: "Ticketing & Helpdesk SaaS",
        description: "Customer support platform with ticket management, knowledge base, and AI-powered responses.",
        image: ticketingImage,
        category: "saas",
    },
    {
        id: "62",
        title: "AI Chatbot Automation SaaS",
        description: "Chatbot builder platform with workflow automation, integrations, and conversation analytics.",
        image: aiChatbotImage,
        category: "saas",
    },
    {
        id: "63",
        title: "News & Magazine Portal",
        description: "Media publishing platform with article management, categories, and reader engagement features.",
        image: newsMediaImage,
        category: "portal",
    },
    {
        id: "64",
        title: "Blogging & Portfolio Platform",
        description: "Personal branding platform for writers and creators with customizable themes and SEO tools.",
        image: bloggingImage,
        category: "portal",
    },
    {
        id: "65",
        title: "Corporate Website & CMS",
        description: "Professional business website builder with content management and lead capture forms.",
        image: corporateCmsImage,
        category: "portal",
    },
    {
        id: "66",
        title: "NGO & Non-Profit Portal",
        description: "Organization management for charities with donation tracking, volunteer management, and campaigns.",
        image: ngoImage,
        category: "portal",
    },
    {
        id: "67",
        title: "Multipurpose CMS Platform",
        description: "Flexible content management system with drag-and-drop builder and multi-site support.",
        image: multipurposeCmsImage,
        category: "portal",
    },
    {
        id: "68",
        title: "Religious Organization Website",
        description: "Community platform for churches, temples, and trusts with event calendars and member portals.",
        image: religiousImage,
        category: "portal",
    },
    {
        id: "69",
        title: "Event Management Portal",
        description: "Event planning platform with registration, ticketing, and attendee management.",
        image: eventManagementImage,
        category: "portal",
    },
    {
        id: "70",
        title: "Community & Membership Portal",
        description: "Member community platform with forums, subscriptions, and exclusive content areas.",
        image: communityImage,
        category: "portal",
    },
    {
        id: "71",
        title: "Video Hosting Platform",
        description: "Video streaming platform with content management, playlists, and monetization options.",
        image: videoHostingImage,
        category: "creative",
    },
    {
        id: "72",
        title: "Music Streaming Platform",
        description: "Audio streaming service with playlists, artist profiles, and AI music recommendations.",
        image: musicImage,
        category: "creative",
    },
    {
        id: "73",
        title: "Photography Portfolio Platform",
        description: "Visual portfolio website for photographers with galleries, client proofing, and sales.",
        image: photographyImage,
        category: "creative",
    },
    {
        id: "74",
        title: "Wedding & Event Showcase",
        description: "Wedding planning website with vendor directories, galleries, and RSVP management.",
        image: weddingImage,
        category: "creative",
    },
    {
        id: "75",
        title: "Creative Agency Website",
        description: "Portfolio website for design agencies with case studies, team profiles, and contact forms.",
        image: creativeAgencyImage,
        category: "creative",
    },
    {
        id: "76",
        title: "Artist & Talent Booking Platform",
        description: "Booking platform for artists and performers with profiles, availability, and event management.",
        image: talentImage,
        category: "creative",
    },
    {
        id: "77",
        title: "Healthcare Booking Portal",
        description: "Doctor appointment platform with clinic finder, scheduling, and telemedicine integration.",
        image: healthcareBookingImage,
        category: "booking",
    },
    {
        id: "78",
        title: "Beauty Service Booking Platform",
        description: "Salon and spa booking with service catalog, stylist selection, and online payments.",
        image: beautyBookingImage,
        category: "booking",
    },
    {
        id: "79",
        title: "Home Services Booking Platform",
        description: "On-demand home services platform for plumbers, electricians, and cleaning services.",
        image: homeServicesImage,
        category: "booking",
    },
    {
        id: "80",
        title: "Vehicle Service Booking",
        description: "Auto service booking platform for car repairs, maintenance, and roadside assistance.",
        image: vehicleServiceImage,
        category: "booking",
    },
    {
        id: "81",
        title: "Fitness & Wellness Booking",
        description: "Fitness trainer and wellness booking with class schedules and personal training sessions.",
        image: fitnessBookingImage,
        category: "booking",
    },
    {
        id: "82",
        title: "Tutor Booking Platform",
        description: "Online tutoring marketplace with subject experts, session scheduling, and video lessons.",
        image: tutorBookingImage,
        category: "booking",
    },
    {
        id: "83",
        title: "Accounting & GST Software",
        description: "Financial management software with tax calculations, compliance, and automated reporting.",
        image: accountingImage,
        category: "finance",
    },
    {
        id: "84",
        title: "Inventory & Stock Control",
        description: "Warehouse management system with stock tracking, reorder alerts, and multi-location support.",
        image: inventoryImage,
        category: "finance",
    },
    {
        id: "85",
        title: "Vendor & Supplier Management",
        description: "Procurement management with supplier database, purchase orders, and payment tracking.",
        image: vendorImage,
        category: "finance",
    },
    {
        id: "86",
        title: "Asset Management Software",
        description: "Business asset tracking with depreciation, maintenance schedules, and lifecycle management.",
        image: assetImage,
        category: "finance",
    },
    {
        id: "87",
        title: "Payment Gateway Integration",
        description: "Secure payment processing with multiple gateways, digital wallets, and transaction management.",
        image: paymentGatewayImage,
        category: "finance",
    },
    {
        id: "88",
        title: "Subscription Billing Management",
        description: "Recurring billing platform with subscription plans, dunning management, and revenue analytics.",
        image: subscriptionImage,
        category: "finance",
    },
    {
        id: "89",
        title: "Utility Recharge Platform",
        description: "Prepaid services platform for mobile recharge, bill payments, and utility services.",
        image: utilityRechargeImage,
        category: "finance",
    },
    {
        id: "90",
        title: "Wealth Management Portal",
        description: "Investment advisory platform with portfolio management, market analytics, and financial planning.",
        image: wealthImage,
        category: "finance",
    },
    {
        id: "91",
        title: "Insurance CRM & Policy Management",
        description: "Insurance agent CRM with policy tracking, claims management, and commission calculations.",
        image: insuranceImage,
        category: "finance",
    },
    {
        id: "92",
        title: "Website Firewall & Anti-Spam",
        description: "Security system with threat protection, DDoS mitigation, and real-time monitoring.",
        image: firewallImage,
        category: "security",
    },
    {
        id: "93",
        title: "Multi-Factor Authentication",
        description: "Identity access management with MFA, biometrics, and secure login protocols.",
        image: mfaImage,
        category: "security",
    },
    {
        id: "94",
        title: "Admin Dashboard Framework",
        description: "Customizable admin panel with analytics widgets, user management, and system monitoring.",
        image: adminDashboardImage,
        category: "security",
    },
    {
        id: "95",
        title: "File & Document Management",
        description: "Secure document storage with version control, sharing, and access permissions.",
        image: fileManagementImage,
        category: "security",
    },
    {
        id: "96",
        title: "QR & Biometric Attendance",
        description: "Employee attendance system with QR codes, fingerprint, and face recognition.",
        image: qrAttendanceImage,
        category: "security",
    },
    {
        id: "97",
        title: "Parking Management System",
        description: "Parking facility management with space tracking, payments, and license plate recognition.",
        image: parkingImage,
        category: "security",
    },
    {
        id: "98",
        title: "Visitor Management System",
        description: "Facility access control with visitor registration, badge printing, and host notifications.",
        image: visitorImage,
        category: "security",
    },
];


function ServicesPageContent() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("all");
    const [showAllCategories, setShowAllCategories] = useState(false);

    useEffect(() => {
        const paramCategory = searchParams.get("category");
        if (paramCategory && categories.some((c) => c.id === paramCategory)) {
            setActiveCategory(paramCategory);
        }
    }, [searchParams]);

    const filteredServices = activeCategory === "all"
        ? services
        : services.filter(s => s.category === activeCategory);

    const visibleCategories = showAllCategories ? categories : categories.slice(0, 6);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-40 md:py-48 min-h-[450px] md:min-h-[550px]">
                <div className="absolute inset-0">
                    <img
                        src={servicesHeroImage}
                        alt="Services Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50" />
                </div>

                <div className="relative mx-auto max-w-[1400px] px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Services</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-300 md:text-xl">
                            Transforming businesses with AI-driven innovation. From custom LLMs to automated workflows, we build the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-[1400px] px-6 pb-24 mt-20">
                <div className="mb-12 flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {visibleCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    if (category.id === "all") {
                                        navigate("/services");
                                    } else {
                                        navigate(`/services?category=${category.id}`);
                                    }
                                }}
                                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 ring-2 ring-orange-500/20"
                                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setShowAllCategories(!showAllCategories)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
                    >
                        {showAllCategories ? "Show Less Categories" : "Show All Categories"}
                        <span className={`transition-transform duration-300 ${showAllCategories ? "rotate-180" : ""}`}>
                            ↓
                        </span>
                    </button>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    to={`/services/${service.id}`}
                                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-orange-500/20"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center rounded-lg bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                                                    {categories.find(c => c.id === service.category)?.label}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-orange-600">
                                            {service.title}
                                        </h3>
                                        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                                            {service.description}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                Learn more
                                            </span>
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                                                →
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default function ServicesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
            </div>
        }>
            <ServicesPageContent />
        </Suspense>
    );
}
