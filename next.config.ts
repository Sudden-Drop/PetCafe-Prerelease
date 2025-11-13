import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: process.env.assetPrefix
    ? process.env.AssetPrefix
    : ''
};

export default nextConfig;
