// pages/recipes/recipes.js
Page({

    /**
     * 頁面的初始數據
     */
    data: {
      plans: [
        {
          id: 1,
          title: '家常紅燒肉',
          desc: '入口即化，肥而不膩的下飯神器',
          image: '/images/recipes/fish.jpg',
          difficulty: '中等',
          time: '約45分鐘'
        },
        {
          id: 2,
          title: '清爽時蔬沙拉',
          desc: '低卡健康，清新開胃',
          image: '/images/recipes/salad.jpg',
          difficulty: '簡單',
          time: '約15分鐘'
        },
        {
          id: 3,
          title: '營養燕麥粥',
          desc: '快手早餐，能量滿滿一整天',
          image: '/images/recipes/oatmeal.jpg',
          difficulty: '簡單',
          time: '約10分鐘'
        }
      ]
    },

    /**
     * 生命週期函數--監聽頁面加載
     */
    onLoad(options) {

    },

    // 此處省略其他生命週期函數...

    /**
     * 用戶點擊右上角分享
     */
    onShareAppMessage() {

    }
  })
Page({
  data: {
    recommendList: [
      { id: 1, name: '家常红烧肉' },
      { id: 2, name: '清爽蔬菜沙拉' },
      { id: 3, name: '营养燕麦粥' }
    ]
  },
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/recipe-detail/recipe-detail?id=${id}`
    });
  }
});
Page({
  data: {
    recipe: null
  },
  onLoad(options) {
    // 这里可以根据 options.id 加载对应菜谱数据
    // 先用静态数据测试
    this.setData({
      recipe: {
        image: '/images/recipes/fish.jpg',
        name: '山药玉米排骨汤',
        // ... 其他字段
      }
    });
  }
});
 
 