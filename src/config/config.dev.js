/*
 * @Description: 本地开发配置
 * @Author: chenzhen
 * @Date: 2019-11-28 12:30:23
 * @LastEditTime: 2019-12-13 16:52:52
 * @LastEditors: chenzhen
 */

const dbConfig = {
    API_ROOT: '/api',
    // jwt配置
    JWT_SECRET_KEY:'chenzhen', // 密钥
    JWT_EXPIRES_IN: 60 * 60 * 24, // 过期时间
    // 邮箱
    EMAIL_USER: '546369005@qq.com', // 发送者邮箱
    EMAIL_ALIASNAME: '某某系统', // 发送者别名
    EMAIL_PASS: 'wmiajeacdozebcag', // 发送者smtp授权码
    EMAIL_HOST: 'smtp.qq.com', // SMTP服务器
    EAMIL_PORT: 465, // SMTP服务器端口
    
    // 数据库
    MYSQL_DATABASE: 'koa_template', // 数据库名
    MYSQL_HOST: 'localhost', // 数据库主机
    MYSQL_PORT: 3306, // 数据库端口
    MYSQL_USERNAME: 'root', // 数据库用户名
    MYSQL_PASSWORD: '123456', // 数据库密码
    MYSQL_DIALECT: 'mysql', // 数据库方言
    // 数据库连接池
    MYSQL_POOL: {
        max: 200,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // log4js配置
    LOG4JS: {
        pm2: true,
	    disableClustering: true,
        appenders: {
            console: {//控制台输出
                type: 'console'
            }
        },
        categories: {
            default: { appenders: ['console'], level: 'info' }
        }
    },
    // 文件上传
    UPLOAD_MAXSIZE: 50 * 1024 * 1024,
    UPLOAD_DIR: '/upload'
    
}

module.exports = { ...dbConfig }