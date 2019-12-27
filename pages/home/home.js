import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({
  data: {
    themeA: null,
    themeE: null,
    themeESpu: [],
    themeF: null,
    themeH: null,
    bannerB: null,
    grid: [],
    activityD: null,
    bannerG: null
  },
  
  async onLoad(options) {
    this.initAllData();
  },
  async initAllData() {
    const theme = new Theme();
    
    await theme.getThemes();
    const themeA = theme.getHomeLocationA();
    const themeE = theme.getHomeLocationE();
    let themeESpu = []
    if (themeE.online) {
      const data = await Theme.getHomeLocationESpu()
      if (data) {
        themeESpu = data.spu_list.slice(0, 8)
      }
    }
    const themeF = theme.getHomeLocationF();
    const themeH = theme.getHomeLocationH();
    const bannerB = await Banner.getHomeLocationB();
    const grid = await Category.getHomeLocationC();
    const activityD = await Activity.getHomeLocationD();
    const bannerG = await Banner.getHomeLocationG()
    this.setData({
      themeA,
      bannerB,
      grid,
      activityD,
      themeE,
      themeESpu,
      themeF,
      themeH,
      bannerG
    });
  },
  
  onPullDownRefresh: function () {
  },
  
  onReachBottom: function () {
  },
  
  onShareAppMessage: function () {
  }
});
