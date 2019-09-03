const app = getApp()

Page({
  data: {
    is_shoucang: 0,
    goods_info: {
      goods_id: 1,
      goods_yunfei:0,
    },
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pjDataList: [{
        headpic: 'https://img2.woyaogexing.com/2019/08/15/f97de1bb968943aa89bd1974dbcd4f4e!400x400.jpeg',
        author: '张三',
        add_time: '2018-06-01',
        content: '好评好评，真实太好了!'
      },
      {
        headpic: 'https://img2.woyaogexing.com/2019/08/15/f97de1bb968943aa89bd1974dbcd4f4e!400x400.jpeg',
        author: '张三',
        add_time: '2018-06-01',
        content: '好评好评，真实太好了!'
      }
    ],

    commodity: {},

    commodityId: "",

    bottom_function: [{
      "icon": "/icons/shoucang.png",
      "text": "收藏",
      "event": "shoucang"
    }, {
      "icon": "/icons/kefu.png",
      "text": "客服",
      "event": "kefu"
    }, {
      "icon": "/icons/gouwuche.png",
      "text": "购物车",
      "event": "addToCart"
    }]
  },
  onLoad: function(options) {
    let that = this
    this.setData({
      commodityId: options.id
    })
    this.fetchCommodity(options.id).then((res) => {
      that.setData({
        commodity: res.data
      });
      console.log(that.data.commodity.detailImage)
    })
  },

  // 商品详情图片预览
  previewImage: function(e) {
    console.log(e)
  },
  fetchCommodity(id) {
    let promise = new Promise(function(resolve, reject) {
      wx.request({
        url: app.globalData.serverPath + `/commodity/detail?id=${id}`,
        success: (res) => {
          resolve(res)
        }
      })
    })
    return promise
  },
  addToCart() {
    let curCommodityId = this.data.commodityId
    let cart = wx.getStorageSync('cart')
    let newAmount
    // 本地无购物车数据处理方式
    if (!cart) {
      app.updateRemoteCart(curCommodityId, 1).then(() => app.fetchRemoteCart()).then((res) => wx.setStorage({
        key: 'cart',
        data: res.data
      }))
      return
    }
    // 在本地购物车中查找目标商品
    let added = false
    for (let cartCommodity of cart.commodityList) {
      if (cartCommodity._id == curCommodityId) {
        cartCommodity.amount += 1
        newAmount = cartCommodity.amount
        added = true
      }
    }
    // 未找到目标商品
    if (!added) {
      app.updateRemoteCart(curCommodityId, 1).then(() => app.fetchRemoteCart()).then((res) => wx.setStorage({
        key: 'cart',
        data: res.data
      }))
      return
    }
    //找到目标商品，推向服务端推送更新数据，以及更新本地缓存数据
    app.updateRemoteCart(curCommodityId, newAmount)
    wx.setStorage({
      key: 'cart',
      data: cart
    })
    //提示用户加入购物车成功
    wx.showToast({
      title: '添加成功~',
      icon: 'success',
      mask:"true",
      image:"/icons/success.png",
      duration: 1000,
    })
  }
})