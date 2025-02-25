import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/react-website/' : '',
  basePath: isProd ? '/react-website' : '',
  output: 'export'
};

export default nextConfig;
