
var mongoose = require('mongoose');

var NewsXKSchema = require('../../schemas/news/news')
var NewsXK = mongoose.model('NewsXK', NewsXKSchema)

module.exports = NewsXK