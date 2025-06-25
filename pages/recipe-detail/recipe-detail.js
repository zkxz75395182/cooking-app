const app = getApp();

Page({
  data: {
    recipe: null,
    isFavorite: false,
    relatedRecipes: []
  },

  onLoad(options) {
    const id = parseInt(options.id);
    this.loadRecipeDetail(id);
    this.checkFavoriteStatus(id);
    this.loadRelatedRecipes(id);
  },

  loadRecipeDetail(id) {
    // 模擬從服務器獲取菜譜詳情
    const recipes = [
      {
        id: 1,
        name: '清蒸鱸魚',
        image: '/images/recipes/fish.jpg',
        tags: ['低卡', '高蛋白', '健康'],
        cookingTime: '25分鐘',
        difficulty: '簡單',
        servings: '2人份',
        nutrition: {
          calories: 180,
          protein: 28,
          carbs: 2,
          fat: 8,
          fiber: 0
        },
        ingredients: ['鱸魚 1條', '薑絲 適量', '蔥絲 適量', '醬油 2湯匙', '料酒 1湯匙', '鹽 少許'],
        steps: [
          '鱸魚洗淨，在魚身上劃幾刀，用鹽和料酒醃製10分鐘',
          '薑絲、蔥絲放在魚身上和魚腹內',
          '蒸鍋加水燒開，放入魚蒸15分鐘',
          '淋上醬油，撒上蔥花即可'
        ],
        tips: '蒸魚時火候要適中，時間不宜過長，以保持魚肉的鮮嫩。',
        category: 'chinese',
        dietaryType: 'all'
      },
      {
        id: 2,
        name: '燕麥粥',
        image: '/images/recipes/oatmeal.jpg',
        tags: ['糖尿病友好', '高纖維', '早餐'],
        cookingTime: '10分鐘',
        difficulty: '簡單',
        servings: '1人份',
        nutrition: {
          calories: 150,
          protein: 6,
          carbs: 25,
          fat: 3,
          fiber: 4
        },
        ingredients: ['燕麥 50g', '牛奶 200ml', '蜂蜜 1茶匙', '堅果 適量', '水果 適量'],
        steps: [
          '燕麥和牛奶放入鍋中，小火加熱',
          '不斷攪拌，煮至濃稠',
          '加入蜂蜜調味',
          '撒上堅果和水果即可'
        ],
        tips: '可以根據個人喜好添加不同的水果和堅果。',
        category: 'western',
        dietaryType: 'diabetic'
      },
      {
        id: 3,
        name: '雞胸肉沙拉',
        image: '/images/recipes/salad.jpg',
        tags: ['健身', '高蛋白', '低脂'],
        cookingTime: '20分鐘',
        difficulty: '簡單',
        servings: '1人份',
        nutrition: {
          calories: 220,
          protein: 35,
          carbs: 8,
          fat: 6,
          fiber: 3
        },
        ingredients: ['雞胸肉 150g', '生菜 適量', '番茄 1個', '黃瓜 半根', '橄欖油 1湯匙', '檸檬汁 適量'],
        steps: [
          '雞胸肉用鹽和黑胡椒醃製10分鐘',
          '平底鍋加熱，放入雞胸肉煎至金黃',
          '蔬菜洗淨切塊，放入碗中',
          '雞胸肉切塊，加入蔬菜中',
          '淋上橄欖油和檸檬汁調味'
        ],
        tips: '雞胸肉煎至內部溫度達到74°C即可。',
        category: 'western',
        dietaryType: 'fitness'
      }
    ];

    const recipe = recipes.find(r => r.id === id);
    if (recipe) {
      this.setData({ recipe });
    } else {
      wx.showToast({
        title: '菜譜不存在',
        icon: 'error'
      });
      wx.navigateBack();
    }
  },

  checkFavoriteStatus(id) {
    const favorites = app.globalData.favorites;
    const isFavorite = favorites.some(fav => fav.id === id);
    this.setData({ isFavorite });
  },

  loadRelatedRecipes(id) {
    // 模擬相關推薦
    const relatedRecipes = [
      {
        id: 2,
        name: '燕麥粥',
        image: '/images/recipes/oatmeal.jpg'
      },
      {
        id: 3,
        name: '雞胸肉沙拉',
        image: '/images/recipes/salad.jpg'
      }
    ];
    this.setData({ relatedRecipes });
  },

  toggleFavorite() {
    const { recipe, isFavorite } = this.data;
    
    if (isFavorite) {
      // 取消收藏
      app.globalData.favorites = app.globalData.favorites.filter(fav => fav.id !== recipe.id);
      this.setData({ isFavorite: false });
      wx.showToast({
        title: '已取消收藏',
        icon: 'success'
      });
    } else {
      // 添加收藏
      app.globalData.favorites.push(recipe);
      this.setData({ isFavorite: true });
      wx.showToast({
        title: '已收藏',
        icon: 'success'
      });
    }
    
    app.saveLocalData();
  },

  addToDietRecord() {
    const { recipe } = this.data;
    const today = new Date().toISOString().split('T')[0];
    
    // 檢查今天是否已經記錄過這道菜
    const existingRecord = app.globalData.dietRecords.find(record => 
      record.date === today && record.recipeId === recipe.id
    );
    
    if (existingRecord) {
      wx.showToast({
        title: '今天已記錄過',
        icon: 'none'
      });
      return;
    }
    
    // 添加飲食記錄
    const dietRecord = {
      id: Date.now(),
      date: today,
      recipeId: recipe.id,
      recipeName: recipe.name,
      recipeImage: recipe.image,
      nutrition: recipe.nutrition,
      mealType: 'lunch' // 可以根據時間判斷
    };
    
    app.globalData.dietRecords.push(dietRecord);
    app.saveLocalData();
    
    wx.showToast({
      title: '已記錄飲食',
      icon: 'success'
    });
  },

  goToRecipe(e) {
    const id = e.currentTarget.dataset.id;
    wx.redirectTo({
      url: `/pages/recipe-detail/recipe-detail?id=${id}`
    });
  },

  onShareAppMessage() {
    const { recipe } = this.data;
    return {
      title: `推薦一道美味菜譜：${recipe.name}`,
      path: `/pages/recipe-detail/recipe-detail?id=${recipe.id}`,
      imageUrl: recipe.image
    };
  }
}); 