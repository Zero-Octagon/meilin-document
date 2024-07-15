import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "梅林创造服务器",
  description: "《我的世界》互通服务器",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '快速访问',
        items: [
          { text: '卫星地图', link: 'http://play.bioc.fun:38968/' },
          { text: 'QQ 交流群', link: 'https://qm.qq.com/q/qqTQtIwoQE' }
        ]
      }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是 梅林？', link: '/guide/what-is-meilin' },
        ]
      },
      {
        text: '畅游梅林',
        link: './roam',
        items: [
          { text: '教程 · Java版', link: './roam-java' },
          { text: '教程 · 基岩版', link: './roam-bedrock' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zero-Octagon/meilin-document' }
    ]
  }
})
