import {HTTP} from "../utils/http";

class Theme {
  static locationA = "t-1";
  static locationE = "t-2";
  static locationF = "t-3";
  static locationH = "t-4";
  
  themes = [];
  
  async getThemes() {
    const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`;
    this.themes = await HTTP.request({
      url: `theme/by/names`,
      data: {names}
    });
  }
  
  getHomeLocationA() {
    return this.themes.find(t => t.name === Theme.locationA);
  }
  
  getHomeLocationE() {
    return this.themes.find(t => t.name === Theme.locationE);
  }
  
  getHomeLocationF() {
    return this.themes.find(t => t.name === Theme.locationF);
  }
  
  getHomeLocationH() {
    return this.themes.find(t => t.name === Theme.locationH);
  }
  
  static async getHomeLocationESpu() {
    return Theme.getThemeSpuName(Theme.locationE)
  }
  
  static async getThemeSpuName(name) {
    return await HTTP.request({
      url: `theme/name/${name}/with_spu`
    });
  }
}

export {Theme};
