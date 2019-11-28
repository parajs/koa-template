/*
 * @Description: 用户模块
 * @Author: chenzhen
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-11-28 11:58:06
 * @LastEditors: chenzhen
 */

const router = require('koa-router')()
const { findUserByUserNamePassword, addUser } = require('../services/user')
const { result,errorResult } = require('../utils/resultUtil')
const sha256 = require('sha256')

/**
 * @description: 登录
 * @param {type} 
 * @return: 
 */
router.post('/login',async(ctx) => {
    const { user_name, password} = ctx.request.body
    if ( user_name && password ) {
      const hashPwd = sha256(`${user_name}${password}`)
      await findUserByUserNamePassword(user_name, hashPwd).then((user)=>{
          if( user.password === hashPwd ){
            const {id, user_name} = user
            ctx.body = result({data: {id, user_name}})
          } else {
            ctx.body = errorResult({msg: '用户名或密码不正确'}) 
          }
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
  const { user_name, password, confirm_password} = ctx.request.body
  if(user_name && password && confirm_password){
    if (confirm_password === password) {
      const hashPwd = sha256(`${user_name}${password}`)
      await findUserByUserNamePassword(user_name, hashPwd).then(async(user)=>{
        if (!user) {
            await addUser({user_name, password: hashPwd}).then(()=>{
              ctx.body = result()
            })
          } else {
            ctx.body = errorResult({msg: '用户名已存在'}) 
          }
      })     
     
    } else {
      ctx.body = errorResult({msg: '密码不一致'}) 
    }
  } else {
    ctx.body = errorResult({msg: '请输入用户名和密码'}) 
  }
  

})
    
module.exports = router
