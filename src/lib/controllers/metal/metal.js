var _ = require('lodash'); // 该模块用来对变化字段进行更新
var Meatl = require('../../models/metal/metal');
var MetalCategory  = require('../../models/metal/metal_category');

/* 金属录入 */
exports.metalInput = async function(ctx,next) {
  var metal = ctx.request.body.fields.json;
  var metalObj = JSON.parse(metal);
  if (metalObj.name) {
        // 查找该金属名称是否已存在
       var _metal =await Meatl.findOne({ name: metalObj.name }).exec();
            if (_metal) {
                console.log('金属已存在');
                _metal = _.extend(_metal,metalObj);
                   var _categoryName = await MetalCategory.findOne({ name: metalObj.type }).exec();
                        if (_categoryName) {
                            console.log('金属分类已存在');
                            if(_categoryName.metals.indexOf(_metal._id) == -1){
                               _categoryName.metals.push(_metal._id);
                               await _categoryName.save();
                            }
                           
                            await _metal.save();
                            ctx.body = {data:1};
                        } else {
                            // 创建新的金属分类
                            var category = new MetalCategory({
                                name: metalObj.type,
                                metals: [_metal._id]
                            });
                            // 保存新创建的金属分类
                           await category.save();
                                // 将新创建的金属保存，category的ID值为对应的分类ID值
                            _metal.category = category._id;
                            await _metal.save();
                            ctx.body = {data:1};
                        }
            } else {
                // 创建一个新金属数据
                var _newMetal = new Meatl(metalObj);
                   var _categoryName = await MetalCategory.findOne({ name: metalObj.type }).exec();
                        if (_categoryName) {
                            console.log('金属分类已存在');
                            _categoryName.metals.push(_newMetal._id);
                            await _categoryName.save();
                            await _newMetal.save();
                            ctx.body = {data:1};
                        } else {
                            // 创建新的金属分类
                            var category = new MetalCategory({
                                name: metalObj.type,
                                metals: [_newMetal._id]
                            });
                            // 保存新创建的金属分类
                           await category.save();
                                // 将新创建的金属保存，category的ID值为对应的分类ID值
                            _newMetal.category = category._id;
                            await _newMetal.save();
                            ctx.body = {data:1};
                        }
            }
    }
}

/*金属列表*/
exports.metalList = async function(ctx,next) {
    var metal = await Meatl.find({}).exec();
    ctx.body = {metal}
}


/*删除金属*/
exports.delMetal= async function(ctx,next) {
  var id = ctx.params.id
  if(id){
    await Meatl.remove({_id:id}).exec();
    ctx.body = {data:1}
  }else{
   ctx.body = {data:0}
  }
   
}
/*修改金属*/
exports.modifyMetal = async function(ctx,next) {
  var id = ctx.params.id;
  var metal = ctx.request.body.fields.json;
  var metalObj = JSON.parse(metal);

  if(id){
    var _newMetal = await Meatl.findOne({_id:id}).exec();
    _newMetal = _.extend(_newMetal,metalObj)
    
        if (metalObj.type) {
            // 查找金属分类是否已存在
           var _categoryName = await MetalCategory.findOne({ name: metalObj.type }).exec();
                if (_categoryName) {
                    console.log('金属分类已存在');
                    if(_categoryName.metals.indexOf(_newMetal._id) == -1){
                      _categoryName.metals.push(_newMetal._id);
                      await _categoryName.save();
                    }
                    
                    await _newMetal.save();
                    ctx.body = {data:1};
                } else {
                    // 创建新的金属分类
                    var category = new MetalCategory({
                        name: metalObj.type,
                        metals: [_newMetal._id]
                    });
                    // 保存新创建的金属分类
                   await category.save();
                        // 将新创建的金属保存，category的ID值为对应的分类ID值
                    _newMetal.category = category._id;
                    await _newMetal.save();
                    ctx.body = {data:1};
                }
            // 如果没有选择金属所属分类 重定向到当前页
        } else {
          console.log('分类没有');
            ctx.body = {data:2};
        }
  }else{
   ctx.body = {data:0}
  }
   
}

exports.getMetal = async function(ctx,next) {
  var id = ctx.params.id;
  if(id){
    var metal = await Meatl.findOne({_id:id}).exec();
    ctx.body = {metal};
  }else{
   ctx.body = {data:0}
  }
}






