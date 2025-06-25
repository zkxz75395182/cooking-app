App({
  globalData: {
    userInfo: null,
    familyMembers: [],
    preferences: {
      dietaryRestrictions: [],
      allergies: [],
      cuisinePreferences: [],
      spiceLevel: 'medium'
    },
    favorites: [],
    dietRecords: [],
    currentDate: new Date()
  },

  onLaunch() {
    // 檢查登錄狀態
    this.checkLoginStatus();
    
    // 初始化本地數據
    this.initLocalData();
  },

  checkLoginStatus() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;
            }
          });
        }
      }
    });
  },

  initLocalData() {
    // 從本地存儲讀取數據
    const familyMembers = wx.getStorageSync('familyMembers') || [];
    const preferences = wx.getStorageSync('preferences') || this.globalData.preferences;
    const favorites = wx.getStorageSync('favorites') || [];
    const dietRecords = wx.getStorageSync('dietRecords') || [];

    this.globalData.familyMembers = familyMembers;
    this.globalData.preferences = preferences;
    this.globalData.favorites = favorites;
    this.globalData.dietRecords = dietRecords;
  },

  saveLocalData() {
    wx.setStorageSync('familyMembers', this.globalData.familyMembers);
    wx.setStorageSync('preferences', this.globalData.preferences);
    wx.setStorageSync('favorites', this.globalData.favorites);
    wx.setStorageSync('dietRecords', this.globalData.dietRecords);
  }
}); 
 
 