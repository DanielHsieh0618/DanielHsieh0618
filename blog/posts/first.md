
# Vitepress 搬家到 Astro

靜態網站生成的框架 ( SSGs - Static Site Generators ) 從 Jekyll, Hugo, Hexo, Vuepress, Vitepress 到現在的 Astro，總類繁多且不停迭代。
Astro 起先看到 [Developer roadmap](https://roadmap.sh/frontend) 中看到的，後來發現它可以兼容 React 及 Vue.js，就決定一定要來用看看。

以下為 GPT 解釋，什麼是 Static Site Generators (SSGs) ?
> Static Site Generators (SSGs) 是一種工具，用於生成靜態網站。這些工具通過將內容（通常是 Markdown 或其他格式的文件）和模板結合起來，生成靜態 HTML 文件。這些靜態文件可以直接部署到任何網路伺服器上，無需後端伺服器處理動態內容請求。

每個 SSG 都有自己想要主打的強項，像是由什麼公司支持或是以什麼框架開發之類的，若是想要有動態渲染的需求，也是有工具可以支援。

一些流行的 SSG 工具包括：

- Jekyll：由 GitHub 支持，適合部落格和個人網站。
- Hugo：以速度著稱，適合各種網站。
- Gatsby：基於 React，適合現代網頁應用。
- Next.js：支持靜態生成和動態渲染，適合複雜的應用。

## Astro 的特色是什麼？

1. 組件優先：Astro 支持使用多種前端框架的組件，如 React、Vue、Svelte 和 Solid。可以在同一個專案中混合使用這些框架的組件。

2. Partial Hydration：Astro 支持部分水合（Partial Hydration），允許你只為需要交互的部分加載 JavaScript，而不是整個頁面。

3. Markdown 支持：Astro 內建對 Markdown 的支持，適合用於部落格和文檔網站。

4. 快速構建：Astro 使用 Vite 作為其構建工具，提供快速的開發體驗和構建速度。

5. 靈活的數據源：Astro 支持從多種數據源（如 CMS、API、文件系統）獲取數據，並將其轉換為靜態內容。

6. SEO 友好：由於 Astro 生成的是靜態 HTML 文件，這些文件對搜索引擎非常友好，有助於提升 SEO。

7. 社區和插件：Astro 擁有活躍的社區和豐富的插件生態系統，幫助你擴展和自定義你的網站。

可以嘗試撰寫不同框架的組件與豐富的社群與插件，開發者怎麼能不愛呢？
