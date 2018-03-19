const ChromeExtensionReloader  = require('webpack-chrome-extension-reloader');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        inject: "./src/inject/app.tsx",
        popup: "./src/popup/app.tsx"
    },

    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist")
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: "./src/static/",
                to: "./"
            }
        ])
    ],

    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        progress: true,
        inline: true,
        open: "http://localhost:9000/webpack-dev-server/dev_environment.html",
        compress: true,
        hot: true,
        port: 9000
    }
};