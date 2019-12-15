/*
 * @Description: log4js日志工具
 * @Author: chenzhen
 * @Date: 2019-12-10 14:43:24
 * @LastEditTime: 2019-12-12 17:27:54
 * @LastEditors: chenzhen
 */

 // https://log4js-node.github.io/log4js-node/

 const log4js = require('log4js')
 const { LOG4JS } = require('../config')

log4js.configure(LOG4JS)

exports.getLogger = function (name) {
	return log4js.getLogger(name)
}

exports.log4js = log4js
