# Xiaokang Xue · 薛晓康

个人主页：**https://xiaokang-xue.github.io/**

页面按照 [Guohuan Xie 的主页](https://guohuan-xie.github.io/) 保留相同的 AcademicPages 基本结构：顶部导航、左侧个人信息、右侧学术内容；沿用其字体、字号、配色、教育卡片、论文条目和奖项列表样式。

## 修改内容

打开仓库里的 `index.html`，点击右上角铅笔，修改后点 **Commit changes** 提交到 `main`。GitHub Pages 会自动更新，主页网址不变。

- 个人介绍、姓名、邮箱、研究兴趣、教育经历、论文和奖项：`index.html`。
- 头像：`images/profile.png`。目前使用原仓库的通用占位头像，后续直接用自己的照片替换此文件即可。
- 页面基础样式：`assets/css/main.css`，保留参考主题样式。
- 参考主页的卡片与字体设置：`assets/css/profile.css`。
- 本地字体：`assets/css/fonts.css` 和 `assets/fonts/`。
- 论文引用：`assets/evalmem.bib`。

主页正文为英文，没有额外的语言切换、主题切换或动画。无需安装 Jekyll 或其他构建环境。不要删除 `.nojekyll`。

## Pages 设置与上传

[Settings → Pages](https://github.com/Xiaokang-Xue/Xiaokang-Xue.github.io/settings/pages) 使用 **Deploy from a branch → main → / (root)**。

修改并提交文件后，在仓库 **Actions** 查看发布进度。通常几分钟后生效；如果浏览器仍显示旧版，按 `Ctrl + F5` 强制刷新。无需重新申请网址或上传到其他服务器。

用 VS Code 在本地修改时，在此仓库目录中执行：

```powershell
git pull --ff-only
git add index.html assets images README.md
git commit -m "Update homepage"
git push origin main
```

本地预览可直接打开 `index.html`，或运行 `python -m http.server 8000 --bind 127.0.0.1` 后访问 `http://127.0.0.1:8000`。

## 来源

- 页面格式和基础样式：[Guohuan Xie](https://guohuan-xie.github.io/)、[AcademicPages](https://github.com/academicpages/academicpages.github.io)、Minimal Mistakes。保留原 MIT 许可证。
- Noto Serif 字体和 Font Awesome 图标字体：许可证见 `assets/fonts/` 和 `assets/webfonts/`。
- 论文及作者信息：[ACL Anthology](https://aclanthology.org/2026.findings-emnlp.1134/)。论文示意图来自共同作者主页。
- 个人资料及奖项由本人提供；咪咕奖项按本人要求显示为 Grand Prize / 特等奖。教育条目统一展示学校、就读年份和学位。
