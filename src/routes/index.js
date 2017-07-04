var router = require('koa-router')();
// 首页 —— 广告（超值特惠）


//首页数据
router.get('api/homead', async function(ctx, next) {
    ctx.body = {}
});
var infoObj = [{id:'sub11',title:'快速上手',image:'1',content:'Ant Design React 致力于提供给程序员愉悦的开发体验。'},{id:'sub12',title:'开发体验',image:'Ant Design React 致力于提供给程序员愉悦的开发体验。',content:'Ant Design React 致力于提供给程序员愉悦的开发体验。'},{id:'2',title:'开发体验',image:'Ant Design React 致力于提供给程序员愉悦的开发体验'},{id:'sub13',title:'程序员',image:'3',content:'Ant Design React 致力于提供给程序员愉悦的开发体验'}]
router.get('api/detail/info/:id', async function(ctx, next) {
    const params = ctx.params
    const paramsid = params.id
    infoObj.forEach(function(item){
        if(paramsid == item.id){
            ctx.body = item
        }
    })
    
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
router.get('/', async function(ctx,next) {
   await ctx.render('index',{title:'Koa'})
});
module.exports = router;