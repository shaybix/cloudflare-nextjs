const optimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  withPlugins: [
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here


};

module.exports = nextConfig;
