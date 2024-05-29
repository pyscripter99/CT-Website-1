import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "static/main.ts",
    output: {
        file: "dist/bundle.js",
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        resolve(), // Resolve node modules
        commonjs(), // Convert CommonJS modules to ES6
        typescript(), // Compile TypeScript
    ],
};
