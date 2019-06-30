const express = require("express")
const app = express()

// 托管 views 文件夹下的文件
app.use(express.static('./views'))
// 托管 semantic 文件夹里的静态资源
app.use('/semantic', express.static('./semantic'))
app.use('/node_modules', express.static('./node_modules'))

app.listen(3001, () => {
    console.log("服务器运行成功，地址是 http://127.0.0.1:3001")
})