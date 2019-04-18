Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { "name": "全部", "id": "one" },
      { "name": "时间", "id": "tow" },
      { "name": "距离", "id": "three" },
      { "name": "信誉度", "id": "four" },
    ],
    currentTabIndex: 0,
    act_name:"西邮篮球赛",
    act_describe:"西安邮电大学的一场刺激的篮球赛",
    act_time:"2016.07.18.14:00",
    act_site:"西邮",
  },
  /*头部tap导航栏*/
  currrenttap: function (e) {
    if (this.data.currentTabIndex == e.currentTarget.dataset.idx) {
      return;
    }
    this.setData({
      currentTabIndex: e.currentTarget.dataset.idx
    })
  },
  /*点击某个消息跳转到子页面*/
  messageClik:function() {
    console.log("成功")
  }
})