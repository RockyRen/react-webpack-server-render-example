var path = require('path')
var assetsPath = path.join(__dirname, "public", "assets")
var serverPath = path.join(__dirname, "server")

module.exports = [
    {
        name: "browser",
        entry: './app/entry.js',
        output: {
            path: assetsPath,
            filename: 'entry.generator.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        }
    },
    {
        name: "server-side rending",
        entry: './server/page.js',
        output: {
            path: serverPath,
            filename: "page.generator.js",
            // 使用page.generator.js的是nodejs，所以需要将
            // webpack模块转化为CMD模块
            library: 'page',
            libraryTarget: 'commonjs'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                }
            ]
        }
    }
]