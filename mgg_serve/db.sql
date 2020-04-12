SET NAMES UTF8;
DROP DATABASE IF EXISTS mgg;
CREATE DATABASE mgg CHARSET=UTF8;
USE mgg;

#创建mgg_login表
DROP TABLE IF EXISTS mgg_login;
CREATE TABLE mgg_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(11),
  captcha VARCHAR(6)
);
#添加两条插入数据[合法]
INSERT INTO mgg_login value(null,'15053163566','123456');
INSERT INTO mgg_login value(null,'15053163577','123456');

#产品系列
DROP TABLE IF EXISTS mgg_family;
CREATE TABLE mgg_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32),
  fdes VARCHAR(128),         #描述
  fpic VARCHAR(32)     #图片
);
INSERT INTO mgg_family VALUES
(null,'手袋','MGG 1999马衔扣小号手提包','handbag.gif'),
(null,'2020春夏','女士服饰','dress_1.jpg'),
(null,'运动鞋','MGG 饼干鞋运动休闲女鞋','shoes.jpg');

#产品列表
DROP TABLE IF EXISTS mgg_list;
CREATE TABLE mgg_list(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  fid INT,\
  fname VARCHAR(32),
  lname VARCHAR(32),
  lpic VARCHAR(32),
  lprice DECIMAL(7,2)
);
INSERT INTO mgg_list VALUES
(NULL,1,'手袋','单肩斜挎包波士顿桶包','handbag_1.jpg',999),
(NULL,1,'手袋','时尚鳄鱼纹手提包大容量水桶包单肩女包','handbag_2.jpg',999),
(NULL,1,'手袋','时尚鳄鱼纹手提包大容量水桶包单肩女包','handbag_2.jpg',999),
(NULL,1,'手袋','手提包大容量单肩包真皮女包','handbag_3.jpg',1299),
(NULL,1,'手袋','时尚撞色头层牛皮包包单肩斜挎女包手提包','handbag_4.jpg',1298),
(NULL,1,'手袋','时尚撞色字母手提包大容量单肩女包','handbag_5.jpg',899),
(NULL,1,'手袋','宽肩带铂金包包女式斜挎包大容量女包','handbag_6.jpg',799),
(NULL,1,'手袋','撞色女式斜挎包肩包字母印花牛皮女包','handbag_7.jpg',1380),
(NULL,1,'手袋','时尚百搭斜挎包欧美潮流水桶手提包','handbag_8.jpg',959),
(NULL,1,'手袋','女包简约大方手提包大容量牛皮单肩斜跨包','handbag_9.jpg',1009),
(NULL,2,'2020春夏','休闲马甲衬衫连衣裙小个子两件套','dress_2.jpg',718),
(NULL,2,'2020春夏','韩版女款高腰V领茶歇碎花连衣裙','dress_3.jpg',618),
(NULL,2,'2020春夏','甜美仙女裙碎花雪纺短袖长裙连衣裙','dress_4.jpg',1188),
(NULL,2,'2020春夏','收腰气质仙女公主裙中长款连衣裙','dress_5.jpg',728),
(NULL,2,'2020春夏','女款裙子格子拼接长袖连衣裙','dress_6.jpg',658),
(NULL,2,'2020春夏','韩版女款开衩中长款连衣裙','dress_7.jpg',588),
(NULL,2,'2020春夏','两件套网纱拼接针织长袖吊带连衣裙','dress_8.jpg',868),
(NULL,2,'2020春夏','女款V字领气质碎花高腰连衣裙','dress_9.jpg',588),
(NULL,3,'运动鞋','百搭高帮韩版透气女士运动休闲鞋','shoes.jpg',288),
(NULL,3,'运动鞋','低帮帆布鞋女运动休闲鞋帆布板鞋女鞋','shoes_1.jpg',259),
(NULL,3,'运动鞋','低帮板鞋运动休闲鞋子小白鞋女鞋','shoes_2.jpg',288),
(NULL,3,'运动鞋','女低帮帆布鞋女运动休闲鞋百搭帆布鞋','shoes_3.jpg',258),
(NULL,3,'运动鞋','春款低帮女帆布鞋女款板鞋帆布鞋','shoes_4.jpg',219),
(NULL,3,'运动鞋','春上新帆布鞋女低帮女运动休闲鞋','shoes_5.jpg',268),
(NULL,3,'运动鞋','女板鞋撞色时尚宽鞋带魔术织带小白鞋女','shoes_6.jpg',298),
(NULL,4,'热销推荐','长袖衬衫洋气针织马甲小个子两件套上衣','sell_1.jpg',898),
(NULL,4,'热销推荐','春季新款韩版宽松直筒垂感裤子','sell_2.jpg',698),
(NULL,4,'热销推荐','仙女裙复古收腰桔梗法式裙','sell_3.jpg',652),
(NULL,4,'热销推荐','韩版设计感小众少女心机长袖上衣','sell_4.jpg',799),
(NULL,4,'热销推荐','韩版心机设计感小众时尚气质上衣','sell_5.jpg',1108),
(NULL,4,'热销推荐','白色长袖衬衫短款针织套头马甲背心两件套','sell_6.jpg',298),
(NULL,5,'IP联名系列','洋气针织马甲衬衫两件套上衣','ip_1.jpg',671),
(NULL,5,'IP联名系列','薄款宽松韩版卡通印花五分袖上衣潮','ip_2.jpg',698),
(NULL,5,'IP联名系列','新款时尚高腰显瘦休闲a字中长款裙子','ip_3.jpg',671),
(NULL,5,'IP联名系列','休闲圆领纯棉打底上衣潮','ip_4.jpg',881),
(NULL,5,'IP联名系列','新款夏装阔腿短裤格子连衣裤套装','ip_5.jpg',632),
(NULL,5,'IP联名系列','新款潮宽松韩版加厚套头圆领长袖上衣','ip_6.png',691),
(NULL,6,'上装','韩版宽松显瘦设计感小众休闲衬衣','jacket_1.jpg',671),
(NULL,6,'上装','卡通印花圆领短袖时尚宽松休闲内搭上衣潮','jacket_2.jpg',851),
(NULL,6,'上装','长袖衬衫洋气针织马甲小个子两件套上衣','sell_1.jpg',898),
(NULL,6,'上装','休闲宽松韩版洋气复古短袖上衣','jacket_4.jpg',831),
(NULL,6,'上装','简约荷叶边衬衣韩版宽松蝴蝶结上衣潮','jacket_5.jpg',671),
(NULL,6,'上装','韩版减龄洋气宽松休闲显瘦上衣','jacket_6.jpg',811),
(NULL,7,'下装','新款垂感宽松显瘦阔腿裤学生雪纺裤子','lower_1.jpg',811),
(NULL,7,'下装','宽松直筒薄款高腰显瘦垂感阔腿裤子','lower_2.jpg',811),
(NULL,7,'下装','高腰宽松直筒显瘦牛仔裤子','lower_3.jpg',691),
(NULL,7,'下装','韩版高腰宽松显瘦牛仔裤潮','lower_4.jpg',632),
(NULL,7,'下装','宽松显瘦复古短裤学生阔腿裤子潮','lower_5.jpg',811),
(NULL,7,'下装','复古纯色热裤宽松休闲裤子潮','lower_6.jpg',851),
(NULL,8,'新品上市','初春气质复古长袖上衣衬衣潮','news_1.jpg',671),
(NULL,8,'新品上市','透视亮丝打底衫韩版收腰连衣裙两件套潮','news_2.jpg',851),
(NULL,8,'新品上市','复古气质显瘦仙女收腰中长款裙子','news_3.jpg',811),
(NULL,8,'新品上市','新款春女格子衬衫半身裙少女风两件套','news_4.jpg',632),
(NULL,8,'新品上市','新款时尚复古温柔气质中长款裙子','news_5.jpg',851),
(NULL,8,'新品上市','韩版宽松显瘦休闲长袖上衣潮','news_6.jpg',831);

