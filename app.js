// 小程序的全局逻辑文件
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    // 初始化云开发环境（如需使用云开发）
    // if (wx.cloud) {
    //   wx.cloud.init({
    //     traceUser: true,
    //   })
    // }
    
    // 获取系统信息
    wx.getSystemInfo({
      success: res => {
        this.globalData.systemInfo = res
        this.globalData.statusBarHeight = res.statusBarHeight
        this.globalData.windowHeight = res.windowHeight
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    // 可以在这里处理页面显示时的逻辑
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {
    // 可以在这里处理页面隐藏时的逻辑
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(error) {
    console.error('小程序错误:', error)
  },

  globalData: {
    systemInfo: {},
    statusBarHeight: 0,
    windowHeight: 0,
    // 可以在这里定义其他全局数据
  }
})