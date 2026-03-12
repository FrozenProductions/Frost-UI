const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'builtin:swc-loader',
                exclude: /node_modules/,
                type: 'javascript/auto',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ],
            },
            {
                test: /\.svg$/,
                type: 'asset/source',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    output: {
        filename: 'Library.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'FrostMenu',
            type: 'umd',
            export: 'default'
        },
        globalObject: 'this'
    },
};
