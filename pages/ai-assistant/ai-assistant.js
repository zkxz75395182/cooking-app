 Page({
  data: {
    userAvatar: '/images/avatars/wanayi.jpg',
    inputValue: '',
    lastMessageId: '',
    chatHistory: [
      {
        id: 1,
        sender: 'ai',
        text: '您好！我是您的专属美食助手，有什么可以帮您的吗？例如，您可以问我：「家里有豆腐和番茄，可以做什么菜？」'
      },
      {
        id: 2,
        sender: 'user',
        text: '你好，我想做一个适合小孩子吃的早餐。'
      },
      {
        id: 3,
        sender: 'ai',
        text: '当然可以！推荐您尝试「卡通蒸蛋羹」，将鸡蛋羹用模具蒸成可爱的形状，再用胡萝卜和海苔做点缀。不仅营养丰富，而且非常吸引小朋友的目光。您需要详细的菜谱吗？'
      }
    ]
  },

  onLoad(options) {
    this.scrollToBottom();
  },

  onShow() {
    this.scrollToBottom();
  },

  scrollToBottom() {
    if (this.data.chatHistory.length > 0) {
      const lastMessage = this.data.chatHistory[this.data.chatHistory.length - 1];
      this.setData({
        lastMessageId: `msg-${lastMessage.id}`
      });
    }
  }
})