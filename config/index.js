/*
 * @Description: 配置文件入口
 * @Author: chenzhen
 * @Date: 2019-11-28 12:19:53
 * @LastEditTime: 2019-12-09 17:03:12
 * @LastEditors: chenzhen
 */

const NODE_ENV = process.env.NODE_ENV
const dbConfig = NODE_ENV === 'development' ? require('./config.dev.js') : require('./config.prod.js')
    
const config = {
    NODE_ENV,
    API_ROOT: '/api',
    JWT_SECRET_KEY:'chenzhen',
    JWT_EXPIRES_IN: 60 * 60 * 24,
    ...dbConfig

}

module.exports = config