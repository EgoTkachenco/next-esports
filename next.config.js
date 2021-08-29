module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  // basePath: '/next-esports',
  // assetPrefix: '/next-esports/',
  images: {
    loader: 'imgix',
    path:
      process.env.NODE_ENV === 'production'
        ? 'https://outrun.gg'
        : 'http://localhost:3000',
  },

  // env: {
  //   BACKEND_URL: '/next-esports',
  // },
}
