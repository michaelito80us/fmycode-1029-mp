// pages/stories/show.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    
  },

  deleteStory(){

    wx.showModal({
      title: 'Are you sure?',
      content: 'There is no turning back',
      confirmText: "YES",
      cancelText: "NO",
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          const id = this.data.story.id
          wx.request({
            url: `http://localhost:3000/api/v1/stories/${id}`,
            method: "DELETE",
            success(res) {
              console.log(res)
              wx.switchTab({
                url: '/pages/stories/index',
              })
            }
          })
        }
      }
    })

    
  },

  editStory(){
    const id = this.data.story.id
    wx.setStorageSync('id', id)

    wx.switchTab({
      url: '/pages/stories/form',
    })


  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const page = this
      console.log('story shoy onLoad options', options)
      const id = options.id

      // if we are using global data
      // const story = app.globalData.stories[index]

      // if we are using cache memory
      // const story = wx.getStorageSync('stories')[index]
      // this.setData({story})

      // if we are calling an api
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${id}`,
        success(res) {
          console.log('response from wx.request for GET story', res.data)
          page.setData({story: res.data})
        }
      })
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