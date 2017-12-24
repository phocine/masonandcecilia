module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cecilia & Mason',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Villa Nuits Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Load and pre-process CSS
  */
  css: [
    {src: '@/assets/css/main.scss'}
  ],
  /*
  ** Build configuration
  */
  build: {
    // publicPath: 'https://phocine.github.io/masonandcecilia/',
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
