import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nanoflows.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NanoFlows | AI Software Technologies - Generative AI & Automation Solutions",
    template: "%s | NanoFlows AI",
  },
  description: "NanoFlows AI Software Technologies delivers cutting-edge Generative AI, Agentic AI systems, and business automation solutions. Transform your operations with custom AI development, intelligent chatbots, and enterprise automation.",
  keywords: [
    "AI software",
    "generative AI",
    "agentic AI",
    "business automation",
    "AI development",
    "machine learning",
    "custom LLM",
    "AI chatbots",
    "enterprise AI",
    "automation solutions",
    "NanoFlows",
    "artificial intelligence",
    "AI company",
    "AI services",
    "intelligent automation",
    "AI integration",
    "digital transformation",
    "AI consulting",
    "AI technology",
    "smart automation",
    "AI workflow",
    "process automation",
    "AI agents",
    "conversational AI",
    "natural language processing",
    "NLP solutions",
    "AI platforms",
    "machine learning services",
    "deep learning",
    "neural networks",
    "AI for business",
    "enterprise solutions",
    "AI software development",
    "custom AI solutions",
    "AI implementation",
    "AI strategy",
    "robotic process automation",
    "RPA solutions",
    "cognitive automation",
    "AI analytics",
    "predictive AI",
    "AI optimization",
    "intelligent systems",
    "AI infrastructure",
    "cloud AI",
    "AI as a service",
    "AIaaS",
    "SaaS AI",
    "AI products",
    "AI tools",
  ],
  authors: [{ name: "NanoFlows AI Software Technologies" }],
  creator: "NanoFlows AI Software Technologies",
  publisher: "NanoFlows AI Software Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NanoFlows AI Software Technologies",
    title: "NanoFlows | AI Software Technologies - Generative AI & Automation Solutions",
    description: "Transform your business with cutting-edge Generative AI, Agentic AI systems, and enterprise automation solutions by NanoFlows.",
    images: [
      {
        url: "/og-services.png",
        width: 1200,
        height: 630,
        alt: "NanoFlows AI Software Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoFlows | AI Software Technologies",
    description: "Cutting-edge Generative AI, Agentic AI, and automation solutions for modern businesses.",
    images: ["/og-services.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/nanoflows-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/nanoflows-logo.png" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
