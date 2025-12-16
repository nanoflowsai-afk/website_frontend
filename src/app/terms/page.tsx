import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              Terms of Service
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
                Welcome to NanoFlows AI Software Technologies. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using the services provided by NanoFlows AI Software Technologies ("Company", "we", "our", or "us"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                NanoFlows provides AI-powered software development, automation solutions, and related technology services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Generative AI Solutions and Custom LLM Systems</li>
                <li>AI Automation and Workflow Solutions</li>
                <li>Custom Software Development</li>
                <li>AI Agents and Chatbots</li>
                <li>Data Analytics and Business Intelligence</li>
                <li>SaaS Platform Development</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-6">
                All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, audio clips, software, and the compilation thereof, are the exclusive property of NanoFlows AI Software Technologies and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Project Deliverables</h2>
              <p className="text-gray-600 mb-6">
                Upon full payment for services rendered, clients receive ownership of the custom software, applications, or solutions developed specifically for them, unless otherwise specified in a separate agreement. Pre-existing frameworks, libraries, and proprietary tools used in development remain the property of NanoFlows.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Payment terms will be specified in individual project agreements or proposals</li>
                <li>All fees are non-refundable unless otherwise stated in writing</li>
                <li>Late payments may incur additional charges as specified in project agreements</li>
                <li>We reserve the right to suspend services for overdue payments</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the maximum extent permitted by law, NanoFlows AI Software Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-6">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Confidentiality</h2>
              <p className="text-gray-600 mb-6">
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of business. This obligation survives the termination of any agreement between the parties.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Termination</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Visakhapatnam, Andhra Pradesh, India.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:nanoflowsvizag@gmail.com" className="text-orange-600 hover:text-orange-700">
                    nanoflowsvizag@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+918019358855" className="text-orange-600 hover:text-orange-700">
                    +91 8019358855
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> TF-301, 1-152, Sapthagiri Nagar, Revenue Ward-70, Near Chinamushidiwada, Visakhapatnam - 530051
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <Link
                href="/"
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
