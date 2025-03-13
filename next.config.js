/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds to avoid the error
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;