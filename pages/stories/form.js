// pages/stories/form.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  createNewStory(e){
    console.log('form submit', e)
    // for a form the target is:  e.detail.value

    const { title, content } = e.detail.value

    // adding stories to global data
    // app.globalData.stories.push({title, content})

    // adding stories to storage (cache)
    const stories = wx.getStorageSync('stories')
    stories.unshift({title, content})
    wx.setStorageSync('stories', stories)

    // got back to a previous page
    wx.switchTab({
      url: '/pages/stories/index'
    })

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

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