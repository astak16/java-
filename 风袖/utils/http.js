import {config} from "../config/config";
import {promisic} from "./util";

class HTTP {
  static async request({url, data, callback, method = "GET"}) {
    const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      header: {
        appkey: config.appkey
      }
    });
    return res.data;
  }
}

export {HTTP};
