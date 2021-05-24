export default [
  {
    path: '/admin',
    component: () => import('../packages/ui/container'),
    children: [
      {
      path: 'ShowIndex',
      name: 'ShowIndex',
      component: () => import('../view/show/ShowIndex')
    },
    {
      path: 'ShowModel',
      name: '模型展示',
      component: () => import('../view/show/ShowModel')
    }, {
      path: '/',
      name: '主页',
      component: () => import('../view/show/HomePage/MainPage')
    },
      {
        path: '/RecommendDetail',
        name: '主页详情',
        component: () => import('../view/show/HomePage/RecommendDetail')
      },
      {
        path: 'classify',
        name: '分类',
        component: () => import('../view/show/ClassifyPage/MainPage')
      },
      {
        path: 'MyStore',
        name: '我的收藏',
        component: () => import('../view/show/MyStore/MainPage')
      },
      {
        path: 'history',
        name: '历史记录',
        component: () => import('../view/show/HistoryPage/MainPage')
      },
      {
        path: 'personal',
        name: '个人中心',
        component: () => import('../view/show/Personal/MainPage')
      },
      {
        path: 'hotspot',
        name: '热点分析',
        component: () => import('../view/show/HotSpotPage/MainPage')
      },
    ]
  }
]
