/*
 * @Description: 测试mysql连接
 * @Author: icony/精武陈真
 * @Date: 2019-11-24 02:01:58
 * @LastEditTime: 2019-11-24 11:18:26
 * @LastEditors: icony/精武陈真
 */
const sequelize = require('../utils/sequelize')

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});