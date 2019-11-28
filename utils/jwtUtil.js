/*
 * @Description: jwt工具
 * @Author: chenzhen
 * @Date: 2019-11-28 12:03:46
 * @LastEditTime: 2019-11-28 12:05:38
 * @LastEditors: chenzhen
 */
const jwt = require("jsonwebtoken")
var config = require('../config/default.js')

const token = (user) => {
	var secretKey = config.secretKey
	var expiresIn = config.expiresIn
	var token = jwt.sign({
		user
	}, secretKey, {
		expiresIn
	})
	// return utils.base64encode(token)
	return token
}

module.exports = {
	token
};
