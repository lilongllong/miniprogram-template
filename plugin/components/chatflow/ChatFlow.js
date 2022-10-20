// plugin/components/chatflow/ChatFlow.js
const base = require('../../base');
const componentUtils = require('../componentUtils');

const tempMessageList = require('../../mockData/message')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userIcon: {
      type: String,
      value: 'https://3gimg.qq.com/trom_s/yunxiaowei/miniprogram/ic_yxw.png',
    },
    uiConfig: {
      type: Object,
      value: base.uiConfig,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    input_content: '', // 输入框内容
    inputTemp: '', // 保存输入框的内容
    messageList: tempMessageList, // 消息存储
    bubbles: [], // 气泡消息
    searchInputTexts: [], // 输入联想关键字
    inputBgColor: '',
    scrollY: 0,
    scrollTop: 0,
    scrollWithAnimation: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onClickMore(event) {
      const longText = event.detail.eventDetail;
      this.setData({longTextShow: true, richLongText: longText});
    },
    // 点击折叠文本展开界面的 关闭
    _onClickMoreClose(event) {
      this.setData({longTextShow: false});
    },
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    attached() {
      console.log(this.properties.uiConfig.global, 'properties');
    },
    detached() {
      console.log('离开页面');
    }
  }
})
