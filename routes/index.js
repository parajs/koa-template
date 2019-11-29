/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-11-28 18:20:50
 * @LastEditors: chenzhen
 */
const router = require('koa-router')()
const user = require('./user');
const { API_ROOT } = require('../config')

module.exports = function(app){
   //路由表
   app.use(router.routes()).use(router.allowedMethods());
   
   router.use(`${API_ROOT}/user`,user.routes(),user.allowedMethods())

}


