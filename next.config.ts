// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: ['nexusmarketing.com'],
    formats: ['image/avif', 'image/webp'],
    // Disable image optimization in development for faster builds
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
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
