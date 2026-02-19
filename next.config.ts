import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    quietDeps: true, // hide deprecation warnings from node_modules
    // If your sass-loader / Sass version supports it, you can also do:
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'kajabi-storefronts-production.kajabi-cdn.com' },
      { protocol: 'https', hostname: 'kajabi-app-assets.kajabi-cdn.com' },
    ],
  },
};

export default nextConfig;
