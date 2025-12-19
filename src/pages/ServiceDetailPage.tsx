import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../lib/data/services';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ServiceCategorySidebar } from '../components/ServiceCategorySidebar';
import { motion } from 'framer-motion';
import {
    GoogleLogo, SlackLogo, ZoomLogo, NotionLogo, LinearLogo,
    HubspotLogo, FigmaLogo, DiscordLogo, SpotifyLogo,
    ChromeLogo, JiraLogo, DriveLogo, ZapierLogo, DropboxLogo, YoutubeLogo,
    XLogo, SheetsLogo, InstagramLogo, ZendeskLogo, CalendlyLogo,
    ShopifyLogo, MailchimpLogo, WhatsappLogo, StripeLogo,
    TrelloLogo, AnalyticsLogo, MessengerLogo, RedditLogo, AsanaLogo, IntercomLogo,
    OpenAILogo, GmailLogo, AirtableLogo, GithubLogo, MetaLogo, PaypalLogo
} from '../components/BrandLogos';

// Icons for Value Section
const ProblemIcon = () => (
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl">
        🎯
    </div>
);
const WhoForIcon = () => (
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
        👥
    </div>
);
const ImpactIcon = () => (
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
        📈
    </div>
);

// Icons for Features
const FeatureIcon = () => (
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
        ⭐
    </div>
);
const DeliverableIcon = () => (
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-2xl">
        📦
    </div>
);

// Row 1: Communication, Productivity & AI
// Spotify, Google Chrome, Discord, X (Twitter), OpenAI, Zoom, Notion, Google, Gmail, Google Drive, Google Sheets
const row1Logos = [
    { id: 'spot', component: <SpotifyLogo /> },
    { id: 'chrom', component: <ChromeLogo /> },
    { id: 'disc', component: <DiscordLogo /> },
    { id: 'x', component: <XLogo /> },
    { id: 'openai', component: <OpenAILogo /> },
    { id: 'zoom', component: <ZoomLogo /> },
    { id: 'notion', component: <NotionLogo /> },
    { id: 'google', component: <GoogleLogo /> },
    { id: 'gmail', component: <GmailLogo /> },
    { id: 'drive', component: <DriveLogo /> },
    { id: 'sheets', component: <SheetsLogo /> },
    // Repeat for smoothness
    { id: 'spot-r', component: <SpotifyLogo /> },
    { id: 'chrom-r', component: <ChromeLogo /> },
    { id: 'disc-r', component: <DiscordLogo /> },
    { id: 'x-r', component: <XLogo /> },
    { id: 'openai-r', component: <OpenAILogo /> },
    { id: 'zoom-r', component: <ZoomLogo /> },
    { id: 'notion-r', component: <NotionLogo /> },
    { id: 'google-r', component: <GoogleLogo /> },
];

// Row 2: Marketing, CRM, Commerce & Social
// Instagram, Zendesk, Calendly, Mailchimp, Shopify, WhatsApp, HubSpot, Airtable, Figma, Stripe
const row2Logos = [
    { id: 'insta', component: <InstagramLogo /> },
    { id: 'zend', component: <ZendeskLogo /> },
    { id: 'cal', component: <CalendlyLogo /> },
    { id: 'mail', component: <MailchimpLogo /> },
    { id: 'shopify', component: <ShopifyLogo /> },
    { id: 'whats', component: <WhatsappLogo /> },
    { id: 'hub', component: <HubspotLogo /> },
    { id: 'air', component: <AirtableLogo /> },
    { id: 'fig', component: <FigmaLogo /> },
    { id: 'stripe', component: <StripeLogo /> },
    // Repeat for smoothness
    { id: 'insta-r', component: <InstagramLogo /> },
    { id: 'zend-r', component: <ZendeskLogo /> },
    { id: 'cal-r', component: <CalendlyLogo /> },
    { id: 'mail-r', component: <MailchimpLogo /> },
    { id: 'shopify-r', component: <ShopifyLogo /> },
    { id: 'whats-r', component: <WhatsappLogo /> },
];

// Row 3: Dev, Analytics & Automation
// Dropbox, YouTube, Google Analytics, Meta (Facebook), PayPal, Zapier, Reddit, Asana, Intercom, GitHub, Trello
const row3Logos = [
    { id: 'box', component: <DropboxLogo /> },
    { id: 'yt', component: <YoutubeLogo /> },
    { id: 'ana', component: <AnalyticsLogo /> },
    { id: 'meta', component: <MetaLogo /> },
    { id: 'pay', component: <PaypalLogo /> },
    { id: 'zap', component: <ZapierLogo /> },
    { id: 'red', component: <RedditLogo /> },
    { id: 'asana', component: <AsanaLogo /> },
    { id: 'inter', component: <IntercomLogo /> },
    { id: 'git', component: <GithubLogo /> },
    { id: 'trello', component: <TrelloLogo /> },
    // Repeat for smoothness
    { id: 'box-r', component: <DropboxLogo /> },
    { id: 'yt-r', component: <YoutubeLogo /> },
    { id: 'ana-r', component: <AnalyticsLogo /> },
    { id: 'meta-r', component: <MetaLogo /> },
    { id: 'pay-r', component: <PaypalLogo /> },
    { id: 'zap-r', component: <ZapierLogo /> },
];

