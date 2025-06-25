// pages/community/community.js
Page({

    /**
     * 頁面的初始數據
     */
    data: {
      postList: [
        {
          id: 1,
          authorName: '爱做饭的王阿姨',
          authorAvatar: '/images/avatars/wanayi.jpg',
          content: '今天做了孩子最爱的红烧肉，肥而不腻，超级下饭！大家看看怎么样？',
          image: '/images/recipes/hongshaorou.jpg', // 臨時使用現有圖片
      
        },
        {
          id: 2,
          authorName: '健身达人小张',
          authorAvatar: '/images/avatars/wanayi.jpg',
          content: '周末的健康午餐，自制的鸡胸肉沙拉，低卡又美味。',
          image: '/images/posts/shucaishala.jpg',
          likes: 256,
          favorites: 88
        },
        {
          id: 3,
          authorName: '早餐女王',
          authorAvatar: '/images/avatars/wanayi.jpg',
          content: '今天天气不错，做个快手早餐，心情都变好了！十分钟搞定，你们也试试？',
          image: '/images/posts/zaocannvwan.jpg',
          likes: 99,
          favorites: 21
        }
      ]
    },
  
    /**
     * 生命周期函数--監聽頁面加載
     */
    onLoad(options) {
  
    },
  
    // 此處省略其他生命周期函數...
  
    /**
     * 用戶點擊右上角分享
     */
    onShareAppMessage() {
  
    },
  
 onLikeTap(e) {
  const id = e.currentTarget.dataset.id;
  const postList = this.data.postList.map(item => {
    if (item.id === id) {
      return Object.assign({}, item, { liked: !item.liked });
    }
    return item;
  });
  this.setData({ postList });
},
onFavoriteTap(e) {
  const id = e.currentTarget.dataset.id;
  const postList = this.data.postList.map(item => {
    if (item.id === id) {
      return Object.assign({}, item, { favorited: !item.favorited });
    }
    return item;
  });
  this.setData({ postList });
}
  })
 
 