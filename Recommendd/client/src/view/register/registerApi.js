import {server} from '@/tools/servers'

/**
 * 登陆
 */
export class RegisterApi {
  static register (params) {
    return server.connection('POST', '/auth/register', params)
  }

  static checkAccount (param) {
    return server.connection('POST', '/auth/checkAccount', param)
  }
}