export default function ServiceDetailPage() {
    const { id } = useParams<{ id: string }>();
    const service = services.find((s) => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="pt-32 pb-20 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Service Not Found</h1>
                    <p className="mt-4 text-gray-600">The service you are looking for does not exist.</p>
                    <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Go Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const heroImage = service.heroImage;

    const sidebarServices = services.map((s) => ({
        id: s.id,
        title: s.title,
        image: s.image,
        category: s.category,
    }));

    return (
        <div className="min-h-screen bg-white font-sans relative">
            <Navbar />

            <ServiceCategorySidebar
                currentServiceId={service.id}
                currentCategory={service.category}
                services={sidebarServices}
            />

            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0">
                    <img
                        src={service.heroImage || service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40"></div>
                </div>

                <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.1em] text-orange-400">
                            {service.category || "Service Category"}
                        </p>
                        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                            {service.title}
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-200">
                            {service.description}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-orange-500/25 hover:-translate-y-1"
                            >
                                Request Demo
                                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. VALUE SECTION (3-Card Grid) */}
            <section id="about-service-section" className="py-12 relative overflow-hidden">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="mb-10 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                            About This Service
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Understanding the Value
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Problem Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-50"></div>
                            <div className="relative">
                                <ProblemIcon />
                                <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Problem it Solves</h3>
                                <p className="leading-relaxed text-base text-gray-600">
                                    {service.problem || "Addressing core business challenges with advanced technology solutions."}
                                </p>
                            </div>
                        </motion.div>

                        {/* Who For Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-50"></div>
                            <div className="relative">
                                <WhoForIcon />
                                <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Who It's For</h3>
                                <p className="leading-relaxed text-base text-gray-600">
                                    {service.whoFor || "Designed for forward-thinking organizations ready to scale."}
                                </p>
                            </div>
                        </motion.div>

                        {/* Impact Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-50"></div>
                            <div className="relative">
                                <ImpactIcon />
                                <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">Business Impact</h3>
                                <p className="leading-relaxed text-base text-gray-600">
                                    {service.impact || "Driving measurable growth and operational efficiency."}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. KEY FEATURES & DELIVERABLES (2-Column) */}
            <section className="py-12 bg-gray-50/50">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="mb-10 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                            Our Approach
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Key Features & Deliverables
                        </h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Features Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm"
                        >
                            <FeatureIcon />
                            <h3 className="mb-8 text-2xl font-bold text-gray-900">Key Features</h3>
                            <ul className="space-y-4">
                                {service.keyFeatures && service.keyFeatures.length > 0 ? (
                                    service.keyFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-xs mt-1">
                                                ✓
                                            </span>
                                            <span className="text-base text-gray-700">{feature}</span>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-lg text-gray-500 italic">Specific features tailored to your needs.</p>
                                )}
                            </ul>
                        </motion.div>

                        {/* Deliverables Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm"
                        >
                            <DeliverableIcon />
                            <h3 className="mb-8 text-2xl font-bold text-gray-900">What You Get</h3>
                            <ul className="space-y-4">
                                {service.deliverables && service.deliverables.length > 0 ? (
                                    service.deliverables.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600 font-bold text-xs mt-1">
                                                ✓
                                            </span>
                                            <span className="text-base text-gray-700">{item}</span>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-lg text-gray-500 italic"> Comprehensive deliverables for successful deployment.</p>
                                )}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. TECH STACK & INTEGRATIONS (Animated Marquee - 3 ROWS) */}
            <section className="py-12 overflow-hidden bg-white">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                        <div className="text-center mb-10">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                                Integrate AI Agents
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                With 2000+ Business Platforms - From CRM to Slack
                            </h2>
                        </div>

                        <div className="relative mx-auto mt-6 max-w-[1000px] overflow-hidden">
                            {/* Gradient Fade for Marquee */}
                            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-6 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

                            <div className="space-y-6">
                                {/* Marquee Row 1 */}
                                <div className="flex animate-scroll-left gap-6">
                                    {[...row1Logos, ...row1Logos].map((logo, i) => (
                                        <div key={`row1-${i}`} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-7 h-7">
                                                {logo.component}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Marquee Row 2 */}
                                <div className="flex animate-scroll-right gap-6">
                                    {[...row2Logos, ...row2Logos].map((logo, i) => (
                                        <div key={`row2-${i}`} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-7 h-7">
                                                {logo.component}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Marquee Row 3 */}
                                <div className="flex animate-scroll-left-slow gap-6">
                                    {[...row3Logos, ...row3Logos].map((logo, i) => (
                                        <div key={`row3-${i}`} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-7 h-7">
                                                {logo.component}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-14 text-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-3 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-700"
                                >
                                    Get AI Agent Integration
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS SECTION (Steps To Engage - Cream Cards) */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                        <div className="mb-10 text-center">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                                Steps To Engage
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                Our Digital Product Development Process We Follow
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Timeline Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-[28%] left-0 right-0 h-0.5 bg-orange-200 z-0"></div>

                            <div className="grid gap-6 md:grid-cols-5 relative z-10">
                                {[
                                    { step: 1, title: "Strategy", desc: "We conduct in-depth market research to align product vision with business goals." },
                                    { step: 2, title: "Planning", desc: "Our planning phase translates strategy into actionable steps, timelines, and milestones." },
                                    { step: 3, title: "Development", desc: "Using agile methodologies, we build innovative digital products focusing on quality." },
                                    { step: 4, title: "Testing", desc: "Rigorous testing ensures a seamless, user-friendly experience meeting all standards." },
                                    { step: 5, title: "Launch", desc: "We execute a well-coordinated launch plan to maximize user engagement from day one." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex flex-col h-full bg-[#FFFBF2] rounded-3xl p-6 border border-orange-50 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300"
                                    >
                                        <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[#FACC15] text-black text-xs font-bold rounded-full mb-6 self-start shadow-sm">
                                            Step {item.step}
                                        </span>
                                        <h3 className="font-bold text-xl text-gray-900 mb-4">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="mx-auto max-w-[1400px] px-6 text-center relative z-10">
                    <h2 className="text-3xl font-black mb-8 md:text-5xl">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        {service.uniqueValue || "Let's build something extraordinary together."}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-1 hover:bg-orange-600"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
