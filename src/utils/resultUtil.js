/*
 * @Description: 生成响应结果
 * @Author: chenzhen
 * @Date: 2019-11-27 16:19:34
 * @LastEditTime: 2019-12-12 00:13:41
 * @LastEditors: chenzhen
 */
var HttpStatus = require('http-status-codes');

const errorSettings = {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    msg: '服务器内部异常',
    errMsg: '',
    data: null
}

const successSettings = {
    code: HttpStatus.OK,
    msg: '操作成功',
    errMsg: '',
    data: null
}

const result = (options = {}, type) => {
    const toString = Object.prototype.toString.call(options)
    if (toString === '[object Object]' ){
        let result = {}
        if(type === 0){
            Object.assign(result ,errorSettings, options)
        }
        if(type === 1){
            Object.assign(result ,successSettings, options)
        }
        return result
    } else {
        console.error("resultUtil:expected plain object")
    }
    
}



const error = (opts) => {
    return result(opts, 0)
}

const success = (opts) => {
    return result(opts, 1)
}



module.exports = {
    error,
    success
}


