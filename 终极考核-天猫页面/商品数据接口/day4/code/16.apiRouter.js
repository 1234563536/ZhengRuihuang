const express = require('express')
const router = express.Router()
const goods=[
  {
    id: 100,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【原装进口，淡淡果香】",
    p: "西班牙进口 歌伦初榨橄榄油1000ml/瓶",
    price: 118,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 101,
    count: 10,
    url: "https://img.alicdn.com/imgextra/i3/TB16qryLpXXXXcPXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【 茉莉香米 香糯滑软】",
    p: "泰国进口泰砻氏 泰国茉莉香米1kg 原装进口大米",
    price: 35.6,
    state: true,
    purchase_count: 1,
    weight: 1.209
  },
  {
    id: 102,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i2/TB1A6cDFFXXXXX8apXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【非转基因   自然发酵】",
    p: "韩国进口 膳府酿造酱油501  500ml  生蘸/凉拌",
    price: 19,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 103,
    count: 20,
    url: "https://img.alicdn.com/imgextra/i3/TB1oLEoIFXXXXbBXpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【秋冬温润饮品】",
    p: " 韩国进口冲饮 全南 蜂蜜柚子茶 1kg  原装进口",
    price: 47.8,
    state: true,
    purchase_count: 1,
    weight: 1.496
  },
  {
    id: 104,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i1/TB144QhGVXXXXb4XpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【健康新早餐】",
    p: "德国进口 亨利玉米片375g/盒 早餐冲饮麦片",
    price: 35,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 105,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i3/TB1Sg9AIVXXXXaUaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【好品质的白咖啡】",
    p: "马来西亚进口名馨榴莲粉速溶白咖啡480g南洋榴莲风味",
    price: 49.2,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 106,
    count: 10,
    url: "https://img.alicdn.com/imgextra/i4/T1ihPRFINXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【韩国乐天 品质保证】",
    p: "韩国进口 乐天爱情美女石榴果汁饮料180ml*15听礼盒",
    price: 58,
    state: true,
    purchase_count: 1,
    weight: 2.7
  },
  {
    id: 107,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i1/TB1S1wGIpXXXXcGXVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【24瓶实惠装】",
    p: "台湾进口 金牌台湾啤酒330ml*24听/箱 台啤新鲜日期",
    price: 189,
    state: true,
    purchase_count: 1,
    weight: 0
  },]
