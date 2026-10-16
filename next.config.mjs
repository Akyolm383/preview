/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/og.png",
        destination: "/api/og",
      },
      {
        source: "/api/og.png",
        destination: "/api/og",
      },
    ];
  },
};

export default nextConfig;
