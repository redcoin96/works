/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: '@use "styles/mixins.scss" as *;',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
