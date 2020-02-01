import {promisic} from "./util";
import {px2rpx} from "../miniprogram_npm/lin-ui/utils/util";

const getSystemSize = async () => {
  const res = await promisic(wx.getSystemInfo)()
  return {
    windowHeight: res.windowHeight,
    windowWidth: res.windowWidth,
    screenHeight: res.screenHeight,
    screenWidth: res.screenWidth
  }
}

const getWindowHeightRpx = async () =>{
  const res = await getSystemSize()
  return px2rpx(res.windowHeight)
}
export {
  getSystemSize,
  getWindowHeightRpx
}
