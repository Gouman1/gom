import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import {store} from './store'
import {Msg} from './tools/message';

NProgress.configure({showSpinner: false}); // NProgress Configuration

const userInfo = {
  roles: ['editor']
};

/** 路由控制 */
router.beforeEach((to, from, next) => {
  /** 判断访问的是前台还是后台 */
  const isAdmin = /\/admin/.test(to.path);
  /** 判断用户是否已经登录 */
  const {isLogin} = store.getters;
  if (isAdmin) NProgress.start();
  if (isLogin) {
    /** 已经登录情况下访问 /login, 则直接进入 /admin */
    if (to.path === '/home') {
      next({path: '/admin'});
      NProgress.done()
    } else {
      if (userInfo.isInfo) {
        /* eslint-disable no-constant-condition */
        if ('动态权限判断') {
          next()
        } else {
          next({path: '/404', replace: true, query: {noGoBack: true}})
        }
      } else {
        /** 获取当前权限菜单加入到路由中 */
        store.dispatch('GetRouters', userInfo.roles).then(() => {
          userInfo.isInfo = true;
          router.addRoutes(store.getters.addRouters);
          next({...to, replace: true}); // *** 后面不可再出现代码。否则会重复执行此函数 ***
        });
      }
    }
  } else {
    if (!isAdmin) {
      /** 浏览门户前台页面 */
      next()
    } else {
      next('/home');
      NProgress.done();
      Msg.error('检测到您当前未登录，请先登录');
    }
  }
});

router.afterEach(() => {
  NProgress.done()
});
