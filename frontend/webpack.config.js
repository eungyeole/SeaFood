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
                ],
            }
        },
        {
            test: /\.css$/,
            use: ['style-laoder', 'css-loader']
        },
        {
            test: /\.scss/,
            loaders: [
                require.resolve( 'style-loader' ),
                require.resolve( 'css-loader' ),
                require.resolve( 'sass-loader' )
            ]
        }
    ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        path: path.join(__dirname, 'src/components'),
        filename: 'App.jsx',
        publicPath: '/src/components/',
    }, 
};