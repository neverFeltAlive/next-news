const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  reactStrictMode: process.env.NODE_ENV === 'development',
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    DADATA_API_KEY: process.env.DADATA_API_KEY,
    DADATA_API_SECRET: process.env.DADATA_API_SECRET,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
});
