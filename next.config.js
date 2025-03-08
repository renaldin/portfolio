/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  assetPrefix: "./",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['renaldin.github.io'],
    unoptimized: true,
  },
}

module.exports = nextConfig
