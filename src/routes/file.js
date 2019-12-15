/*
 * @Description: 上传文件模块
 * @Author: chenzhen
 * @Date: 2019-12-12 22:48:06
 * @LastEditTime: 2019-12-15 22:01:28
 * @LastEditors: chenzhen
 */
const router = require('koa-router')()
const { UPLOAD_MAXSIZE, UPLOAD_DIR } = require('../config')
const koaBody = require('koa-body')
const { success } = require('../utils/resultUtil')
const { File } = require('../services')
const fs = require('fs-extra')
const { getUploadFileExt, getUploadFileName, getUploadDirName } = require('../utils/fileUtil')

/**
 * @description: 文件上传
 * @param {type} 
 * @return: 
 */
router.post('/file',
    koaBody({
        multipart:true, // 支持文件上传
        formidable:{
            uploadDir: UPLOAD_DIR, // 设置文件上传目录
            keepExtensions: true,    // 保持文件的后缀
            maxFileSize: UPLOAD_MAXSIZE, // 文件上传大小
            multiple: true,
            onFileBegin:(name,file) => { // 文件上传前的设置
                const ext =  getUploadFileExt(file.name) // 扩展名
                const fileName = getUploadFileName(ext) // 文件名
                const dirName = getUploadDirName() // 目录名
                const dir = `${UPLOAD_DIR}/${dirName}`
                file.path = `${dir}/${fileName}`
                file.dbFileName = `${dirName}/${fileName}`
                fs.ensureDir(dir, err => {
                     if(err){
                         throw new Error(err)
                     }
                 })
            },
    }
  }), 
  async(ctx) => {
        const { id } = ctx.state.user
        const files = ctx.request.files
        const dbFileName = files.file.dbFileName
        const result = await File.createFile({user_id1: id, file_name: dbFileName})
        ctx.body = success({data: result})
        
})



module.exports = router
