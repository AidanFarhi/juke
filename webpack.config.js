
module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    tedious: 'empty',
    dgram: 'empty',
    child_process: 'empty',
  },
}
