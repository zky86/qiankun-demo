const { name } = require('./package');
const path = require("path");
module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };

    let rule = config.module.rules.find((rule) => rule.oneOf);

    const ruleBabel = rule.oneOf[1];
    ruleBabel.options.plugins.push([
      "styled-jsx/babel",
      { optimizeForSpeed: true },
    ]);

    return config;
  },

  devServer: _ => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.port = "8300";

    config.hot = true;
    config.watchContentBase = true;
    config.liveReload = true;

    return config;
  },
};
