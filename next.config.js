/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  //gitignore

  i18n: {
    locales: ["az", "ru"],
    defaultLocale: "az",
    localeDetection: false,
    prefix: "",
    directory: "./locales",
  },
};

module.exports = nextConfig;
