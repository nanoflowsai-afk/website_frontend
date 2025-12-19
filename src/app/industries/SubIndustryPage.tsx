import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { industries, getRelatedServices } from "@/lib/data/industries";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SubIndustryPage() {
    const { id, subId } = useParams<{ id: string; subId: string }>();
    const navigate = useNavigate();
    const industry = industries.find((ind) => ind.id === id);
    const subIndustry = industry?.subIndustries.find((sub) => sub.id === subId);

    useEffect(() => {
        if (!industry || !subIndustry) {
            // navigate('/404');
        }
    }, [industry, subIndustry, navigate]);

    if (!industry || !subIndustry) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Sub-Industry Not Found</h1>
                    <Link to="/industries" className="text-orange-600 font-semibold hover:underline">Back to Industries</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-24 md:py-32 min-h-[450px] md:min-h-[550px]">
                <div className="absolute inset-0">
                    <img
                        src={industry.image}
                        alt={`NanoFlows ${subIndustry.name} AI Solutions`}
                        title={`NanoFlows ${subIndustry.name} AI Solutions`}
                        className="object-cover w-full h-full absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/65 to-slate-900/55" > </div>
                </div>
                <div className="relative mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-4xl" >
                        <div className="mb-4 flex flex-wrap items-center gap-3" >
                            <Link
                                to={`/industries/${industry.id}`}
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                            >
                                <span className="text-xl" > {industry.icon} </span>
                                <span className="text-sm font-medium" > {industry.name} </span>
                            </Link>
                            <span className="text-white/50" >→</span>
                            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-white backdrop-blur-sm" >
                                <span className="text-xl" > {subIndustry.icon} </span>
                                <span className="text-sm font-semibold" > {subIndustry.name} - {industry.name} </span>
                            </div>
                        </div>
                        <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 px-4 py-2 text-4xl shadow-lg" >
                            {subIndustry.icon}
                        </div>
                        <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl" >
                            {subIndustry.name}
                        </h1>
                        <p className="mt-4 text-xl text-orange-300 font-semibold" >
                            {subIndustry.tagline}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4" >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                Get Started Today →
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition hover:-translate-y-0.5"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-gray-50 to-white py-20" >
                <div className="mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-4xl" >
                        <div className="mb-8 text-center" >
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                {subIndustry.name} Sub - Industry Overview
                            </h2>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" >
                            <p className="text-lg text-gray-700 leading-relaxed" >
                                {subIndustry.overview}
                            </p>
                            <p className="mt-6 text-orange-600 font-semibold italic" >
                                We build trust - first, AI - powered {subIndustry.name.toLowerCase()} systems — not just apps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20" >
                <div className="mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-4xl" >
                        <div className="mb-8 text-center" >
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                Why {subIndustry.name} Choose Nano Flows
                            </h2>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-gray-50 p-8" >
                            <p className="mb-6 text-gray-700 font-medium" >
                                {subIndustry.whyChoose.intro}
                            </p>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-500" >
                                Nano Flows advantage:
                            </p>
                            <div className="space-y-3" >
                                {subIndustry.whyChoose.points.map((point, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                                    >
                                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white" >
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 font-medium" > {point} </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 p-4" >
                                <p className="text-center text-orange-800 font-semibold" >
                                    Result: A {subIndustry.name.toLowerCase()} product investors and users trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20" >
                <div className="mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-4xl" >
                        <div className="mb-8 text-center" >
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                What We Build for {subIndustry.name}
                            </h2>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" >
                            <p className="mb-6 text-gray-700 font-medium" >
                                {subIndustry.whatWeBuild.intro}
                            </p>
                            <div className="grid gap-4 md:grid-cols-2" >
                                {subIndustry.whatWeBuild.solutions.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-orange-200 hover:bg-orange-50"
                                    >
                                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-white text-sm font-bold" >
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 font-medium" > {solution} </p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-center text-gray-600 italic" >
                                {subIndustry.whatWeBuild.footer}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20" >
                <div className="mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-4xl" >
                        <div className="mb-8 text-center" >
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                Core {subIndustry.name} Capabilities Included
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-gray-600" >
                                Every {subIndustry.name.toLowerCase()} product we build includes:
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" >
                            {subIndustry.coreCapabilities.map((capability, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                                >
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white" >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900" > {capability} </h3>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center text-gray-600 font-medium" >
                            Security, performance, and accuracy are non - negotiable.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20" >
                <div className="mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-4xl" >
                        <div className="mb-8 text-center" >
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                Ideal For + Business Outcomes
                            </h2>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-2" >
                            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" >
                                <h3 className="mb-6 text-xl font-bold text-gray-900" > Ideal for: </h3>
                                <div className="space-y-3" >
                                    {subIndustry.idealFor.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
                                        >
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold" >
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 font-medium" > {item} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm" >
                                <h3 className="mb-6 text-xl font-bold text-gray-900" > Business outcomes: </h3>
                                <div className="space-y-3" >
                                    {subIndustry.businessOutcomes.map((outcome, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 p-4"
                                        >
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white" >
                                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700 font-medium" > {outcome} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20" >
                <div className="mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-5xl" >
                        <div className="mb-10 text-center" >
                            <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600" >
                                Our Services
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                                Related Services for {subIndustry.name}
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-gray-600" >
                                Explore the AI services that best complement your {subIndustry.name.toLowerCase()} needs and accelerate your digital transformation.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" >
                            {getRelatedServices(subIndustry, industry.id).map((service, index) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl flex flex-col h-full"
                                >
                                    <div className="relative h-40 overflow-hidden flex-shrink-0" >
                                        <img
                                            src={service.image}
                                            alt={`${service.title} - NanoFlows ${service.category} Service`}
                                            title={service.title}
                                            className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" > </div>
                                    </div>
                                    <div className="p-5 text-center flex flex-col flex-1" >
                                        <span className="mb-2 inline-block text-xs font-medium text-orange-500 uppercase tracking-wide" >
                                            {service.category}
                                        </span>
                                        <h3 className="mb-2 text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors" >
                                            {service.title}
                                        </h3>
                                        <p className="mb-4 text-sm text-gray-600 leading-relaxed flex-1" >
                                            {service.description}
                                        </p>
                                        <Link
                                            to={`/services/${service.id}`}
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 mt-auto"
                                        >
                                            Learn More<span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center" >
                            <Link
                                to="/services"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                View All Our Services
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20" >
                <div className="mx-auto max-w-[1400px] px-6" >
                    <div className="mx-auto max-w-3xl text-center" >
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-3xl shadow-lg" >
                            {subIndustry.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl" >
                            Ready to Transform Your {subIndustry.name} Business ?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600" >
                            Let's discuss how our AI solutions can help you automate operations,
                            reduce costs, and deliver exceptional experiences to your customers.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row" >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                            >
                                Schedule a Demo →
                            </Link>
                            <Link
                                to={`/industries/${industry.id}`}
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50"
                            >
                                ← Back to {industry.name}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
