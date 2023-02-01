const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
    reactMode: 'concurrent',
  },
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
});
