//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indexInfo:{},
    appName: app.globalData.appName
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var indexInfo = this.getIndexInfo();
    this.setData({
      indexInfo:indexInfo
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getIndexInfo:function(){
    var indexInfo = null;
    //暂时不异步获取
    // wx.request({
    //   url:"",
    //   success:function(res){
    //     console.log(res.data);

    //   }

    // })
    indexInfo = {
      items: [{
        id: '1',
        itemName: '商品名称',
        summary: '简要描述',
        price: 12,
        mPic: {
          path: "https://cdn-img.easyicon.net/png/11552/1155254.gif",
        }
      }, {
        id: '2',
        itemName: '商品名称',
        summary: '简要描述',
        price: 12,
        mPic: {
          path: "https://cdn-img.easyicon.net/png/11552/1155254.gif",
        }
      }, {
        id: '3',
        itemName: '商品名称',
        summary: '简要描述',
        price: 12,
        mPic: {
          path: "https://cdn-img.easyicon.net/png/11552/1155254.gif",
        }
      }, {
        id: '4',
        itemName: '商品名称',
        summary: '简要描述',
        price: 12,
        mPic: {
          path: "https://cdn-img.easyicon.net/png/11552/1155254.gif",
        }
      }, {
        id: '5',
        itemName: '商品名称',
        summary: '简要描述',
        price: 12,
        mPic: {
          path: "https://cdn-img.easyicon.net/png/11552/1155254.gif",
        }
      }]
    }
  return indexInfo;
  }
})


