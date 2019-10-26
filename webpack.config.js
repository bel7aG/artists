const path = require('path') //npm module for absolute path like  path.resolve(__dirname, './build')
const webpack = require('webpack')

module.exports = {
  plugins: [
    // jQuery globally
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    loaders: [
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      }
    ]
  }
}
