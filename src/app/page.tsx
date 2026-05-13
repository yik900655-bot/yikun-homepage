import {
  ArrowRight,
  BookOpenText,
  Camera,
  CheckCircle2,
  Code2,
  Compass,
  FileText,
  GitBranch,
  Layers3,
  ListChecks,
  Mail,
  MessageCircle,
  NotebookTabs,
  PenLine,
  Search,
  Sparkles,
  Table2,
  UserRound,
  Workflow,
} from "lucide-react";

const navItems = [
  { label: "关于我", href: "#about" },
  { label: "来时路", href: "#path" },
  { label: "关注方向", href: "#focus" },
  { label: "表达方式", href: "#expression" },
  { label: "联系我", href: "#contact" },
];

const heroTags = ["AI 探索", "需求判断", "SOP 整理", "轻工具实践"];

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
    title: "AI 如何帮助普通人提高判断和执行效率",
    description: "不是追逐新工具，而是把问题拆清楚，把下一步变得更具体。",
    icon: Compass,
  },
  {
    title: "小红书虚拟产品里的真实需求",
    description: "观察评论、场景和反复出现的问题，判断需求是否真的存在。",
    icon: Search,
  },
  {
    title: "案例背后的需求、流量和成交方式",
    description: "拆解一个案例为什么能成立，以及哪些部分不适合直接照搬。",
    icon: BookOpenText,
  },
  {
    title: "把经验整理成 SOP、表格、工具和知识库",
    description: "用更稳定的形式沉淀经验，减少每次都从头摸索。",
    icon: Layers3,
  },
  {
    title: "需求明确后，再尝试轻工具落地",
    description: "先确认问题和使用场景，再考虑用小程序、API 或自动化承接。",
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
  "30 岁以后重新思考方向",
  "想用 AI 提高效率",
  "不想盲目追风口",
  "正在把经历整理成方法",
];

const contactItems = [
  { label: "小红书", value: "待补充", icon: MessageCircle },
  { label: "公众号", value: "待补充", icon: NotebookTabs },
  { label: "邮箱", value: "待补充", icon: Mail },
  { label: "GitHub", value: "待补充", icon: GitBranch },
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

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:py-18">
        <div className="fade-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#c7dedc] bg-white/70 px-3 py-2 text-sm font-medium text-[#0f766e]">
            <UserRound className="h-4 w-4" aria-hidden="true" />
            普通人的 AI 转型记录
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] text-[#111512] sm:text-5xl lg:text-[54px]">
            <span className="block">一坤，</span>
            <span className="block">一个正在用 AI 重新整理自己的普通人。</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#56615a] sm:text-lg">
            我经历过内容分发、短视频、小程序和各种副业尝试。现在更关注：如何用 AI
            看清需求、整理经验、减少盲目试错。
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#d6e3df] bg-white/80 px-3 py-1.5 text-sm font-medium text-[#506058]"
              >
                {tag}
              </span>
            ))}
          </div>

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

          <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-3 border-t border-[#d9ded5] pt-6">
            <div>
              <dt className="text-2xl font-semibold">30+</dt>
              <dd className="mt-1 text-xs leading-5 text-[#667069]">
                短视频发布实验
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold">3</dt>
              <dd className="mt-1 text-xs leading-5 text-[#667069]">
                小程序实践
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold">长期</dt>
              <dd className="mt-1 text-xs leading-5 text-[#667069]">
                AI 工具使用
              </dd>
            </div>
          </dl>
        </div>

        <div className="fade-in fade-in-delay-1 hidden md:block">
          <div className="rounded-lg border border-[#d6ddd5] bg-white p-5 shadow-[0_18px_60px_rgba(18,26,20,0.08)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#0f766e]">当前记录</p>
                <h2 className="mt-2 text-2xl font-semibold leading-[1.25]">
                  不是给答案，而是把过程整理清楚。
                </h2>
              </div>
              <span className="rounded-md bg-[#edf7f5] px-3 py-1 text-xs font-medium text-[#0f766e]">
                持续更新
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {[
                ["01", "经历整理", "把过去做过的事重新拆开，看哪些能力可以延续"],
                ["02", "案例拆解", "看清一个案例背后的需求、流量和交付方式"],
                ["03", "需求判断", "从评论、场景和反馈里判断问题是否真实存在"],
                ["04", "方法沉淀", "把零散经验整理成 SOP、表格和知识库"],
              ].map(([step, title, text]) => (
                <div
                  key={step}
                  className="grid grid-cols-[44px_1fr] gap-4 border-t border-[#edf0ea] pt-5 first:border-t-0 first:pt-0"
                >
                  <span className="text-sm font-semibold text-[#0f766e]">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#667069]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md bg-[#f6f7f2] p-4">
              <p className="text-sm leading-6 text-[#5f6a63]">
                现在的重点不是把自己包装成某个角色，而是用 AI
                把经历、判断和行动路径慢慢理顺。
              </p>
            </div>
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
            title="从追工具，慢慢转向看需求、看场景、看反馈。"
            description="我现在更愿意把 AI 当成一个辅助整理和判断的工具，而不是一个立刻改变人生的捷径。"
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
            如果你也在重新整理方向，可能会对我的记录感兴趣。
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/68">
            如果你也在 30
            岁以后重新思考方向，也想用 AI 提高效率，也不想盲目追风口，也在尝试把经历整理成方法，那我们可能有相似的问题和观察角度。
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
        <div className="grid gap-10 rounded-lg border border-[#d7ded5] bg-white p-6 shadow-[0_18px_60px_rgba(18,26,20,0.07)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium text-[#0f766e]">联系我</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.25]">
              这里先保留入口，后续补充具体链接。
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5f6a63]">
              如果你想了解我的 AI 探索记录、需求观察或工具整理过程，可以从这些入口找到我。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map((item) => (
              <div key={item.label} className="rounded-lg border border-[#e0e5dd] p-4">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-[#0f766e]" aria-hidden="true" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <p className="mt-3 text-sm text-[#667069]">{item.value}</p>
              </div>
            ))}
          </div>
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
