import {HTTP} from "../utils/http";

class Spu {
  static getDetail(id) {
    return HTTP.request({
      url: `spu/id/${id}/detail`
    })
  }
}

export {Spu}