import {server} from '@/tools/servers'

/**
 * 登陆
 */
export class LoginApi {
  static login (param) {
    return server.connection('POST', '/auth/login',param)
  }

  // static getRole(account){
  //   return server.connection('GET',`/module/queryRoleInfo/${account}`)
  // }
  static logout () {
    return server.connection('POST', '')
  }
}
