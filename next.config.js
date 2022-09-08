/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true
  },

  //gitignore

  i18n: {
    locales: ["az", "ru"],
    defaultLocale: "az",
    localeDetection: false,
    prefix: "",
    directory: "./locales"
  }
}

module.exports = nextConfig
