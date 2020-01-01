import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";
import {Activity} from "../../models/activity";
import {SpuPaging} from "../../models/spu-paging";

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
    bannerG: null,
    spuPaging: null,
    loadingType: "loading"
  },
  
  async onLoad() {
    this.initAllData();
    this.initBottomSpuList()
  },
  async initBottomSpuList() {
    const paging = SpuPaging.getLatestPaging()
    const data = await paging.getMoreData()
    this.data.spuPaging = paging
    if (!data) return
    
    wx.lin.renderWaterFlow(data.items)
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
  
  onReachBottom: async function () {
    const data = await this.data.spuPaging.getMoreData()
    if (!data) return
    wx.lin.renderWaterFlow(data.items)
    if (!data.moreData) {
      this.setData({
        loadingType: "end"
      })
    }
  },
  
  onShareAppMessage: function () {
  }
});
