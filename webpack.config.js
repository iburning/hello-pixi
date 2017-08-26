/**
 * @fileoverview webapck
 * @author burning (www.cafeinit.com)
 * @version 2017.08.26
 */

const path = require('path')
const webpack = require('webpack')

let host = process.env.LOCALHOST || 'localhost'

module.exports = {
  entry: {
    'chapter_01': './src/chapter_01/main.js',
    'chapter_02': './src/chapter_02/main.js',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]/main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js'
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './dist',
    host: host,
    // port: config.port
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
