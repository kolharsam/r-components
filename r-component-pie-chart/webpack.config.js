var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/RComponentPieChart.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'RComponentPieChart.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }]
            },
        ]
    }
}