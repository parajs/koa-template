/*
 * @Description: 配置文件入口
 * @Author: chenzhen
 * @Date: 2019-11-28 12:19:53
 * @LastEditTime: 2019-11-28 18:48:36
 * @LastEditors: chenzhen
 */

const NODE_ENV = process.env.NODE_ENV
const dbConfig = NODE_ENV === 'development '? require('./config.dev.js') : require('./config.prod.js')
    
const config = {
    NODE_ENV,
    API_ROOT: '/api',
    SECRET_KEY:'chenzhen',
    EXPIRES_IN: 60 * 60 * 24,
    ...dbConfig

}

module.exports = config