// pages/landing/landing.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
  },

  goToNextPage(e) {
    // console.log('what is this event?', e)
    wx.switchTab({
      url: '/pages/stories/index',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    console.log("this is onLoad")
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    console.log("this is onReady")
    // setTimeout( ()=> {
    //   this.goToNextPage()
    // }, 4000)
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    console.log("this is onShow")

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})