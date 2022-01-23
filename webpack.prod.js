const { merge } = require('webpack-merge');  
const common = require("./webpack.common");  
 
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");  
const TerserPlugin = require('terser-webpack-plugin');  
   
   
module.exports = merge(common, {  
   
    mode: "production",  
   
    optimization: {  
      minimizer: [  
        new CssMinimizerPlugin(),  
        new TerserPlugin(),  
      ],  
      minimize: true, // minify CSS and JS  
    },  
});  
