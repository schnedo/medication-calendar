const withPWA = require('next-pwa')

const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  basePath: '/medication-calendar',
  assetPrefix: '/medication-calendar/',
})
