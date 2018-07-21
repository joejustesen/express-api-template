module.exports = {
  entry: [
    './src/index.js',
  ],
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: 'eslint-loader',
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    path: __dirname,
    filename: 'server.js',
  },
  target: 'node',
};
