module.exports = {
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination:
        '/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING/api/:path*'
    }
  ]
}
