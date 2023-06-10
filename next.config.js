/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
  },
  env: {
    COIN_RANKING_API: process.env.COIN_RANKING_API,
  },
};

module.exports = nextConfig;
