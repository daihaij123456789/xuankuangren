
var mongoose = require('mongoose');

var MetalSchema = require('../../schemas/metal/metal')
var Metal = mongoose.model('Metal', MetalSchema)

module.exports = Metal