import {server} from '../../../tools/servers'

export class sliderApi {
  static get (account) {
    return server.connection('GET', `/module/selectModuleList/${account}`)
  }
}
