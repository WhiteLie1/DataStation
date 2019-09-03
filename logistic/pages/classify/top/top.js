Page({
  data: {
    brandList: []
  },
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://whatdoyoudo.club/v1/brand',
      success(res) {
        that.setData({ brandList: res.data })
      }
    })
  }
})