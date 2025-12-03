import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/digital-garden",       // <-- your repo name
  assetPrefix: "/digital-garden/",   // <-- for CSS/JS/assets
};

module.exports = nextConfig;

module.exports = nextConfig;

export default nextConfig;
