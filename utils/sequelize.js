/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-24 01:14:55
 * @LastEditTime: 2019-11-24 02:12:29
 * @LastEditors: icony/精武陈真
 */

const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.MYSQL_DATABASE, 
    dbConfig.MYSQL_USERNAME, 
    dbConfig.MYSQL_PASSWORD, 
    {
        host:  dbConfig.MYSQL_HOST,
        port: dbConfig.MYSQL_POST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    
);


module.exports = sequelize