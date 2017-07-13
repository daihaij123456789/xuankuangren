var _ = require('lodash'); // 该模块用来对变化字段进行更新
var Case = require('../../models/case/case');
var CaseCategory  = require('../../models/case/case_category');

/* 新闻录入 */
exports.caseInput = async function(ctx,next) {
  var caseNewObj = ctx.request.body.fields.json;
  var caseObj = JSON.parse(caseNewObj);
  if (caseObj.name) {
        // 查找该新闻名称是否已存在
       var _case =await Case.findOne({ name: caseObj.name }).exec();
            if (_case) {
                console.log('金属已存在');
                _case = _.extend(_case,caseObj);
                   var _categoryName = await CaseCategory.findOne({ name: caseObj.type }).exec();
                        if (_categoryName) {
                            console.log('金属分类已存在');
                            if(_categoryName.cases.indexOf(_case._id) == -1){
                              _categoryName.cases.push(_case._id);
                              await _categoryName.save();
                            }
                            
                            await _case.save();
                            ctx.body = {data:1};
                        } else {
                            // 创建新的新闻分类
                            var category = new CaseCategory({
                                name: caseObj.type,
                                cases: [_case._id]
                            });
                            // 保存新创建的新闻分类
                           await category.save();
                                // 将新创建的新闻保存，category的ID值为对应的分类ID值
                            _case.category = category._id;
                            await _case.save();
                            ctx.body = {data:1};
                        }
            } else {
                // 创建一个新新闻数据
                var _newCase = new Case(caseObj);
                   var _categoryName = await CaseCategory.findOne({ name: caseObj.type }).exec();
                        if (_categoryName) {
                            console.log('金属分类已存在');
                            if(_categoryName.cases.indexOf(_newCase._id) == -1){
                              _categoryName.cases.push(_newCase._id);
                              await _categoryName.save();
                            }
                            
                            await _newCase.save();
                            ctx.body = {data:1};
                        } else {
                            // 创建新的新闻分类
                            var category = new CaseCategory({
                                name: caseObj.type,
                                cases: [_newCase._id]
                            });
                            // 保存新创建的新闻分类
                           await category.save();
                                // 将新创建的新闻保存，category的ID值为对应的分类ID值
                            _newCase.category = category._id;
                            await _newCase.save();
                            ctx.body = {data:1};
                        }
            }
    }
}

/*新闻列表*/
exports.caseList = async function(ctx,next) {
    var caseNewObj = await Case.find({}).exec();
    ctx.body = {caseNewObj}
}


/*删除新闻*/
exports.delCase= async function(ctx,next) {
  var id = ctx.params.id
  if(id){
    await Case.remove({_id:id}).exec();
    ctx.body = {data:1}
  }else{
   ctx.body = {data:0}
  }
   
}
/*修改新闻*/
exports.modifyCase = async function(ctx,next) {
  var id = ctx.params.id;
  var caseNewObj = ctx.request.body.fields.json;
  var caseObj = JSON.parse(caseNewObj);

  if(id){
    var _newCase = await Case.findOne({_id:id}).exec();
    _newCase = _.extend(_newCase,caseObj)
    await _newCase.save();
        if (caseObj.type) {
            // 查找新闻分类是否已存在
           var _categoryName = await CaseCategory.findOne({ name: caseObj.type }).exec();
                if (_categoryName) {
                    console.log('新闻分类已存在');
                    if(_categoryName.cases.indexOf(_newCase._id) == -1){
                      _categoryName.cases.push(_newCase._id);
                      await _categoryName.save()
                    }
                    await _newCase.save();
                    ctx.body = {data:1};
                } else {
                    // 创建新的新闻分类
                    var category = new CaseCategory({
                        name: caseObj.type,
                        cases: [_newCase._id]
                    });
                    // 保存新创建的新闻分类
                   await category.save();
                        // 将新创建的新闻保存，category的ID值为对应的分类ID值
                    _newCase.category = category._id;
                    await _newCase.save();
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

exports.getCase = async function(ctx,next) {
  var id = ctx.params.id;
  if(id){
    var caseNewObj = await Case.findOne({_id:id}).exec();
    ctx.body = {caseNewObj};
  }else{
   ctx.body = {data:0}
  }
}




