const config = require('./config');

// list测试
const APP_KEY = '4cd4a94037bf11edb19a0b82c5d1fd7a';
const ACCESS_TOKEN = 'e9c7b748f0e34476a4257b127d6fdba8';
// 此处相办法获取用户头像
App({
  globalData: { // 全局变量
    appKey: APP_KEY,
    token: ACCESS_TOKEN,
    userInfo: {
      userIcon: 'https://dingdang-kefu-1251316161.cos.ap-guangzhou.myqcloud.com/industry/common/1663915257_1663915257209.png',
      userName: '',
      success: false,
    },
    loginState: false,
  },
  onLaunch() {
    // 加载完成，启动插件初始化
    wx.login({
      timeout: 600000, // 一分钟超时时间
      success:() => {
        this.globalData.loginState = true;
      },
      fail: () => {
        this.globalData.loginState = false;
      }
    })
  }
});