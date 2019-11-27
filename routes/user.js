/*
 * @Description: 用户模块
 * @Author: chenzhen
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-11-27 20:16:44
 * @LastEditors: chenzhen
 */

const router = require('koa-router')()
const { login, signup } = require('../services/user')
const { result,errorResult } = require('../utils/resultUtil')

/**
 * @description: 登录
 * @param {type} 
 * @return: 
 */
router.post('/login',async(ctx) => {
    const { user_name, password} = ctx.request.body
    if ((user_name && password)) {
      await login(user_name, password).then((user)=>{
          ctx.body = result({data: user})
      })     
    } else {
      ctx.body = errorResult({msg: '请输入用户名和密码'}) 
    }
})

/**
 * @description: 注册
 * @param {type} 
 * @return: 
 */
router.post('/signup',async(ctx) => {
  const { user_name, password} = ctx.request.body
  if (user_name && password) {
   await signup(user_name, password).then((user)=>{
      ctx.body = result()
    })
  } else {
    ctx.body = errorResult({msg: '请输入用户名和密码'}) 
  }

})
    
module.exports = router
