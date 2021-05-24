/**
 * user
 */

import {LoginApi} from '@/view/login/login-api'
import {Msg} from '../../tools/message'
import {Auth} from './auth'
const defaultUser = {account: '', passWord: '', remember: false}

export default {
  state: {
    /** token */
    token: Auth.getToken() || null,
    /** 用户登陆角色信息 */
    userInfo: Auth.getUserInfo() || {},
    /** 用户登陆账户密码 */
    accountPwd: Auth.getAccountPwd() || defaultUser,
    /** 是否登陆 */
    isLogin: Auth.getLogin() || false,
    role: Auth.setRole() || ''
  },
  /** 计算属性 */
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(value => value.done)
    // }
  },
  /** 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation */
  mutations: {
    ACCOUNT_AUTH_STATUS_CHANGED (state, data) {
      const res = data.data;
      const param = data.params;
      if (res) {
        state.token = res.token;
        state.userInfo = param.account;
        state.isLogin = true;
        Auth.setUserInfo(state.userInfo);
        Auth.setLogin(state.isLogin);
        Auth.setToken(state.token);
      }
    },
    ACCOUNT_LOGOUT_FAILURE (state) {
      state.isLogin = false;
      Auth.removeUserInfo();
      Auth.removeLogin();
      Auth.removeToken()
    },
    handleRemember (state, data) {
      const userInfo = data.params;
      if (userInfo && userInfo.remember) {
        this.state.accountPwd = userInfo; // 记住用户名和密码
        Auth.setAccountPwd(this.state.accountPwd)
      } else {
        // Auth.removeAccountPwd();
      }
    },
    saveRole (state, data) {
      state.role = data.res.data.data;
      Auth.setRole(state.role);
    }
  },
  /** Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。 */
  actions: {
    /** 登录 */
    accountLoginSubmit ({commit}, params) {
      return new Promise((resolve, reject) => {
        LoginApi.login({account: params.account, passWord: params.passWord}).then((res) => {
          console.log(res.data);
          if (res.data.status) {
            console.log('%c 身份被服务器接受', 'color:#fa8c16');
            commit('ACCOUNT_AUTH_STATUS_CHANGED', {...res, params});
            commit('handleRemember', {...res, params});
            resolve(res.data)
          } else {
            commit('ACCOUNT_LOGOUT_FAILURE');
            // Msg.error(res.data.message);
            // reject(res.data);
            resolve(res.data)
          }
        }).catch(err => {
          console.log('%c 身份被服务器拒绝', 'color:red');
          Msg.error(err);
          commit('ACCOUNT_LOGOUT_FAILURE')
        })
      })
      //   .then(
      //   function (data) {
      //   return new Promise((resolve, reject) => {
      //     LoginApi.getRole(params.account).then((res) => {
      //       if (res.data.data !== null && res.data.data !== undefined && res.data.data !== '') {
      //         commit('saveRole', {...data, res});
      //         resolve('true');
      //       }
      //     })
      //   })
      // }
      // )
    },
    /** 登出 */
    accountLogoutSubmit ({commit}) {
      return new Promise((resolve, reject) => {
        // LoginApi.logout().then(res => {
        commit('ACCOUNT_LOGOUT_FAILURE')
        resolve('true')
        // }).catch(err => {
        //   reject(err)
        // })
      })
    }
  }
}
