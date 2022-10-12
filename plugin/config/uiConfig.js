const uiConfig = {
  global: {
    primaryColor: '',
    background: '#9BD3FF',
  },
  timestamp: {
    color: '#8c8c8c',
  },
  cardQuestion: {  // 用户发送消息
    background: '#00A4FF',  // 背景色
    color: '#fff',  // 文字颜色
  },
  cardAnswer: {   // 机器人回复卡片
    background: '#fff',  // 背景色
    divider: {  // 分割线
      color: '#F3F3F3',  // 颜色
    },
    content: {    // 回复内容
      color: '#333333',  // 文字颜色
      moreButton: {  // 查看更多按钮
        background: '#C4C4C4',  // 背景色
        color: '#fff',  // 文字颜色'#00A4FF',//
      },
      dialog: {   // 更多弹窗
        closeButton: {  // 关闭弹窗按钮
          background: '#C4C4C4',  // 背景色
          color: '#fff',  // 文字颜色
        },
        content: {  // 更多弹窗内容
          background: '#fff',  // 背景色
          color: '#333333',  // 文字颜色
        },
      },
    },
    list: { // 列表颜色配置
      background: '#fff',  // 背景色
      title: {
        color: '#333333',  // 文字颜色
      },
      divider: {  // 分割线
        color: '#F3F3F3',  // 颜色
      },
      item: {
        color: '#333333',  // 文字颜色
        background: '#fff',  // 背景色
      },
      moreButton: {  // 查看更多按钮
        background: '#C4C4C4',  // 背景色
        color: '#fff',  // '#00A4FF'// 文字颜色
      },
      dialog: { // 更多弹窗
        background: '#fff',  // 背景色
        closeButton: {  // 关闭弹窗按钮
          background: '#C4C4C4',  // 背景色
          color: '#fff',  // 文字颜色
        },
        title: {
          color: '#333333',  // 文字颜色
        },
        item: {
          color: '#333333',  // 文字颜色
          background: '#fff',  // 背景色
        },
      },
    },
    recommend: {    // 推荐问题
      title: {
        icon: 'https://dingdangcdn.qq.com/aiback_cos/dingdang/miniprogram/chatflow/cbdc362b417a4b0d5297ec360464f894.png',
        color: '#9F9F9F',
      },
      item: {
        color: '#333333',
      },
      divider: {
        color: '#F3F3F3',
      },
    },
    feedback: {   // 反馈
      background: '#fff',  // 背景色
      color: '#00A4FF',  // 文字颜色
      goodIcon: {  // 点赞按钮
        normal: 'https://dingdangcdn.qq.com/aiback_cos/dingdang/miniprogram/chatflow/73039107804f9960697bd20b41e22c51.png',  // 正常图标url
        selected: 'https://dingdangcdn.qq.com/aiback_cos/dingdang/miniprogram/chatflow/bcc0a1b4f75f8a4405f2fc5f46f510a2.png',  // 选中图标url
      },
      badIcon: {  // 点踩按钮
        normal: 'https://dingdangcdn.qq.com/aiback_cos/dingdang/miniprogram/chatflow/9988a771ebd5b86fe033936022dfb6ef.png',
        selected: 'https://dingdangcdn.qq.com/aiback_cos/dingdang/miniprogram/chatflow/3fce607e2bbd2f2590ec345d02bca6b5.png',
      },
    },
    // 单视频卡片
    singleVideo: {
      background: '#FFF', // '#9696c7',//卡片背景色
      titleColor: '#333333', // '#00FF00',//卡片标题颜色
      subTitleColor: '#999999', // '#0000FF',//卡片副标题颜色
      textContentColor: '#999999', // '#FF0000'//卡片内容颜色
    },
    // 图文视频
    videoNote: {
      background: '#FFF', // '#9696c7',//卡片背景色'#FFF',//
      titleColor: '#333333', // '#00FF00',//卡片标题颜色
      subTitleColor: '#999999', // '#0000FF',//卡片副标题颜色
      textContentColor: '#999999', // '#FF0000'//卡片内容颜色
    },
    // 视频主页
    videoPage: {
      background: '#FFF', // '#9696c7',//卡片背景色'#FFF',//
      titleColor: '#333333', // '#00FF00',//卡片标题颜色
      subTitleColor: '#999999', // '#0000FF',//卡片副标题颜色
      textContentColor: '#999999', // '#FF0000'//卡片内容颜色
    },
    // 视频列表
    videoList: {
      background: '#FFF', // '#9696c7',//卡片背景色'#FFF',//
      titleColor: '#333333', // '#00FF00',//卡片标题颜色
      subTitleColor: '#999999', // '#0000FF',//卡片副标题颜色
      textContentColor: '#999999', // '#FF0000'//卡片内容颜色
      moreButton: {  // 查看更多按钮
        background: '#C4C4C4',  // 背景色
        color: '#fff',  // '#00A4FF',// 文字颜色
      },
    },
    // 视频列表 更多 页面
    videoDialog: {
      background: '#FFF', // '#9696c7',//卡片背景色'#FFF',//
      closeButton: {
        background: '#C4C4C4', // '#bc96c7',//卡片背景色'#FFF',//
        color: '#FFFFFF', // '#e3e3ef',//卡片背景色'#FFF',//
      },
      titleColor: '#333333', // '#00FF00',//卡片标题颜色
      subTitleColor: '#999999', // '#0000FF',//卡片副标题颜色
      textContentColor: '#999999', // '#FF0000'//卡片内容颜色
    },
    moreLink: {
      background: '#FFF', // '#bc96c7',//卡片背景色'#FFF',//
      color: '#00A4FF', // '#e3e3ef',//卡片背景色'#FFF',//
    },
  },
};

module.exports = uiConfig;