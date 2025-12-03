/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/digital-garden",
  assetPrefix: "/digital-garden/",
};

module.exports = nextConfig;