import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // <--- THIS makes Next.js produce static HTML + assets
  images: {
    unoptimized: true,    // required because next/image optimization requires a server
  },
  basePath: "",            // usually empty unless you're hosting at sub-path
};

module.exports = nextConfig;

export default nextConfig;
