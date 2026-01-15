/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.yourselfpilates.pt",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;