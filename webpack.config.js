// webpack.config.js
const plugins = []
const TARGET = process.env.npm_lifecycle_event;
if (TARGET == "build:report") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'server',       // 默认值：server，共有server，static，json，disabled四种模式
    analyzerHost: '127.0.0.1',    // 默认值：127.0.0.1，在server模式下使用的主机启动HTTP服务器。
    analyzerPort: 8888,           // 默认值：8888，在server模式下使用的端口号
    reportFilename:"report.html", // 默认值：report.html，在static模式下生成的捆绑报告文件的路径名
    openAnalyzer:true,            // 默认值：true，是否在默认浏览器中自动打开报告
  }))
}
module.exports = {
    // ...
    plugins
}