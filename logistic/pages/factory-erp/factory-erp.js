// pages/factory-erp/factory-erp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    function: [{
      "img": "/icons/yuanliao.png",
      "name": "原料仓",
      "event": ""
    }, {
      "img": "/image/1.png",
      "name": "广东惠州",
      "event": "/pages/place1/place1"
    },  {
      "img": "/image/2.png",
      "name": "上海金山",
      "event": "/pages/place2/place2"
    }],
    function2: [{
      "img": "/icons/cangku.png",
      "name": "成品仓",
      "event": ""
    }, {
      "img": "/image/1.png",
      "name": "广东一号仓",
      "event": ""
    },  {
      "img": "/image/2.png",
      "name": "上海二号仓",
      "event": ""
    }],
    function3: [{
      "img": "/icons/xiaoshou.png",
      "name": "销售",
      "event": ""
    }, {
      "img": "/image/1.png",
      "name": "惠州店",
      "event": ""
    },  {
      "img": "/image/2.png",
      "name": "金山店",
      "event": ""
    }],
   
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 1
      })
    }  

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