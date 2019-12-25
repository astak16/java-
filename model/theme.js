import {HTTP} from "../utils/http"

class Theme {
    static async getHomeLocationA() {
        return await HTTP.request({
            url: "theme/by/names",
            data: {names: "t-1"}
        })
    }
}

export {Theme}
