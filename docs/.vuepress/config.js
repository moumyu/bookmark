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
          { text: 'JS框架', link: '/js-framework/' },
          { text: 'UI框架', link: '/ui-framework/' }
        ]
      },
      {
        text: '工具',
        ariaLabel: '工具',
        link: '/tools/'
      }
    ],
    sidebar: {
      '/js-framework/': [
        ['', 'JavaScript'],
        ['React', 'React'],
        ['Vue', 'Vue'],
        ['Angular', 'Angular']
      ],
      '/ui-framework/': [
        ['', 'CSS'],
        ['React', 'React'],
        ['Vue', 'Vue'],
        ['Angular', 'Angular']
      ],
      '/tools/': [
        ['', '工具'],
        ['CodeRun', '代码运行'],
        ['Image', '图像处理'],
      ]
    }
  }
}
