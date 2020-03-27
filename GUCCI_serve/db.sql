#功能一：完成用户表的创建
#1.创建数据库gucci
CREATE DATABASE gucci;
#2.进入gucci库
USE gucci;
#3.创建gucci_login表
CREATE TABLE gucci_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(11),
  captcha VARCHAR(6)
);
#4.添加两条插入数据[合法]
INSERT INTO gucci_login value(null,'15053163566','123456');
INSERT INTO gucci_login value(null,'15053163577','123456');