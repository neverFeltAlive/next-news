const { i18n } = require('./next-i18next.config');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n,
  experimental: {
    appDir: true,
  },
  reactStrictMode: process.env.NODE_ENV === 'development',
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    DADATA_API_KEY: process.env.DADATA_API_KEY,
    DADATA_API_SECRET: process.env.DADATA_API_SECRET,
  },
});
