console.log(process.env.NODE_ENV)
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    loader: "imgix",
    path: process.env.NODE_ENV === 'production' ? 'https://egotkachenco.github.io/next-esports/out/' : 'http://localhost:3000/',
  },
}