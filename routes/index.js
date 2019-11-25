/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-11-25 01:51:40
 * @LastEditors: icony/精武陈真
 */
const router = require('koa-router')()
const user = require('./user');

module.exports = function(app){
   //路由表
   app.use(router.routes()).use(router.allowedMethods());
   router.use('/api/user',user.routes(),user.allowedMethods());

}


