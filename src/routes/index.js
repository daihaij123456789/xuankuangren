var router = require('koa-router')();

// 首页 —— 广告（超值特惠）
var User = require('../lib/models/user/user');

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
router.post('api/user/signin', async function(ctx,next) {
  var user1 = ctx.request.body.fields.json;
  var _user = JSON.parse(user1);
  console.log(_user)
  var userNew = {
    name:_user.userName,
    password:_user.password
  };
  var _password = userNew.password || ''
  var user = await User.findOne({name:userNew.name}).exec();
    if(!user) {
      ctx.body = {data:0};                 // 用户不存在
    }
    console.log(_password)
    // 使用user实例方法对用户名密码进行比较
    var isMatch = await user.comparePassword(_password);
      // 密码匹配
      console.log(isMatch)
      if(isMatch) {
        ctx.session.user = user;                // 将当前登录用户名保存到session中
        ctx.body = {data:user};
        /*var captchaB = ctx.session.captchaA 
        // 验证码存在
        if (captchaB) {
          if(_captcha.toLowerCase() !== captchaB.toLowerCase()) {
            console.log('成功');
            ctx.body = {data:2};                   // 输入的验证码不相等
          }else {
            ctx.session.user = user;                // 将当前登录用户名保存到session中
            ctx.body = {data:3};              // 登录成功
          }
        }*/
      }else {
        // 账户名和密码不匹
        ctx.body = {data:1};
      }
})
// 提交评论
router.post('api/user/signup', async function(ctx,next) {
    // 获取参数
                          // 获取post请求中的用户数据
      //_user = {};
  /*user1 = user1.split('&');
  
  for(var i = 0; i < user1.length; i++) {
    var p = user1[i].indexOf('='),
        name = user1[i].substring(0,p),
        value = user1[i].substring(p+1);
    _user[name] = value;
  }*/
  var user1 = ctx.request.body.fields.json;
  var _user = JSON.parse(user1);
  var userNew = {
    name:_user.r_userName,
    password:_user.r_password
  }
  var _name = userNew.name || '';
      //_captcha = _user.captcha || '';
  // 使用findOne对数据库中user进行查找
  var user = await User.findOne({name:_name}).exec();
    // 如果用户名已存在
    if(user) {
      ctx.body = {data:0};
    }else{

         user = new User(userNew);           // 生成用户数据
          await user.save();
            ctx.session.user = user;         // 将当前登录用户名保存到session中
            ctx.body = {data:user};       // 注册成功
      //var captchaB = ctx.session.captchaA
      // 验证码存在
      /*if (captchaB) {
        if(_captcha.toLowerCase() !== captchaB.toLowerCase()) {
          ctx.body = {data:1};             // 输入的验证码不相等
        }else {
          // 数据库中没有该用户名，将其数据生成新的用户数据并保存至数据库
          user = new User(_user);            // 生成用户数据
          await user.save();
            ctx.session.user = user;         // 将当前登录用户名保存到session中
            ctx.body = {data:2};       // 注册成功
            
        }
      }*/
    }
})
router.get('/', async function(ctx,next) {
   await ctx.render('index',{title:'Koa'})
});
router.get('introduce', async function(ctx,next) {
   await ctx.render('introduce',{title:'Koa'})
});
module.exports = router;