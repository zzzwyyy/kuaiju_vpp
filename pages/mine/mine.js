Page({

  /**
   * 页面的初始数据
   */
  data: {
      user_name:'王蓥蓥',
      user_vip:0,
      user_credit:100,
      user_sex:'女',
      user_teleNum:18659023135,
      newData:'none',
      oldData:'',
      userNewInfo:{}
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
    
  },
  /*点击更改信息按钮*/
  changeMessage:function() {
     this.setData({
       oldData:'none',
       newData:''
     })
  },
  /*获取用户更改的信息*/
  changeData:function(e) {
    let { user_name, user_sex, user_teleNum } = e.detail.value;
    if (!user_name || !user_sex || !user_teleNum ) {
      wx.showModal({
        title: '警告',
        content: '请完善信息',
      }) }
    else {
      this.setData({
        userNewInfo: {
          user_name,
          user_sex,
          user_teleNum
          }
      })
      console.log(this.data.userNewInfo)
    }
    
 }
})