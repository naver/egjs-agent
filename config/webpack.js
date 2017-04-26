var pkg = require("../package.json");
var path = require("path");
var StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = {
	entry: {
		"agent": "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].js",
		library:  ["eg", "Agent"],
		libraryTarget: "umd",
	},
	externals: [
		{
			"@egjs/": {
				commonjs: "@egjs/",
				commonjs2: "@egjs/",
				amd: "@egjs/",
				root: ["eg", "Agent"]
			}
		}
	],
	devServer: {
		publicPath: "/dist/"
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /(\.js)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					"presets": [ 
						[
							"es2015",
							{
								"loose": true,
								"modules": false
							}
						]
					],
					"plugins": [
						"add-module-exports"
					]
				}
			},
			{ 
				test: /(\.js)$/,
				loader: StringReplacePlugin.replace({
					replacements: [
						{
							pattern: /#__VERSION__#/ig,
							replacement: function (match, p1, offset, string) {
								return pkg.version;
							}
						}
					]})
            }
		]
	},
	plugins: [ new StringReplacePlugin() ]
};
