const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    entry: {
        app: ['./client']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                    'babel-plugin-react-scoped-css',
                ],
            }
        },
        {
            test: /\.css$/,
            use: ['style-laoder', 'css-loader']
        },
        {
            test: /\.(sc|c|sa)ss$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                },
              },
              { loader: 'scoped-css-loader' },
              {
                loader: 'sass-loader',
              },
            ],
          },
    ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        path: path.join(__dirname, '/components'),
        filename: 'ap.js',
        publicPath: '/components/',
    },
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true
    },
};