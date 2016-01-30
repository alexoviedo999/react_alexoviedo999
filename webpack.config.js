
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./src/data')

//npm start -- to start dev server
//npm run prod - for production
// put index and bundle files in the react_alexoviedo999 folders in the respective alexoviedo999.github.io folders

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'css-loader!cssnext-loader' }
    ]
  },

  cssnext: {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]
}
