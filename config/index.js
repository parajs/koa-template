/*
 * @Description: 配置文件入口
 * @Author: chenzhen
 * @Date: 2019-11-28 12:19:53
 * @LastEditTime: 2019-12-10 11:41:04
 * @LastEditors: chenzhen
 */

const NODE_ENV = process.env.NODE_ENV
const dbConfig = NODE_ENV === 'development' ? require('./config.dev.js') : require('./config.prod.js')
    
const config = {
    NODE_ENV,
    API_ROOT: '/api',

    JWT_SECRET_KEY:'chenzhen', // 密钥
    JWT_EXPIRES_IN: 60 * 60 * 24, // 过期时间

    EMAIL_USER: '546369005@qq.com', // 发送者邮箱
    EMAIL_ALIASNAME: '某某系统', // 发送者别名
    EMAIL_PASS: 'wmiajeacdozebcag', // 发送者smtp授权码
    EMAIL_HOST: 'smtp.qq.com', // SMTP服务器
    EAMIL_PORT: 465, // SMTP服务器端口
    ...dbConfig

}

module.exports = config