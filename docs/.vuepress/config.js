module.exports = {
    title: '学习笔记',
    description: '为了专升本，为了更好的生活',
    head: [
        ['link', { rel: 'icon', href: `https://cdn.static.ihtry.com/static/images/favicon.ico` }]
    ],
    // 主题配置
    themeConfig: {
        logo: 'https://code-static.oss-cn-beijing.aliyuncs.com/static/images/690x200.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '科目', items: [
                    { text: '数学', link: '/class/math/' },
                    { text: '英语', link: '/class/english/' },
                    { text: '计算机', link: '/class/computer/' }
                ]
            },
            {
                text: '学习视频', link: '/class/video/'
            },
            { text: '卫梦博客', link: 'https://blog.ihtry.com' }
        ],
        // 滚动效果
        smoothScroll: true
    }

}