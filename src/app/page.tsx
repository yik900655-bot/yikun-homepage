import {
  ArrowRight,
  BookOpenText,
  Camera,
  CheckCircle2,
  Code2,
  Compass,
  FileText,
  Layers3,
  ListChecks,
  Mail,
  NotebookTabs,
  PenLine,
  Search,
  Sparkles,
  Table2,
  Workflow,
} from "lucide-react";

const navItems = [
  { label: "关于我", href: "#about" },
  { label: "来时路", href: "#path" },
  { label: "关注方向", href: "#focus" },
  { label: "表达方式", href: "#expression" },
  { label: "联系我", href: "#contact" },
];

const journeyItems = [
  {
    title: "内容分发和网盘拉新",
    description:
      "跑通过一个从内容整理、发布、用户引导到结果反馈的小闭环，也第一次更具体地理解了内容和需求之间的关系。",
    icon: Workflow,
  },
  {
    title: "YouTube 短视频实验",
    description:
      "用 AI 做过短视频内容生产，一个月发布过约 30 条，也看到了同质化、反馈慢和持续性的问题。",
    icon: Camera,
  },
  {
    title: "微信小程序实验",
    description:
      "做过 3 个小程序，理解了技术落地流程，也意识到能做出来和有人需要是两件事。",
    icon: Code2,
  },
  {
    title: "AI 工作流探索",
    description:
      "高频使用 ChatGPT、Codex、知识库、表格和自动化工具，帮助自己整理问题、拆解案例和复盘过程。",
    icon: Sparkles,
  },
];

const focusItems = [
  {
    title: "小红书虚拟产品选题",
    description: "观察资料包、模板、教程和轻咨询等形态，看它们解决的具体问题。",
    icon: Search,
  },
  {
    title: "评论区里的需求信号",
    description: "从评论、咨询意向和反复出现的问题里，判断需求强度。",
    icon: Compass,
  },
  {
    title: "真实结果案例拆解",
    description: "拆一个案例的内容入口、流量来源、成交方式和交付路径。",
    icon: BookOpenText,
  },
  {
    title: "SOP 与素材沉淀",
    description: "把可复用的观察维度整理成表格、清单和知识库。",
    icon: Layers3,
  },
  {
    title: "需求明确后再工具化",
    description: "先验证问题，再用 AI、自动化或小程序把流程做轻。",
    icon: Code2,
  },
];

const expressionFitItems = [
  { title: "图文", icon: PenLine },
  { title: "表格", icon: Table2 },
  { title: "SOP", icon: ListChecks },
  { title: "截图标注", icon: FileText },
  { title: "工具化整理", icon: Workflow },
  { title: "复盘记录", icon: NotebookTabs },
];

const expressionNotFitItems = [
  "露脸口播",
  "强社交",
  "强销售",
  "夸张营销",
  "大规模机械执行",
];

