import type { NextConfig } from "next";

// BASE_PATH is set for the interim GitHub Pages deploy (/hgc-website).
// On Vercel + the real domain it is unset and the site serves from root.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
