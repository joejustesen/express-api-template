const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const prodConfig = require('./webpack.prod.js');
const devConfig = require('./webpack.dev.js');

module.exports = (mode) => {
  if (mode === 'production') {
    return merge(commonConfig, prodConfig, { mode });
  }

  return merge(commonConfig, devConfig, { mode });
};
