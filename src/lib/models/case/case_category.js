'use strict';

var mongoose = require('mongoose'),
    CaseCategorySchema = require('../../schemas/case/case_category');

// 使用mongoose的模型方法编译生成模型
var CaseCategory = mongoose.model('CaseCategory',CaseCategorySchema);

// 将模型构造函数导出
module.exports = CaseCategory;