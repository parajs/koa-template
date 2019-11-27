const defaultOpts = {
    code: 200,
    msg: '操作成功',
    data: null
}

const servertError = {
    code: 500,
    msg: '服务器内部异常',
    data: null
}

const result = (options) => {
    if (Object.prototype.toString.call(options) === '[object Object]' ){
        return Object.assign({} ,defaultOpts, options)
    } else {
        console.error("resulttUtil:expected plain object")
    }
    
}

const errorResult = () => {
     result(servertError)
}


module.exports = {
    errorResult,
    result
}