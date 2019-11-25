/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-11-25 01:48:26
 * @LastEditors: icony/精武陈真
 */
const router = require('koa-router')()
const { login } = require('../controllers/user')

router.post('/login',login)
    
module.exports = router
