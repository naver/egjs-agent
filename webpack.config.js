var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var WriteFilePlugin = require("write-file-webpack-plugin");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");
var banner = require("./config/banner");
var config = require("./config/webpack");
var path = require("path");

module.exports = function(env) {
	env = env || {};

	if (!/server/.test(env.mode)) {
		config.module.rules.push({
			test: /(\.js)$/,
			loader: "eslint-loader",
			include: path.resolve(process.cwd(), "src"),
			exclude: /(node_modules)/,
			enforce: "pre",
		});
	}

	if (env.mode === "production") {
		for (var p in config.entry) {
			config.entry[p + ".min"] = config.entry[p];
		}
		config.plugins.push(
			new CleanWebpackPlugin(["dist"], {
				root: path.resolve(__dirname),
				verbose: true,
				dry: false
			}),
			new UglifyJSPlugin({
				include: /\.min\.js$/,
				beautify: false,
				mangle: {
					screw_ie8: true,
					keep_fnames: true
				},
				compress: {
					screw_ie8: true,
					warnings: false
				},
				output: {
					screw_ie8: false
				},
				comments: false,
				sourceMap: true
			}),
			new webpack.BannerPlugin(banner.common)
		);
	} else {
		config.plugins.push(new WriteFilePlugin());
	}

	return config;
};
