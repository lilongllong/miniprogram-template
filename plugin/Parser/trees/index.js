// plugin/Parser/trees/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nodes: {
      type: Array,
      value: [],
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgLoad: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    previewEvent(e) {
      this.triggerEvent('preview', e, {});
    },
    downloadEvent(e) {
      // 监听 tap事件，进行资源下载
    },
    mediaError(e) {
      // 媒体资源加载失败
    },
  }
})
