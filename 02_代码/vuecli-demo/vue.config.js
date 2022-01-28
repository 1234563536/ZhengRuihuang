const path = require('path')
module.exports = {
    // ...其他配置
    lintOnSave: false, // 关闭eslint检查
    devServer: {
        port: 3000,
        open: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
}
