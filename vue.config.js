const path = require('path')

module.exports = {
    publicPath: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    configureWebpack: {
        // 开发生产共同配置
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@COMPONENTS': path.resolve(__dirname, './src/components'),
                '@PAGES': path.resolve(__dirname, './src/pages'),
                '@CONSTANTS': path.resolve(__dirname, './src/constants'),
                '@ASSETS': path.resolve(__dirname, './src/assets'),
            } // 别名配置
        }
    },
    devServer: {
        open: true,
    },
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件

}
