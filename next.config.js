const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = withPlugins([
  withImages({}),
  withReactSvg({
    include: path.resolve(__dirname, "./public/images"),
    webpack(config, options) {
      return config;
    },
  }),
]);