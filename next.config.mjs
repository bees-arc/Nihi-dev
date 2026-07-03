/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nihi.no",
      },
    ],
  },
};

export default nextConfig;
