const path = require("path");
const webpack = require("webpack");
const { StatsWriterPlugin } = require("webpack-stats-plugin");

const config = {
  mode: "development",
  context: __dirname,
  output: {
    path: path.join(__dirname, "dist/"),
  },
  plugins: [
    new StatsWriterPlugin({
      fields: ["assetsByChunkName", "assets", "entrypoints"],
    }),
  ],
  entry: "./src/index.js",
};

module.exports = config;
