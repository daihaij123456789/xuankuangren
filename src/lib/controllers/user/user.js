var _ = require('lodash'); // 该模块用来对变化字段进行更新
var User = require('../../models/user/user');

/* 用户登陆 */
exports.signIn = async function(ctx,next) {
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
        ctx.session.user = user;   // 将当前登录用户名保存到session中
        ctx.body = {data:user};
        
      }else {
        // 账户名和密码不匹
        ctx.body = {data:1};
      }
    }
}

/*用户注册*/
exports.signUp = async function(ctx,next) {
    // 获取post请求中的用户数据
    var user1 = ctx.request.body.fields.json;
    var _user = JSON.parse(user1);
    var userNew = {
      name:_user.r_userName,
      password:_user.r_password
    }
    var _name = userNew.name || '';;
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
    }
}

/*用户列表页面*/
exports.getUserList = async function(ctx,next) {
   var users = await User.find({}).exec();
   ctx.body = {users}
}
/*删除用户*/
exports.delUser = async function(ctx,next) {
  var id = ctx.params.id
  if(id){
    await User.remove({_id:id}).exec();
    ctx.body = {data:1}
  }else{
   ctx.body = {data:0}
  }
   
}
/*修改用户*/
exports.modifyUser = async function(ctx,next) {
  var id = ctx.params.id;
  var user = ctx.request.body.fields.json;
  var userObj = JSON.parse(user);
  

  if(id){
    var user = await User.findOne({_id:id}).exec();
    var userObjNew = {
    role:Number(userObj.role)
    }
    user = _.extend(user,userObjNew)
    await user.save();
    ctx.body = {data:1}
  }else{
   ctx.body = {data:0}
  }
   
}


































