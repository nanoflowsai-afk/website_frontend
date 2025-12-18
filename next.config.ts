import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {

  webpack: (config) => {
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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
