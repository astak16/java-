import {HTTP} from "../utils/http";

class SaleExplain {
  static async getFixed() {
    const explains = await HTTP.request({
      url: `sale_explain/fixed`
    })
    return explains.map(e => e.text)
  }
}

export {SaleExplain}
