// pages/recipes/recipes.js
Page({

    /**
     * 頁面的初始數據
     */
    data: {
        plans: [
    {
      id: 1,
      title: '家常红烧肉',
      desc: '入口即化，肥而不腻的下饭神器',
      image: '/images/recipes/hongshaorou.jpg',
      difficulty: '中等',
      time: '约45分钟'
    },
    {
      id: 2,
      title: '清爽时蔬沙拉',
      desc: '低卡健康，清新开胃',
      image: '/images/recipes/shala.jpg',
      difficulty: '简单',
      time: '约15分钟'
    },
    {
      id: 3,
      title: '营养燕麦粥',
      desc: '快手早餐，能量满满一整天',
      image: '/images/recipes/yanmaizhou.jpg',
      difficulty: '简单',
      time: '约10分钟'
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

    },

    goToDetail(e) {
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/recipe-detail/recipe-detail?id=${id}`
      });
    }
  })