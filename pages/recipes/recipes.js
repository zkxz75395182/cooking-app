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