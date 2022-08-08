export default {
    title: 'Snail-Pro',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide' },
            {
            text: 'Dropdown Menu',
            items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
            ]
            }
        ],
        sidebar: [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/index' },
                { text: 'Getting Started', link: '/getting-started' },
              ]
            }
          ],
          socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
            
          ],
          footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
          },
          editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
          },
          carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
          },
          algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>',
            // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
            appId: '<APP_ID>',
          }
    }
}
  