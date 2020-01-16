import {HTTP} from "../utils/http";

class Category {
  static async getHomeLocationC() {
    return await HTTP.request({
      url: `category/grid/all`
    });
  }
}

export {Category};
