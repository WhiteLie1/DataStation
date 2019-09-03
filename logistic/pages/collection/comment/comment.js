Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: { "img": "https://img.alicdn.com/imgextra/i4/2974508422/O1CN01mhPwGu2C5KCa1EgT9_!!2974508422.jpg", "title": "女人四十冻龄秘密", "user_name": "靓肤小姐姐" },
    user: { "img": "https://img2.woyaogexing.com/2019/08/15/4970de56766a0744!400x400_big.jpg", "name": "肖战", "time": "11：59" },
    msg:'',
    list:''
  },

  toMsg: function (e) {
    this.setData({
      msg: e.detail.value
    })
  },
  handleSubmit:function(e){
    this.setData({
      list:this.data.msg
    })
    this.data.msg = ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})