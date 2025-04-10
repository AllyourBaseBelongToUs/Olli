// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,

  // Skip type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // Skip ESLint during build for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization configuration
  images: {
    domains: ['nexusmarketing.com'],
    formats: ['image/avif', 'image/webp'],
    // Disable image optimization in development for faster builds
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Add webpack configuration to work around CSP restrictions
  webpack: (config, { dev, isServer }) => {
    // Disable eval in development to avoid CSP issues with Kaspersky
    if (dev && !isServer) {
      config.optimization.minimize = true;

      // Force using production-like settings for JavaScript
      // This helps avoid the use of eval() which is blocked by CSP
      config.mode = 'production';
    }

    return config;
  },

  // SWC minify is enabled by default in Next.js 15.1.4

  // Enable compression for better performance
  compress: true,

  // Configure headers for better security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
          {
            // Add Content-Security-Policy header to allow 'unsafe-eval' for development
            // This helps with Kaspersky antivirus restrictions
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development'
              ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' http://gc.kis.v2.scr.kaspersky-labs.com ws://gc.kis.v2.scr.kaspersky-labs.com"
              : "script-src 'self' 'unsafe-inline' http://gc.kis.v2.scr.kaspersky-labs.com ws://gc.kis.v2.scr.kaspersky-labs.com",
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800',
          },
        ],
      },
    ];
  },

  // Configure redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/our-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/our-work',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/get-in-touch',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
