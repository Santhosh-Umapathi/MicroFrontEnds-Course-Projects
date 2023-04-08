const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products", // Name of the Micro FE
      filename: "remoteEntry.js", // Entry file
      exposes: {
        "./ProductsIndex": "./src/bootstrap", // Alias to the file
      },
      shared: ["faker"], // Packages to share with other Micro FE
      // shared: { // Only load one copy even if different versions are used(Warning!!!)
      //   faker: {
      //     singleton: true, // Only one version of the package is loaded
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
