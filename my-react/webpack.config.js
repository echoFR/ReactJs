// 向外暴露一个打包的配置对象
// webpack基于node构建 支持所有node API

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//导入在内存中 自动生成页面的插件

// 创建一个插件实例
const htmlPlugin= new HtmlWebpackPlugin({//可以添加两个参数
    template: path.join(__dirname,'./src/index.html'), //源文件     __dirname该文件所在的根目录
    filename: 'index.html'  //生成的内存中页面的名称
})

module.exports={
    mode: 'development',//开发模式不压缩     //生产模式production
    // 在webpack4中 
    // 默认的打包入口路径是scr——>index.js
    plugins:[//插件 数组
        htmlPlugin,
    ],
    // webpack 默认只能打包处理.js的文件    其他要配置第三方loader
    module:{//所有第三方模块的配置规则
        rules: [
           {
               test: /\.js|jsx$/,   //jsx创建组件的时候用
               use:'babel-loader',
               exclude: /node_modules/  //排除项
           },
        ]
    },
    // resolve: {
    //     // 自动扩展文件后缀名，require模块可以省略不写后缀名
    //     // 默认是 ['.js', '.json'],
    //     extensions: ['.js', '.jsx','.json'],
    //     // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
    //     alias: {
    //         '@': path.join(__dirname,'./src')
    //     }
    // }
}