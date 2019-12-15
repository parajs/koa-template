/*
 * @Description: 用户模块
 * @Author: chenzhen
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-12-15 21:58:44
 * @LastEditors: chenzhen
 */

const router = require('koa-router')()
const { User } = require('../services')
const { success,error } = require('../utils/resultUtil')
const sha256 = require('sha256')
const { jwtSign } = require('../utils/jwtUtil')

/**
 * @description: 登录
 * @param {type} 
 * @return: 
 */
router.post('/login',async(ctx) => {
    const { user_name, password} = ctx.request.body
    if ( user_name && password ) {
      const hashPwd = sha256(`${user_name}${password}`)
      const result =  await User.findUserByUserNamePassword(user_name, hashPwd)
      if( result && result.password === hashPwd ){
        const {id, user_name} = result
        const token = jwtSign({id,user_name})
        ctx.body = success({data: {id, user_name,token}})
      } else {
        ctx.body = error({msg: '用户名或密码不正确'}) 
      }
    } else {
      ctx.body = error({msg: '请输入用户名和密码'}) 
    }
})

/**
 * @description: 注册
 * @param {type} 
 * @return: 
 */
router.post('/signup',async(ctx) => {
  const { user_name, password, confirm_password} = ctx.request.body
  if(user_name && password && confirm_password){
    if (confirm_password === password) {
      const hashPwd = sha256(`${user_name}${password}`)
      const result = await User.findUserByUserNamePassword(user_name, hashPwd)

      if (!result) {
          await User.addUser({user_name, password: hashPwd})
          ctx.body = success()
        } else {
          ctx.body = error({msg: '用户名已存在'}) 
      }
      
    } else {
      ctx.body = error({msg: '密码不一致'}) 
    }
  } else {
    ctx.body = error({msg: '请输入用户名和密码'}) 
  }
  

})

/**
 * @description: 查询所有用户
 * @param {type} 
 * @return: 
 */
router.post('/findAllUser',async(ctx) => {
  const result = await User.findAllUser()
  ctx.body = success({data: result})
})
    
module.exports = router
