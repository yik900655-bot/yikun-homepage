import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "一坤｜普通人的 AI 转型记录",
  description:
    "一坤的个人主页：记录一个普通人如何用 AI 整理经历、判断方向、沉淀方法和探索轻工具实践。",
  keywords: [
    "一坤",
    "AI 探索",
    "普通人 AI 转型",
    "小红书虚拟产品",
    "轻工具",
    "案例拆解",
    "SOP",
  ],
  authors: [{ name: "一坤" }],
  openGraph: {
    title: "一坤｜普通人的 AI 转型记录",
    description: "一个正在用 AI 重新整理自己的普通人。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
