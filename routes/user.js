/*
 * @Description: 用户模块
 * @Author: chenzhen
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-12-12 23:00:48
 * @LastEditors: chenzhen
 */

const router = require('koa-router')()
const { findUserByUserNamePassword, addUser, findAllUser} = require('../services/user')
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
      await findUserByUserNamePassword(user_name, hashPwd).then((user)=>{
          if( user && user.password === hashPwd ){
            const {id, user_name} = user
            const token = jwtSign({id,user_name})
            ctx.body = success({data: {id, user_name,token}})
          } else {
            ctx.body = error({msg: '用户名或密码不正确'}) 
          }
      })     
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
      await findUserByUserNamePassword(user_name, hashPwd).then(async(user)=>{
        if (!user) {
            await addUser({user_name, password: hashPwd}).then(()=>{
              ctx.body = success()
            })
          } else {
            ctx.body = error({msg: '用户名已存在'}) 
          }
      })     
     
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
  await findAllUser().then((rows) => {
    ctx.body = success({data: rows})
  }).catch(() => {
    ctx.body = error()
  })
})
    
module.exports = router
