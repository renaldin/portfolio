/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['renaldin.github.io'],
  }
}

module.exports = nextConfig
