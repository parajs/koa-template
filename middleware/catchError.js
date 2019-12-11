/*
 * @Description: 全局异常处理
 * @Author: chenzhen
 * @Date: 2019-12-11 16:25:57
 * @LastEditTime: 2019-12-11 22:23:45
 * @LastEditors: chenzhen
 */
const { error } = require('../utils/resultUtil')
const HttpStatus = require('http-status-codes')
const { getLogger } = require('../utils/log4jsUtil')
const logger = getLogger('全局异常')

module.exports = async function(ctx, next) {
    try {
      await next()
      if (ctx.status === 404) {
        logger.error('请求地址不存在')
        ctx.body = error({
          code: HttpStatus.NOT_FOUND, 
          msg: '请求地址不存在'
        })
      }
    } catch (err) {
      if (err.status == 401) {
        logger.error('未授权或过期，请重新登录')
        ctx.body = error({
            code: HttpStatus.UNAUTHORIZED, 
            msg: '未授权或过期，请重新登录',
            errMsg: err
          })
      } else {
        logger.error('服务内部错误')
        ctx.body = error({
          code: HttpStatus.INTERNAL_SERVER_ERROR, 
          msg: '服务内部错误',
          errMsg: err
        })
      }
    }
  }
