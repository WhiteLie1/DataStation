Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodList: [],
    categoryList: [],
    commodityList: [],
    bc_title: "女人四十冻龄秘密",
    goods_img: "https://img.alicdn.com/imgextra/i4/2974508422/O1CN01mhPwGu2C5KCa1EgT9_!!2974508422.jpg",
    user_img: "/icons/user.png",
    user_name: "靓肤小姐姐",
    bg_desc: "胶原蛋白是个好东西，维持皮肤弹性，让你看起来容光焕发",
    test_desc:"这是一条测试商品详情信息，商品简介,这是一条测试商品详情信息，商品简介",
    functions: [{
      "active": "/icons/pinglun.png",
      "text": "评论",
      "event": "pinglun"
    }, {
      "on": "/icons/dianzan_on.png",
      "off": "/icons/dianzan.png",
      "active": "/icons/dianzan.png",
      "text": "点赞",
      "event": "dianzan"
    }, {
      "on": "/icons/shoucang_on.png",
      "off": "/icons/shoucang.png",
      "active": "/icons/shoucang.png",
      "text": "收藏",
      "event": "shoucang"
    }, {
      "active": "/icons/fenxiang.png",
      "text": "分享",
      "event": "fenxiang"
    }],
    flag: true
  },
  pinglun() {
    wx.navigateTo({
      url: './comment/comment',
    })
  },
  dianzan() {
    if (this.data.flag == true) {
      this.setData({
        "functions[1].active": this.data.functions[1].on,
        "flag": false
      })
    } else {
      this.setData({
        "functions[1].active": this.data.functions[1].off,
        "flag": true
      })
    }
  },
  shoucang() {
    if (this.data.flag == true) {
      this.setData({
        "functions[2].active": this.data.functions[2].on,
        "flag": false
      })
      wx.showModal({
        title: '提示',
        content: '收藏成功',
      })
    } else {
      this.setData({
        "functions[2].active": this.data.functions[2].off,
        "flag": true
      })
      wx.showModal({
        title: '提示',
        content: '取消收藏',
      })
    }
  },
  fenxiang() {
    wx.showModal({
      title: '转发请点击右上角三点',
      content: '在这等你很久了哦',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const requestTask = wx.request({
      //这个url是本机的IP地址 会出现不合法域名，在 >>这里设置忽略不校验合法域名
      url: 'https://whatdoyoudo.club/v1/commodity/recommend', //仅为示例，并非真实的接口地址
      success: (res) => {
        this.setData({
          goodList: res.data
        })
        console.log(res.data)
      }
    })

  }
})