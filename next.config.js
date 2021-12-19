module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: [process.env.NEXT_PUBLIC_SERVER_URL],
    loader: 'imgix',
    path:
      process.env.NODE_ENV === 'production'
        ? 'https://outrun.gg'
        : 'http://localhost:3000',
  },
}
