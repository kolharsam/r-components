var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/RComponentBarGraph.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'RComponentBarGraph.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
        }]
    }
}


// var path = require('path');

// module.exports = {
//     mode: 'production',
//     entry: './src/RComponentBarGraph.jsx',
//     output: {
//         path: path.resolve('lib'),
//         filename: 'RComponentBarGraph.js',
//         libraryTarget: 'commonjs2'
//     },
//     module: {
//         rules: [{
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules)/,
//                 use: 'babel-loader'
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', {
//                     loader: 'css-loader',
//                     options: {
//                         modules: true,
//                         localIdentName: '[path][name]__[local]--[hash:base64:5]'
//                     }
//                 }]
//             },
//         ]
//     }
// }

// module.exports = {
//     entry: path.resolve(__dirname, 'src/index.js'),
//     output: {
//         path: path.resolve(__dirname, './build/lib'),
//         filename: 'index.js',
//         library: '',
//         libraryTarget: 'commonjs'
//     },
//     externals: [nodeExternals()],
//     module: {
//         rules: [{
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/preset-env', '@babel/react']
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             }
//         ]
//     }
// };