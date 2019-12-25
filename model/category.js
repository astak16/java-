import {HTTP} from "../utils/http";

class Category{
    static async getGirdCategory(){
        return await HTTP.request({
            url:`category/grid/all`
        })
    }
}

export {
    Category
}