const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, '../src/index.js'),
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'my-cool-component.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: [
            ['transform-react-jsx', {
              pragma: 'h'
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'raw-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(yml|yaml)$/,
        include: resolve(__dirname, '../translations'),
        loaders: [
          'json-loader',
          'yaml-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, '../demo'),
    publicPath: '/dist/'
  }
};
