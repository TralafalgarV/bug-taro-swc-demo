# 复现流程

## 安装依赖

```
pnpm install
```

## 修改 swc_plugin_define_config.wasm 绝对路径

修改 `swc-register.js` 文件的第 69 行代码，根据实际情况填写 `swc_plugin_define_config` 插件的绝对路径

## 执行

```
node swc-register.js
```
