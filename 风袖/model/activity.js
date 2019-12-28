import { HTTP } from "../utils/http";

class Activity {
  static locationD = "a-2";

  static async getHomeLocationD() {
    return await HTTP.request({
      url: `activity/name/${Activity.locationD}`
    });
  }
}

export { Activity };
