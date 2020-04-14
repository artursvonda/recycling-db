// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default [
  // CommonJS
  {
    input: "src/index.ts",
    output: {
      dir: "./",
      entryFileNames: "lib/index.js",
      format: "cjs"
    },
    plugins: [
      json(),
      typescript({
        declaration: true,
        declarationDir: "types/",
        rootDir: "src/"
      })
    ]
  },

  // ES
  {
    input: "src/index.ts",
    output: { file: "es/index.js", format: "es" },
    plugins: [json(), typescript()]
  }
];
