var router = require('koa-router')();
// 首页 —— 广告（超值特惠）


//首页数据
router.get('api/homead', async function(ctx, next) {
    ctx.body = {}
});


router.get('api/homelist/:city/:page', async function(ctx,next) {
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.pag

    ctx.body = {}
});

// 提交评论
router.post('api/submitComment', async function(ctx,next) {
    // 获取参数
    ctx.body = {
        errno: 0,
        msg: 'ok'
    }
})
module.exports = router;