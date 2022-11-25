const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint
  lintOnSave:false,
  //代理跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        //当实际需要请求的路径里面没有”/api“时. 就需要 pathRewrite,用’’^/api’’:’’, 把’/api’去掉, 这样既能有正确标识, 又能在请求到正确的路径。
        // pathRewrite:{'^/api': ''}
      }
    }
  }
})
