var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/app\/lib/, /node_modules/],
        loader: 'ng-annotate!babel'
      },
      {test: /\.html$/, loader: 'raw'},
      {test: /\.(scss|sass)$/, loader: 'style!css!resolve-url!sass'},
      {test: /\.css$/, loader: 'style!css!resolve-url'},
      {test: /\.(ttf|eot|woff|woff2)(\?\S*)?$/, loader: 'file?name=./fonts/[name].[ext]'},
      {test: /\.(jp?g|svg|gif|png)(\?\S*)?$/, loader: 'file?name=./images/[name].[ext]'}
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),
    new CopyWebpackPlugin(
      [
        {
          from: `${ __dirname }/client/app/assets/images`,
          to: `assets/images`
        }
      ]
    ),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
