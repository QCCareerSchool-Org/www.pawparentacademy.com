import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'kajabi-app-assets.kajabi-cdn.com',
    ],
  },
};

export default nextConfig;
