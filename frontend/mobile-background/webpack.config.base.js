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
var distDir = path.resolve(__dirname, '..', '..', 'static', 'js', 'components-mobile');
deleteJS(distDir);


module.exports = {
  entry: {
    vendor: ['vue', 'vue-router', 'axios', 'bootstrap', 'mint-ui-style', 'element-ui-style', 'iview-style', 'common', 'mint-ui', 'element-ui', 'iview'],
    app: ['./frontend/components-mobile/js/app.js']
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
      '@': path.resolve('frontend/components-mobile'),
      'mint-ui-style': 'mint-ui/lib/style.css',
      'element-ui-style': 'element-ui/lib/theme-chalk/index.css',
      'iview-style': 'iview/dist/styles/iview.css',
      'bootstrap': path.resolve(__dirname + '../../../static/css/bootstrap.min.css'),
      'common': path.resolve(__dirname + '../../../static/css/common.css')
    }
  },
  watch: true,
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
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
    }]
  }
}