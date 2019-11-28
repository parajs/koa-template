/*
 * @Description: 配置文件入口
 * @Author: chenzhen
 * @Date: 2019-11-28 12:19:53
 * @LastEditTime: 2019-11-28 15:16:54
 * @LastEditors: chenzhen
 */

const NODE_ENV = process.env.NODE_ENV
const dbConfig = NODE_ENV === 'development '? require('./config.dev.js') : require('./config.prod.js')
    
const config = {
    NODE_ENV,
    ...dbConfig

}

console.log(config)


module.exports = config