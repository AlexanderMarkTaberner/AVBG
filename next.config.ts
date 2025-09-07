import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "http", // or http
        hostname: process.env.NEXT_PUBLIC_HOST!, // if your website has no www, drop it
      },
    ],
  },
  output: "standalone",
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {
      common: {
        name: "common",
        chunks: "all",
      },
    };

    return config;
  },
};

export default nextConfig;
