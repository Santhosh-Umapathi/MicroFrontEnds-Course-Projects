const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

// Environment variable for production domain
const domain = process.env.PRODUCTION_DOMAIN;

// Production Config
const prodConfig = {
  mode: "production",
  // To avoid caching issues
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        "@marketing": `marketing@${domain}/marketing/latest/remoteEntry.js`,
        "@auth": `auth@${domain}/auth/latest/remoteEntry.js`,
        "@dashboard": `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies, // Sharing all dependencies from package.json
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
