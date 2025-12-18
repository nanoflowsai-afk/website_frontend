import type { NextConfig } from "next";
import path from "path";

const nextConfig = {
  output: "export",


  webpack: (config: any) => {
    config.resolve.alias["@assets"] = path.resolve(process.cwd(), "attached_assets");
    return config;
  },
  allowedDevOrigins: [
    "*.replit.dev",
    "*.repl.co",
    "*.pike.replit.dev",
    "*.sisko.replit.dev",
    "127.0.0.1",
    "localhost",
  ],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
