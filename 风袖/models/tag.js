import {HTTP} from "../utils/http";

class Tag {
  static getSearchTags(){
    return HTTP.request({
      url:`tag/type/1`
    })
  }
}

export {Tag}
