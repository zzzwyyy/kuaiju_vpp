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
  },

  currrenttap: function (e) {
    if (this.data.currentTabIndex == e.currentTarget.dataset.idx) {
      return;
    }
    this.setData({
      currentTabIndex: e.currentTarget.dataset.idx
    })
  },
})