/*
 * @Description: 
 * @Author: icony/精武陈真
 * @Date: 2019-11-25 00:44:25
 * @LastEditTime: 2019-11-25 01:16:01
 * @LastEditors: icony/精武陈真
 */

const  { sequelize, Sequelize } = require('../utils/seqUtil');
const moment = require('moment');

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
        defaultValue: Sequelize.NOW,
        get() {
            return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
        }
    },
    update_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        get() {
            return moment(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm:ss');
        }
    },
});

console.log(sequelize)

module.exports = User