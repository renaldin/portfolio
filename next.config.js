/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  swcMinify: true,
  images: {
    domains: ['renaldin.github.io'],
    unoptimized: true,
  },
}

module.exports = nextConfig
