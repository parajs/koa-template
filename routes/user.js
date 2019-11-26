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
    const body = ctx.request.body
    try {
        const user_name = body.user_name
        const password = body.password
        if (user_name && password) {
          const b =  await login(user_name, password).then((data,b)=>{

          })
          ctx.body = {
            data: {
                b
            }
          }
          
        } else {
            
        }
    } catch (error) {
        
    }
    
  
})
    
module.exports = router
