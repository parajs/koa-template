/*
 * @Description: 用户服务层
 * @Author: chenzhen
 * @Date: 2019-11-25 18:02:42
 * @LastEditTime: 2019-11-27 20:16:13
 * @LastEditors: chenzhen
 */
const User  = require('../models/user');

/**
 * @description: 登录
 * @param {user_name，password} 
 * @return: 
 */
exports.login = async(user_name, password) => {
   return await User.findOne({ where: { user_name, password } }).then((result)=>{
      return Promise.resolve(result)
   })
}

/**
 * @description: 注册
 * @param {user} 
 * @return: 
 */
exports.signup = async(user_name, password) => {
   return await User.create({user_name,password}).then((result)=>{
      return Promise.resolve(result)
   })
}

