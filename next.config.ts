import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/yikun-homepage" : "",
  assetPrefix: isGithubPages ? "/yikun-homepage/" : "",
  trailingSlash: true,
};

export default nextConfig;
