const path = require('path');
module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'JSEncrypt',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'window',
    path: path.resolve(__dirname, 'bin'),
    filename: 'jsencrypt.js',
  },
  mode: 'development',
  performance: { hints: false }
};