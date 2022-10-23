// pages/index/index.json.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rules: [
      { value: 'mother', name: '妈妈', checked: false },
      { value: 'father', name: '爸爸', checked: false },
      { value: 'baby', name: '南希宝宝', checked: true },
    ],
    userInfo: {
      userIcon: getApp().globalData.userIcon,
      userName: getApp().globalData.userName,
      success: getApp().globalData.success,
    },
    loginState: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const appInfos = getApp();
    console.log(appInfos, 'appInfos');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // setTimeout(() => {
    //   this._startChatRoom();
    // }, 30);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onRuleChange(e) {
    const detail = e.detail;
    this.data.rules = this.data.rules.map(item => {
      if (item.value === detail?.value) {
        return { ...item, checked: true };
      } else {
        return { ...item, checked: false };
      }
    });
  },
  _startChatRoom(event) {
    wx.navigateTo({
      url: '../chatflow/index',
    });
  },
  _startTimeMachine(event) {
    wx.navigateTo({
      url: '../imgshow/index',
    })
  },
  _manualGetUserInfo() {
    const appInfos = getApp();
    if (appInfos.globalData.loginState) {
      wx.getUserProfile({
        lang: 'zh_CN',
        desc: '展示用户头像表明是本人',
        success: ({ userInfo }) => {
          const { nickName, avatarUrl } = userInfo;
          getApp().globalData.userInfo = {
            userIcon: avatarUrl,
            userName: nickName,
            success: true,
          };
          this.setData({
            userInfo: {
              userIcon: avatarUrl,
              userName: nickName,
              success: true,
            }
          });
        },
        fail: (error) => {
          console.log('获取用户信息失败', error)
        },
        complete: () => {
        }
      });
    } else {
      wx.login({
        timeout: 600000, // 一分钟超时时间
        success:() => {
          wx.getUserProfile({
            lang: 'zh_CN',
            desc: '展示用户头像表明是本人',
            success: ({ userInfo }) => {
              const { nickName, avatarUrl } = userInfo;
              getApp().globalData.userInfo = {
                userIcon: avatarUrl,
                userName: nickName,
                success: true,
              };
              this.setData({
                userInfo: {
                  userIcon: avatarUrl,
                  userName: nickName,
                  success: true,
                }
              });
            },
            fail: (error) => {
              console.log('获取用户信息失败', error)
            },
            complete: () => {
            }
          });
        },
        fail: () => {
          this.setData({ loginState: false });
        }
      })
    }
  }
})