const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'timemachine',
      type: 'umd'
    },
    globalObject: 'this',
  },
  externals: {
    timemachine: {
      commonjs: 'timemachine',
      commonjs2: 'timemachine',
      amd: 'timemachine',
      root: '_',
    }
  }
};