const goods_intro=[
  {
    id: 110,
    message: "其他食用油"
  },
  {
    id: 111,
    message: "调味汁/油"
  }, {
    id: 112,
    message: "调味料"
  },
  {
    id: 113,
    message: "大米"
  },
  {
    id: 114,
    message: "橄榄油"
  },
  {
    id: 115,
    message: "调味酱"
  },
  {
    id: 116,
    message: "烘焙原料"
  },
  {
    id: 117,
    message: "谷物冲饮"
  },
  {
    id: 118,
    message: "咖啡"
  },
]
const drinks=[
  {
    id: 200,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/36/O1CN01gNnupJ1C8WtAMUVhJ_!!36-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "52度洋河海之蓝480ml绵柔口感浓香型白酒猫超自营商务宴请送礼",
    price: 186,
    state: true,
    purchase_count: 1,
    weight: 1.27
  },
  {
    id: 201,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i2/142/O1CN01tj49211Cv4s2TO50C_!!142-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "古井贡酒年份原浆献礼版50度500ml 浓香型白酒酒水酒类礼盒装送礼",
    price: 165,
    state: true,
    purchase_count: 1,
    weight: 1.275
  },
  {
    id: 202,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/185/O1CN01BLjqiX1DElu52VTzz_!!185-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "52度剑南春 浓香型白酒500ml酒厂直供水晶剑酒类四川国产白酒送礼",
    price: 458,
    state: true,
    purchase_count: 1,
    weight: 1.309
  },
  {
    id: 203,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/92/O1CN019pefRc1CYB4Hhijze_!!92-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "水井坊臻酿八号浓香高度白酒52度500ml纯粮食酒商务宴请礼盒送礼",
    price: 359,
    state: true,
    purchase_count: 1,
    weight: 1.344
  },
  {
    id: 204,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/163/O1CN01SOliRn1D4hBln2UCw_!!163-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "北京红星二锅头酒大二绿瓶56度500ml*12白酒（新老包装随机发货）",
    price: 184,
    state: true,
    purchase_count: 1,
    weight: 10.529
  },
  {
    id: 205,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01T2P2ir28vImQpq1bF_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "农夫山泉饮用天然水4L *4/箱取自中国八大水源地整箱天然水矿泉水",
    price: 32,
    state: true,
    purchase_count: 1,
    weight: 17.179
  },
  {
    id: 206,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01NO7Le828vImSyi1dP_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "山西汾酒杏花村53度青花20清香型高度白酒500ml单瓶天猫超市自营",
    price: 559,
    state: true,
    purchase_count: 1,
    weight: 1.386
  }
]
const drinks_intro=[
  {
    id: 210,
    message: "白酒"
  },
  {
    id: 211,
    message: "黄酒"
  },
  {
    id: 212,
    message: "啤酒"
  },
  {
    id: 213,
    message: "果蔬饮料"
  },
  {
    id: 214,
    message: "水"
  },
  {
    id: 215,
    message: "茶饮料"
  },
  {
    id: 216,
    message: "碳酸饮料"
  },
  {
    id: 217,
    message: "功能饮料"
  },
  {
    id: 218,
    message: "加多宝"
  },


]
const rice=[
  {
    id: 300,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01SdblrY28vImRu4Iby_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【独特酸辣】",
    p: "张新成推荐农心辣白菜五连包120g*5泡面韩国泡菜方便面拉面辛拉面",
    price: 27.5,
    state: true,
    purchase_count: 1,
    weight: 0.645
  },
  {
    id: 301,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01qdh7Lw28vImNBdUWI_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【肉质Q弹】",
    p: "双汇王中王火腿肠30g*8支香肠肉类休闲零食速食配泡面网红零食",
    price: 14,
    state: true,
    purchase_count: 1,
    weight: 0.255
  },
  {
    id: 302,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01KEnUBI28vImPdgm1c_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【长粒香】",
    p: "十月稻田长粒香米5kg东北大米10斤粳米当季新米真空包装 精品官方",
    price: 39.9,
    state: true,
    purchase_count: 1,
    weight: 5.059
  },
  {
    id: 303,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01dV9SV028vImRvXXFk_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【鱼米之乡 口感软糯】",
    p: "福临门大米苏软香5kg苏北粳米 软糯香醇煮粥",
    price: 27.9,
    state: true,
    purchase_count: 1,
    weight: 5.046
  },
  {
    id: 304,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01SdblrY28vImRu4Iby_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "雪龙瑞斯秋田小町大米 5KG/袋东北吉林大米寿司米小町米",
    price: 38.8,
    state: true,
    purchase_count: 1,
    weight: 5.0
  },
  {
    id: 305,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/103/O1CN01I47puw1CdDQTaO5r9_!!103-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "包邮泰金香茉莉香米10斤 长粒香米5kg大米  非大米 玉香米 稻香",
    price: 39.9,
    state: true,
    purchase_count: 1,
    weight: 5.035
  },
  {
    id: 306,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/138/O1CN01RqB54Y1CtFHwPyXEo_!!138-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "绿帝大号虾仁干货118g野生海虾大海米金钩开洋海鲜非特级干贝虾尾",
    price: 49.8,
    state: true,
    purchase_count: 1,
    weight: 0.15
  },
  {
    id: 307,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/725677994/O1CN018kokgP28vImM4zdYr_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "盛耳东北黑木耳150g/袋秋耳秋木耳东北特产干货 凉拌木耳腐竹",
    price: 25.8,
    state: true,
    purchase_count: 1,
    weight: 0.177
  },

]
const rice_intro=[
  {
    id: 310,
    message: "大米"
  },
  {
    id: 311,
    message: "食用菌"
  },
  {
    id: 312,
    message: "干菜/紫菜"
  }, {
    id: 313,
    message: "木耳"
  }, {
    id: 314,
    message: "桂圆干"
  },
  {
    id: 315,
    message: "海产品"
  },
  {
    id: 316,
    message: "百合"
  },
  {
    id: 317,
    message: "粗粮"
  },
  {
    id: 318,
    message: "莲子"
  },
]
const oil=[
  {
    id: 400,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN017jQTzP28vImVJAR3X_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "包邮福临门 葵花籽清香植物调和油  5L/桶健康油营养清淡家用",
    price: 42.9,
    state: true,
    purchase_count: 1,
    weight: 4.72
  },
  {
    id: 401,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01eYO8ke28vImRaf2wk_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "多力葵花籽食用油 5L/桶  加赠250ml小油 进口葵籽葵花籽油家用",
    price: 74.9,
    state: true,
    purchase_count: 1,
    weight: 4.99
  },
  {
    id: 402,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i2/179/O1CN01NrV2am1DC1WgKDFYv_!!179-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "鲁花 一级花生油5.436L赠900ML 5S物理压榨健康 食用油桶装油",
    price: 189.9,
    state: true,
    purchase_count: 1,
    weight: 6.0
  },
  {
    id: 403,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01xzXKRN28vImQTgNx8_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "包邮金龙鱼 花生浓香型食用植物调和油 5L/桶 食用油 爆款家用",
    price: 49.8,
    state: true,
    purchase_count: 1,
    weight: 4.719
  },
  {
    id: 404,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/37/O1CN018zUCyp1C8zHjknQmW_!!37-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "海天酱油味极鲜特级酱油1280ml品质生抽炒菜凉拌厨房提鲜厨房调料",
    price: 29.8,
    state: true,
    purchase_count: 1,
    weight: 1.59
  },
  {
    id: 405,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/115/O1CN01qt8cfE1CiiB226O2X_!!115-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "茂德公香辣牛肉酱225g拌饭辣椒酱意大利面酱下饭拌面酱调味酱酱料",
    price: 25.8,
    state: true,
    purchase_count: 1,
    weight: 0.398
  },
  {
    id: 406,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i2/63/O1CN01K5ohc71CKta9XGXrH_!!63-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "海天酱油味极鲜特级生抽380ml酿造特级生抽炒菜凉拌火锅蘸料调味",
    price: 14.8,
    state: true,
    purchase_count: 1,
    weight: 0.8
  },
  {
    id: 407,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/146/O1CN01Q6MJ811CwuSNC9IGl_!!146-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "鲁花自然鲜酱香酱油1.28L 特级生抽 非转基因 厨房调料调味品",
    price: 29.9,
    state: true,
    purchase_count: 1,
    weight: 1.61
  },

]
const oil_intro=[
  {
    id: 410,
    message: "花生油"
  },
  {
    id: 411,
    message: "调和油"
  },
  {
    id: 412,
    message: "橄榄油"
  },
  {
    id: 413,
    message: "玉米油"
  },
  {
    id: 414,
    message: "酱油"
  },
  {
    id: 415,
    message: "腌制品"
  },
  {
    id: 416,
    message: "辣椒调料"
  },
  {
    id: 417,
    message: "调味酱"
  },
  {
    id: 418,
    message: "调味料"
  },
]
const beautify= [
  {
    id: 500,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/166/O1CN01t9Yt8L1D64N9Wcav2_!!166-0-lubanu.jpg_160x160q90.jpg",
    h3: "【超值实惠大包装】",
    p: "【官方】Lily Bell/丽丽贝尔经典化妆棉优质棉双层亲肤222枚/包",
    price: 19.9,
    state: true,
    purchase_count: 1,
    weight: 0.112
  },
  {
    id: 501,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i2/725677994/O1CN01aMYxMR28vImLNvSIz_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【冰爽控油深层洁净】",
    p: "包邮曼秀雷敦冰爽活炭洁面乳去油保湿收缩毛孔控油去黑头男洗面奶",
    price: 44.9,
    state: true,
    purchase_count: 1,
    weight: 0.2
  },
  {
    id: 502,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/108/O1CN01d93Gg11CfVP8pjpkG_!!108-0-lubanu.jpg_160x160q90.jpg",
    h3: "【面部精华晒后修复】",
    p: "包邮福临门 葵花籽清香植物调和油  5L/桶健康油营养清淡家用",
    price: 40,
    state: true,
    purchase_count: 1,
    weight: 0.057
  },
  {
    id: 503,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01xKhA6k28vImU40AN9_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【温和滋润 舒缓修护】",
    p: "Cetaphil/丝塔芙蓝朋友洗面奶洁面118ml温和保湿低刺激敏感肌适用",
    price: 58,
    state: true,
    purchase_count: 1,
    weight: 0.143
  },
  {
    id: 504,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01jrRd3b28vImJ8ZZn2_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【快速吸收长效滋润】",
    p: "大宝SOD蜜男士护肤保湿乳液补水滋润面部护理易吸收女",
    price: 14,
    state: true,
    purchase_count: 1,
    weight: 0.126
  },
]
const beautify_intro= [
  {
    id: 510,
    message: "乳液面霜"
  },
  {
    id: 511,
    message: "面膜"
  }, {
    id: 512,
    message: "进口卸妆用品"
  }, {
    id: 513,
    message: "进口面部洗护"
  }, {
    id: 514,
    message: "男士控油"
  }, {
    id: 515,
    message: "足膜/足霜"
  }, {
    id: 516,
    message: "护手霜"
  },
  {
    id: 517,
    message: "身体乳"
  },
  {
    id: 518,
    message: "进口面部护理"
  },
]
const all=[
  {
    id: 100,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【原装进口，淡淡果香】",
    p: "西班牙进口 歌伦初榨橄榄油1000ml/瓶",
    price: 118,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 101,
    count: 10,
    url: "https://img.alicdn.com/imgextra/i3/TB16qryLpXXXXcPXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【 茉莉香米 香糯滑软】",
    p: "泰国进口泰砻氏 泰国茉莉香米1kg 原装进口大米",
    price: 35.6,
    state: true,
    purchase_count: 1,
    weight: 1.209
  },
  {
    id: 102,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i2/TB1A6cDFFXXXXX8apXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【非转基因   自然发酵】",
    p: "韩国进口 膳府酿造酱油501  500ml  生蘸/凉拌",
    price: 19,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 103,
    count: 20,
    url: "https://img.alicdn.com/imgextra/i3/TB1oLEoIFXXXXbBXpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【秋冬温润饮品】",
    p: " 韩国进口冲饮 全南 蜂蜜柚子茶 1kg  原装进口",
    price: 47.8,
    state: true,
    purchase_count: 1,
    weight: 1.496
  },
  {
    id: 104,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i1/TB144QhGVXXXXb4XpXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【健康新早餐】",
    p: "德国进口 亨利玉米片375g/盒 早餐冲饮麦片",
    price: 35,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 105,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i3/TB1Sg9AIVXXXXaUaXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【好品质的白咖啡】",
    p: "马来西亚进口名馨榴莲粉速溶白咖啡480g南洋榴莲风味",
    price: 49.2,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 106,
    count: 10,
    url: "https://img.alicdn.com/imgextra/i4/T1ihPRFINXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【韩国乐天 品质保证】",
    p: "韩国进口 乐天爱情美女石榴果汁饮料180ml*15听礼盒",
    price: 58,
    state: true,
    purchase_count: 1,
    weight: 2.7
  },
  {
    id: 107,
    count: 0,
    url: "https://img.alicdn.com/imgextra/i1/TB1S1wGIpXXXXcGXVXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【24瓶实惠装】",
    p: "台湾进口 金牌台湾啤酒330ml*24听/箱 台啤新鲜日期",
    price: 189,
    state: true,
    purchase_count: 1,
    weight: 0
  },
  {
    id: 200,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/36/O1CN01gNnupJ1C8WtAMUVhJ_!!36-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "52度洋河海之蓝480ml绵柔口感浓香型白酒猫超自营商务宴请送礼",
    price: 186,
    state: true,
    purchase_count: 1,
    weight: 1.27
  },
  {
    id: 201,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i2/142/O1CN01tj49211Cv4s2TO50C_!!142-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "古井贡酒年份原浆献礼版50度500ml 浓香型白酒酒水酒类礼盒装送礼",
    price: 165,
    state: true,
    purchase_count: 1,
    weight: 1.275
  },
  {
    id: 202,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/185/O1CN01BLjqiX1DElu52VTzz_!!185-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "52度剑南春 浓香型白酒500ml酒厂直供水晶剑酒类四川国产白酒送礼",
    price: 458,
    state: true,
    purchase_count: 1,
    weight: 1.309
  },
  {
    id: 203,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/92/O1CN019pefRc1CYB4Hhijze_!!92-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "水井坊臻酿八号浓香高度白酒52度500ml纯粮食酒商务宴请礼盒送礼",
    price: 359,
    state: true,
    purchase_count: 1,
    weight: 1.344
  },
  {
    id: 204,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/163/O1CN01SOliRn1D4hBln2UCw_!!163-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "北京红星二锅头酒大二绿瓶56度500ml*12白酒（新老包装随机发货）",
    price: 184,
    state: true,
    purchase_count: 1,
    weight: 10.529
  },
  {
    id: 205,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01T2P2ir28vImQpq1bF_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "农夫山泉饮用天然水4L *4/箱取自中国八大水源地整箱天然水矿泉水",
    price: 32,
    state: true,
    purchase_count: 1,
    weight: 17.179
  },
  {
    id: 206,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01NO7Le828vImSyi1dP_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "山西汾酒杏花村53度青花20清香型高度白酒500ml单瓶天猫超市自营",
    price: 559,
    state: true,
    purchase_count: 1,
    weight: 1.386
  },
  {
    id: 300,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01SdblrY28vImRu4Iby_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【独特酸辣】",
    p: "张新成推荐农心辣白菜五连包120g*5泡面韩国泡菜方便面拉面辛拉面",
    price: 27.5,
    state: true,
    purchase_count: 1,
    weight: 0.645
  },
  {
    id: 301,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01qdh7Lw28vImNBdUWI_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【肉质Q弹】",
    p: "双汇王中王火腿肠30g*8支香肠肉类休闲零食速食配泡面网红零食",
    price: 14,
    state: true,
    purchase_count: 1,
    weight: 0.255
  },
  {
    id: 302,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01KEnUBI28vImPdgm1c_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【长粒香】",
    p: "十月稻田长粒香米5kg东北大米10斤粳米当季新米真空包装 精品官方",
    price: 39.9,
    state: true,
    purchase_count: 1,
    weight: 5.059
  },
  {
    id: 303,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01dV9SV028vImRvXXFk_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【鱼米之乡 口感软糯】",
    p: "福临门大米苏软香5kg苏北粳米 软糯香醇煮粥",
    price: 27.9,
    state: true,
    purchase_count: 1,
    weight: 5.046
  },
  {
    id: 304,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01SdblrY28vImRu4Iby_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "雪龙瑞斯秋田小町大米 5KG/袋东北吉林大米寿司米小町米",
    price: 38.8,
    state: true,
    purchase_count: 1,
    weight: 5.0
  },
  {
    id: 305,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/103/O1CN01I47puw1CdDQTaO5r9_!!103-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "包邮泰金香茉莉香米10斤 长粒香米5kg大米  非大米 玉香米 稻香",
    price: 39.9,
    state: true,
    purchase_count: 1,
    weight: 5.035
  },
  {
    id: 306,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/138/O1CN01RqB54Y1CtFHwPyXEo_!!138-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "绿帝大号虾仁干货118g野生海虾大海米金钩开洋海鲜非特级干贝虾尾",
    price: 49.8,
    state: true,
    purchase_count: 1,
    weight: 0.15
  },
  {
    id: 307,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/725677994/O1CN018kokgP28vImM4zdYr_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "盛耳东北黑木耳150g/袋秋耳秋木耳东北特产干货 凉拌木耳腐竹",
    price: 25.8,
    state: true,
    purchase_count: 1,
    weight: 0.177
  },
  {
    id: 400,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN017jQTzP28vImVJAR3X_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "包邮福临门 葵花籽清香植物调和油  5L/桶健康油营养清淡家用",
    price: 42.9,
    state: true,
    purchase_count: 1,
    weight: 4.72
  },
  {
    id: 401,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01eYO8ke28vImRaf2wk_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "多力葵花籽食用油 5L/桶  加赠250ml小油 进口葵籽葵花籽油家用",
    price: 74.9,
    state: true,
    purchase_count: 1,
    weight: 4.99
  },
  {
    id: 402,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i2/179/O1CN01NrV2am1DC1WgKDFYv_!!179-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "鲁花 一级花生油5.436L赠900ML 5S物理压榨健康 食用油桶装油",
    price: 189.9,
    state: true,
    purchase_count: 1,
    weight: 6.0
  },
  {
    id: 403,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01xzXKRN28vImQTgNx8_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "",
    p: "包邮金龙鱼 花生浓香型食用植物调和油 5L/桶 食用油 爆款家用",
    price: 49.8,
    state: true,
    purchase_count: 1,
    weight: 4.719
  },
  {
    id: 404,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i1/37/O1CN018zUCyp1C8zHjknQmW_!!37-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "海天酱油味极鲜特级酱油1280ml品质生抽炒菜凉拌厨房提鲜厨房调料",
    price: 29.8,
    state: true,
    purchase_count: 1,
    weight: 1.59
  },
  {
    id: 405,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/115/O1CN01qt8cfE1CiiB226O2X_!!115-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "茂德公香辣牛肉酱225g拌饭辣椒酱意大利面酱下饭拌面酱调味酱酱料",
    price: 25.8,
    state: true,
    purchase_count: 1,
    weight: 0.398
  },
  {
    id: 406,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i2/63/O1CN01K5ohc71CKta9XGXrH_!!63-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "海天酱油味极鲜特级生抽380ml酿造特级生抽炒菜凉拌火锅蘸料调味",
    price: 14.8,
    state: true,
    purchase_count: 1,
    weight: 0.8
  },
  {
    id: 407,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i4/146/O1CN01Q6MJ811CwuSNC9IGl_!!146-0-lubanu.jpg_160x160q90.jpg",
    h3: "",
    p: "鲁花自然鲜酱香酱油1.28L 特级生抽 非转基因 厨房调料调味品",
    price: 29.9,
    state: true,
    purchase_count: 1,
    weight: 1.61
  },
  {
    id: 500,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/166/O1CN01t9Yt8L1D64N9Wcav2_!!166-0-lubanu.jpg_160x160q90.jpg",
    h3: "【超值实惠大包装】",
    p: "【官方】Lily Bell/丽丽贝尔经典化妆棉优质棉双层亲肤222枚/包",
    price: 19.9,
    state: true,
    purchase_count: 1,
    weight: 0.112
  },
  {
    id: 501,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i2/725677994/O1CN01aMYxMR28vImLNvSIz_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【冰爽控油深层洁净】",
    p: "包邮曼秀雷敦冰爽活炭洁面乳去油保湿收缩毛孔控油去黑头男洗面奶",
    price: 44.9,
    state: true,
    purchase_count: 1,
    weight: 0.2
  },
  {
    id: 502,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/108/O1CN01d93Gg11CfVP8pjpkG_!!108-0-lubanu.jpg_160x160q90.jpg",
    h3: "【面部精华晒后修复】",
    p: "包邮福临门 葵花籽清香植物调和油  5L/桶健康油营养清淡家用",
    price: 40,
    state: true,
    purchase_count: 1,
    weight: 0.057
  },
  {
    id: 503,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01xKhA6k28vImU40AN9_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【温和滋润 舒缓修护】",
    p: "Cetaphil/丝塔芙蓝朋友洗面奶洁面118ml温和保湿低刺激敏感肌适用",
    price: 58,
    state: true,
    purchase_count: 1,
    weight: 0.143
  },
  {
    id: 504,
    count: 100,
    url: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01jrRd3b28vImJ8ZZn2_!!0-item_pic.jpg_160x160q90.jpg",
    h3: "【快速吸收长效滋润】",
    p: "大宝SOD蜜男士护肤保湿乳液补水滋润面部护理易吸收女",
    price: 14,
    state: true,
    purchase_count: 1,
    weight: 0.126
  },
]
const yu=["雨鞋","雨鞋男","雨鞋女","雨披","雨靴","雨靴男","雨棚","雨润","雨靴女"]
const xie=["鞋柜","鞋架","鞋子 男","鞋垫","鞋刷","鞋套","鞋盒","鞋油","鞋套一次性","鞋油黑色"]
// 挂载路由
router.get('/goods', (req, res) => {
  res.send(goods)
})
router.get('/goods_intro', (req, res) => {
  res.send(goods_intro)
})
router.get('/drinks', (req, res) => {
  res.send(drinks)
})
router.get('/drinks_intro', (req, res) => {
  res.send(drinks_intro)
})
router.get('/rice', (req, res) => {
  res.send(rice)
})
router.get('/rice_intro', (req, res) => {
  res.send(rice_intro)
})
router.get('/oil', (req, res) => {
  res.send(oil)
})
router.get('/oil_intro', (req, res) => {
  res.send(oil_intro)
})
router.get('/beautify', (req, res) => {
  res.send(beautify)
})
router.get('/beautify_intro', (req, res) => {
  res.send(beautify_intro)
})
router.get('/all_goods', (req, res) => {
  res.send(all)
})

// 在这里挂载对应的路由
router.get('/get_goods', (req, res) => {
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query;
  // 调用 res.send() 方法，向客户端响应处理的结果
  console.log(query['info'])
  if(query['info']==="雨") {
    res.send({
      status: 0, // 0 表示处理成功，1 表示处理失败
      msg: 'GET 请求成功！', // 状态的描述
      data: yu, // 需要响应给客户端的数据
    })
  }
  else if(query['info']==="鞋"){
    res.send({
      status: 0, // 0 表示处理成功，1 表示处理失败
      msg: 'GET 请求成功！', // 状态的描述
      data: xie, // 需要响应给客户端的数据
    })
  }
})
//
// // 定义 POST 接口
// router.post('/post', (req, res) => {
//   // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
//   const body = req.body
//   // 调用 res.send() 方法，向客户端响应结果
//   res.send({
//     status: 0,
//     msg: 'POST 请求成功！',
//     data: body,
//   })
// })
//
// // 定义 DELETE 接口
// router.delete('/delete', (req, res) => {
//   res.send({
//     status: 0,
//     msg: 'DELETE请求成功',
//   })
// })

module.exports = router
