module.exports = {
  webpack: config => {
    config.output.library = "reactApp";
    config.output.libraryTarget = "umd";
    config.output.publicPath = "http://localhost:8200/"; // 此应用自己的端口号
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
      return config;
    };
  }
}

