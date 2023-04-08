const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

// Only used in development
const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8085/",
  },
  devServer: {
    port: 8085,
    historyApiFallback: {
      index: "/index.html",
    },
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow CORS
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies, // Sharing all dependencies from package.json
    }),
  ],
};

// Merge the common config with the dev config
module.exports = merge(commonConfig, devConfig);
