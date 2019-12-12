/*
 * @Description: 配置文件入口
 * @Author: chenzhen
 * @Date: 2019-11-28 12:19:53
 * @LastEditTime: 2019-12-12 19:19:54
 * @LastEditors: chenzhen
 */

const dbConfig = NODE_ENV === 'development' ? require('./config.dev.js') : require('./config.prod.js')
    
const config = {
    ...dbConfig
}

module.exports = config