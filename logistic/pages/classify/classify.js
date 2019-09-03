Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    imgUrls: ["https://gdp.alicdn.com/imgextra/i3/1664976033/O1CN01DoqlQ41uR9xc9xZya_!!1664976033.jpg",
      "https://gdp.alicdn.com/imgextra/i4/1664976033/O1CN01aTYvXW1uR9xdOeimk_!!1664976033.jpg",
      "https://gdp.alicdn.com/imgextra/i3/1664976033/O1CN01nv3u0Q1uR9xcnfL5Y_!!1664976033.jpg",
      "https://gdp.alicdn.com/imgextra/i3/1664976033/O1CN01iUIMEW1uR9xVJt6fw_!!1664976033.jpg"
    ],
    function: [{
      "img": "/icons/1.png",
      "name": "每日推荐",
      "event": ""
    }, {
      "img": "/icons/2.png",
      "name": "排行榜",
      "event": "./top/top"
    }, {
      "img": "/icons/3.png",
      "name": "护肤广场",
      "event": "./square/square"
    }, {
      "img": "/icons/4.png",
      "name": "护肤日记",
      "event": "./diary/diary"
    }],
    goods: [{
      "img": "https://img.alicdn.com/tps/TB1G5oxMVXXXXbFXFXXXXXXXXXX-190-200.jpg",
      "desc": "女人四十冻龄秘密",
      "tag": "去皱"
    }, {
      "img": "https://img.alicdn.com/imgextra/i4/2974508422/O1CN01mhPwGu2C5KCa1EgT9_!!2974508422.jpg",
      "desc": "肌肤似雪透春羞",
      "tag": "美白"
    }, {
      "img": "https://img.alicdn.com/imgextra/i1/45659523/O1CN01Fo05kz2KDaGm6nOkd_!!45659523.jpg",
      "desc": "满脸水灵的模样",
      "tag": "补水"
    }, {
      "img": "https://img.alicdn.com/imgextra/i1/45659523/O1CN01Fo05kz2KDaGm6nOkd_!!45659523.jpg",
      "desc": "满脸水灵的模样",
      "tag": "补水"
    }, {
      "img": "https://img.alicdn.com/tps/TB1G5oxMVXXXXbFXFXXXXXXXXXX-190-200.jpg",
      "desc": "女人四十冻龄秘密",
      "tag": "去皱"
    }, {
      "img": "https://img.alicdn.com/imgextra/i4/2974508422/O1CN01mhPwGu2C5KCa1EgT9_!!2974508422.jpg",
      "desc": "肌肤似雪透春羞",
      "tag": "美白"
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const requestTask =wx.request({
    //   url: 'https://whatdoyoudo.club/api/database/brand',
    //   method:"get",
    //   header:{
    //     "content-type":"application/json"
    //   },
    //   success:(res) =>{
    //     this.setData({
    //       brand:res.data
    //     })
    //   }
    // })
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