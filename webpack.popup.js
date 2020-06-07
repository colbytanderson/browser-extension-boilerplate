const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  entry: {
    popup: "./src/app/popup/popup.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public/dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/app/popup/popup.ejs"
    })
  ]
});
