import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
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
                            Privacy Policy
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
                                At NanoFlows AI Software Technologies, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
                            <p className="text-gray-600 mb-4">We may collect information about you in various ways, including:</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you provide when filling out forms or contacting us.</li>
                                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</li>
                                <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-600 mb-4">We use the information we collect for various purposes:</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li>To provide and maintain our services</li>
                                <li>To notify you about changes to our services</li>
                                <li>To provide customer support</li>
                                <li>To gather analysis or valuable information to improve our services</li>
                                <li>To monitor the usage of our services</li>
                                <li>To detect, prevent, and address technical issues</li>
                                <li>To send you newsletters, marketing communications, and promotional materials (with your consent)</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Information Sharing and Disclosure</h2>
                            <p className="text-gray-600 mb-6">
                                We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website and conducting our business.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Data Security</h2>
                            <p className="text-gray-600 mb-6">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Data Retention</h2>
                            <p className="text-gray-600 mb-6">
                                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Your Rights</h2>
                            <p className="text-gray-600 mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Request restriction of processing your personal data</li>
                                <li>Withdraw consent at any time</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Third-Party Links</h2>
                            <p className="text-gray-600 mb-6">
                                Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Children's Privacy</h2>
                            <p className="text-gray-600 mb-6">
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal data from a child under 18, we will take steps to delete that information.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Changes to This Privacy Policy</h2>
                            <p className="text-gray-600 mb-6">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
                            <p className="text-gray-600 mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <p className="text-gray-700 mb-2">
                                    <strong>Email:</strong>{" "}
                                    <a href="mailto:nanoflowsvizag@gmail.com" className="text-orange-600 hover:text-orange-700">
                                        nanoflowsvizag@gmail.com
                                    </a>
                                </p>
                                <p className="text-gray-700 mb-2">
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
