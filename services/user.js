/*
 * @Description: 用户服务层
 * @Author: chenzhen
 * @Date: 2019-11-25 18:02:42
 * @LastEditTime: 2019-12-13 17:19:06
 * @LastEditors: chenzhen
 */
const { User }  = require('../models');

/**
 * @description: 查询用户信息
 * @param {user_name，password} 
 * @return: 
 */
exports.findUserByUserNamePassword = async(user_name, password) => {
   return await User.findOne({ where: { user_name, password } }).then((result)=>{
      return Promise.resolve(result)
   }).catch((error)=>{
      return Promise.reject(error)
   })
}

/**
 * @description: 添加用户信息
 * @param {user} 
 * @return: 
 */
exports.addUser = async(user) => {
   return await User.create(user).then((result)=>{
      return Promise.resolve(result)
   }).catch((error)=>{
      return Promise.reject(error)
   })
}

exports.findAllUser = async() => {
   return await User.findAll({
      attributes: ['id','user_name','create_time','update_time']
   }).then((result)=>{
      return Promise.resolve(result)
   }).catch((error)=>{
      return Promise.reject(error)
   })
}


