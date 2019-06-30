
//引用数据库模块文件
const conn = require("./db.js")

//暴露处理函数对象
module.exports = {
    //测试api
    testApi: (req, res) => {
        res.send("连接成功")
    },
    //获取全部对象
    getAllHero: (req, res) => {
        let sql = "select * from nyao"
        conn.query(sql, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message })
            res.send({ status: 200, msg: "ok", data: result })
        })
    },
    //增加对象
    addHero: (req, res) => {
        //获取提交表单的内容
        let hero = req.body
        //得到当前时间
        let dt = new Date()
        let y = dt.getFullYear()
        let m = (dt.getMonth() + 1).toString().padStart(2, '0')
        let d = dt.getDate().toString().padStart(2, '0')
        let hh = dt.getHours().toString().padStart(2, '0')
        let mm = dt.getMinutes().toString().padStart(2, '0')
        let ss = dt.getSeconds().toString().padStart(2, '0')
        //给表单添加内容增加时间项
        hero.ctime = y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
        //创建添加英雄sql语句
        let sql = "insert into nyao set ?"
        //执行sql语句
        conn.query(sql, hero, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message })
            res.send({ status: 200, msg: "ok" })
        })
    },
    //根据id获取对象
    getHeroById: (req, res) => {
        //获取传送过来的id值
        let id = req.params.id
        //编写根据id查询英雄sql语句
        let sql = "select * from nyao where id = ?"
        //执行sql语句
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message })
            res.send({ status: 200, msg: "ok", data: result })
        })
    },
    //根据id编辑对象
    updataHeroById: (req, res) => {
        //获取传送过来的id值
        let id = req.params.id
        let uhero = req.body
        //编写根据id查询英雄sql语句
        let sql = "update nyao set ? where id = ?"
        //执行sql语句
        conn.query(sql, [uhero, id], (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message })
            res.send({ status: 200, msg: "ok", data: "影响数据条数" + result.affectedRows })
        })
    },
    //根据id删除对象
    deleteHeroById: (req, res) => {
        //获取传送过来的id值
        let id = req.params.id
        //编写根据id删除英雄sql语句
        let sql = "update nyao set isdel=1 where id = ?"
        //执行sql语句
        conn.query(sql, id, (err, result) => {
            if (err) return res.send({ status: 500, msg: err.message })
            res.send({ status: 200, msg: "ok", data: "影响数据条数" + result.affectedRows })
        })
    }
}