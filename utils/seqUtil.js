/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-24 01:14:55
 * @LastEditTime: 2019-12-10 12:03:24
 * @LastEditors: chenzhen
 */

const  config = require('../config');
const Sequelize = require('sequelize');
const sendEmail = require('./emailUtil.js')

const sequelize = new Sequelize(
    config.MYSQL_DATABASE, 
    config.MYSQL_USERNAME, 
    config.MYSQL_PASSWORD, 
    {
        host: config.MYSQL_HOST,
        port: config.MYSQL_PORT,
        dialect: config.MYSQL_DIALECT,
        pool:config.MYSQL_POOL,
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
    sendEmail({
      to: '546369005@qq.com',
      subject: 'mysql-error',
      msg: '<p>错误信息: </p>' + JSON.stringify(err) + '<p>请你及时处理</p >'
    })
    console.error('Unable to connect to the database:', err);
  });



module.exports = {
  Sequelize,
  sequelize
};