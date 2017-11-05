module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  devtool: (process.env.NODE_ENV === 'develop') ? 'inline-source-map' : '',
  resolve: {
    extensions: ['.js']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
