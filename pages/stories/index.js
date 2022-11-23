// pages/stories/index.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    name: "Michael",
    fontSize: 46,
    fontColor: "yellow",
    globalMessage: app.globalData.message,
    // stories: app.globalData.stories
  },

  goToStory(e) {
    console.log('this is the event of goToStory', e)
    wx.navigateTo({
      url: `/pages/stories/show?id=${e.currentTarget.dataset.storyindex}`,
    })
  },

  makeFontBigger(){
    // take data from the data object
    let fontSize = this.data.fontSize

    // manipulate the data
    fontSize = fontSize + 6

    // add the new data to the data object
    this.setData({fontSize})

    wx.showToast({
      title: "Success",
      duration: 2000
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
      // this is how i add data to the page data object ---->  this.setData
      const message = "i just added this data"
      this.setData({ message })

      // this is to get stories from globalData
      // const stories = app.globalData.stories
      // this.setData({stories})

      // this is to get stories from storage
      const stories = wx.getStorageSync('stories')
      this.setData({stories})

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