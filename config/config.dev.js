/*
 * @Description: 本地开发配置
 * @Author: chenzhen
 * @Date: 2019-11-28 12:30:23
 * @LastEditTime: 2019-11-28 15:07:40
 * @LastEditors: chenzhen
 */

const dbConfig = {
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
    }
    
}

const configDev = {
    
    ...dbConfig
} 


module.exports = configDev