module.exports = {
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: '<your-swiggy-api-endpoint>/api/:path*'
    }
  ]
}
