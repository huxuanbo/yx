//引用数据库模块
const mysql = require("mysql")

//连接数据库
const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "heima"
})

//暴露conn对象
module.exports = conn