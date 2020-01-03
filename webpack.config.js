module.exports = {
  module: {
    rules: [
      // Babel loader will use your project’s babel.config.js
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}