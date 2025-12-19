import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import SubIndustryGrid from "./SubIndustryGrid";
import { useEffect } from "react";

import { industries } from "@/lib/data/industries";


export default function IndustryDetailPage() {
    const { id } = useParams<{ id: string }>();
    // Use navigate in useEffect if not found, or just return not found UI
    const navigate = useNavigate();
    const industry = industries.find((ind) => ind.id === id);

    useEffect(() => {
        if (!industry) {
            // Option to redirect to 404 or show 404 component
            // navigate('/404');
        }
    }, [industry, navigate]);


    if (!industry) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
                    <Link to="/industries" className="text-orange-600 font-semibold hover:underline">Back to Industries</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0">
                    <img
                        src={industry.image}
                        alt={industry.imageAlt}
                        title={`NanoFlows ${industry.name} AI Solutions`}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-slate-900/50"></div>
                </div>
                <div className="relative mx-auto max-w-[1400px] px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
                            <span className="text-2xl">{industry.icon}</span>
                            <span className="text-sm font-semibold uppercase tracking-[0.1em]">
                                {industry.name}
                            </span>
                        </div>
                        <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
                            Sub-Industries We Serve
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            {industry.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-500">
                            Specialized Solutions
                        </p>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                            Choose Your {industry.name} Segment
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            We offer tailored AI solutions for each sub-industry within {industry.name.toLowerCase()}.
                            Select your segment to explore how we can transform your business.
                        </p>
                    </div>

                    <SubIndustryGrid subIndustries={industry.subIndustries} industryId={industry.id} />
                </div>
            </section>

            <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                            Don&apos;t See Your Specific Segment?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            We work with businesses across all segments within {industry.name.toLowerCase()}.
                            Let&apos;s discuss your unique requirements and build a custom AI solution for your business.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                            >
                                Contact Us →
                            </Link>
                            <Link
                                to="/industries"
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50"
                            >
                                ← Back to Industries
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
