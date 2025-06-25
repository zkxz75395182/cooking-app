Page({
  data: {
    messages: [
      { role: 'ai', content: '你好，我是AI助手，请问有什么可以帮你？' }
    ],
    inputValue: ''
  },

  onInput(e) {
    this.setData({ inputValue: e.detail.value });
  },

  sendMessage() {
    const { inputValue, messages } = this.data;
    if (!inputValue.trim()) return;
    const userMsg = {
      role: 'user',
      content: inputValue
    };
    // 先加入用戶消息
    this.setData({
      messages: [...messages, userMsg],
      inputValue: ''
    });
    // 顯示AI正在思考
    const thinkingMsg = {
      role: 'ai',
      content: 'AI助手正在思考...'
    };
    this.setData({
      messages: [...this.data.messages, thinkingMsg]
    });
    // 調用siliconflow API
    wx.request({
      url: 'https://api.siliconflow.cn/v1/chat/completions',
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-cjhbgmaxiorpbkgisapimxgasyeuaccnfbequkwwapsdozzc'
      },
      timeout: 15000,
      data: {
        model: 'Qwen/Qwen2.5-72B-Instruct',
        messages: [
          { role: 'system', content: '你是一個俏皮、活潑、幽默的AI助手，請用可愛俏皮的語氣回答用戶的問題。' },
          { role: 'user', content: inputValue }
        ]
      },
      success: (res) => {
        let reply = '';
        if (res.data && res.data.choices && res.data.choices[0] && res.data.choices[0].message && res.data.choices[0].message.content) {
          reply = res.data.choices[0].message.content;
        } else {
          reply = 'AI助手暫無回應，請稍後重試。';
        }
        // 移除"思考中"消息，添加AI回覆
        const newMsgs = this.data.messages.slice(0, -1);
        newMsgs.push({ role: 'ai', content: reply });
        this.setData({ messages: newMsgs }, this.scrollToBottom);
      },
      fail: () => {
        // 移除"思考中"消息，添加錯誤提示
        const newMsgs = this.data.messages.slice(0, -1);
        newMsgs.push({ role: 'ai', content: '連接失敗，請稍後重試。' });
        this.setData({ messages: newMsgs }, this.scrollToBottom);
      }
    });
  },

  scrollToBottom() {
    // 若有scroll-view設置scroll-into-view，可在此自動滾動到底部
    // 這裡留空，根據實際wxml結構可擴展
  }
});
