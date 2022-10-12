const config = require('./config');

// list测试
const APP_KEY = '4cd4a94037bf11edb19a0b82c5d1fd7a';
const ACCESS_TOKEN = 'e9c7b748f0e34476a4257b127d6fdba8';
// 此处相办法获取用户头像
App({
  globalData: { // 全局变量
    appKey: APP_KEY,
    token: ACCESS_TOKEN,
  },
  onLaunch() {
    // 加载完成，启动插件初始化
  }
});