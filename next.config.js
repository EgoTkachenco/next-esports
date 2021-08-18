console.log(process.env.NODE_ENV)
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  basePath: '/next-esports',
  assetPrefix: '/next-esports/',
  images: {
    loader: 'imgix',
    path:
      process.env.NODE_ENV === 'production'
        ? 'https://egotkachenco.github.io/next-esports/'
        : 'http://localhost:3000/next-esports',
  },

  env: {
    BACKEND_URL: '/next-esports',
  },
}
