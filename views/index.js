$(function () {
    function getAllHeros() {
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:5001/getAllHero',
            success: function (res) {
                // console.log(res)
                var html = template('rows', res)
                $("#tbd").html(html)
            }
        })
    }
    getAllHeros()


    // 触发弹出层
    $("#add").on('click', function () {
        $(".header").text("添加英雄信息")
        $("#addBtn").text("添加")
        $('.ui.modal').modal('show')
        $(".field input").val("")
        // 点击按钮添加英雄
        $("#addBtn").on('click', function () {
            $.ajax({
                type: 'post',
                url: 'http://127.0.0.1:5001/addhero',
                data: $("#userInfo").serialize(),
                success: function (res) {
                    if (res.status === 200) {
                        getAllHeros()
                    }
                }
            })
        })
    })
    // 激活下拉框样式和功能
    $('.ui.dropdown').dropdown()





    // 点击按钮删除英雄
    $("#tbd").on('click', ".del", function () {
        let id = $(this).parent().attr("value")
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:5001/deletehero/' + id,
            success: function (res) {
                if (res.status === 200) {
                    getAllHeros()
                }
            }
        })
    })
    let id
    $("#tbd").on('click', ".edit", function () {
        id = $(this).parent("td").data("value")
        $("#addBtn").text("完成编辑")
        $(".header").text("编辑英雄信息")
        $('.ui.modal').modal('show')
        $(".field input").val($(this).parent().siblings(".name").text())
        $(".field select").val($(this).parent().siblings(".gender").text())

    })
    $(".uplode").on('click', function () {
        $.ajax({
            type: 'post',
            url: 'http://127.0.0.1:5001/updatehero/' + id,
            data: $("#userInfo").serialize(),
            success: function (res) {
                if (res.status === 200) {
                    getAllHeros()
                }
            }
        })
    })
    $('.ui.dropdown').dropdown()
})