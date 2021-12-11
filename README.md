# Zpy Lab

中文Python编程Lab - 全新自主研发，打破国外垄断

> **声明：本项目绝非[Hedgehog Lab](https://github.com/Hedgehog-Computing/hedgehog-lab)的套壳**
- 这是我们全新自主研发的中文编程Lab
- 当然我不是 Hedgehog Lab 套壳
- Hedgehog 跟 Hedgehog Lab 是不一样的，Hedgehog能叫 Hedgehog Lab 吗？
- 如果你一定要追根究底，那我确实是 Hedgehog Lab 套壳，但在未来我会删掉 Hedgehog Core 的代码
- 借鉴已有的开源项目是很自然的事，可能你们对开源有误解
- Zpy Lab采用微内核、形式化验证、比 Hedgehog Lab 快 600%
- 不过第 6 点说的不是这个版本，而是 [zpy-ide](https://github.com/louisyoungx/zpy-ide)

## 介绍

- 中文编程
- 在线运行
- 与Python语法相同

中文Python编程Lab，[在线尝试 - Zpy Lab](http://zpy-lab.rocke.top)

<div align="center">
    <img src="./docs/img/banner.jpg" /> 
</div>

## 本地运行

如果你想下载到本地运行，请先确保本地安装有Python3环境

### 1.下载zpy-ide库

``` shell
# 从GitHub下载
git clone https://github.com/louisyoungx/zpy-lab.git
# 从Gitee下载
git clone https://gitee.com/louisyoungx/zpy-ide.git
```

### 2.进入文件夹，安装依赖

``` shell
# 进入文件夹
cd zpy-ide
# 安装依赖Flask
yarn install
```

### 3.启动 Zpy Lab

``` shell
yarn start
```

### 4.编译输出到build/目录
```shell
yarn build
```

## 感谢

- HedgeHog Lab
- React
- TypeScript
- Monaco Editor



> 本项目部分包含 [Hedgehog Lab](https://github.com/Hedgehog-Computing/hedgehog-lab) 中的代码 - [Apache 2.0协议](https://github.com/Hedgehog-Computing/hedgehog-lab/blob/master/LICENSE)