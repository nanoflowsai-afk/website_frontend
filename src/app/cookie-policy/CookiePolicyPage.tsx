import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
                <div className="relative mx-auto max-w-[1400px] px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.1em] text-orange-400">
                            Legal
                        </p>
                        <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
                            Cookie Policy
                        </h1>
                        <p className="mt-6 text-lg text-gray-300">
                            Last updated: December 2024
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="mx-auto max-w-[900px] px-6">
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed mb-8">
                                This Cookie Policy explains how NanoFlows AI Software Technologies ("we", "us", or "our") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. What Are Cookies?</h2>
                            <p className="text-gray-600 mb-6">
                                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Types of Cookies We Use</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Essential Cookies</h3>
                            <p className="text-gray-600 mb-4">
                                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Analytics Cookies</h3>
                            <p className="text-gray-600 mb-4">
                                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's structure and content.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Functional Cookies</h3>
                            <p className="text-gray-600 mb-4">
                                These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we have added to our pages.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Marketing Cookies</h3>
                            <p className="text-gray-600 mb-6">
                                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Cookie Details</h2>
                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cookie Name</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-600">_session</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">Session management</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">Session</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-600">_ga</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">Google Analytics - distinguishes users</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">2 years</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-600">_gid</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">Google Analytics - distinguishes users</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">24 hours</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm text-gray-600">preferences</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">Stores user preferences</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">1 year</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. How to Manage Cookies</h2>
                            <p className="text-gray-600 mb-4">
                                You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and some functionality may no longer be available.
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through their settings. The exact process varies between browsers.</li>
                                <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                                <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Third-Party Cookies</h2>
                            <p className="text-gray-600 mb-6">
                                Some cookies on our website are placed by third-party services that appear on our pages. We do not control the dissemination of these cookies. You should check the third-party websites for more information about these cookies and how to manage them.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Updates to This Policy</h2>
                            <p className="text-gray-600 mb-6">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Contact Us</h2>
                            <p className="text-gray-600 mb-4">
                                If you have any questions about our use of cookies, please contact us:
                            </p>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <p className="text-gray-700 mb-2">
                                    <strong>Email:</strong>{" "}
                                    <a href="mailto:nanoflowsvizag@gmail.com" className="text-orange-600 hover:text-orange-700">
                                        nanoflowsvizag@gmail.com
                                    </a>
                                </p>
                                <p className="text-gray-700">
                                    <strong>Address:</strong> TF-301, 1-152, Sapthagiri Nagar, Revenue Ward-70, Near Chinamushidiwada, Visakhapatnam - 530051
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                            >
                                <span>←</span> Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
