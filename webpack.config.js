const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: ['./src/main.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
