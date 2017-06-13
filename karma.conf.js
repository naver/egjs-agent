const webpackConfig = require("./config/webpack");

module.exports = function (config) {
	var karmaConfig = {
		frameworks: ['mocha', 'chai', 'sinon'],

		files: [
			'./node_modules/phantomjs-polyfill/bind-polyfill.js',
			'./node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
			'./node_modules/lite-fixture/index.js',
			'./test/**/*.spec.js'
		],

		webpack: {
			devtool: webpackConfig.module.devtool,
			module: {
				rules: [webpackConfig.module.rules[0]]
			}
		},
		webpackMiddleware: {
			noInfo: true
		},

		preprocessors: {
			'./test/**/*.spec.js': ['webpack']
		},

		reporters: ['mocha'],

		browsers: ["PhantomJS"]
	};

	if (config.chrome) {
		karmaConfig.browsers = ["Chrome"];
	}

	if (config.coverage) {
		karmaConfig.preprocessors['./test/**/*.spec.js'].push('sourcemap');
		karmaConfig.reporters.push('coverage-istanbul');
		karmaConfig.coverageIstanbulReporter = {
			reports: ['text-summary', 'html'],
			dir: './coverage'
		};
		karmaConfig.webpack.module.rules.unshift({
			test: /\.js$/,
			exclude: /(node_modules|test)/,
			loader: 'istanbul-instrumenter-loader'
		});
		karmaConfig.singleRun = true;
	}

	config.set(karmaConfig);
};
