# 一坤个人主页项目记录

## 当前页面定位

这是一个个人主页，不是产品官网、创业项目官网、课程落地页或招商页。

核心表达：

```text
一坤，一个正在用 AI 整理经历、判断方向的普通人。
```

## 当前重点方向

```text
小红书虚拟产品里的真实需求
```

页面里重点表达：

- 观察小红书虚拟产品选题
- 从评论区判断需求信号
- 拆解拿到真实结果的案例
- 沉淀 SOP、表格、清单和知识库
- 需求明确后，再用 AI、自动化或小程序轻工具化

## 想连接的人

```text
在小红书虚拟产品里拿到真实结果的人
```

更具体一点：

- 做过真实发布和测试
- 拿到过转化或成交结果
- 愿意聊需求和交付细节
- 看重复盘，而不是包装

## 联系方式

当前只保留邮箱：

```text
yik900655@gmail.com
```

## 主要修改入口

```text
src/app/page.tsx      首页内容和模块
src/app/layout.tsx    网站标题和 SEO 描述
src/app/globals.css   全局样式和动效
README.md             运行、上传、部署说明
```

## 本地运行

```bash
npm install
npm run dev
```

成功判断：

```text
浏览器打开 http://localhost:3000 能看到个人主页
```

## 构建检查

```bash
npm run lint
npm run build
```

成功判断：

```text
lint 无报错
build 输出 Compiled successfully
```

本项目当前 `build` 脚本使用：

```bash
next build --webpack
```

这样可以避开本机 Next.js Turbopack 原生绑定问题，也适合 Vercel 部署。

## 部署路径

推荐路径：

```text
GitHub 仓库 -> Vercel Import Project -> 自动部署 -> 获得可分享链接
```

拿到线上链接后，可以直接分享给别人。
