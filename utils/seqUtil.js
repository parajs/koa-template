/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-24 01:14:55
 * @LastEditTime: 2019-11-25 00:54:21
 * @LastEditors: icony/精武陈真
 */

let  dbConfig = require('../config/db.config.dev.js');

// if(process.env.NODE_ENV === 'development'){
//      dbConfig = require('../config/db.config.dev.js');
// }

// if(process.env.NODE_ENV === 'production'){
//     dbConfig = require('../config/db.config.prod.js');
// }

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.MYSQL_DATABASE, 
    dbConfig.MYSQL_USERNAME, 
    dbConfig.MYSQL_PASSWORD, 
    {
        host: dbConfig.MYSQL_HOST,
        port: dbConfig.MYSQL_POST,
        dialect: dbConfig.MYSQL_DIALECT,
        pool:dbConfig.MYSQL_POOL,
        define: {
          // 不要添加时间戳属性 (updatedAt, createdAt)
          timestamps: false,
          // 不使用驼峰式命令规则，这样会在使用下划线分隔
          // 这样 updatedAt 的字段名会是 updated_at
          underscored: true,
          // 禁止修改表名. 默认情况下
          // sequelize会自动使用传入的模型名（define的第一个参数）做为表名
          // 如果你不想使用这种方式你需要进行以下设置
          freezeTableName: true,
      }
    },
    
    
);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



module.exports = {
  Sequelize,
  sequelize
};