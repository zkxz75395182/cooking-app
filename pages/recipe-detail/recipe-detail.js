Page({
    data: {
      recipe: {}
    },
    onLoad(options) {
      const id = options.id;
      let recipeData = {};
      if (id == 1) {
        recipeData = {
          image: '/images/recipes/hongshaorou.jpg',
          name: '家常紅燒肉',
          tag: '經典家常',
          difficulty: '中等',
          time: '約45分鐘',
          suitable: '全家/肉食愛好者',
          authorAvatar: '/images/avatars/user1.jpg',
          authorName: '小廚娘',
          desc: '肥而不膩，入口即化的經典紅燒肉，適合全家共享。',
          ingredients: [
            { name: '五花肉', amount: '500g' },
            { name: '生抽', amount: '2湯匙' },
            { name: '老抽', amount: '1湯匙' },
            { name: '冰糖', amount: '20g' },
            { name: '料酒', amount: '1湯匙' },
            { name: '蔥薑', amount: '適量' },
            { name: '鹽', amount: '適量' }
          ],
          steps: [
            '五花肉切塊，冷水下鍋焯水撈出。',
            '鍋中放少許油，下蔥薑爆香，加入五花肉煸炒。',
            '加入料酒、生抽、老抽、冰糖翻炒上色。',
            '加水沒過肉，大火煮開後轉小火燉40分鐘。',
            '收汁後加鹽調味即可。'
          ],
          nutrition: [
            { name: '熱量', value: '350kcal/100g' },
            { name: '蛋白質', value: '12g/100g' },
            { name: '脂肪', value: '32g/100g' },
            { name: '碳水', value: '4g/100g' }
          ]
        };
      } else if (id == 2) {
        recipeData = {
          image: '/images/recipes/shala.jpg',
          name: '清爽時蔬沙拉',
          tag: '低卡健康，清新開胃',
          difficulty: '簡單',
          time: '約15分鐘',
          suitable: '健身/減脂/全家',
          authorAvatar: '/images/avatars/user2.jpg',
          authorName: '沙拉達人',
          desc: '這道清爽時蔬沙拉色彩豐富，營養均衡，適合健身、減脂及全家人食用。多種新鮮蔬菜搭配，口感清新，低脂健康。',
          ingredients: [
            { name: '生菜', amount: '100g' },
            { name: '小番茄', amount: '6顆' },
            { name: '黃瓜', amount: '半根' },
            { name: '胡蘿蔔', amount: '半根' },
            { name: '玉米粒', amount: '30g' },
            { name: '雞蛋', amount: '1顆' },
            { name: '橄欖油', amount: '1湯匙' },
            { name: '黑胡椒', amount: '適量' },
            { name: '鹽', amount: '適量' }
          ],
          steps: [
            '生菜洗淨撕小塊，瀝乾水分備用。',
            '小番茄對半切，黃瓜、胡蘿蔔切片，雞蛋煮熟切片。',
            '將所有蔬菜、雞蛋片、玉米粒放入大碗中。',
            '加入橄欖油、鹽和黑胡椒，輕輕拌勻即可食用。'
          ],
          nutrition: [
            { name: '熱量', value: '65kcal/100g' },
            { name: '蛋白質', value: '3g/100g' },
            { name: '脂肪', value: '2g/100g' },
            { name: '碳水', value: '8g/100g' },
            { name: '膳食纖維', value: '2g/100g' }
          ]
        };
      } else if (id == 3) {
        recipeData = {
          image: '/images/recipes/yanmaizhou.jpg',
          name: '營養燕麥粥',
          tag: '快手早餐',
          difficulty: '簡單',
          time: '約10分鐘',
          suitable: '全家/兒童/老人',
          authorAvatar: '/images/avatars/user3.jpg',
          authorName: '健康達人',
          desc: '營養豐富的燕麥粥，適合全家人作為早餐，簡單快捷，能量滿滿。',
          ingredients: [
            { name: '燕麥片', amount: '50g' },
            { name: '牛奶', amount: '200ml' },
            { name: '葡萄乾', amount: '10g' },
            { name: '蜂蜜', amount: '適量' }
          ],
          steps: [
            '燕麥片加牛奶煮沸，小火煮5分鐘。',
            '加入葡萄乾繼續煮2分鐘。',
            '出鍋後加蜂蜜拌勻即可食用。'
          ],
          nutrition: [
            { name: '熱量', value: '80kcal/100g' },
            { name: '蛋白質', value: '4g/100g' },
            { name: '脂肪', value: '2g/100g' },
            { name: '碳水', value: '14g/100g' }
          ]
        };
      }
      this.setData({ recipe: recipeData });
    }
  });