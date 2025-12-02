/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
