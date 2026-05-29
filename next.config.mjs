/** @type {import('next').NextConfig} */

// basePath/assetPrefix are needed when the site is served from a sub-path
// (GitHub Pages project site: https://<user>.github.io/<repo>/). Keep it
// overridable via env so local dev and root-domain hosting work without a prefix.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
