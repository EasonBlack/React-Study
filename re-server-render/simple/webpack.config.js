module.exports = {
  mode: "development",
  devtool: 'inline-source-map', 
                         
  entry: "./app/index.js",      
  output: {                  
      path: __dirname,  
      filename: "bundle.js"
  },
  module: {
      rules: [
          {
              test: /\.js?$/,
              exclude:/node_modules/,
              use: [{
                loader: 'babel-loader', query: { presets: ['es2015', 'react'] ,  plugins: ['transform-class-properties']}
              }]
          }
      ]
  }
};