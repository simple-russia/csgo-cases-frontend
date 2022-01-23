const path = require("path");  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
   
   
module.exports = {  
   entry: {  
     'main': { import: "./src/index.js", dependOn: 'vendor'},  
     'vendor': { import: "./src/vendor.js" },  
   },  
   output: {  
       filename: '[name].[hash].js',  
       path: path.resolve(__dirname, "build"),  
   },  
   module: {  
       rules: [  
         // First Rule  
         {  
           test: /\.(js)$/,  
           exclude: /node_modules/,  
           use: [  
             'babel-loader',  
           ]  
         },  
         // Second Rule  
         {  
           test: /\.s?css$/,  
           use: [  
             MiniCssExtractPlugin.loader,  
             'css-loader',  
             'sass-loader',  
           ]  
         }  
       ]  
   },  
   plugins: [  
     new HtmlWebpackPlugin({  
       template: 'public/index.html',  
       minify: true, // minify HTML  
     }),  
     new MiniCssExtractPlugin({filename: "[name].[hash].css"})  
   ],  
}  
