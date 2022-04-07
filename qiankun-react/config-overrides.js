const path = require("path");
module.exports = {
  webpack: config => {
    config.output.publicPath = '/react/';
    config.output.library = "reactApp";
    config.output.libraryTarget = "umd";
    // config.output.publicPath = "http://localhost:8200/"; // 此应用自己的端口号
    config.output.globalObject = "window";
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };

    let rule = config.module.rules.find((rule) => rule.oneOf);

    const ruleBabel = rule.oneOf[3];
    ruleBabel.options.plugins.push([
      "styled-jsx/babel",
      { optimizeForSpeed: true },
    ]);
    return config;
  },
  devServer: configFunction => {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.port = "8200";
      config.headers = {
        "Access-Control-Allow-Origin": "*"
      };
      config.historyApiFallback = true;
      config.hot = true;
      config.open = false;
      config.liveReload = true;
      return config;
    };
  }
}

