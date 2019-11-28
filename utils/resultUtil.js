/*
 * @Description: 生成响应结果
 * @Author: chenzhen
 * @Date: 2019-11-27 16:19:34
 * @LastEditTime: 2019-11-28 11:22:13
 * @LastEditors: chenzhen
 */

const result = (options = {}) => {
    const defaultOpts = {
        code: 200,
        msg: '操作成功',
        data: null
    }

    if (Object.prototype.toString.call(options) === '[object Object]' ){
        return Object.assign({} ,defaultOpts, options)
    } else {
        console.error("resulttUtil:expected plain object")
    }
    
}

const errorResult = () => {
    const defaultError = {
        code: 500,
        msg: '服务器内部异常',
        data: null
    }
    
    result(defaultError)
}

const unauthorizedResult = () => {
    const unauthorized = {
        code: 401,
        msg: '没有操作权限',
        data: null
    }
    
    result(unauthorized)
}

module.exports = {
    errorResult,
    unauthorizedResult,
    result
}