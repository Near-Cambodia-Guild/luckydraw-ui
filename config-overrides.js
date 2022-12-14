const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = function override(config, env) {
  config.resolve = {
    extensions: ['.tsx', '.js', '.ts', '.jsx'],
    fallback: {
      fs: false,
      child_process: false,
      stream: require.resolve("stream-browserify"),
    }
  }
  config.plugins.push(
    new NodePolyfillPlugin(),
  );
  return config;
}