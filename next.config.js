/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,

  images: {
    unoptimized: true,
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
