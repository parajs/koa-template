/*
 * @Description: 程序入口
 * @Author: icony/精武陈真
 * @Date: 2019-11-19 15:28:27
 * @LastEditTime: 2019-11-27 19:14:24
 * @LastEditors: chenzhen
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const responseTime = require('koa-response-time')
const cors = require('@koa/cors')
const routes = require('./routes')


// error handler
onerror(app)

// middlewares

app.use(responseTime()); 
app.use(cors({
  maxAge: 60*60,
  allowHeaders: ['content-type','Authorization'],
}));
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

// Pretty (non-compressed) json response middleware
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
routes(app)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
