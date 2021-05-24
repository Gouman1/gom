import {server} from '../../tools/servers'

export class NewApi {
  static GetData (result = {}) {
    return server.connection('GET', `/api/getData`, result)
  }
  static generateModel (id) {
    return server.connection('GET', `/api/generateModel`, id)
  }

  static submit(data){
    console.log(data);
    return server.connection('GET', `/api/runPySocket`, data)
  }

  static getUserId(data){
    return server.connection('GET', '/api/getUserId',data)
  }
  static test(){
    return server.connection('GET', '/api/test')
  }
}
