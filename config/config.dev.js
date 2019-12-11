/*
 * @Description: 本地开发配置
 * @Author: chenzhen
 * @Date: 2019-11-28 12:30:23
 * @LastEditTime: 2019-12-11 17:47:43
 * @LastEditors: chenzhen
 */

const dbConfig = {
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
    UPLOAD_MAXSIZE: 10 * 1024 * 1024
    
}

const configDev = {
    
    ...dbConfig
} 


module.exports = configDev