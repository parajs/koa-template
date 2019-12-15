/*
 * @Description: 文件模块
 * @Author: chenzhen
 * @Date: 2019-12-13 18:34:29
 * @LastEditTime: 2019-12-15 22:00:15
 * @LastEditors: chenzhen
 */
const moment = require('moment')
const shortid = require('shortid')

/**
 * @description: 获取目录
 * @param {type} 
 * @return: 
 */

const getUploadDirName = () => moment().format('YYYYMMDD')

/**
 * @description: 获取文件后缀
 * @param {type} 
 * @return: 
 */

const getUploadFileExt = (name) => {
    const  index = name.lastIndexOf('.')
    const ext = name.substring(index + 1)
    return ext
}

/**
 * @description: 获取文件名
 * @param {type} 
 * @return: 
 */

const getUploadFileName = (ext) => {
    return `${Date.now()}${shortid.generate()}.${ext}`;
}




module.exports = {
    getUploadFileName,
    getUploadFileExt,
    getUploadDirName,
}
