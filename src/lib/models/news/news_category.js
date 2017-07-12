'use strict';

var mongoose = require('mongoose'),
    NewsCategorySchema = require('../../schemas/news/news_category');

// 使用mongoose的模型方法编译生成模型
var NewsCategory = mongoose.model('Category',NewsCategorySchema);

// 将模型构造函数导出
module.exports = NewsCategory;