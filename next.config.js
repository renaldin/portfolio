/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
}
// const nextConfig = {
//   output: "export",
//   distDir: "out",
//   assetPrefix: "./",
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['renaldin.github.io'],
//     unoptimized: true,
//   },
// }

module.exports = nextConfig
