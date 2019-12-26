import {Theme} from "../../model/theme"
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({


    data: {
        themeA: null,
        themeE: null,
        themeF: null,
        themeH: null,
        bannerB: null,
        grid: [],
        activityD: null
    },

    async onLoad(options) {
        this.initAllData()
    },
    async initAllData() {
        const theme = new Theme()
        await theme.getThemes()
        const themeA = theme.getHomeLocationA()
        console.log(themeA)
        const themeE = theme.getHomeLocationE()
        const themeF = theme.getHomeLocationF()
        const themeH = theme.getHomeLocationH()
        const bannerB = await Banner.getHomeLocationB()
        const grid = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()
        this.setData({
            themeA,
            themeE,
            themeF,
            themeH,
            bannerB,
            grid,
            activityD
        })
    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }
})
