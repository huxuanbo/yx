//引用创建服务器模块
const express = require("express")

//创建服务器
const app = express()

// 导入解析表单post提交时传输的数据
const bodyParser = require("body-parser")
// 使用中间件
app.use(bodyParser.urlencoded({ extended: false }))

const cors = require('cors')
app.use(cors())

// 使用路由对象
const router = require("./router.js")
app.use(router)

//启动服务器，设置端口等信息
app.listen(5001, () => {
    console.log("服务器运行成功，地址是 http://127.0.0.1:5001")
})