/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    dynamicIO: true,
    taint: true
  }
};

export default nextConfig;
