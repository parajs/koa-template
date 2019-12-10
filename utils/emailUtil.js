/*
 * @Description: 发邮件工具--邮箱需要开启POP3/SMTP服务、IMAP/SMTP服务
 * @Author: chenzhen
 * @Date: 2019-12-09 20:08:42
 * @LastEditTime: 2019-12-10 11:43:51
 * @LastEditors: chenzhen
 */

// https://nodemailer.com/about/

const nodemailer = require("nodemailer"); 
const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS, EAMIL_PORT, EMAIL_ALIASNAME} = require("../config")

function sendEmail({to, subject, msg}) {
	return new Promise((resolve, reject) => {
		const smtp = nodemailer.createTransport({
			host: EMAIL_HOST,
			// service: 'qq',
			secureConnection: true, // use SSL
			secure: true, // true for 465, false for other ports
			port: EAMIL_PORT,
			auth: {
				user: EMAIL_USER, // generated ethereal user
				pass: EMAIL_PASS, // generated ethereal password
			}
		});

		smtp.sendMail({
			from: EMAIL_ALIASNAME + ' ' + '<' + EMAIL_USER + '>',
			to: to, // 收件人邮箱，多个邮箱地址间用英文逗号隔开
			subject: subject, // 邮件主题
			//text    : msg,
			html: msg
		}, function(err, _) {
			if (err) {
				reject(err)
			} else {
				resolve()
			}
		});
	})
}


module.exports = sendEmail
