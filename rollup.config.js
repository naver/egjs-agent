
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";

const pkg = require("./package.json");
const banner = `/*
${require("./config/banner").common}
*/`;

export default {
	input: "./src/Agent.js",
	plugins: [babel({
		"babelrc": false,
		"presets": [
			[
				"es2015",
				{
					"loose": true,
					"modules": false,
				},
			],
		],
		"plugins": [
			"transform-object-assign",
			"transform-es3-property-literals",
			"transform-es3-member-expression-literals",
		],
	}), replace({
		"#__VERSION__#": pkg.version,
		delimiters: ["", ""],

	})],
	output: [
		{
			banner,
			freeze: false,
			interop: false,
			sourcemap: true,
			file: "./dist/agent.esm.js",
			format: "esm",
		},
	],
};
