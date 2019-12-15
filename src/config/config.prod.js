/*
 * @Description: 线上环境配置
 * @Author: chenzhen
 * @Date: 2019-11-28 12:30:35
 * @LastEditTime: 2019-12-13 16:41:01
 * @LastEditors: chenzhen
 */

const dbConfig = {
    API_ROOT: '/api',

    JWT_SECRET_KEY:'chenzhen', // 密钥
    JWT_EXPIRES_IN: 60 * 60 * 24, // 过期时间

    EMAIL_USER: '546369005@qq.com', // 发送者邮箱
    EMAIL_ALIASNAME: '某某系统', // 发送者别名
    EMAIL_PASS: 'wmiajeacdozebcag', // 发送者smtp授权码
    EMAIL_HOST: 'smtp.qq.com', // SMTP服务器
    EAMIL_PORT: 465, // SMTP服务器端口
    
    // 数据库
    MYSQL_DATABASE: 'koa_template',
    MYSQL_HOST: 'localhost',
    MYSQL_PORT: 3306,
    MYSQL_USERNAME: 'root',
    MYSQL_PASSWORD: '123456',
    MYSQL_DIALECT: 'mysql',
    MYSQL_POOL: {
        max: 200,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    LOG4JS: {
        appenders: {
            console: {//控制台输出
                type: 'console'
            }
        },
        categories: {
            default: { appenders: ['console'], level: 'info' }
        }
    },
    UPLOAD_MAXSIZE: 2 * 1024 * 1024
    
}


module.exports = { ...dbConfig }