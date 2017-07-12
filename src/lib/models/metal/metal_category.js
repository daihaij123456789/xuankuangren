'use strict';

var mongoose = require('mongoose'),
    MetalCategorySchema = require('../../schemas/metal/metal_category');

// 使用mongoose的模型方法编译生成模型
var MetalCategory = mongoose.model('MetalCategory',MetalCategorySchema);

// 将模型构造函数导出
module.exports = MetalCategory;