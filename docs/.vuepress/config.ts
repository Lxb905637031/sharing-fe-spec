import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'

export default defineConfig4CustomTheme({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端编码规范工程化',
      description: '前端编码规范工程化'
    }
  },
  base: '/sharing-fe/',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/index.md'
      },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
          { text: 'Node 编码规范', link: '/coding/node.md' }
        ]
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' }
        ]
      },
      {
        text: 'NPM包',
        items: [
          { text: 'eslint-config-sharing', link: '/npm/eslint.md' },
          { text: 'stylelint-config-sharing', link: '/npm/stylelint.md' },
          { text: 'commitlint-config-sharing', link: '/npm/commitlint.md' },
          { text: 'markdownlint-config-sharing', link: '/npm/markdownlint.md' },
          { text: 'eslint-plugin-sharing', link: '/npm/eslint-plugin.md' }
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'sharing-fe-lint', link: '/cli/sharing-fe-lint.md' }]
      },
    ],
    sidebar: [
      {
        title: '编码规范',
        children: [
          {
            title: 'HTML 编码规范',
            path: '/coding/html.md',
          },
          {
            title: 'CSS 编码规范',
            path: '/coding/css.md',
          },
          {
            title: 'JavaScript 编码规范',
            path: '/coding/javascript.md',
          },
          {
            title: 'Typescript 编码规范',
            path: '/coding/typescript.md',
          },
          {
            title: 'Node 编码规范',
            path: '/coding/node.md',
          },
        ],
      },
      {
        title: '工程规范',
        children: [
          {
            title: 'Git 规范',
            path: '/engineering/git.md',
          },
          {
            title: '文档规范',
            path: '/engineering/doc.md',
          },
          {
            title: 'CHANGELOG 规范',
            path: '/engineering/changelog.md',
          },
        ],
      },
      {
        title: 'NPM包',
        children: [
          { title: 'eslint-config-sharing', path: '/npm/eslint.md' },
          { title: 'stylelint-config-sharing', path: '/npm/stylelint.md' },
          { title: 'commitlint-config-sharing', path: '/npm/commitlint.md' },
          { title: 'markdownlint-config-sharing', path: '/npm/markdownlint.md' },
          { title: 'eslint-plugin-sharing', path: '/npm/eslint-plugin.md' },
        ],
      },
      {
        title: '脚手架',
        children: [{ title: 'sharing-fe-lint', path: '/cli/sharing-fe-lint.md' }],
      },
    ],
    logo: '/img/sharing.png',
    searchMaxSuggestions: 10,
    docsDir: 'docs',
    footer: {
      createYear: 2024
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/sharing.png', }],
    [
      'meta',
      {
        name: 'keywords',
        content: ' ',
      },
    ],
  ],
  plugins: <UserPlugins>[
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
  extraWatchFiles: ['.vuepress/config.ts']
})