#创建购物车表
DROP TABLE IF EXISTS mgg_cart;
CREATE TABLE mgg_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pid INT,
  pname VARCHAR(255),
  price DECIMAL(10,2),
  count INT,
  pic VARCHAR(32),
  uid INT
);

#创建穿搭攻略表
DROP TABLE IF EXISTS mgg_method;
CREATE TABLE mgg_method(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(32),
  title VARCHAR(32),
  des VARCHAR(128)
);
INSERT INTO mgg_method VALUES
(NULL,'history_1.jpg','公主衫| 怎么穿?','"公主衫"融入了拉夫领、泡泡袖、羊腿袖、荷叶边、多层次的褶皱复杂设计，很容易给人华丽多情的感觉。'),
(NULL,'history_2.jpg','针织背心&衬衣','针织背心+衬衣的组合，大概是最不用费心的搭配了，尤其是白衬衣，不管和什么颜色的针织背心搭配，契合度都很高。'),
(NULL,'history_3.jpg','奶奶衫','今春必火的单品，一定要提名“奶奶衫”。最初只是被简单的称作“针织开衫”，在千禧时代，潮流开始变了风向，弄潮儿更喜欢嘻哈、破洞一些的街头风格。'),
(NULL,'history_4.jpg','褶皱+薄纱| 连衣裙','说到这，葡萄我必须提名“褶皱”。这个看似凌乱、实则充满结构艺术的设计，使得连衣裙在满足甜美的同时，一点儿也不耽误高级。'),
(NULL,'history_5.jpg','珍珠系列穿搭','天气回暖，裙子马上可以见太阳了！这个时候太需要一个带有珍珠元素的配饰，无论是敞口连衣裙还是娃娃裙，都可以营造浓浓的法式风情。'),
(NULL,'history_6.jpg','对于溜肩','除了在头发上下功夫，日常生活中，用泡泡袖也是很实用的方法！但一定要选择面料垂顺的、比较轻盈柔软的，太蓬的会显得上半身更壮，适得其反。'),
(NULL,'history_7.jpg','头大脸大','这两年流行的oversize和复古风格，都腔调更宽的肩部设计，这在很大程度上不仅增加了上衣的存在感还延展了肩线。'),
(NULL,'history_8.jpg','卫衣怎么穿','卫衣套装，不仅是羽毛套装让俺眼前一亮，这套卫衣套装也是酷到没朋友');