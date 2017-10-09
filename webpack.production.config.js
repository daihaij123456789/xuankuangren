var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    //header:path.resolve(__dirname, 'app/containers/Home/pc_home_js.jsx'),
    //header:path.resolve(__dirname, 'app/components/PcHeader/pc_header.jsx'),
    //header:path.resolve(__dirname, 'app/components/PcHeader/pc_header_js.jsx'),
    //footer:path.resolve(__dirname, 'app/components/PcFooter/pc_footer_js.jsx'),
    //adminCase:path.resolve(__dirname, 'app/containers/AdminCases/pc_admin_case_js.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      // 'react',
      // 'react-dom',
      // 'react-redux',
      // 'react-router',
      // 'redux',
      'es6-promise',
      //'whatwg-fetch',
      'immutable'

    ],

  },
  output: {
    path: path.resolve(__dirname, 'src/public/build/components'),//__dirname + "./src/public/build",
    filename: "[name].[chunkhash:8].js",
    //filename: "[name].js",
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  externals : {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'redux-thunk': 'ReduxThunk',
    'react-redux': 'ReactRedux',
    'react-router': 'ReactRouter',
    'react-router-redux': 'ReactRouterRedux',
    'es5-shim': 'window',
    'whatwg-fetch': 'fetch',
    'node-uuid': 'uuid',
    'antd':'antd'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss')
    }, {
      test: /\.(png|gif|jpg|jpeg|bmp)$/i,
      loader: 'url-loader?limit=5000'
    }, {
      test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
      loader: 'url-loader?limit=5000'
    }]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by wangfupeng1988@github.com."),

    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false
      }
    }),

    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
       __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}