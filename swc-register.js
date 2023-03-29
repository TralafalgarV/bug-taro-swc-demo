const fs = require("fs");
const path = require("path");
const swc = require("@swc/core");
const h = require("@tarojs/helper");

/* =========== 使用 @swc/register 复现 ============== */

// function createSwcRegister({ only, plugins }) {
//   const config = {
//     only: Array.from(new Set([...only])),
//     jsc: {
//       parser: {
//         syntax: "typescript",
//         decorators: true,
//       },
//       transform: {
//         legacyDecorator: true,
//       },
//     },
//     module: {
//       type: "commonjs",
//     },
//   };
//   if (plugins) {
//     config.jsc.experimental = {
//       plugins,
//     };
//   }
//   require("@swc/register")(config);
// }

// createSwcRegister({
//   only: [
//     fs.realpathSync("./app.config.js"),
//     // configPath might be a symlink. that will cause compilation to fail
//     (filepath) => false,
//   ],
//   plugins: [
//     [
//       path.resolve(
//         __dirname,
//         "./node_modules/.pnpm/@tarojs+helper@3.6.2/node_modules/@tarojs/helper/swc/plugin-define-config/target/wasm32-wasi/release/swc_plugin_define_config.wasm"
//       ),
//       {},
//     ],
//   ],
// });

// const getModuleDefaultExport = (exports) =>
//   exports.__esModule ? exports.default : exports;
// exports.getModuleDefaultExport = getModuleDefaultExport;

// const result = (0, exports.getModuleDefaultExport)(require("./app.config"));
// console.log("[ERROR]:", result);

/* =========== 使用 swc transformSync 复现 ============== */
// 读取 JS 文件内容
const filePath = "./app.config.js";
const code = fs.readFileSync("./app.config.js", "utf-8").toString();
// 转换代码为特定模块类型
const output = swc.transformSync(code, {
  sourceRoot: path.dirname(filePath) + path.sep,
  jsc: {
    parser: { syntax: "typescript", decorators: true },
    transform: { legacyDecorator: true },
    experimental: {
      plugins: [
        [
          "/Users/wangwei/Desktop/Learn/bug-taro-swc-demo/node_modules/.pnpm/@tarojs+helper@3.6.2/node_modules/@tarojs/helper/swc/plugin-define-config/target/wasm32-wasi/release/swc_plugin_define_config.wasm",
          {},
        ],
      ],
    },
  },
  module: { type: "commonjs" },
  caller: { name: "@swc/register" },
  cwd: path.dirname(filePath) + path.sep,
  filename: filePath,
});
// 输出转换后的代码
fs.writeFileSync("output.js", output.code, "utf-8"); // 将转换后的代码输出到 output 中

// console.log(output.code);
console.log("[GOOD]:", require("./output").default);
