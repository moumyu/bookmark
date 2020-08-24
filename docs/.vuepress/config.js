module.exports = {
  base: '/bookmark/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '书签',
      description: '书签管理器'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: '官方文档',
        ariaLabel: '官方文档',
        items: [
          { text: 'HTML', link: '/html/' },
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'CSS', link: '/css/' },
          { text: 'Engineering', link: '/engineering/' },
        ]
      },
      {
        text: '工具',
        ariaLabel: '工具',
        link: '/tools/'
      },
      {
        text: '社区',
        ariaLabel: '社区',
        link: '/community/'
      },
    ],
    sidebar: {
      '/javascript/': [
        ['', 'JavaScript'],
        ['React', 'React'],
        ['Vue', 'Vue'],
        ['Angular', 'Angular']
      ],
      '/css/': [
        ['', 'CSS'],
        ['React', 'React'],
        ['Vue', 'Vue'],
        ['Angular', 'Angular']
      ],
      '/engineering/': [
        ['', '依赖管理']
      ],
      '/tools/': [
        ['', '工具'],
        ['CodeRun', '代码运行'],
        ['Image', '图像处理'],
        ['Mirror', '国内镜像'],
        ['Activation', '激活工具'],
        ['Proxy', '代理'],
      ],
      '/community/': [
        ['', '社区'],
        ['ProjectList', '集合'],
      ]
    }
  }
}
