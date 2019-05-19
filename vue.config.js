
module.exports = {
    lintOnSave: true,
   
    devServer: {
      proxy: {
        // proxy all requests starting with /api to jsonplaceholder
        '/api': {
          target: 'http://184.170.218.203:8089/',   //代理接口
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'    //代理的路径
          }
        }
      }
    }
}