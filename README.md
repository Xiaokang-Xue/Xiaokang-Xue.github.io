# Xiaokang Xue · 薛晓康

个人学术主页：**https://xiaokang-xue.github.io/**

这是一个可直接由 GitHub Pages 托管的静态网站。无需 Jekyll、Ruby、Node.js 或构建步骤，也不依赖外部字体、统计脚本和前端 CDN。主要内容直接写在 HTML 中，即使禁用 JavaScript 也能阅读；脚本仅增强主题、中英切换和交互。

## 最简单的修改方法：直接在 GitHub 上编辑

1. 打开 [这个仓库](https://github.com/Xiaokang-Xue/Xiaokang-Xue.github.io)。
2. 点击要改的文件，例如 `index.html`，再点右上角铅笔图标。
3. 修改文字，点 **Commit changes**，写一句说明（如 `Update research interests`），提交到 `main`。
4. 等待 Pages 自动更新。在仓库 **Actions** 中可以看到 `pages build and deployment` 的进度。
5. 打开主页检查。通常几分钟生效，GitHub 官方说明可能需要约 10 分钟；如果仍看到旧版，按 `Ctrl + F5` 强制刷新。

中文与英文需要一起更新：英文正文在 `index.html`，对应中文在 `assets/main.js` 的 `zh` 字典中。标有 `data-i18n="..."` 的文字使用同名键对应。姓名、邮箱和论文等共用内容通常只需改 HTML；邮箱同时出现于页头介绍、页脚和结构化数据中，修改时请一并更新。

## 文件对应什么

| 文件 | 内容 |
| --- | --- |
| `index.html` | 个人介绍、研究方向、论文、教育、奖项、联系信息，以及搜索引擎元数据 |
| `assets/style.css` | 配色、字体、间距、桌面和手机布局、打印样式 |
| `assets/main.js` | 中文翻译、深浅主题、语言切换、去掩码示意、引用复制 |
| `assets/evalmem.bib` | EvalMem 的 BibTeX 下载文件 |
| `assets/favicon.svg` | 浏览器标签页中的个人图标 |
| `.nojekyll` | 告诉 GitHub Pages 直接发布静态文件，勿删除 |
| `404.html` | 访问不存在的地址时显示的页面 |
| `robots.txt`、`sitemap.xml` | 搜索引擎索引相关文件 |

## GitHub Pages 与网址

这个仓库名与账号名相对应，所以它是**用户主页仓库**。固定网址是 `https://xiaokang-xue.github.io/`，地址中无需再添加仓库名，也不需要购买域名。

在 [Settings → Pages](https://github.com/Xiaokang-Xue/Xiaokang-Xue.github.io/settings/pages) 中保持：

- **Source**：Deploy from a branch
- **Branch**：`main`
- **Folder**：`/ (root)`

保存后，向 `main` 提交就会自动更新。无需手动上传到其他服务器。仓库右侧的 About 网站链接也指向该主页。除非以后购买自己的域名，否则不要添加 `CNAME` 文件。

官方说明：[创建 GitHub Pages 网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。

## 在电脑上修改

如果已有本地 Git 仓库，用 VS Code 打开它。编辑、保存后，在该文件夹终端执行：

```powershell
git pull --ff-only
git add index.html assets README.md
git commit -m "Update homepage"
git push origin main
```

如果增加了其他文件，把对应路径也加到 `git add` 中。若还没有本地仓库，先执行一次：

```powershell
git clone https://github.com/Xiaokang-Xue/Xiaokang-Xue.github.io.git
cd Xiaokang-Xue.github.io
```

双击 `index.html` 就能预览布局。要测试引用复制等需要安全环境的功能，可在文件夹运行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8000`，完成后按 `Ctrl + C` 停止服务。

## 常见更新

- **新增论文**：复制 `index.html` 中 `<article class="publication">…</article>`，更新作者、会议、标题、摘要和链接；新论文自己的引用也应更新，避免重复 `id`。
- **修改奖项**：在 `id="awards"` 区域编辑 `.award-row`，同时同步中文翻译。
- **添加真实头像**：将照片上传到 `assets/portrait.jpg`，把 `.signature-art` 的整个 `div` 换为 `<div class="portrait-frame"><img src="assets/portrait.jpg" alt="Xiaokang Xue"></div>`。当前「薛」字图形是原创文字标识。
- **添加 CV、Google Scholar 或新栏目**：等有实际文件或有效链接后再添加入口。当前未显示实习、项目、学术服务等空栏目。
- **改回历史版本**：原 Academic Pages 模板和之前的个人信息保留在 Git 提交历史中，不需要保留模板文件才能回退。

## 内容与设计来源

个人经历和奖项由本人提供；2025 年咪咕奖项按本人要求标为 Grand Prize / 特等奖。本科仅展示学校和学位。

EvalMem 的作者、会议与引用信息来自 [ACL Anthology](https://aclanthology.org/2026.findings-emnlp.1134/)，另附 [arXiv](https://arxiv.org/abs/2609.22231) 与 [代码](https://github.com/ZeyuuLiu/EvalMem)。页面中的三个环节是概念梳理；扩散小交互是迭代去掩码示意，不代表模型输出或实验结果。

学术信息结构参考了 [Guohuan Xie](https://guohuan-xie.github.io/)、[Jon Barron](https://jonbarron.info/)、[Lilian Weng](https://lilianweng.github.io/) 和 [Sherry Yang](https://sherryy.github.io/) 的主页。本次页面布局、文字标识、配色与交互单独实现。原仓库源自 Academic Pages，保留其 MIT 许可证。
