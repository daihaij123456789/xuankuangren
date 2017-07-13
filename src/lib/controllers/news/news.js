var _ = require('lodash'); // 该模块用来对变化字段进行更新
var NewsXK = require('../../models/news/news');
var NewsCategory  = require('../../models/news/news_category');

/* 新闻录入 */
exports.newsInput = async function(ctx,next) {
  var news = ctx.request.body.fields.json;
  var newsObj = JSON.parse(news);
  if (newsObj.title) {
        // 查找该新闻名称是否已存在
       var _news =await NewsXK.findOne({ title: newsObj.title }).exec();
            if (_news) {
                console.log('新闻已存在');
                _news = _.extend(_news,newsObj);
                // 查找新闻分类是否已存在
               var _categoryName = await NewsCategory.findOne({ name: newsObj.type }).exec();
                    if (_categoryName) {
                        console.log('新闻分类已存在');
                        _categoryName.news.push(_news._id);
                        await _categoryName.save();
                        await _news.save();
                        ctx.body = {data:1};
                    } else {
                        // 创建新的新闻分类
                        var category = new NewsCategory({
                            name: newsObj.type,
                            news: [_news._id]
                        });
                        // 保存新创建的新闻分类
                       await category.save();
                            // 将新创建的新闻保存，category的ID值为对应的分类ID值
                        _news.category = category._id;
                        await _news.save();
                        ctx.body = {data:1};
                    }
                // 如果没有选择新闻所属分类 重定向到当前页
                    
            } else {
                // 创建一个新新闻数据
                var _newNews = new NewsXK(newsObj);
                   var _categoryName = await NewsCategory.findOne({ name: newsObj.type }).exec();
                      if (_categoryName) {
                          console.log('新闻分类已存在');
                          _categoryName.news.push(_newNews._id);
                          await _categoryName.save();
                          await _newNews.save();
                          ctx.body = {data:1};
                      } else {
                          // 创建新的新闻分类
                          var category = new NewsCategory({
                              name: newsObj.type,
                              news: [_newNews._id]
                          });
                          // 保存新创建的新闻分类
                         await category.save();
                              // 将新创建的新闻保存，category的ID值为对应的分类ID值
                          _newNews.category = category._id;
                          await _newNews.save();
                          ctx.body = {data:1};
                      }
            }
    }
}

/*新闻列表*/
exports.newsList = async function(ctx,next) {
    var news = await NewsXK.find({}).exec();
    ctx.body = {news}
}


/*删除新闻*/
exports.delNews= async function(ctx,next) {
  var id = ctx.params.id
  if(id){
    await NewsXK.remove({_id:id}).exec();
    ctx.body = {data:1}
  }else{
   ctx.body = {data:0}
  }
   
}
/*修改新闻*/
exports.modifyNews = async function(ctx,next) {
  var id = ctx.params.id;
  var news = ctx.request.body.fields.json;
  var newsObj = JSON.parse(news);

  if(id){
    var _newNews = await NewsXK.findOne({_id:id}).exec();
    _newNews = _.extend(_newNews,newsObj)
    await _newNews.save();
        if (newsObj.type) {
            // 查找新闻分类是否已存在
           var _categoryName = await NewsCategory.findOne({ name: newsObj.type }).exec();
                if (_categoryName) {
                    console.log('新闻分类已存在');
                    _categoryName.news.push(_newNews._id);
                    await _categoryName.save()
                    ctx.body = {data:1};
                } else {
                    // 创建新的新闻分类
                    var category = new NewsCategory({
                        name: newsObj.type,
                        news: [_newNews._id]
                    });
                    // 保存新创建的新闻分类
                   await category.save();
                        // 将新创建的新闻保存，category的ID值为对应的分类ID值
                    _newNews.category = category._id;
                    await _newNews.save();
                    ctx.body = {data:1};
                }
            // 如果没有选择新闻所属分类 重定向到当前页
        } else {
          console.log('分类没有');
            ctx.body = {data:2};
        }
  }else{
   ctx.body = {data:0}
  }
   
}

exports.getNews = async function(ctx,next) {
  var id = ctx.params.id;
  if(id){
    var news = await NewsXK.findOne({_id:id}).exec();
    ctx.body = {news};
  }else{
   ctx.body = {data:0}
  }
}