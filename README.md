# 复现流程

## 安装依赖

```
pnpm install
```

## 修改 swc_plugin_define_config.wasm 绝对路径

修改 `swc-register.js` 文件的第 69 行代码，根据实际情况填写 `swc_plugin_define_config` 插件的绝对路径

## 执行命令

```
node swc-register.js
```

## 查看结果

查看 output.js 文件的第 93 行

```
转换前：
subPackages: pathsMap.subPackages.map((item) => {
    return {
      root: item.root,
      pages: Object.values(item.pages),
    };
  }),

转换后:
subPackages: pathsMap.subPackages.map(function(item) {}),
```

从上面可以看出，app.config.js 文件被 swc 转换后，箭头函数内部的代码被清空了。

但是如果注释掉 `swc-register.js` 文件 第 `67 ~~ 72` 行的 `swc_plugin_define_config.wasm` 这个插件的话，输出的转换内容就是正常的，没有问题。

## 结论

怀疑 swc_plugin_define_config.wasm 这个插件的实现有问题。
