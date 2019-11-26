/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-11-25 01:48:26
 * @LastEditors: icony/精武陈真
 */
const router = require('koa-router')()
const { login } = require('../services/user')

router.post('/login',async(ctx) => {
    const { user_name, password} = ctx.request.body
    if (user_name && password) {
     await login(user_name, password).then((result)=>{
       console.log(result.dataValues)
        ctx.body = result.dataValues
      })
      
    } else {
        
    }
  
})
    
module.exports = router
