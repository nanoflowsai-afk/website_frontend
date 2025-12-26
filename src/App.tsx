import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './app/RootLayout';
import HomePage from './app/HomePage';

import ServicesPage from './app/services/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './app/contact/ContactPage';
import ProductsPage from './app/products/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import IndustriesPage from './app/industries/IndustriesPage';
import IndustryDetailPage from './app/industries/IndustryDetailPage';
import SubIndustryPage from './app/industries/SubIndustryPage';
import LoginPage from './app/login/LoginPage';
import SignupPage from './app/signup/SignupPage';
import TermsPage from './app/terms/TermsPage';
import PrivacyPolicyPage from './app/privacy-policy/PrivacyPolicyPage';
import CookiePolicyPage from './app/cookie-policy/CookiePolicyPage';
import CareersPage from './app/careers/CareersPage';
import BlogPage from './app/blog/BlogPage';
import BlogPostPage from './app/blog/BlogPostPage';
import AdminPage from './app/admin/AdminPage';
import SeoKeywordsPage from './app/SeoKeywordsPage';
import WebinarsPage from './app/webinars/WebinarsPage';
import WebinarDetailPage from './app/webinars/WebinarDetailPage';
import AiToolsPage from './app/ai-tools/AiToolsPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="admin" element={<AdminPage />} />
                    <Route path="webinars" element={<WebinarsPage />} />
                    <Route path="webinars/:id" element={<WebinarDetailPage />} />
                    <Route path="ai-tools" element={<AiToolsPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="services/:id" element={<ServiceDetailPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="products/:id" element={<ProductDetailPage />} />
                    <Route path="industries" element={<IndustriesPage />} />
                    <Route path="industries/:id" element={<IndustryDetailPage />} />
                    <Route path="industries/:id/:subId" element={<SubIndustryPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="terms" element={<TermsPage />} />
                    <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="cookie-policy" element={<CookiePolicyPage />} />
                    <Route path="careers" element={<CareersPage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="blog/:slug" element={<BlogPostPage />} />
                    <Route path="seo-keywords" element={<SeoKeywordsPage />} />
                    {/* Add other routes here */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
