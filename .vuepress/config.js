const moment = require('moment');
moment.locale("zh-cn")
module.exports = {
  title: "Vuepress",
  description:"小喳喳的生活日记",
  base:"/docs/",
  themeConfig: {
    logo: "/assets/img/hero.png",
    lastUpdated: '更新时间', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'External', link: 'https://google.com' },
    ]
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ]
};
