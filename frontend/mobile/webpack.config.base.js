const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
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
var distDir = path.resolve(__dirname, '..', '..', 'static', 'js', 'mobile');
deleteJS(distDir);


var cssDir = path.resolve(__dirname, '..', '..', 'static', 'css');

module.exports = {
  entry: {
    vendor: [
      'vue', 'vue-router', 'axios', 'vue-touch', 'better-scroll', 'vue-awesome-swiper',
      'mint-ui'
    ],
    cssVendor: [
      'mint-ui-style', 'changeMintUI',
      'animate', 'bootstrap',
      'common', 'reset', 'uikits',
      'index'
    ],
    app: ['./frontend/mobile/js/app.js']
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
      '@': path.resolve('frontend/mobile'),

      'mint-ui-style': 'mint-ui/lib/style.css',
      'changeMintUI': path.resolve(cssDir + '/change/change-Mint-UI.css'),

      'animate': path.resolve(cssDir + '/animate.min.css'),
      'bootstrap': path.resolve(cssDir + '/bootstrap.min.css'),

      'common': path.resolve(cssDir + '/other/common.css'),
      'reset': path.resolve(cssDir + '/other/reset.css'),
      'uikits': path.resolve(cssDir + '/other/uikits.css'),
      'index': path.resolve(cssDir + '/other/index.scss'),

      // 'another': path.resolve(cssDir + '/other/another/another.css'),
      'another1': path.resolve(cssDir + '/other/another/another1.css'),
      'another2': path.resolve(cssDir + '/other/another/another2.css'),
      'auto': path.resolve(cssDir + '/other/another/auto.css'),
      'bg-bj': path.resolve(cssDir + '/other/another/bg-bj.css'),
      'bk': path.resolve(cssDir + '/other/another/bk.css'),
      'button': path.resolve(cssDir + '/other/another/button.css'),
      'dl-dt-dd': path.resolve(cssDir + '/other/another/dl-dt-dd.css'),
      'fd-float': path.resolve(cssDir + '/other/another/fd-float.css'),
      'flex': path.resolve(cssDir + '/other/another/flex.css'),
      'font': path.resolve(cssDir + '/other/another/font.css'),
      'hr-divider': path.resolve(cssDir + '/other/another/hr-divider.css'),
      'img': path.resolve(cssDir + '/other/another/img.css'),
      'input': path.resolve(cssDir + '/other/another/input.css'),
      'omit': path.resolve(cssDir + '/other/another/omit.css'),
      'p': path.resolve(cssDir + '/other/another/p.css'),
      'px1': path.resolve(cssDir + '/other/another/px1.css'),
      'scrollbar': path.resolve(cssDir + '/other/another/scrollbar.css'),
      'shadow': path.resolve(cssDir + '/other/another/shadow.css'),
      'title': path.resolve(cssDir + '/other/another/title.css'),
      'ul-li': path.resolve(cssDir + '/other/another/ul-li.css'),
      'wh': path.resolve(cssDir + '/other/another/wh.css'),
      'modal': path.resolve(cssDir + '/other/another/modal.css'),
      'gradient': path.resolve(cssDir + '/other/another/gradient.css')
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
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [distDir],
        exclude: '/node_modules/',
        options: {
          presets: ['es2015']
        }
      }, {
        test: /\.(png|jpg|gif|woff|woff2|svg|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          name: './static/abcdefg/[hash].[ext]'
        }
      }
    ]
  }
}