import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "Hsiu's Site",
  description: "Hsiu site",
  head: [
    ['link', { rel: 'icon', href: '/favicons/favicon.ico' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
       // public file path
    logo: '/favicons/apple-touch-icon.png',
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'Vitepress 搬家到 Astro', link: '/posts/Vitepress 搬家到 Astro/' },
          { text: '[ WIP ] 什麼是 codecov', link: '/posts/[WIP]什麼是codecov/' },
          { text: '[ WIP ] 怎麼用 Github copilot 來 code review?', link: '/posts/[ WIP ] 怎麼用 Github copilot 來 code review/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DanielHsieh0618/DanielHsieh0618' }
    ]
  },
  sitemap: {
    hostname: 'https://example.com'
  },
  cleanUrls: true,
}))
