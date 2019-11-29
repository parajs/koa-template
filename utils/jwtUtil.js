/*
 * @Description: jwt工具
 * @Author: chenzhen
 * @Date: 2019-11-28 12:03:46
 * @LastEditTime: 2019-11-29 18:30:10
 * @LastEditors: chenzhen
 */
const jwt = require("jsonwebtoken")
const {JWT_SECRET_KEY, JWT_EXPIRES_IN} = require('../config')

const jwtSign = (user) => {
	const token = jwt.sign(
					user, 
					JWT_SECRET_KEY, 
					{
						expiresIn: JWT_EXPIRES_IN
					}
				)
	return token
}

const jwtVerify = (token) => {
	return jwt.verify(token, JWT_SECRET_KEY)
}

module.exports = {
	jwtSign,
	jwtVerify
};
