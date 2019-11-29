/*
 * @Description: jwt工具
 * @Author: chenzhen
 * @Date: 2019-11-28 12:03:46
 * @LastEditTime: 2019-11-28 16:51:42
 * @LastEditors: chenzhen
 */
const jwt = require("jsonwebtoken")
const {SECRET_KEY, EXPIRES_IN} = require('../config')

const jwtSign = (user) => {
	const token = jwt.sign(
					user, 
					SECRET_KEY, 
					{
						expiresIn: EXPIRES_IN
					}
				)
	return token
}

const jwtVerify = (token) => {
	return jwt.verify(token, SECRET_KEY)
}

module.exports = {
	jwtSign,
	jwtVerify
};
