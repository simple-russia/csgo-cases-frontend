const { merge } = require('webpack-merge');  
const common = require("./webpack.common");  
 
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");  
const TerserPlugin = require('terser-webpack-plugin');  
   
   
module.exports = merge(common, {  

    output: {
      // publicPath: "https://cdn-ru.alinguo.com/assets/",
    },

    mode: "production",  
   
    optimization: {  
      minimizer: [  
        new CssMinimizerPlugin(),  
        new TerserPlugin(),  
      ],  
      minimize: true, // minify CSS and JS  
    },

    // module: {
    //   generator: {
    //     "javascript/auto": {
    //       publicPath: "js/"
    //     }
    //   }
    // },
});  
