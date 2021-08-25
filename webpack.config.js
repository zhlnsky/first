const path = require('path');

module.export = {
    entry: './src/index.js',
    output: {
        filename: 'maim.js',
        path: path.resolve(__dirname, 'dist')
    },
    devSerer: {
        compress: true,
        port: 8080,
        hot: true
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}