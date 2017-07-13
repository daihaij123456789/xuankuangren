var router = require('koa-router')();

var NewsXK = require('../lib/models/news/news');
var NewsCategory  = require('../lib/models/news/news_category');
var User = require('../lib/controllers/user/user');
var News = require('../lib/controllers/news/news');
var Metal = require('../lib/controllers/metal/metal');
var MetalCategory = require('../lib/controllers/metal/metal_category');
var CaseCategory = require('../lib/controllers/case/case_category');
var Case = require('../lib/controllers/case/case');
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


// router.get('api/introduce', async function(ctx,next) {
//     const type = ctx.query.type;
//     var newscategories = await NewsCategory
//       .findOne({name:type})
//       .populate({
//         path:'news',
//         select:'title date'
//       })
//       .exec();
//       var s = {"title":"a","date":"s","thumbnail_pic_s":"d","url":"f","type":"q"}
//       // var news = await NewsXK
//       // .find({})
//       // .exec()
//     ctx.body = {newscategories}
// });




/*用户管理*/

router.post('api/user/signin', User.signIn)       //用户登陆
router.post('api/user/signup', User.signUp)       //用户注册
router.get('api/admin/users', User.getUserList);  //用户列表页面
router.delete('api/admin/users/:id', User.delUser); //删除用户
router.put('api/admin/users/:id', User.modifyUser);  //修改用户


/*新闻管理*/
router.post('api/admin/news', News.newsInput); //新闻录入
router.get('api/admin/newslist', News.newsList);//新闻列表页面
router.delete('api/admin/news/:id', News.delNews); //删除新闻
router.put('api/admin/news/:id', News.modifyNews);  //修改新闻
router.get('api/admin/news/:id', News.getNews);  //获取新闻


/*金属管理*/
router.post('api/admin/metal', Metal.metalInput); //金属录入
router.get('api/admin/metallist', Metal.metalList);//金属列表页面
router.delete('api/admin/metal/:id', Metal.delMetal); //删除金属
router.put('api/admin/metal/:id', Metal.modifyMetal);  //修改金属
router.get('api/admin/metal/:id', Metal.getMetal);  //获取金属
router.get('api/admin/metalcategories/categories', MetalCategory.getCategories);  //获取金属分类

/*案例管理*/
router.post('api/admin/case', Case.caseInput); //案例录入
router.get('api/admin/caselist', Case.caseList);//案例列表页面
router.delete('api/admin/case/:id', Case.delCase); //删除案例
router.put('api/admin/case/:id', Case.modifyCase);  //修改案例
router.get('api/admin/case/:id', Case.getCase);  //获取案例
router.get('api/admin/casecategories/categories', CaseCategory.getCategories);  //获取案例分类


module.exports = router;