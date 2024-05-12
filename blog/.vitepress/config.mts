import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hsiu",
  description: "Hsiu site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'First', link: '/posts/first' },
          { text: 'Second', link: '/posts/second' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DanielHsieh0618/DanielHsieh0618' }
    ]
  }
})
