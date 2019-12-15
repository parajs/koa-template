/*
 * @Description: 用户
 * @Author: icony/精武陈真
 * @Date: 2019-11-25 00:44:25
 * @LastEditTime: 2019-12-13 23:40:16
 * @LastEditors: chenzhen
 */

const  { sequelize, Sequelize } = require('../utils/seqUtil');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {type: Sequelize.STRING(255), unique: 'uk_user_name'},
    password: Sequelize.STRING(255),
    create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    update_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
});

module.exports = User