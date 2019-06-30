//依赖express模块
const express = require("express")
//创建路由对象
const router = express.Router()

//引用处理函数文件
const ctrl = require("./functions.js")

//测试api
router.get("/", ctrl.testApi)

//获取全部英雄数据接口
router.get("/getAllHero", ctrl.getAllHero)

//添加英雄数据接口
router.post("/addhero", ctrl.addHero)

//根据id查询英雄数据接口
router.get("/gethero/:id", ctrl.getHeroById)

//根据id编辑英雄数据接口接口
router.post("/updatehero/:id", ctrl.updataHeroById)

//根据id删除英雄数据接口
router.get("/deletehero/:id", ctrl.deleteHeroById)

//暴露router对象
module.exports = router