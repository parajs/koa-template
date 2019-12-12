/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-12-12 23:24:45
 * @LastEditors: chenzhen
 */

 const { API_ROOT } = require('../config')
const router = require('koa-router')({prefix: API_ROOT})
const user = require('./user');

module.exports = function(app){
   //路由表
   app.use(router.routes()).use(router.allowedMethods());
   
   router.use('/user',user.routes(),user.allowedMethods())

}


