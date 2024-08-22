/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  crossOrigin: "anonymous",
  images: {   
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "dev.to",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**"
      },
    ]
  }
};

export default nextConfig;
