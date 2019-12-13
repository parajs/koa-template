/*
 * @Description: 用户
 * @Author: chenzhen
 * @Date: 2019-12-13 17:09:37
 * @LastEditTime: 2019-12-13 23:33:38
 * @LastEditors: chenzhen
 */
const  { sequelize, Sequelize } = require('../utils/seqUtil');

const File = sequelize.define('file', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.BIGINT
    },
    file_name: Sequelize.STRING(255),
    create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    update_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
});


module.exports = File