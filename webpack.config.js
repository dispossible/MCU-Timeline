const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/js/index.ts",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: process.env.NODE_ENV,
    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"],
            },
        ],
    },
    optimization: {
        usedExports: true,
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    plugins: [new ESLintWebpackPlugin()],
};
