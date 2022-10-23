// pages/imgshow/index.js
Page({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    userIcon: getApp().globalData.userInfo.userIcon,
    userName: getApp().globalData.userInfo.userName,
    imgList: [
      "https://alifei01.cfp.cn/creative/vcg/800/version23/VCG41157526459.jpg",
      "https://alifei01.cfp.cn/creative/vcg/800/version23/VCG41157526459.jpg",
      "https://alifei01.cfp.cn/creative/vcg/800/version23/VCG41157526459.jpg",
      "https://alifei01.cfp.cn/creative/vcg/800/version23/VCG41157526459.jpg",
      "https://alifei01.cfp.cn/creative/vcg/800/version23/VCG41157526459.jpg",
      "https://alifei01.cfp.cn/creative/vcg/800/version23/VCG41157526459.jpg",
      "https://alifei01.cfp.cn/creative/vcg/800/version23/VCG41157526459.jpg"
    ]
  },

  onLoad(options) {
    this.setData({ 
      userIcon: getApp().globalData.userInfo.userIcon,
      userName: getApp().globalData.userInfo.userName
    });
  },

  /**
   * Component methods
   */
  methods: {

  }
})
