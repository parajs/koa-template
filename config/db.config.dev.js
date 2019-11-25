/*
 * @Description: mysql数据库配置
 * @Author: icony/精武陈真
 * @Date: 2019-11-24 01:24:58
 * @LastEditTime: 2019-11-24 23:59:57
 * @LastEditors: icony/精武陈真
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

module.exports = dbConfig