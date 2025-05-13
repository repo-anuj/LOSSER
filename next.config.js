/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fix for font optimization
  experimental: {
    forceSwcTransforms: true,
  },
  // Configure image domains
  images: {
    domains: [
      'anujkidding-portfolio.vercel.app',
      'via.placeholder.com',
      'festiva-canva.vercel.app',
      'rentriderepeat-website.vercel.app',
      'code-players.vercel.app',
      'portfolio-generator-nine.vercel.app'
    ],
  },
  webpack: (config) => {
    // Fix for motion/react import issues
    config.resolve.alias = {
      ...config.resolve.alias,
      'motion/react': 'framer-motion',
    };
    return config;
  },
};

module.exports = nextConfig;
