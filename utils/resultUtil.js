/*
 * @Description: 生成响应结果
 * @Author: chenzhen
 * @Date: 2019-11-27 16:19:34
 * @LastEditTime: 2019-11-28 16:34:55
 * @LastEditors: chenzhen
 */

const errorSettings = {
    code: 500,
    msg: '服务器内部异常',
    data: null
}

const successSettings = {
    code: 200,
    msg: '操作成功',
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
        console.error("resulttUtil:expected plain object")
    }
    
}



const error = (opts) => {
    result(opts, 0)
}

const success = (opts) => {
    result(opts, 1)
}



module.exports = {
    error,
    success
}


