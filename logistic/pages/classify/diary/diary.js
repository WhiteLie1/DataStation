Page({

  /**
   * 页面的初始数据
   */
  data: {
    listDetail: [{
      src: "/icons/viewList.png",
      text: "浏览列表",
      number: "50"
    }, {
      src: "/icons/likeList.png",
      text: "点赞列表",
      number: "80"
    }, {
      src: "/icons/hobbyList.png",
      text: "收藏列表",
      number: "10"
    }],
    list: [{
      img: "https://img.alicdn.com/imgextra/i3/2845660845/O1CN01YQwrnP1I73DPO6eCH_!!2845660845.jpg",
      title: "网红同款美白",
      number: "5"
    }, {
      img: "https://img.alicdn.com/imgextra/i2/533497499/O1CN0125GaYJMJRK9Zi0t_!!533497499.jpg",
      title: "欧莱雅大家庭",
      number: "13"
    }, {
      img: "https://img.alicdn.com/imgextra/i3/2377436524/O1CN01UHT2921y42T5DIlOm_!!2377436524.jpg",
      title: "澳洲去皱单品大集合",
      number: "23"
    }]
  },
  onClose(event) {
    const {
      position,
      instance
    } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？'
        }).then(() => {
          instance.close();
        });
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})