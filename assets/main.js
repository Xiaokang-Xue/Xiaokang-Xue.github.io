"use strict";

// Content is present in HTML. JavaScript only adds language/theme controls and illustrations.
const zh = {
  skip: "跳转到正文", navResearch: "研究兴趣", navPublications: "论文发表", navEducation: "教育经历", navAwards: "荣誉奖项",
  eyebrow: "人工智能 · 浙江大学", intro1: "我目前是", ai: "人工智能专业", intro2: "的硕士一年级学生，就读于", zju: "浙江大学", intro3: "（2026–2029），导师为", advisor: "张强老师", period: "。",
  introResearch: "我的研究兴趣包括扩散语言模型（Diffusion Language Models）。我也参与了 EvalMem 的研究，探索如何诊断长程记忆系统的失效。",
  graduate: "硕士研究生", portraitNote: "学习、探索与创造。", homepage: "个人学术主页", explore: "了解我的研究", researchTitle: "研究兴趣", dlmTitle: "扩散语言模型", researchTag: "语言建模",
  dlmDescription: "我关注语言如何通过迭代细化逐步生成，并探索扩散模型在语言建模中的潜力。", demoTitle: "从掩码到语义", demoCaption: "迭代去掩码的概念示意，非真实模型输出。", replay: "重新播放", publicationsTitle: "论文发表",
  paperDescription: "从编码、检索与生成三个环节，诊断长程记忆系统的失效。", encoding: "编码", retrieval: "检索", generation: "生成", citation: "查看引用", copy: "复制 BibTeX",
  educationTitle: "教育经历", masters: "人工智能 · 硕士研究生", advisedBy: "导师：", nankai: "南开大学", bachelors: "软件工程 · 工学学士",
  awardsTitle: "荣誉奖项", national: "国家奖学金", migu: "咪咕 M-Zone · 特等奖", miguDetail: "3 / 1,143 · 前 0.3%", outstanding: "南开大学优秀学生", gongneng: "南开大学公能奖学金",
  footerHello: "期待交流，一起探索。", source: "GitHub 源代码 ↗", backToTop: "返回顶部 ↑"
};
const languageButton = document.querySelector("#language-toggle");
const themeButton = document.querySelector("#theme-toggle");
const english = new Map([...document.querySelectorAll("[data-i18n]")].map(element => [element, element.textContent]));
let language = "en";
function saved(key) { try { return localStorage.getItem(key); } catch { return null; } }
function save(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage is optional. */ } }
function setLanguage(next) {
  language = next === "zh" ? "zh" : "en";
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  english.forEach((text, element) => { element.textContent = language === "zh" ? (zh[element.dataset.i18n] || text) : text; });
  languageButton.textContent = language === "zh" ? "EN" : "中文";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  document.querySelector("nav").setAttribute("aria-label", language === "zh" ? "主导航" : "Main navigation");
  document.querySelector("#copy-status").textContent = "";
  updateThemeLabel();
  const replayText = document.querySelector("#replay span");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) replayText.textContent = language === "zh" ? "下一步" : "Next step";
  save("xue-language", language);
}
const prefersDark = matchMedia("(prefers-color-scheme: dark)");
function isDark() { return document.documentElement.dataset.theme === "dark" || (!document.documentElement.dataset.theme && prefersDark.matches); }
function updateThemeLabel() {
  const dark = isDark();
  themeButton.setAttribute("aria-label", language === "zh" ? (dark ? "切换到浅色主题" : "切换到深色主题") : (dark ? "Switch to light theme" : "Switch to dark theme"));
  themeButton.querySelector("use").setAttribute("href", dark ? "#icon-sun" : "#icon-moon");
  document.querySelector('meta[name="theme-color"]').content = dark ? "#141d22" : "#f8f8f3";
}
const theme = saved("xue-theme");
if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
setLanguage(saved("xue-language"));
themeButton.hidden = false;
languageButton.hidden = false;
themeButton.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  save("xue-theme", next);
  updateThemeLabel();
});
prefersDark.addEventListener("change", updateThemeLabel);
languageButton.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
document.querySelector("#year").textContent = new Date().getFullYear();

// A finite, user-triggered illustration; never autoplays or loops.
const tokens = [...document.querySelectorAll(".token")];
const words = tokens.map(token => token.textContent);
const frames = [[], [0, 4], [0, 2, 4, 7], [0, 1, 2, 4, 6, 7], [0, 1, 2, 3, 4, 5, 6, 7]];
const replay = document.querySelector("#replay");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
let timer;
let currentFrame = 4;
function renderFrame(step) {
  currentFrame = step;
  tokens.forEach((token, i) => {
    const visible = frames[step].includes(i);
    token.textContent = visible ? words[i] : "···";
    token.classList.toggle("masked", !visible);
  });
  document.querySelector("#step-label").textContent = `0${step} / 04`;
  document.querySelector("#demo-progress").style.width = `${step * 25}%`;
}
function finishDemo() {
  clearTimeout(timer);
  renderFrame(4);
  document.querySelector("#demo-status").textContent = language === "zh" ? "示意完成：Ideas take shape one step at a time." : "Illustration complete: Ideas take shape one step at a time.";
}
replay.hidden = false;
replay.addEventListener("click", () => {
  clearTimeout(timer);
  if (reducedMotion.matches) {
    renderFrame((currentFrame + 1) % frames.length);
    const revealed = tokens.map(token => token.classList.contains("masked") ? "[mask]" : token.textContent).join(" ");
    document.querySelector("#demo-status").textContent = language === "zh" ? `示意第 ${currentFrame} / 4 步：${revealed}` : `Illustration step ${currentFrame} of 4: ${revealed}`;
    return;
  }
  renderFrame(0);
  document.querySelector("#demo-status").textContent = language === "zh" ? "正在演示迭代去掩码。" : "Illustrating iterative unmasking.";
  const advance = () => {
    renderFrame(currentFrame + 1);
    if (currentFrame < 4) timer = setTimeout(advance, 600);
    else finishDemo();
  };
  timer = setTimeout(advance, 600);
});
document.addEventListener("visibilitychange", () => { if (document.hidden) finishDemo(); });
reducedMotion.addEventListener("change", () => {
  finishDemo();
  replay.querySelector("span").textContent = reducedMotion.matches ? (language === "zh" ? "下一步" : "Next step") : (language === "zh" ? "重新播放" : "Replay");
});

const copy = document.querySelector("#copy-citation");
if (navigator.clipboard && window.isSecureContext) {
  copy.hidden = false;
  copy.addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText(document.querySelector("#bibtex").textContent.trim());
      status.textContent = language === "zh" ? "已复制" : "Copied!";
    } catch {
      status.textContent = language === "zh" ? "请手动选择引用文本，或下载 BibTeX 文件。" : "Select the citation text, or download the BibTeX file.";
    }
  });
}

if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll("nav a")];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, {rootMargin: "-15% 0px -55% 0px"});
  document.querySelectorAll("main > section").forEach(section => observer.observe(section));
}
