import {HTTP} from "../utils/http";

class Banner {
    static locationB = "b-1"

    static async getHomeLocationB() {
        return await HTTP.request({
            url: `banner/name/${Banner.locationB}`
        })
    }
}

export {
    Banner
}