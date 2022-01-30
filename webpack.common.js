const path = require("path");  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
   
   
module.exports = {  
   entry: {  
     'main': { import: "./src/index.js", dependOn: 'vendor'},  
     'vendor': { import: "./vendor.js" },  
   },  
   output: {  
       filename: '[name].[hash].js',  
       path: path.resolve(__dirname, "build"),  
   },
   resolve: {
    alias: {
      Jstest: path.resolve(__dirname, 'src/jstest/'),
      Img: path.resolve(__dirname, 'src/img/'),
    }
   },
   module: {  
       rules: [  
         // First Rule  
         {  
           test: /\.(js)$/i,  
           exclude: /node_modules/,  
           use: [  
             'babel-loader',  
           ],
         },  
         // Second Rule  
         {  
           test: /\.s?css$/,  
           use: [  
             {
               loader: MiniCssExtractPlugin.loader,
               options: {
                //  publicPath: 'https://a.com/css/'   // it works only with assets inside css
               }
             },  
             'css-loader',  
             'sass-loader',  
           ],
         },
         // third rule
         {
           test: /\.jpg$/,
           type: 'asset/resource',
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
