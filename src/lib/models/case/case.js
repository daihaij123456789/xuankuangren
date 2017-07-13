
var mongoose = require('mongoose');

var CaseSchema = require('../../schemas/case/case')
var Case = mongoose.model('Case', CaseSchema)

module.exports = Case