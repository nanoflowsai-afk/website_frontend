import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/data/products';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="pt-32 pb-20 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
                    <p className="mt-4 text-gray-600">The product you are looking for does not exist.</p>
                    <Link to="/products" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        View All Products
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-32">
                <div className="absolute inset-0">
                    <img
                        src={product.heroImage}
                        alt={`${product.name} Hero Banner`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>
                </div>
                <div className="relative mx-auto max-w-[1400px] px-6">
                    <Link to="/products" className="inline-flex items-center gap-2 text-sm text-white hover:text-gray-100 mb-8">
                        ← Back to Products
                    </Link>
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                            {product.name}
                        </h1>
                        <p className="mt-4 text-xl text-white/90 font-semibold">{product.tagline}</p>
                        <p className="mt-6 text-lg text-white/80 leading-relaxed">
                            {product.description}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                            >
                                Request Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                            Capabilities
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                            What It Can Do
                        </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {product.capabilities.map((cap) => (
                            <div key={cap.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-orange-200 transition">
                                <div className="text-4xl mb-4">{cap.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900">{cap.title}</h3>
                                <p className="mt-2 text-gray-600 text-sm">{cap.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                            Key Features
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                            Built for Performance
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {product.keyFeatures.map((feature, idx) => (
                            <div key={feature.title} className="flex items-start gap-4 rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                                    <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-[1400px] px-6">
                    <div className="text-center mb-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-600">
                            Comparison
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                            Traditional vs NanoFlows
                        </h2>
                    </div>
                    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Feature
                                    </th>
                                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Traditional
                                    </th>
                                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-orange-600">
                                        NanoFlows
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.comparison.map((row, idx) => (
                                    <tr key={row.feature} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="px-4 py-3 text-gray-700">{row.feature}</td>
                                        <td className="px-4 py-3 text-center text-gray-500">{row.traditional}</td>
                                        <td className="px-4 py-3 text-center font-medium text-green-600">{row.nanoflows}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
