const fs = require('fs');
const path = require('path');
// const webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

function deleteJS(dir) {
  var files = [];
  if (fs.existsSync(dir)) {
    files = fs.readdirSync(dir);
    files.forEach(function (file, index) {
      var curDir = dir + "/" + file;
      if (fs.statSync(curDir).isDirectory()) { // recurse  
        deleteJS(curDir);
      } else { // delete file  
        fs.unlinkSync(curDir);
      }
    });
    fs.rmdirSync(dir);
  }
};

//总是清除之前生成的文件
var distDir = path.resolve(__dirname, '..', '..', 'static', 'js', 'mobile-background');
deleteJS(distDir);

var cssDir = path.resolve(__dirname, '..', '..', 'static', 'css');


module.exports = {
  entry: {
    vendor: ['vue', 'vue-router', 'axios', 'iview', 'better-scroll', 'vue-awesome-swiper'],
    cssVendor: ['bootstrap', 'iview-style', 'style'],
    app: ['./frontend/mobile-background/js/app.js']
  },
  output: {
    filename: '[name].min.js',
    path: distDir,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve('frontend/mobile-background'),
      'iview-style': 'iview/dist/styles/iview.css',
      'bootstrap': path.resolve(cssDir + '/bootstrap.min.css'),
      'style': path.resolve(cssDir + '/other/index.scss')
    }
  },
  watch: true,
  module: {
    rules: [{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: false
              // localIdentName: '[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              config: {
                path: '.postcssrc.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [distDir],
        exclude: '/node_modules/',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          name: './static/abcdefg/[hash].[ext]'
        }
      }
    ]
  }
}