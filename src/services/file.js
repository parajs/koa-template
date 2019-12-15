/*
 * @Description: 
 * @Author: chenzhen
 * @Date: 2019-12-13 17:20:48
 * @LastEditTime: 2019-12-15 22:02:51
 * @LastEditors: chenzhen
 */
const { File }  = require('../models');

exports.createFile = async(model) => {
    return await File.create(model)
 }