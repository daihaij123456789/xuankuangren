var router = require('koa-router')();

// 首页 —— 广告（超值特惠）
var User = require('../lib/models/user/user');
var NewsXK = require('../lib/models/news/news');
var Category  = require('../lib/models/news/news_category');
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


router.get('api/introduce', async function(ctx,next) {
    const type = ctx.query.type;
    var categories = await Category
      .findOne({name:type})
      .populate({
        path:'news',
        select:'title date'
      })
      .exec();
      var s = {"title":"a","date":"s","thumbnail_pic_s":"d","url":"f","type":"q"}
      // var news = await NewsXK
      // .find({})
      // .exec()
    ctx.body = {categories}
});
router.post('api/user/signin', async function(ctx,next) {
  var user1 = ctx.request.body.fields.json;
  var _user = JSON.parse(user1);
  var userNew = {
    name:_user.userName,
    password:_user.password
  };
  var _password = userNew.password || ''
  var user = await User.findOne({name:userNew.name}).exec();
    if(!user) {
      ctx.body = {data:0};                 // 用户不存在
    }else{
      var isMatch = await user.comparePassword(_password);
      // 密码匹配
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
    }
    // 使用user实例方法对用户名密码进行比较
    
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

router.post('api/introduce/admin/news', async function(ctx,next) {
  var news = ctx.request.body.fields.json;
  var newsObj = JSON.parse(news);
  
  console.log(newsObj);
  if (newsObj.title) {
        // 查找该电影名称是否已存在
       var _news =await NewsXK.findOne({ title: newsObj.title }).exec();
            if (_news) {
                console.log('电影已存在');
                ctx.body = {data:0};
            } else {
                // 创建一个新电影数据
                var _newNews = new NewsXK(newsObj);
                await _newNews.save();
                    // // 如果选择了电影所属的电影分类
                    // if (categoryId) {
                    //     var _category =yield Category.findById({_id:categoryId}).exec();
                    //         _category.movies.push(_newNews._id);
                    //         yield _categoryry.save()
                    //             res.redirect('/movie/' + _newNews._id);
                    //     // 输入新的电影分类
                    //} else 
                    if (newsObj.type) {
                        // 查找电影分类是否已存在
                       var _categoryName = await Category.findOne({ name: newsObj.type }).exec();
                            if (_categoryName) {
                                console.log('新闻分类已存在');
                                _categoryName.news.push(_newNews._id);
                                await _categoryName.save()
                                ctx.body = {data:1};
                            } else {
                                // 创建新的电影分类
                                var category = new Category({
                                    name: newsObj.type,
                                    news: [_newNews._id]
                                });
                                // 保存新创建的电影分类
                               await category.save();
                                    // 将新创建的电影保存，category的ID值为对应的分类ID值
                                _newNews.category = category._id;
                                await _newNews.save();
                                ctx.body = {data:2};
                            }
                        // 如果没有选择电影所属分类 重定向到当前页
                    } else {
                      console.log('分类没有');
                        ctx.body = {data:3};
                    }
            }
        // 没有输入电影名称 而只输入了电影分类名称
    }
});

module.exports = router;