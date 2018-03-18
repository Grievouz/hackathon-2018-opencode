const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        popup: "./src/popup/app.tsx",
        foreground: "./src/foreground/app.tsx",
    },

    output: {
        filename: "resources/js/bundle.[name].js",
        path: path.resolve(__dirname, "dist")
    },

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
                    {loader: "style-loader"},
                    {loader: "css-loader"}
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
    ]

};