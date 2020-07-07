module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '书签',
      description: '书签管理器'
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: '官方文档',
        ariaLabel: '官方文档',
        items: [
          { text: 'JS框架', link: '/officials/js-framework' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}
