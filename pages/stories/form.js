// pages/stories/form.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    formTitle: "",
    formContent: "",
  },

  submitStory(e){
    console.log('form submit', e)
    // for a form the target is:  e.detail.value

    const { title, content } = e.detail.value
    // const title = e.detail.value.title
    // const content = e.detail.value.content

    const data = { story: { title, content}}

    // adding stories to global data
    // app.globalData.stories.push({title, content})

    // adding stories to storage (cache)
    // const stories = wx.getStorageSync('stories')
    // stories.unshift({title, content})
    // wx.setStorageSync('stories', stories)

    // check if there is an ID in my data ---> update, else ----> new

    if (this.data.id) {
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${this.data.id}`,
        method: "PUT",
        data: data,
        success(res) {
          console.log('res.data',res)
          const id = res.data.id
          this.setData({id: ""})
          wx.switchTab({
            url: '/pages/stories/index',
          })
        },
        fail(errors) {
          console.log('Errors',errors)
        }
      })
    } else {
      wx.request({
        url: 'http://localhost:3000/api/v1/stories',
        method: "POST",
        data: data,
        success(res) {
          console.log('res.data',res)
          const id = res.data.id
          wx.navigateTo({
            url: `/pages/stories/show?id=${id}`,
          })
        },
        fail(errors) {
          console.log('Errors',errors)
        }
      })
    }



    // got back to a previous page
    // wx.switchTab({
    //   url: '/pages/stories/index'
    // })


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
    const page = this
    // is there an id in the cache?

    
        // if yes:  call the back end and get the data for that id, and set the form values to the data
    if (wx.getStorageSync('id')) {
        const id = wx.getStorageSync('id')
        wx.request({
          url: `http://localhost:3000/api/v1/stories/${id}`,
          success(res) {
            page.setData({formTitle: res.data.title, formContent: res.data.content})
          }
        })
        // after i use the id, i need to clear the cache
        wx.removeStorageSync('id')
    } else {
      // there is no id: clear the form values
      this.setData({formTitle: "", formContent: ""})
      
    }



  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {
    this.setData({id: ""})
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