import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    quietDeps: true, // hide deprecation warnings from node_modules
    // If your sass-loader / Sass version supports it, you can also do:
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
  reactCompiler: true,
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'kajabi-app-assets.kajabi-cdn.com',
    ],
  },
};

export default nextConfig;
