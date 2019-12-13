/*
 * @Description: 用户服务层
 * @Author: chenzhen
 * @Date: 2019-11-25 18:02:42
 * @LastEditTime: 2019-12-14 01:04:17
 * @LastEditors: chenzhen
 */
const { User }  = require('../models');

/**
 * @description: 查询用户信息
 * @param {user_name，password} 
 * @return: 
 */
exports.findUserByUserNamePassword = async(user_name, password) => {
   return await User.findOne({ where: { user_name, password } })
}

/**
 * @description: 添加用户信息
 * @param {user} 
 * @return: 
 */
exports.addUser = async(user) => {
   return await User.create(user)
}

exports.findAllUser = async() => {
   return await User.findAll({
      attributes: ['id','user_name','create_time','update_time']
   })
}


