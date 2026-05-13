# 一坤个人主页

一个可对外展示的个人主页项目，使用 Next.js + Tailwind CSS，适配电脑端和手机端，可直接部署到 Vercel。

## 1. 本地运行

执行命令：

```bash
cd "/Users/mac/Documents/Obsidian Vault/yikun-homepage"
npm install
npm run dev
```

成功判断：

```text
终端出现 Local: http://localhost:3000
浏览器打开 http://localhost:3000 能看到「一个正在用 AI 整理经历、判断方向的普通人。」
```

失败修复：

```bash
# 如果提示 npm 或 node 不存在，先安装 Node.js 20+
node -v
npm -v

# 如果依赖异常，重新安装
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 2. 本地构建检查

执行命令：

```bash
npm run build
```

成功判断：

```text
终端出现 Compiled successfully 或 build 完成信息
没有 TypeScript / ESLint 报错
```

失败修复：

```bash
npm run lint
# 按终端提示修改对应文件后，再执行
npm run build
```

## 3. 上传到 GitHub

执行命令：

```bash
git status
git add .
git commit -m "init yikun homepage"
git branch -M main
git remote add origin https://github.com/你的用户名/yikun-homepage.git
git push -u origin main
```

成功判断：

```text
GitHub 仓库页面能看到 package.json、src/app/page.tsx、README.md
```

失败修复：

```bash
# 如果提示 remote origin already exists
git remote -v
git remote set-url origin https://github.com/你的用户名/yikun-homepage.git
git push -u origin main

# 如果提示 authentication failed
# 去 GitHub 登录账号，确认有仓库权限，或使用 GitHub Desktop 上传
```

## 4. 部署到 Vercel

操作步骤：

```text
1. 打开 https://vercel.com/new
2. 选择 GitHub
3. 选择 yikun-homepage 仓库
4. Framework Preset 保持 Next.js
5. Build Command 保持 npm run build
6. Install Command 保持 npm install
7. 点击 Deploy
```

成功判断：

```text
Vercel 显示 Ready
拿到类似 https://yikun-homepage.vercel.app 的线上链接
手机和电脑打开都能正常浏览
```

失败修复：

```bash
# 本地先复现 Vercel 构建
npm install
npm run build

# 本地能过但 Vercel 失败时：
# 1. 看 Vercel 的 Build Logs
# 2. 确认 Node.js 版本为 20 或以上
# 3. 重新触发 Redeploy
```

## 5. 后续如何修改个人信息

主要修改文件：

```text
src/app/page.tsx      页面内容、模块、联系信息
src/app/layout.tsx    网站标题、SEO 描述
src/app/globals.css   全局背景、字体、动效
```

常改位置：

```tsx
// src/app/page.tsx
// 搜索 yik900655@gmail.com
// 这里是当前页面保留的唯一联系方式
```

成功判断：

```bash
npm run dev
# 浏览器刷新后能看到新内容
```

## 6. 下次继续修改时怎么调用

直接把这个仓库发给 AI，并说明：

```text
这是我的个人主页项目，请先阅读 README.md 和 PROJECT_NOTES.md，再基于 src/app/page.tsx 修改首页。
```

成功判断：

```text
AI 能知道页面定位、核心文案、联系方式、运行方式和部署方式。
```

## 7. 项目结构

```text
yikun-homepage/
├── PROJECT_NOTES.md   项目背景和下次修改入口
├── src/app/
│   ├── page.tsx       首页
│   ├── layout.tsx     页面元信息和根布局
│   ├── globals.css    Tailwind 和全局样式
│   └── icon.tsx       浏览器标签图标
├── public/            静态资源目录
├── package.json       项目依赖和脚本
└── README.md          使用说明
```
