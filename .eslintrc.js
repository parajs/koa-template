/*
 * @Description: 代码风格检查
 * @Author: chenzhen
 * @Date: 2019-11-25 22:47:48
 * @LastEditTime: 2019-11-27 18:31:39
 * @LastEditors: chenzhen
 */

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node":true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "require-atomic-updates": "off"
    }
};