
const buildHelper = require("@egjs/build-helper");

const external = {
    "@egjs/axes": "eg.Axes",
    "@egjs/component": "eg.Component",
}
const name = "eg.agent";

export default buildHelper([
    {
        name,
        input: "./src/index.umd.ts",
        output: "./dist/agent.js",
        exports: "default",
        format: "umd",
    },
    {
        name,
        input: "./src/index.umd.ts",
        output: "./dist/agent.min.js",
        format: "umd",
        exports: "default",
        uglify: true,
    },
    {
        input: "./src/agent.ts",
        output: "./dist/agent.esm.js",
        format: "esm",
        external,
        exports: "named",
    },
    {
        input: "./src/index.umd.ts",
        output: "./dist/agent.cjs.js",
        format: "cjs",
        external,
        exports: "default",
    },
]);

