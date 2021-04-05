const withImages = require('next-images')
const withOffline = require('next-offline')
const withPWA = require('next-pwa')

const nextConfigWithPWA = withPWA({
  pwa: {
    dest: 'public'
  },
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    MONGO_URL: process.env.MONGO_URL,
  },
})

const nextConfigWithOffline = withOffline({ ...nextConfigWithPWA })

module.exports = withImages({
  esModule: true,
  ...nextConfigWithOffline
})
