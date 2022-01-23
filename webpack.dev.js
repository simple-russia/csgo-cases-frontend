const { merge } = require('webpack-merge');  
const common = require("./webpack.common");   
const port = process.env.PORT || 3000;   
     
     
module.exports = merge(common, {   
     
    mode: "development",   
     
    optimization: {   
      minimize: false, // minify CSS and JS   
    },   
     
    devServer: {   
      host: 'localhost',   
      port: port,   
      historyApiFallback: true,   
      open: true   
    }   
});   
