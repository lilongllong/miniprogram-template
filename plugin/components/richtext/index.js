// plugin/components/richtext/index.js
const uiConfig = require('../../config/uiConfig');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      observer(newVal, oldVal) {
        // 监听数据编号
        console.log(newVal, oldVal);
      }
    },
    uiConfig: {
      type: Object,
      value: uiConfig.cardAnswer.content.moreButton,
    }
  },
  /**
   * 数据监听
   */
  observers: {
    text: function(text) {
      this.setData({
        data: text.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (s) => {
          // https://lodash.com/docs#escape
          const entityMap = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': '\'',
          };
          return entityMap[s];
          // replace的是\n，不是字符串\\n
        }).replace(/\n/g, '<br>')
        .replace(/width="100%"/g, '')
        .replace(/height="100%"/g, '') || '',
      });
      setTimeout(() => {
        this.createSelectorQuery().select("#richtext_container").boundingClientRect((event) => {
          this.onReady(event);
        }).exec();
      }, 30);
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    rich_max_height: 0,
    is_show_more: 0,
    data: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMoreClick() {
      const eventDetail = this.data.text;
      const eventOption = { bubbles: true, composed: true };
      this.triggerEvent('RichTextMoreClick', { eventDetail }, eventOption);
    },
    onRichTextClick(event) {
      // 处理点击事件
    },
    onReady(event) {
      console.log(`onReady, event = ${JSON.stringify(event)}`);
      const that = this;
      setTimeout(() => {
        // console.log("onParser, event = " + JSON.stringify(event));
        const query = that.createSelectorQuery();
        // 获取设备信息，通过宽高比计算当前机型的限制高度
        // wx.getSystemInfo({
        //   success: (res) => {
        // 通过获取当前dom节点的高度和所需的高度对比，如果高了就展示下拉，否则不展示
        query.select('#richText-view').boundingClientRect((rect) => {
          console.log('onReady rect', rect);
          if (rect.height > wx.getSystemInfoSync().windowHeight * 0.4) {
            that.setData({
              is_show_more: 1,
              rich_max_height: wx.getSystemInfoSync().windowHeight * 0.4,
            });
          }
        })
          .exec();
      }, 300);
    },
    gotoLink(event) {
      // console.log("gotoLink, event = " + JSON.stringify(event));
      const eventDetail = { url: util.unescapeHTML(event.detail.href) }; // detail对象，提供给事件监听函数
      const eventOption = { bubbles: true, composed: true, capturePhase: true }; // 触发事件的选项
      this.triggerEvent('linkClicked', eventDetail, eventOption);
    },
  },
  lifetimes: {
    attached() {
      console.log('富文本组件挂载');
    }
  }
})
