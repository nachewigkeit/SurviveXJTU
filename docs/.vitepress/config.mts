import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true
  },
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
  }, 
  lang: 'zh-CN',
  base: '/SurviveXJTU/',
  title: "SurviveXJTU",
  description: "西安交大生存指南，更适合西交大学子的生存指南。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前言', link: '/前言' },
      { text: '人生篇', link: '/人生篇' },
      { text: '入学篇', link: '/入学篇' },
      { text: '研学篇', link: '/研学篇' },
      { text: '路线篇', link: '/路线篇' },
      { text: '保研篇', link: '/保研篇' },
      { text: '备考篇', link: '/备考篇' }
    ],

    sidebar: {
      '/前言/':[{
        text: '前言',
        link: '/前言/',
        collapsed: true,
        items: [
          { text: '笔者的话', link: '/前言/笔者的话' },
        ]
      }],
      '/人生篇/':[{
        text: '人生篇',
        link: '/人生篇/',
        collapsed: true,
        items: [
          { text: '关于西交', link: '/人生篇/关于西交' },
          { text: '你想要成为什么样的人', link: '/人生篇/你想要成为什么样的人' },
          { text: '种一棵树', link: '/人生篇/种一棵树' },
          { text: '开源精神', link: '/人生篇/开源精神' },
        ]
      }],
      '/入学篇/':[{
        text: '入学篇',
        link: '/入学篇/',
        collapsed: true,
        items: [
          { text: '学生群', link: '/入学篇/学生群' },
          { text: '开学携带的东西', link: '/入学篇/开学携带的东西' },
          { text: '报道相关', link: '/入学篇/报道相关' },
          { text: '推荐与不推荐做的事情', link: '/入学篇/推荐与不推荐做的事情' },
          { text: '开学考', link: '/入学篇/开学考' },
        ]
      }],
      '/研学篇/':[{
        text: '研学篇',
        link: '/研学篇/',
        collapsed: true,
        items: [
          { text: '课程的分类', link: '/研学篇/课程的分类' },
          { text: '四种学生与四种学生', link: '/研学篇/四种学生与四种学生' },
          { text: '两种自学目标', link: '/研学篇/两种自学目标' },
          { text: '规避教材有罪论', link: '/研学篇/规避教材有罪论' },
          { text: '记笔记是一种正反馈', link: '/研学篇/记笔记是一种正反馈' },
        ]
      }],
      '/路线篇/':[{
        text: '路线篇',
        link: '/路线篇/',
        collapsed: true,
        items: [
          { text: '人工智能学习路线', link: '/路线篇/人工智能学习路线' },
        ]
      }],
      '/保研篇/':[{
        text: '保研篇',
        link: '/保研篇/',
        collapsed: true,
        items: [
          { text: '概念辨析', link: '/保研篇/概念辨析' },
          { text: '推免资格获取', link: '/保研篇/推免资格获取' },
          { text: '成绩是保研的基石', link: '/保研篇/成绩是保研的基石' },
          { text: '竞赛是加分的来源', link: '/保研篇/竞赛是加分的来源' },
          { text: '科研是唯一的含金量', link: '/保研篇/科研是唯一的含金量' },
          { text: '保研外校', link: '/保研篇/保研外校' },
        ]
      }],
      '/备考篇/':[{
        text: '备考篇',
        link: '/备考篇/',
        collapsed: true,
        items: [
          { text: '大学英语', link: '/备考篇/大学英语' },
        ]
      }],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XiStudyGroup/SurviveXJTU' }
    ]
  }
})
