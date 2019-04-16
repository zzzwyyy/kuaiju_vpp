Page({

  /**
   * 页面的初始数据
   */
  data: {
    range:[
      "篮球",
      "足球",
      "桌球",
      "棋牌"
    ],
    index:0,
    activity:{}
  },
  /*picker组件通过index控制*/
  changeRange: function(e) {
    this.setData({
      index:e.detail.value
    })
  },
  /*点击提交按钮*/
  formSubmit:function(e) {
    var that = this ;
    console.log(e);
    let { act_describe, act_name, act_number, act_type, act_time, act_site} = e.detail.value;
    if (!act_describe || !act_name || !act_number || !act_type || !act_time || !act_site) {
      wx.showModal({
        title: '警告',
        content: '请完善信息',
      })}
      else{
        that.setData({
          activity: {
          act_describe,
          act_name, 
          act_number,
          act_type,
          act_time,
          act_site
          }
        })
        console.log(this.data.activity)
    }
  }
})