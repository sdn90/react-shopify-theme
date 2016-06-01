module.exports = {
  entry: './examples/index.jsx',
  output: './examples/dist/bundle.js',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  devtool: 'inline-source-map'
};
