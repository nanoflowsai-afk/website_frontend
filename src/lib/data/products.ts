import leadGenHeroImage from "@assets/generated_images/lead_generation_hero_no_text.png";
import callingHeroImage from "@assets/generated_images/voice_ai_calling_hero_no_text.png";
import crmHeroImage from "@assets/generated_images/crm_dashboard_hero_no_text.png";
import contentHeroImage from "@assets/generated_images/content_marketing_hero_no_text.png";
import assistantHeroImage from "@assets/generated_images/ai_assistants_team_hero_no_text.png";

export type Product = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    heroImage: string;
    color: string;
    capabilities: {
        title: string;
        description: string;
        icon: string;
    }[];
    keyFeatures: {
        title: string;
        description: string;
    }[];
    comparison: {
        feature: string;
        traditional: string;
        nanoflows: string;
    }[];
    deploymentOptions: {
        name: string;
        description: string;
        features: string[];
        recommended?: boolean;
    }[];
};

export const products: Product[] = [
    {
        id: "lead-generation",
        name: "AI Lead Generation Engines",
        tagline: "Scale Your Pipeline Autonomously",
        description: "Autonomous systems that identify, qualify, and nurture leads 24/7 without human intervention. Built to scale your pipeline effortlessly while maintaining personalized engagement.",
        heroImage: leadGenHeroImage,
        color: "from-red-500 to-orange-500",
        capabilities: [
            { title: "Automated Prospecting", description: "AI scans multiple data sources to identify ideal prospects matching your ICP", icon: "🔍" },
            { title: "Intelligent Lead Scoring", description: "Machine learning models score and prioritize leads based on conversion likelihood", icon: "📊" },
            { title: "Multi-Channel Outreach", description: "Coordinates email, LinkedIn, and other channels for seamless engagement", icon: "📨" },
            { title: "Real-Time Enrichment", description: "Automatically enriches lead data with company info, technographics, and intent signals", icon: "📈" },
        ],
        keyFeatures: [
            { title: "24/7 Autonomous Operation", description: "Runs continuously without human oversight, identifying and engaging prospects around the clock" },
            { title: "Personalized at Scale", description: "Generates unique, contextual messages for each prospect based on their profile and behavior" },
            { title: "CRM Integration", description: "Seamlessly syncs with Salesforce, HubSpot, and other CRMs for unified pipeline management" },
            { title: "Compliance Built-In", description: "Adheres to GDPR, CAN-SPAM, and other regulations automatically" },
            { title: "A/B Testing Engine", description: "Continuously tests messaging, timing, and channels to optimize performance" },
            { title: "Analytics Dashboard", description: "Real-time visibility into pipeline health, conversion rates, and ROI" },
        ],
        comparison: [
            { feature: "Operation Hours", traditional: "Business hours only", nanoflows: "24/7 autonomous" },
            { feature: "Lead Response Time", traditional: "Hours to days", nanoflows: "Instant (< 1 min)" },
            { feature: "Personalization", traditional: "Generic templates", nanoflows: "AI-generated unique content" },
            { feature: "Scale Capacity", traditional: "Limited by team size", nanoflows: "Unlimited scaling" },
            { feature: "Data Entry", traditional: "Manual input required", nanoflows: "Fully automated" },
        ],
        deploymentOptions: [
            { name: "Starter", description: "For small teams getting started", features: ["Up to 1,000 leads/month", "1 CRM integration", "Email channel", "Basic analytics"] },
            { name: "Growth", description: "For scaling businesses", features: ["Up to 10,000 leads/month", "3 CRM integrations", "Multi-channel outreach", "Advanced analytics", "A/B testing"], recommended: true },
            { name: "Enterprise", description: "For large organizations", features: ["Unlimited leads", "Unlimited integrations", "All channels", "Custom AI training", "Dedicated support", "On-premise option"] },
        ],
    },
    {
        id: "calling-followup",
        name: "AI Calling & Follow-Up Systems",
        tagline: "Voice AI That Closes Deals",
        description: "Voice AI platforms that handle outbound calls, follow-ups, and appointment scheduling autonomously with human-like conversations that convert.",
        heroImage: callingHeroImage,
        color: "from-orange-500 to-amber-500",
        capabilities: [
            { title: "Natural Voice AI", description: "Human-like voice interactions powered by advanced speech synthesis and understanding", icon: "🎙️" },
            { title: "Smart Scheduling", description: "Automatically books meetings and syncs with calendars in real-time", icon: "📅" },
            { title: "Call Transcription", description: "Real-time transcription and summarization of all conversations", icon: "📝" },
            { title: "Sentiment Analysis", description: "Detects caller mood and adjusts approach for optimal outcomes", icon: "💭" },
        ],
        keyFeatures: [
            { title: "Infinite Call Capacity", description: "Handle thousands of simultaneous calls without wait times or dropped connections" },
            { title: "Objection Handling", description: "AI trained on your best sales reps to handle common objections naturally" },
            { title: "Multi-Language Support", description: "Communicate fluently in 20+ languages with native-level pronunciation" },
            { title: "Call Recording & Analytics", description: "Every call recorded, transcribed, and analyzed for insights" },
            { title: "Warm Transfer", description: "Seamlessly transfers qualified prospects to human reps when needed" },
            { title: "Follow-Up Automation", description: "Automatically schedules and executes follow-up calls based on outcomes" },
        ],
        comparison: [
            { feature: "Calls per Day", traditional: "50-100 per rep", nanoflows: "Unlimited" },
            { feature: "Availability", traditional: "Business hours", nanoflows: "24/7/365" },
            { feature: "Training Time", traditional: "Weeks to months", nanoflows: "Hours" },
            { feature: "Consistency", traditional: "Variable by rep", nanoflows: "100% consistent" },
            { feature: "Scaling Speed", traditional: "Months (hiring)", nanoflows: "Instant" },
        ],
        deploymentOptions: [
            { name: "Starter", description: "For initial testing", features: ["500 minutes/month", "1 phone number", "Basic voice AI", "Call recording"] },
            { name: "Growth", description: "For active teams", features: ["5,000 minutes/month", "5 phone numbers", "Advanced voice AI", "CRM integration", "Custom scripts"], recommended: true },
            { name: "Enterprise", description: "For call centers", features: ["Unlimited minutes", "Unlimited numbers", "Custom voice cloning", "API access", "Priority support", "SLA guarantee"] },
        ],
    },
    {
        id: "crm-dashboards",
        name: "AI CRM & Dashboards",
        tagline: "Self-Updating Intelligence Hub",
        description: "Intelligent CRM platforms that update themselves, predict outcomes, and surface insights without manual data entry or analysis.",
        heroImage: crmHeroImage,
        color: "from-amber-500 to-yellow-500",
        capabilities: [
            { title: "Auto-Updating Records", description: "CRM entries update automatically from emails, calls, and interactions", icon: "🔄" },
            { title: "Predictive Analytics", description: "AI forecasts deal outcomes, churn risk, and revenue with high accuracy", icon: "🔮" },
            { title: "Real-Time Insights", description: "Instant visibility into pipeline health and team performance", icon: "⚡" },
            { title: "Custom Reporting", description: "Generate any report using natural language queries", icon: "📋" },
        ],
        keyFeatures: [
            { title: "Zero Data Entry", description: "AI captures and logs all customer interactions automatically across channels" },
            { title: "Deal Probability Scoring", description: "Real-time probability scores for every opportunity based on historical patterns" },
            { title: "Activity Capture", description: "Automatically logs emails, calls, meetings, and notes to the right records" },
            { title: "Natural Language Queries", description: "Ask questions in plain English and get instant answers with visualizations" },
            { title: "Anomaly Detection", description: "Alerts you to unusual patterns in data before they become problems" },
            { title: "Executive Dashboards", description: "Role-based views with the metrics that matter most" },
        ],
        comparison: [
            { feature: "Data Entry Time", traditional: "2-3 hours/day", nanoflows: "0 hours" },
            { feature: "Data Accuracy", traditional: "60-70%", nanoflows: "95%+" },
            { feature: "Report Generation", traditional: "Hours to days", nanoflows: "Seconds" },
            { feature: "Forecast Accuracy", traditional: "50-60%", nanoflows: "85%+" },
            { feature: "User Adoption", traditional: "Often low", nanoflows: "High (no manual work)" },
            { feature: "Insights Discovery", traditional: "Manual analysis", nanoflows: "Automated alerts" },
        ],
        deploymentOptions: [
            { name: "Starter", description: "For small teams", features: ["Up to 10 users", "Core CRM features", "Basic dashboards", "Email sync"] },
            { name: "Growth", description: "For growing companies", features: ["Up to 50 users", "Advanced analytics", "Custom dashboards", "API access", "Integrations"], recommended: true },
            { name: "Enterprise", description: "For large organizations", features: ["Unlimited users", "Custom AI models", "Advanced security", "SSO/SAML", "Dedicated support", "On-premise option"] },
        ],
    },
    {
        id: "content-marketing",
        name: "AI Content & Marketing Systems",
        tagline: "Content Creation at Scale",
        description: "End-to-end content platforms that create, optimize, and distribute marketing assets across all channels autonomously.",
        heroImage: contentHeroImage,
        color: "from-green-500 to-emerald-500",
        capabilities: [
            { title: "Auto Content Generation", description: "AI creates blog posts, social content, emails, and ads from briefs", icon: "✍️" },
            { title: "SEO Optimization", description: "Built-in SEO analysis and optimization for maximum organic reach", icon: "🔍" },
            { title: "Multi-Channel Publishing", description: "Publish to all platforms from a single dashboard with optimal timing", icon: "📢" },
            { title: "Performance Tracking", description: "Real-time analytics across all content and channels", icon: "📈" },
        ],
        keyFeatures: [
            { title: "Brand Voice AI", description: "Learns and maintains your unique brand voice across all content" },
            { title: "Content Calendar", description: "AI-planned editorial calendar based on trends and performance data" },
            { title: "Image Generation", description: "Creates custom visuals and graphics to accompany content" },
            { title: "A/B Testing", description: "Automatically tests headlines, images, and copy variations" },
            { title: "Competitor Analysis", description: "Monitors competitor content and identifies opportunities" },
            { title: "ROI Attribution", description: "Tracks content performance to revenue with full attribution" },
        ],
        comparison: [
            { feature: "Content Volume", traditional: "5-10 pieces/week", nanoflows: "50+ pieces/week" },
            { feature: "Time to Publish", traditional: "Days to weeks", nanoflows: "Minutes" },
            { feature: "Consistency", traditional: "Variable quality", nanoflows: "Consistent brand voice" },
            { feature: "SEO Optimization", traditional: "Manual process", nanoflows: "Automatic" },
            { feature: "Cost per Piece", traditional: "$200-500+", nanoflows: "$5-20" },
            { feature: "Analytics", traditional: "Fragmented", nanoflows: "Unified dashboard" },
        ],
        deploymentOptions: [
            { name: "Starter", description: "For content teams", features: ["50 pieces/month", "2 channels", "Basic analytics", "Brand voice training"] },
            { name: "Growth", description: "For marketing teams", features: ["500 pieces/month", "All channels", "Advanced analytics", "SEO tools", "A/B testing"], recommended: true },
            { name: "Enterprise", description: "For media companies", features: ["Unlimited content", "Custom integrations", "API access", "White-label option", "Priority support", "Custom AI training"] },
        ],
    },
    {
        id: "internal-assistants",
        name: "Internal AI Assistants for Teams",
        tagline: "Your Company's AI Expert",
        description: "Custom AI assistants trained on your company knowledge to support employees with instant answers and automated workflows.",
        heroImage: assistantHeroImage,
        color: "from-blue-500 to-indigo-500",
        capabilities: [
            { title: "Company Knowledge Base", description: "AI trained on all your docs, wikis, and internal resources", icon: "📚" },
            { title: "Task Automation", description: "Automates repetitive tasks like report generation and data lookup", icon: "⚙️" },
            { title: "Meeting Summaries", description: "Automatically summarizes meetings and extracts action items", icon: "📝" },
            { title: "Platform Integration", description: "Works in Slack, Teams, email, and other tools your team uses", icon: "🔗" },
        ],
        keyFeatures: [
            { title: "Instant Answers", description: "Employees get accurate answers from company knowledge in seconds" },
            { title: "Onboarding Acceleration", description: "New hires get up to speed 3x faster with AI guidance" },
            { title: "Process Automation", description: "Common workflows automated without custom development" },
            { title: "Secure & Private", description: "Your data never leaves your environment, full encryption" },
            { title: "Continuous Learning", description: "Gets smarter as your company knowledge grows" },
            { title: "Usage Analytics", description: "See what questions are asked most and identify knowledge gaps" },
        ],
        comparison: [
            { feature: "Answer Time", traditional: "Hours to days", nanoflows: "Seconds" },
            { feature: "Availability", traditional: "When experts free", nanoflows: "24/7" },
            { feature: "Knowledge Access", traditional: "Search multiple tools", nanoflows: "Single interface" },
            { feature: "Onboarding Time", traditional: "Weeks to months", nanoflows: "Days" },
            { feature: "Expert Dependency", traditional: "High", nanoflows: "Low" },
            { feature: "Knowledge Retention", traditional: "Lost when people leave", nanoflows: "Permanently captured" },
        ],
        deploymentOptions: [
            { name: "Starter", description: "For small teams", features: ["Up to 25 users", "Basic knowledge base", "Slack integration", "Standard support"] },
            { name: "Growth", description: "For departments", features: ["Up to 200 users", "Advanced features", "All integrations", "Custom training", "Analytics"], recommended: true },
            { name: "Enterprise", description: "For organizations", features: ["Unlimited users", "SSO/SAML", "On-premise option", "API access", "Dedicated support", "Custom SLA"] },
        ],
    },
];