const connectItems = [
  "做过真实发布和测试",
  "拿到过转化或成交结果",
  "愿意聊需求和交付细节",
  "看重复盘而不是包装",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#151916]">
      <header className="sticky top-0 z-50 border-b border-[#d9ded5]/80 bg-[#f7f8f5]/88 backdrop-blur-md">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
          aria-label="主导航"
        >
          <a href="#" className="flex items-center gap-3" aria-label="返回首页">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#151916] text-sm font-semibold text-white">
              一
            </span>
            <span className="text-base font-semibold">一坤</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-[#5d665f] md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#151916]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-[#c6cec5] px-3 text-sm font-medium text-[#27312a] transition hover:border-[#0f766e] hover:text-[#0f766e]"
          >
            联系
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="fade-in max-w-4xl">
          <p className="text-sm font-medium text-[#0f766e]">
            一坤 · AI 探索者
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.12] text-[#111512] sm:text-5xl lg:text-[64px]">
            一个正在用 AI 整理经历、判断方向的普通人。
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#56615a] sm:text-lg">
            做过内容分发、短视频和小程序实验。现在更关注如何看清需求、沉淀方法，少一点盲目试错。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#path"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#151916] px-5 text-sm font-semibold text-white transition hover:bg-[#253027]"
            >
              了解我的经历
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#focus"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#c5cec6] bg-white px-5 text-sm font-semibold text-[#1f2922] transition hover:border-[#0f766e] hover:text-[#0f766e]"
            >
              看我正在关注什么
              <Compass className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-y border-[#dce1d8] bg-white"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
          <SectionLabel eyebrow="关于我" title="我不是一开始就懂 AI 的人。" />
          <div className="space-y-5 text-base leading-8 text-[#556058]">
            <p>
              我不是技术出身，也不是一开始就懂 AI。过去做过很多普通工作，也参与过家庭生意和副业尝试。
            </p>
            <p>
              我不擅长强表达和强社交，更适合用文字、表格、流程、工具和复盘来表达自己。现在我把 AI
              当成一个整理自己、辅助判断和提高执行效率的工具。
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {[
                "用文字把经历说清楚",
                "用表格整理混乱信息",
                "用流程降低重复试错",
                "用复盘修正判断",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[#27312a]"
                >
                  <CheckCircle2
                    className="h-4 w-4 text-[#0f766e]"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="path"
        className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <SectionLabel
          eyebrow="我的来时路"
          title="一些普通经历，后来变成了我理解 AI 和需求的入口。"
          description="这些不是要包装成成绩，而是我真实走过的节点。它们让我逐渐明白：做出来之前，先看清楚是否真的有人需要。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {journeyItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#d7ded5] bg-white p-6 shadow-[0_10px_35px_rgba(18,26,20,0.05)] transition hover:-translate-y-1 hover:border-[#aac9c3]"
            >
              <div className="flex items-start justify-between gap-4">
                <item.icon className="h-6 w-6 text-[#0f766e]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[#8b938d]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f6a63]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="focus" className="scroll-mt-24 bg-[#eef3ee]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <SectionLabel
            eyebrow="我现在关注什么"
            title="核心关注：小红书虚拟产品里的真实需求。"
            description="我现在重点拆小红书虚拟产品，关注选题、评论反馈、流量路径、成交方式和交付流程，判断哪些需求值得继续做。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {focusItems.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#d4ddd2] bg-white p-5"
              >
                <item.icon className="h-5 w-5 text-[#0f766e]" aria-hidden="true" />
                <h3 className="mt-5 font-semibold leading-7">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f6a63]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="expression"
        className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <SectionLabel
          eyebrow="我的表达方式"
          title="我更适合把复杂问题整理出来，而不是用强表达把它讲得很热闹。"
          description="这也决定了我更愿意做记录、拆解、表格、流程和工具化整理。"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-lg border border-[#d7ded5] bg-white p-6 shadow-[0_10px_35px_rgba(18,26,20,0.05)]">
            <h3 className="text-xl font-semibold">我更适合</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {expressionFitItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-md border border-[#e0e7df] bg-[#fbfcfa] p-4"
                >
                  <item.icon
                    className="h-5 w-5 text-[#0f766e]"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-[#d7ded5] bg-white p-6 shadow-[0_10px_35px_rgba(18,26,20,0.05)]">
            <h3 className="text-xl font-semibold">我不太适合</h3>
            <div className="mt-6 space-y-3">
              {expressionNotFitItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-[#e0e7df] bg-[#fbfcfa] p-4 text-[#5f6a63]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9aa59d]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#151916] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <p className="text-sm font-medium text-[#8bd3c7]">我想连接的人</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.25] sm:text-4xl">
            想连接在小红书虚拟产品里拿到真实结果的人。
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">
            我更想听具体过程：选题怎么来、评论怎么判断、内容怎么测试、交付怎么完成，而不是只看表面的热闹。
          </p>
          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {connectItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/12 bg-white/[0.04] p-5"
              >
                <p className="text-base font-medium leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="rounded-lg border border-[#d7ded5] bg-white p-6 shadow-[0_18px_60px_rgba(18,26,20,0.07)] sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <p className="text-sm font-medium text-[#0f766e]">联系我</p>
            <h2 className="mt-3 text-2xl font-semibold leading-[1.25]">
              邮箱
            </h2>
          </div>
          <a
            href="mailto:yik900655@gmail.com"
            className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-md border border-[#dce5dd] bg-[#fbfcfa] px-5 py-4 text-sm font-semibold text-[#1f2922] transition hover:border-[#0f766e] hover:text-[#0f766e] sm:mt-0 sm:w-auto"
          >
            <Mail className="h-5 w-5 text-[#0f766e]" aria-hidden="true" />
            yik900655@gmail.com
          </a>
        </div>
      </section>

      <footer className="border-t border-[#dce1d8] px-5 py-8 text-center text-sm text-[#667069]">
        <p>© 2026 一坤. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </main>
  );
}

function SectionLabel({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-[#0f766e]">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.25] text-[#151916] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6a63]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
