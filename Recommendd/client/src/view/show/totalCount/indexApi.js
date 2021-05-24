import {server} from '../../../tools/servers'

export class IndexApi {
  static getAge() {
    return server.connection('GET', `/api/totalCountController/getTotalCountAge`)
  }

  static getGender() {
    return server.connection('GET', `/api/totalCountController/getTotalCountGender`)
  }

  static getEducation() {
    return server.connection('GET', `/api/totalCountController/getTotalCountEducation`)
  }
}
