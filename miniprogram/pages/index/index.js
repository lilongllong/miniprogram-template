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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const appInfos = getApp();
    console.log('globalData', appInfos.globalData);
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
    console.log(e, this.data.rules);
  },
  _startChatRoom(event) {
    wx.navigateTo({
      url: '../chatflow/index',
  });
  }
})